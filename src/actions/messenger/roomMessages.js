/**
 * @flow
 */

export const MESSENGER_ROOM_MESSAGE_CONCAT = 'MESSENGER_ROOM_MESSAGE_CONCAT';

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

