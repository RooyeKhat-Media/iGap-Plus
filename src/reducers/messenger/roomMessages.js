/**
 * @flow
 */
import {concat, uniq} from 'lodash';
import {MESSENGER_ROOM_MESSAGE_CONCAT} from '../../actions/messenger/roomMessages';

const initialState = {};

export function roomMessages(state = initialState, action) {
  switch (action.type) {
    case MESSENGER_ROOM_MESSAGE_CONCAT:
      return {
        ...state,
        [action.roomId]: state[action.roomId] ? uniq(concat(state[action.roomId], action.messageIds)) : uniq(action.messageIds),
      };
    default:
      return state;
  }
}
