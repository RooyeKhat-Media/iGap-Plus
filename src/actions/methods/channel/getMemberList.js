export const METHOD_CHANNEL_GET_MEMBER_LIST = 'METHOD_CHANNEL_GET_MEMBER_LIST';
export const METHOD_CHANNEL_GET_MEMBER_LIST_RESET_LIST = 'METHOD_CHANNEL_GET_MEMBER_LIST_RESET_LIST';

/**
 * @param memberList
 * @returns {{type: string, memberList: *}}
 */
export function getMemberList(memberList) {
  return {
    type: METHOD_CHANNEL_GET_MEMBER_LIST,
    memberList,
  };
}

/**
 * @returns {{type: string}}
 */
export function resetMemberList() {
  return {
    type: METHOD_CHANNEL_GET_MEMBER_LIST_RESET_LIST,
  };
}