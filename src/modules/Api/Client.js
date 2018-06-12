/**
 * @flow
 */

'use strict';

import WebSocket from 'react-native-web-socket';
import {sleep} from '../../utils/core';
import {WEBSOCKET_ENDPOINT, WEBSOCKET_RECONNECT_INTERVAL_SEC} from '../../constants/configs';
import protoTable from '../Proto';
import handlerTable from '../Handler';
import Api, {
  API_RESPONSE_ACTION_ID_OFFSET, changeSessionUid, CLIENT_STATUS, HANDLER_PRECEDENCE,
  setServerTime,
} from './index';
import RequestWrapper from './RequestWrapper';
import ClientError from '../Error/ClientError';
import ServerError from '../Error/ServerError';
import isInsecure from '../../constants/methods/insecure';
import forge from 'node-forge';
import {arrayBufferToString, stringToArrayBuffer} from '../../utils/buffer';
import {clientStatusChanged} from '../../actions/api';
import store from '../../configureStore';
import {getCacheId, getCacheRevokeIds} from '../../constants/methods/cacheable';
import CacheableMethod from '../../models/CacheableMethod';

const singleton = Symbol();
const singletonEnforcer = Symbol();

export default class Client {

  _socket: ?WebSocket;
  _keepAlive = true;
  _secure = false;
  _loggedIn = false;
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

  get isLoggedIn() {
    return (this.isOnline && this._loggedIn);
  }

  set keepAlive(value) {
    this._keepAlive = value;
  }

  set secure(value) {
    this._secure = value;
  }

  set loggedIn(value) {
    this._loggedIn = value;
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
      return Promise.reject();
    }

    this.secure = false;
    this.loggedIn = false;
    store.dispatch(clientStatusChanged(CLIENT_STATUS.CONNECTING));

    return new Promise(function(resolve, reject) {
      this._socket = new WebSocket(WEBSOCKET_ENDPOINT);
      this._socket.binaryType = 'arraybuffer';
      this._socket.onopen = function() {
        changeSessionUid();
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

    this.__processMessage(responseActionId, new Uint8Array(data, 2), true);
  }

  /**
   * @param {number} responseActionId
   * @param {Uint8Array} payload
   * @param {boolean} isFromServer
   * @param {RequestWrapper|null} inputWrapper
   */
  __processMessage(responseActionId, payload, isFromServer, inputWrapper = null) {
    if (protoTable.hasOwnProperty(responseActionId)) {
      const responseProto = protoTable[responseActionId].deserializeBinary(payload);

      let wrapper = inputWrapper;
      if (!wrapper) {
        if (responseProto.getResponse()) {
          setServerTime(responseProto.getResponse().getTimestamp());
        }
        if (responseProto.getResponse() && responseProto.getResponse().getId()) {
          wrapper = Api.instance.getRequestWrapper(responseProto.getResponse().getId());
          if (!wrapper) {
            return;
          }
        } else {
          const requestWrapperPromise = new Promise((resolve, reject) => {
            wrapper = new RequestWrapper(
              resolve,
              reject,
              () => {
              },
              (responseActionId > 30001 && responseActionId < 60000) ? (responseActionId - API_RESPONSE_ACTION_ID_OFFSET) : undefined,
              undefined,
              1,
              HANDLER_PRECEDENCE.BEFORE,
              false
            );
          });
          wrapper.promise = requestWrapperPromise;
        }
      }

      let promise = new Promise((resolve, reject) => {
        if (responseActionId === 0) {
          const reason = new ServerError(responseProto, wrapper.actionId);
          try {
            reject(reason);
          } finally {
            try {
              wrapper.reject(reason);
            } finally {
              this.__runHandler(responseActionId, responseProto, wrapper);
            }
          }
        } else {
          resolve(responseProto);
        }
      });


      switch (wrapper.handlerPrecedence) {
        case HANDLER_PRECEDENCE.BEFORE:
          promise.then(responseProto => {
            try {
              this.__runHandler(responseActionId, responseProto, wrapper);
            } finally {
              wrapper.resolve(responseProto);
            }
          });
          break;
        case HANDLER_PRECEDENCE.AFTER:
          promise.then(responseProto => {
            wrapper.resolve(responseProto);
          }).then(() => {
            this.__runHandler(responseActionId, responseProto, wrapper);
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

      if (isFromServer && responseActionId !== 0) {
        const cacheId = getCacheId(wrapper);
        if (cacheId) {
          CacheableMethod.saveToQueue(cacheId, payload);
        }

        const cacheRevokeIds = getCacheRevokeIds(wrapper, responseProto);
        if (cacheRevokeIds) {
          cacheRevokeIds.forEach(function(cacheRevokeId) {
            CacheableMethod.revokeToQueue(cacheRevokeId);
          });

        }
      }

    } else {
      console.warn('Unsupported method ' + responseActionId);
    }
  }

  close() {
    if (this._socket) {
      this._socket.close();
    }
  }

  async _onClose(event) {
    changeSessionUid();
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

      this._socket.send(pack, !this.isSecure);// TODO [Amerehie] - 7/24/2017 4:27 PM - check time takes
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
   */
  __runHandler(responseActionId, responseProto, wrapper) {
    const handlerClass = handlerTable[responseActionId];
    if (handlerClass) {
      const handler = new handlerClass(responseProto, wrapper.request);
      handler.handle();
    } else {
      console.warn('Handler class not found ' + responseActionId);
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
      const buf = forge.util.createBuffer(data.slice(index, index + chunkSize));
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
      const buf = forge.util.createBuffer(encryptedBytes.slice(index, index + chunkSize));
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
