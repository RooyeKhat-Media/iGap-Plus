/**
 * @flow
 */

import {ERROR_TIMEOUT} from './errors';
import getTimeout from '../../constants/methods/timeout';
import ServerError from '../Error/ServerError';
import {ErrorResponse} from '../Proto/index';
import {autoReact} from '../Error/index';

export default class RequestWrapper {
  _timeout;

  /**
   * @type {errorReactionFunction}
   */
  _errorReactionFunction = autoReact;

  /**
   * @type Promise
   */
  _promise;

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

  /**
   * @return {errorReactionFunction}
   */
  get errorReactionFunction() {
    return this._errorReactionFunction;
  }

  /**
   * @param {errorReactionFunction} value
   */
  set errorReactionFunction(value) {
    this._errorReactionFunction = value;
  }

  /**
   * @return {Promise}
   */
  get promise() {
    return this._promise;
  }

  /**
   * @param {Promise} value
   */
  set promise(value) {
    this._promise = value;
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
      try {
        this._reject(reason);
      } finally {
        if (reason instanceof ServerError) {
          this._errorReactionFunction(reason.errorResponse, this);
        }
      }
    } finally {
      this._done();
    }
  }

  _done() {
    clearTimeout(this._timeout);
    this._onDone(this);
  }
}