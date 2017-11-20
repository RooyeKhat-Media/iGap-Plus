/**
 * @flow
 */
import {concat, uniq} from 'lodash';
import {
  MESSENGER_ROOM_MESSAGE_CONCAT,
  MESSENGER_ROOM_MESSAGE_REMOVE,
  MESSENGER_ROOM_MESSAGE_REPLACE_MESSAGE,
} from '../../actions/messenger/roomMessages';

const initialState = {};

export function roomMessages(state = initialState, action) {
  let newList = [];
  let index;
  switch (action.type) {
    case MESSENGER_ROOM_MESSAGE_CONCAT:
      return {
        ...state,
        [action.roomId]: state[action.roomId] ? uniq(concat(state[action.roomId], action.messageIds)) : uniq(action.messageIds),
      };

    case MESSENGER_ROOM_MESSAGE_REPLACE_MESSAGE:
      newList = [...state[action.roomId]] || [];
      index = newList.indexOf(action.oldMessageId);
      if (index >= 0) {
        newList[index] = action.newMessageId;
      } else {
        newList.push(action.newMessageId);
      }
      return {
        ...state,
        [action.roomId]: uniq(newList),
      };

    case MESSENGER_ROOM_MESSAGE_REMOVE:
      newList = [...state[action.roomId]] || [];
      index = newList.indexOf(action.messageId);
      if (index >= 0) {
        newList.splice(index, 1);
      }
      return {
        ...state,
        [action.roomId]: uniq(newList),
      };
    default:
      return state;
  }
}
