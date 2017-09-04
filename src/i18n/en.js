import country from '../constants/country/en';

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

  registerToolbarTitle: {
    id: 'UserRegister.toolbarTitle',
    defaultMessage: 'UserRegister',
    description: 'UserRegister Page',
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
  registerInfoTitle: {
    id: 'UserRegister.infoTitle',
    defaultMessage: 'Hello world',
    description: 'UserRegister Page',
  },
  registerInfoContent: {
    id: 'UserRegister.infoContent',
    defaultMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
  registerDescription: {
    id: 'UserRegister.description',
    defaultMessage: 'Welcome Back',
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
    defaultMessage: 'We\'ve sent an {method, select,0{Sms} 1{iGap Message} 2{iGap Message and Sms}} with an activation code to your phone {phoneNumber}.',
    description: 'UserVerify Page',
  },
  verifyToolbarTitle: {
    id: 'UserVerify.toolbarTitle',
    defaultMessage: 'User Verify',
    description: 'UserVerify Page',
  },
  verifyInfoTitle: {
    id: 'UserVerify.infoTitle',
    defaultMessage: 'Hello world',
    description: 'UserVerify Page',
  },
  verifyInfoContent: {
    id: 'UserVerify.infoContent',
    defaultMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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

  twoStepVerificationInfoTitle: {
    id: 'twoStepVerification.infoTitle',
    defaultMessage: 'Hello world',
    description: 'twoStepVerification Page',
  },
  twoStepVerificationInfoContent: {
    id: 'twoStepVerification.infoContent',
    defaultMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
};