/**
 * @typedef {{id:string, sort: string}} MessengerRoomPayload
 * @typedef {Object.<string,MessengerRoomPayload>} MessengerRoomsPayload
 */

export const MESSENGER_ROOM_ADD_LIST = 'MESSENGER_ROOM_ADD_LIST';
export const MESSENGER_ROOM_REMOVE = 'MESSENGER_ROOM_REMOVE';

/**
 * @param {string} roomId
 * @return {{type: string}}
 */
export function messengerRoomRemove(roomId) {
  return {
    type: MESSENGER_ROOM_REMOVE,
    roomId,
  };
}

/**
 * @param {MessengerRoomsPayload} payload
 * @param {boolean} fromServer
 * @return {{type: string, payload: {id:string,sort:string}}}
 */
export function messengerRoomAddList(payload, fromServer = true) {
  return {
    type: MESSENGER_ROOM_ADD_LIST,
    payload,
    fromServer,
  };
}