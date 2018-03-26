/**
 * @flow
 */

import {createSelector} from 'reselect';
import {CLIENT_STATUS} from '../../../modules/Api/index';

const getCallAction = (state) =>
  state.methods.callAction;

export const getIsInCall = createSelector(
  (state) => state.methods.callAction.isInCall,
  (state) => state.methods.callAction.peerUserId,
  (isInCall, peerUserId) => {
    return {
      isInCall: isInCall,
      userId: peerUserId,
    };
  }
);

export const getVoiceCallPermission = createSelector(
  getCallAction,
  (callAction) => {
    return (!callAction.isInCall && callAction.voiceCalling);
  }
);

export const getVideoCallPermission = createSelector(
  getCallAction,
  (callAction) => {
    return (!callAction.isInCall && callAction.videoCalling);
  }
);

export const isLoggedIn = createSelector(
  (state) => state.api,
  (status) => {
    return status.status === CLIENT_STATUS.LOGGED_IN;
  }
);

export const getCallPermission = createSelector(
  getVoiceCallPermission,
  getVideoCallPermission,
  isLoggedIn,
  (getVoiceCallPermission, getVideoCallPermission, isLoggedIn) => {
    return {
      voice: getVoiceCallPermission && isLoggedIn,
      video: getVideoCallPermission && isLoggedIn,
    };
  }
);