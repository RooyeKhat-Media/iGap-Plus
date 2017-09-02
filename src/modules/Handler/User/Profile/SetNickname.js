import Base from '../../Base';
import store from '../../../../configureStore';
import {setNickname} from '../../../../actions/methods/user/profile/nickname';

export default class SetNickname extends Base {
  handle() {
    store.dispatch(setNickname(this._response.getNickname()));
  }
}