/**
 * @flow
 */

import * as methods from '../../constants/methods';
import isInsecure from '../../constants/methods/insecure';
import isGuestMethod from '../../constants/methods/guest';
import Client from '../../modules/Api/Client';

const priorityTable = {
  [methods.CONNECTION_SYMMETRIC_KEY]: 100000,
  [methods.HEARTBEAT]: 100000,

  //User 1xx
  [methods.USER_REGISTER]: 10000,
  [methods.USER_VERIFY]: 10000,
  [methods.USER_LOGIN]: 10000,
  // [methods.USER_PROFILE_SET_EMAIL]: 50,
  // [methods.USER_PROFILE_SET_GENDER]: 50,
  // [methods.USER_PROFILE_SET_NICKNAME]: 50,
  // [methods.USER_CONTACTS_IMPORT]: 50,
  // [methods.USER_CONTACTS_GET_LIST]: 50,
  // [methods.USER_CONTACTS_DELETE]: 50,
  // [methods.USER_CONTACTS_EDIT]: 50,
  // [methods.USER_PROFILE_GET_EMAIL]: 50,
  // [methods.USER_PROFILE_GET_GENDER]: 50,
  // [methods.USER_PROFILE_GET_NICKNAME]: 50,
  // [methods.USER_AVATAR_ADD]: 50,
  // [methods.USER_AVATAR_DELETE]: 50,
  // [methods.USER_AVATAR_GET_LIST]: 50,
  // [methods.USER_INFO]: 50,
  // [methods.USER_GET_DELETE_TOKEN]: 50,
  // [methods.USER_DELETE]: 50,
  // [methods.USER_PROFILE_SET_SELF_REMOVE]: 50,
  // [methods.USER_PROFILE_GET_SELF_REMOVE]: 50,
  // [methods.USER_PROFILE_CHECK_USERNAME]: 50,
  // [methods.USER_PROFILE_UPDATE_USERNAME]: 50,
  // [methods.USER_UPDATE_STATUS]: 50,
  // [methods.USER_SESSION_GET_ACTIVE_LIST]: 50,
  // [methods.USER_SESSION_TERMINATE]: 50,
  // [methods.USER_SESSION_LOGOUT]: 50,
  // [methods.USER_CONTACTS_BLOCK]: 50,
  // [methods.USER_CONTACTS_UNBLOCK]: 50,
  // [methods.USER_CONTACTS_GET_BLOCKED_LIST]: 50,
  [methods.USER_TWO_STEP_VERIFICATION_GET_PASSWORD_DETAIL]: 10000,
  [methods.USER_TWO_STEP_VERIFICATION_VERIFY_PASSWORD]: 10000,
  // [methods.USER_TWO_STEP_VERIFICATION_SET_PASSWORD]: 50,
  // [methods.USER_TWO_STEP_VERIFICATION_UNSET_PASSWORD]: 50,
  // [methods.USER_TWO_STEP_VERIFICATION_CHECK_PASSWORD]: 50,
  // [methods.USER_TWO_STEP_VERIFICATION_VERIFY_RECOVERY_EMAIL]: 50,
  // [methods.USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_EMAIL]: 50,
  [methods.USER_TWO_STEP_VERIFICATION_REQUEST_RECOVERY_TOKEN]: 10000,
  [methods.USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_TOKEN]: 10000,
  [methods.USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_ANSWERS]: 10000,
  // [methods.USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_QUESTION]: 50,
  // [methods.USER_TWO_STEP_VERIFICATION_CHANGE_HINT]: 50,
  // [methods.USER_TWO_STEP_VERIFICATION_RESEND_VERIFY_EMAIL]: 50,
  // [methods.USER_PRIVACY_GET_RULE]: 50,
  // [methods.USER_PRIVACY_SET_RULE]: 50,
  // [methods.USER_VERIFY_NEW_DEVICE]: 50,

  //Chat 2xx
  // [methods.CHAT_GET_ROOM]: 50,
  // [methods.CHAT_SEND_MESSAGE]: 50,
  // [methods.CHAT_UPDATE_STATUS]: 50,
  // [methods.CHAT_EDIT_MESSAGE]: 50,
  // [methods.CHAT_DELETE_MESSAGE]: 50,
  // [methods.CHAT_CLEAR_MESSAGE]: 50,
  // [methods.CHAT_DELETE]: 50,
  // [methods.CHAT_UPDATE_DRAFT]: 50,
  // [methods.CHAT_GET_DRAFT]: 50,
  // [methods.CHAT_CONVERT_TO_GROUP]: 50,
  // [methods.CHAT_SET_ACTION]: 50,

  //Group chat 3xx
  // [methods.GROUP_CREATE]: 50,
  // [methods.GROUP_ADD_MEMBER]: 50,
  // [methods.GROUP_ADD_ADMIN]: 50,
  // [methods.GROUP_ADD_MODERATOR]: 50,
  // [methods.GROUP_CLEAR_MESSAGE]: 50,
  // [methods.GROUP_EDIT]: 50,
  // [methods.GROUP_KICK_ADMIN]: 50,
  // [methods.GROUP_KICK_MEMBER]: 50,
  // [methods.GROUP_KICK_MODERATOR]: 50,
  // [methods.GROUP_LEFT]: 50,
  // [methods.GROUP_SEND_MESSAGE]: 50,
  // [methods.GROUP_UPDATE_STATUS]: 50,
  // [methods.GROUP_AVATAR_ADD]: 50,
  // [methods.GROUP_AVATAR_DELETE]: 50,
  // [methods.GROUP_AVATAR_GET_LIST]: 50,
  // [methods.GROUP_UPDATE_DRAFT]: 50,
  // [methods.GROUP_GET_DRAFT]: 50,
  // [methods.GROUP_GET_MEMBER_LIST]: 50,
  // [methods.GROUP_DELETE]: 50,
  // [methods.GROUP_SET_ACTION]: 50,
  // [methods.GROUP_DELETE_MESSAGE]: 50,
  // [methods.GROUP_CHECK_USERNAME]: 50,
  // [methods.GROUP_UPDATE_USERNAME]: 50,
  // [methods.GROUP_REMOVE_USERNAME]: 50,
  // [methods.GROUP_REVOKE_LINK]: 50,
  // [methods.GROUP_EDIT_MESSAGE]: 50,

  //Channel 4xx
  // [methods.CHANNEL_CREATE]: 50,
  // [methods.CHANNEL_ADD_MEMBER]: 50,
  // [methods.CHANNEL_ADD_ADMIN]: 50,
  // [methods.CHANNEL_ADD_MODERATOR]: 50,
  // [methods.CHANNEL_DELETE]: 50,
  // [methods.CHANNEL_EDIT]: 50,
  // [methods.CHANNEL_KICK_ADMIN]: 50,
  // [methods.CHANNEL_KICK_MEMBER]: 50,
  // [methods.CHANNEL_KICK_MODERATOR]: 50,
  // [methods.CHANNEL_LEFT]: 50,
  // [methods.CHANNEL_SEND_MESSAGE]: 50,
  // [methods.CHANNEL_DELETE_MESSAGE]: 50,
  // [methods.CHANNEL_AVATAR_ADD]: 50,
  // [methods.CHANNEL_AVATAR_DELETE]: 50,
  // [methods.CHANNEL_AVATAR_GET_LIST]: 50,
  // [methods.CHANNEL_UPDATE_DRAFT]: 50,
  // [methods.CHANNEL_GET_DRAFT]: 50,
  // [methods.CHANNEL_GET_MEMBER_LIST]: 50,
  // [methods.CHANNEL_CHECK_USERNAME]: 50,
  // [methods.CHANNEL_UPDATE_USERNAME]: 50,
  // [methods.CHANNEL_REMOVE_USERNAME]: 50,
  // [methods.CHANNEL_REVOKE_LINK]: 50,
  // [methods.CHANNEL_UPDATE_SIGNATURE]: 50,
  // [methods.CHANNEL_GET_MESSAGES_STATS]: 50,
  // [methods.CHANNEL_ADD_MESSAGE_REACTION]: 50,
  // [methods.CHANNEL_EDIT_MESSAGE]: 50,

  //Info 5xx
  [methods.INFO_LOCATION]: 10000,
  [methods.INFO_COUNTRY]: 10000,
  [methods.INFO_TIME]: 10000,
  [methods.INFO_PAGE]: 10000,
  // [methods.INFO_WALLPAPER]: 50,

  //Client 6xx
  // [methods.CLIENT_CONDITION]: 50,
  // [methods.CLIENT_GET_ROOM_LIST]: 50,
  // [methods.CLIENT_GET_ROOM]: 50,
  // [methods.CLIENT_GET_ROOM_HISTORY]: 50,
  // [methods.CLIENT_GET_ROOM_MESSAGE]: 50,
  // [methods.CLIENT_SEARCH_ROOM_HISTORY]: 50,
  // [methods.CLIENT_RESOLVE_USERNAME]: 50,
  // [methods.CLIENT_CHECK_INVITE_LINK]: 50,
  // [methods.CLIENT_JOIN_BY_INVITE_LINK]: 50,
  // [methods.CLIENT_JOIN_BY_USERNAME]: 50,
  // [methods.CLIENT_SUBSCRIBE_TO_ROOM]: 50,
  // [methods.CLIENT_UNSUBSCRIBE_FROM_ROOM]: 50,
  // [methods.CLIENT_SEARCH_USERNAME]: 50,
  // [methods.CLIENT_COUNT_ROOM_HISTORY]: 50,

  //File 7xx
  // [methods.FILE_UPLOAD_OPTION]: 50,
  // [methods.FILE_UPLOAD_INIT]: 50,
  // [methods.FILE_UPLOAD]: 50,
  // [methods.FILE_UPLOAD_STATUS]: 50,
  // [methods.FILE_INFO]: 50,
  // [methods.FILE_DOWNLOAD]: 50,

  //QrCode 8xx
  // [methods.QR_CODE_JOIN]: 50,
  // [methods.QR_CODE_RESOLVE]: 50,
  [methods.QR_CODE_NEW_DEVICE]: 10000,
  // [methods.QR_CODE_ADD_CONTACT]: 50,
  // [methods.QR_CODE_ADD_ME]: 50,

  //Signaling 9xx
  // [methods.SIGNALING_GET_CONFIGURATION]: 50,
  // [methods.SIGNALING_OFFER]: 50,
  // [methods.SIGNALING_RINGING]: 50,
  // [methods.SIGNALING_ACCEPT]: 50,
  // [methods.SIGNALING_CANDIDATE]: 50,
  // [methods.SIGNALING_LEAVE]: 50,
  // [methods.SIGNALING_SESSION_HOLD]: 50,
  // [methods.SIGNALING_GET_LOG]: 50,
  // [methods.SIGNALING_CLEAR_LOG]: 50,
  // [methods.SIGNALING_RATE]: 50,

  //Geo 10xx
  // [methods.GEO_GET_REGISTER_STATUS]: 50,
  // [methods.GEO_REGISTER]: 50,
  // [methods.GEO_UPDATE_POSITION]: 50,
  // [methods.GEO_GET_COMMENT]: 50,
  // [methods.GEO_UPDATE_COMMENT]: 50,
  // [methods.GEO_GET_NEARBY_DISTANCE]: 50,
  // [methods.GEO_GET_NEARBY_COORDINATE]: 50,

  //Push 600xx
  // [methods.PUSH_LOGIN_TOKEN]: 50,
  // [methods.PUSH_TWO_STEP_VERIFICATION]: 50,
  // [methods.PUSH_USER_INFO_EXPIRED]: 50,
  // [methods.PUSH_RATE_SIGNALING]: 50,
};

export default function(actionId) {
  let priority = priorityTable[actionId] || 50;
  if (
    (!Client.instance.isSecure && !isInsecure(actionId))
    ||
    (!Client.instance.isLoggedIn && !isGuestMethod(actionId))
  ) {
    priority = Math.floor(priority * 0.6);
  }
  return priority;
}
