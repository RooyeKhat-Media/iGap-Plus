export const METHOD_SIGNALING_LOG_LIST = 'METHOD_SIGNALING_LOG_LIST';
export const METHOD_SIGNALING_ADD_LOG = 'METHOD_SIGNALING_ADD_LOG';

export function getList(logList) {
  return {
    type: METHOD_SIGNALING_LOG_LIST,
    logList,
  };
}

export function addLog(log) {
  return {
    type: METHOD_SIGNALING_ADD_LOG,
    log,
  };
}