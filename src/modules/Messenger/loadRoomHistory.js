import {normalize} from 'normalizr';
import Long from 'long';
import Api from '../Api/index';
import {ClientGetRoomHistory} from '../Proto/index';
import {CLIENT_GET_ROOM_HISTORY} from '../../constants/methods/index';
import roomMessage from '../../schemas/roomMessage';
import store from '../../configureStore';
import {messengerRoomMessageConcat} from '../../actions/messenger/roomMessages';
import {entitiesRoomMessageEdit, entitiesRoomMessagesAdd} from '../../actions/entities/roomMessages';
import {
  CLIENT_GET_ROOM_HISTORY_PAGINATION_DB_LIMIT,
  CLIENT_GET_ROOM_HISTORY_PAGINATION_LIMIT,
} from '../../constants/configs';
import {prepareRoomMessage} from '../../utils/app';
import RoomMessages from '../../models/entities/RoomMessages/index';
import {ERROR_CLIENT_GET_ROOM_HISTORY_NOT_FOUND} from '../Api/errors/index';

const endOfScroll = {};
/**
 * @param {string} roomId
 * @param {boolean} upward
 * @returns {Promise.<void>}
 */
export default async function loadRoomHistory(roomId, upward = true) {
  if (endOfScroll[roomId]) {
    return;
  }
  const firstMessageId = getRoomFirstMessageId(roomId);
  const firstMessage = store.getState().entities.roomMessages[firstMessageId];

  try {
    if (firstMessage && firstMessage.fraction) {
      throw new Error('fraction message');
    }
    await loadFromDb(roomId, firstMessageId, upward);
  } catch (e) {
    if (!endOfScroll[roomId]) {
      await loadFromServer(roomId, firstMessageId, upward, firstMessage && firstMessage.fraction);
    }
  }
}

/**
 * @param roomId
 * @param {string} firstMessageId
 * @param {boolean} upward
 * @returns {Promise.<void>}
 */
async function loadFromDb(roomId, firstMessageId, upward) {
  let fractionId = null;
  const entitiesRoomMessages = {};
  const messengerRoomMessages = [];
  const roomMessages = await RoomMessages.loadHistoryFromDb(roomId, firstMessageId, upward, CLIENT_GET_ROOM_HISTORY_PAGINATION_DB_LIMIT);

  for (const [index, message] of roomMessages.entries()) {
    entitiesRoomMessages[message.id] = message;
    if (upward) {
      messengerRoomMessages.unshift(message.id);
    } else {
      messengerRoomMessages.push(message.id);
    }
    if (message.fraction) {
      if (upward) {
        fractionId = message.id;
      } else if (index) {
        fractionId = roomMessages[index - 1].id;
      }
      break;
    }
  }

  store.dispatch(entitiesRoomMessagesAdd(entitiesRoomMessages, false));
  store.dispatch(messengerRoomMessageConcat(roomId, messengerRoomMessages));
  if (fractionId) {
    await loadFromServer(roomId, fractionId, upward, true);
  } else if (messengerRoomMessages.length < CLIENT_GET_ROOM_HISTORY_PAGINATION_LIMIT) {
    await loadFromServer(roomId, messengerRoomMessages[0], upward);
  }
}

/**
 * Load messages from server
 * @param {string} roomId
 * @param {string|null} firsMessageId
 * @param {boolean} upward
 * @param {boolean} fraction
 * @returns {Promise.<void>}
 */
async function loadFromServer(roomId, firsMessageId, upward, fraction) {
  const clientRoomHistory = new ClientGetRoomHistory();
  clientRoomHistory.setRoomId(Long.fromString(roomId));
  if (firsMessageId) {
    clientRoomHistory.setFirstMessageId(Long.fromString(firsMessageId));
  }
  clientRoomHistory.setLimit(CLIENT_GET_ROOM_HISTORY_PAGINATION_LIMIT);
  clientRoomHistory.setDirection(upward ? ClientGetRoomHistory.Direction.UP : ClientGetRoomHistory.Direction.DOWN);

  /**
   * @type {ProtoClientGetRoomHistoryResponse}
   */
  try {
    const clientRoomHistoryResponse = await Api.invoke(CLIENT_GET_ROOM_HISTORY, clientRoomHistory);
    const normalizedData = normalize(clientRoomHistoryResponse.getMessageList(), [roomMessage]);
    for (const messageId in normalizedData.entities.roomMessages) {
      if (normalizedData.entities.roomMessages.hasOwnProperty(messageId)) {
        prepareRoomMessage(normalizedData.entities.roomMessages[messageId], roomId, false);
      }
    }
    if (fraction && upward && normalizedData.result && normalizedData.result.length) {
      const lastMessageId = normalizedData.result[0];
      await setFractionIfNotExist(normalizedData.entities.roomMessages[lastMessageId]);
    }
    store.dispatch(entitiesRoomMessagesAdd(normalizedData.entities.roomMessages));
    store.dispatch(messengerRoomMessageConcat(roomId, normalizedData.result));
    if (upward) {
      store.dispatch(entitiesRoomMessageEdit(firsMessageId, {
        fraction: false,
      }));
    }
  } catch (e) {
    /**
     * @type {ServerError} e
     */
    if (e.errorResponse.getMajorCode() === ERROR_CLIENT_GET_ROOM_HISTORY_NOT_FOUND) {
      endOfScroll[roomId] = true;
    }
  }
}

/**
 * @param {string} roomId
 * @returns {*}
 */
function getRoomFirstMessageId(roomId) {
  const index = 0;
  const messageList = store.getState().messenger.roomMessages[roomId];
  return messageList && messageList[index] ? messageList[index] : null;
}

/**
 * @param {FlatRoomMessage} roomMessage
 * @returns {Promise.<void>}
 */
export async function setFractionIfNotExist(roomMessage) {
  try {
    const localRoomMessage = await (store.getState().entities.roomMessages[roomMessage.id] || RoomMessages.loadFromQueue(roomMessage.id));
    roomMessage.fraction = localRoomMessage.fraction;
  } catch (e) {
    roomMessage.fraction = true;
  }
}