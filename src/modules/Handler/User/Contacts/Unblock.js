import Base from '../../Base';
import {unSetBlock} from '../../../../actions/methods/user/contacts/block';

/**
 * @property {ProtoUserContactsUnblock} _request
 * @property {ProtoUserContactsUnblockResponse} _response
 */
export default class Unblock extends Base {
  handle() {
    this.dispatch(unSetBlock(this._response.getUserId()));
  }
}