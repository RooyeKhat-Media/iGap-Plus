/**
 * @flow
 */
import {METHOD_SET_ACTION_CANCEL, METHOD_SET_ACTION} from '../../../actions/methods/rooms/actionList';

export function getActionList(state = {}, action) {
  switch (action.type) {
    case METHOD_SET_ACTION:
      return {
        ...state,
        [action.roomId]: {
          ...state[action.roomId],
          [action.userId]: action.action,
        },
      };
    case METHOD_SET_ACTION_CANCEL:
      const actionList = {...state[action.roomId]};
      if (actionList[action.userId]) {
        delete actionList[action.userId];
      }
      return {
        ...state,
        [action.roomId]: {...actionList},
      };
    default:
      return state;
  }
}