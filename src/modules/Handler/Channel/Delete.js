import Base from '../Base';
import {messengerRoomRemove} from '../../../actions/messenger/rooms';
import {entitiesRoomRemove} from '../../../actions/entities/rooms';

/**
 * @property {ProtoChannelDelete} _request
 * @property {ProtoChannelDeleteResponse} _response
 */
export default class Delete extends Base {
  handle() {
    const roomId = this._response.getRoomId().toString();
    this.dispatch(messengerRoomRemove(roomId));
    this.dispatch(entitiesRoomRemove(roomId));
  }
}