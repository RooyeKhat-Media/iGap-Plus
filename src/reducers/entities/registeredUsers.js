/**
 * @flow
 */

import {ENTITIES_REGISTERED_USER_ADD, ENTITIES_REGISTERED_USER_EDIT} from '../../actions/entities/registeredUser';

const initialState = {};

export function registeredUsers(state = initialState, action) {
  switch (action.type) {
    case ENTITIES_REGISTERED_USER_ADD:
      return {
        ...state,
        ...action.registeredUsers,
      };
    case ENTITIES_REGISTERED_USER_EDIT:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          ...action.payload,
        },
      };
    default:
      return state;
  }
}
