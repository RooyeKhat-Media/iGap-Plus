export const METHOD_USER_CONTACTS_GET_LIST = 'METHOD_USER_CONTACTS_GET_LIST';

export function getList(registeredUserList) {
  return {
    type: METHOD_USER_CONTACTS_GET_LIST,
    registeredUserList,
  };
}