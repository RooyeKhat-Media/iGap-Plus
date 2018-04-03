import Base from '../Base';
import RoomsMeta from '../../../models/entities/Rooms/Meta/index';
import {messengerRoomMessageClearHistory} from '../../../actions/messenger/roomMessages';
import store from '../../../configureStore';
import {entitiesRoomEdit} from '../../../actions/entities/rooms';

/**
 * @property {ProtoChatClearMessage} _request
 * @property {ProtoChatClearMessageResponse} _response
 */
export default class ClearMessage extends Base {
  handle() {
    const roomId = this._response.getRoomId().toString();
    const clearId = this._response.getClearId().toString();
    RoomsMeta.saveToQueue(roomId, clearId);
    this.dispatch(messengerRoomMessageClearHistory(roomId, clearId));

    const room = store.getState().entities.rooms[roomId];
    if (room && room.lastMessage <= clearId) {
      this.dispatch(entitiesRoomEdit(roomId, {
        lastMessage: null,
        unreadCount: 0,
      }));
    }
  }
}