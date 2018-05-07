/**
 * @flow
 */
import {remove, concat} from 'lodash';
import {
  METHOD_USER_CONTACTS_ADD_LIST, METHOD_USER_CONTACTS_DELETE_CONTACT,
  METHOD_USER_CONTACTS_GET_LIST,
} from '../../../../actions/methods/user/contacts/getList';

const registeredUserIds = [];

export function contactsList(state = registeredUserIds, action) {
  switch (action.type) {
    case METHOD_USER_CONTACTS_GET_LIST:
      return action.registeredUserIds;
    case METHOD_USER_CONTACTS_ADD_LIST:
      return concat(state, action.registeredUserIds);
    case METHOD_USER_CONTACTS_DELETE_CONTACT:
      const newState = [...state];
      remove(newState, (id) => id === action.id);
      return newState;
    default:
      return state;
  }
}