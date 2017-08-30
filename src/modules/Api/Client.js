/**
 * @flow
 */

'use strict';

import {sleep} from '../../utils/core';
import {WEBSOCKET_ENDPOINT, WEBSOCKET_RECONNECT_INTERVAL_SEC} from '../../constants/configs';
import protoTable from '../Proto';
import handlerTable from '../Handler';
import Api, {CLIENT_STATUS, HANDLER_PRECEDENCE} from './index';
import RequestWrapper from './RequestWrapper';
import ClientError from '../Error/ClientError';
import ServerError from '../Error/ServerError';
import isInsecure from '../../constants/methods/insecure';
import forge from 'node-forge';
import {arrayBufferToString, stringToArrayBuffer} from '../../utils/buffer';
import {clientStatusChanged} from '../../actions/api';
import store from '../../configureStore';

const singleton = Symbol();
const singletonEnforcer = Symbol();

export default class Client {

  _socket: ?WebSocket;
  _keepAlive = true;
  _secure = false;
  _symmetricKey;
  _heartbeatInterval;
  _symmetricMethod;
  _symmetricIvSize;

  constructor(enforcer) {
    if (enforcer !== singletonEnforcer) {
      throw new Error('Cannot construct singleton');
    }
    this._init();
  }

  /**
   * Get Client instance
   * @returns {Client}
   */
  static get instance() {
    if (!this[singleton]) {
      this[singleton] = new Client(singletonEnforcer);
    }
    return this[singleton];
  }

  get isOnline() {
    return (this._socket && this._socket.readyState === WebSocket.OPEN);
  }

  get isSecure() {
    return (this.isOnline && this._secure);
  }

  set keepAlive(value) {
    this._keepAlive = value;
  }

  set secure(value) {
    this._secure = value;
  }

  set symmetricKey(value) {
    this._symmetricKey = value;
  }

  set heartbeatInterval(value) {
    this._heartbeatInterval = value;
  }

  set symmetricMethod(value) {
    this._symmetricMethod = value.split('-');
  }

  set symmetricIvSize(value) {
    this._symmetricIvSize = value;
  }

  async _init() {
    try {
      await this._connect();
    } catch (e) {
      console.log(e);
    }
  }

  _connect() {
    if (!this._keepAlive) {
      return;
    }

    this.secure = false;
    store.dispatch(clientStatusChanged(CLIENT_STATUS.CONNECTING));

    return new Promise(function(resolve, reject) {
      this._socket = new WebSocket(WEBSOCKET_ENDPOINT);
      this._socket.binaryType = 'arraybuffer';
      this._socket.onopen = function() {
        store.dispatch(clientStatusChanged(CLIENT_STATUS.CONNECTED));
        resolve(true);
      };

      this._socket.onmessage = this._onMessage.bind(this);

      this._socket.onerror = function(error) {
        console.log('onerror', error);
        reject(error);
      };

      this._socket.onclose = this._onClose.bind(this);
    }.bind(this));
  }

  _onMessage(message) {
    let data = message.data;

    if (this._secure) {
      data = this._decrypt(data);
    }
    const responseActionId = new DataView(data, 0, 2).getUint16(0, true);

    if (!this._secure && !isInsecure(responseActionId)) {
      throw new ClientError(`Insecure connection cannot accept action #${responseActionId}`);
    }

    if (protoTable.hasOwnProperty(responseActionId)) {
      const responseProto = protoTable[responseActionId].deserializeBinary(new Uint8Array(data, 2));

      let wrapper;
      if (responseProto.getResponse() && responseProto.getResponse().getId()) {
        wrapper = Api.instance.getRequestWrapper(responseProto.getResponse().getId());
        if (!wrapper) {
          return;
        }
      } else {
        new Promise((resolve, reject) => {
          wrapper = new RequestWrapper(
            resolve,
            reject,
            () => {
            },
            (responseActionId > 30001 && responseActionId < 60000) ? (responseActionId - 3000) : undefined,
            undefined,
            1,
            HANDLER_PRECEDENCE.BEFORE,
            false
          );
        });
      }

      let promise = new Promise((resolve, reject) => {
        if (responseActionId === 0) {
          const reason = new ServerError(responseProto);
          try {
            reject(reason);
          } finally {
            wrapper.reject(reason);
          }
        } else {
          resolve(responseProto);
        }
      });


      switch (wrapper.handlerPrecedence) {
        case HANDLER_PRECEDENCE.BEFORE:
          promise.then(responseProto => {
            this._runHandler(responseActionId, responseProto, wrapper);
          }).catch(() => {
            // TODO [Amerehie] - 7/24/2017 12:20 PM - Log me
          }).then(() => {
            wrapper.resolve(responseProto);
          });
          break;
        case HANDLER_PRECEDENCE.AFTER:
          promise.then(responseProto => {
            wrapper.resolve(responseProto);
          }).then(() => {
            this._runHandler(responseActionId, responseProto, wrapper);
          });
          break;
        case HANDLER_PRECEDENCE.NONE:
          promise.then(responseProto => {
            wrapper.resolve(responseProto);
          });
          break;
        default:
          promise.then(() => {
            wrapper.reject(new ClientError('Unexpected HANDLER_PRECEDENCE'));
          });
      }

    } else {
      console.warn('Unsupported method ' + responseActionId);
    }
  }

  async _onClose(event) {
    store.dispatch(clientStatusChanged(CLIENT_STATUS.DISCONNECTED));

    try {
      await sleep(WEBSOCKET_RECONNECT_INTERVAL_SEC);
      await this._connect();
    } catch (e) {
      console.log(e);
    }
  }

  /**
   * @param {RequestWrapper} wrapper
   */
  sendRequest(wrapper) {
    try {
      if (!this._secure && !isInsecure(wrapper.actionId)) {
        throw new ClientError(`Insecure connection cannot send action #${wrapper.actionId}`);
      }
      let pack = this._pack(wrapper.actionId, wrapper.request);
      if (this._secure) {
        pack = this._encrypt(pack.buffer);
      }

      this._socket.send(pack);// TODO [Amerehie] - 7/24/2017 4:27 PM - check time takes
    } finally {
      wrapper.startTimeout();
    }
  }

  /**
   * Pack
   * @param {number} actionId
   * @param {object} proto
   * @returns {Uint8Array}
   * @private
   */
  _pack(actionId, proto) {
    const actionIdData = new DataView(new ArrayBuffer(2), 0);
    actionIdData.setUint16(0, actionId, true);

    const payload = proto.serializeBinary();
    const pack = new Uint8Array(2 + payload.byteLength);
    pack.set(new Uint8Array(actionIdData.buffer));
    pack.set(payload, 2);
    return pack;
  }

  /**
   * @param {number} responseActionId
   * @param {object} responseProto
   * @param {RequestWrapper} wrapper
   * @private
   */
  _runHandler(responseActionId, responseProto, wrapper) {
    const handlerClass = handlerTable[responseActionId];
    if (handlerClass) {
      const handler = new handlerClass(responseProto);
      handler.handle();
    }
  }

  /**
   * Encrypt
   * @param {ArrayBuffer} data
   * @returns {ArrayBuffer}
   * @private
   */
  _encrypt(data) {
    const iv = forge.random.getBytesSync(this._symmetricIvSize);
    const cipher = forge.cipher.createCipher(
      this._symmetricMethod[0] + '-' + this._symmetricMethod[2],
      this._symmetricKey
    );
    cipher.start({iv: iv});
    const length = data.byteLength;
    const chunkSize = 1024 * 64;
    let index = 0;
    let encrypted = '';
    do {
      encrypted += cipher.output.getBytes();
      const buf = forge.util.createBuffer(data.slice(index, chunkSize));
      cipher.update(buf);
      index += chunkSize;
    } while (index < length);

    if (!cipher.finish()) {
      throw new Error();
    }
    encrypted += cipher.output.getBytes();
    return stringToArrayBuffer(iv + encrypted);
  }

  /**
   * Decrypt
   * @param {ArrayBuffer} data
   * @returns {ArrayBuffer}
   * @private
   */
  _decrypt(data) {
    const encryptedBytes = data.slice(this._symmetricIvSize);
    const decipher = forge.cipher.createDecipher(
      this._symmetricMethod[0] + '-' + this._symmetricMethod[2],
      this._symmetricKey
    );
    decipher.start({iv: arrayBufferToString(data.slice(0, this._symmetricIvSize))});
    const length = encryptedBytes.byteLength;
    const chunkSize = 1024 * 64;
    let index = 0;
    let decrypted = '';
    do {
      decrypted += decipher.output.getBytes();
      const buf = forge.util.createBuffer(arrayBufferToString(encryptedBytes.slice(index, chunkSize)));
      decipher.update(buf);
      index += chunkSize;
    } while (index < length);

    if (!decipher.finish()) {
      throw new Error();
    }
    decrypted += decipher.output.getBytes();
    return stringToArrayBuffer(decrypted);
  }
}