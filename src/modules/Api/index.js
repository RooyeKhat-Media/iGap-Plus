/**
 * @flow
 */

'use strict';

import {API_CONCURRENCY} from '../../constants/configs';
import getPriority from '../../constants/methods/priority';
import getDurability from '../../constants/methods/durable';
import RequestWrapper from './RequestWrapper';
import Client from '../Api/Client';
import FastPriorityQueue from 'fastpriorityqueue';
import {randomString} from '../../utils/core';
import {Request} from '../../modules/Proto/Request_pb';
import {ErrorResponse} from '../Proto/index';
import {ERROR_TIMEOUT} from './errors/index';
import ServerError from '../Error/ServerError';

const apiSingleton = Symbol();
const apiSingletonEnforcer = Symbol();

const pending = new FastPriorityQueue(function(a, b) {
  return a.priority > b.priority;
});
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
        Api.instance.__done.bind(this),
        actionId,
        proto,
        priority,
        handlerPrecedence,
        durable
      );
      Api.instance.__schedule(wrapper);
    });
  }

  getRequestWrapper(id) {
    return running.get(id);
  }

  __schedule(wrapper) {
    if (Client.instance.isOnline) {
      if (running.size < API_CONCURRENCY) {
        this._run(wrapper);
      } else {
        pending.add(wrapper);
      }
    } else if (wrapper.durable) {
      pending.add(wrapper);
    }
  }

  _run(wrapper) {
    const request = new Request();
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
      wrapper.reject(new ServerError(errorResponse));
    });
  }

  __rejectWeakPending() {
    // TODO [Amerehie] - 7/25/2017 5:16 PM - Reject and remove from pending if not durable
  }

  __pollPending() {
    let pendingPoll = false;
    while (Client.instance.isOnline && running.size < API_CONCURRENCY && !pending.isEmpty()) {
      pendingPoll = true;
      this._run(pending.poll());
    }

    if (pendingPoll) {
      pending.trim();
    }
  }
}