/**
 * @flow
 */

import {ERROR_TIMEOUT} from './errors';
import getTimeout from '../../constants/methods/timeout';
import ServerError from '../Error/ServerError';
import {ErrorResponse} from '../Proto/index';

export default class RequestWrapper {
  _timeout;

  constructor(resolve, reject, onDone, actionId, request, priority, handlerPrecedence, durable) {
    this._resolve = resolve;
    this._reject = reject;
    this._onDone = onDone;
    this._actionId = actionId;
    this._request = request;
    this._priority = priority;
    this._handlerPrecedence = handlerPrecedence;
    this._durable = durable;
  }

  get actionId() {
    return this._actionId;
  }

  get request() {
    return this._request;
  }

  get priority() {
    return this._priority;
  }

  set priority(value) {
    this._priority = value;
  }

  get handlerPrecedence() {
    return this._handlerPrecedence;
  }

  get durable() {
    return this._durable;
  }

  startTimeout() {
    if (this._timeout) {
      throw new Error('Cannot start timeout multiple times');
    }

    this._timeout = setTimeout(() => {
      const errorResponse = new ErrorResponse();
      errorResponse.setMajorCode(ERROR_TIMEOUT);
      errorResponse.setMinorCode(1);
      this.reject(new ServerError(errorResponse, this.actionId));
    }, getTimeout(this.actionId));
  }

  resolve(value) {
    try {
      this._resolve(value);
    } finally {
      this._done();
    }
  }

  reject(reason) {
    try {
      this._reject(reason);
    } finally {
      this._done();
    }
  }

  _done() {
    clearTimeout(this._timeout);
    this._onDone(this);
  }
}