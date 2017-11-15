/**
 * @flow
 */

export const MESSENGER_ROOM_MESSAGE_CONCAT = 'MESSENGER_ROOM_MESSAGE_CONCAT';
export const MESSENGER_ROOM_MESSAGE_REPLACE_MESSAGE = 'MESSENGER_ROOM_MESSAGE_REPLACE_MESSAGE';

/**
 * @param {string} roomId
 * @param {[string]} messageIds
 * @return {{type: string, roomId: string}}
 */
export function messengerRoomMessageConcat(roomId, messageIds) {
  return {
    type: MESSENGER_ROOM_MESSAGE_CONCAT,
    roomId,
    messageIds,
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
