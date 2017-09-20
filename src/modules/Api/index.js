/**
 * @flow
 */

'use strict';

import {API_CONCURRENCY} from '../../constants/configs';
import getPriority from '../../constants/methods/priority';
import getDurability from '../../constants/methods/durable';
import isInsecure from '../../constants/methods/insecure';
import isGuestMethod from '../../constants/methods/guest';
import RequestWrapper from './RequestWrapper';
import Client from '../Api/Client';
import FastPriorityQueue from 'fastpriorityqueue';
import {msSleep, randomString} from '../../utils/core';
import {Proto} from '../../modules/Proto';
import {ErrorResponse} from '../Proto/index';
import {ERROR_TIMEOUT} from './errors/index';
import ServerError from '../Error/ServerError';
import 'es6-symbol/implement';
import {mapReact} from '../Error/index';

const apiSingleton = Symbol();
const apiSingletonEnforcer = Symbol();

const pendingComparator = function(a, b) {
  return a.priority > b.priority;
};
let pending = new FastPriorityQueue(pendingComparator);
let rejectWeakPendingIsRunning = false;
let pollPendingIsRunning = false;
const running = new Map();


export const HANDLER_PRECEDENCE = {
  BEFORE: Symbol('BEFORE'),
  AFTER: Symbol('AFTER'),
  NONE: Symbol('NONE'),
};

export const CLIENT_STATUS = {
  CONNECTING: Symbol('CONNECTING'),
  CONNECTED: Symbol('CONNECTED'),
  SECURED: Symbol('SECURED'),
  LOGGED_IN: Symbol('LOGGED_IN'),
  DISCONNECTED: Symbol('DISCONNECTED'),
};

export default class Api {

  constructor(enforcer) {
    if (enforcer !== apiSingletonEnforcer) {
      throw new Error('Cannot construct singleton');
    }
  }

  /**
   * Get Api instance
   * @returns {Api}
   */
  static get instance() {
    if (!this[apiSingleton]) {
      this[apiSingleton] = new Api(apiSingletonEnforcer);
      Client.instance;
    }
    return this[apiSingleton];
  }

  /**
   * @param {number} actionId
   * @param {object} proto
   * @param {number|null} priority
   * @param {enum} handlerPrecedence
   * @param {bool|null} durable
   * @returns {Promise}
   */
  static invoke(actionId,
    proto,
    priority = null,
    handlerPrecedence = HANDLER_PRECEDENCE.BEFORE,
    durable = null) {
    if (30000 < actionId) {
      throw new Error(`Invalid actionId #${actionId}`);
    }

    if (!proto) {
      throw new Error(`Proto is required for actionId #${actionId}`);
    }

    if (!priority) {
      priority = getPriority(actionId);
    }

    if (durable == null) {
      durable = getDurability(actionId);
    }

    return new Promise((resolve, reject) => {
      const wrapper = new RequestWrapper(
        resolve,
        reject,
        Api.instance.__done.bind(Api.instance),
        actionId,
        proto,
        priority,
        handlerPrecedence,
        durable
      );
      Api.instance.__schedule(wrapper);
    });
  }

  /**
   * @callback errorMapReactionCallback
   * @param {number|string} id Element id
   * @param {{id:string,defaultMessage:string,description:string,values:object}} error
   */

  /**
   * @param {number} actionId
   * @param {object} proto
   * @param {errorMapReactionCallback} errorMapReactionCallback
   * @param {object.<string,number|string>} errorMapTable Table that map errorId to elementId
   * @param {number|null} priority
   * @param {enum} handlerPrecedence
   * @param {bool|null} durable
   * @returns {Promise}
   */
  static invokeMapError(actionId,
    proto,
    errorMapReactionCallback,
    errorMapTable,
    priority = null,
    handlerPrecedence = HANDLER_PRECEDENCE.BEFORE,
    durable = null) {
    if (30000 < actionId) {
      throw new Error(`Invalid actionId #${actionId}`);
    }

    if (!proto) {
      throw new Error(`Proto is required for actionId #${actionId}`);
    }

    if (!errorMapReactionCallback) {
      throw new Error(`errorMapReactionCallback is required for actionId #${actionId}`);
    }

    if (!errorMapTable) {
      throw new Error(`errorMapTable is required for actionId #${actionId}`);
    }

    if (!priority) {
      priority = getPriority(actionId);
    }

    if (durable == null) {
      durable = getDurability(actionId);
    }

    return new Promise((resolve, reject) => {
      const wrapper = new RequestWrapper(
        resolve,
        reject,
        Api.instance.__done.bind(Api.instance),
        actionId,
        proto,
        priority,
        handlerPrecedence,
        durable
      );

      wrapper.errorReactionFunction = mapReact(errorMapTable, errorMapReactionCallback);

      Api.instance.__schedule(wrapper);
    });
  }

  getRequestWrapper(id) {
    return running.get(id);
  }

  __schedule(wrapper) {
    if (
      Client.instance.isLoggedIn
      ||
      (Client.instance.isOnline && isInsecure(wrapper.actionId))
      ||
      (Client.instance.isSecure && isGuestMethod(wrapper.actionId))
    ) {
      if (running.size < API_CONCURRENCY) {
        this._run(wrapper);
      } else {
        pending.add(wrapper);
      }
    } else if (wrapper.durable) {
      pending.add(wrapper);
    } else {
      const errorResponse = new ErrorResponse();
      errorResponse.setMajorCode(ERROR_TIMEOUT);
      errorResponse.setMinorCode(3);
      wrapper.reject(new ServerError(errorResponse, wrapper.actionId));
    }
  }

  _run(wrapper) {
    const request = new Proto.Request();
    request.setId(randomString(10));

    wrapper.request.setRequest(request);

    running.set(request.getId(), wrapper);
    Client.instance.sendRequest(wrapper);
  }

  __done(wrapper) {
    if (wrapper.request) {
      running.delete(wrapper.request.getRequest().getId());
      this.__pollPending();
    }
  }

  __rejectRunning() {
    running.forEach((wrapper) => {
      const errorResponse = new ErrorResponse();
      errorResponse.setMajorCode(ERROR_TIMEOUT);
      errorResponse.setMinorCode(2);
      wrapper.reject(new ServerError(errorResponse, wrapper.actionId));
    });
  }

  __rejectWeakPending() {
    if (rejectWeakPendingIsRunning) {
      return;
    }
    try {
      rejectWeakPendingIsRunning = true;
      pending.trim();
      const wrappers = pending.array;

      pending = new FastPriorityQueue(pendingComparator);
      wrappers.forEach(function(wrapper) {
        if (wrapper.durable) {
          pending.add(wrapper);
        } else {
          const errorResponse = new ErrorResponse();
          errorResponse.setMajorCode(ERROR_TIMEOUT);
          errorResponse.setMinorCode(4);
          wrapper.reject(new ServerError(errorResponse, wrapper.actionId));
        }
      });
    } finally {
      rejectWeakPendingIsRunning = false;
    }
  }

  async __pollPending() {
    if (pollPendingIsRunning) {
      return;
    }

    try {
      pollPendingIsRunning = true;

      while (running.size < API_CONCURRENCY && !pending.isEmpty() && Client.instance.isOnline) {
        const wrapper = pending.poll();

        if (
          Client.instance.isLoggedIn
          ||
          (Client.instance.isOnline && isInsecure(wrapper.actionId))
          ||
          (Client.instance.isSecure && isGuestMethod(wrapper.actionId))
        ) {
          this._run(wrapper);
        } else {
          if (0 < wrapper.priority) {
            wrapper.priority = parseInt(wrapper.priority / 2, 10);
          } else if (wrapper.priority === 0) {
            wrapper.priority = -1;
          } else {
            wrapper.priority *= 2;
          }
          pending.add(wrapper);
          await msSleep(100);
        }
      }

      pending.trim();
    } finally {
      pollPendingIsRunning = false;
    }
  }
}