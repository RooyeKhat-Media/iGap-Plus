export const METHOD_USER_CONTACTS_BLOCK_OVERRIDE_LIST = 'METHOD_USER_CONTACTS_BLOCK_OVERRIDE_LIST';
export const METHOD_USER_CONTACTS_BLOCK_SET = 'METHOD_USER_CONTACTS_BLOCK_SET';
export const METHOD_USER_CONTACTS_BLOCK_UNSET = 'METHOD_USER_CONTACTS_BLOCK_UNSET';

export function overrideList(payload) {
  return {
    type: METHOD_USER_CONTACTS_BLOCK_OVERRIDE_LIST,
    payload,
  };
}

export function setBlock(userIds) {
  return {
    type: METHOD_USER_CONTACTS_BLOCK_SET,
    userIds,
  };
}

export function unSetBlock(userId) {
  return {
    type: METHOD_USER_CONTACTS_BLOCK_UNSET,
    userId,
  };
}