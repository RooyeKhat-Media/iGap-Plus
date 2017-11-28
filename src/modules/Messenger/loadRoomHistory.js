import {normalize} from 'normalizr';
import Long from 'long';
import Api from '../Api/index';
import {ClientGetRoomHistory} from '../Proto/index';
import {CLIENT_GET_ROOM_HISTORY} from '../../constants/methods/index';
import roomMessage from '../../schemas/roomMessage';
import store from '../../configureStore';
import {messengerRoomMessageConcat} from '../../actions/messenger/roomMessages';
import {entitiesRoomMessagesAdd} from '../../actions/entities/roomMessages';
import {CLIENT_GET_ROOM_HISTORY_PAGINATION_LIMIT} from '../../constants/configs';
import {prepareRoomMessage} from '../../utils/app';

export default async function loadRoomHistory(roomId) {

  const clientRoomHistory = new ClientGetRoomHistory();
  clientRoomHistory.setRoomId(Long.fromString(roomId));
  clientRoomHistory.setLimit(CLIENT_GET_ROOM_HISTORY_PAGINATION_LIMIT);

  /**
   * @type {ProtoClientGetRoomHistoryResponse}
   */
  const clientRoomHistoryResponse = await Api.invoke(CLIENT_GET_ROOM_HISTORY, clientRoomHistory);

  const normalizedData = normalize(clientRoomHistoryResponse.getMessageList(), [roomMessage]);

  for (const messageId in normalizedData.entities.roomMessages) {
    if (normalizedData.entities.roomMessages.hasOwnProperty(messageId)) {
      prepareRoomMessage(normalizedData.entities.roomMessages[messageId], roomId, false);
    }
  }
  store.dispatch(entitiesRoomMessagesAdd(normalizedData.entities.roomMessages));
  store.dispatch(messengerRoomMessageConcat(roomId, normalizedData.result));
}