/**
 * @flow
 */

import {createSelector} from 'reselect';

const getCallAction = (state) =>
  state.methods.callAction;

export const getIsInCall = createSelector(
  getCallAction,
  (callAction) => {
    return {
      isInCall: callAction.isInCall,
      userId: callAction.peerUserId,
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

export const getCallPermission = createSelector(
  getVoiceCallPermission,
  getVideoCallPermission,
  (getVoiceCallPermission, getVideoCallPermission) => {
    return {
      voice: getVoiceCallPermission,
      video: getVideoCallPermission,
    };
  }
);