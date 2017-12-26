export const METHOD_SET_ACTION = 'METHOD_SET_ACTION';
export const METHOD_SET_ACTION_CANCEL = 'METHOD_SET_ACTION_CANCEL';

export function setAction(roomId, action, userId) {
  return {
    type: METHOD_SET_ACTION,
    roomId,
    action,
    userId,
  };
}

export function cancelAction(roomId, userId) {
  return {
    type: METHOD_SET_ACTION_CANCEL,
    roomId,
    userId,
  };
}