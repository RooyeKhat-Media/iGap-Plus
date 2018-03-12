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
import ServerError from '../Error/ServerError';

const endOfScroll = {};
/**
 * @param {string} roomId
 * @param {string} firstMessageId
 * @param {boolean} upward // if upward is `true` load messages from firstMessageId to oldest and if `false` load to newest
 * @param {boolean} includeMessageId
 * @returns {Promise.<int>}
 */
export default async function loadRoomHistory(roomId, firstMessageId, upward = true, includeMessageId = false) {
  let roomMessages = {};
  if (endOfScroll[roomId] && endOfScroll[roomId][upward]) {
    return 0;
  }

  const firstMessage = store.getState().entities.roomMessages[firstMessageId];
  try {
    if (firstMessage && firstMessage.fraction) {
      throw new Error('fraction message');
    }
    roomMessages = await loadFromDb(roomId, firstMessageId, upward, includeMessageId);
  } catch (e) {
    roomMessages = await loadFromServer(roomId, firstMessageId, upward, firstMessage && firstMessage.fraction, includeMessageId);
  }
  return roomMessages;
}

/**
 * @param roomId
 * @param {string|null} firstMessageId
 * @param {boolean} upward
 * @param {boolean} includeMessageId
 * @returns {Promise.<int>}
 */
async function loadFromDb(roomId, firstMessageId, upward, includeMessageId = false) {
  let fractionId = null;
  let deletedMessageCunt = 0;
  let entitiesRoomMessages = {};
  const messengerRoomMessages = [];
  const roomMessages = await RoomMessages.loadHistoryFromDb(roomId, firstMessageId, upward, CLIENT_GET_ROOM_HISTORY_PAGINATION_DB_LIMIT);
  for (const [index, message] of roomMessages.entries()) {
    prepareRoomMessage(message, roomId);
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
    if (message.deleted) {
      deletedMessageCunt++;
    }
  }

  if (includeMessageId) {
    if (upward) {
      messengerRoomMessages.push(firstMessageId);
    } else {
      messengerRoomMessages.unshift(firstMessageId);
    }
  }
  store.dispatch(entitiesRoomMessagesAdd(entitiesRoomMessages, false));
  store.dispatch(messengerRoomMessageConcat(roomId, messengerRoomMessages, upward));
  if (fractionId) {
    entitiesRoomMessages = {
      ...entitiesRoomMessages,
      ...await loadFromServer(roomId, fractionId, upward, true),
    };
  } else if (deletedMessageCunt >= CLIENT_GET_ROOM_HISTORY_PAGINATION_LIMIT / 2) {
    loadRoomHistory(roomId,
      upward ? messengerRoomMessages[messengerRoomMessages.length - 1] : messengerRoomMessages[0],
      upward);
  } else if (messengerRoomMessages.length < CLIENT_GET_ROOM_HISTORY_PAGINATION_LIMIT) {
    entitiesRoomMessages = {
      ...entitiesRoomMessages,
      ...await loadFromServer(
        roomId,
        upward ? messengerRoomMessages[messengerRoomMessages.length - 1] : messengerRoomMessages[0],
        upward),
    };
  }
  return entitiesRoomMessages;
}

/**
 * Load messages from server
 * @param {string} roomId
 * @param {string|null} firsMessageId
 * @param {boolean} upward
 * @param {boolean} fraction
 * @returns {Promise.<int>}
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
    store.dispatch(messengerRoomMessageConcat(roomId, normalizedData.result, upward));
    if (firsMessageId && upward) {
      store.dispatch(entitiesRoomMessageEdit(firsMessageId, {
        fraction: false,
      }));
    }
    return normalizedData.entities;
  } catch (e) {
    /**
     * @type {ServerError} e
     */
    if (e instanceof ServerError && e.errorResponse.getMajorCode() === ERROR_CLIENT_GET_ROOM_HISTORY_NOT_FOUND) {
      if (!endOfScroll[roomId]) {
        endOfScroll[roomId] = {};
      }
      endOfScroll[roomId][upward] = true;
      return;
    }
    throw e;
  }
}

/**
 * @param {string} roomId
 * @returns {string|null}
 */
export function getRoomFirstMessageId(roomId) {
  const messageList = store.getState().messenger.roomMessages[roomId];
  const index = messageList ? messageList.length - 1 : 0;
  return messageList && messageList[index] ? messageList[index] : null;
}

/**
 * @param {string} roomId
 * @returns {string|null}
 */
export function getRoomLastMessageId(roomId) {
  const messageList = store.getState().messenger.roomMessages[roomId];
  return messageList && messageList[0] ? messageList[0] : null;
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