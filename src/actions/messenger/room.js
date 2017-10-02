/**
 * @flow
 */

export const MESSENGER_ROOM_ADD = 'MESSENGER_ROOM_ADD';
export const MESSENGER_ROOM_OVERRIDE_LIST = 'MESSENGER_ROOM_OVERRIDE_LIST';

/**
 * @param {string} roomId
 * @return {{type: string, roomId: string}}
 */
export function messengerRoomAdd(roomId) {
  return {
    type: MESSENGER_ROOM_ADD,
    roomId,
  };
}

/**
 * @param {string[]} roomIds
 * @return {{type: string, roomIds: string[]}}
 */
export function messengerRoomOverrideList(roomIds) {
  return {
    type: MESSENGER_ROOM_OVERRIDE_LIST,
    roomIds,
  };
}