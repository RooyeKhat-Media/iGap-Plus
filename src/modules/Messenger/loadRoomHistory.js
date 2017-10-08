import {normalize} from 'normalizr';
import Api from '../Api/index';
import {ClientGetRoomHistory, UserInfo} from '../Proto/index';
import {CLIENT_GET_ROOM_HISTORY, USER_INFO} from '../../constants/methods/index';
import roomMessage from '../../schemas/roomMessage';
import store from '../../configureStore';
import {messengerRoomMessageConcat} from '../../actions/messenger/roomMessages';
import {entitiesRoomMessagesAdd} from '../../actions/entities/roomMessages';
import {CLIENT_GET_ROOM_HISTORY_PAGINATION_LIMIT} from "../../constants/configs";

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
      const userInfo = new UserInfo();
      userInfo.setUserId(protoRoomMessage.getAuthor().getUser().getUserId());
      Api.invoke(USER_INFO, userInfo);
    }
  });

  const normalizedData = normalize(clientRoomHistoryResponse.getMessageList(), [roomMessage]);

  store.dispatch(messengerRoomMessageConcat(roomId, normalizedData.result));
  store.dispatch(entitiesRoomMessagesAdd(normalizedData.entities.roomMessages));
}