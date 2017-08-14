/**
 * @flow
 */

import * as methods from '../../constants/methods';

export const ErrorResponse = require('./Error_pb').ErrorResponse;
export const ConnectionSecuringResponse = require('./ConnectionSecuring_pb').ConnectionSecuringResponse;
export const ConnectionSymmetricKey = require('./ConnectionSecuring_pb').ConnectionSymmetricKey;
export const ConnectionSymmetricKeyResponse = require('./ConnectionSecuring_pb').ConnectionSymmetricKeyResponse;
export const Heartbeat = require('./Heartbeat_pb').Heartbeat;
export const HeartbeatResponse = require('./Heartbeat_pb').HeartbeatResponse;

//User 1XX
export const UserRegister = require('./UserRegister_pb').UserRegister;
export const UserRegisterResponse = require('./UserRegister_pb').UserRegisterResponse;
export const UserVerify = require('./UserVerify_pb').UserVerify;
export const UserVerifyResponse = require('./UserVerify_pb').UserVerifyResponse;
export const UserLogin = require('./UserLogin_pb').UserLogin;
export const UserLoginResponse = require('./UserLogin_pb').UserLoginResponse;
export const UserProfileSetEmail = require('./UserProfileSetEmail_pb').UserProfileSetEmail;
export const UserProfileSetEmailResponse = require('./UserProfileSetEmail_pb').UserProfileSetEmailResponse;
export const UserProfileSetGender = require('./UserProfileSetGender_pb').UserProfileSetGender;
export const UserProfileSetGenderResponse = require('./UserProfileSetGender_pb').UserProfileSetGenderResponse;
export const UserProfileSetNickname = require('./UserProfileSetNickname_pb').UserProfileSetNickname;
export const UserProfileSetNicknameResponse = require('./UserProfileSetNickname_pb').UserProfileSetNicknameResponse;
export const UserContactsImport = require('./UserContactsImport_pb').UserContactsImport;
export const UserContactsImportResponse = require('./UserContactsImport_pb').UserContactsImportResponse;
export const UserContactsGetList = require('./UserContactsGetList_pb').UserContactsGetList;
export const UserContactsGetListResponse = require('./UserContactsGetList_pb').UserContactsGetListResponse;
export const UserContactsDelete = require('./UserContactsDelete_pb').UserContactsDelete;
export const UserContactsDeleteResponse = require('./UserContactsDelete_pb').UserContactsDeleteResponse;
export const UserContactsEdit = require('./UserContactsEdit_pb').UserContactsEdit;
export const UserContactsEditResponse = require('./UserContactsEdit_pb').UserContactsEditResponse;
export const UserProfileGetEmail = require('./UserProfileGetEmail_pb').UserProfileGetEmail;
export const UserProfileGetEmailResponse = require('./UserProfileGetEmail_pb').UserProfileGetEmailResponse;
export const UserProfileGetGender = require('./UserProfileGetGender_pb').UserProfileGetGender;
export const UserProfileGetGenderResponse = require('./UserProfileGetGender_pb').UserProfileGetGenderResponse;
export const UserProfileGetNickname = require('./UserProfileGetNickname_pb').UserProfileGetNickname;
export const UserProfileGetNicknameResponse = require('./UserProfileGetNickname_pb').UserProfileGetNicknameResponse;
export const UserAvatarAdd = require('./UserAvatarAdd_pb').UserAvatarAdd;
export const UserAvatarAddResponse = require('./UserAvatarAdd_pb').UserAvatarAddResponse;
export const UserAvatarDelete = require('./UserAvatarDelete_pb').UserAvatarDelete;
export const UserAvatarDeleteResponse = require('./UserAvatarDelete_pb').UserAvatarDeleteResponse;
export const UserAvatarGetList = require('./UserAvatarGetList_pb').UserAvatarGetList;
export const UserAvatarGetListResponse = require('./UserAvatarGetList_pb').UserAvatarGetListResponse;
export const UserInfo = require('./UserInfo_pb').UserInfo;
export const UserInfoResponse = require('./UserInfo_pb').UserInfoResponse;
export const UserGetDeleteToken = require('./UserGetDeleteToken_pb').UserGetDeleteToken;
export const UserGetDeleteTokenResponse = require('./UserGetDeleteToken_pb').UserGetDeleteTokenResponse;
export const UserDelete = require('./UserDelete_pb').UserDelete;
export const UserDeleteResponse = require('./UserDelete_pb').UserDeleteResponse;
export const UserProfileSetSelfRemove = require('./UserProfileSetSelfRemove_pb').UserProfileSetSelfRemove;
export const UserProfileSetSelfRemoveResponse = require('./UserProfileSetSelfRemove_pb').UserProfileSetSelfRemoveResponse;
export const UserProfileGetSelfRemove = require('./UserProfileGetSelfRemove_pb').UserProfileGetSelfRemove;
export const UserProfileGetSelfRemoveResponse = require('./UserProfileGetSelfRemove_pb').UserProfileGetSelfRemoveResponse;
export const UserProfileCheckUsername = require('./UserProfileCheckUsername_pb').UserProfileCheckUsername;
export const UserProfileCheckUsernameResponse = require('./UserProfileCheckUsername_pb').UserProfileCheckUsernameResponse;
export const UserProfileUpdateUsername = require('./UserProfileUpdateUsername_pb').UserProfileUpdateUsername;
export const UserProfileUpdateUsernameResponse = require('./UserProfileUpdateUsername_pb').UserProfileUpdateUsernameResponse;
export const UserUpdateStatus = require('./UserUpdateStatus_pb').UserUpdateStatus;
export const UserUpdateStatusResponse = require('./UserUpdateStatus_pb').UserUpdateStatusResponse;
export const UserSessionGetActiveList = require('./UserSessionGetActiveList_pb').UserSessionGetActiveList;
export const UserSessionGetActiveListResponse = require('./UserSessionGetActiveList_pb').UserSessionGetActiveListResponse;
export const UserSessionTerminate = require('./UserSessionTerminate_pb').UserSessionTerminate;
export const UserSessionTerminateResponse = require('./UserSessionTerminate_pb').UserSessionTerminateResponse;
export const UserSessionLogout = require('./UserSessionLogout_pb').UserSessionLogout;
export const UserSessionLogoutResponse = require('./UserSessionLogout_pb').UserSessionLogoutResponse;
export const UserContactsBlock = require('./UserContactsBlock_pb').UserContactsBlock;
export const UserContactsBlockResponse = require('./UserContactsBlock_pb').UserContactsBlockResponse;
export const UserContactsUnblock = require('./UserContactsUnblock_pb').UserContactsUnblock;
export const UserContactsUnblockResponse = require('./UserContactsUnblock_pb').UserContactsUnblockResponse;
export const UserContactsGetBlockedList = require('./UserContactsGetBlockedList_pb').UserContactsGetBlockedList;
export const UserContactsGetBlockedListResponse = require('./UserContactsGetBlockedList_pb').UserContactsGetBlockedListResponse;
export const UserTwoStepVerificationGetPasswordDetail = require('./UserTwoStepVerificationGetPasswordDetail_pb').UserTwoStepVerificationGetPasswordDetail;
export const UserTwoStepVerificationGetPasswordDetailResponse = require('./UserTwoStepVerificationGetPasswordDetail_pb').UserTwoStepVerificationGetPasswordDetailResponse;
export const UserTwoStepVerificationVerifyPassword = require('./UserTwoStepVerificationVerifyPassword_pb').UserTwoStepVerificationVerifyPassword;
export const UserTwoStepVerificationVerifyPasswordResponse = require('./UserTwoStepVerificationVerifyPassword_pb').UserTwoStepVerificationVerifyPasswordResponse;
export const UserTwoStepVerificationSetPassword = require('./UserTwoStepVerificationSetPassword_pb').UserTwoStepVerificationSetPassword;
export const UserTwoStepVerificationSetPasswordResponse = require('./UserTwoStepVerificationSetPassword_pb').UserTwoStepVerificationSetPasswordResponse;
export const UserTwoStepVerificationUnsetPassword = require('./UserTwoStepVerificationUnsetPassword_pb').UserTwoStepVerificationUnsetPassword;
export const UserTwoStepVerificationUnsetPasswordResponse = require('./UserTwoStepVerificationUnsetPassword_pb').UserTwoStepVerificationUnsetPasswordResponse;
export const UserTwoStepVerificationCheckPassword = require('./UserTwoStepVerificationCheckPassword_pb').UserTwoStepVerificationCheckPassword;
export const UserTwoStepVerificationCheckPasswordResponse = require('./UserTwoStepVerificationCheckPassword_pb').UserTwoStepVerificationCheckPasswordResponse;
export const UserTwoStepVerificationVerifyRecoveryEmail = require('./UserTwoStepVerificationVerifyRecoveryEmail_pb').UserTwoStepVerificationVerifyRecoveryEmail;
export const UserTwoStepVerificationVerifyRecoveryEmailResponse = require('./UserTwoStepVerificationVerifyRecoveryEmail_pb').UserTwoStepVerificationVerifyRecoveryEmailResponse;
export const UserTwoStepVerificationChangeRecoveryEmail = require('./UserTwoStepVerificationChangeRecoveryEmail_pb').UserTwoStepVerificationChangeRecoveryEmail;
export const UserTwoStepVerificationChangeRecoveryEmailResponse = require('./UserTwoStepVerificationChangeRecoveryEmail_pb').UserTwoStepVerificationChangeRecoveryEmailResponse;
export const UserTwoStepVerificationRequestRecoveryToken = require('./UserTwoStepVerificationRequestRecoveryToken_pb').UserTwoStepVerificationRequestRecoveryToken;
export const UserTwoStepVerificationRequestRecoveryTokenResponse = require('./UserTwoStepVerificationRequestRecoveryToken_pb').UserTwoStepVerificationRequestRecoveryTokenResponse;
export const UserTwoStepVerificationRecoverPasswordByToken = require('./UserTwoStepVerificationRecoverPasswordByToken_pb').UserTwoStepVerificationRecoverPasswordByToken;
export const UserTwoStepVerificationRecoverPasswordByTokenResponse = require('./UserTwoStepVerificationRecoverPasswordByToken_pb').UserTwoStepVerificationRecoverPasswordByTokenResponse;
export const UserTwoStepVerificationRecoverPasswordByAnswers = require('./UserTwoStepVerificationRecoverPasswordByAnswers_pb').UserTwoStepVerificationRecoverPasswordByAnswers;
export const UserTwoStepVerificationRecoverPasswordByAnswersResponse = require('./UserTwoStepVerificationRecoverPasswordByAnswers_pb').UserTwoStepVerificationRecoverPasswordByAnswersResponse;
export const UserTwoStepVerificationChangeRecoveryQuestion = require('./UserTwoStepVerificationChangeRecoveryQuestion_pb').UserTwoStepVerificationChangeRecoveryQuestion;
export const UserTwoStepVerificationChangeRecoveryQuestionResponse = require('./UserTwoStepVerificationChangeRecoveryQuestion_pb').UserTwoStepVerificationChangeRecoveryQuestionResponse;
export const UserTwoStepVerificationChangeHint = require('./UserTwoStepVerificationChangeHint_pb').UserTwoStepVerificationChangeHint;
export const UserTwoStepVerificationChangeHintResponse = require('./UserTwoStepVerificationChangeHint_pb').UserTwoStepVerificationChangeHintResponse;
export const UserTwoStepVerificationResendVerifyEmail = require('./UserTwoStepVerificationResendVerifyEmail_pb').UserTwoStepVerificationResendVerifyEmail;
export const UserTwoStepVerificationResendVerifyEmailResponse = require('./UserTwoStepVerificationResendVerifyEmail_pb').UserTwoStepVerificationResendVerifyEmailResponse;
export const UserPrivacyGetRule = require('./UserPrivacyGetRule_pb').UserPrivacyGetRule;
export const UserPrivacyGetRuleResponse = require('./UserPrivacyGetRule_pb').UserPrivacyGetRuleResponse;
export const UserPrivacySetRule = require('./UserPrivacySetRule_pb').UserPrivacySetRule;
export const UserPrivacySetRuleResponse = require('./UserPrivacySetRule_pb').UserPrivacySetRuleResponse;
export const UserVerifyNewDevice = require('./UserVerifyNewDevice_pb').UserVerifyNewDevice;
export const UserVerifyNewDeviceResponse = require('./UserVerifyNewDevice_pb').UserVerifyNewDeviceResponse;

//Chat 2XX
export const ChatGetRoom = require('./ChatGetRoom_pb').ChatGetRoom;
export const ChatGetRoomResponse = require('./ChatGetRoom_pb').ChatGetRoomResponse;
export const ChatSendMessage = require('./ChatSendMessage_pb').ChatSendMessage;
export const ChatSendMessageResponse = require('./ChatSendMessage_pb').ChatSendMessageResponse;
export const ChatUpdateStatus = require('./ChatUpdateStatus_pb').ChatUpdateStatus;
export const ChatUpdateStatusResponse = require('./ChatUpdateStatus_pb').ChatUpdateStatusResponse;
export const ChatEditMessage = require('./ChatEditMessage_pb').ChatEditMessage;
export const ChatEditMessageResponse = require('./ChatEditMessage_pb').ChatEditMessageResponse;
export const ChatDeleteMessage = require('./ChatDeleteMessage_pb').ChatDeleteMessage;
export const ChatDeleteMessageResponse = require('./ChatDeleteMessage_pb').ChatDeleteMessageResponse;
export const ChatClearMessage = require('./ChatClearMessage_pb').ChatClearMessage;
export const ChatClearMessageResponse = require('./ChatClearMessage_pb').ChatClearMessageResponse;
export const ChatDelete = require('./ChatDelete_pb').ChatDelete;
export const ChatDeleteResponse = require('./ChatDelete_pb').ChatDeleteResponse;
export const ChatUpdateDraft = require('./ChatUpdateDraft_pb').ChatUpdateDraft;
export const ChatUpdateDraftResponse = require('./ChatUpdateDraft_pb').ChatUpdateDraftResponse;
export const ChatGetDraft = require('./ChatGetDraft_pb').ChatGetDraft;
export const ChatGetDraftResponse = require('./ChatGetDraft_pb').ChatGetDraftResponse;
export const ChatConvertToGroup = require('./ChatConvertToGroup_pb').ChatConvertToGroup;
export const ChatConvertToGroupResponse = require('./ChatConvertToGroup_pb').ChatConvertToGroupResponse;
export const ChatSetAction = require('./ChatSetAction_pb').ChatSetAction;
export const ChatSetActionResponse = require('./ChatSetAction_pb').ChatSetActionResponse;

//Group chat 3XX
export const GroupCreate = require('./GroupCreate_pb').GroupCreate;
export const GroupCreateResponse = require('./GroupCreate_pb').GroupCreateResponse;
export const GroupAddMember = require('./GroupAddMember_pb').GroupAddMember;
export const GroupAddMemberResponse = require('./GroupAddMember_pb').GroupAddMemberResponse;
export const GroupAddAdmin = require('./GroupAddAdmin_pb').GroupAddAdmin;
export const GroupAddAdminResponse = require('./GroupAddAdmin_pb').GroupAddAdminResponse;
export const GroupAddModerator = require('./GroupAddModerator_pb').GroupAddModerator;
export const GroupAddModeratorResponse = require('./GroupAddModerator_pb').GroupAddModeratorResponse;
export const GroupClearMessage = require('./GroupClearMessage_pb').GroupClearMessage;
export const GroupClearMessageResponse = require('./GroupClearMessage_pb').GroupClearMessageResponse;
export const GroupEdit = require('./GroupEdit_pb').GroupEdit;
export const GroupEditResponse = require('./GroupEdit_pb').GroupEditResponse;
export const GroupKickAdmin = require('./GroupKickAdmin_pb').GroupKickAdmin;
export const GroupKickAdminResponse = require('./GroupKickAdmin_pb').GroupKickAdminResponse;
export const GroupKickMember = require('./GroupKickMember_pb').GroupKickMember;
export const GroupKickMemberResponse = require('./GroupKickMember_pb').GroupKickMemberResponse;
export const GroupKickModerator = require('./GroupKickModerator_pb').GroupKickModerator;
export const GroupKickModeratorResponse = require('./GroupKickModerator_pb').GroupKickModeratorResponse;
export const GroupLeft = require('./GroupLeft_pb').GroupLeft;
export const GroupLeftResponse = require('./GroupLeft_pb').GroupLeftResponse;
export const GroupSendMessage = require('./GroupSendMessage_pb').GroupSendMessage;
export const GroupSendMessageResponse = require('./GroupSendMessage_pb').GroupSendMessageResponse;
export const GroupUpdateStatus = require('./GroupUpdateStatus_pb').GroupUpdateStatus;
export const GroupUpdateStatusResponse = require('./GroupUpdateStatus_pb').GroupUpdateStatusResponse;
export const GroupAvatarAdd = require('./GroupAvatarAdd_pb').GroupAvatarAdd;
export const GroupAvatarAddResponse = require('./GroupAvatarAdd_pb').GroupAvatarAddResponse;
export const GroupAvatarDelete = require('./GroupAvatarDelete_pb').GroupAvatarDelete;
export const GroupAvatarDeleteResponse = require('./GroupAvatarDelete_pb').GroupAvatarDeleteResponse;
export const GroupAvatarGetList = require('./GroupAvatarGetList_pb').GroupAvatarGetList;
export const GroupAvatarGetListResponse = require('./GroupAvatarGetList_pb').GroupAvatarGetListResponse;
export const GroupUpdateDraft = require('./GroupUpdateDraft_pb').GroupUpdateDraft;
export const GroupUpdateDraftResponse = require('./GroupUpdateDraft_pb').GroupUpdateDraftResponse;
export const GroupGetDraft = require('./GroupGetDraft_pb').GroupGetDraft;
export const GroupGetDraftResponse = require('./GroupGetDraft_pb').GroupGetDraftResponse;
export const GroupGetMemberList = require('./GroupGetMemberList_pb').GroupGetMemberList;
export const GroupGetMemberListResponse = require('./GroupGetMemberList_pb').GroupGetMemberListResponse;
export const GroupDelete = require('./GroupDelete_pb').GroupDelete;
export const GroupDeleteResponse = require('./GroupDelete_pb').GroupDeleteResponse;
export const GroupSetAction = require('./GroupSetAction_pb').GroupSetAction;
export const GroupSetActionResponse = require('./GroupSetAction_pb').GroupSetActionResponse;
export const GroupDeleteMessage = require('./GroupDeleteMessage_pb').GroupDeleteMessage;
export const GroupDeleteMessageResponse = require('./GroupDeleteMessage_pb').GroupDeleteMessageResponse;
export const GroupCheckUsername = require('./GroupCheckUsername_pb').GroupCheckUsername;
export const GroupCheckUsernameResponse = require('./GroupCheckUsername_pb').GroupCheckUsernameResponse;
export const GroupUpdateUsername = require('./GroupUpdateUsername_pb').GroupUpdateUsername;
export const GroupUpdateUsernameResponse = require('./GroupUpdateUsername_pb').GroupUpdateUsernameResponse;
export const GroupRemoveUsername = require('./GroupRemoveUsername_pb').GroupRemoveUsername;
export const GroupRemoveUsernameResponse = require('./GroupRemoveUsername_pb').GroupRemoveUsernameResponse;
export const GroupRevokeLink = require('./GroupRevokeLink_pb').GroupRevokeLink;
export const GroupRevokeLinkResponse = require('./GroupRevokeLink_pb').GroupRevokeLinkResponse;
export const GroupEditMessage = require('./GroupEditMessage_pb').GroupEditMessage;
export const GroupEditMessageResponse = require('./GroupEditMessage_pb').GroupEditMessageResponse;

//Channel 4XX
export const ChannelCreate = require('./ChannelCreate_pb').ChannelCreate;
export const ChannelCreateResponse = require('./ChannelCreate_pb').ChannelCreateResponse;
export const ChannelAddMember = require('./ChannelAddMember_pb').ChannelAddMember;
export const ChannelAddMemberResponse = require('./ChannelAddMember_pb').ChannelAddMemberResponse;
export const ChannelAddAdmin = require('./ChannelAddAdmin_pb').ChannelAddAdmin;
export const ChannelAddAdminResponse = require('./ChannelAddAdmin_pb').ChannelAddAdminResponse;
export const ChannelAddModerator = require('./ChannelAddModerator_pb').ChannelAddModerator;
export const ChannelAddModeratorResponse = require('./ChannelAddModerator_pb').ChannelAddModeratorResponse;
export const ChannelDelete = require('./ChannelDelete_pb').ChannelDelete;
export const ChannelDeleteResponse = require('./ChannelDelete_pb').ChannelDeleteResponse;
export const ChannelEdit = require('./ChannelEdit_pb').ChannelEdit;
export const ChannelEditResponse = require('./ChannelEdit_pb').ChannelEditResponse;
export const ChannelKickAdmin = require('./ChannelKickAdmin_pb').ChannelKickAdmin;
export const ChannelKickAdminResponse = require('./ChannelKickAdmin_pb').ChannelKickAdminResponse;
export const ChannelKickMember = require('./ChannelKickMember_pb').ChannelKickMember;
export const ChannelKickMemberResponse = require('./ChannelKickMember_pb').ChannelKickMemberResponse;
export const ChannelKickModerator = require('./ChannelKickModerator_pb').ChannelKickModerator;
export const ChannelKickModeratorResponse = require('./ChannelKickModerator_pb').ChannelKickModeratorResponse;
export const ChannelLeft = require('./ChannelLeft_pb').ChannelLeft;
export const ChannelLeftResponse = require('./ChannelLeft_pb').ChannelLeftResponse;
export const ChannelSendMessage = require('./ChannelSendMessage_pb').ChannelSendMessage;
export const ChannelSendMessageResponse = require('./ChannelSendMessage_pb').ChannelSendMessageResponse;
export const ChannelDeleteMessage = require('./ChannelDeleteMessage_pb').ChannelDeleteMessage;
export const ChannelDeleteMessageResponse = require('./ChannelDeleteMessage_pb').ChannelDeleteMessageResponse;
export const ChannelAvatarAdd = require('./ChannelAvatarAdd_pb').ChannelAvatarAdd;
export const ChannelAvatarAddResponse = require('./ChannelAvatarAdd_pb').ChannelAvatarAddResponse;
export const ChannelAvatarDelete = require('./ChannelAvatarDelete_pb').ChannelAvatarDelete;
export const ChannelAvatarDeleteResponse = require('./ChannelAvatarDelete_pb').ChannelAvatarDeleteResponse;
export const ChannelAvatarGetList = require('./ChannelAvatarGetList_pb').ChannelAvatarGetList;
export const ChannelAvatarGetListResponse = require('./ChannelAvatarGetList_pb').ChannelAvatarGetListResponse;
export const ChannelUpdateDraft = require('./ChannelUpdateDraft_pb').ChannelUpdateDraft;
export const ChannelUpdateDraftResponse = require('./ChannelUpdateDraft_pb').ChannelUpdateDraftResponse;
export const ChannelGetDraft = require('./ChannelGetDraft_pb').ChannelGetDraft;
export const ChannelGetDraftResponse = require('./ChannelGetDraft_pb').ChannelGetDraftResponse;
export const ChannelGetMemberList = require('./ChannelGetMemberList_pb').ChannelGetMemberList;
export const ChannelGetMemberListResponse = require('./ChannelGetMemberList_pb').ChannelGetMemberListResponse;
export const ChannelCheckUsername = require('./ChannelCheckUsername_pb').ChannelCheckUsername;
export const ChannelCheckUsernameResponse = require('./ChannelCheckUsername_pb').ChannelCheckUsernameResponse;
export const ChannelUpdateUsername = require('./ChannelUpdateUsername_pb').ChannelUpdateUsername;
export const ChannelUpdateUsernameResponse = require('./ChannelUpdateUsername_pb').ChannelUpdateUsernameResponse;
export const ChannelRemoveUsername = require('./ChannelRemoveUsername_pb').ChannelRemoveUsername;
export const ChannelRemoveUsernameResponse = require('./ChannelRemoveUsername_pb').ChannelRemoveUsernameResponse;
export const ChannelRevokeLink = require('./ChannelRevokeLink_pb').ChannelRevokeLink;
export const ChannelRevokeLinkResponse = require('./ChannelRevokeLink_pb').ChannelRevokeLinkResponse;
export const ChannelUpdateSignature = require('./ChannelUpdateSignature_pb').ChannelUpdateSignature;
export const ChannelUpdateSignatureResponse = require('./ChannelUpdateSignature_pb').ChannelUpdateSignatureResponse;
export const ChannelGetMessagesStats = require('./ChannelGetMessagesStats_pb').ChannelGetMessagesStats;
export const ChannelGetMessagesStatsResponse = require('./ChannelGetMessagesStats_pb').ChannelGetMessagesStatsResponse;
export const ChannelAddMessageReaction = require('./ChannelAddMessageReaction_pb').ChannelAddMessageReaction;
export const ChannelAddMessageReactionResponse = require('./ChannelAddMessageReaction_pb').ChannelAddMessageReactionResponse;
export const ChannelEditMessage = require('./ChannelEditMessage_pb').ChannelEditMessage;
export const ChannelEditMessageResponse = require('./ChannelEditMessage_pb').ChannelEditMessageResponse;

//Info 5XX
export const InfoLocation = require('./InfoLocation_pb').InfoLocation;
export const InfoLocationResponse = require('./InfoLocation_pb').InfoLocationResponse;
export const InfoCountry = require('./InfoCountry_pb').InfoCountry;
export const InfoCountryResponse = require('./InfoCountry_pb').InfoCountryResponse;
export const InfoTime = require('./InfoTime_pb').InfoTime;
export const InfoTimeResponse = require('./InfoTime_pb').InfoTimeResponse;
export const InfoPage = require('./InfoPage_pb').InfoPage;
export const InfoPageResponse = require('./InfoPage_pb').InfoPageResponse;
export const InfoWallpaper = require('./InfoWallpaper_pb').InfoWallpaper;
export const InfoWallpaperResponse = require('./InfoWallpaper_pb').InfoWallpaperResponse;

//Client 6XX
export const ClientCondition = require('./ClientCondition_pb').ClientCondition;
export const ClientConditionResponse = require('./ClientCondition_pb').ClientConditionResponse;
export const ClientGetRoomList = require('./ClientGetRoomList_pb').ClientGetRoomList;
export const ClientGetRoomListResponse = require('./ClientGetRoomList_pb').ClientGetRoomListResponse;
export const ClientGetRoom = require('./ClientGetRoom_pb').ClientGetRoom;
export const ClientGetRoomResponse = require('./ClientGetRoom_pb').ClientGetRoomResponse;
export const ClientGetRoomHistory = require('./ClientGetRoomHistory_pb').ClientGetRoomHistory;
export const ClientGetRoomHistoryResponse = require('./ClientGetRoomHistory_pb').ClientGetRoomHistoryResponse;
export const ClientGetRoomMessage = require('./ClientGetRoomMessage_pb').ClientGetRoomMessage;
export const ClientGetRoomMessageResponse = require('./ClientGetRoomMessage_pb').ClientGetRoomMessageResponse;
export const ClientSearchRoomHistory = require('./ClientSearchRoomHistory_pb').ClientSearchRoomHistory;
export const ClientSearchRoomHistoryResponse = require('./ClientSearchRoomHistory_pb').ClientSearchRoomHistoryResponse;
export const ClientResolveUsername = require('./ClientResolveUsername_pb').ClientResolveUsername;
export const ClientResolveUsernameResponse = require('./ClientResolveUsername_pb').ClientResolveUsernameResponse;
export const ClientCheckInviteLink = require('./ClientCheckInviteLink_pb').ClientCheckInviteLink;
export const ClientCheckInviteLinkResponse = require('./ClientCheckInviteLink_pb').ClientCheckInviteLinkResponse;
export const ClientJoinByInviteLink = require('./ClientJoinByInviteLink_pb').ClientJoinByInviteLink;
export const ClientJoinByInviteLinkResponse = require('./ClientJoinByInviteLink_pb').ClientJoinByInviteLinkResponse;
export const ClientJoinByUsername = require('./ClientJoinByUsername_pb').ClientJoinByUsername;
export const ClientJoinByUsernameResponse = require('./ClientJoinByUsername_pb').ClientJoinByUsernameResponse;
export const ClientSubscribeToRoom = require('./ClientSubscribeToRoom_pb').ClientSubscribeToRoom;
export const ClientSubscribeToRoomResponse = require('./ClientSubscribeToRoom_pb').ClientSubscribeToRoomResponse;
export const ClientUnsubscribeFromRoom = require('./ClientUnsubscribeFromRoom_pb').ClientUnsubscribeFromRoom;
export const ClientUnsubscribeFromRoomResponse = require('./ClientUnsubscribeFromRoom_pb').ClientUnsubscribeFromRoomResponse;
export const ClientSearchUsername = require('./ClientSearchUsername_pb').ClientSearchUsername;
export const ClientSearchUsernameResponse = require('./ClientSearchUsername_pb').ClientSearchUsernameResponse;
export const ClientCountRoomHistory = require('./ClientCountRoomHistory_pb').ClientCountRoomHistory;
export const ClientCountRoomHistoryResponse = require('./ClientCountRoomHistory_pb').ClientCountRoomHistoryResponse;

//File 7XX
export const FileUploadOption = require('./FileUploadOption_pb').FileUploadOption;
export const FileUploadOptionResponse = require('./FileUploadOption_pb').FileUploadOptionResponse;
export const FileUploadInit = require('./FileUploadInit_pb').FileUploadInit;
export const FileUploadInitResponse = require('./FileUploadInit_pb').FileUploadInitResponse;
export const FileUpload = require('./FileUpload_pb').FileUpload;
export const FileUploadResponse = require('./FileUpload_pb').FileUploadResponse;
export const FileUploadStatus = require('./FileUploadStatus_pb').FileUploadStatus;
export const FileUploadStatusResponse = require('./FileUploadStatus_pb').FileUploadStatusResponse;
export const FileInfo = require('./FileInfo_pb').FileInfo;
export const FileInfoResponse = require('./FileInfo_pb').FileInfoResponse;
export const FileDownload = require('./FileDownload_pb').FileDownload;
export const FileDownloadResponse = require('./FileDownload_pb').FileDownloadResponse;

//QrCode 8XX
export const QrCodeJoin = require('./QrCodeJoin_pb').QrCodeJoin;
export const QrCodeJoinResponse = require('./QrCodeJoin_pb').QrCodeJoinResponse;
export const QrCodeResolve = require('./QrCodeResolve_pb').QrCodeResolve;
export const QrCodeResolveResponse = require('./QrCodeResolve_pb').QrCodeResolveResponse;
export const QrCodeNewDevice = require('./QrCodeNewDevice_pb').QrCodeNewDevice;
export const QrCodeNewDeviceResponse = require('./QrCodeNewDevice_pb').QrCodeNewDeviceResponse;
export const QrCodeAddContact = require('./QrCodeAddContact_pb').QrCodeAddContact;
export const QrCodeAddContactResponse = require('./QrCodeAddContact_pb').QrCodeAddContactResponse;
export const QrCodeAddMe = require('./QrCodeAddMe_pb').QrCodeAddMe;
export const QrCodeAddMeResponse = require('./QrCodeAddMe_pb').QrCodeAddMeResponse;

//Signaling 9XX
export const SignalingGetConfiguration = require('./SignalingGetConfiguration_pb').SignalingGetConfiguration;
export const SignalingGetConfigurationResponse = require('./SignalingGetConfiguration_pb').SignalingGetConfigurationResponse;
export const SignalingOffer = require('./SignalingOffer_pb').SignalingOffer;
export const SignalingOfferResponse = require('./SignalingOffer_pb').SignalingOfferResponse;
export const SignalingRinging = require('./SignalingRinging_pb').SignalingRinging;
export const SignalingRingingResponse = require('./SignalingRinging_pb').SignalingRingingResponse;
export const SignalingAccept = require('./SignalingAccept_pb').SignalingAccept;
export const SignalingAcceptResponse = require('./SignalingAccept_pb').SignalingAcceptResponse;
export const SignalingCandidate = require('./SignalingCandidate_pb').SignalingCandidate;
export const SignalingCandidateResponse = require('./SignalingCandidate_pb').SignalingCandidateResponse;
export const SignalingLeave = require('./SignalingLeave_pb').SignalingLeave;
export const SignalingLeaveResponse = require('./SignalingLeave_pb').SignalingLeaveResponse;
export const SignalingSessionHold = require('./SignalingSessionHold_pb').SignalingSessionHold;
export const SignalingSessionHoldResponse = require('./SignalingSessionHold_pb').SignalingSessionHoldResponse;
export const SignalingGetLog = require('./SignalingGetLog_pb').SignalingGetLog;
export const SignalingGetLogResponse = require('./SignalingGetLog_pb').SignalingGetLogResponse;
export const SignalingClearLog = require('./SignalingClearLog_pb').SignalingClearLog;
export const SignalingClearLogResponse = require('./SignalingClearLog_pb').SignalingClearLogResponse;
export const SignalingRate = require('./SignalingRate_pb').SignalingRate;
export const SignalingRateResponse = require('./SignalingRate_pb').SignalingRateResponse;

//Geo 10XX
export const GeoGetRegisterStatus = require('./GeoGetRegisterStatus_pb').GeoGetRegisterStatus;
export const GeoGetRegisterStatusResponse = require('./GeoGetRegisterStatus_pb').GeoGetRegisterStatusResponse;
export const GeoRegister = require('./GeoRegister_pb').GeoRegister;
export const GeoRegisterResponse = require('./GeoRegister_pb').GeoRegisterResponse;
export const GeoUpdatePosition = require('./GeoUpdatePosition_pb').GeoUpdatePosition;
export const GeoUpdatePositionResponse = require('./GeoUpdatePosition_pb').GeoUpdatePositionResponse;
export const GeoGetComment = require('./GeoGetComment_pb').GeoGetComment;
export const GeoGetCommentResponse = require('./GeoGetComment_pb').GeoGetCommentResponse;
export const GeoUpdateComment = require('./GeoUpdateComment_pb').GeoUpdateComment;
export const GeoUpdateCommentResponse = require('./GeoUpdateComment_pb').GeoUpdateCommentResponse;
export const GeoGetNearbyDistance = require('./GeoGetNearbyDistance_pb').GeoGetNearbyDistance;
export const GeoGetNearbyDistanceResponse = require('./GeoGetNearbyDistance_pb').GeoGetNearbyDistanceResponse;
export const GeoGetNearbyCoordinate = require('./GeoGetNearbyCoordinate_pb').GeoGetNearbyCoordinate;
export const GeoGetNearbyCoordinateResponse = require('./GeoGetNearbyCoordinate_pb').GeoGetNearbyCoordinateResponse;

//Push 600XX
export const PushLoginToken = require('./PushLoginToken_pb').PushLoginToken;
export const PushTwoStepVerification = require('./PushTwoStepVerification_pb').PushTwoStepVerification;
export const PushUserInfoExpired = require('./PushUserInfoExpired_pb').PushUserInfoExpired;
export const PushRateSignaling = require('./PushRateSignaling_pb').PushRateSignaling;

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
  [methods.PUSH_LOGIN_TOKEN]: PushLoginToken,
  [methods.PUSH_TWO_STEP_VERIFICATION]: PushTwoStepVerification,
  [methods.PUSH_USER_INFO_EXPIRED]: PushUserInfoExpired,
  [methods.PUSH_RATE_SIGNALING]: PushRateSignaling,
};