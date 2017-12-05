import Base from '../Base';
import {entitiesRoomEdit} from '../../../actions/entities/rooms';

/**
 * @property {ProtoClientPinRoom} _request
 * @property {ProtoClientPinRoomResponse} _response
 */
export default class ClientPinRoom extends Base {
  handle() {
    this.dispatch(entitiesRoomEdit(this._response.getRoomId().toString(), {
      pinId: this._response.getPinId().toString(),
    }));
  }
}