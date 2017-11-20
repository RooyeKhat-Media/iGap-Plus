/**
 * @flow
 */

export const ENTITIES_ROOM_MESSAGE_ADD = 'ENTITIES_ROOM_MESSAGE_ADD';
export const ENTITIES_ROOM_MESSAGE_REMOVE = 'ENTITIES_ROOM_MESSAGE_REMOVE';

/**
 * @param {NormalizedRoomMessageEntities} roomMessages
 * @param {boolean} fromServer
 * @return {{type: string, roomId: string, roomMessage: NormalizedRoomMessageEntities, fromServer:boolean}}
 */
export function entitiesRoomMessagesAdd(roomMessages, fromServer = true) {
  return {
    type: ENTITIES_ROOM_MESSAGE_ADD,
    roomMessages,
    fromServer,
  };
}

/**
 * @param {string} messageId
 * @returns {{type: string, messageId: string}}
 */
export function entitiesRoomMessageRemove(messageId) {
  return {
    type: ENTITIES_ROOM_MESSAGE_REMOVE,
    messageId,
  };
}