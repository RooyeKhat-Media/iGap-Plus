/**
 * @flow
 */

export const MESSENGER_ROOM_ADD = 'MESSENGER_ROOM_ADD';
export const MESSENGER_ROOM_ADD_LIST = 'MESSENGER_ROOM_ADD_LIST';
export const MESSENGER_ROOM_OVERRIDE_LIST = 'MESSENGER_ROOM_OVERRIDE_LIST';
export const MESSENGER_ROOM_REMOVE = 'MESSENGER_ROOM_REMOVE';

/**
 * @param {{id:string, sort: string}} payload
 * @return {{type: string, payload: payload}}
 */
export function messengerRoomAdd(payload) {
  return {
    type: MESSENGER_ROOM_ADD,
    payload,
  };
}

/**
 * @param {string} roomId
 * @return {{type: string, payload: payload}}
 */
export function messengerRoomRemove(roomId) {
  return {
    type: MESSENGER_ROOM_REMOVE,
    roomId,
  };
}

/**
 * @param payload
 * @return {{type: string, payload: object}}
 */
export function messengerRoomAddList(payload) {
  return {
    type: MESSENGER_ROOM_ADD_LIST,
    payload,
  };
}

/**
 * @param payload
 * @return {{type: string, payload: object}}
 */
export function messengerRoomOverrideList(payload) {
  return {
    type: MESSENGER_ROOM_OVERRIDE_LIST,
    payload,
  };
}