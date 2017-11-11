/**
 * @flow
 */

import {ENTITIES_ROOM_ADD, ENTITIES_ROOM_EDIT, ENTITIES_ROOM_REMOVE} from '../../actions/entities/rooms';

const initialState = {};

export function rooms(state = initialState, action) {
  switch (action.type) {
    case ENTITIES_ROOM_ADD:
      return {
        ...state,
        ...action.rooms,
      };
    case ENTITIES_ROOM_EDIT:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          ...action.payload,
        },
      };
    case ENTITIES_ROOM_REMOVE:
      const newState = {...state};
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
}
