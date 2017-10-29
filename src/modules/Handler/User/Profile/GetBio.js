import Base from '../../Base';
import {setBio} from '../../../../actions/methods/user/profile/bio';

/**
 * @property {ProtoUserProfileGetBio} _request
 * @property {ProtoUserProfileGetBioResponse} _response
 */
export default class GetBio extends Base {
  handle() {
    this.dispatch(setBio(this._response.getBio()));
  }
}