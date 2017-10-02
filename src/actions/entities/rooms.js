/**
 * @flow
 */

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
    dispatch(entitiesRoomsAdd(data.entities.rooms));
    // TODO [Amerehie] - 9/27/2017 4:13 PM - Dispatch for data.entities.registeredUsers  data.entities.roomMessages
  };
}

