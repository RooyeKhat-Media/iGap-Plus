export const METHOD_SIGNALING_LOG_LIST = 'METHOD_SIGNALING_LOG_LIST';
export const METHOD_SIGNALING_CLEAR_LOG = 'METHOD_SIGNALING_CLEAR_LOG';

export function getLogList(logList) {
  return {
    type: METHOD_SIGNALING_LOG_LIST,
    logList,
  };
}

export function clearLogList(clearId) {
  return {
    type: METHOD_SIGNALING_CLEAR_LOG,
    clearId,
  };
}