/**
 * @flow
 */
import ExtendableError from './ExtendableError';

export default class ServerError extends ExtendableError {
  constructor(errorResponse) {
    let msg = `Api error #${errorResponse.getMajorCode()}_${errorResponse.getMinorCode()}`;
    if (errorResponse.getMessage()) {
      msg += ` [${errorResponse.getMessage()}]`;
    }
    super(msg);

    this._errorResponse = errorResponse;
  }


  get errorResponse() {
    return this._errorResponse;
  }
}
