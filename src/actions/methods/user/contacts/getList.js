export const METHOD_USER_CONTACTS_GET_LIST = 'METHOD_USER_CONTACTS_GET_LIST';

export function getList(registeredUserIds) {
  return {
    type: METHOD_USER_CONTACTS_GET_LIST,
    registeredUserIds,
  };
}