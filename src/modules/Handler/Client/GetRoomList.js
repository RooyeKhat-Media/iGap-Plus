import Base from '../Base';

import store from '../../../configureStore';
import {getRoomList} from '../../../actions/methods/client/getRoomList';

/**
 * @property {ProtoClientGetRoomList} _request
 * @property {ProtoClientGetRoomListResponse} _response
 */
export default class GetRoomList extends Base {
  handle() {
    store.dispatch(getRoomList(this._response.getRoomsList()));
  }
}