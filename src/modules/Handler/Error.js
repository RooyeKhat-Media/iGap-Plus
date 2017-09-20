import Base from './Base';
import {errorId} from '../Error/index';

/**
 * @property {ProtoErrorResponse} _response
 */
export default class Error extends Base {
  handle() {
    console.log(
      'ErrorHandler',
      errorId(this._response.getMajorCode(), this._response.getMinorCode()),
      this._response
    );
  }
}