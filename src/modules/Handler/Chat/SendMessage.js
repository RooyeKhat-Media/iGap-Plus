import Base from '../Base';
import putState from '../../Entities/Rooms/index';
import {prepareRoomMessage} from '../../../utils/app';
import {entitiesRoomEdit} from '../../../actions/entities/rooms';

import {normalize} from 'normalizr';
import roomMessage from '../../../schemas/roomMessage';
import {entitiesRoomMessagesAdd} from '../../../actions/entities/roomMessages';
import {messengerRoomMessageConcat} from '../../../actions/messenger/roomMessages';
import {toPairs} from 'lodash';

/**
 * @property {ProtoChatSendMessage} _request
 * @property {ProtoChatSendMessageResponse} _response
 */
export default class SendMessage extends Base {
  async handle() {
    const roomId = this._response.getRoomId().toString();
    await putState(roomId);
    this.dispatch(entitiesRoomEdit(roomId, {
      lastMessage: this._response.getRoomMessage().getMessageId().toString(),
    }));

    const normalizedData = normalize(this._response.getRoomMessage(), roomMessage);

    toPairs(normalizedData.entities.roomMessages).forEach(([messageId, roomMessage]) => {
      prepareRoomMessage(normalizedData.entities.roomMessages[messageId], roomId, true);
    });

    if (!this._request) {
      this.dispatch(entitiesRoomMessagesAdd(normalizedData.entities.roomMessages));
      this.dispatch(messengerRoomMessageConcat(roomId, [normalizedData.result]));
    }
  }
}