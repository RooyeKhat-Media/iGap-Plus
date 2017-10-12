/**
 * @flow
 */

import {ENTITIES_REGISTERED_USER_ADD} from '../../actions/entities/registeredUser';

const initialState = {};

export function registeredUsers(state = initialState, action) {
  switch (action.type) {
    case ENTITIES_REGISTERED_USER_ADD:
      return {
        ...state,
        ...action.registeredUsers,
      };
    default:
      return state;
  }
}
