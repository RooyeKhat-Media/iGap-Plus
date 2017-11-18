import Base from '../../Base';
import {selfRemove} from '../../../../actions/methods/user/profile/selfRemove';

/**
 * @property {ProtoUserProfileGetSelfRemove} _request
 * @property {ProtoUserProfileGetSelfRemoveResponse} _response
 */
export default class GetSelfRemove extends Base {
  handle() {
    this.dispatch(selfRemove(this._response.getSelfRemove()));
  }
}