export const METHOD_SIGNALING_RESET = 'METHOD_SIGNALING_RESET';
export const METHOD_SIGNALING_TOGGLE_SPEAKER = 'METHOD_SIGNALING_TOGGLE_SPEAKER';
export const METHOD_SIGNALING_TOGGLE_MIC = 'METHOD_SIGNALING_TOGGLE_MIC';
export const METHOD_SIGNALING_CALL_INFO = 'METHOD_SIGNALING_CALL_INFO';
export const METHOD_SIGNALING_STATUS = 'METHOD_SIGNALING_STATUS';
export const METHOD_SIGNALING_IS_IN_CALL = 'METHOD_SIGNALING_IS_IN_CALL';
export const METHOD_SIGNALING_REMOTE_URL = 'METHOD_SIGNALING_REMOTE_URL';

export function reset() {
  return {
    type: METHOD_SIGNALING_RESET,
  };
}

export function toggleSpeaker() {
  return {
    type: METHOD_SIGNALING_TOGGLE_SPEAKER,
  };
}

export function toggleMic() {
  return {
    type: METHOD_SIGNALING_TOGGLE_MIC,
  };
}

export function callInfo(peerUserId, incoming, signalingType) {
  return {
    type: METHOD_SIGNALING_CALL_INFO,
    peerUserId,
    incoming,
    signalingType,
  };
}

export function status(status) {
  return {
    type: METHOD_SIGNALING_STATUS,
    status,
  };
}

export function isInCall(isInCall) {
  return {
    type: METHOD_SIGNALING_IS_IN_CALL,
    isInCall,
  };
}

export function remoteUrl(remoteUrl) {
  return {
    type: METHOD_SIGNALING_REMOTE_URL,
    remoteUrl,
  };
}