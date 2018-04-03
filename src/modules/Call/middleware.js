/**
 * @flow
 */
import {CLIENT_STATUS_CHANGED} from '../../actions/api';
import InCallManager from '../Call/inCall';
import {SIGNALING_STATUS} from '../../constants/signaling';
import Call from './index';
import {CLIENT_STATUS} from '../Api/index';
import {Proto} from '../../modules/Proto/index';
import {
  METHOD_SIGNALING_CALL_INFO,
  METHOD_SIGNALING_RESET,
  METHOD_SIGNALING_STATUS,
  METHOD_SIGNALING_TOGGLE_MIC,
  METHOD_SIGNALING_TOGGLE_SPEAKER, toggleSpeaker,
} from '../../actions/methods/signaling/callAction';

let isPlayRingBack = false;
let isPlayRingtone = false;

const middleware = ({dispatch, getState}) => next => action => {

  switch (action.type) {
    case METHOD_SIGNALING_RESET:
      Call.instance.resetValue();
      resetIncallManager();
      break;
    case METHOD_SIGNALING_TOGGLE_SPEAKER:
      InCallManager.setSpeakerphoneOn(!getState().methods.callAction.speaker);
      break;
    case METHOD_SIGNALING_TOGGLE_MIC:
      InCallManager.setMicrophoneMute(getState().methods.callAction.mic);
      break;
    case METHOD_SIGNALING_CALL_INFO :
      manageRingtone(getState().methods.callAction.status, action.incoming);
      break;
    case METHOD_SIGNALING_STATUS:
      manageRingtone(action.status, getState().methods.callAction.incoming);
      if (action.status === SIGNALING_STATUS.CONNECTED && getState().methods.callAction.signalingType === Proto.SignalingOffer.Type.VIDEO_CALLING && !getState().methods.callAction.speaker) {
        dispatch(toggleSpeaker());
      }
      break;
    case CLIENT_STATUS_CHANGED:
      if (action.status === CLIENT_STATUS.DISCONNECTED && getState().methods.callAction.isInCall) {
        Call.instance.resetValue();
      }
      break;
  }
  return next(action);
};

function manageRingtone(status, incoming) {
  switch (status) {
    case SIGNALING_STATUS.CALLING:
      if (incoming) {
        isPlayRingtone = true;
        InCallManager.startRingtone('_DEFAULT_');
      } else {
        InCallManager.start({media: 'audio', ringback: '_BUNDLE_'});
        isPlayRingBack = true;
      }
      break;
    case SIGNALING_STATUS.RINGING:
      // nothing to do  only for manage call
      break;
    default :
      if (isPlayRingBack) {
        InCallManager.stopRingback();
        isPlayRingBack = false;
      }
      if (isPlayRingtone) {
        isPlayRingtone = false;
        InCallManager.stopRingtone();
      }
      if (status === SIGNALING_STATUS.BUSY) {
        InCallManager.stop({busytone: '_BUNDLE_'});
      }
      break;
  }
}

function resetIncallManager() {
  if (isPlayRingBack) {
    InCallManager.stopRingback();
    isPlayRingBack = false;
  }
  if (isPlayRingtone) {
    isPlayRingtone = false;
    InCallManager.stopRingtone();
  }

  InCallManager.setSpeakerphoneOn(false);
  InCallManager.setMicrophoneMute(false);
  InCallManager.stop();
}

export function setRingtoneStatuse(status) {
  isPlayRingtone = status;
}

export default middleware;