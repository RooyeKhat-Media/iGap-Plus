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
  clientUpdating: {
    id: 'clientUpdating',
    defaultMessage: 'Updating ...',
    description: 'Updating',
  },
  loading: {
    id: 'loading',
    defaultMessage: 'Loading ....',
    description: 'loading',
  },
  shortMeter: {
    id: 'shortMeter',
    defaultMessage: '{distance} M',
    description: 'Meter',
  },
  shortKilometer: {
    id: 'shortKilometer',
    defaultMessage: '{distance} Km',
    description: 'Kilometer',
  },
  cancel: {
    id: 'cancel',
    defaultMessage: 'Cancel',
    description: 'public',
  },

  ok: {
    id: 'ok',
    defaultMessage: 'Ok',
    description: 'All Pages',
  },
  dismiss: {
    id: 'dismiss',
    defaultMessage: 'Dismiss',
    description: 'All Pages',
  },
  connectionStatusConnecting: {
    id: 'connectionStatus.connecting',
    defaultMessage: 'Connecting...',
    description: 'All Pages',
  },
  connectionStatusSecuring: {
    id: 'connectionStatus.securing',
    defaultMessage: 'Securing...',
    description: 'All Pages',
  },
  connectionStatusAuthenticating: {
    id: 'connectionStatus.authenticating',
    defaultMessage: 'Authenticating...',
    description: 'All Pages',
  },
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
    defaultMessage: 'Free Call',
    description: 'Intro Page',
  },
  introCallSubTitle: {
    id: 'Intro.callSubTitle',
    defaultMessage: 'You can make thoroughly free and secure voice/video calls to anyone on iGap and save your money. iGap call is P2P-based with no server\'s interference in transmission.',
    description: 'Intro Page',
  },
  introLocationTitle: {
    id: 'Intro.locationTitle',
    defaultMessage: 'Nearby',
    description: 'Intro Page',
  },
  introLocationSubTitle: {
    id: 'Intro.locationSubTitle',
    defaultMessage: 'You are able to recognize and see who is near, get to know and chat for more acquaintances.',
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
    defaultMessage: 'Language',
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
  registerTermsOfService: {
    id: 'register.TermsOfService',
    defaultMessage: 'Terms of Service',
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
  QrCodeLoginGoLoginScreenBtn: {
    id: 'QrCodeLogin.goLoginScreenBtn',
    defaultMessage: 'Login with Phone Number',
    description: 'QrCode Login Page',
  },
  QrCodeLoginHelp: {
    id: 'QrCodeLogin.help',
    defaultMessage: 'Read this QrCode with your iGap app to login .',
    description: 'QrCode Login Page',
  },
  QrCodeLoginHelpJoin: {
    id: 'QrCodeLogin.helpJoin',
    defaultMessage: 'Read this QrCode with your iGap app to join room .',
    description: 'QrCode Login Page',
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
    defaultMessage: 'The {field} is too big, max {max} char.',
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
    defaultMessage: 'The {field} is too big, max {max} char.',
    description: 'error',
  },
  errorRegexInvalid: {
    id: 'Error.regexInvalid',
    defaultMessage: 'The {field} Invalid.',
    description: 'error',
  },
  verifySmsPermissionTitle: {
    id: 'UserVerify.receiveSms',
    defaultMessage: 'Receive Sms',
    description: 'UserVerify Page',
  },
  verifySmsPermissionContent: {
    id: 'UserVerify.fillAutomaticallyReceivedCodeNeedSmsPermission',
    defaultMessage: 'Fill automatically received code need sms permission',
    description: 'UserVerify Page',
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
    id: 'UserVerify.resendCodeTimer',
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

  twoStepSettingTitle: {
    id: 'twoStepSetting.title',
    defaultMessage: 'Tow-Step Verification',
    description: 'two-step setting',
  },
  twoStepSettingSetAdditionalPasswordBtn: {
    id: 'twoStepSetting.setAdditionalPasswordBtn',
    defaultMessage: 'Set Additional Password',
    description: 'two-step setting',
  },
  twoStepSettingSetAdditionalPasswordHelp: {
    id: 'twoStepSetting.setAdditionalPasswordHelp',
    defaultMessage: 'You can set a password that will be required when you log in on a new device in additional to the code you get in the SMS.',
    description: 'two-step setting',
  },
  twoStepSetPasswordTitle: {
    id: 'twoStepSetPassword.title',
    defaultMessage: 'Your Password',
    description: 'two-step setting',
  },
  twoStepSetPasswordPasswordLabel: {
    id: 'twoStepSetPassword.passwordLabel',
    defaultMessage: 'Enter Password',
    description: 'two-step setting',
  },
  twoStepSetPasswordPasswordHint: {
    id: 'twoStepSetPassword.passwordHint',
    defaultMessage: 'Password',
    description: 'two-step setting',
  },
  twoStepSetPasswordConfirmPasswordLabel: {
    id: 'twoStepSetPassword.confirmPasswordLabel',
    defaultMessage: 'Enter Confirm Password',
    description: 'two-step setting',
  },
  twoStepSetPasswordConfirmPasswordNotMatch: {
    id: 'twoStepSetPassword.confirmPasswordNotMatch',
    defaultMessage: 'Confirmed Password is Not Match',
    description: 'two-step setting',
  },
  twoStepSetPasswordConfirmPasswordHint: {
    id: 'twoStepSetPassword.confirmPasswordHint',
    defaultMessage: 'Confirm Password',
    description: 'two-step setting',
  },
  twoStepSetPasswordHintLabel: {
    id: 'twoStepSetPassword.hintLabel',
    defaultMessage: 'Hint',
    description: 'two-step setting',
  },
  twoStepSetPasswordVerifyEmailTitle: {
    id: 'twoStepSetPasswordVerifyEmail.title',
    defaultMessage: 'Verify Email',
    description: 'two-step setting',
  },
  twoStepSetPasswordVerifyEmailTokenLabel: {
    id: 'twoStepVerifyEmail.tokenLabel',
    defaultMessage: 'Verify Token',
    description: 'two-step setting',
  },
  twoStepSetPasswordVerifyEmailRecentCode: {
    id: 'twoStepVerifyEmail.recentCode',
    defaultMessage: 'Recent Token',
    description: 'two-step setting',
  },

  twoStepChangeEmailTitle: {
    id: 'twoStepChangeEmail.title',
    defaultMessage: 'Change Email',
    description: 'two-step setting',
  },

  twoStepChangeHintTitle: {
    id: 'twoStepChangeHint.title',
    defaultMessage: 'Change Hint',
    description: 'two-step setting',
  },
  twoStepChangeRecoveryQuestionTitle: {
    id: 'twoStepChangeRecoveryQuestion.title',
    defaultMessage: 'Change Recovery Question',
    description: 'two-step setting',
  },
  twoStepVerifyEmailTitle: {
    id: 'twoStepVerifyEmail.title',
    defaultMessage: 'Verify Recovery Email',
    description: 'two-step setting',
  },

  twoStepSetPasswordQuestionOneLabel: {
    id: 'twoStepSetPassword.questionOneLabel',
    defaultMessage: 'Question One',
    description: 'two-step setting',
  },
  twoStepSetPasswordAnswerOneLabel: {
    id: 'twoStepSetPassword.answerOneLabel',
    defaultMessage: 'Answer One',
    description: 'two-step setting',
  },
  twoStepSetPasswordQuestionTwoLabel: {
    id: 'twoStepSetPassword.questionTwoLabel',
    defaultMessage: 'Question Two',
    description: 'two-step setting',
  },
  twoStepSetPasswordAnswerTwoLabel: {
    id: 'twoStepSetPassword.answerTwoLabel',
    defaultMessage: 'Answer Two',
    description: 'two-step setting',
  },
  twoStepSetPasswordEmailLabel: {
    id: 'twoStepSetPassword.emailLabel',
    defaultMessage: 'Email',
    description: 'two-step setting',
  },

  twoStepSettingChangePasswordBtn: {
    id: 'twoStepSetting.changePasswordBtn',
    defaultMessage: 'Change Password',
    description: 'two-step setting',
  },
  twoStepSettingChangeEmailBtn: {
    id: 'twoStepSetting.changeEmailBtn',
    defaultMessage: 'Change Email',
    description: 'two-step setting',
  },
  twoStepSettingChangeHintBtn: {
    id: 'twoStepSetting.changeHintBtn',
    defaultMessage: 'Change Hint',
    description: 'two-step setting',
  },
  twoStepSettingChangeRecoveryQuestionsBtn: {
    id: 'twoStepSetting.changeRecoveryQuestionsBtn',
    defaultMessage: 'Change Recovery Questions',
    description: 'two-step setting',
  },
  twoStepSettingVerifyEmailBtn: {
    id: 'twoStepSetting.verifyEmailBtn',
    defaultMessage: 'Verify Email',
    description: 'two-step setting',
  },
  twoStepSettingDeleteTwoStepBtn: {
    id: 'twoStepSetting.deleteTwoStepBtn',
    defaultMessage: 'Delete Two-Step Verification',
    description: 'two-step setting',
  },
  twoStepSettingSettingHelp: {
    id: 'twoStepSetting.settingHelp',
    defaultMessage: 'Delete Two-Step Verification',
    description: 'two-step setting',
  },
  twoStepSettingSettingUnsetPassowrdTitle: {
    id: 'twoStepSetting.unsetPassowrdTitle',
    defaultMessage: 'Delete Two-Step Verification',
    description: 'two-step setting',
  },
  twoStepSettingSettingUnsetPassowrdDescription: {
    id: 'twoStepSetting.unsetPassowrdDescription',
    defaultMessage: 'Are you sure you want to delete Two-step verification ?',
    description: 'two-step setting',
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
    id: 'twoStepRecoveryByEmail.title',
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

  editProfileName: {
    id: 'editProfile.name',
    defaultMessage: 'Name',
    description: 'EditProfile Page',
  },
  editProfileUserName: {
    id: 'editProfile.userName',
    defaultMessage: 'User Name',
    description: 'EditProfile Page',
  },
  editProfilePhoneNumber: {
    id: 'editProfile.phoneNumber',
    defaultMessage: 'Phone Number',
    description: 'EditProfile Page',
  },
  editProfileBio: {
    id: 'editProfile.bio',
    defaultMessage: 'Bio',
    description: 'EditProfile Page',
  },
  editProfilePrivateInformation: {
    id: 'editProfile.privateInformation',
    defaultMessage: 'Private Information',
    description: 'EditProfile Page',
  },
  editProfileEmail: {
    id: 'editProfile.email',
    defaultMessage: 'Email',
    description: 'EditProfile Page',
  },
  editProfileMale: {
    id: 'editProfile.male',
    defaultMessage: 'Male',
    description: 'EditProfile Page',
  },
  editProfileFemale: {
    id: 'editProfile.female',
    defaultMessage: 'Female',
    description: 'EditProfile Page',
  },
  editProfileNotSpecified: {
    id: 'editProfile.notSpecified',
    defaultMessage: 'Not Specified',
    description: 'EditProfile Page',
  },
  editProfileGender: {
    id: 'editProfile.gender',
    defaultMessage: 'Gender',
    description: 'EditProfile Page',
  },
  editProfileEditProfile: {
    id: 'editProfile.ditProfile',
    defaultMessage: 'Edit Profile',
    description: 'EditProfile Page',
  },
  editProfileChangePhoto: {
    id: 'editProfile.changePhoto',
    defaultMessage: 'Change Photo',
    description: 'EditProfile Page',
  },

  editProfileCheckUsernameInvalid: {
    id: 'editProfile.checkUsernameInvalid',
    defaultMessage: 'Username is Invalid',
    description: 'EditProfile Page',
  },
  editProfileCheckUsernameTaken: {
    id: 'editProfile.checkUsernameTaken',
    defaultMessage: 'Username is Taken',
    description: 'EditProfile Page',
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
  roomInfoPhone: {
    id: 'roomInfo.phone',
    defaultMessage: 'Phone',
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
  newMyCloud: {
    id: 'new.myCloud',
    defaultMessage: 'My Cloud',
    description: 'new Screen',
  },
  newContacts: {
    id: 'new.contacts',
    defaultMessage: 'Contacts',
    description: 'new Screen',
  },
  newSearch: {
    id: 'new.search',
    defaultMessage: 'Search',
    description: 'new Screen',
  },
  newGlobal: {
    id: 'new.global',
    defaultMessage: 'Global',
    description: 'new Screen',
  },
  newAddContacts: {
    id: 'new.addContacts',
    defaultMessage: 'Add Contacts',
    description: 'new Screen',
  },
  roomCreateToolbarTitle: {
    id: 'roomCreate.toolbarTitle',
    defaultMessage: 'New Room',
    description: 'room Create screen',
  },
  roomCreateFieldName: {
    id: 'roomGroupCreate.fieldName',
    defaultMessage: 'Name',
    description: 'room Create screen',
  },
  roomCreateFieldDescription: {
    id: 'roomCreate.fieldDescription',
    defaultMessage: 'Description',
    description: 'room Create screen',
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
  callInCall: {
    id: 'call.inCall',
    defaultMessage: 'in Call',
    description: 'call screen',
  },
  callOutCall: {
    id: 'call.outCall',
    defaultMessage: 'out Call',
    description: 'call screen',
  },
  callDisconnected: {
    id: 'call.disconnected',
    defaultMessage: 'Disconnected',
    description: 'call screen',
  },
  callCalling: {
    id: 'call.calling',
    defaultMessage: 'Calling',
    description: 'call screen',
  },
  callRinging: {
    id: 'call.ringing',
    defaultMessage: 'Ringing',
    description: 'call screen',
  },
  callConnecting: {
    id: 'call.connecting',
    defaultMessage: 'Connecting',
    description: 'call screen',
  },
  callConnected: {
    id: 'call.connected',
    defaultMessage: 'Connected',
    description: 'call screen',
  },
  callRejected: {
    id: 'call.rejected',
    defaultMessage: 'Rejected',
    description: 'call screen',
  },
  callNotAnswered: {
    id: 'call.notAnswered',
    defaultMessage: 'Not Answered',
    description: 'call screen',
  },
  callUnavailable: {
    id: 'call.unavailable',
    defaultMessage: 'unavailable',
    description: 'call screen',
  },
  callBusy: {
    id: 'call.Busy',
    defaultMessage: 'Busy',
    description: 'call screen',
  },
  callTitlePermission: {
    id: 'call.titleVoicePermission',
    defaultMessage: '{callDirect , select ,true{Incoming} false{Outgoing} } {callType,select ,0{Voice} 1{Video} } Call',
    description: 'call screen',
  },
  callContentVoicePermission: {
    id: 'call.contentVoicePermission',
    defaultMessage: 'Call Need Capture Voice',
    description: 'call screen',
  },
  callContentVideoPermission: {
    id: 'call.contentVideoPermission',
    defaultMessage: 'Call Need Capture Video',
    description: 'call screen',
  },
  callReturnToCall: {
    id: 'call.returnToCall',
    defaultMessage: 'Return To Call',
    description: 'call screen',
  },
  callListRecentCall: {
    id: 'callList.recentCall',
    defaultMessage: 'Recent Call',
    description: 'callList screen',
  },
  callListClearCallHistory: {
    id: 'callList.clearCallHistory',
    defaultMessage: 'Clear Call History',
    description: 'callList screen',
  },
  groupCreateSelectContactTitle: {
    id: 'groupCreate.selectContactTitle',
    defaultMessage: 'New Group with...',
    description: 'contact picker screen',
  },
  groupCheckUsernameInvalid: {
    id: 'group.checkUsernameInvalid',
    defaultMessage: 'Invalid Username',
    description: 'Room Update Username Screen',
  },
  groupCheckUsernameTaken: {
    id: 'group.checkUsernameTaken',
    defaultMessage: 'Username Taken',
    description: 'Room Update Username Screen',
  },
  channelCheckUsernameInvalid: {
    id: 'channel.checkUsernameInvalid',
    defaultMessage: 'Invalid Username',
    description: 'Room Update Username Screen',
  },
  channelCheckUsernameTaken: {
    id: 'channel.checkUsernameTaken',
    defaultMessage: 'Username Taken',
    description: 'Room Update Username Screen',
  },
  roomUpdateUsernameRadioBtnPublic: {
    id: 'roomUpdateUsername.radioBtnPublic',
    defaultMessage: 'Public',
    description: 'Room Update Username Screen',
  },
  roomUpdateUsernameRadioBtnPrivate: {
    id: 'roomUpdateUsername.radioBtnPrivate',
    defaultMessage: 'Private',
    description: 'Room Update Username Screen',
  },
  roomUpdateUsernameToolbarTitle: {
    id: 'roomUpdateUsername.toolbarTitle',
    defaultMessage: 'Change Room Type',
    description: 'Room Update Username Screen',
  },
  roomUpdateUsernameTitle: {
    id: 'roomUpdateUsername.title',
    defaultMessage: 'Username',
    description: 'Room Update Username Screen',
  },
  roomUpdateUsernameDescription: {
    id: 'roomUpdateUsername.description',
    defaultMessage: 'People can join your channel by searching this username. You can use a-z, 0-9 and underscores. The minimum length of username should be 5 characters.',
    description: 'Room Update Username Screen',
  },
  roomUpdateUsernameInviteLinkLabel: {
    id: 'roomUpdateUsername.inviteLinkLabel',
    defaultMessage: 'Invite Link',
    description: 'Room Update Username Screen',
  },
  roomUpdateUsernameRevokeLinkBtn: {
    id: 'roomUpdateUsername.revokeLinkBtn',
    defaultMessage: 'Revoke Link',
    description: 'Room Update Username Screen',
  },

  channelCreateSelectContactTitle: {
    id: 'channelCreate.selectContactTitle',
    defaultMessage: 'New Channel with...',
    description: 'contact picker screen',
  },
  roomEditToolbarTitle: {
    id: 'roomEdit.toolbarTitle',
    defaultMessage: 'Edit Room',
    description: 'room Edit screen',
  },
  roomEditChangePhoto: {
    id: 'roomEdit.changePhoto',
    defaultMessage: 'Change Avatar',
    description: 'room Edit screen',
  },
  roomInfoChatSendMessageBtn: {
    id: 'roomInfo.chatSendMessageBtn',
    defaultMessage: 'Message',
    description: 'room Info screen',
  },
  roomInfoChatCallBtn: {
    id: 'roomInfo.chatCallBtn',
    defaultMessage: 'Call',
    description: 'room Info screen',
  },
  roomInfoLeaveRoomBtn: {
    id: 'roomInfo.leaveRoomBtn',
    defaultMessage: 'Leave',
    description: 'room Info screen',
  },
  roomInfoJoinRoomBtn: {
    id: 'roomInfo.joinRoomBtn',
    defaultMessage: 'Join',
    description: 'room Info screen',
  },
  roomInfoEditRoomBtn: {
    id: 'roomInfo.editRoomBtn',
    defaultMessage: 'Edit',
    description: 'room Info screen',
  },
  roomInfoAddMember: {
    id: 'roomInfo.addMember',
    defaultMessage: 'Add Member',
    description: 'room Info screen',
  },
  roomInfoMemberList: {
    id: 'roomInfo.memberList',
    defaultMessage: 'Member List',
    description: 'room Info screen',
  },
  roomInfoInviteLink: {
    id: 'roomInfo.InviteLink',
    defaultMessage: 'Invite Link',
    description: 'room Info screen',
  },
  roomInfoConvertType: {
    id: 'roomInfo.convertToPrivate',
    defaultMessage: 'Convert Room Type',
    description: 'room Info screen',
  },
  roomInfoClearHistory: {
    id: 'roomInfo.clearHistory',
    defaultMessage: 'Clear History',
    description: 'room Info screen',
  },
  roomInfoDeleteRoom: {
    id: 'roomInfo.deleteRoom',
    defaultMessage: 'Delete Room',
    description: 'room Info screen',
  },
  roomInfoAddMemberToolbarTitle: {
    id: 'roomInfo.addMemberToolbartTitle',
    defaultMessage: 'Add Member',
    description: 'room Info screen',
  },
  roomInfoDeleteRoomConfirmTitle: {
    id: 'roomInfo.deleteRoomConfirmTitle',
    defaultMessage: 'Delete Room',
    description: 'room info screen',
  },
  roomInfoDeleteRoomConfirmDescription: {
    id: 'roomInfo.deleteRoomConfirmDescription',
    defaultMessage: 'Are you sure you want to delete {roomTitle}?',
    description: 'room info screen',
  },
  roomInfoClearHistoryConfirmTitle: {
    id: 'roomInfo.clearHistoryConfirmTitle',
    defaultMessage: 'Clear History',
    description: 'room info screen',
  },
  roomInfoClearHistoryConfirmDescription: {
    id: 'roomInfo.clearHistoryConfirmDescription',
    defaultMessage: 'Are you sure you want to clear {roomTitle} history?',
    description: 'room info screen',
  },
  roomInfoLeaveRomConfirmTitle: {
    id: 'roomInfo.leaveRoomConfirmTitle',
    defaultMessage: 'Leave Room',
    description: 'room info screen',
  },
  roomInfoLeaveRomConfirmDescription: {
    id: 'roomInfo.leaveRoomConfirmDescription',
    defaultMessage: 'Are you sure you want to leave from {roomTitle}?',
    description: 'room info screen',
  },
  roomInfoShareContact: {
    id: 'roomInfo.shareContact',
    defaultMessage: 'Share',
    description: 'room info screen',
  },
  roomInfoEditContact: {
    id: 'roomInfo.editContact',
    defaultMessage: 'Edit Contact',
    description: 'room info screen',
  },
  roomInfoBlockContact: {
    id: 'roomInfo.blockContact',
    defaultMessage: 'Block Contact',
    description: 'room info screen',
  },
  roomInfoUnBlockContact: {
    id: 'roomInfo.unBlockContact',
    defaultMessage: 'Unblock Contact',
    description: 'room info screen',
  },
  roomInfoDeleteContact: {
    id: 'roomInfo.deleteContact',
    defaultMessage: 'Delete Contact',
    description: 'room info screen',
  },
  roomInfoDeleteContactConfirmTitle: {
    id: 'roomInfo.deleteContactConfirmTitle',
    defaultMessage: 'Delete Contact',
    description: 'room info screen',
  },
  roomInfoDeleteContactConfirmDescription: {
    id: 'roomInfo.deleteContactConfirmDescription',
    defaultMessage: 'Are you sure you want to delete this contact?',
    description: 'room info screen',
  },
  roomInfoBlockContactConfirmTitle: {
    id: 'roomInfo.blockContactConfirmTitle',
    defaultMessage: 'Block Contact',
    description: 'room info screen',
  },
  roomInfoBlockContactConfirmDescription: {
    id: 'roomInfo.blockContactConfirmDescription',
    defaultMessage: 'Are you sure you want to block this contact?',
    description: 'room info screen',
  },
  roomMemberListToolbarTitle: {
    id: 'roomMemberList.toolbarTitle',
    defaultMessage: 'Member List',
    description: 'room Member List screen',
  },
  roomMemberListKickAdmin: {
    id: 'roomMemberList.kickAdmin',
    defaultMessage: 'Kick Admin',
    description: 'room Member List screen',
  },
  roomMemberListAddAdmin: {
    id: 'roomMemberList.addAdmin',
    defaultMessage: 'Set as Admin',
    description: 'room Member List screen',
  },
  roomMemberListKickModerator: {
    id: 'roomMemberList.kickModerator',
    defaultMessage: 'Kick Moderator',
    description: 'room Member List screen',
  },
  roomMemberListAddtModerator: {
    id: 'roomMemberList.addModerator',
    defaultMessage: 'Set Moderator',
    description: 'room Member List screen',
  },
  roomMemberListKickMember: {
    id: 'roomMemberList.kickMember',
    defaultMessage: 'Kick Member',
    description: 'room Member List screen',
  },
  roomInviteLinkToolbarTitle: {
    id: 'roomInviteLink.toolbarTitle',
    defaultMessage: 'Invite Link',
    description: 'Room Revoke Invite Link Screen',
  },
  roomInviteLinkInviteLinkLabel: {
    id: 'roomInviteLink.inviteLinkLabel',
    defaultMessage: 'Invite Link',
    description: 'Room Revoke Invite Link Screen',
  },
  roomInviteLinkRevokeLinkBtn: {
    id: 'roomInviteLink.revokeLinkBtn',
    defaultMessage: 'Revoke Link',
    description: 'Room Revoke Invite Link Screen',
  },
  roomInviteLinkCopyClipboardBtn: {
    id: 'roomInviteLink.copyClipboardBtn',
    defaultMessage: 'Copy Link',
    description: 'Room Revoke Invite Link Screen',
  },
  roomHistoryUnreadMessageLabel: {
    id: 'roomHistory.unreadMessageLabel',
    defaultMessage: 'Unread Messages',
    description: 'roomHistory screen',
  },
  roomHistorySendBoxCamera: {
    id: 'roomHistory.sendBox.camera',
    defaultMessage: 'Camera',
    description: 'roomHistory sendBox screen',
  },
  roomHistorySendBoxImage: {
    id: 'roomHistory.sendBox.image',
    defaultMessage: 'Image',
    description: 'roomHistory sendBox screen',
  },
  roomHistorySendBoxVideo: {
    id: 'roomHistory.sendBox.video',
    defaultMessage: 'Video',
    description: 'roomHistory sendBox  screen',
  },
  roomHistorySendBoxMusic: {
    id: 'roomHistory.sendBox.music',
    defaultMessage: 'Music',
    description: 'roomHistory sendBox screen',
  },
  roomHistorySendBoxFile: {
    id: 'roomHistory.sendBox.file',
    defaultMessage: 'File',
    description: 'roomHistory sendBox screen',
  },
  roomHistorySendBoxContact: {
    id: 'roomHistory.sendBox.contact',
    defaultMessage: 'Contact',
    description: 'roomHistory SendBox screen',
  },
  roomHistorySendBoxLocation: {
    id: 'roomHistory.sendBox.location',
    defaultMessage: 'Location',
    description: 'roomHistory sendBox screen',
  },
  roomHistorySendBoxClose: {
    id: 'roomHistory.sendBox.close',
    defaultMessage: 'Close',
    description: 'roomHistory sendBox screen',
  },
  roomHistorySendBoxReplyTo: {
    id: 'roomHistory.sendBox.replyTo',
    defaultMessage: 'Reply to',
    description: 'roomHistory sendBox screen',
  },
  roomHistorySendBoxForward: {
    id: 'roomHistory.sendBox.forward',
    defaultMessage: 'Forward',
    description: 'roomHistory sendBox screen',
  },
  roomHistoryMicrophonePermission: {
    id: 'roomHistory.microphone.permission',
    defaultMessage: 'Microphone permission',
    description: 'roomHistory sendBox screen',
  },
  roomHistoryRecordSound: {
    id: 'roomHistory.record.sound ',
    defaultMessage: 'Record sound need microphone permission',
    description: 'roomHistory sendBox screen',
  },
  roomHistoryCameraPermission: {
    id: 'roomHistory.camera.permission',
    defaultMessage: 'Camera permission',
    description: 'roomHistory sendBox screen',
  },
  roomHistoryCameraPermissionMessage: {
    id: 'roomHistory.camera.permission.message',
    defaultMessage: 'Capture image need camera permission',
    description: 'roomHistory sendBox screen',
  },
  roomHistoryStoragePermission: {
    id: 'roomHistory.storage.permission',
    defaultMessage: 'Storage permission',
    description: 'roomHistory sendBox screen',
  },
  roomHistoryStoragePermissionMessage: {
    id: 'roomHistory.Storage.permission.message',
    defaultMessage: 'Camera need Storage permission',
    description: 'roomHistory sendBox screen',
  },
  roomHistoryDeleteMessagesTitle: {
    id: 'roomHistory.deleteMessagesTitle',
    defaultMessage: 'Delete Messages',
    description: 'roomHistory screen',
  },
  roomHistoryDeleteMessagesDescription: {
    id: 'roomHistory.deleteMessagesDescription',
    defaultMessage: 'Are you sure you want to delete {count} message from {roomTitle} ?',
    description: 'roomHistory screen',
  },
  roomHistoryJoinBoxJoin: {
    id: 'roomHistory.joinBox.join',
    defaultMessage: 'Join',
    description: 'roomHistory joinBox screen',
  },
  roomHistoryJoinBoxMute: {
    id: 'roomHistory.joinBox.mute',
    defaultMessage: 'Mute',
    description: 'roomHistory joinBox screen',
  },
  roomHistoryJoinBoxUnMute: {
    id: 'roomHistory.joinBox.unMute',
    defaultMessage: 'UnMute',
    description: 'roomHistory joinBox screen',
  },
  roomHistoryActionTitle: {
    id: 'roomHistory.actionTitle',
    defaultMessage: 'Messages',
    description: 'roomHistory screen',
  },
  roomHistoryActionEdit: {
    id: 'roomHistory.actionEdit',
    defaultMessage: 'Edit',
    description: 'roomHistory screen',
  },
  roomHistoryActionContentCopy: {
    id: 'roomHistory.actionContentCopy',
    defaultMessage: 'Copy Content',
    description: 'roomHistory screen',
  },
  roomHistoryActionForward: {
    id: 'roomHistory.actionForward',
    defaultMessage: 'Forward',
    description: 'roomHistory screen',
  },
  roomHistoryActionReply: {
    id: 'roomHistory.actionReply',
    defaultMessage: 'Reply',
    description: 'roomHistory screen',
  },
  roomHistoryActionSaveToDownload: {
    id: 'roomHistory.actionSaveToDownload',
    defaultMessage: 'Save To Download',
    description: 'roomHistory screen',
  },
  roomHistoryActionSaveToGallery: {
    id: 'roomHistory.actionSaveToGallery',
    defaultMessage: 'Save To Gallery',
    description: 'roomHistory screen',
  },
  roomHistoryActionSaveToMusic: {
    id: 'roomHistory.actionSaveToMusic',
    defaultMessage: 'Save To Music',
    description: 'roomHistory screen',
  },
  roomHistoryActionShare: {
    id: 'roomHistory.actionShare',
    defaultMessage: 'Share',
    description: 'roomHistory screen',
  },
  roomHistoryForwardTo: {
    id: 'roomHistory.forwardTo',
    defaultMessage: 'Forward To: ',
    description: 'roomHistory screen',
  },
  roomHistoryActionChat: {
    id: 'roomHistory.actionChat',
    defaultMessage: 'is {action, select, 1{Typing} 2{Sending Image} 3{Capturing Image} 4{Sending Video} 5{Capturing Video} 6{Sending Audio} 7{Recording Voice} 8{Sending Voice} 9{Sending Document} 10{Sending Gif} 11{Sending File} 12{Sending Location} 13{Choosing Contact} 14{Painting}}...',
    description: 'roomHistory screen',
  },
  roomHistoryAction: {
    id: 'roomHistory.action',
    defaultMessage: '{count, select, 1{{author} is} other{{count} Members are}} {action, select, 1{Typing} 2{Sending Image} 3{Capturing Image} 4{Sending Video} 5{Capturing Video} 6{Sending Audio} 7{Recording Voice} 8{Sending Voice} 9{Sending Document} 10{Sending Gif} 11{Sending File} 12{Sending Location} 13{Choosing Contact} 14{Painting}}...',
    description: 'roomHistory screen',
  },
  roomHistoryActionReport: {
    id: 'roomHistory.actionReport',
    defaultMessage: 'Report',
    description: 'roomHistory screen',
  },
  roomHistoryQrLink: {
    id: 'roomHistory.qrLink',
    defaultMessage: 'QR code',
    description: 'roomHistory screen',
  },
  roomHistoryPickContactTitle: {
    id: 'roomHistory.pickContactTitle',
    defaultMessage: 'Select Contact',
    description: 'roomHistory screen',
  },
  roomHistoryDeleteMessageForBoth: {
    id: 'roomHistory.deleteMessageForBoth',
    defaultMessage: 'Delete Message For {userTitle}?',
    description: 'roomHistory screen',
  },
  roomMessageReplyTo: {
    id: 'roomMessage.replyTo',
    defaultMessage: 'Reply to',
    description: 'roomMessage Box',
  },
  roomMessageForwardFrom: {
    id: 'roomMessage.ForwardFrom',
    defaultMessage: 'Forward from',
    description: 'roomMessage Box',
  },
  roomMessagePrivateRoom: {
    id: 'roomMessage.privateRoom',
    defaultMessage: 'Private room',
    description: 'roomMessage Box',
  },
  logMessageTypeUserJoined: {
    id: 'logMessageType.userJoined',
    defaultMessage: '`{author}` joined iGap',
    description: 'roomMessage Log',
  },
  logMessageTypeUserDeleted: {
    id: 'logMessageType.userDeleted',
    defaultMessage: '`{author}` deleted iGap account',
    description: 'roomMessage Log',
  },
  logMessageTypeRoomCreated: {
    id: 'logMessageType.roomCreated',
    defaultMessage: '`{roomTitle}` {roomType, select, 1{Group} 2{Channel}} created',
    description: 'roomMessage Log',
  },
  logMessageTypeMemberAdded: {
    id: 'logMessageType.memberAdded',
    defaultMessage: '{ownerMessage, select, 0{{author}} 1{You}} added {targetUserOwner, select, 0{{targetUser}} 1{You}} to the {roomType, select, 1{Group} 2{Channel}}',
    description: 'roomMessage Log',
  },
  logMessageTypeMemberKicked: {
    id: 'logMessageType.memberKicked',
    defaultMessage: '{ownerMessage, select, 0{{author}} 1{You}} kicked {targetUserOwner, select, 0{{targetUser}} 1{You}} out of the {roomType, select, 1{Group} 2{Channel}}',
    description: 'roomMessage Log',
  },
  logMessageTypeMemberLeft: {
    id: 'logMessageType.memberLeft',
    defaultMessage: '{ownerMessage, select, 0{{author}} 1{You}} left {roomType, select, 1{Group} 2{Channel}}',
    description: 'roomMessage Log',
  },
  logMessageTypeRoomConvertedToPublic: {
    id: 'logMessageType.roomConvertedToPublic',
    defaultMessage: '{roomType, select, 1{Group} 2{Channel}} has been converted to public',
    description: 'roomMessage Log',
  },
  logMessageTypeRoomConvertedToPrivate: {
    id: 'logMessageType.roomConvertedToPrivate',
    defaultMessage: '{roomType, select, 1{Group} 2{Channel}} has been converted to private',
    description: 'roomMessage Log',
  },
  logMessageTypeMemberJoinedByInviteLink: {
    id: 'logMessageType.memberJoinedByInviteLink',
    defaultMessage: '{ownerMessage, select, 0{{author}} 1{You}} joined the {roomType, select, 1{Group} 2{Channel}} through the invitation link',
    description: 'roomMessage Log',
  },
  logMessageTypeRoomDeleted: {
    id: 'logMessageType.roomDeleted',
    defaultMessage: '{roomType, select, 1{Group} 2{Channel}} `{roomTitle}` deleted',
    description: 'roomMessage Log',
  },
  logMessageTypeMissedVoiceCall: {
    id: 'logMessageType.missedVoiceCall',
    defaultMessage: 'Voice Call {ownerMessage, select, 0{missed} 1{cancelled}}',
    description: 'roomMessage Log',
  },
  logMessageTypeMissedVideoCall: {
    id: 'logMessageType.missedVideoCall',
    defaultMessage: 'Video Call {ownerMessage, select, 0{missed} 1{cancelled}}',
    description: 'roomMessage Log',
  },
  logMessageTypeMissedScreenShare: {
    id: 'logMessageType.missedScreenShare',
    defaultMessage: 'Screen {ownerMessage, select, 0{missed} 1{cancelled}}',
    description: 'roomMessage Log',
  },
  logMessageTypeMissedSecretChat: {
    id: 'logMessageType.missedSecretChat',
    defaultMessage: 'Secret {ownerMessage, select, 0{missed} 1{cancelled}}',
    description: 'roomMessage Log',
  },
  settingSetting: {
    id: 'setting.setting',
    defaultMessage: 'Setting',
    description: 'setting screen',
  },
  settingLogout: {
    id: 'setting.logout',
    defaultMessage: 'Logout',
    description: 'setting screen',
  },
  settingDeleteAccount: {
    id: 'setting.deleteAccount',
    defaultMessage: 'Delete Account',
    description: 'setting screen',
  },
  settingGeneralSettings: {
    id: 'setting.generalSettings',
    defaultMessage: 'General Settings',
    description: 'setting screen',
  },
  settingIgapSupport: {
    id: 'setting.igapSupport',
    defaultMessage: 'iGap Support',
    description: 'setting screen',
  },
  settingIgapOfficialHome: {
    id: 'setting.igapOfficialHome',
    defaultMessage: 'iGap Official Home',
    description: 'setting screen',
  },
  settingIgapOfficialBlog: {
    id: 'setting.igapOfficialBlog',
    defaultMessage: 'iGap Official Blog',
    description: 'setting screen',
  },
  settingSupportRequest: {
    id: 'setting.supportRequest',
    defaultMessage: 'Support Request',
    description: 'setting screen',
  },
  settingBlockList: {
    id: 'setting.blockList',
    defaultMessage: 'Block List',
    description: 'setting screen',
  },
  settingLogOutSubTitle: {
    id: 'setting.logOuSubTitlet',
    defaultMessage: 'Do you want to logout this device ?',
    description: 'setting screen',
  },
  settingDeleteAccountSubTitle: {
    id: 'setting.deleteAccountSubTitle',
    defaultMessage: 'Do you want to delete your account ?',
    description: 'setting screen',
  },
  settingNotificationAndSound: {
    id: 'setting.notificationAndSound',
    defaultMessage: 'Notification and Sound',
    description: 'setting screen',
  },
  settingLanguage: {
    id: 'setting.language',
    defaultMessage: 'Language',
    description: 'setting screen',
  },
  settingThemes: {
    id: 'setting.themes',
    defaultMessage: 'Themes',
    description: 'setting screen',
  },
  settingThemesPickerTitle: {
    id: 'setting.themesPickerTitle',
    defaultMessage: 'Theme',
    description: 'setting screen',
  },
  settingThemesPickerPlaceHolder: {
    id: 'setting.themesPickerPlaceHolder',
    defaultMessage: 'Change Theme',
    description: 'setting screen',
  },
  settingTwoStepVerification: {
    id: 'setting.twoStepVerification',
    defaultMessage: 'Two-Step Verification',
    description: 'setting screen',
  },
  settingIgapVersion: {
    id: 'setting.igapVersion',
    defaultMessage: 'iGap plus client {platform} version {appVersion} ',
    description: 'setting screen',
  },
  settingLoginWithQrCode: {
    id: 'setting.LoginWithQrCode',
    defaultMessage: 'Scan QR code',
    description: 'setting screen',
  },
  settingChatBackground: {
    id: 'setting.chatBackground',
    defaultMessage: 'Chat Background',
    description: 'setting screen',
  },
  qrCodeLoggedInDevice: {
    id: 'qrCode.loggedInDevice',
    defaultMessage: 'Logged in device',
    description: 'qrCode screen',
  },
  qrCodeQrCodeLogin: {
    id: 'qrCode.qrCodeLogin',
    defaultMessage: 'QrCode Login',
    description: 'qrCode screen',
  },


  privacyPrivacy: {
    id: 'privacy.privacy',
    defaultMessage: 'Privacy',
    description: 'Privacy screen',
  },
  privacyWhoCanSeeMyAvatar: {
    id: 'privacy.whoCanSeeMyAvatar',
    defaultMessage: 'Who can see my avatar',
    description: 'Privacy screen',
  },
  privacyWhoCanInviteMeToChannels: {
    id: 'privacy.whoCanInviteMeToChannels',
    defaultMessage: 'Who can invite me to channels',
    description: 'Privacy screen',
  },
  privacyWhoCanInviteMeToGroups: {
    id: 'privacy.whoCanInviteMeToGroups',
    defaultMessage: 'Who can invite me to groups',
    description: 'Privacy screen',
  },
  privacyWhoCanCallMe: {
    id: 'privacy.whoCanCallMe',
    defaultMessage: 'Who can call me',
    description: 'Privacy screen',
  },
  privacyLastSeen: {
    id: 'privacy.lastSeen',
    defaultMessage: 'Last seen',
    description: 'Privacy screen',
  },
  privacyEveryBody: {
    id: 'privacy.everyBody',
    defaultMessage: 'EveryBody',
    description: 'Privacy screen',
  },
  privacyMyContacts: {
    id: 'privacy.myContacts',
    defaultMessage: 'My Contacts',
    description: 'Privacy screen',
  },
  privacyNobody: {
    id: 'privacy.nobody',
    defaultMessage: 'Nobody',
    description: 'Privacy screen',
  },
  privacyAccountSelfDestruct: {
    id: 'privacy.accountSelfDestruct',
    defaultMessage: 'Account Self Destruct',
    description: 'Privacy screen',
  },
  privacyAwayFor: {
    id: 'privacy.awayFor',
    defaultMessage: 'Away for',
    description: 'Privacy screen',
  },
  privacyMonth: {
    id: 'privacy.month',
    defaultMessage: '{value, number} {value, plural,one {Month}other {Months}}',
    description: 'Privacy screen',
  },
  privacySelfRemoveComment: {
    id: 'privacy.selfRemoveComment',
    defaultMessage: 'If you choose one of the period in the following and never use your iGap account during the certain time your account will be destructed and deleted spontaneously ',
    description: 'Privacy screen',
  },
  privacyYear: {
    id: 'privacy.year',
    defaultMessage: '{value, number} {value, plural,one {Year}other {Years}}',
    description: 'Privacy screen',
  },
  blockContentDialog: {
    id: 'block.contentDialog',
    defaultMessage: 'Unblock this user',
    description: 'block screen',
  },
  blockTitleDialog: {
    id: 'block.titleDialog',
    defaultMessage: 'Are You Sure',
    description: 'block screen',
  },
  activeSessionActiveSession: {
    id: 'activeSession.activeSession',
    defaultMessage: 'Active Session',
    description: 'Active Session page',
  },
  activeSessionCurrentSession: {
    id: 'activeSession.currentSession',
    defaultMessage: 'Current Session',
    description: 'Active Session page',
  },
  activeSessionTerminateAllOtherActiveSession: {
    id: 'activeSession.terminateAllOtherActiveSession',
    defaultMessage: 'Terminate all other active session',
    description: 'Active Session page',
  },
  activeSessionTerminate: {
    id: 'activeSession.terminate',
    defaultMessage: 'Terminate',
    description: 'Active Session page',
  },
  activeSessionPlatform: {
    id: 'activeSession.platform',
    defaultMessage: '{ platform, select, 1{ANDROID} 2{IOS} 3{MAC_OS} 4{WINDOWS} 5{LINUX} 6{BLACK_BERRY} other{UNKNOWN_PLATFORM}}',
    description: 'activeSession Page',
  },
  activeSessionLogsOutAllDevice: {
    id: 'activeSession.logsOutAllDevice',
    defaultMessage: 'Logs out all device except for this one',
    description: 'Active Session page',
  },
  activeSessionTapOnSessionToTerminate: {
    id: 'activeSession.tapOnSessionToTerminate',
    defaultMessage: 'Tap on session to terminate',
    description: 'Active Session page',
  },
  activeSessionCloseAllSession: {
    id: 'activeSession.closeAllSession',
    defaultMessage: 'Are you sure want to terminate all active session',
    description: 'Active Session page',
  },
  activeSessionCloseThisSession: {
    id: 'activeSession.closeThisSession',
    defaultMessage: 'Are you sure want to terminate this active session',
    description: 'Active Session page',
  },
  activeSessionOnline: {
    id: 'activeSession.online',
    defaultMessage: 'Online',
    description: 'Active Session page',
  },
  activeSessionCountry: {
    id: 'activeSession.country',
    defaultMessage: 'Country',
    description: 'Active Session page',
  },
  activeSessionLastActivity: {
    id: 'activeSession.lastActivity',
    defaultMessage: 'Last Activity',
    description: 'Active Session page',
  },
  activeSessionTerminateTitle: {
    id: 'activeSession.terminateTitle',
    defaultMessage: 'Terminate the Active Session',
    description: 'Active Session page',
  },
  userVerifyDeleteVerifyDeleteAccount: {
    id: 'userVerifyDelete.verifyDeleteAccount',
    defaultMessage: 'Verify delete account',
    description: 'userVerifyDelete Page',
  },
  userVerifyDeleteSubTitle: {
    id: 'userVerifyDelete.subTitle',
    defaultMessage: 'We\'ve sent Sms with an activation code to your phone.',
    description: 'userVerifyDelete Page',
  },
  userVerifyDeleteEnterCode: {
    id: 'userVerifyDelete.enterCode',
    defaultMessage: 'EnterCode',
    description: 'userVerifyDelete Page',
  },
  userVerifyDeleteCode: {
    id: 'userVerifyDelete.code',
    defaultMessage: 'Code',
    description: 'userVerifyDelete Page',
  },
  roomReportTitle: {
    id: 'roomReport.title',
    defaultMessage: 'Report',
    description: 'Room Report Page',
  },
  roomReportReason: {
    id: 'roomReport.reason',
    defaultMessage: 'Reason',
    description: 'Room Report Page',
  },
  roomReportReasonSpam: {
    id: 'roomReport.reasonSpam',
    defaultMessage: 'Spam',
    description: 'Room Report Page',
  },
  roomReportReasonPornography: {
    id: 'roomReport.reasonPornography',
    defaultMessage: 'Pornography',
    description: 'Room Report Page',
  },
  roomReportReasonViolence: {
    id: 'roomReport.reasonViolence',
    defaultMessage: 'Violence',
    description: 'Room Report Page',
  },
  roomReportReasonAbuse: {
    id: 'roomReport.reasonAbuse',
    defaultMessage: 'Abuse',
    description: 'Room Report Page',
  },
  roomReportReasonOther: {
    id: 'roomReport.reasonOther',
    defaultMessage: 'Other',
    description: 'Room Report Page',
  },
  roomReportReasonDescription: {
    id: 'roomReport.reasonDescription',
    defaultMessage: 'Description',
    description: 'Room Report Page',
  },
  roomReportReasonDescriptionRequired: {
    id: 'roomReport.reasonDescriptionRequired',
    defaultMessage: 'Description is Required',
    description: 'Room Report Page',
  },
  avatarListSaveToGallery: {
    id: 'avatarList.saveToGallery',
    defaultMessage: 'Save To Gallery',
    description: 'avatarListSave Page',
  },
  avatarListShare: {
    id: 'avatarList.share',
    defaultMessage: 'Share',
    description: 'avatarListSave Page',
  },
  avatarListDeletePhoto: {
    id: 'avatarList.deletePhoto',
    defaultMessage: 'Delete Photo',
    description: 'avatarListSave Page',
  },
  voiceRecorderSlideToCancel: {
    id: 'voiceRecorder.slideToCancel',
    defaultMessage: '< Slide To Cancel',
    description: 'voice Recorder',
  },

  roomListActionTitle: {
    id: 'roomList.actionTitle',
    defaultMessage: 'Actions',
    description: 'Room List Screen',
  },
  roomListActionUnpinRoom: {
    id: 'roomList.actionUnpinRoom',
    defaultMessage: 'Unpin',
    description: 'Room List Screen',
  },
  roomListActionPinRoom: {
    id: 'roomList.actionPinRoom',
    defaultMessage: 'Pin',
    description: 'Room List Screen',
  },
  roomListActionMuteNotification: {
    id: 'roomList.actionMuteNotification',
    defaultMessage: 'Mute Notification',
    description: 'Room List Screen',
  },
  roomListActionUnMuteNotification: {
    id: 'roomList.actionUnMuteNotification',
    defaultMessage: 'UnMute Notification',
    description: 'Room List Screen',
  },
  roomListActionClearHistory: {
    id: 'roomList.actionClearHistory',
    defaultMessage: 'Clear History',
    description: 'Room List Screen',
  },
  roomListActionDeleteRoom: {
    id: 'roomList.actionDeleteRoom',
    defaultMessage: 'Delete Room',
    description: 'Room List Screen',
  },
  roomListActionLeaveRoom: {
    id: 'roomList.actionLeaveRoom',
    defaultMessage: 'Leave Room',
    description: 'Room List Screen',
  },
  roomListLastMessageTitle: {
    id: 'roomList.lastMessageTitle',
    defaultMessage: '{type, select, 1{Image Message} 3{Video Message} 5{Audio Message} 7{Voice Message} 8{Gif} 9{Attachment} 11{Location} 12{Log Message} 13{Contact} other{None Message}}',
    description: 'Room List Screen',
  },
  roomListFilterAll: {
    id: 'roomList.filterAll',
    defaultMessage: 'All',
    description: 'Room List Screen',
  },
  roomListFilterChat: {
    id: 'roomList.filterChat',
    defaultMessage: 'Chat',
    description: 'Room List Screen',
  },
  roomListFilterGroup: {
    id: 'roomList.filterGroup',
    defaultMessage: 'Group',
    description: 'Room List Screen',
  },
  roomListFilterChannel: {
    id: 'roomList.filterChannel',
    defaultMessage: 'Chanel',
    description: 'Room List Screen',
  },
  roomListFilterCall: {
    id: 'roomList.filterCall',
    defaultMessage: 'Call',
    description: 'Room List Screen',
  },
  nearbyScreenListTitle: {
    id: 'nearbyScreen.listTitle',
    defaultMessage: 'Nearby List',
    description: 'Nearby Screen',
  },
  nearbyScreenMapTitle: {
    id: 'nearbyScreen.mapTitle',
    defaultMessage: 'Nearby Map',
    description: 'Nearby Screen',
  },
  nearbyScreenRegisterNoties: {
    id: 'nearbyScreen.RegisterNoties',
    defaultMessage: 'Notice! activating map status will result in making your location visible to others. Please be sure about it before turning on.',
    description: 'Nearby Screen',
  },
  nearbyScreenLocationPermissionTitle: {
    id: 'nearbyScreen.locationPermissionTitle',
    defaultMessage: 'Location Permission',
    description: 'Deactivate Nearby page',
  },
  nearbyScreenLocationPermissionMessage: {
    id: 'nearbyScreen.locationPermissionMessage',
    defaultMessage: 'To find your location and view online people near you.',
    description: 'Deactivate Nearby page',
  },
  nearbyDeactivateAreYouSure: {
    id: 'nearbyDeactivate.areYouSure',
    defaultMessage: 'Are you sure ?',
    description: 'Deactivate Nearby page',
  },
  nearbyDeactivateMessage: {
    id: 'nearbyDeactivate.message',
    defaultMessage: 'This will prevent you to see nearby people',
    description: 'Deactivate Nearby page',
  },
  locationPickerToolbar: {
    id: 'locationPicker.toolbar',
    defaultMessage: 'Choose a Location',
    description: 'choseLocation Screen',
  },
  locationPickerHelp: {
    id: 'locationPicker.help',
    defaultMessage: 'Hold and Drag Marker to select another location',
    description: 'choseLocation Screen',
  },
  locationPickerSendLocation: {
    id: 'locationPicker.sendLocation',
    defaultMessage: 'Send Location',
    description: 'choseLocation Screen',
  },
  roomStatusLabelMember: {
    id: 'roomStatusLabel.member',
    defaultMessage: '{member, select,0{nun Member} 1{one Member} other{{memberLabel} Members}}',
    description: 'roomStatusLabelMember',
  },
  roomStatusLabelStatus: {
    id: 'roomStatusLabel.status',
    defaultMessage: '{status, select,1{Last Month} 2{Last Week} 3{Online} 5{Recently} 6{Support} 7{Service Notification} other{Long time ago}}',
    description: 'roomStatusLabelMember',
  },
  roomPickerTitle: {
    id: 'roomPicker.title',
    defaultMessage: 'Select a Chat',
    description: 'RoomPicker Screen',
  },
  sendBoxDialogCameraTitle: {
    id: 'sendBox.dialogCameraTitle',
    defaultMessage: 'Select camera action',
    description: 'sendBox Screen',
  },
  sendBoxCaptureImage: {
    id: 'sendBox.captureImage',
    defaultMessage: 'Capture image',
    description: 'sendBox Screen',
  },
  sendBoxCaptureVideo: {
    id: 'sendBox.captureVideo',
    defaultMessage: 'Capture video',
    description: 'sendBox Screen',
  },
};