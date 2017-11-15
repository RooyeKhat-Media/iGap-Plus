import Base from '../Base';
import putState from '../../Entities/Rooms/index';
import {messengerRoomAddList} from '../../../actions/messenger/rooms';
import {dispatchNewRoomMessage} from '../../../utils/app';
import {entitiesRoomEdit} from '../../../actions/entities/rooms';

/**
 * @property {ProtoChatSendMessage} _request
 * @property {ProtoChatSendMessageResponse} _response
 */
export default class SendMessage extends Base {
  async handle() {
    const roomId = this._response.getRoomId().toString();
    await putState(roomId);
    this.dispatch(messengerRoomAddList({
      [roomId]: {
        id: roomId,
        sort: this._response.getRoomMessage().getMessageId().toString(),
      },
    }));
    this.dispatch(entitiesRoomEdit(roomId, {
      lastMessage: this._response.getRoomMessage().getMessageId().toString(),
    }));
    dispatchNewRoomMessage(this._response.getRoomMessage(), roomId, !!this._request);
  }
}