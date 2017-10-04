/**
 * @flow
 */

export const ENTITIES_ROOM_MESSAGE_ADD = 'ENTITIES_ROOM_MESSAGE_ADD';

/**
 * @param {NormalizedRoomMessageEntities} roomMessages
 * @return {{type: string, roomId: string, roomMessage: FlatRoomMessage}}
 */
export function entitiesRoomMessagesAdd(roomMessages) {
  return {
    type: ENTITIES_ROOM_MESSAGE_ADD,
    roomMessages,
  };
}


