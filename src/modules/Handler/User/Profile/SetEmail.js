import Base from '../../Base';
import {setEmail} from '../../../../actions/methods/user/profile/email';

/**
 * @property {ProtoUserProfileSetEmail} _request
 * @property {ProtoUserProfileSetEmailResponse} _response
 */
export default class SetEmail extends Base {
  handle() {
    this.dispatch(setEmail(this._response.getEmail()));
  }
}