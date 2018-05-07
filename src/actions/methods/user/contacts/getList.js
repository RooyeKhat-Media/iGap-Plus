export const METHOD_USER_CONTACTS_GET_LIST = 'METHOD_USER_CONTACTS_GET_LIST';
export const METHOD_USER_CONTACTS_ADD_LIST = 'METHOD_USER_CONTACTS_ADD_LIST';
export const METHOD_USER_CONTACTS_DELETE_CONTACT = 'METHOD_USER_CONTACTS_DELETE_CONTACT';

export function getList(registeredUserIds) {
  return {
    type: METHOD_USER_CONTACTS_GET_LIST,
    registeredUserIds,
  };
}
export function addList(registeredUserIds) {
  return {
    type: METHOD_USER_CONTACTS_ADD_LIST,
    registeredUserIds,
  };
}

export function deleteContact(id) {
  return {
    type: METHOD_USER_CONTACTS_DELETE_CONTACT,
    id,
  };
}