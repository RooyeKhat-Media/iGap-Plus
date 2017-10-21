/**
 * @flow
 */
import {METHOD_USER_CONTACTS_GET_LIST} from '../../../../actions/methods/user/contacts/getList';

const registeredUserIds = [];

export function contactsList(state = registeredUserIds, action) {
  switch (action.type) {
    case METHOD_USER_CONTACTS_GET_LIST:
      return action.registeredUserIds;
    default:
      return state;
  }
}