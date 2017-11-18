export const METHOD_USER_PROFILE_SELF_REMOVE = 'METHOD_USER_PROFILE_SELF_REMOVE';

export function selfRemove(selfRemoveMonth) {
  return {
    type: METHOD_USER_PROFILE_SELF_REMOVE,
    selfRemoveMonth,
  };
}