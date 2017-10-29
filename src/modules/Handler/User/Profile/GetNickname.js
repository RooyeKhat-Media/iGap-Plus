import Base from '../../Base';
import {setNickname} from '../../../../actions/methods/user/profile/nickname';

/**
 * @property {ProtoUserProfileGetNickname} _request
 * @property {ProtoUserProfileGetNicknameResponse} _response
 */
export default class GetNickname extends Base {
  handle() {
    this.dispatch(setNickname(this._response.getNickname()));
  }
}