/**
 * @flow
 */
import {assign, forIn} from 'lodash';
import {MESSENGER_ROOM_ADD_LIST, MESSENGER_ROOM_REMOVE} from '../../actions/messenger/rooms';
import {ENTITIES_ROOM_EDIT} from '../../actions/entities/rooms';

const initialState = {};

export function rooms(state = initialState, action) {
  let newStateList;
  switch (action.type) {

    case MESSENGER_ROOM_ADD_LIST:
      newStateList = {};
      forIn(action.payload, (value, key) => {
        newStateList[key] = assign(state[key] || {pinId: '0'}, value);
      });
      return {
        ...state,
        ...newStateList,
      };

    case MESSENGER_ROOM_REMOVE:
      newStateList = {...state};
      delete newStateList[action.roomId];
      return newStateList;
    case ENTITIES_ROOM_EDIT:
      if (state[action.id] && (action.payload.lastMessage || action.payload.pinId)) {
        newStateList = {...state};
        if (action.payload.lastMessage) {
          newStateList[action.id] = {
            ...newStateList[action.id],
            sort: action.payload.lastMessage,
          };
        }
        if (action.payload.pinId) {
          newStateList[action.id] = {
            ...newStateList[action.id],
            pinId: action.payload.pinId,
          };
        }
        return newStateList;
      }
      return state;
    default:
      return state;
  }
}
