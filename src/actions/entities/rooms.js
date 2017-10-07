/**
 * @flow
 */

import {entitiesRoomMessagesAdd} from './roomMessages';
import {entitiesRegisteredUserAdd} from './registeredUser';
import {messengerRoomMessagePush, messengerRoomMessageUnshift} from '../messenger/roomMessages';

export const ENTITIES_ROOM_ADD = 'ENTITIES_ROOM_ADD';

/**
 * @param {NormalizedRoomEntities} rooms
 * @return {{type: string, room: FlatRoom}}
 */
export function entitiesRoomsAdd(rooms) {
  return {
    type: ENTITIES_ROOM_ADD,
    rooms,
  };
}

/**
 * @param {NormalizedRoomFullEntities} data
 * @return {Function}
 */
export function entitiesRoomsAddFull(data) {
  return function(dispatch) {
    dispatch(entitiesRegisteredUserAdd(data.entities.registeredUsers));
    dispatch(entitiesRoomMessagesAdd(data.entities.roomMessages));
    dispatch(entitiesRoomsAdd(data.entities.rooms));

    Object.keys(data.entities.rooms).forEach(function(key) {
      if (data.entities.rooms[key].firstUnreadMessage) {
        dispatch(messengerRoomMessagePush(key, data.entities.rooms[key].firstUnreadMessage));

      }
      if (data.entities.rooms[key].lastMessage) {
        dispatch(messengerRoomMessageUnshift(key, data.entities.rooms[key].lastMessage));
      }
    });

    // TODO [Amerehie] - 9/27/2017 4:13 PM - Dispatch for data.entities.registeredUsers  data.entities.roomMessages
  };
}
