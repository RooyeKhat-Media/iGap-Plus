import {normalize} from 'normalizr';
import Api from '../Api/index';
import {ClientGetRoomHistory} from '../Proto/index';
import {CLIENT_GET_ROOM_HISTORY} from '../../constants/methods/index';
import roomMessage from '../../schemas/roomMessage';
import store from '../../configureStore';
import {messengerRoomMessageConcat} from '../../actions/messenger/roomMessages';
import {entitiesRoomMessagesAdd} from '../../actions/entities/roomMessages';
import {CLIENT_GET_ROOM_HISTORY_PAGINATION_LIMIT} from '../../constants/configs';
import putState from '../Entities/RegisteredUsers';

export default async function loadRoomHistory(roomId) {

  const clientRoomHistory = new ClientGetRoomHistory();
  clientRoomHistory.setRoomId(roomId);
  clientRoomHistory.setLimit(CLIENT_GET_ROOM_HISTORY_PAGINATION_LIMIT);

  /**
   * @type {ProtoClientGetRoomHistoryResponse}
   */
  const clientRoomHistoryResponse = await Api.invoke(CLIENT_GET_ROOM_HISTORY, clientRoomHistory);

  clientRoomHistoryResponse.getMessageList().forEach(function(protoRoomMessage) {
    if (protoRoomMessage.getAuthor().getUser()) {
      const authorUser = protoRoomMessage.getAuthor().getUser();
      putState(authorUser.getUserId().toString(), authorUser.getCacheId());
    }
  });

  const normalizedData = normalize(clientRoomHistoryResponse.getMessageList(), [roomMessage]);

  store.dispatch(entitiesRoomMessagesAdd(normalizedData.entities.roomMessages));
  store.dispatch(messengerRoomMessageConcat(roomId, normalizedData.result));
}