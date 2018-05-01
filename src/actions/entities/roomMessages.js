/**
 * @flow
 */

export const ENTITIES_ROOM_MESSAGE_ADD = 'ENTITIES_ROOM_MESSAGE_ADD';
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
 * Edit Room Message props
 * @param messageId
 * @param payload
 * @returns {{type: string, messageId: string, payload: object, fromServer: boolean}}
 */
export function entitiesRoomMessageEdit(messageId, payload) {
  return {
    type: ENTITIES_ROOM_MESSAGE_EDIT,
    messageId,
    payload,
  };
}