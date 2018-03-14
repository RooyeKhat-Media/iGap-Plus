/**
 * @flow
 */
import {concat, uniq, reverse} from 'lodash';
import {
  MESSENGER_ROOM_MESSAGE_CLEAR_MESSAGES,
  MESSENGER_ROOM_MESSAGE_CLEAR_MESSAGES_FROM_STORE,
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
      const newMessages = reverse(action.messageIds);
      newList = !state[action.roomId] ? newMessages :
        (action.before ?
          concat(state[action.roomId], newMessages) :
          concat(newMessages, state[action.roomId]));
      return {
        ...state,
        [action.roomId]: uniq(newList),
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

    case MESSENGER_ROOM_MESSAGE_CLEAR_MESSAGES_FROM_STORE:
      return {
        ...state,
        [action.roomId]: [],
      };

    case MESSENGER_ROOM_MESSAGE_CLEAR_MESSAGES:
      ([...state[action.roomId]] || []).forEach(function(messageId) {
        if (action.clearId < messageId) {
          newList.push(messageId);
        }
      });
      return {
        ...state,
        [action.roomId]: newList,
      };
    default:
      return state;
  }
}
