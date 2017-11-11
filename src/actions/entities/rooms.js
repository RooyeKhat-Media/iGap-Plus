/**
 * @flow
 */

import {entitiesRoomMessagesAdd} from './roomMessages';
import {entitiesRegisteredUserAdd} from './registeredUser';
import {prepareRoomMessage} from '../../utils/app';

export const ENTITIES_ROOM_ADD = 'ENTITIES_ROOM_ADD';
export const ENTITIES_ROOM_EDIT = 'ENTITIES_ROOM_EDIT';
export const ENTITIES_ROOM_REMOVE = 'ENTITIES_ROOM_REMOVE';

/**
 * @param {NormalizedRoomEntities} rooms
 * @param {boolean} fromServer
 * @return {{type: string, rooms: NormalizedRoomEntities, fromServer:boolean}}
 */
export function entitiesRoomsAdd(rooms, fromServer = true) {
  return {
    type: ENTITIES_ROOM_ADD,
    rooms,
    fromServer,
  };
}

/**
 * @param {NormalizedRoomFullEntities} data
 * @return {Function}
 */
export function entitiesRoomsAddFull(data) {
  return function(dispatch) {
    if (data.entities.registeredUsers) {
      dispatch(entitiesRegisteredUserAdd(data.entities.registeredUsers));
    }
    for (const roomId in data.entities.rooms) {
      if (data.entities.rooms.hasOwnProperty(roomId)) {
        if (data.entities.rooms[roomId].lastMessage) {
          const lastMessage = data.entities.rooms[roomId].lastMessage;
          prepareRoomMessage(data.entities.roomMessages[lastMessage], roomId);
        }
        if (data.entities.rooms[roomId].firstUnreadMessage) {
          const firstUnreadMessage = data.entities.rooms[roomId].firstUnreadMessage;
          prepareRoomMessage(data.entities.roomMessages[firstUnreadMessage], roomId);
        }
      }
    }
    dispatch(entitiesRoomMessagesAdd(data.entities.roomMessages));
    dispatch(entitiesRoomsAdd(data.entities.rooms));

    // Object.keys(data.entities.rooms).forEach(function(key) {
    //   if (data.entities.rooms[key].firstUnreadMessage) {
    //     dispatch(messengerRoomMessagePush(key, data.entities.rooms[key].firstUnreadMessage));
    //   }
    //   if (data.entities.rooms[key].lastMessage) {
    //     dispatch(messengerRoomMessageUnshift(key, data.entities.rooms[key].lastMessage));
    //   }
    // });

    // TODO [Amerehie] - 9/27/2017 4:13 PM - Dispatch for data.entities.registeredUsers  data.entities.roomMessages
  };
}

/**
 * @param {string} id
 * @param {object} payload
 * @param {boolean} updateDb
 * @returns {{type: string, payload: object, fromServer: boolean}}
 */
export function entitiesRoomEdit(id, payload, updateDb = true) {
  return {
    type: ENTITIES_ROOM_EDIT,
    id,
    payload,
    updateDb,
  };
}

/**
 * @param {string} id
 * @returns {{type: string, id: string}}
 */
export function entitiesRoomRemove(id) {
  return {
    type: ENTITIES_ROOM_REMOVE,
    id,
  };
}