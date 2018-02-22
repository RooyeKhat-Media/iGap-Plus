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


const middleware = ({dispatch, getState}) => next => action => {

  switch (action.type) {
    case METHOD_SIGNALING_RESET:
      InCallManager.setSpeakerphoneOn(false);
      InCallManager.setMicrophoneMute(false);
      Call.instance.resetValue();
      InCallManager.stop();
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
      if (action.status === CLIENT_STATUS.DISCONNECTED) {
        Call.instance.resetValue();
      }
      break;
  }

  return next(action);
};

let isPlayRingtone = false;
let isPlayRingBack = false;

function manageRingtone(status, incoming) {
  switch (status) {
    case SIGNALING_STATUS.CALLING:
      if (incoming) {
        InCallManager.startRingtone('_DEFAULT_');
        isPlayRingtone = true;
      }
      break;
    case SIGNALING_STATUS.RINGING:
      InCallManager.start({media: 'audio', ringback: '_BUNDLE_'});
      isPlayRingBack = true;
      break;
    default :
      if (isPlayRingtone) {
        InCallManager.stopRingtone();
        isPlayRingtone = false;
      }
      if (isPlayRingBack) {
        InCallManager.stopRingback();
        isPlayRingBack = false;
      }
      if (status === SIGNALING_STATUS.BUSY) {
        InCallManager.stop({busytone: '_BUNDLE_'});
      }
      break;
  }
}

export default middleware;