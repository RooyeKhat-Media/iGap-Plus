import Base from '../Base';
import putState from '../../Entities/Rooms/index';
import {messengerRoomAddList} from '../../../actions/messenger/rooms';
import {prepareRoomMessage} from '../../../utils/app';
import {entitiesRoomEdit} from '../../../actions/entities/rooms';

import {normalize} from 'normalizr';
import roomMessage from '../../../schemas/roomMessage';
import {entitiesRoomMessagesAdd} from '../../../actions/entities/roomMessages';
import {messengerRoomMessageConcat} from '../../../actions/messenger/roomMessages';

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

    const normalizedData = normalize(this._response.getRoomMessage(), roomMessage);
    const messageId = normalizedData.result;
    prepareRoomMessage(normalizedData.entities.roomMessages[messageId], roomId, true);

    if (!this._request) {
      this.dispatch(entitiesRoomMessagesAdd(normalizedData.entities.roomMessages));
      this.dispatch(messengerRoomMessageConcat(roomId, [normalizedData.result]));
    }
  }
}