/**
 * @flow
 */
import 'es6-symbol/implement';

export const SIGNALING_STATUS = {
  DISCONNECTED: Symbol('DISCONNECTED'),
  CALLING: Symbol('CALLING'),
  RINGING: Symbol('RINGING'),
  CONNECTING: Symbol('CONNECTING'),
  CONNECTED: Symbol('CONNECTED'),
  REJECTED: Symbol('REJECTED'),
  NOT_ANSWERED: Symbol('NOT_ANSWERED'),
  UNAVAILABLE: Symbol('UNAVAILABLE'),
  BUSY: Symbol('BUSY'),
};

export const SIGNALING_ACTION = {
  TOGGLE_MIC: Symbol('TOGGLE_MIC'),
  TOGGLE_SPEAKER: Symbol('TOGGLE_SPEAKER'),
  CHAT: Symbol('CHAT'),
  CHAT_AND_CLOSE: Symbol('CHAT_AND_CLOSE'),
  ANSWER: Symbol('ANSWER'),
  REJECT: Symbol('REJECT'),
};
