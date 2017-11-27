/**
 * @flow
 */

import {entitiesRoomMessagesAdd} from './roomMessages';
import {entitiesRegisteredUserAdd} from './registeredUser';
import {prepareRoomMessage} from '../../utils/app';
import {toPairs} from 'lodash';

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
    toPairs(data.entities.rooms).forEach(([roomId, room]) => {
      if (room.lastMessage) {
        const replyTo = data.entities.roomMessages[room.lastMessage] ? data.entities.roomMessages[room.lastMessage].replyTo : null;
        prepareRoomMessage(data.entities.roomMessages[room.lastMessage], roomId);
        prepareRoomMessage(data.entities.roomMessages[replyTo], roomId);
      }
      if (room.firstUnreadMessage) {
        const replyTo = data.entities.roomMessages[room.firstUnreadMessage] ? data.entities.roomMessages[room.firstUnreadMessage].replyTo : null;
        prepareRoomMessage(data.entities.roomMessages[room.firstUnreadMessage], roomId);
        prepareRoomMessage(data.entities.roomMessages[replyTo], roomId);
      }
    });
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