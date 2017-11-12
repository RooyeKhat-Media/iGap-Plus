export const METHOD_USER_SESSION_TERMINATE = 'METHOD_USER_SESSION_TERMINATE';
export const METHOD_USER_SESSION_OVERRIDE_LIST = 'METHOD_USER_SESSION_OVERRIDE_LIST';

export function terminate(ids) {
  return {
    type: METHOD_USER_SESSION_TERMINATE,
    ids,
  };
}

export function overrideList(activeSessionList) {
  return {
    type: METHOD_USER_SESSION_OVERRIDE_LIST,
    activeSessionList,
  };
}