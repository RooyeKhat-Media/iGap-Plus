/**
 * @flow
 */

import {MESSENGER_ROOM_MESSAGE_PUSH, MESSENGER_ROOM_MESSAGE_UNSHIFT} from '../../actions/messenger/roomMessages';

const initialState = {};

export function roomMessages(state = initialState, action) {
  switch (action.type) {
    case MESSENGER_ROOM_MESSAGE_PUSH:
      return {
        ...state,
        [action.roomId]: [
          ...state[action.roomId].filter(id => id !== action.messageId),
          action.messageId,
        ],
      };
    case MESSENGER_ROOM_MESSAGE_UNSHIFT:
      return {
        ...state,
        [action.roomId]: [
          action.messageId,
          ...state[action.roomId].filter(id => id !== action.messageId),
        ],
      };
    default:
      return state;
  }
}
