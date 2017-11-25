/**
 * @flow
 */

import {
  ENTITIES_ROOM_MESSAGE_ADD,
  ENTITIES_ROOM_MESSAGE_EDIT,
  ENTITIES_ROOM_MESSAGE_REMOVE,
} from '../../actions/entities/roomMessages';

const initialState = {};

export function roomMessages(state = initialState, action) {
  switch (action.type) {
    case ENTITIES_ROOM_MESSAGE_ADD:
      return {
        ...state,
        ...action.roomMessages,
      };
    case ENTITIES_ROOM_MESSAGE_REMOVE:
      const newState = {...state};
      delete newState[action.messageId];
      return newState;
    case ENTITIES_ROOM_MESSAGE_EDIT:
      return {
        ...state,
        [action.messageId]: {
          ...state[action.messageId],
          ...action.payload,
        },
      };
    default:
      return state;
  }
}
