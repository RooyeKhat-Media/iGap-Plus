/**
 * @flow
 */

export const MESSENGER_ROOM_MESSAGE_PUSH = 'MESSENGER_ROOM_MESSAGE_PUSH';
export const MESSENGER_ROOM_MESSAGE_UNSHIFT = 'MESSENGER_ROOM_MESSAGE_UNSHIFT';
export const MESSENGER_ROOM_MESSAGE_CONCAT = 'MESSENGER_ROOM_MESSAGE_CONCAT';

/**
 * @param {string} roomId
 * @param {string} messageId
 * @return {{type: string, roomId: string}}
 */
export function messengerRoomMessagePush(roomId, messageId) {
  return {
    type: MESSENGER_ROOM_MESSAGE_PUSH,
    roomId,
    messageId,
  };
}

/**
 * @param {string} roomId
 * @param {string} messageId
 * @return {{type: string, roomId: string}}
 */
export function messengerRoomMessageUnshift(roomId, messageId) {
  return {
    type: MESSENGER_ROOM_MESSAGE_UNSHIFT,
    roomId,
    messageId,
  };
}

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

