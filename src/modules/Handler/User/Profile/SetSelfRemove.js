import Base from '../../Base';
import {selfRemove} from '../../../../actions/methods/user/profile/selfRemove';

/**
 * @property {ProtoUserProfileSetSelfRemove} _request
 * @property {ProtoUserProfileSetSelfRemoveResponse} _response
 */
export default class SetSelfRemove extends Base {
  handle() {
    this.dispatch(selfRemove(this._response.getSelfRemove()));
  }
}