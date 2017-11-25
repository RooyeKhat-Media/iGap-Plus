/**
 * @flow
 */

export const ENTITIES_ROOM_MESSAGE_ADD = 'ENTITIES_ROOM_MESSAGE_ADD';
export const ENTITIES_ROOM_MESSAGE_REMOVE = 'ENTITIES_ROOM_MESSAGE_REMOVE';
export const ENTITIES_ROOM_MESSAGE_EDIT = 'ENTITIES_ROOM_MESSAGE_EDIT';

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

/**
 * Edit Room Message props
 * @param messageId
 * @param payload
 * @param fromServer
 * @returns {{type: string, messageId: string, payload: object, fromServer: boolean}}
 */
export function entitiesRoomMessageEdit(messageId, payload, fromServer = true) {
  return {
    type: ENTITIES_ROOM_MESSAGE_EDIT,
    messageId,
    payload,
    fromServer,
  };
}