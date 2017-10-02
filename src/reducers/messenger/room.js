/**
 * @flow
 */

import {MESSENGER_ROOM_ADD, MESSENGER_ROOM_OVERRIDE_LIST} from '../../actions/messenger/room';

const initialState = [];

export function room(state = initialState, action) {
  switch (action.type) {
    case MESSENGER_ROOM_ADD:
      return [
        ...state,
        action.roomId,
      ];
    case MESSENGER_ROOM_OVERRIDE_LIST:
      return action.roomIds;
    default:
      return state;
  }
}
