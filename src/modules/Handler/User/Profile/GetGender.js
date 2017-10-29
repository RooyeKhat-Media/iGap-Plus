import Base from '../../Base';
import {setGender} from '../../../../actions/methods/user/profile/gender';

/**
 * @property {ProtoUserProfileGetGender} _request
 * @property {ProtoUserProfileGetGenderResponse} _response
 */
export default class GetGender extends Base {
  handle() {
    this.dispatch(setGender(this._response.getGender()));
  }
}