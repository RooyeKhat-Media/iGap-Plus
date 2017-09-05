import Base from '../../Base';
import store from '../../../../configureStore';
import {setNickname} from '../../../../actions/methods/user/profile/nickname';

/**
 * @property {ProtoUserProfileSetNickname} _request
 * @property {ProtoUserProfileSetNicknameResponse} _response
 */
export default class SetNickname extends Base {
  handle() {
    store.dispatch(setNickname(this._response.getNickname()));
  }
}