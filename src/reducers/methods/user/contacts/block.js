/**
 * @flow
 */
import {
  METHOD_USER_CONTACTS_BLOCK_OVERRIDE_LIST,
  METHOD_USER_CONTACTS_BLOCK_SET,
  METHOD_USER_CONTACTS_BLOCK_UNSET,
} from '../../../../actions/methods/user/contacts/block';

let sort = 0;

export function blockUser(state = {}, action) {
  switch (action.type) {
    case METHOD_USER_CONTACTS_BLOCK_OVERRIDE_LIST:
      return action.payload;
    case METHOD_USER_CONTACTS_BLOCK_SET:
      const newState = {...state};
      for (const userId of action.userIds) {
        newState[userId] = {
          userId,
          sort: --sort,
        };
      }
      return newState;
    case METHOD_USER_CONTACTS_BLOCK_UNSET:
      let blockListUnset = {...state};
      delete blockListUnset[action.userId];
      return blockListUnset;
    default:
      return state;
  }
}

