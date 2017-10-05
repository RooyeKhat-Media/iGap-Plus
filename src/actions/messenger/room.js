/**
 * @flow
 */

export const MESSENGER_ROOM_ADD = 'MESSENGER_ROOM_ADD';
export const MESSENGER_ROOM_OVERRIDE_LIST = 'MESSENGER_ROOM_OVERRIDE_LIST';

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
 * @param payload
 * @return {{type: string, payload: object}}
 */
export function messengerRoomOverrideList(payload) {
  return {
    type: MESSENGER_ROOM_OVERRIDE_LIST,
    payload,
  };
}