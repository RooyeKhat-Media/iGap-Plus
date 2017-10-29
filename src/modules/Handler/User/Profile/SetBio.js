import Base from '../../Base';
import {setBio} from '../../../../actions/methods/user/profile/bio';

/**
 * @property {ProtoUserProfileSetBio} _request
 * @property {ProtoUserProfileSetBioResponse} _response
 */
export default class SetBio extends Base {
  handle() {
    this.dispatch(setBio(this._response.getBio()));
  }
}