import {METHOD_CLIENT_COUNT_ROOM_HISTORY} from '../../../actions/methods/client/countRoomHistory';

const initialState = {};

export function countRoomHistory(state = initialState, action) {
  switch (action.type) {
    case METHOD_CLIENT_COUNT_ROOM_HISTORY:
      return {
        ...state,
        [action.roomId]: {...action.counts},
      };
    default:
      return state;
  }
}