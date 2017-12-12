/**
 * @flow
 */

import {entitiesRoomMessagesAdd} from './roomMessages';
import {entitiesRegisteredUserAdd} from './registeredUser';
import {prepareRoomMessage} from '../../utils/app';
import {toPairs} from 'lodash';
import {setFractionIfNotExist} from '../../modules/Messenger/loadRoomHistory';

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
    const allFractionPromise = [];
    toPairs(data.entities.rooms).forEach(([roomId, room]) => {
      if (room.lastMessage) {
        const replyTo = data.entities.roomMessages[room.lastMessage] ? data.entities.roomMessages[room.lastMessage].replyTo : null;
        prepareRoomMessage(data.entities.roomMessages[room.lastMessage], roomId, false);
        prepareRoomMessage(data.entities.roomMessages[replyTo], roomId, false);
        allFractionPromise.push(setFractionIfNotExist(data.entities.roomMessages[room.lastMessage]));
      }
      if (room.firstUnreadMessage) {
        const replyTo = data.entities.roomMessages[room.firstUnreadMessage] ? data.entities.roomMessages[room.firstUnreadMessage].replyTo : null;
        allFractionPromise.push(setFractionIfNotExist(data.entities.roomMessages[room.firstUnreadMessage]));
        prepareRoomMessage(data.entities.roomMessages[room.firstUnreadMessage], roomId, false);
        prepareRoomMessage(data.entities.roomMessages[replyTo], roomId, false);
      }
    });
    return Promise.all(allFractionPromise).then(() => {
      dispatch(entitiesRoomMessagesAdd(data.entities.roomMessages));
      dispatch(entitiesRoomsAdd(data.entities.rooms));
    });
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