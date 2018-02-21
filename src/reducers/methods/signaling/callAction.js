/**
 * @flow
 */
import {SIGNALING_STATUS} from '../../../constants/signaling';
import {
  METHOD_SIGNALING_CALL_INFO,
  METHOD_SIGNALING_IS_IN_CALL,
  METHOD_SIGNALING_REMOTE_URL,
  METHOD_SIGNALING_RESET,
  METHOD_SIGNALING_SET_PERMISSION,
  METHOD_SIGNALING_STATUS,
  METHOD_SIGNALING_TOGGLE_MIC,
  METHOD_SIGNALING_TOGGLE_SPEAKER,
} from '../../../actions/methods/signaling/callAction';

const defaultValue = {
  mic: true,
  speaker: false,
  peerUserId: 0,
  incoming: false,
  signalingType: null,
  status: SIGNALING_STATUS.CALLING,
  startTime: 0,
  isInCall: false,
  remoteUrl: '',
  voiceCalling: false,
  videoCalling: false,
  screenSharing: false,
  secretChat: false,
};

export function callAction(state = defaultValue, action) {

  switch (action.type) {
    case METHOD_SIGNALING_RESET:
      return {
        ...defaultValue,
        voiceCalling: state.voiceCalling,
        videoCalling: state.videoCalling,
        screenSharing: state.screenSharing,
        secretChat: state.secretChat,
      };
    case METHOD_SIGNALING_REMOTE_URL:
      return {
        ...state,
        remoteUrl: action.remoteUrl,
      };
    case METHOD_SIGNALING_TOGGLE_SPEAKER:
      return {
        ...state,
        speaker: !state.speaker,
      };
    case METHOD_SIGNALING_TOGGLE_MIC:
      return {
        ...state,
        mic: !state.mic,
      };
    case METHOD_SIGNALING_CALL_INFO :
      return {
        ...state,
        peerUserId: action.peerUserId,
        incoming: action.incoming,
        signalingType: action.signalingType,
      };
    case METHOD_SIGNALING_STATUS:
      const newState = {
        ...state,
        status: action.status,
      };
      if (action.status === SIGNALING_STATUS.CONNECTED) {
        newState.startTime = new Date().getTime();
      }
      return newState;
    case METHOD_SIGNALING_IS_IN_CALL :
      return {
        ...state,
        isInCall: action.isInCall,
      };
    case METHOD_SIGNALING_SET_PERMISSION:
      return {
        ...state,
        voiceCalling: action.voiceCalling,
        videoCalling: action.videoCalling,
        screenSharing: action.screenSharing,
        secretChat: action.secretChat,
      };
    default:
      return state;
  }
}