/**
 * @flow
 */

export const MESSENGER_ROOM_MESSAGE_CONCAT = 'MESSENGER_ROOM_MESSAGE_CONCAT';
export const MESSENGER_ROOM_MESSAGE_REPLACE_MESSAGE = 'MESSENGER_ROOM_MESSAGE_REPLACE_MESSAGE';
export const MESSENGER_ROOM_MESSAGE_REMOVE = 'MESSENGER_ROOM_MESSAGE_REMOVE';
export const MESSENGER_ROOM_MESSAGE_CLEAR_MESSAGES_FROM_STORE = 'MESSENGER_ROOM_MESSAGE_CLEAR_MESSAGES_FROM_STORE';
export const MESSENGER_ROOM_MESSAGE_CLEAR_MESSAGES = 'MESSENGER_ROOM_MESSAGE_CLEAR_MESSAGES';

/**
 * @param {string} roomId
 * @param {[string]} messageIds
 * @param {boolean} before
 * @return {{type: string, roomId: string, messageIds:[string], before: boolean}}
 */
export function messengerRoomMessageConcat(roomId, messageIds, before = true) {
  return {
    type: MESSENGER_ROOM_MESSAGE_CONCAT,
    roomId,
    messageIds,
    before,
  };
}

/**
 * @param {string} roomId
 * @param {string} newMessageId
 * @param {string} oldMessageId
 * @returns {{type: string, roomId: string, newMessageId: string, oldMessageId: string}}
 */
export function messengerRoomMessageReplace(roomId, newMessageId, oldMessageId) {
  return {
    type: MESSENGER_ROOM_MESSAGE_REPLACE_MESSAGE,
    roomId,
    newMessageId,
    oldMessageId,
  };
}

/**
 * @param {string} roomId
 * @param {string} messageId
 * @returns {{type: string, roomId: string, messageId: string}}
 */
export function messengerRoomMessageRemove(roomId, messageId) {
  return {
    type: MESSENGER_ROOM_MESSAGE_REMOVE,
    roomId,
    messageId,
  };
}

export function messengerRoomMessageClearMessageFromStore(roomId) {
  return {
    type: MESSENGER_ROOM_MESSAGE_CLEAR_MESSAGES_FROM_STORE,
    roomId,
  };
}

export function messengerRoomMessageClearHistory(roomId, clearId) {
  return {
    type: MESSENGER_ROOM_MESSAGE_CLEAR_MESSAGES,
    roomId,
    clearId,
  };
}
