import country from '../constants/country/en';
import apiErrors from '../constants/apiErrors/en';

export default {
  iGap: {
    id: 'iGap',
    defaultMessage: 'iGap',
    description: 'iGap',
  },
  iGapPlus: {
    id: 'iGapPlus',
    defaultMessage: 'iGap+',
    description: 'iGap+',
  },
  ...country,
  ...apiErrors,

  introLogoTitle: {
    id: 'Intro.logoTitle',
    defaultMessage: 'iGap Messenger',
    description: 'Intro Page',
  },
  introLogoSubTitle: {
    id: 'Intro.logoSubTitle',
    defaultMessage: 'What is the reason I started using iGap? let\'s Go!',
    description: 'Intro Page',
  },
  introSecurityTitle: {
    id: 'Intro.securityTitle',
    defaultMessage: 'Security & Privacy',
    description: 'Intro Page',
  },
  introSecuritySubTitle: {
    id: 'Intro.securitySubTitle',
    defaultMessage: 'iGap attaches the utmost importance to your security and privacy using the individual encryption algorithms and guarantees a safe and secure connection between you, your friends and family.',
    description: 'Intro Page',
  },
  introChatTitle: {
    id: 'Intro.chatTitle',
    defaultMessage: 'Chat',
    description: 'Intro Page',
  },
  introChatSubTitle: {
    id: 'Intro.chatSubTitle',
    defaultMessage: 'You can have one-on-one or group chats and even create your own channel and add members in order to share information with millions of people.',
    description: 'Intro Page',
  },
  introCallTitle: {
    id: 'Intro.callTitle',
    defaultMessage: 'Intro callTitle',
    description: 'Intro Page',
  },
  introCallSubTitle: {
    id: 'Intro.callSubTitle',
    defaultMessage: 'Intro callSubTitle',
    description: 'Intro Page',
  },
  introLocationTitle: {
    id: 'Intro.locationTitle',
    defaultMessage: 'Intro locationTitle',
    description: 'Intro Page',
  },
  introLocationSubTitle: {
    id: 'Intro.locationSubTitle',
    defaultMessage: 'Intro locationSubTitle',
    description: 'Intro Page',
  },
  introTransferTitle: {
    id: 'Intro.transferTitle',
    defaultMessage: 'File Transferring',
    description: 'Intro Page',
  },
  introTransferSubTitle: {
    id: 'Intro.transferSubTitle',
    defaultMessage: 'You have an authority to transfer any file with any size and type or save them on your cloud storage; and then share anything you\'d like to with anyone you\'d want to.',
    description: 'Intro Page',
  },
  introFreeTitle: {
    id: 'Intro.freeTitle',
    defaultMessage: 'Everything for Free in iGap!',
    description: 'Intro Page',
  },
  introFreeSubTitle: {
    id: 'Intro.freeSubTitle',
    defaultMessage: 'Let\'s stop waiting! iGap is thoroughly free. So,\n just now build your own world freely.',
    description: 'Intro Page',
  },
  introBtnSkip: {
    id: 'Intro.btnSkip',
    defaultMessage: 'Skip',
    description: 'Intro Page',
  },
  introBtnStart: {
    id: 'Intro.btnStart',
    defaultMessage: 'Start',
    description: 'Intro Page',
  },


  registerCountryPlaceHolder: {
    id: 'UserRegister.countryPlaceHolder',
    defaultMessage: 'Select Your Country ...',
    description: 'UserRegister Page',
  },
  registerPhoneNumberTitle: {
    id: 'UserRegister.phoneNumberTitle',
    defaultMessage: 'Phone Number',
    description: 'UserRegister Page',
  },
  registerPhoneNumberPlaceHolder: {
    id: 'UserRegister.phoneNumberPlaceHolder',
    defaultMessage: 'Enter Your Phone Number',
    description: 'UserRegister Page',
  },
  registerPhoneNumberHelp: {
    id: 'UserRegister.phoneNumberHelp',
    defaultMessage: 'Ex: (+98)9123456789',
    description: 'UserRegister Page',
  },
  registerSubmitBtnTitle: {
    id: 'UserRegister.submitBtnTitle',
    defaultMessage: 'Log In',
    description: 'UserRegister Page',
  },
  registerChangeLanguagePlaceholder: {
    id: 'UserRegister.changeLanguagePlaceholder',
    defaultMessage: 'Hello world',
    description: 'UserRegister Page',
  },
  registerChangeLanguageTitle: {
    id: 'UserRegister.changeLanguageTitle',
    defaultMessage: 'Chose Your Language',
    description: 'UserRegister Page',
  },
  registerPrivacyBtnTitle: {
    id: 'UserRegister.privacyBtnTitle',
    defaultMessage: 'Privacy and Policy',
    description: 'UserRegister Page',
  },
  registerLoginDivider: {
    id: 'UserRegister.loginDivider',
    defaultMessage: 'OR',
    description: 'UserRegister Page',
  },
  registerQrCodeLoginBtn: {
    id: 'UserRegister.qrCodeLoginBtn',
    defaultMessage: 'Log in with QR Code',
    description: 'UserRegister Page',
  },
  errorRequired: {
    id: 'Error.required',
    defaultMessage: 'The {field} field is required',
    description: 'error',
  },
  errorTypeNumber: {
    id: 'Error.typeNumber',
    defaultMessage: 'The {field} type is Number',
    description: 'error',
  },
  errorNumberSmallMin: {
    id: 'Error.numberSmallMin',
    defaultMessage: 'The {field} is too small, at least {min} char',
    description: 'error',
  },
  errorNumberBigMax: {
    id: 'Error.numberBigMax',
    defaultMessage: 'The {field} is too Big, max {max} char.',
    description: 'error',
  },
  errorTypeString: {
    id: 'Error.typeString',
    defaultMessage: 'The {field} type is string',
    description: 'error',
  },
  errorStringLengthMin: {
    id: 'Error.stringLengthMin',
    defaultMessage: 'The {field} is too small, at least {min} char.',
    description: 'error',
  },
  errorStringLengthMax: {
    id: 'Error.stringLengthMax',
    defaultMessage: 'The {field} is too Big, max {max} char.',
    description: 'error',
  },
  errorRegexInvalid: {
    id: 'Error.regexInvalid',
    defaultMessage: 'The {field} Invalid.',
    description: 'error',
  },


  verifyTitle: {
    id: 'UserVerify.title',
    defaultMessage: 'Verify Phone Number',
    description: 'UserVerify Page',
  },
  verifySubTitle: {
    id: 'UserVerify.subTitle',
    defaultMessage: 'We\'ve sent an {method, select,0{Sms} 1{iGap Message} 2{iGap Message and Sms}} with an activation code to your phone {phoneNumber}.',
    description: 'UserVerify Page',
  },
  verifyCodeTitle: {
    id: 'UserVerify.codeTitle',
    defaultMessage: 'Code',
    description: 'UserVerify Page',
  },
  verifyCodePlaceholder: {
    id: 'UserVerify.codePlaceholder',
    defaultMessage: 'Verification Code.',
    description: 'UserVerify Page',
  },
  verifyResendCodeTimer: {
    id: 'UserVerify.codePlaceholder',
    defaultMessage: 'resend code in {time} Second.',
    description: 'UserVerify Page',
  },

  verifyResendCodeBtnTitle: {
    id: 'UserVerify.resendCodeBtnTitle',
    defaultMessage: 'Resend Code',
    description: 'UserVerify Page',
  },
  verifyCodeBtnTitle: {
    id: 'UserVerify.verifyCodeBtnTitle',
    defaultMessage: 'Verify Code',
    description: 'UserVerify Page',
  },
  verifyCodeInvalidError: {
    id: 'UserVerify.verifyCodeInvalidError',
    defaultMessage: 'Verification Code is Invalid .',
    description: 'UserVerify Page',
  },

  spinnerDefaultTitle: {
    id: 'spinner.defaultTitle',
    defaultMessage: 'Please Wait ...',
    description: 'Spinner component',
  },

  twoStepVerificationTitle: {
    id: 'twoStepVerification.toolbarTitle',
    defaultMessage: 'Two Step Verification',
    description: 'twoStepVerification Page',
  },
  twoStepVerificationHintTitle: {
    id: 'twoStepVerification.hintTitle',
    defaultMessage: 'Hint is : "{hint}"',
    description: 'twoStepVerification Page',
  },
  twoStepVerificationPasswordLabel: {
    id: 'twoStepVerification.passwordLabel',
    defaultMessage: 'Password',
    description: 'twoStepVerification Page',
  },
  twoStepVerificationBtnTitle: {
    id: 'twoStepVerification.btnTitle',
    defaultMessage: 'Submit',
    description: 'twoStepVerification Page',
  },
  twoStepVerificationForgetBtnTitle: {
    id: 'twoStepVerification.forgetBtnTitle',
    defaultMessage: 'Forget Password?',
    description: 'twoStepVerification Page',
  },


  twoStepForgetTitle: {
    id: 'twoStepForget.toolbarTitle',
    defaultMessage: 'Recover password via:',
    description: 'twoStepVerification Page',
  },
  twoStepForgetInfoTitle: {
    id: 'twoStepForget.infoTitle',
    defaultMessage: 'Hello world',
    description: 'twoStepVerification Page',
  },
  twoStepForgetInfoContent: {
    id: 'twoStepForget.infoContent',
    defaultMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    description: 'twoStepVerification Page',
  },
  twoStepForgetRecoveryByEmailBtn: {
    id: 'twoStepForget.recoveryByEmailBtn',
    defaultMessage: 'Recovery By Email',
    description: 'forget Page',
  },
  twoStepForgetRecoveryByQuestionBtn: {
    id: 'twoStepForget.recoveryByQuestionBtn',
    defaultMessage: 'Recovery By Question',
    description: 'forget Page',
  },
  twoStepRecoveryByQuestionTitle: {
    id: 'twoStepRecoveryByQuestion.title',
    defaultMessage: 'Recovery Password',
    description: 'RecoveryByQuestion Page',
  },
  twoStepRecoveryByQuestionQuestionOne: {
    id: 'twoStepRecoveryByQuestion.questionOne',
    defaultMessage: 'Question one: ',
    description: 'RecoveryByQuestion Page',
  },
  twoStepRecoveryByQuestionQuestionTwo: {
    id: 'twoStepRecoveryByQuestion.questioTwo',
    defaultMessage: 'Question two: ',
    description: 'RecoveryByQuestion Page',
  },
  twoStepRecoveryByQuestionAnswerOnePlaceholder: {
    id: 'twoStepRecoveryByQuestion.answerOnePlaceholder',
    defaultMessage: 'Answer one',
    description: 'RecoveryByQuestion Page',
  },
  twoStepRecoveryByQuestionAnswerTwoPlaceholder: {
    id: 'twoStepRecoveryByQuestion.answerTwoPlaceholder',
    defaultMessage: 'Answer two',
    description: 'RecoveryByQuestion Page',
  },
  twoStepRecoveryByQuestionSubmitFormBtnTitle: {
    id: 'twoStepRecoveryByQuestion.submitFormBtnTitle',
    defaultMessage: 'Recovery',
    description: 'RecoveryByQuestion Page',
  },

  twoStepRecoveryByQuestionInfoTitle: {
    id: 'twoStepRecoveryByQuestion.infoTitle',
    defaultMessage: 'Hello world',
    description: 'twoStepVerification Page',
  },
  twoStepRecoveryByQuestionInfoContent: {
    id: 'twoStepRecoveryByQuestion.infoContent',
    defaultMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    description: 'twoStepVerification Page',
  },

  twoStepRecoveryByEmailTitle: {
    id: 'twoStepRecoveryByEmail.infoContent',
    defaultMessage: 'Recovery By Email',
    description: 'twoStepVerification Page',
  },
  twoStepRecoveryByEmailTokenLabel: {
    id: 'twoStepRecoveryByEmail.tokenLabel',
    defaultMessage: 'Recovery Token.',
    description: 'twoStepVerification Page',
  },
  twoStepRecoveryByEmailTokenHelp: {
    id: 'twoStepRecoveryByEmail.tokenHelp',
    defaultMessage: 'Send a recovery token to {email}.',

    description: 'twoStepVerification Page',
  },
  twoStepRecoveryByEmailSubmitFormBtnTitle: {
    id: 'twoStepRecoveryByEmail.submitFormBtnTitle',
    defaultMessage: 'Recovery',
    description: 'twoStepVerification Page',
  },
  twoStepRecoveryByEmailResendBtnTitle: {
    id: 'twoStepRecoveryByEmail.resendBtnTitle',
    defaultMessage: 'Resend Token',
    description: 'twoStepVerification Page',
  },
  twoStepRecoveryByEmailInfoTitle: {
    id: 'twoStepRecoveryByEmail.infoTitle',
    defaultMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    description: 'twoStepVerification Page',
  },
  twoStepRecoveryByEmailInfoContent: {
    id: 'twoStepRecoveryByEmail.infoContent',
    defaultMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    description: 'twoStepVerification Page',
  },

  newProfileTitle: {
    id: 'newProfile.title',
    defaultMessage: 'New Profile',
    description: 'New Profile Page',
  },
  newProfileBtnTitle: {
    id: 'newProfile.btnTitle',
    defaultMessage: 'Submit',
    description: 'New Profile Page',
  },
  newProfileNicknameLabel: {
    id: 'newProfile.nicknameLabel',
    defaultMessage: 'Nickname',
    description: 'New Profile Page',
  },
  newProfileInfoTitle: {
    id: 'UserVerify.infoTitle',
    defaultMessage: 'Hello world',
    description: 'UserVerify Page',
  },
  newProfileInfoContent: {
    id: 'UserVerify.infoContent',
    defaultMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    description: 'UserVerify Page',
  },


  contactListTitleToolbar: {
    id: 'contactList.titleToolbar',
    defaultMessage: 'Contact List',
    description: 'Contact List Screen',
  },
  contactFormTitleToolbar: {
    id: 'contactForm.titleToolbar',
    defaultMessage: 'New Contact',
    description: 'Contact New Screen',
  },
  contactFormFirstNameLabel: {
    id: 'contactForm.firstNameLabel',
    defaultMessage: 'First Name',
    description: 'Contact New Screen',
  },
  contactFormLastNameLabel: {
    id: 'contactForm.lastNameLabel',
    defaultMessage: 'Last Name',
    description: 'Contact New Screen',
  },
  contactFormPhoneLabel: {
    id: 'contactForm.phoneLabel',
    defaultMessage: 'Phone Number',
    description: 'Contact New Screen',
  },
  contactFormPhoneHelp: {
    id: 'contactForm.phoneHelp',
    defaultMessage: 'Ex:(+98) 9123456789',
    description: 'Contact New Screen',
  },

  userProfileChat: {
    id: 'userProfile.chat',
    defaultMessage: 'Chat',
    description: 'page user profile',
  },
  userProfileUserName: {
    id: 'userProfile.username',
    defaultMessage: 'User Name : ',
    description: 'page user profile',
  },
  userProfilePhoneNumber: {
    id: 'userProfile.phonenumber',
    defaultMessage: 'Phone Number : ',
    description: 'page user profile',
  },
  userProfileBlock: {
    id: 'userProfile.block',
    defaultMessage: 'Block',
    description: 'page user profile',
  },
  userProfileClearHistory: {
    id: 'userProfile.clearhistory',
    defaultMessage: 'Clear History',
    description: 'page user profile',
  },
  userProfileConvertToGroup: {
    id: 'userProfile.userprofileconverttogroup',
    defaultMessage: 'Convert To Group',
    description: 'page user profile',
  },
  userProfileIgapBalance: {
    id: 'userProfile.igapBalance',
    defaultMessage: 'iGap Balance',
    description: 'page user profile',
  },
  userProfileDetailLabel: {
    id: 'userProfile.detailLabel',
    defaultMessage: 'Detail',
    description: 'page user profile',
  },
  userProfileAvailableBalance: {
    id: 'userProfile.availableBalance',
    defaultMessage: 'Available Balance',
    description: 'page user profile',
  },

  roomInfoDetails: {
    id: 'roomInfo.details',
    defaultMessage: 'Details',
    description: 'RoomInfo screen',
  },

  roomInfoLeave: {
    id: 'roomInfo.leave',
    defaultMessage: 'Leave',
    description: 'RoomInfo screen',
  },

  roomInfoJoin: {
    id: 'roomInfo.join',
    defaultMessage: 'Join',
    description: 'RoomInfo screen',
  },
  roomInfoMessage: {
    id: 'roomInfo.message',
    defaultMessage: 'Message',
    description: 'RoomInfo screen',
  },
  roomInfoCall: {
    id: 'roomInfo.call',
    defaultMessage: 'Call',
    description: 'RoomInfo screen',
  },
  roomInfoMember: {
    id: 'roomInfo.member',
    defaultMessage: 'Member',
    description: 'RoomInfo screen',
  },
  roomInfoUsername: {
    id: 'roomInfo.username',
    defaultMessage: 'Username',
    description: 'RoomInfo screen',
  },
  roomInfoMuteNotifications: {
    id: 'roomInfo.mute.notifications',
    defaultMessage: 'Mute Notifications',
    description: 'RoomInfo screen',
  },
  roomInfoSharedMedia: {
    id: 'roomInfo.shared.media',
    defaultMessage: 'Shared Media',
    description: 'RoomInfo screen',
  },
  roomInfoSharedImages: {
    id: 'roomInfo.shared.images',
    defaultMessage: 'Images',
    description: 'RoomInfo screen',
  },
  roomInfoSharedVideos: {
    id: 'roomInfo.videos',
    defaultMessage: 'Videos',
    description: 'RoomInfo screen',
  },
  roomInfoSharedAudios: {
    id: 'roomInfo.audios',
    defaultMessage: 'Audios',
    description: 'RoomInfo screen',
  },
  roomInfoSharedVoices: {
    id: 'roomInfo.voices',
    defaultMessage: 'Voices',
    description: 'RoomInfo screen',
  },
  roomInfoSharedFiles: {
    id: 'roomInfo.files',
    defaultMessage: 'Files',
    description: 'RoomInfo screen',
  },
  roomInfoSharedLinks: {
    id: 'roomInfo.links',
    defaultMessage: 'Links',
    description: 'RoomInfo screen',
  },
  newNewGroup: {
    id: 'new.newGroup',
    defaultMessage: 'New Group',
    description: 'new Screen',
  },
  newPlus: {
    id: 'new.plus',
    defaultMessage: 'Plus',
    description: 'new Screen',
  },
  newNewChannel: {
    id: 'new.newChannel',
    defaultMessage: 'New Channel',
    description: 'new Screen',
  },
  newNewSecretP2PChat: {
    id: 'new.newSecretP2PChat',
    defaultMessage: 'New Secret P2P Chat',
    description: 'new Screen',
  },
  newNewCreateInvoice: {
    id: 'new.newCreateInvoice',
    defaultMessage: 'New Create Invoice',
    description: 'new Screen',
  },
  newContacts: {
    id: 'new.contacts',
    defaultMessage: 'Contacts',
    description: 'new Screen',
  },
  newAddContacts: {
    id: 'new.addContacts',
    defaultMessage: 'Add Contacts',
    description: 'new Screen',
  },
  roomGroupCreateNewGroup: {
    id: 'roomGroupCreate.newGroup',
    defaultMessage: 'New Group',
    description: 'room Group Create screen',
  },
  roomGroupCreateGroupName: {
    id: 'roomGroupCreate.groupName',
    defaultMessage: 'Group Name',
    description: 'room Group Create screen',
  },
  roomGroupCreateGroupDescription: {
    id: 'roomGroupCreate.groupDescription',
    defaultMessage: 'Group Description',
    description: 'room Group Create screen',
  },
  roomChannelCreateNewChannel: {
    id: 'roomChannelCreate.newChannel',
    defaultMessage: 'New Channel',
    description: 'room Channel Create screen',
  },
  roomChannelCreateChannelName: {
    id: 'roomChannelCreate.channelName',
    defaultMessage: 'Channel Name',
    description: 'room Channel Create screen',
  },
  roomChannelCreateChannelDescription: {
    id: 'roomChannelCreate.channelDescription',
    defaultMessage: 'Channel Description',
    description: 'room Channel Create screen',
  },
  callMute: {
    id: 'call.mute',
    defaultMessage: 'Mute',
    description: 'call screen',
  },
  callSpeaker: {
    id: 'call.speaker.',
    defaultMessage: 'Speaker',
    description: 'call screen',
  },
  callSendMessage: {
    id: 'call.sendMessage',
    defaultMessage: ' Send Message',
    description: 'call screen',
  },
  callKeyPad: {
    id: 'call.keyPad',
    defaultMessage: 'KeyPad',
    description: 'call screen',
  },
  calliGapCall: {
    id: 'call.iGapCall',
    defaultMessage: 'iGap Call',
    description: 'call screen',
  },
};