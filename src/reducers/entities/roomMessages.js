/**
 * @flow
 */

import {ENTITIES_ROOM_MESSAGE_ADD} from '../../actions/entities/roomMessages';

const initialState = {};

export function roomMessages(state = initialState, action) {
  switch (action.type) {
    case ENTITIES_ROOM_MESSAGE_ADD:
      return {
        ...state,
        ...action.roomMessages,
      };
    default:
      return state;
  }
}
