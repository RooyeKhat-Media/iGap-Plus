/**
 * @flow
 */

export const ENTITIES_ROOM_MESSAGE_ADD = 'ENTITIES_ROOM_MESSAGE_ADD';

/**
 * @param {NormalizedRoomMessageEntities} roomMessages
 * @param {boolean} fromServer
 * @return {{type: string, roomId: string, roomMessage: FlatRoomMessage}}
 */
export function entitiesRoomMessagesAdd(roomMessages, fromServer = true) {
  return {
    type: ENTITIES_ROOM_MESSAGE_ADD,
    roomMessages,
    fromServer,
  };
}


