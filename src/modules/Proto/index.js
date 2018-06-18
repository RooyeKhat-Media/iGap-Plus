/**
 * @flow
 */

import * as methods from '../../constants/methods';
import proto from './wrappers';


export const Proto = proto.proto;

/**
 * @type ProtoErrorResponse
 **/
export const ErrorResponse = Proto.ErrorResponse;

/**
 * @type ProtoConnectionSecuringResponse
 **/
export const ConnectionSecuringResponse = Proto.ConnectionSecuringResponse;

/**
 * @type ProtoConnectionSymmetricKey
 **/
export const ConnectionSymmetricKey = Proto.ConnectionSymmetricKey;

/**
 * @type ProtoConnectionSymmetricKeyResponse
 **/
export const ConnectionSymmetricKeyResponse = Proto.ConnectionSymmetricKeyResponse;

/**
 * @type ProtoHeartbeat
 **/
export const Heartbeat = Proto.Heartbeat;

/**
 * @type ProtoHeartbeatResponse
 **/
export const HeartbeatResponse = Proto.HeartbeatResponse;

//User 1XX

/**
 * @type ProtoUserRegister
 **/
export const UserRegister = Proto.UserRegister;

/**
 * @type ProtoUserRegisterResponse
 **/
export const UserRegisterResponse = Proto.UserRegisterResponse;

/**
 * @type ProtoUserVerify
 **/
export const UserVerify = Proto.UserVerify;

/**
 * @type ProtoUserVerifyResponse
 **/
export const UserVerifyResponse = Proto.UserVerifyResponse;

/**
 * @type ProtoUserLogin
 **/
export const UserLogin = Proto.UserLogin;

/**
 * @type ProtoUserLoginResponse
 **/
export const UserLoginResponse = Proto.UserLoginResponse;

/**
 * @type ProtoUserProfileSetEmail
 **/
export const UserProfileSetEmail = Proto.UserProfileSetEmail;

/**
 * @type ProtoUserProfileSetEmailResponse
 **/
export const UserProfileSetEmailResponse = Proto.UserProfileSetEmailResponse;

/**
 * @type ProtoUserProfileSetGender
 **/
export const UserProfileSetGender = Proto.UserProfileSetGender;

/**
 * @type ProtoUserProfileSetGenderResponse
 **/
export const UserProfileSetGenderResponse = Proto.UserProfileSetGenderResponse;

/**
 * @type ProtoUserProfileSetNickname
 **/
export const UserProfileSetNickname = Proto.UserProfileSetNickname;

/**
 * @type ProtoUserProfileSetNicknameResponse
 **/
export const UserProfileSetNicknameResponse = Proto.UserProfileSetNicknameResponse;

/**
 * @type ProtoUserContactsImport
 **/
export const UserContactsImport = Proto.UserContactsImport;

/**
 * @type ProtoUserContactsImportResponse
 **/
export const UserContactsImportResponse = Proto.UserContactsImportResponse;

/**
 * @type ProtoUserContactsGetList
 **/
export const UserContactsGetList = Proto.UserContactsGetList;

/**
 * @type ProtoUserContactsGetListResponse
 **/
export const UserContactsGetListResponse = Proto.UserContactsGetListResponse;

/**
 * @type ProtoUserContactsDelete
 **/
export const UserContactsDelete = Proto.UserContactsDelete;

/**
 * @type ProtoUserContactsDeleteResponse
 **/
export const UserContactsDeleteResponse = Proto.UserContactsDeleteResponse;

/**
 * @type ProtoUserContactsEdit
 **/
export const UserContactsEdit = Proto.UserContactsEdit;

/**
 * @type ProtoUserContactsEditResponse
 **/
export const UserContactsEditResponse = Proto.UserContactsEditResponse;

/**
 * @type ProtoUserProfileGetEmail
 **/
export const UserProfileGetEmail = Proto.UserProfileGetEmail;

/**
 * @type ProtoUserProfileGetEmailResponse
 **/
export const UserProfileGetEmailResponse = Proto.UserProfileGetEmailResponse;

/**
 * @type ProtoUserProfileGetGender
 **/
export const UserProfileGetGender = Proto.UserProfileGetGender;

/**
 * @type ProtoUserProfileGetGenderResponse
 **/
export const UserProfileGetGenderResponse = Proto.UserProfileGetGenderResponse;

/**
 * @type ProtoUserProfileGetNickname
 **/
export const UserProfileGetNickname = Proto.UserProfileGetNickname;

/**
 * @type ProtoUserProfileGetNicknameResponse
 **/
export const UserProfileGetNicknameResponse = Proto.UserProfileGetNicknameResponse;

/**
 * @type ProtoUserAvatarAdd
 **/
export const UserAvatarAdd = Proto.UserAvatarAdd;

/**
 * @type ProtoUserAvatarAddResponse
 **/
export const UserAvatarAddResponse = Proto.UserAvatarAddResponse;

/**
 * @type ProtoUserAvatarDelete
 **/
export const UserAvatarDelete = Proto.UserAvatarDelete;

/**
 * @type ProtoUserAvatarDeleteResponse
 **/
export const UserAvatarDeleteResponse = Proto.UserAvatarDeleteResponse;

/**
 * @type ProtoUserAvatarGetList
 **/
export const UserAvatarGetList = Proto.UserAvatarGetList;

/**
 * @type ProtoUserAvatarGetListResponse
 **/
export const UserAvatarGetListResponse = Proto.UserAvatarGetListResponse;

/**
 * @type ProtoUserInfo
 **/
export const UserInfo = Proto.UserInfo;

/**
 * @type ProtoUserInfoResponse
 **/
export const UserInfoResponse = Proto.UserInfoResponse;

/**
 * @type ProtoUserGetDeleteToken
 **/
export const UserGetDeleteToken = Proto.UserGetDeleteToken;

/**
 * @type ProtoUserGetDeleteTokenResponse
 **/
export const UserGetDeleteTokenResponse = Proto.UserGetDeleteTokenResponse;

/**
 * @type ProtoUserDelete
 **/
export const UserDelete = Proto.UserDelete;

/**
 * @type ProtoUserDeleteResponse
 **/
export const UserDeleteResponse = Proto.UserDeleteResponse;

/**
 * @type ProtoUserProfileSetSelfRemove
 **/
export const UserProfileSetSelfRemove = Proto.UserProfileSetSelfRemove;

/**
 * @type ProtoUserProfileSetSelfRemoveResponse
 **/
export const UserProfileSetSelfRemoveResponse = Proto.UserProfileSetSelfRemoveResponse;

/**
 * @type ProtoUserProfileGetSelfRemove
 **/
export const UserProfileGetSelfRemove = Proto.UserProfileGetSelfRemove;

/**
 * @type ProtoUserProfileGetSelfRemoveResponse
 **/
export const UserProfileGetSelfRemoveResponse = Proto.UserProfileGetSelfRemoveResponse;

/**
 * @type ProtoUserProfileCheckUsername
 **/
export const UserProfileCheckUsername = Proto.UserProfileCheckUsername;

/**
 * @type ProtoUserProfileCheckUsernameResponse
 **/
export const UserProfileCheckUsernameResponse = Proto.UserProfileCheckUsernameResponse;

/**
 * @type ProtoUserProfileUpdateUsername
 **/
export const UserProfileUpdateUsername = Proto.UserProfileUpdateUsername;

/**
 * @type ProtoUserProfileUpdateUsernameResponse
 **/
export const UserProfileUpdateUsernameResponse = Proto.UserProfileUpdateUsernameResponse;

/**
 * @type ProtoUserUpdateStatus
 **/
export const UserUpdateStatus = Proto.UserUpdateStatus;

/**
 * @type ProtoUserUpdateStatusResponse
 **/
export const UserUpdateStatusResponse = Proto.UserUpdateStatusResponse;

/**
 * @type ProtoUserSessionGetActiveList
 **/
export const UserSessionGetActiveList = Proto.UserSessionGetActiveList;

/**
 * @type ProtoUserSessionGetActiveListResponse
 **/
export const UserSessionGetActiveListResponse = Proto.UserSessionGetActiveListResponse;

/**
 * @type ProtoUserSessionTerminate
 **/
export const UserSessionTerminate = Proto.UserSessionTerminate;

/**
 * @type ProtoUserSessionTerminateResponse
 **/
export const UserSessionTerminateResponse = Proto.UserSessionTerminateResponse;

/**
 * @type ProtoUserSessionLogout
 **/
export const UserSessionLogout = Proto.UserSessionLogout;

/**
 * @type ProtoUserSessionLogoutResponse
 **/
export const UserSessionLogoutResponse = Proto.UserSessionLogoutResponse;

/**
 * @type ProtoUserContactsBlock
 **/
export const UserContactsBlock = Proto.UserContactsBlock;

/**
 * @type ProtoUserContactsBlockResponse
 **/
export const UserContactsBlockResponse = Proto.UserContactsBlockResponse;

/**
 * @type ProtoUserContactsUnblock
 **/
export const UserContactsUnblock = Proto.UserContactsUnblock;

/**
 * @type ProtoUserContactsUnblockResponse
 **/
export const UserContactsUnblockResponse = Proto.UserContactsUnblockResponse;

/**
 * @type ProtoUserContactsGetBlockedList
 **/
export const UserContactsGetBlockedList = Proto.UserContactsGetBlockedList;

/**
 * @type ProtoUserContactsGetBlockedListResponse
 **/
export const UserContactsGetBlockedListResponse = Proto.UserContactsGetBlockedListResponse;

/**
 * @type ProtoUserTwoStepVerificationGetPasswordDetail
 **/
export const UserTwoStepVerificationGetPasswordDetail = Proto.UserTwoStepVerificationGetPasswordDetail;

/**
 * @type ProtoUserTwoStepVerificationGetPasswordDetailResponse
 **/
export const UserTwoStepVerificationGetPasswordDetailResponse = Proto.UserTwoStepVerificationGetPasswordDetailResponse;

/**
 * @type ProtoUserTwoStepVerificationVerifyPassword
 **/
export const UserTwoStepVerificationVerifyPassword = Proto.UserTwoStepVerificationVerifyPassword;

/**
 * @type ProtoUserTwoStepVerificationVerifyPasswordResponse
 **/
export const UserTwoStepVerificationVerifyPasswordResponse = Proto.UserTwoStepVerificationVerifyPasswordResponse;

/**
 * @type ProtoUserTwoStepVerificationSetPassword
 **/
export const UserTwoStepVerificationSetPassword = Proto.UserTwoStepVerificationSetPassword;

/**
 * @type ProtoUserTwoStepVerificationSetPasswordResponse
 **/
export const UserTwoStepVerificationSetPasswordResponse = Proto.UserTwoStepVerificationSetPasswordResponse;

/**
 * @type ProtoUserTwoStepVerificationUnsetPassword
 **/
export const UserTwoStepVerificationUnsetPassword = Proto.UserTwoStepVerificationUnsetPassword;

/**
 * @type ProtoUserTwoStepVerificationUnsetPasswordResponse
 **/
export const UserTwoStepVerificationUnsetPasswordResponse = Proto.UserTwoStepVerificationUnsetPasswordResponse;

/**
 * @type ProtoUserTwoStepVerificationCheckPassword
 **/
export const UserTwoStepVerificationCheckPassword = Proto.UserTwoStepVerificationCheckPassword;

/**
 * @type ProtoUserTwoStepVerificationCheckPasswordResponse
 **/
export const UserTwoStepVerificationCheckPasswordResponse = Proto.UserTwoStepVerificationCheckPasswordResponse;

/**
 * @type ProtoUserTwoStepVerificationVerifyRecoveryEmail
 **/
export const UserTwoStepVerificationVerifyRecoveryEmail = Proto.UserTwoStepVerificationVerifyRecoveryEmail;

/**
 * @type ProtoUserTwoStepVerificationVerifyRecoveryEmailResponse
 **/
export const UserTwoStepVerificationVerifyRecoveryEmailResponse = Proto.UserTwoStepVerificationVerifyRecoveryEmailResponse;

/**
 * @type ProtoUserTwoStepVerificationChangeRecoveryEmail
 **/
export const UserTwoStepVerificationChangeRecoveryEmail = Proto.UserTwoStepVerificationChangeRecoveryEmail;

/**
 * @type ProtoUserTwoStepVerificationChangeRecoveryEmailResponse
 **/
export const UserTwoStepVerificationChangeRecoveryEmailResponse = Proto.UserTwoStepVerificationChangeRecoveryEmailResponse;

/**
 * @type ProtoUserTwoStepVerificationRequestRecoveryToken
 **/
export const UserTwoStepVerificationRequestRecoveryToken = Proto.UserTwoStepVerificationRequestRecoveryToken;

/**
 * @type ProtoUserTwoStepVerificationRequestRecoveryTokenResponse
 **/
export const UserTwoStepVerificationRequestRecoveryTokenResponse = Proto.UserTwoStepVerificationRequestRecoveryTokenResponse;

/**
 * @type ProtoUserTwoStepVerificationRecoverPasswordByToken
 **/
export const UserTwoStepVerificationRecoverPasswordByToken = Proto.UserTwoStepVerificationRecoverPasswordByToken;

/**
 * @type ProtoUserTwoStepVerificationRecoverPasswordByTokenResponse
 **/
export const UserTwoStepVerificationRecoverPasswordByTokenResponse = Proto.UserTwoStepVerificationRecoverPasswordByTokenResponse;

/**
 * @type ProtoUserTwoStepVerificationRecoverPasswordByAnswers
 **/
export const UserTwoStepVerificationRecoverPasswordByAnswers = Proto.UserTwoStepVerificationRecoverPasswordByAnswers;

/**
 * @type ProtoUserTwoStepVerificationRecoverPasswordByAnswersResponse
 **/
export const UserTwoStepVerificationRecoverPasswordByAnswersResponse = Proto.UserTwoStepVerificationRecoverPasswordByAnswersResponse;

/**
 * @type ProtoUserTwoStepVerificationChangeRecoveryQuestion
 **/
export const UserTwoStepVerificationChangeRecoveryQuestion = Proto.UserTwoStepVerificationChangeRecoveryQuestion;

/**
 * @type ProtoUserTwoStepVerificationChangeRecoveryQuestionResponse
 **/
export const UserTwoStepVerificationChangeRecoveryQuestionResponse = Proto.UserTwoStepVerificationChangeRecoveryQuestionResponse;

/**
 * @type ProtoUserTwoStepVerificationChangeHint
 **/
export const UserTwoStepVerificationChangeHint = Proto.UserTwoStepVerificationChangeHint;

/**
 * @type ProtoUserTwoStepVerificationChangeHintResponse
 **/
export const UserTwoStepVerificationChangeHintResponse = Proto.UserTwoStepVerificationChangeHintResponse;

/**
 * @type ProtoUserTwoStepVerificationResendVerifyEmail
 **/
export const UserTwoStepVerificationResendVerifyEmail = Proto.UserTwoStepVerificationResendVerifyEmail;

/**
 * @type ProtoUserTwoStepVerificationResendVerifyEmailResponse
 **/
export const UserTwoStepVerificationResendVerifyEmailResponse = Proto.UserTwoStepVerificationResendVerifyEmailResponse;

/**
 * @type ProtoUserPrivacyGetRule
 **/
export const UserPrivacyGetRule = Proto.UserPrivacyGetRule;

/**
 * @type ProtoUserPrivacyGetRuleResponse
 **/
export const UserPrivacyGetRuleResponse = Proto.UserPrivacyGetRuleResponse;

/**
 * @type ProtoUserPrivacySetRule
 **/
export const UserPrivacySetRule = Proto.UserPrivacySetRule;

/**
 * @type ProtoUserPrivacySetRuleResponse
 **/
export const UserPrivacySetRuleResponse = Proto.UserPrivacySetRuleResponse;

/**
 * @type ProtoUserVerifyNewDevice
 **/
export const UserVerifyNewDevice = Proto.UserVerifyNewDevice;

/**
 * @type ProtoUserVerifyNewDeviceResponse
 **/
export const UserVerifyNewDeviceResponse = Proto.UserVerifyNewDeviceResponse;

/**
 * @type ProtoUserProfileSetBio
 **/
export const UserProfileSetBio = Proto.UserProfileSetBio;

/**
 * @type ProtoUserProfileSetBioResponse
 **/
export const UserProfileSetBioResponse = Proto.UserProfileSetBioResponse;

/**
 * @type ProtoUserProfileGetBio
 **/
export const UserProfileGetBio = Proto.UserProfileGetBio;

/**
 * @type ProtoUserProfileGetBioResponse
 **/
export const UserProfileGetBioResponse = Proto.UserProfileGetBioResponse;

/**
 * @type ProtoUserReport
 **/
export const UserReport = Proto.UserReport;

/**
 * @type ProtoUserReportResponse
 **/
export const UserReportResponse = Proto.UserReportResponse;

//Chat 2XX

/**
 * @type ProtoChatGetRoom
 **/
export const ChatGetRoom = Proto.ChatGetRoom;

/**
 * @type ProtoChatGetRoomResponse
 **/
export const ChatGetRoomResponse = Proto.ChatGetRoomResponse;

/**
 * @type ProtoChatSendMessage
 **/
export const ChatSendMessage = Proto.ChatSendMessage;

/**
 * @type ProtoChatSendMessageResponse
 **/
export const ChatSendMessageResponse = Proto.ChatSendMessageResponse;

/**
 * @type ProtoChatUpdateStatus
 **/
export const ChatUpdateStatus = Proto.ChatUpdateStatus;

/**
 * @type ProtoChatUpdateStatusResponse
 **/
export const ChatUpdateStatusResponse = Proto.ChatUpdateStatusResponse;

/**
 * @type ProtoChatEditMessage
 **/
export const ChatEditMessage = Proto.ChatEditMessage;

/**
 * @type ProtoChatEditMessageResponse
 **/
export const ChatEditMessageResponse = Proto.ChatEditMessageResponse;

/**
 * @type ProtoChatDeleteMessage
 **/
export const ChatDeleteMessage = Proto.ChatDeleteMessage;

/**
 * @type ProtoChatDeleteMessageResponse
 **/
export const ChatDeleteMessageResponse = Proto.ChatDeleteMessageResponse;

/**
 * @type ProtoChatClearMessage
 **/
export const ChatClearMessage = Proto.ChatClearMessage;

/**
 * @type ProtoChatClearMessageResponse
 **/
export const ChatClearMessageResponse = Proto.ChatClearMessageResponse;

/**
 * @type ProtoChatDelete
 **/
export const ChatDelete = Proto.ChatDelete;

/**
 * @type ProtoChatDeleteResponse
 **/
export const ChatDeleteResponse = Proto.ChatDeleteResponse;

/**
 * @type ProtoChatUpdateDraft
 **/
export const ChatUpdateDraft = Proto.ChatUpdateDraft;

/**
 * @type ProtoChatUpdateDraftResponse
 **/
export const ChatUpdateDraftResponse = Proto.ChatUpdateDraftResponse;

/**
 * @type ProtoChatGetDraft
 **/
export const ChatGetDraft = Proto.ChatGetDraft;

/**
 * @type ProtoChatGetDraftResponse
 **/
export const ChatGetDraftResponse = Proto.ChatGetDraftResponse;

/**
 * @type ProtoChatConvertToGroup
 **/
export const ChatConvertToGroup = Proto.ChatConvertToGroup;

/**
 * @type ProtoChatConvertToGroupResponse
 **/
export const ChatConvertToGroupResponse = Proto.ChatConvertToGroupResponse;

/**
 * @type ProtoChatSetAction
 **/
export const ChatSetAction = Proto.ChatSetAction;

/**
 * @type ProtoChatSetActionResponse
 **/
export const ChatSetActionResponse = Proto.ChatSetActionResponse;

//Group chat 3XX

/**
 * @type ProtoGroupCreate
 **/
export const GroupCreate = Proto.GroupCreate;

/**
 * @type ProtoGroupCreateResponse
 **/
export const GroupCreateResponse = Proto.GroupCreateResponse;

/**
 * @type ProtoGroupAddMember
 **/
export const GroupAddMember = Proto.GroupAddMember;

/**
 * @type ProtoGroupAddMemberResponse
 **/
export const GroupAddMemberResponse = Proto.GroupAddMemberResponse;

/**
 * @type ProtoGroupAddAdmin
 **/
export const GroupAddAdmin = Proto.GroupAddAdmin;

/**
 * @type ProtoGroupAddAdminResponse
 **/
export const GroupAddAdminResponse = Proto.GroupAddAdminResponse;

/**
 * @type ProtoGroupAddModerator
 **/
export const GroupAddModerator = Proto.GroupAddModerator;

/**
 * @type ProtoGroupAddModeratorResponse
 **/
export const GroupAddModeratorResponse = Proto.GroupAddModeratorResponse;

/**
 * @type ProtoGroupClearMessage
 **/
export const GroupClearMessage = Proto.GroupClearMessage;

/**
 * @type ProtoGroupClearMessageResponse
 **/
export const GroupClearMessageResponse = Proto.GroupClearMessageResponse;

/**
 * @type ProtoGroupEdit
 **/
export const GroupEdit = Proto.GroupEdit;

/**
 * @type ProtoGroupEditResponse
 **/
export const GroupEditResponse = Proto.GroupEditResponse;

/**
 * @type ProtoGroupKickAdmin
 **/
export const GroupKickAdmin = Proto.GroupKickAdmin;

/**
 * @type ProtoGroupKickAdminResponse
 **/
export const GroupKickAdminResponse = Proto.GroupKickAdminResponse;

/**
 * @type ProtoGroupKickMember
 **/
export const GroupKickMember = Proto.GroupKickMember;

/**
 * @type ProtoGroupKickMemberResponse
 **/
export const GroupKickMemberResponse = Proto.GroupKickMemberResponse;

/**
 * @type ProtoGroupKickModerator
 **/
export const GroupKickModerator = Proto.GroupKickModerator;

/**
 * @type ProtoGroupKickModeratorResponse
 **/
export const GroupKickModeratorResponse = Proto.GroupKickModeratorResponse;

/**
 * @type ProtoGroupLeft
 **/
export const GroupLeft = Proto.GroupLeft;

/**
 * @type ProtoGroupLeftResponse
 **/
export const GroupLeftResponse = Proto.GroupLeftResponse;

/**
 * @type ProtoGroupSendMessage
 **/
export const GroupSendMessage = Proto.GroupSendMessage;

/**
 * @type ProtoGroupSendMessageResponse
 **/
export const GroupSendMessageResponse = Proto.GroupSendMessageResponse;

/**
 * @type ProtoGroupUpdateStatus
 **/
export const GroupUpdateStatus = Proto.GroupUpdateStatus;

/**
 * @type ProtoGroupUpdateStatusResponse
 **/
export const GroupUpdateStatusResponse = Proto.GroupUpdateStatusResponse;

/**
 * @type ProtoGroupAvatarAdd
 **/
export const GroupAvatarAdd = Proto.GroupAvatarAdd;

/**
 * @type ProtoGroupAvatarAddResponse
 **/
export const GroupAvatarAddResponse = Proto.GroupAvatarAddResponse;

/**
 * @type ProtoGroupAvatarDelete
 **/
export const GroupAvatarDelete = Proto.GroupAvatarDelete;

/**
 * @type ProtoGroupAvatarDeleteResponse
 **/
export const GroupAvatarDeleteResponse = Proto.GroupAvatarDeleteResponse;

/**
 * @type ProtoGroupAvatarGetList
 **/
export const GroupAvatarGetList = Proto.GroupAvatarGetList;

/**
 * @type ProtoGroupAvatarGetListResponse
 **/
export const GroupAvatarGetListResponse = Proto.GroupAvatarGetListResponse;

/**
 * @type ProtoGroupUpdateDraft
 **/
export const GroupUpdateDraft = Proto.GroupUpdateDraft;

/**
 * @type ProtoGroupUpdateDraftResponse
 **/
export const GroupUpdateDraftResponse = Proto.GroupUpdateDraftResponse;

/**
 * @type ProtoGroupGetDraft
 **/
export const GroupGetDraft = Proto.GroupGetDraft;

/**
 * @type ProtoGroupGetDraftResponse
 **/
export const GroupGetDraftResponse = Proto.GroupGetDraftResponse;

/**
 * @type ProtoGroupGetMemberList
 **/
export const GroupGetMemberList = Proto.GroupGetMemberList;

/**
 * @type ProtoGroupGetMemberListResponse
 **/
export const GroupGetMemberListResponse = Proto.GroupGetMemberListResponse;

/**
 * @type ProtoGroupDelete
 **/
export const GroupDelete = Proto.GroupDelete;

/**
 * @type ProtoGroupDeleteResponse
 **/
export const GroupDeleteResponse = Proto.GroupDeleteResponse;

/**
 * @type ProtoGroupSetAction
 **/
export const GroupSetAction = Proto.GroupSetAction;

/**
 * @type ProtoGroupSetActionResponse
 **/
export const GroupSetActionResponse = Proto.GroupSetActionResponse;

/**
 * @type ProtoGroupDeleteMessage
 **/
export const GroupDeleteMessage = Proto.GroupDeleteMessage;

/**
 * @type ProtoGroupDeleteMessageResponse
 **/
export const GroupDeleteMessageResponse = Proto.GroupDeleteMessageResponse;

/**
 * @type ProtoGroupCheckUsername
 **/
export const GroupCheckUsername = Proto.GroupCheckUsername;

/**
 * @type ProtoGroupCheckUsernameResponse
 **/
export const GroupCheckUsernameResponse = Proto.GroupCheckUsernameResponse;

/**
 * @type ProtoGroupUpdateUsername
 **/
export const GroupUpdateUsername = Proto.GroupUpdateUsername;

/**
 * @type ProtoGroupUpdateUsernameResponse
 **/
export const GroupUpdateUsernameResponse = Proto.GroupUpdateUsernameResponse;

/**
 * @type ProtoGroupRemoveUsername
 **/
export const GroupRemoveUsername = Proto.GroupRemoveUsername;

/**
 * @type ProtoGroupRemoveUsernameResponse
 **/
export const GroupRemoveUsernameResponse = Proto.GroupRemoveUsernameResponse;

/**
 * @type ProtoGroupRevokeLink
 **/
export const GroupRevokeLink = Proto.GroupRevokeLink;

/**
 * @type ProtoGroupRevokeLinkResponse
 **/
export const GroupRevokeLinkResponse = Proto.GroupRevokeLinkResponse;

/**
 * @type ProtoGroupEditMessage
 **/
export const GroupEditMessage = Proto.GroupEditMessage;

/**
 * @type ProtoGroupEditMessageResponse
 **/
export const GroupEditMessageResponse = Proto.GroupEditMessageResponse;

/**
 * @type ProtoGroupPinMessage
 **/
export const GroupPinMessage = Proto.GroupPinMessage;

/**
 * @type ProtoGroupPinMessageResponse
 **/
export const GroupPinMessageResponse = Proto.GroupPinMessageResponse;

//Channel 4XX

/**
 * @type ProtoChannelCreate
 **/
export const ChannelCreate = Proto.ChannelCreate;

/**
 * @type ProtoChannelCreateResponse
 **/
export const ChannelCreateResponse = Proto.ChannelCreateResponse;

/**
 * @type ProtoChannelAddMember
 **/
export const ChannelAddMember = Proto.ChannelAddMember;

/**
 * @type ProtoChannelAddMemberResponse
 **/
export const ChannelAddMemberResponse = Proto.ChannelAddMemberResponse;

/**
 * @type ProtoChannelAddAdmin
 **/
export const ChannelAddAdmin = Proto.ChannelAddAdmin;

/**
 * @type ProtoChannelAddAdminResponse
 **/
export const ChannelAddAdminResponse = Proto.ChannelAddAdminResponse;

/**
 * @type ProtoChannelAddModerator
 **/
export const ChannelAddModerator = Proto.ChannelAddModerator;

/**
 * @type ProtoChannelAddModeratorResponse
 **/
export const ChannelAddModeratorResponse = Proto.ChannelAddModeratorResponse;

/**
 * @type ProtoChannelDelete
 **/
export const ChannelDelete = Proto.ChannelDelete;

/**
 * @type ProtoChannelDeleteResponse
 **/
export const ChannelDeleteResponse = Proto.ChannelDeleteResponse;

/**
 * @type ProtoChannelEdit
 **/
export const ChannelEdit = Proto.ChannelEdit;

/**
 * @type ProtoChannelEditResponse
 **/
export const ChannelEditResponse = Proto.ChannelEditResponse;

/**
 * @type ProtoChannelKickAdmin
 **/
export const ChannelKickAdmin = Proto.ChannelKickAdmin;

/**
 * @type ProtoChannelKickAdminResponse
 **/
export const ChannelKickAdminResponse = Proto.ChannelKickAdminResponse;

/**
 * @type ProtoChannelKickMember
 **/
export const ChannelKickMember = Proto.ChannelKickMember;

/**
 * @type ProtoChannelKickMemberResponse
 **/
export const ChannelKickMemberResponse = Proto.ChannelKickMemberResponse;

/**
 * @type ProtoChannelKickModerator
 **/
export const ChannelKickModerator = Proto.ChannelKickModerator;

/**
 * @type ProtoChannelKickModeratorResponse
 **/
export const ChannelKickModeratorResponse = Proto.ChannelKickModeratorResponse;

/**
 * @type ProtoChannelLeft
 **/
export const ChannelLeft = Proto.ChannelLeft;

/**
 * @type ProtoChannelLeftResponse
 **/
export const ChannelLeftResponse = Proto.ChannelLeftResponse;

/**
 * @type ProtoChannelSendMessage
 **/
export const ChannelSendMessage = Proto.ChannelSendMessage;

/**
 * @type ProtoChannelSendMessageResponse
 **/
export const ChannelSendMessageResponse = Proto.ChannelSendMessageResponse;

/**
 * @type ProtoChannelDeleteMessage
 **/
export const ChannelDeleteMessage = Proto.ChannelDeleteMessage;

/**
 * @type ProtoChannelDeleteMessageResponse
 **/
export const ChannelDeleteMessageResponse = Proto.ChannelDeleteMessageResponse;

/**
 * @type ProtoChannelAvatarAdd
 **/
export const ChannelAvatarAdd = Proto.ChannelAvatarAdd;

/**
 * @type ProtoChannelAvatarAddResponse
 **/
export const ChannelAvatarAddResponse = Proto.ChannelAvatarAddResponse;

/**
 * @type ProtoChannelAvatarDelete
 **/
export const ChannelAvatarDelete = Proto.ChannelAvatarDelete;

/**
 * @type ProtoChannelAvatarDeleteResponse
 **/
export const ChannelAvatarDeleteResponse = Proto.ChannelAvatarDeleteResponse;

/**
 * @type ProtoChannelAvatarGetList
 **/
export const ChannelAvatarGetList = Proto.ChannelAvatarGetList;

/**
 * @type ProtoChannelAvatarGetListResponse
 **/
export const ChannelAvatarGetListResponse = Proto.ChannelAvatarGetListResponse;

/**
 * @type ProtoChannelUpdateDraft
 **/
export const ChannelUpdateDraft = Proto.ChannelUpdateDraft;

/**
 * @type ProtoChannelUpdateDraftResponse
 **/
export const ChannelUpdateDraftResponse = Proto.ChannelUpdateDraftResponse;

/**
 * @type ProtoChannelGetDraft
 **/
export const ChannelGetDraft = Proto.ChannelGetDraft;

/**
 * @type ProtoChannelGetDraftResponse
 **/
export const ChannelGetDraftResponse = Proto.ChannelGetDraftResponse;

/**
 * @type ProtoChannelGetMemberList
 **/
export const ChannelGetMemberList = Proto.ChannelGetMemberList;

/**
 * @type ProtoChannelGetMemberListResponse
 **/
export const ChannelGetMemberListResponse = Proto.ChannelGetMemberListResponse;

/**
 * @type ProtoChannelCheckUsername
 **/
export const ChannelCheckUsername = Proto.ChannelCheckUsername;

/**
 * @type ProtoChannelCheckUsernameResponse
 **/
export const ChannelCheckUsernameResponse = Proto.ChannelCheckUsernameResponse;

/**
 * @type ProtoChannelUpdateUsername
 **/
export const ChannelUpdateUsername = Proto.ChannelUpdateUsername;

/**
 * @type ProtoChannelUpdateUsernameResponse
 **/
export const ChannelUpdateUsernameResponse = Proto.ChannelUpdateUsernameResponse;

/**
 * @type ProtoChannelRemoveUsername
 **/
export const ChannelRemoveUsername = Proto.ChannelRemoveUsername;

/**
 * @type ProtoChannelRemoveUsernameResponse
 **/
export const ChannelRemoveUsernameResponse = Proto.ChannelRemoveUsernameResponse;

/**
 * @type ProtoChannelRevokeLink
 **/
export const ChannelRevokeLink = Proto.ChannelRevokeLink;

/**
 * @type ProtoChannelRevokeLinkResponse
 **/
export const ChannelRevokeLinkResponse = Proto.ChannelRevokeLinkResponse;

/**
 * @type ProtoChannelUpdateSignature
 **/
export const ChannelUpdateSignature = Proto.ChannelUpdateSignature;

/**
 * @type ProtoChannelUpdateSignatureResponse
 **/
export const ChannelUpdateSignatureResponse = Proto.ChannelUpdateSignatureResponse;

/**
 * @type ProtoChannelGetMessagesStats
 **/
export const ChannelGetMessagesStats = Proto.ChannelGetMessagesStats;

/**
 * @type ProtoChannelGetMessagesStatsResponse
 **/
export const ChannelGetMessagesStatsResponse = Proto.ChannelGetMessagesStatsResponse;

/**
 * @type ProtoChannelAddMessageReaction
 **/
export const ChannelAddMessageReaction = Proto.ChannelAddMessageReaction;

/**
 * @type ProtoChannelAddMessageReactionResponse
 **/
export const ChannelAddMessageReactionResponse = Proto.ChannelAddMessageReactionResponse;

/**
 * @type ProtoChannelEditMessage
 **/
export const ChannelEditMessage = Proto.ChannelEditMessage;

/**
 * @type ProtoChannelEditMessageResponse
 **/
export const ChannelEditMessageResponse = Proto.ChannelEditMessageResponse;

/**
 * @type ProtoChannelEditMessage
 **/
export const ChannelUpdateReactionStatus = Proto.ChannelUpdateReactionStatus;

/**
 * @type ProtoChannelEditMessageResponse
 **/
export const ChannelUpdateReactionStatusResponse = Proto.ChannelUpdateReactionStatusResponse;

/**
 * @type ProtoChannelEditMessage
 **/
export const ChannelPinMessage = Proto.ChannelPinMessage;

/**
 * @type ProtoChannelEditMessageResponse
 **/
export const ChannelPinMessageResponse = Proto.ChannelPinMessageResponse;

//Info 5XX

/**
 * @type ProtoInfoLocation
 **/
export const InfoLocation = Proto.InfoLocation;

/**
 * @type ProtoInfoLocationResponse
 **/
export const InfoLocationResponse = Proto.InfoLocationResponse;

/**
 * @type ProtoInfoCountry
 **/
export const InfoCountry = Proto.InfoCountry;

/**
 * @type ProtoInfoCountryResponse
 **/
export const InfoCountryResponse = Proto.InfoCountryResponse;

/**
 * @type ProtoInfoTime
 **/
export const InfoTime = Proto.InfoTime;

/**
 * @type ProtoInfoTimeResponse
 **/
export const InfoTimeResponse = Proto.InfoTimeResponse;

/**
 * @type ProtoInfoPage
 **/
export const InfoPage = Proto.InfoPage;

/**
 * @type ProtoInfoPageResponse
 **/
export const InfoPageResponse = Proto.InfoPageResponse;

/**
 * @type ProtoInfoWallpaper
 **/
export const InfoWallpaper = Proto.InfoWallpaper;

/**
 * @type ProtoInfoWallpaperResponse
 **/
export const InfoWallpaperResponse = Proto.InfoWallpaperResponse;

//Client 6XX

/**
 * @type ProtoClientCondition
 **/
export const ClientCondition = Proto.ClientCondition;

/**
 * @type ProtoClientConditionResponse
 **/
export const ClientConditionResponse = Proto.ClientConditionResponse;

/**
 * @type ProtoClientGetRoomList
 **/
export const ClientGetRoomList = Proto.ClientGetRoomList;

/**
 * @type ProtoClientGetRoomListResponse
 **/
export const ClientGetRoomListResponse = Proto.ClientGetRoomListResponse;

/**
 * @type ProtoClientGetRoom
 **/
export const ClientGetRoom = Proto.ClientGetRoom;

/**
 * @type ProtoClientGetRoomResponse
 **/
export const ClientGetRoomResponse = Proto.ClientGetRoomResponse;

/**
 * @type ProtoClientGetRoomHistory
 **/
export const ClientGetRoomHistory = Proto.ClientGetRoomHistory;

/**
 * @type ProtoClientGetRoomHistoryResponse
 **/
export const ClientGetRoomHistoryResponse = Proto.ClientGetRoomHistoryResponse;

/**
 * @type ProtoClientGetRoomMessage
 **/
export const ClientGetRoomMessage = Proto.ClientGetRoomMessage;

/**
 * @type ProtoClientGetRoomMessageResponse
 **/
export const ClientGetRoomMessageResponse = Proto.ClientGetRoomMessageResponse;

/**
 * @type ProtoClientSearchRoomHistory
 **/
export const ClientSearchRoomHistory = Proto.ClientSearchRoomHistory;

/**
 * @type ProtoClientSearchRoomHistoryResponse
 **/
export const ClientSearchRoomHistoryResponse = Proto.ClientSearchRoomHistoryResponse;

/**
 * @type ProtoClientResolveUsername
 **/
export const ClientResolveUsername = Proto.ClientResolveUsername;

/**
 * @type ProtoClientResolveUsernameResponse
 **/
export const ClientResolveUsernameResponse = Proto.ClientResolveUsernameResponse;

/**
 * @type ProtoClientCheckInviteLink
 **/
export const ClientCheckInviteLink = Proto.ClientCheckInviteLink;

/**
 * @type ProtoClientCheckInviteLinkResponse
 **/
export const ClientCheckInviteLinkResponse = Proto.ClientCheckInviteLinkResponse;

/**
 * @type ProtoClientJoinByInviteLink
 **/
export const ClientJoinByInviteLink = Proto.ClientJoinByInviteLink;

/**
 * @type ProtoClientJoinByInviteLinkResponse
 **/
export const ClientJoinByInviteLinkResponse = Proto.ClientJoinByInviteLinkResponse;

/**
 * @type ProtoClientJoinByUsername
 **/
export const ClientJoinByUsername = Proto.ClientJoinByUsername;

/**
 * @type ProtoClientJoinByUsernameResponse
 **/
export const ClientJoinByUsernameResponse = Proto.ClientJoinByUsernameResponse;

/**
 * @type ProtoClientSubscribeToRoom
 **/
export const ClientSubscribeToRoom = Proto.ClientSubscribeToRoom;

/**
 * @type ProtoClientSubscribeToRoomResponse
 **/
export const ClientSubscribeToRoomResponse = Proto.ClientSubscribeToRoomResponse;

/**
 * @type ProtoClientUnsubscribeFromRoom
 **/
export const ClientUnsubscribeFromRoom = Proto.ClientUnsubscribeFromRoom;

/**
 * @type ProtoClientUnsubscribeFromRoomResponse
 **/
export const ClientUnsubscribeFromRoomResponse = Proto.ClientUnsubscribeFromRoomResponse;

/**
 * @type ProtoClientSearchUsername
 **/
export const ClientSearchUsername = Proto.ClientSearchUsername;

/**
 * @type ProtoClientSearchUsernameResponse
 **/
export const ClientSearchUsernameResponse = Proto.ClientSearchUsernameResponse;

/**
 * @type ProtoClientCountRoomHistory
 **/
export const ClientCountRoomHistory = Proto.ClientCountRoomHistory;

/**
 * @type ProtoClientCountRoomHistoryResponse
 **/
export const ClientCountRoomHistoryResponse = Proto.ClientCountRoomHistoryResponse;

/**
 * @type ProtoClientMuteRoom
 **/
export const ClientMuteRoom = Proto.ClientMuteRoom;

/**
 * @type ProtoClientMuteRoomResponse
 **/
export const ClientMuteRoomResponse = Proto.ClientMuteRoomResponse;

/**
 * @type ProtoClientPinRoom
 **/
export const ClientPinRoom = Proto.ClientPinRoom;

/**
 * @type ProtoClientPinRoomResponse
 **/
export const ClientPinRoomResponse = Proto.ClientPinRoomResponse;

/**
 * @type ProtoClientRoomReport
 **/
export const ClientRoomReport = Proto.ClientRoomReport;

/**
 * @type ProtoClientRoomReportResponse
 **/
export const ClientRoomReportResponse = Proto.ClientRoomReportResponse;

/**
 * @type ProtoClientRegisterDevice
 **/
export const ClientRegisterDevice = Proto.ClientRegisterDevice;

/**
 * @type ProtoClientRegisterDeviceResponse
 **/
export const ClientRegisterDeviceResponse = Proto.ClientRegisterDeviceResponse;

//File 7XX

/**
 * @type ProtoFileUploadOption
 **/
export const FileUploadOption = Proto.FileUploadOption;

/**
 * @type ProtoFileUploadOptionResponse
 **/
export const FileUploadOptionResponse = Proto.FileUploadOptionResponse;

/**
 * @type ProtoFileUploadInit
 **/
export const FileUploadInit = Proto.FileUploadInit;

/**
 * @type ProtoFileUploadInitResponse
 **/
export const FileUploadInitResponse = Proto.FileUploadInitResponse;

/**
 * @type ProtoFileUpload
 **/
export const FileUpload = Proto.FileUpload;

/**
 * @type ProtoFileUploadResponse
 **/
export const FileUploadResponse = Proto.FileUploadResponse;

/**
 * @type ProtoFileUploadStatus
 **/
export const FileUploadStatus = Proto.FileUploadStatus;

/**
 * @type ProtoFileUploadStatusResponse
 **/
export const FileUploadStatusResponse = Proto.FileUploadStatusResponse;

/**
 * @type ProtoFileInfo
 **/
export const FileInfo = Proto.FileInfo;

/**
 * @type ProtoFileInfoResponse
 **/
export const FileInfoResponse = Proto.FileInfoResponse;

/**
 * @type ProtoFileDownload
 **/
export const FileDownload = Proto.FileDownload;

/**
 * @type ProtoFileDownloadResponse
 **/
export const FileDownloadResponse = Proto.FileDownloadResponse;

//QrCode 8XX

/**
 * @type ProtoQrCodeJoin
 **/
export const QrCodeJoin = Proto.QrCodeJoin;

/**
 * @type ProtoQrCodeJoinResponse
 **/
export const QrCodeJoinResponse = Proto.QrCodeJoinResponse;

/**
 * @type ProtoQrCodeResolve
 **/
export const QrCodeResolve = Proto.QrCodeResolve;

/**
 * @type ProtoQrCodeResolveResponse
 **/
export const QrCodeResolveResponse = Proto.QrCodeResolveResponse;

/**
 * @type ProtoQrCodeNewDevice
 **/
export const QrCodeNewDevice = Proto.QrCodeNewDevice;

/**
 * @type ProtoQrCodeNewDeviceResponse
 **/
export const QrCodeNewDeviceResponse = Proto.QrCodeNewDeviceResponse;

/**
 * @type ProtoQrCodeAddContact
 **/
export const QrCodeAddContact = Proto.QrCodeAddContact;

/**
 * @type ProtoQrCodeAddContactResponse
 **/
export const QrCodeAddContactResponse = Proto.QrCodeAddContactResponse;

/**
 * @type ProtoQrCodeAddMe
 **/
export const QrCodeAddMe = Proto.QrCodeAddMe;

/**
 * @type ProtoQrCodeAddMeResponse
 **/
export const QrCodeAddMeResponse = Proto.QrCodeAddMeResponse;

//Signaling 9XX

/**
 * @type ProtoSignalingGetConfiguration
 **/
export const SignalingGetConfiguration = Proto.SignalingGetConfiguration;

/**
 * @type ProtoSignalingGetConfigurationResponse
 **/
export const SignalingGetConfigurationResponse = Proto.SignalingGetConfigurationResponse;

/**
 * @type ProtoSignalingOffer
 **/
export const SignalingOffer = Proto.SignalingOffer;

/**
 * @type ProtoSignalingOfferResponse
 **/
export const SignalingOfferResponse = Proto.SignalingOfferResponse;

/**
 * @type ProtoSignalingRinging
 **/
export const SignalingRinging = Proto.SignalingRinging;

/**
 * @type ProtoSignalingRingingResponse
 **/
export const SignalingRingingResponse = Proto.SignalingRingingResponse;

/**
 * @type ProtoSignalingAccept
 **/
export const SignalingAccept = Proto.SignalingAccept;

/**
 * @type ProtoSignalingAcceptResponse
 **/
export const SignalingAcceptResponse = Proto.SignalingAcceptResponse;

/**
 * @type ProtoSignalingCandidate
 **/
export const SignalingCandidate = Proto.SignalingCandidate;

/**
 * @type ProtoSignalingCandidateResponse
 **/
export const SignalingCandidateResponse = Proto.SignalingCandidateResponse;

/**
 * @type ProtoSignalingLeave
 **/
export const SignalingLeave = Proto.SignalingLeave;

/**
 * @type ProtoSignalingLeaveResponse
 **/
export const SignalingLeaveResponse = Proto.SignalingLeaveResponse;

/**
 * @type ProtoSignalingSessionHold
 **/
export const SignalingSessionHold = Proto.SignalingSessionHold;

/**
 * @type ProtoSignalingSessionHoldResponse
 **/
export const SignalingSessionHoldResponse = Proto.SignalingSessionHoldResponse;

/**
 * @type ProtoSignalingGetLog
 **/
export const SignalingGetLog = Proto.SignalingGetLog;

/**
 * @type ProtoSignalingGetLogResponse
 **/
export const SignalingGetLogResponse = Proto.SignalingGetLogResponse;

/**
 * @type ProtoSignalingClearLog
 **/
export const SignalingClearLog = Proto.SignalingClearLog;

/**
 * @type ProtoSignalingClearLogResponse
 **/
export const SignalingClearLogResponse = Proto.SignalingClearLogResponse;

/**
 * @type ProtoSignalingRate
 **/
export const SignalingRate = Proto.SignalingRate;

/**
 * @type ProtoSignalingRateResponse
 **/
export const SignalingRateResponse = Proto.SignalingRateResponse;

//Geo 10XX

/**
 * @type ProtoGeoGetRegisterStatus
 **/
export const GeoGetRegisterStatus = Proto.GeoGetRegisterStatus;

/**
 * @type ProtoGeoGetRegisterStatusResponse
 **/
export const GeoGetRegisterStatusResponse = Proto.GeoGetRegisterStatusResponse;

/**
 * @type ProtoGeoRegister
 **/
export const GeoRegister = Proto.GeoRegister;

/**
 * @type ProtoGeoRegisterResponse
 **/
export const GeoRegisterResponse = Proto.GeoRegisterResponse;

/**
 * @type ProtoGeoUpdatePosition
 **/
export const GeoUpdatePosition = Proto.GeoUpdatePosition;

/**
 * @type ProtoGeoUpdatePositionResponse
 **/
export const GeoUpdatePositionResponse = Proto.GeoUpdatePositionResponse;

/**
 * @type ProtoGeoGetComment
 **/
export const GeoGetComment = Proto.GeoGetComment;

/**
 * @type ProtoGeoGetCommentResponse
 **/
export const GeoGetCommentResponse = Proto.GeoGetCommentResponse;

/**
 * @type ProtoGeoUpdateComment
 **/
export const GeoUpdateComment = Proto.GeoUpdateComment;

/**
 * @type ProtoGeoUpdateCommentResponse
 **/
export const GeoUpdateCommentResponse = Proto.GeoUpdateCommentResponse;

/**
 * @type ProtoGeoGetNearbyDistance
 **/
export const GeoGetNearbyDistance = Proto.GeoGetNearbyDistance;

/**
 * @type ProtoGeoGetNearbyDistanceResponse
 **/
export const GeoGetNearbyDistanceResponse = Proto.GeoGetNearbyDistanceResponse;

/**
 * @type ProtoGeoGetNearbyCoordinate
 **/
export const GeoGetNearbyCoordinate = Proto.GeoGetNearbyCoordinate;

/**
 * @type ProtoGeoGetNearbyCoordinateResponse
 **/
export const GeoGetNearbyCoordinateResponse = Proto.GeoGetNearbyCoordinateResponse;

//Push 600XX

/**
 * @type ProtoPushLoginTokenResponse
 **/
export const PushLoginTokenResponse = Proto.PushLoginTokenResponse;

/**
 * @type ProtoPushTwoStepVerificationResponse
 **/
export const PushTwoStepVerificationResponse = Proto.PushTwoStepVerificationResponse;

/**
 * @type ProtoPushUserInfoExpiredResponse
 **/
export const PushUserInfoExpiredResponse = Proto.PushUserInfoExpiredResponse;

/**
 * @type ProtoPushRateSignalingResponse
 **/
export const PushRateSignalingResponse = Proto.PushRateSignalingResponse;

export default {
  //System XX
  [methods.ERROR_RESPONSE]: ErrorResponse,
  [methods.CONNECTION_SECURING_RESPONSE]: ConnectionSecuringResponse,
  [methods.CONNECTION_SYMMETRIC_KEY]: ConnectionSymmetricKey,
  [methods.CONNECTION_SYMMETRIC_KEY_RESPONSE]: ConnectionSymmetricKeyResponse,
  [methods.HEARTBEAT]: Heartbeat,
  [methods.HEARTBEAT_RESPONSE]: HeartbeatResponse,

  //User 1XX
  [methods.USER_REGISTER]: UserRegister,
  [methods.USER_REGISTER_RESPONSE]: UserRegisterResponse,
  [methods.USER_VERIFY]: UserVerify,
  [methods.USER_VERIFY_RESPONSE]: UserVerifyResponse,
  [methods.USER_LOGIN]: UserLogin,
  [methods.USER_LOGIN_RESPONSE]: UserLoginResponse,
  [methods.USER_PROFILE_SET_EMAIL]: UserProfileSetEmail,
  [methods.USER_PROFILE_SET_EMAIL_RESPONSE]: UserProfileSetEmailResponse,
  [methods.USER_PROFILE_SET_GENDER]: UserProfileSetGender,
  [methods.USER_PROFILE_SET_GENDER_RESPONSE]: UserProfileSetGenderResponse,
  [methods.USER_PROFILE_SET_NICKNAME]: UserProfileSetNickname,
  [methods.USER_PROFILE_SET_NICKNAME_RESPONSE]: UserProfileSetNicknameResponse,
  [methods.USER_CONTACTS_IMPORT]: UserContactsImport,
  [methods.USER_CONTACTS_IMPORT_RESPONSE]: UserContactsImportResponse,
  [methods.USER_CONTACTS_GET_LIST]: UserContactsGetList,
  [methods.USER_CONTACTS_GET_LIST_RESPONSE]: UserContactsGetListResponse,
  [methods.USER_CONTACTS_DELETE]: UserContactsDelete,
  [methods.USER_CONTACTS_DELETE_RESPONSE]: UserContactsDeleteResponse,
  [methods.USER_CONTACTS_EDIT]: UserContactsEdit,
  [methods.USER_CONTACTS_EDIT_RESPONSE]: UserContactsEditResponse,
  [methods.USER_PROFILE_GET_EMAIL]: UserProfileGetEmail,
  [methods.USER_PROFILE_GET_EMAIL_RESPONSE]: UserProfileGetEmailResponse,
  [methods.USER_PROFILE_GET_GENDER]: UserProfileGetGender,
  [methods.USER_PROFILE_GET_GENDER_RESPONSE]: UserProfileGetGenderResponse,
  [methods.USER_PROFILE_GET_NICKNAME]: UserProfileGetNickname,
  [methods.USER_PROFILE_GET_NICKNAME_RESPONSE]: UserProfileGetNicknameResponse,
  [methods.USER_AVATAR_ADD]: UserAvatarAdd,
  [methods.USER_AVATAR_ADD_RESPONSE]: UserAvatarAddResponse,
  [methods.USER_AVATAR_DELETE]: UserAvatarDelete,
  [methods.USER_AVATAR_DELETE_RESPONSE]: UserAvatarDeleteResponse,
  [methods.USER_AVATAR_GET_LIST]: UserAvatarGetList,
  [methods.USER_AVATAR_GET_LIST_RESPONSE]: UserAvatarGetListResponse,
  [methods.USER_INFO]: UserInfo,
  [methods.USER_INFO_RESPONSE]: UserInfoResponse,
  [methods.USER_GET_DELETE_TOKEN]: UserGetDeleteToken,
  [methods.USER_GET_DELETE_TOKEN_RESPONSE]: UserGetDeleteTokenResponse,
  [methods.USER_DELETE]: UserDelete,
  [methods.USER_DELETE_RESPONSE]: UserDeleteResponse,
  [methods.USER_PROFILE_SET_SELF_REMOVE]: UserProfileSetSelfRemove,
  [methods.USER_PROFILE_SET_SELF_REMOVE_RESPONSE]: UserProfileSetSelfRemoveResponse,
  [methods.USER_PROFILE_GET_SELF_REMOVE]: UserProfileGetSelfRemove,
  [methods.USER_PROFILE_GET_SELF_REMOVE_RESPONSE]: UserProfileGetSelfRemoveResponse,
  [methods.USER_PROFILE_CHECK_USERNAME]: UserProfileCheckUsername,
  [methods.USER_PROFILE_CHECK_USERNAME_RESPONSE]: UserProfileCheckUsernameResponse,
  [methods.USER_PROFILE_UPDATE_USERNAME]: UserProfileUpdateUsername,
  [methods.USER_PROFILE_UPDATE_USERNAME_RESPONSE]: UserProfileUpdateUsernameResponse,
  [methods.USER_UPDATE_STATUS]: UserUpdateStatus,
  [methods.USER_UPDATE_STATUS_RESPONSE]: UserUpdateStatusResponse,
  [methods.USER_SESSION_GET_ACTIVE_LIST]: UserSessionGetActiveList,
  [methods.USER_SESSION_GET_ACTIVE_LIST_RESPONSE]: UserSessionGetActiveListResponse,
  [methods.USER_SESSION_TERMINATE]: UserSessionTerminate,
  [methods.USER_SESSION_TERMINATE_RESPONSE]: UserSessionTerminateResponse,
  [methods.USER_SESSION_LOGOUT]: UserSessionLogout,
  [methods.USER_SESSION_LOGOUT_RESPONSE]: UserSessionLogoutResponse,
  [methods.USER_CONTACTS_BLOCK]: UserContactsBlock,
  [methods.USER_CONTACTS_BLOCK_RESPONSE]: UserContactsBlockResponse,
  [methods.USER_CONTACTS_UNBLOCK]: UserContactsUnblock,
  [methods.USER_CONTACTS_UNBLOCK_RESPONSE]: UserContactsUnblockResponse,
  [methods.USER_CONTACTS_GET_BLOCKED_LIST]: UserContactsGetBlockedList,
  [methods.USER_CONTACTS_GET_BLOCKED_LIST_RESPONSE]: UserContactsGetBlockedListResponse,
  [methods.USER_TWO_STEP_VERIFICATION_GET_PASSWORD_DETAIL]: UserTwoStepVerificationGetPasswordDetail,
  [methods.USER_TWO_STEP_VERIFICATION_GET_PASSWORD_DETAIL_RESPONSE]: UserTwoStepVerificationGetPasswordDetailResponse,
  [methods.USER_TWO_STEP_VERIFICATION_VERIFY_PASSWORD]: UserTwoStepVerificationVerifyPassword,
  [methods.USER_TWO_STEP_VERIFICATION_VERIFY_PASSWORD_RESPONSE]: UserTwoStepVerificationVerifyPasswordResponse,
  [methods.USER_TWO_STEP_VERIFICATION_SET_PASSWORD]: UserTwoStepVerificationSetPassword,
  [methods.USER_TWO_STEP_VERIFICATION_SET_PASSWORD_RESPONSE]: UserTwoStepVerificationSetPasswordResponse,
  [methods.USER_TWO_STEP_VERIFICATION_UNSET_PASSWORD]: UserTwoStepVerificationUnsetPassword,
  [methods.USER_TWO_STEP_VERIFICATION_UNSET_PASSWORD_RESPONSE]: UserTwoStepVerificationUnsetPasswordResponse,
  [methods.USER_TWO_STEP_VERIFICATION_CHECK_PASSWORD]: UserTwoStepVerificationCheckPassword,
  [methods.USER_TWO_STEP_VERIFICATION_CHECK_PASSWORD_RESPONSE]: UserTwoStepVerificationCheckPasswordResponse,
  [methods.USER_TWO_STEP_VERIFICATION_VERIFY_RECOVERY_EMAIL]: UserTwoStepVerificationVerifyRecoveryEmail,
  [methods.USER_TWO_STEP_VERIFICATION_VERIFY_RECOVERY_EMAIL_RESPONSE]: UserTwoStepVerificationVerifyRecoveryEmailResponse,
  [methods.USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_EMAIL]: UserTwoStepVerificationChangeRecoveryEmail,
  [methods.USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_EMAIL_RESPONSE]: UserTwoStepVerificationChangeRecoveryEmailResponse,
  [methods.USER_TWO_STEP_VERIFICATION_REQUEST_RECOVERY_TOKEN]: UserTwoStepVerificationRequestRecoveryToken,
  [methods.USER_TWO_STEP_VERIFICATION_REQUEST_RECOVERY_TOKEN_RESPONSE]: UserTwoStepVerificationRequestRecoveryTokenResponse,
  [methods.USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_TOKEN]: UserTwoStepVerificationRecoverPasswordByToken,
  [methods.USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_TOKEN_RESPONSE]: UserTwoStepVerificationRecoverPasswordByTokenResponse,
  [methods.USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_ANSWERS]: UserTwoStepVerificationRecoverPasswordByAnswers,
  [methods.USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_ANSWERS_RESPONSE]: UserTwoStepVerificationRecoverPasswordByAnswersResponse,
  [methods.USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_QUESTION]: UserTwoStepVerificationChangeRecoveryQuestion,
  [methods.USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_QUESTION_RESPONSE]: UserTwoStepVerificationChangeRecoveryQuestionResponse,
  [methods.USER_TWO_STEP_VERIFICATION_CHANGE_HINT]: UserTwoStepVerificationChangeHint,
  [methods.USER_TWO_STEP_VERIFICATION_CHANGE_HINT_RESPONSE]: UserTwoStepVerificationChangeHintResponse,
  [methods.USER_TWO_STEP_VERIFICATION_RESEND_VERIFY_EMAIL]: UserTwoStepVerificationResendVerifyEmail,
  [methods.USER_TWO_STEP_VERIFICATION_RESEND_VERIFY_EMAIL_RESPONSE]: UserTwoStepVerificationResendVerifyEmailResponse,
  [methods.USER_PRIVACY_GET_RULE]: UserPrivacyGetRule,
  [methods.USER_PRIVACY_GET_RULE_RESPONSE]: UserPrivacyGetRuleResponse,
  [methods.USER_PRIVACY_SET_RULE]: UserPrivacySetRule,
  [methods.USER_PRIVACY_SET_RULE_RESPONSE]: UserPrivacySetRuleResponse,
  [methods.USER_VERIFY_NEW_DEVICE]: UserVerifyNewDevice,
  [methods.USER_VERIFY_NEW_DEVICE_RESPONSE]: UserVerifyNewDeviceResponse,
  [methods.USER_PROFILE_SET_BIO]: UserProfileSetBio,
  [methods.USER_PROFILE_SET_BIO_RESPONSE]: UserProfileSetBioResponse,
  [methods.USER_PROFILE_GET_BIO]: UserProfileGetBio,
  [methods.USER_PROFILE_GET_BIO_RESPONSE]: UserProfileGetBioResponse,
  [methods.USER_REPORT]: UserReport,
  [methods.USER_REPORT_RESPONSE]: UserReportResponse,

  //Chat 2XX
  [methods.CHAT_GET_ROOM]: ChatGetRoom,
  [methods.CHAT_GET_ROOM_RESPONSE]: ChatGetRoomResponse,
  [methods.CHAT_SEND_MESSAGE]: ChatSendMessage,
  [methods.CHAT_SEND_MESSAGE_RESPONSE]: ChatSendMessageResponse,
  [methods.CHAT_UPDATE_STATUS]: ChatUpdateStatus,
  [methods.CHAT_UPDATE_STATUS_RESPONSE]: ChatUpdateStatusResponse,
  [methods.CHAT_EDIT_MESSAGE]: ChatEditMessage,
  [methods.CHAT_EDIT_MESSAGE_RESPONSE]: ChatEditMessageResponse,
  [methods.CHAT_DELETE_MESSAGE]: ChatDeleteMessage,
  [methods.CHAT_DELETE_MESSAGE_RESPONSE]: ChatDeleteMessageResponse,
  [methods.CHAT_CLEAR_MESSAGE]: ChatClearMessage,
  [methods.CHAT_CLEAR_MESSAGE_RESPONSE]: ChatClearMessageResponse,
  [methods.CHAT_DELETE]: ChatDelete,
  [methods.CHAT_DELETE_RESPONSE]: ChatDeleteResponse,
  [methods.CHAT_UPDATE_DRAFT]: ChatUpdateDraft,
  [methods.CHAT_UPDATE_DRAFT_RESPONSE]: ChatUpdateDraftResponse,
  [methods.CHAT_GET_DRAFT]: ChatGetDraft,
  [methods.CHAT_GET_DRAFT_RESPONSE]: ChatGetDraftResponse,
  [methods.CHAT_CONVERT_TO_GROUP]: ChatConvertToGroup,
  [methods.CHAT_CONVERT_TO_GROUP_RESPONSE]: ChatConvertToGroupResponse,
  [methods.CHAT_SET_ACTION]: ChatSetAction,
  [methods.CHAT_SET_ACTION_RESPONSE]: ChatSetActionResponse,

  //Group chat 3XX
  [methods.GROUP_CREATE]: GroupCreate,
  [methods.GROUP_CREATE_RESPONSE]: GroupCreateResponse,
  [methods.GROUP_ADD_MEMBER]: GroupAddMember,
  [methods.GROUP_ADD_MEMBER_RESPONSE]: GroupAddMemberResponse,
  [methods.GROUP_ADD_ADMIN]: GroupAddAdmin,
  [methods.GROUP_ADD_ADMIN_RESPONSE]: GroupAddAdminResponse,
  [methods.GROUP_ADD_MODERATOR]: GroupAddModerator,
  [methods.GROUP_ADD_MODERATOR_RESPONSE]: GroupAddModeratorResponse,
  [methods.GROUP_CLEAR_MESSAGE]: GroupClearMessage,
  [methods.GROUP_CLEAR_MESSAGE_RESPONSE]: GroupClearMessageResponse,
  [methods.GROUP_EDIT]: GroupEdit,
  [methods.GROUP_EDIT_RESPONSE]: GroupEditResponse,
  [methods.GROUP_KICK_ADMIN]: GroupKickAdmin,
  [methods.GROUP_KICK_ADMIN_RESPONSE]: GroupKickAdminResponse,
  [methods.GROUP_KICK_MEMBER]: GroupKickMember,
  [methods.GROUP_KICK_MEMBER_RESPONSE]: GroupKickMemberResponse,
  [methods.GROUP_KICK_MODERATOR]: GroupKickModerator,
  [methods.GROUP_KICK_MODERATOR_RESPONSE]: GroupKickModeratorResponse,
  [methods.GROUP_LEFT]: GroupLeft,
  [methods.GROUP_LEFT_RESPONSE]: GroupLeftResponse,
  [methods.GROUP_SEND_MESSAGE]: GroupSendMessage,
  [methods.GROUP_SEND_MESSAGE_RESPONSE]: GroupSendMessageResponse,
  [methods.GROUP_UPDATE_STATUS]: GroupUpdateStatus,
  [methods.GROUP_UPDATE_STATUS_RESPONSE]: GroupUpdateStatusResponse,
  [methods.GROUP_AVATAR_ADD]: GroupAvatarAdd,
  [methods.GROUP_AVATAR_ADD_RESPONSE]: GroupAvatarAddResponse,
  [methods.GROUP_AVATAR_DELETE]: GroupAvatarDelete,
  [methods.GROUP_AVATAR_DELETE_RESPONSE]: GroupAvatarDeleteResponse,
  [methods.GROUP_AVATAR_GET_LIST]: GroupAvatarGetList,
  [methods.GROUP_AVATAR_GET_LIST_RESPONSE]: GroupAvatarGetListResponse,
  [methods.GROUP_UPDATE_DRAFT]: GroupUpdateDraft,
  [methods.GROUP_UPDATE_DRAFT_RESPONSE]: GroupUpdateDraftResponse,
  [methods.GROUP_GET_DRAFT]: GroupGetDraft,
  [methods.GROUP_GET_DRAFT_RESPONSE]: GroupGetDraftResponse,
  [methods.GROUP_GET_MEMBER_LIST]: GroupGetMemberList,
  [methods.GROUP_GET_MEMBER_LIST_RESPONSE]: GroupGetMemberListResponse,
  [methods.GROUP_DELETE]: GroupDelete,
  [methods.GROUP_DELETE_RESPONSE]: GroupDeleteResponse,
  [methods.GROUP_SET_ACTION]: GroupSetAction,
  [methods.GROUP_SET_ACTION_RESPONSE]: GroupSetActionResponse,
  [methods.GROUP_DELETE_MESSAGE]: GroupDeleteMessage,
  [methods.GROUP_DELETE_MESSAGE_RESPONSE]: GroupDeleteMessageResponse,
  [methods.GROUP_CHECK_USERNAME]: GroupCheckUsername,
  [methods.GROUP_CHECK_USERNAME_RESPONSE]: GroupCheckUsernameResponse,
  [methods.GROUP_UPDATE_USERNAME]: GroupUpdateUsername,
  [methods.GROUP_UPDATE_USERNAME_RESPONSE]: GroupUpdateUsernameResponse,
  [methods.GROUP_REMOVE_USERNAME]: GroupRemoveUsername,
  [methods.GROUP_REMOVE_USERNAME_RESPONSE]: GroupRemoveUsernameResponse,
  [methods.GROUP_REVOKE_LINK]: GroupRevokeLink,
  [methods.GROUP_REVOKE_LINK_RESPONSE]: GroupRevokeLinkResponse,
  [methods.GROUP_EDIT_MESSAGE]: GroupEditMessage,
  [methods.GROUP_EDIT_MESSAGE_RESPONSE]: GroupEditMessageResponse,
  [methods.GROUP_PIN_MESSAGE]: GroupPinMessage,
  [methods.GROUP_PIN_MESSAGE_RESPONSE]: GroupPinMessageResponse,

  //Channel 4XX
  [methods.CHANNEL_CREATE]: ChannelCreate,
  [methods.CHANNEL_CREATE_RESPONSE]: ChannelCreateResponse,
  [methods.CHANNEL_ADD_MEMBER]: ChannelAddMember,
  [methods.CHANNEL_ADD_MEMBER_RESPONSE]: ChannelAddMemberResponse,
  [methods.CHANNEL_ADD_ADMIN]: ChannelAddAdmin,
  [methods.CHANNEL_ADD_ADMIN_RESPONSE]: ChannelAddAdminResponse,
  [methods.CHANNEL_ADD_MODERATOR]: ChannelAddModerator,
  [methods.CHANNEL_ADD_MODERATOR_RESPONSE]: ChannelAddModeratorResponse,
  [methods.CHANNEL_DELETE]: ChannelDelete,
  [methods.CHANNEL_DELETE_RESPONSE]: ChannelDeleteResponse,
  [methods.CHANNEL_EDIT]: ChannelEdit,
  [methods.CHANNEL_EDIT_RESPONSE]: ChannelEditResponse,
  [methods.CHANNEL_KICK_ADMIN]: ChannelKickAdmin,
  [methods.CHANNEL_KICK_ADMIN_RESPONSE]: ChannelKickAdminResponse,
  [methods.CHANNEL_KICK_MEMBER]: ChannelKickMember,
  [methods.CHANNEL_KICK_MEMBER_RESPONSE]: ChannelKickMemberResponse,
  [methods.CHANNEL_KICK_MODERATOR]: ChannelKickModerator,
  [methods.CHANNEL_KICK_MODERATOR_RESPONSE]: ChannelKickModeratorResponse,
  [methods.CHANNEL_LEFT]: ChannelLeft,
  [methods.CHANNEL_LEFT_RESPONSE]: ChannelLeftResponse,
  [methods.CHANNEL_SEND_MESSAGE]: ChannelSendMessage,
  [methods.CHANNEL_SEND_MESSAGE_RESPONSE]: ChannelSendMessageResponse,
  [methods.CHANNEL_DELETE_MESSAGE]: ChannelDeleteMessage,
  [methods.CHANNEL_DELETE_MESSAGE_RESPONSE]: ChannelDeleteMessageResponse,
  [methods.CHANNEL_AVATAR_ADD]: ChannelAvatarAdd,
  [methods.CHANNEL_AVATAR_ADD_RESPONSE]: ChannelAvatarAddResponse,
  [methods.CHANNEL_AVATAR_DELETE]: ChannelAvatarDelete,
  [methods.CHANNEL_AVATAR_DELETE_RESPONSE]: ChannelAvatarDeleteResponse,
  [methods.CHANNEL_AVATAR_GET_LIST]: ChannelAvatarGetList,
  [methods.CHANNEL_AVATAR_GET_LIST_RESPONSE]: ChannelAvatarGetListResponse,
  [methods.CHANNEL_UPDATE_DRAFT]: ChannelUpdateDraft,
  [methods.CHANNEL_UPDATE_DRAFT_RESPONSE]: ChannelUpdateDraftResponse,
  [methods.CHANNEL_GET_DRAFT]: ChannelGetDraft,
  [methods.CHANNEL_GET_DRAFT_RESPONSE]: ChannelGetDraftResponse,
  [methods.CHANNEL_GET_MEMBER_LIST]: ChannelGetMemberList,
  [methods.CHANNEL_GET_MEMBER_LIST_RESPONSE]: ChannelGetMemberListResponse,
  [methods.CHANNEL_CHECK_USERNAME]: ChannelCheckUsername,
  [methods.CHANNEL_CHECK_USERNAME_RESPONSE]: ChannelCheckUsernameResponse,
  [methods.CHANNEL_UPDATE_USERNAME]: ChannelUpdateUsername,
  [methods.CHANNEL_UPDATE_USERNAME_RESPONSE]: ChannelUpdateUsernameResponse,
  [methods.CHANNEL_REMOVE_USERNAME]: ChannelRemoveUsername,
  [methods.CHANNEL_REMOVE_USERNAME_RESPONSE]: ChannelRemoveUsernameResponse,
  [methods.CHANNEL_REVOKE_LINK]: ChannelRevokeLink,
  [methods.CHANNEL_REVOKE_LINK_RESPONSE]: ChannelRevokeLinkResponse,
  [methods.CHANNEL_UPDATE_SIGNATURE]: ChannelUpdateSignature,
  [methods.CHANNEL_UPDATE_SIGNATURE_RESPONSE]: ChannelUpdateSignatureResponse,
  [methods.CHANNEL_GET_MESSAGES_STATS]: ChannelGetMessagesStats,
  [methods.CHANNEL_GET_MESSAGES_STATS_RESPONSE]: ChannelGetMessagesStatsResponse,
  [methods.CHANNEL_ADD_MESSAGE_REACTION]: ChannelAddMessageReaction,
  [methods.CHANNEL_ADD_MESSAGE_REACTION_RESPONSE]: ChannelAddMessageReactionResponse,
  [methods.CHANNEL_EDIT_MESSAGE]: ChannelEditMessage,
  [methods.CHANNEL_EDIT_MESSAGE_RESPONSE]: ChannelEditMessageResponse,
  [methods.CHANNEL_UPDATE_REACTION_STATUS]: ChannelUpdateReactionStatus,
  [methods.CHANNEL_UPDATE_REACTION_STATUS_RESPONSE]: ChannelUpdateReactionStatusResponse,
  [methods.CHANNEL_PIN_MESSAGE]: ChannelPinMessage,
  [methods.CHANNEL_PIN_MESSAGE_RESPONSE]: ChannelPinMessageResponse,

  //Info 5XX
  [methods.INFO_LOCATION]: InfoLocation,
  [methods.INFO_LOCATION_RESPONSE]: InfoLocationResponse,
  [methods.INFO_COUNTRY]: InfoCountry,
  [methods.INFO_COUNTRY_RESPONSE]: InfoCountryResponse,
  [methods.INFO_TIME]: InfoTime,
  [methods.INFO_TIME_RESPONSE]: InfoTimeResponse,
  [methods.INFO_PAGE]: InfoPage,
  [methods.INFO_PAGE_RESPONSE]: InfoPageResponse,
  [methods.INFO_WALLPAPER]: InfoWallpaper,
  [methods.INFO_WALLPAPER_RESPONSE]: InfoWallpaperResponse,

  //Client 6XX
  [methods.CLIENT_CONDITION]: ClientCondition,
  [methods.CLIENT_CONDITION_RESPONSE]: ClientConditionResponse,
  [methods.CLIENT_GET_ROOM_LIST]: ClientGetRoomList,
  [methods.CLIENT_GET_ROOM_LIST_RESPONSE]: ClientGetRoomListResponse,
  [methods.CLIENT_GET_ROOM]: ClientGetRoom,
  [methods.CLIENT_GET_ROOM_RESPONSE]: ClientGetRoomResponse,
  [methods.CLIENT_GET_ROOM_HISTORY]: ClientGetRoomHistory,
  [methods.CLIENT_GET_ROOM_HISTORY_RESPONSE]: ClientGetRoomHistoryResponse,
  [methods.CLIENT_GET_ROOM_MESSAGE]: ClientGetRoomMessage,
  [methods.CLIENT_GET_ROOM_MESSAGE_RESPONSE]: ClientGetRoomMessageResponse,
  [methods.CLIENT_SEARCH_ROOM_HISTORY]: ClientSearchRoomHistory,
  [methods.CLIENT_SEARCH_ROOM_HISTORY_RESPONSE]: ClientSearchRoomHistoryResponse,
  [methods.CLIENT_RESOLVE_USERNAME]: ClientResolveUsername,
  [methods.CLIENT_RESOLVE_USERNAME_RESPONSE]: ClientResolveUsernameResponse,
  [methods.CLIENT_CHECK_INVITE_LINK]: ClientCheckInviteLink,
  [methods.CLIENT_CHECK_INVITE_LINK_RESPONSE]: ClientCheckInviteLinkResponse,
  [methods.CLIENT_JOIN_BY_INVITE_LINK]: ClientJoinByInviteLink,
  [methods.CLIENT_JOIN_BY_INVITE_LINK_RESPONSE]: ClientJoinByInviteLinkResponse,
  [methods.CLIENT_JOIN_BY_USERNAME]: ClientJoinByUsername,
  [methods.CLIENT_JOIN_BY_USERNAME_RESPONSE]: ClientJoinByUsernameResponse,
  [methods.CLIENT_SUBSCRIBE_TO_ROOM]: ClientSubscribeToRoom,
  [methods.CLIENT_SUBSCRIBE_TO_ROOM_RESPONSE]: ClientSubscribeToRoomResponse,
  [methods.CLIENT_UNSUBSCRIBE_FROM_ROOM]: ClientUnsubscribeFromRoom,
  [methods.CLIENT_UNSUBSCRIBE_FROM_ROOM_RESPONSE]: ClientUnsubscribeFromRoomResponse,
  [methods.CLIENT_SEARCH_USERNAME]: ClientSearchUsername,
  [methods.CLIENT_SEARCH_USERNAME_RESPONSE]: ClientSearchUsernameResponse,
  [methods.CLIENT_COUNT_ROOM_HISTORY]: ClientCountRoomHistory,
  [methods.CLIENT_COUNT_ROOM_HISTORY_RESPONSE]: ClientCountRoomHistoryResponse,
  [methods.CLIENT_MUTE_ROOM]: ClientMuteRoom,
  [methods.CLIENT_MUTE_ROOM_RESPONSE]: ClientMuteRoomResponse,
  [methods.CLIENT_PIN_ROOM]: ClientPinRoom,
  [methods.CLIENT_PIN_ROOM_RESPONSE]: ClientPinRoomResponse,
  [methods.CLIENT_ROOM_REPORT]: ClientRoomReport,
  [methods.CLIENT_ROOM_REPORT_RESPONSE]: ClientRoomReportResponse,
  [methods.CLIENT_REGISTER_DEVICE]: ClientRegisterDevice,
  [methods.CLIENT_REGISTER_DEVICE_RESPONSE]: ClientRegisterDeviceResponse,

  //File 7XX
  [methods.FILE_UPLOAD_OPTION]: FileUploadOption,
  [methods.FILE_UPLOAD_OPTION_RESPONSE]: FileUploadOptionResponse,
  [methods.FILE_UPLOAD_INIT]: FileUploadInit,
  [methods.FILE_UPLOAD_INIT_RESPONSE]: FileUploadInitResponse,
  [methods.FILE_UPLOAD]: FileUpload,
  [methods.FILE_UPLOAD_RESPONSE]: FileUploadResponse,
  [methods.FILE_UPLOAD_STATUS]: FileUploadStatus,
  [methods.FILE_UPLOAD_STATUS_RESPONSE]: FileUploadStatusResponse,
  [methods.FILE_INFO]: FileInfo,
  [methods.FILE_INFO_RESPONSE]: FileInfoResponse,
  [methods.FILE_DOWNLOAD]: FileDownload,
  [methods.FILE_DOWNLOAD_RESPONSE]: FileDownloadResponse,

  //QrCode 8XX
  [methods.QR_CODE_JOIN]: QrCodeJoin,
  [methods.QR_CODE_JOIN_RESPONSE]: QrCodeJoinResponse,
  [methods.QR_CODE_RESOLVE]: QrCodeResolve,
  [methods.QR_CODE_RESOLVE_RESPONSE]: QrCodeResolveResponse,
  [methods.QR_CODE_NEW_DEVICE]: QrCodeNewDevice,
  [methods.QR_CODE_NEW_DEVICE_RESPONSE]: QrCodeNewDeviceResponse,
  [methods.QR_CODE_ADD_CONTACT]: QrCodeAddContact,
  [methods.QR_CODE_ADD_CONTACT_RESPONSE]: QrCodeAddContactResponse,
  [methods.QR_CODE_ADD_ME]: QrCodeAddMe,
  [methods.QR_CODE_ADD_ME_RESPONSE]: QrCodeAddMeResponse,

  //Signaling 9XX
  [methods.SIGNALING_GET_CONFIGURATION]: SignalingGetConfiguration,
  [methods.SIGNALING_GET_CONFIGURATION_RESPONSE]: SignalingGetConfigurationResponse,
  [methods.SIGNALING_OFFER]: SignalingOffer,
  [methods.SIGNALING_OFFER_RESPONSE]: SignalingOfferResponse,
  [methods.SIGNALING_RINGING]: SignalingRinging,
  [methods.SIGNALING_RINGING_RESPONSE]: SignalingRingingResponse,
  [methods.SIGNALING_ACCEPT]: SignalingAccept,
  [methods.SIGNALING_ACCEPT_RESPONSE]: SignalingAcceptResponse,
  [methods.SIGNALING_CANDIDATE]: SignalingCandidate,
  [methods.SIGNALING_CANDIDATE_RESPONSE]: SignalingCandidateResponse,
  [methods.SIGNALING_LEAVE]: SignalingLeave,
  [methods.SIGNALING_LEAVE_RESPONSE]: SignalingLeaveResponse,
  [methods.SIGNALING_SESSION_HOLD]: SignalingSessionHold,
  [methods.SIGNALING_SESSION_HOLD_RESPONSE]: SignalingSessionHoldResponse,
  [methods.SIGNALING_GET_LOG]: SignalingGetLog,
  [methods.SIGNALING_GET_LOG_RESPONSE]: SignalingGetLogResponse,
  [methods.SIGNALING_CLEAR_LOG]: SignalingClearLog,
  [methods.SIGNALING_CLEAR_LOG_RESPONSE]: SignalingClearLogResponse,
  [methods.SIGNALING_RATE]: SignalingRate,
  [methods.SIGNALING_RATE_RESPONSE]: SignalingRateResponse,

  //Geo 10XX
  [methods.GEO_GET_REGISTER_STATUS]: GeoGetRegisterStatus,
  [methods.GEO_GET_REGISTER_STATUS_RESPONSE]: GeoGetRegisterStatusResponse,
  [methods.GEO_REGISTER]: GeoRegister,
  [methods.GEO_REGISTER_RESPONSE]: GeoRegisterResponse,
  [methods.GEO_UPDATE_POSITION]: GeoUpdatePosition,
  [methods.GEO_UPDATE_POSITION_RESPONSE]: GeoUpdatePositionResponse,
  [methods.GEO_GET_COMMENT]: GeoGetComment,
  [methods.GEO_GET_COMMENT_RESPONSE]: GeoGetCommentResponse,
  [methods.GEO_UPDATE_COMMENT]: GeoUpdateComment,
  [methods.GEO_UPDATE_COMMENT_RESPONSE]: GeoUpdateCommentResponse,
  [methods.GEO_GET_NEARBY_DISTANCE]: GeoGetNearbyDistance,
  [methods.GEO_GET_NEARBY_DISTANCE_RESPONSE]: GeoGetNearbyDistanceResponse,
  [methods.GEO_GET_NEARBY_COORDINATE]: GeoGetNearbyCoordinate,
  [methods.GEO_GET_NEARBY_COORDINATE_RESPONSE]: GeoGetNearbyCoordinateResponse,

  //Push 600XX
  [methods.PUSH_LOGIN_TOKEN]: PushLoginTokenResponse,
  [methods.PUSH_TWO_STEP_VERIFICATION]: PushTwoStepVerificationResponse,
  [methods.PUSH_USER_INFO_EXPIRED]: PushUserInfoExpiredResponse,
  [methods.PUSH_RATE_SIGNALING]: PushRateSignalingResponse,
};