import Base from '../../Base';
import {setGender} from '../../../../actions/methods/user/profile/gender';

/**
 * @property {ProtoUserProfileSetGender} _request
 * @property {ProtoUserProfileSetGenderResponse} _response
 */
export default class SetGender extends Base {
  handle() {
    this.dispatch(setGender(this._response.getGender()));
  }
}