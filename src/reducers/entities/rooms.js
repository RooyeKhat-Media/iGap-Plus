/**
 * @flow
 */

import {ENTITIES_ROOM_ADD} from '../../actions/entities/rooms';

const initialState = {};

export function rooms(state = initialState, action) {
  switch (action.type) {
    case ENTITIES_ROOM_ADD:
      return {
        ...state,
        ...action.rooms,
      };
    default:
      return state;
  }
}
