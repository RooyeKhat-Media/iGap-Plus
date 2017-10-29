import Base from '../../Base';
import {setEmail} from '../../../../actions/methods/user/profile/email';

/**
 * @property {ProtoUserProfileGetEmail} _request
 * @property {ProtoUserProfileGetEmailResponse} _response
 */
export default class GetEmail extends Base {
  handle() {
    this.dispatch(setEmail(this._response.getEmail()));
  }
}