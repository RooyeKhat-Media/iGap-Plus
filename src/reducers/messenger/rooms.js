/**
 * @flow
 */

import {
  MESSENGER_ROOM_ADD,
  MESSENGER_ROOM_ADD_LIST,
  MESSENGER_ROOM_OVERRIDE_LIST,
  MESSENGER_ROOM_REMOVE,
} from '../../actions/messenger/rooms';

const initialState = {};

export function rooms(state = initialState, action) {
  switch (action.type) {
    case MESSENGER_ROOM_ADD:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };

    case MESSENGER_ROOM_ADD_LIST:
      return {
        ...state,
        ...action.payload,
      };

    case MESSENGER_ROOM_OVERRIDE_LIST:
      return action.payload;

    case MESSENGER_ROOM_REMOVE:
      const newState = {...state};
      delete newState[action.roomId];
      return newState;

    default:
      return state;
  }
}
