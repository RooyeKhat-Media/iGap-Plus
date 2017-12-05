import Base from '../Base';
import {entitiesRoomEdit} from '../../../actions/entities/rooms';

/**
 * @property {ProtoClientMuteRoom} _request
 * @property {ProtoClientMuteRoomResponse} _response
 */
export default class ClientMuteRoom extends Base {
  handle() {
    this.dispatch(entitiesRoomEdit(this._response.getRoomId().toString(), {
      roomMute: this._response.getRoomMute(),
    }));
  }
}