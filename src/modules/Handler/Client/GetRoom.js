import Base from '../Base';
import store from '../../../configureStore';
import {getRoom} from '../../../actions/methods/client/getRoom';

/**
 * @property {ProtoClientGetRoom} _request
 * @property {ProtoClientGetRoomResponse} _response
 */
export default class GetRoom extends Base {
  handle() {
    store.dispatch(getRoom(this._response.getRoom()));
  }
}