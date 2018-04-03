/**
 * @flow
 */

import {
  ENTITIES_ROOM_MESSAGE_ADD,
  ENTITIES_ROOM_MESSAGE_EDIT,
  ENTITIES_ROOM_MESSAGE_REMOVE,
} from '../../actions/entities/roomMessages';
import {MESSENGER_ROOM_MESSAGE_CLEAR_MESSAGES} from '../../actions/messenger/roomMessages';

const initialState = {};

export function roomMessages(state = initialState, action) {
  let newState = {};
  switch (action.type) {
    case ENTITIES_ROOM_MESSAGE_ADD:
      return {
        ...state,
        ...action.roomMessages,
      };
    case ENTITIES_ROOM_MESSAGE_REMOVE:
      newState = {...state};
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
    case MESSENGER_ROOM_MESSAGE_CLEAR_MESSAGES:
      newState = {...state};
      for (const id in newState) {
        if (newState[id].roomId === action.roomId && id <= action.clearId) {
          delete newState[id];
        }
      }
      return newState;
    default:
      return state;
  }
}
