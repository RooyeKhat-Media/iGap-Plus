/**
 * @flow
 */

import * as methods from '../../constants/methods';
//System xx
import Error from './Error';
import ConnectionSecuring from './Connection/Securing';
import ConnectionSymmetricKey from './Connection/SymmetricKey';
import Heartbeat from './Heartbeat';
//User 1xx
import UserRegister from './User/Register';
import UserVerify from './User/Verify';
import UserLogin from './User/Login';
import UserProfileSetEmail from './User/Profile/SetEmail';
import UserProfileSetGender from './User/Profile/SetGender';
import UserProfileSetNickname from './User/Profile/SetNickname';
import UserContactsImport from './User/Contacts/Import';
import UserContactsGetList from './User/Contacts/GetList';
import UserContactsDelete from './User/Contacts/Delete';
import UserContactsEdit from './User/Contacts/Edit';
import UserProfileGetEmail from './User/Profile/GetEmail';
import UserProfileGetGender from './User/Profile/GetGender';
import UserProfileGetNickname from './User/Profile/GetNickname';
import UserProfileGetBio from './User/Profile/GetBio';
import UserProfileSetBio from './User/Profile/SetBio';
import UserAvatarAdd from './User/Avatar/Add';
import UserAvatarDelete from './User/Avatar/Delete';
import UserAvatarGetList from './User/Avatar/GetList';
import UserInfo from './User/Info';
import UserGetDeleteToken from './User/GetDeleteToken';
import UserDelete from './User/Delete';
import UserProfileSetSelfRemove from './User/Profile/SetSelfRemove';
import UserProfileGetSelfRemove from './User/Profile/GetSelfRemove';
import UserProfileCheckUsername from './User/Profile/CheckUsername';
import UserProfileUpdateUsername from './User/Profile/UpdateUsername';
import UserUpdateStatus from './User/UpdateStatus';
import UserSessionGetActiveList from './User/Session/GetActiveList';
import UserSessionTerminate from './User/Session/Terminate';
import UserSessionLogout from './User/Session/Logout';
import UserContactsBlock from './User/Contacts/Block';
import UserContactsUnblock from './User/Contacts/Unblock';
import UserContactsGetBlockedList from './User/Contacts/GetBlockedList';
import UserTwoStepVerificationGetPasswordDetail from './User/TwoStepVerification/GetPasswordDetail';
import UserTwoStepVerificationVerifyPassword from './User/TwoStepVerification/VerifyPassword';
import UserTwoStepVerificationSetPassword from './User/TwoStepVerification/SetPassword';
import UserTwoStepVerificationUnsetPassword from './User/TwoStepVerification/UnsetPassword';
import UserTwoStepVerificationCheckPassword from './User/TwoStepVerification/CheckPassword';
import UserTwoStepVerificationVerifyRecoveryEmail from './User/TwoStepVerification/VerifyRecoveryEmail';
import UserTwoStepVerificationChangeRecoveryEmail from './User/TwoStepVerification/ChangeRecoveryEmail';
import UserTwoStepVerificationRequestRecoveryToken from './User/TwoStepVerification/RequestRecoveryToken';
import UserTwoStepVerificationRecoverPasswordByToken from './User/TwoStepVerification/RecoverPasswordByToken';
import UserTwoStepVerificationRecoverPasswordByAnswers from './User/TwoStepVerification/RecoverPasswordByAnswers';
import UserTwoStepVerificationChangeRecoveryQuestion from './User/TwoStepVerification/ChangeRecoveryQuestion';
import UserTwoStepVerificationChangeHint from './User/TwoStepVerification/ChangeHint';
import UserTwoStepVerificationResendVerifyEmail from './User/TwoStepVerification/ResendVerifyEmail';
import UserPrivacyGetRule from './User/Privacy/GetRule';
import UserPrivacySetRule from './User/Privacy/SetRule';
import UserVerifyNewDevice from './User/VerifyNewDevice';
//Chat 2xx
import ChatGetRoom from './Chat/GetRoom';
import ChatSendMessage from './Chat/SendMessage';
import ChatUpdateStatus from './Chat/UpdateStatus';
import ChatEditMessage from './Chat/EditMessage';
import ChatDeleteMessage from './Chat/DeleteMessage';
import ChatClearMessage from './Chat/ClearMessage';
import ChatDelete from './Chat/Delete';
import ChatUpdateDraft from './Chat/UpdateDraft';
import ChatGetDraft from './Chat/GetDraft';
import ChatConvertToGroup from './Chat/ConvertToGroup';
import ChatSetAction from './Chat/SetAction';
//Group chat 3xx
import GroupCreate from './Group/Create';
import GroupAddMember from './Group/AddMember';
import GroupAddAdmin from './Group/AddAdmin';
import GroupAddModerator from './Group/AddModerator';
import GroupClearMessage from './Group/ClearMessage';
import GroupEdit from './Group/Edit';
import GroupKickAdmin from './Group/KickAdmin';
import GroupKickMember from './Group/KickMember';
import GroupKickModerator from './Group/KickModerator';
import GroupLeft from './Group/Left';
import GroupSendMessage from './Group/SendMessage';
import GroupUpdateStatus from './Group/UpdateStatus';
import GroupAvatarAdd from './Group/Avatar/Add';
import GroupAvatarDelete from './Group/Avatar/Delete';
import GroupAvatarGetList from './Group/Avatar/GetList';
import GroupUpdateDraft from './Group/UpdateDraft';
import GroupGetDraft from './Group/GetDraft';
import GroupGetMemberList from './Group/GetMemberList';
import GroupDelete from './Group/Delete';
import GroupSetAction from './Group/SetAction';
import GroupDeleteMessage from './Group/DeleteMessage';
import GroupCheckUsername from './Group/CheckUsername';
import GroupUpdateUsername from './Group/UpdateUsername';
import GroupRemoveUsername from './Group/RemoveUsername';
import GroupRevokeLink from './Group/RevokeLink';
import GroupEditMessage from './Group/EditMessage';
//Channel 4xx
import ChannelCreate from './Channel/Create';
import ChannelAddMember from './Channel/AddMember';
import ChannelAddAdmin from './Channel/AddAdmin';
import ChannelAddModerator from './Channel/AddModerator';
import ChannelDelete from './Channel/Delete';
import ChannelEdit from './Channel/Edit';
import ChannelKickAdmin from './Channel/KickAdmin';
import ChannelKickMember from './Channel/KickMember';
import ChannelKickModerator from './Channel/KickModerator';
import ChannelLeft from './Channel/Left';
import ChannelSendMessage from './Channel/SendMessage';
import ChannelDeleteMessage from './Channel/DeleteMessage';
import ChannelAvatarAdd from './Channel/Avatar/Add';
import ChannelAvatarDelete from './Channel/Avatar/Delete';
import ChannelAvatarGetList from './Channel/Avatar/GetList';
import ChannelUpdateDraft from './Channel/UpdateDraft';
import ChannelGetDraft from './Channel/GetDraft';
import ChannelGetMemberList from './Channel/GetMemberList';
import ChannelCheckUsername from './Channel/CheckUsername';
import ChannelUpdateUsername from './Channel/UpdateUsername';
import ChannelRemoveUsername from './Channel/RemoveUsername';
import ChannelRevokeLink from './Channel/RevokeLink';
import ChannelUpdateSignature from './Channel/UpdateSignature';
import ChannelGetMessagesStats from './Channel/GetMessagesStats';
import ChannelAddMessageReaction from './Channel/AddMessageReaction';
import ChannelEditMessage from './Channel/EditMessage';
//Info 5xx
import InfoLocation from './Info/Location';
import InfoCountry from './Info/Country';
import InfoTime from './Info/Time';
import InfoPage from './Info/Page';
import InfoWallpaper from './Info/Wallpaper';
//Client 6xx
import ClientCondition from './Client/Condition';
import ClientGetRoomList from './Client/GetRoomList';
import ClientGetRoom from './Client/GetRoom';
import ClientGetRoomHistory from './Client/GetRoomHistory';
import ClientGetRoomMessage from './Client/GetRoomMessage';
import ClientSearchRoomHistory from './Client/SearchRoomHistory';
import ClientResolveUsername from './Client/ResolveUsername';
import ClientCheckInviteLink from './Client/CheckInviteLink';
import ClientJoinByInviteLink from './Client/JoinByInviteLink';
import ClientJoinByUsername from './Client/JoinByUsername';
import ClientSubscribeToRoom from './Client/SubscribeToRoom';
import ClientUnsubscribeFromRoom from './Client/UnsubscribeFromRoom';
import ClientSearchUsername from './Client/SearchUsername';
import ClientCountRoomHistory from './Client/CountRoomHistory';
//File 7xx
import FileUploadOption from './File/Upload/Option';
import FileUploadInit from './File/Upload/Init';
import FileUpload from './File/Upload';
import FileUploadStatus from './File/Upload/Status';
import FileInfo from './File/Info';
import FileDownload from './File/Download';
//QrCode 8xx
import QrCodeJoin from './QrCode/Join';
import QrCodeResolve from './QrCode/Resolve';
import QrCodeNewDevice from './QrCode/NewDevice';
import QrCodeAddContact from './QrCode/AddContact';
import QrCodeAddMe from './QrCode/AddMe';
//Signaling 9xx
import SignalingGetConfiguration from './Signaling/GetConfiguration';
import SignalingOffer from './Signaling/Offer';
import SignalingRinging from './Signaling/Ringing';
import SignalingAccept from './Signaling/Accept';
import SignalingCandidate from './Signaling/Candidate';
import SignalingLeave from './Signaling/Leave';
import SignalingSessionHold from './Signaling/SessionHold';
import SignalingGetLog from './Signaling/GetLog';
import SignalingClearLog from './Signaling/ClearLog';
import SignalingRate from './Signaling/Rate';
//Geo 10xx
import GeoGetRegisterStatus from './Geo/GetRegisterStatus';
import GeoRegister from './Geo/Register';
import GeoUpdatePosition from './Geo/UpdatePosition';
import GeoGetComment from './Geo/GetComment';
import GeoUpdateComment from './Geo/UpdateComment';
import GeoGetNearbyDistance from './Geo/GetNearbyDistance';
import GeoGetNearbyCoordinate from './Geo/GetNearbyCoordinate';
//Push 600xx
import PushLoginToken from './Push/LoginToken';
import PushTwoStepVerification from './Push/TwoStepVerification';
import PushUserInfoExpired from './Push/UserInfoExpired';
import PushRateSignaling from './Push/RateSignaling';
import ClientMuteRoom from './Client/ClientMuteRoom';
import ClientPinRoom from './Client/ClientPinRoom';
import ClientRoomReport from './Client/ClientRoomReport';
import RegisterDevice from './Client/RegisterDevice';


export default {
//System xx
  [methods.ERROR_RESPONSE]: Error,
  [methods.CONNECTION_SECURING_RESPONSE]: ConnectionSecuring,
  [methods.CONNECTION_SYMMETRIC_KEY_RESPONSE]: ConnectionSymmetricKey,
  [methods.HEARTBEAT_RESPONSE]: Heartbeat,

  //User 1xx
  [methods.USER_REGISTER_RESPONSE]: UserRegister,
  [methods.USER_VERIFY_RESPONSE]: UserVerify,
  [methods.USER_LOGIN_RESPONSE]: UserLogin,
  [methods.USER_PROFILE_SET_EMAIL_RESPONSE]: UserProfileSetEmail,
  [methods.USER_PROFILE_SET_GENDER_RESPONSE]: UserProfileSetGender,
  [methods.USER_PROFILE_SET_NICKNAME_RESPONSE]: UserProfileSetNickname,
  [methods.USER_CONTACTS_IMPORT_RESPONSE]: UserContactsImport,
  [methods.USER_CONTACTS_GET_LIST_RESPONSE]: UserContactsGetList,
  [methods.USER_CONTACTS_DELETE_RESPONSE]: UserContactsDelete,
  [methods.USER_CONTACTS_EDIT_RESPONSE]: UserContactsEdit,
  [methods.USER_PROFILE_GET_EMAIL_RESPONSE]: UserProfileGetEmail,
  [methods.USER_PROFILE_GET_GENDER_RESPONSE]: UserProfileGetGender,
  [methods.USER_PROFILE_GET_NICKNAME_RESPONSE]: UserProfileGetNickname,
  [methods.USER_AVATAR_ADD_RESPONSE]: UserAvatarAdd,
  [methods.USER_AVATAR_DELETE_RESPONSE]: UserAvatarDelete,
  [methods.USER_AVATAR_GET_LIST_RESPONSE]: UserAvatarGetList,
  [methods.USER_INFO_RESPONSE]: UserInfo,
  [methods.USER_GET_DELETE_TOKEN_RESPONSE]: UserGetDeleteToken,
  [methods.USER_DELETE_RESPONSE]: UserDelete,
  [methods.USER_PROFILE_SET_SELF_REMOVE_RESPONSE]: UserProfileSetSelfRemove,
  [methods.USER_PROFILE_GET_SELF_REMOVE_RESPONSE]: UserProfileGetSelfRemove,
  [methods.USER_PROFILE_CHECK_USERNAME_RESPONSE]: UserProfileCheckUsername,
  [methods.USER_PROFILE_UPDATE_USERNAME_RESPONSE]: UserProfileUpdateUsername,
  [methods.USER_UPDATE_STATUS_RESPONSE]: UserUpdateStatus,
  [methods.USER_SESSION_GET_ACTIVE_LIST_RESPONSE]: UserSessionGetActiveList,
  [methods.USER_SESSION_TERMINATE_RESPONSE]: UserSessionTerminate,
  [methods.USER_SESSION_LOGOUT_RESPONSE]: UserSessionLogout,
  [methods.USER_CONTACTS_BLOCK_RESPONSE]: UserContactsBlock,
  [methods.USER_CONTACTS_UNBLOCK_RESPONSE]: UserContactsUnblock,
  [methods.USER_CONTACTS_GET_BLOCKED_LIST_RESPONSE]: UserContactsGetBlockedList,
  [methods.USER_TWO_STEP_VERIFICATION_GET_PASSWORD_DETAIL_RESPONSE]: UserTwoStepVerificationGetPasswordDetail,
  [methods.USER_TWO_STEP_VERIFICATION_VERIFY_PASSWORD_RESPONSE]: UserTwoStepVerificationVerifyPassword,
  [methods.USER_TWO_STEP_VERIFICATION_SET_PASSWORD_RESPONSE]: UserTwoStepVerificationSetPassword,
  [methods.USER_TWO_STEP_VERIFICATION_UNSET_PASSWORD_RESPONSE]: UserTwoStepVerificationUnsetPassword,
  [methods.USER_TWO_STEP_VERIFICATION_CHECK_PASSWORD_RESPONSE]: UserTwoStepVerificationCheckPassword,
  [methods.USER_TWO_STEP_VERIFICATION_VERIFY_RECOVERY_EMAIL_RESPONSE]: UserTwoStepVerificationVerifyRecoveryEmail,
  [methods.USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_EMAIL_RESPONSE]: UserTwoStepVerificationChangeRecoveryEmail,
  [methods.USER_TWO_STEP_VERIFICATION_REQUEST_RECOVERY_TOKEN_RESPONSE]: UserTwoStepVerificationRequestRecoveryToken,
  [methods.USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_TOKEN_RESPONSE]: UserTwoStepVerificationRecoverPasswordByToken,
  [methods.USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_ANSWERS_RESPONSE]: UserTwoStepVerificationRecoverPasswordByAnswers,
  [methods.USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_QUESTION_RESPONSE]: UserTwoStepVerificationChangeRecoveryQuestion,
  [methods.USER_TWO_STEP_VERIFICATION_CHANGE_HINT_RESPONSE]: UserTwoStepVerificationChangeHint,
  [methods.USER_TWO_STEP_VERIFICATION_RESEND_VERIFY_EMAIL_RESPONSE]: UserTwoStepVerificationResendVerifyEmail,
  [methods.USER_PRIVACY_GET_RULE_RESPONSE]: UserPrivacyGetRule,
  [methods.USER_PRIVACY_SET_RULE_RESPONSE]: UserPrivacySetRule,
  [methods.USER_VERIFY_NEW_DEVICE_RESPONSE]: UserVerifyNewDevice,
  [methods.USER_PROFILE_SET_BIO_RESPONSE]: UserProfileSetBio,
  [methods.USER_PROFILE_GET_BIO_RESPONSE]: UserProfileGetBio,

  //Chat 2xx
  [methods.CHAT_GET_ROOM_RESPONSE]: ChatGetRoom,
  [methods.CHAT_SEND_MESSAGE_RESPONSE]: ChatSendMessage,
  [methods.CHAT_UPDATE_STATUS_RESPONSE]: ChatUpdateStatus,
  [methods.CHAT_EDIT_MESSAGE_RESPONSE]: ChatEditMessage,
  [methods.CHAT_DELETE_MESSAGE_RESPONSE]: ChatDeleteMessage,
  [methods.CHAT_CLEAR_MESSAGE_RESPONSE]: ChatClearMessage,
  [methods.CHAT_DELETE_RESPONSE]: ChatDelete,
  [methods.CHAT_UPDATE_DRAFT_RESPONSE]: ChatUpdateDraft,
  [methods.CHAT_GET_DRAFT_RESPONSE]: ChatGetDraft,
  [methods.CHAT_CONVERT_TO_GROUP_RESPONSE]: ChatConvertToGroup,
  [methods.CHAT_SET_ACTION_RESPONSE]: ChatSetAction,

  //Group chat 3xx
  [methods.GROUP_CREATE_RESPONSE]: GroupCreate,
  [methods.GROUP_ADD_MEMBER_RESPONSE]: GroupAddMember,
  [methods.GROUP_ADD_ADMIN_RESPONSE]: GroupAddAdmin,
  [methods.GROUP_ADD_MODERATOR_RESPONSE]: GroupAddModerator,
  [methods.GROUP_CLEAR_MESSAGE_RESPONSE]: GroupClearMessage,
  [methods.GROUP_EDIT_RESPONSE]: GroupEdit,
  [methods.GROUP_KICK_ADMIN_RESPONSE]: GroupKickAdmin,
  [methods.GROUP_KICK_MEMBER_RESPONSE]: GroupKickMember,
  [methods.GROUP_KICK_MODERATOR_RESPONSE]: GroupKickModerator,
  [methods.GROUP_LEFT_RESPONSE]: GroupLeft,
  [methods.GROUP_SEND_MESSAGE_RESPONSE]: GroupSendMessage,
  [methods.GROUP_UPDATE_STATUS_RESPONSE]: GroupUpdateStatus,
  [methods.GROUP_AVATAR_ADD_RESPONSE]: GroupAvatarAdd,
  [methods.GROUP_AVATAR_DELETE_RESPONSE]: GroupAvatarDelete,
  [methods.GROUP_AVATAR_GET_LIST_RESPONSE]: GroupAvatarGetList,
  [methods.GROUP_UPDATE_DRAFT_RESPONSE]: GroupUpdateDraft,
  [methods.GROUP_GET_DRAFT_RESPONSE]: GroupGetDraft,
  [methods.GROUP_GET_MEMBER_LIST_RESPONSE]: GroupGetMemberList,
  [methods.GROUP_DELETE_RESPONSE]: GroupDelete,
  [methods.GROUP_SET_ACTION_RESPONSE]: GroupSetAction,
  [methods.GROUP_DELETE_MESSAGE_RESPONSE]: GroupDeleteMessage,
  [methods.GROUP_CHECK_USERNAME_RESPONSE]: GroupCheckUsername,
  [methods.GROUP_UPDATE_USERNAME_RESPONSE]: GroupUpdateUsername,
  [methods.GROUP_REMOVE_USERNAME_RESPONSE]: GroupRemoveUsername,
  [methods.GROUP_REVOKE_LINK_RESPONSE]: GroupRevokeLink,
  [methods.GROUP_EDIT_MESSAGE_RESPONSE]: GroupEditMessage,

  //Channel 4xx
  [methods.CHANNEL_CREATE_RESPONSE]: ChannelCreate,
  [methods.CHANNEL_ADD_MEMBER_RESPONSE]: ChannelAddMember,
  [methods.CHANNEL_ADD_ADMIN_RESPONSE]: ChannelAddAdmin,
  [methods.CHANNEL_ADD_MODERATOR_RESPONSE]: ChannelAddModerator,
  [methods.CHANNEL_DELETE_RESPONSE]: ChannelDelete,
  [methods.CHANNEL_EDIT_RESPONSE]: ChannelEdit,
  [methods.CHANNEL_KICK_ADMIN_RESPONSE]: ChannelKickAdmin,
  [methods.CHANNEL_KICK_MEMBER_RESPONSE]: ChannelKickMember,
  [methods.CHANNEL_KICK_MODERATOR_RESPONSE]: ChannelKickModerator,
  [methods.CHANNEL_LEFT_RESPONSE]: ChannelLeft,
  [methods.CHANNEL_SEND_MESSAGE_RESPONSE]: ChannelSendMessage,
  [methods.CHANNEL_DELETE_MESSAGE_RESPONSE]: ChannelDeleteMessage,
  [methods.CHANNEL_AVATAR_ADD_RESPONSE]: ChannelAvatarAdd,
  [methods.CHANNEL_AVATAR_DELETE_RESPONSE]: ChannelAvatarDelete,
  [methods.CHANNEL_AVATAR_GET_LIST_RESPONSE]: ChannelAvatarGetList,
  [methods.CHANNEL_UPDATE_DRAFT_RESPONSE]: ChannelUpdateDraft,
  [methods.CHANNEL_GET_DRAFT_RESPONSE]: ChannelGetDraft,
  [methods.CHANNEL_GET_MEMBER_LIST_RESPONSE]: ChannelGetMemberList,
  [methods.CHANNEL_CHECK_USERNAME_RESPONSE]: ChannelCheckUsername,
  [methods.CHANNEL_UPDATE_USERNAME_RESPONSE]: ChannelUpdateUsername,
  [methods.CHANNEL_REMOVE_USERNAME_RESPONSE]: ChannelRemoveUsername,
  [methods.CHANNEL_REVOKE_LINK_RESPONSE]: ChannelRevokeLink,
  [methods.CHANNEL_UPDATE_SIGNATURE_RESPONSE]: ChannelUpdateSignature,
  [methods.CHANNEL_GET_MESSAGES_STATS_RESPONSE]: ChannelGetMessagesStats,
  [methods.CHANNEL_ADD_MESSAGE_REACTION_RESPONSE]: ChannelAddMessageReaction,
  [methods.CHANNEL_EDIT_MESSAGE_RESPONSE]: ChannelEditMessage,

  //Info 5xx
  [methods.INFO_LOCATION_RESPONSE]: InfoLocation,
  [methods.INFO_COUNTRY_RESPONSE]: InfoCountry,
  [methods.INFO_TIME_RESPONSE]: InfoTime,
  [methods.INFO_PAGE_RESPONSE]: InfoPage,
  [methods.INFO_WALLPAPER_RESPONSE]: InfoWallpaper,

  //Client 6xx
  [methods.CLIENT_CONDITION_RESPONSE]: ClientCondition,
  [methods.CLIENT_GET_ROOM_LIST_RESPONSE]: ClientGetRoomList,
  [methods.CLIENT_GET_ROOM_RESPONSE]: ClientGetRoom,
  [methods.CLIENT_GET_ROOM_HISTORY_RESPONSE]: ClientGetRoomHistory,
  [methods.CLIENT_GET_ROOM_MESSAGE_RESPONSE]: ClientGetRoomMessage,
  [methods.CLIENT_SEARCH_ROOM_HISTORY_RESPONSE]: ClientSearchRoomHistory,
  [methods.CLIENT_RESOLVE_USERNAME_RESPONSE]: ClientResolveUsername,
  [methods.CLIENT_CHECK_INVITE_LINK_RESPONSE]: ClientCheckInviteLink,
  [methods.CLIENT_JOIN_BY_INVITE_LINK_RESPONSE]: ClientJoinByInviteLink,
  [methods.CLIENT_JOIN_BY_USERNAME_RESPONSE]: ClientJoinByUsername,
  [methods.CLIENT_SUBSCRIBE_TO_ROOM_RESPONSE]: ClientSubscribeToRoom,
  [methods.CLIENT_UNSUBSCRIBE_FROM_ROOM_RESPONSE]: ClientUnsubscribeFromRoom,
  [methods.CLIENT_SEARCH_USERNAME_RESPONSE]: ClientSearchUsername,
  [methods.CLIENT_COUNT_ROOM_HISTORY_RESPONSE]: ClientCountRoomHistory,
  [methods.CLIENT_MUTE_ROOM_RESPONSE]: ClientMuteRoom,
  [methods.CLIENT_PIN_ROOM_RESPONSE]: ClientPinRoom,
  [methods.CLIENT_ROOM_REPORT_RESPONSE]: ClientRoomReport,
  [methods.CLIENT_REGISTER_DEVICE_RESPONSE]: RegisterDevice,

  //File 7xx
  [methods.FILE_UPLOAD_OPTION_RESPONSE]: FileUploadOption,
  [methods.FILE_UPLOAD_INIT_RESPONSE]: FileUploadInit,
  [methods.FILE_UPLOAD_RESPONSE]: FileUpload,
  [methods.FILE_UPLOAD_STATUS_RESPONSE]: FileUploadStatus,
  [methods.FILE_INFO_RESPONSE]: FileInfo,
  [methods.FILE_DOWNLOAD_RESPONSE]: FileDownload,

  //QrCode 8xx
  [methods.QR_CODE_JOIN_RESPONSE]: QrCodeJoin,
  [methods.QR_CODE_RESOLVE_RESPONSE]: QrCodeResolve,
  [methods.QR_CODE_NEW_DEVICE_RESPONSE]: QrCodeNewDevice,
  [methods.QR_CODE_ADD_CONTACT_RESPONSE]: QrCodeAddContact,
  [methods.QR_CODE_ADD_ME_RESPONSE]: QrCodeAddMe,

  //Signaling 9xx
  [methods.SIGNALING_GET_CONFIGURATION_RESPONSE]: SignalingGetConfiguration,
  [methods.SIGNALING_OFFER_RESPONSE]: SignalingOffer,
  [methods.SIGNALING_RINGING_RESPONSE]: SignalingRinging,
  [methods.SIGNALING_ACCEPT_RESPONSE]: SignalingAccept,
  [methods.SIGNALING_CANDIDATE_RESPONSE]: SignalingCandidate,
  [methods.SIGNALING_LEAVE_RESPONSE]: SignalingLeave,
  [methods.SIGNALING_SESSION_HOLD_RESPONSE]: SignalingSessionHold,
  [methods.SIGNALING_GET_LOG_RESPONSE]: SignalingGetLog,
  [methods.SIGNALING_CLEAR_LOG_RESPONSE]: SignalingClearLog,
  [methods.SIGNALING_RATE_RESPONSE]: SignalingRate,

  //Geo 10xx
  [methods.GEO_GET_REGISTER_STATUS_RESPONSE]: GeoGetRegisterStatus,
  [methods.GEO_REGISTER_RESPONSE]: GeoRegister,
  [methods.GEO_UPDATE_POSITION_RESPONSE]: GeoUpdatePosition,
  [methods.GEO_GET_COMMENT_RESPONSE]: GeoGetComment,
  [methods.GEO_UPDATE_COMMENT_RESPONSE]: GeoUpdateComment,
  [methods.GEO_GET_NEARBY_DISTANCE_RESPONSE]: GeoGetNearbyDistance,
  [methods.GEO_GET_NEARBY_COORDINATE_RESPONSE]: GeoGetNearbyCoordinate,

  //Push 600xx
  [methods.PUSH_LOGIN_TOKEN]: PushLoginToken,
  [methods.PUSH_TWO_STEP_VERIFICATION]: PushTwoStepVerification,
  [methods.PUSH_USER_INFO_EXPIRED]: PushUserInfoExpired,
  [methods.PUSH_RATE_SIGNALING]: PushRateSignaling,
};