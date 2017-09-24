/**
 * @flow
 */
import {METHOD_CLIENT_GET_ROOM_LIST} from '../../../actions/methods/client/getRoomList';

const rooms = [];

export function getRoom(state = rooms, action) {
  switch (action.type) {
    case METHOD_CLIENT_GET_ROOM_LIST:
      return action.rooms;
    default:
      return state;
  }
}