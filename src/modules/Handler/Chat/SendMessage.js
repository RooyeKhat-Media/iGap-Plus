import Base from '../Base';
import putState from '../../Entities/Rooms/index';
import {prepareRoomMessage} from '../../../utils/app';
import {entitiesRoomEdit} from '../../../actions/entities/rooms';

import {normalize} from 'normalizr';
import roomMessage from '../../../schemas/roomMessage';
import {entitiesRoomMessagesAdd} from '../../../actions/entities/roomMessages';
import {messengerRoomMessageConcat} from '../../../actions/messenger/roomMessages';
import {indexOf, toPairs} from 'lodash';
import store from '../../../configureStore';
import {sleep} from '../../../utils/core';
import {messengerRoomAddList} from '../../../actions/messenger/rooms';

/**
 * @property {ProtoChatSendMessage} _request
 * @property {ProtoChatSendMessageResponse} _response
 */
export default class SendMessage extends Base {
  async handle() {
    const roomId = this._response.getRoomId().toString();
    await putState(roomId);
    let tries = 10;
    do {
      if (!store.getState().entities.rooms[roomId]) {
        await sleep(1);
      } else {

        const messageId = this._response.getRoomMessage().getMessageId().toString();

        if (indexOf(store.getState().messenger.rooms, roomId) === -1) {
          this.dispatch(messengerRoomAddList({
            [roomId]: {
              id: roomId,
              sort: messageId,
              pinId: '0',
            },
          }));
        }

        this.dispatch(entitiesRoomEdit(roomId, {
          lastMessage: messageId,
        }));

        const normalizedData = normalize(this._response.getRoomMessage(), roomMessage);

        toPairs(normalizedData.entities.roomMessages).forEach(([messageId, roomMessage]) => {
          prepareRoomMessage(normalizedData.entities.roomMessages[messageId], roomId, true);
        });

        if (!this._request) {
          this.dispatch(entitiesRoomMessagesAdd(normalizedData.entities.roomMessages));
          this.dispatch(messengerRoomMessageConcat(roomId, [normalizedData.result], false));
        }
        break;
      }
    } while (--tries);
  }
}