/**
 * @flow
 */

'use strict';

import {API_AGGREGATE_DELAY_MS, API_CONCURRENCY} from '../../constants/configs';
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
import {mapReact} from '../Error/index';
import {getCacheId} from '../../constants/methods/cacheable';
import CacheableMethod from '../../models/CacheableMethod';
import protoTable from '../Proto';
import {getAggregateId} from '../../constants/methods/aggregate';
import {floor} from 'lodash';

const apiSingleton = Symbol();
const apiSingletonEnforcer = Symbol();

const pendingComparator = function(a, b) {
  return a.priority > b.priority;
};
let pending = new FastPriorityQueue(pendingComparator);
let rejectWeakPendingIsRunning = false;
let pollPendingIsRunning = false;
const running = new Map();

/**
 * @type {Map.<string,Promise>}
 */
let aggregate = new Map();


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

export const API_RESPONSE_ACTION_ID_OFFSET = 30000;

let __sessionUid = (new Date()).getTime();

/**
 * @return {number}
 */
export function getSessionUid() {
  return __sessionUid;
}

/**
 * @return {number}
 */
export function changeSessionUid() {
  __sessionUid = (new Date()).getTime();
  return __sessionUid;
}

let _serverTime = floor((new Date()).getTime() / 1000);

/**
 * @param {number} time
 */
export function setServerTime(time) {
  _serverTime = time;
}

/**
 * @returns {number}
 */
export function getServerTime() {
  return _serverTime;
}

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

    /**
     * @type {RequestWrapper}
     */
    let wrapper;
    const promise = new Promise((resolve, reject) => {
      wrapper = new RequestWrapper(
        resolve,
        reject,
        Api.instance.__done.bind(Api.instance),
        actionId,
        proto,
        priority,
        handlerPrecedence,
        durable
      );
    });
    wrapper.promise = promise;
    Api.instance.__schedule(wrapper);
    return promise;
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

    /**
     * @type {RequestWrapper}
     */
    let wrapper;
    const promise = new Promise((resolve, reject) => {
      wrapper = new RequestWrapper(
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
    });
    wrapper.promise = promise;
    Api.instance.__schedule(wrapper);
    return promise;
  }

  getRequestWrapper(id) {
    return running.get(id);
  }

  async __schedule(wrapper) {
    const aggregateId = getAggregateId(wrapper);

    let aggregatePromise = null;
    if (aggregateId && aggregate.has(aggregateId)) {
      aggregatePromise = aggregate.get(aggregateId);
    }

    if (aggregatePromise && aggregatePromise !== wrapper.promise) {
      wrapper.resolve(aggregatePromise);
    } else {
      if (aggregateId) {
        aggregate.set(aggregateId, wrapper.promise);
      }
      const cacheId = getCacheId(wrapper);

      /**
       * @type {null|CachedMethodResponse}
       */
      let cachedResponse = null;
      if (cacheId) {
        try {
          cachedResponse = await CacheableMethod.loadFromQueue(cacheId);
        } catch (e) {
          //No cache data is available
        }
      }

      if (
        Client.instance.isLoggedIn
        ||
        (Client.instance.isOnline && isInsecure(wrapper.actionId))
        ||
        (Client.instance.isSecure && isGuestMethod(wrapper.actionId))
      ) {
        if (cachedResponse && cachedResponse.sessionUid === getSessionUid()) {
          this._fakeRun(wrapper, cachedResponse.data);
        } else if (running.size < API_CONCURRENCY) {
          this._run(wrapper);
        } else {
          pending.add(wrapper);
        }
      } else if (wrapper.durable) {
        pending.add(wrapper);

        if (wrapper.handlerPrecedence !== HANDLER_PRECEDENCE.NONE) {
          const cachedResponseActionId = wrapper.actionId + API_RESPONSE_ACTION_ID_OFFSET;
          if (cachedResponse && protoTable.hasOwnProperty(cachedResponseActionId)) {
            const responseProto = protoTable[cachedResponseActionId].deserializeBinary(cachedResponse.data);
            Client.instance.__runHandler(cachedResponseActionId, responseProto, wrapper);
          }
        }
      } else if (cachedResponse) {
        this._fakeRun(wrapper, cachedResponse.data);
      } else {
        const errorResponse = new ErrorResponse();
        errorResponse.setMajorCode(ERROR_TIMEOUT);
        errorResponse.setMinorCode(3);
        wrapper.reject(new ServerError(errorResponse, wrapper.actionId));
      }
    }
  }

  _fakeRun(wrapper, payload) {
    try {
      this._initRun(wrapper);
      Client.instance.__processMessage(wrapper.actionId + API_RESPONSE_ACTION_ID_OFFSET, payload, false, wrapper);
    } finally {
      wrapper.startTimeout();
    }
  }

  _initRun(wrapper) {
    const request = new Proto.Request();
    request.setId(randomString(10));

    wrapper.request.setRequest(request);

    running.set(request.getId(), wrapper);
  }

  _run(wrapper) {
    this._initRun(wrapper);
    Client.instance.sendRequest(wrapper);
  }

  __done(wrapper) {
    if (wrapper.request) {
      if (wrapper.request.getRequest()) {
        running.delete(wrapper.request.getRequest().getId());
      }
      const aggregateId = getAggregateId(wrapper);
      if (aggregateId) {
        if (aggregate.has(aggregateId)) {
          this.__pollPending();

          setTimeout(() => {
            aggregate.delete(aggregateId);
          }, API_AGGREGATE_DELAY_MS);
        }
      } else {
        this.__pollPending();
      }
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
          Api.instance.__schedule(wrapper);
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
          this.__schedule(wrapper);
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

  static cleanUp() {
    this.__rejectRunning();
    aggregate = new Map();

    const wrappers = pending.array;
    pending = new FastPriorityQueue(pendingComparator);
    wrappers.forEach(function(wrapper) {
      const errorResponse = new ErrorResponse();
      errorResponse.setMajorCode(ERROR_TIMEOUT);
      errorResponse.setMinorCode(4);
      wrapper.reject(new ServerError(errorResponse, wrapper.actionId));
    });
  }
}