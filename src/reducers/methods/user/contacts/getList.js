/**
 * @flow
 */
import {METHOD_USER_CONTACTS_GET_LIST} from '../../../../actions/methods/user/contacts/getList';

const registeredUserList = [];

export function contactsList(state = registeredUserList, action) {
  switch (action.type) {
    case METHOD_USER_CONTACTS_GET_LIST:
      return action.registeredUserList;
    default:
      return state;
  }
}