export const METHOD_USER_PROFILE_NICKNAME = 'METHOD_USER_PROFILE_NICKNAME';

export function setNickname(nickName) {
  return {
    type: METHOD_USER_PROFILE_NICKNAME,
    nickName,
  };
}