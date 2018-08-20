import country from '../constants/country/fa';
import apiErrors from '../constants/apiErrors/fa';

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
    defaultMessage: 'در حال بروز رسانی ...',
    description: 'Updating',
  },
  loading: {
    id: 'loading',
    defaultMessage: 'بارگذاری ...',
    description: 'loading',
  },
  shortMeter: {
    id: 'shortMeter',
    defaultMessage: '{distance} متر',
    description: 'Meter',
  },
  shortKilometer: {
    id: 'shortKilometer',
    defaultMessage: 'کیلومتر {distance}',
    description: 'Kilometer',
  },
  cancel: {
    id: 'cancel',
    defaultMessage: 'لغو',
    description: 'public',
  },

  ok: {
    id: 'ok',
    defaultMessage: 'تایید',
    description: 'All Pages',
  },
  dismiss: {
    id: 'dismiss',
    defaultMessage: 'انصراف',
    description: 'All Pages',
  },
  connectionStatusConnecting: {
    id: 'connectionStatus.connecting',
    defaultMessage: 'در حال برقراری ارتباط ...',
    description: 'All Pages',
  },
  connectionStatusSecuring: {
    id: 'connectionStatus.securing',
    defaultMessage: 'بررسی ارتباط امن ...',
    description: 'All Pages',
  },
  connectionStatusAuthenticating: {
    id: 'connectionStatus.authenticating',
    defaultMessage: 'تأیید اعتبار ...',
    description: 'All Pages',
  },
  introLogoTitle: {
    id: 'Intro.logoTitle',
    defaultMessage: 'پیام رسان آی گپ',
    description: 'Intro Page',
  },
  introLogoSubTitle: {
    id: 'Intro.logoSubTitle',
    defaultMessage: 'چرا من از آی گپ استفاده میکنم ؟ بزن بریم',
    description: 'Intro Page',
  },
  introSecurityTitle: {
    id: 'Intro.securityTitle',
    defaultMessage: 'امنیت و حریم خصوصی',
    description: 'Intro Page',
  },
  introSecuritySubTitle: {
    id: 'Intro.securitySubTitle',
    defaultMessage: 'آی گپ با استفاده از الگوریتم های رمزنگاری فردی به امنیت و حفظ حریم خصوصی خود اهمیت می دهد و ارتباط امن و ایمنی بین شما، دوستان و خانواده شما را تضمین می کند.',
    description: 'Intro Page',
  },
  introChatTitle: {
    id: 'Intro.chatTitle',
    defaultMessage: 'چت',
    description: 'Intro Page',
  },
  introChatSubTitle: {
    id: 'Intro.chatSubTitle',
    defaultMessage: 'شما می توانید چت های یک به یک یا گروه داشته باشید و حتی کانال خود را ایجاد کنید و اعضا را اضافه کنید تا اطلاعات را با میلیون ها نفر به اشتراک بگذارید.',
    description: 'Intro Page',
  },
  introCallTitle: {
    id: 'Intro.callTitle',
    defaultMessage: 'تماس رایگان',
    description: 'Intro Page',
  },
  introCallSubTitle: {
    id: 'Intro.callSubTitle',
    defaultMessage: 'شما می توانید تماس های صوتی / تصویری کاملا رایگان و مطمئن را با هر کسی که در آی گپ است برقرار کنید و پول خود را ذخیره کنید. تماس آی گپ مبتنی بر فرد به فرد است و بدون دخالت سرور در انتقال تماس می باشد .',
    description: 'Intro Page',
  },
  introLocationTitle: {
    id: 'Intro.locationTitle',
    defaultMessage: 'اطراف من',
    description: 'Intro Page',
  },
  introLocationSubTitle: {
    id: 'Intro.locationSubTitle',
    defaultMessage: 'شما قادر به تشخیص و کشف افراد نزدیک هستید، برای آشنایی بیشتر با آنها   چت کنید  و آشنا شوید.',
    description: 'Intro Page',
  },
  introTransferTitle: {
    id: 'Intro.transferTitle',
    defaultMessage: 'انتقال فایل',
    description: 'Intro Page',
  },
  introTransferSubTitle: {
    id: 'Intro.transferSubTitle',
    defaultMessage: 'شما مجاز به انتقال هر گونه فایل با هر اندازه و تایپ یا ذخیره آنها در ذخیره سازی ابر خود هستید؛ و سپس هر چیزی که میخواهید با هرکسی که میخواهید به اشتراک بگذارید.',
    description: 'Intro Page',
  },
  introFreeTitle: {
    id: 'Intro.freeTitle',
    defaultMessage: 'همه چیز در آی گپ رایگان است !',
    description: 'Intro Page',
  },
  introFreeSubTitle: {
    id: 'Intro.freeSubTitle',
    defaultMessage: 'همه چیز در آی گپ رایگان است و بیایید دنیای آی گپی خود را رایگان بسازید',
    description: 'Intro Page',
  },
  introBtnSkip: {
    id: 'Intro.btnSkip',
    defaultMessage: 'رد شدن',
    description: 'Intro Page',
  },
  introBtnStart: {
    id: 'Intro.btnStart',
    defaultMessage: 'شروع کنید',
    description: 'Intro Page',
  },


  registerCountryPlaceHolder: {
    id: 'UserRegister.countryPlaceHolder',
    defaultMessage: ' ...انتخاب کشور',
    description: 'UserRegister Page',
  },
  registerPhoneNumberTitle: {
    id: 'UserRegister.phoneNumberTitle',
    defaultMessage: 'شماره تلفن',
    description: 'UserRegister Page',
  },
  registerPhoneNumberPlaceHolder: {
    id: 'UserRegister.phoneNumberPlaceHolder',
    defaultMessage: 'شماره تلفن خود را وارد کنید',
    description: 'UserRegister Page',
  },
  registerPhoneNumberHelp: {
    id: 'UserRegister.phoneNumberHelp',
    defaultMessage: 'مثال : 9123456789(98+)',
    description: 'UserRegister Page',
  },
  registerSubmitBtnTitle: {
    id: 'UserRegister.submitBtnTitle',
    defaultMessage: 'ورود',
    description: 'UserRegister Page',
  },
  registerChangeLanguagePlaceholder: {
    id: 'UserRegister.changeLanguagePlaceholder',
    defaultMessage: 'انتخاب زبان',
    description: 'UserRegister Page',
  },
  registerChangeLanguageTitle: {
    id: 'UserRegister.changeLanguageTitle',
    defaultMessage: 'انتخاب زبان',
    description: 'UserRegister Page',
  },
  registerPrivacyBtnTitle: {
    id: 'UserRegister.privacyBtnTitle',
    defaultMessage: 'حریم خصوصی و سیاست',
    description: 'UserRegister Page',
  },
  registerTermsOfService: {
    id: 'register.TermsOfService',
    defaultMessage: 'شرایط استفاده از خدمات',
    description: 'UserRegister Page',
  },
  registerLoginDivider: {
    id: 'UserRegister.loginDivider',
    defaultMessage: 'یا',
    description: 'UserRegister Page',
  },
  registerQrCodeLoginBtn: {
    id: 'UserRegister.qrCodeLoginBtn',
    defaultMessage: 'با کد QR وارد شوید',
    description: 'UserRegister Page',
  },
  QrCodeLoginGoLoginScreenBtn: {
    id: 'QrCodeLogin.goLoginScreenBtn',
    defaultMessage: 'با شماره تلفن وارد شوید',
    description: 'QrCode Login Page',
  },
  QrCodeLoginHelp: {
    id: 'QrCodeLogin.help',
    defaultMessage: 'از این QR برای ورود به برنامه آی گپ استفاده کنید .',
    description: 'QrCode Login Page',
  },
  QrCodeLoginHelpJoin: {
    id: 'QrCodeLogin.helpJoin',
    defaultMessage: 'برای پیوستن به صفحه مربوطه این QR را با استفاده از QR اسکنر آیگپ پیمایش نمایید. ',
    description: 'QrCode Login Page',
  },
  errorRequired: {
    id: 'Error.required',
    defaultMessage: '{field} فیلد مورد نیاز است',
    description: 'error',
  },
  errorTypeNumber: {
    id: 'Error.typeNumber',
    defaultMessage: '{field} باید شامل شماره باشد',
    description: 'error',
  },
  errorNumberSmallMin: {
    id: 'Error.numberSmallMin',
    defaultMessage: 'فیلد {field}  باید حداقل {min}  حرف باشد.',
    description: 'error',
  },
  errorNumberBigMax: {
    id: 'Error.numberBigMax',
    defaultMessage: 'فیلد {field}  باید حداکثر {max}  حرف باشد.',
    description: 'error',
  },
  errorTypeString: {
    id: 'Error.typeString',
    defaultMessage: '{field} باید شامل حروف باشد',
    description: 'error',
  },
  errorStringLengthMin: {
    id: 'Error.stringLengthMin',
    defaultMessage: 'فیلد {field}  باید حداقل {min}  حرف باشد.',
    description: 'error',
  },
  errorStringLengthMax: {
    id: 'Error.stringLengthMax',
    defaultMessage: 'فیلد {field}  باید حداکثر {max}  حرف باشد.',
    description: 'error',
  },
  errorRegexInvalid: {
    id: 'Error.regexInvalid',
    defaultMessage: '{field}  نا معتبر است',
    description: 'error',
  },
  verifySmsPermissionTitle: {
    id: 'UserVerify.receiveSms',
    defaultMessage: 'دریافت اس ام اس',
    description: 'UserVerify Page',
  },
  verifySmsPermissionContent: {
    id: 'UserVerify.fillAutomaticallyReceivedCodeNeedSmsPermission',
    defaultMessage: 'برای دریافت  اس ام اس به صورت خودکارنیاز به مجوز اس ام اس است.',
    description: 'UserVerify Page',
  },
  verifyTitle: {
    id: 'UserVerify.title',
    defaultMessage: 'شماره تلفن را تأیید کنید',
    description: 'UserVerify Page',
  },
  verifySubTitle: {
    id: 'UserVerify.subTitle',
    defaultMessage: 'ما یک کد تایید توسط {method, select,0{اس ام اس} 1{پیام آی گپ} 2{اس ام اس و پیام آی گپ}}  به شماره {phoneNumber} فرستادیم',
    description: 'UserVerify Page',
  },
  verifyCodeTitle: {
    id: 'UserVerify.codeTitle',
    defaultMessage: 'کد',
    description: 'UserVerify Page',
  },
  verifyCodePlaceholder: {
    id: 'UserVerify.codePlaceholder',
    defaultMessage: 'کد تایید.',
    description: 'UserVerify Page',
  },
  verifyResendCodeTimer: {
    id: 'UserVerify.resendCodeTimer',
    defaultMessage: 'دریافت کد پس از {time} ثانیه.',
    description: 'UserVerify Page',
  },

  verifyResendCodeBtnTitle: {
    id: 'UserVerify.resendCodeBtnTitle',
    defaultMessage: 'ارسال مجدد ',
    description: 'UserVerify Page',
  },
  verifyCodeBtnTitle: {
    id: 'UserVerify.verifyCodeBtnTitle',
    defaultMessage: 'کد تایید.',
    description: 'UserVerify Page',
  },
  verifyCodeInvalidError: {
    id: 'UserVerify.verifyCodeInvalidError',
    defaultMessage: 'کد تأیید نامعتبر است.',
    description: 'UserVerify Page',
  },

  spinnerDefaultTitle: {
    id: 'spinner.defaultTitle',
    defaultMessage: 'لطفا صبر کنید ...',
    description: 'Spinner component',
  },

  twoStepVerificationTitle: {
    id: 'twoStepVerification.toolbarTitle',
    defaultMessage: 'تأیید  دو مرحله ',
    description: 'twoStepVerification Page',
  },
  twoStepVerificationHintTitle: {
    id: 'twoStepVerification.hintTitle',
    defaultMessage: 'حرف راهنما : "{hint}"',
    description: 'twoStepVerification Page',
  },
  twoStepVerificationPasswordLabel: {
    id: 'twoStepVerification.passwordLabel',
    defaultMessage: 'کلمه عبور',
    description: 'twoStepVerification Page',
  },
  twoStepVerificationBtnTitle: {
    id: 'twoStepVerification.btnTitle',
    defaultMessage: 'ارسال',
    description: 'twoStepVerification Page',
  },
  twoStepVerificationForgetBtnTitle: {
    id: 'twoStepVerification.forgetBtnTitle',
    defaultMessage: 'فراموشی رمز عبور؟',
    description: 'twoStepVerification Page',
  },

  twoStepSettingTitle: {
    id: 'twoStepSetting.title',
    defaultMessage: 'تأیید  دو مرحله',
    description: 'two-step setting',
  },
  twoStepSettingSetAdditionalPasswordBtn: {
    id: 'twoStepSetting.setAdditionalPasswordBtn',
    defaultMessage: 'تنظیم رمز اضافی',
    description: 'two-step setting',
  },
  twoStepSettingSetAdditionalPasswordHelp: {
    id: 'twoStepSetting.setAdditionalPasswordHelp',
    defaultMessage: 'شما می توانید یک رمز عبور را تنظیم کنید که در هنگام ورود به یک دستگاه جدید علاوه بر کدی که در اس ام اس دریافت می کنید، لازم است.',
    description: 'two-step setting',
  },
  twoStepSetPasswordTitle: {
    id: 'twoStepSetPassword.title',
    defaultMessage: 'رمز عبور شما',
    description: 'two-step setting',
  },
  twoStepSetPasswordPasswordLabel: {
    id: 'twoStepSetPassword.passwordLabel',
    defaultMessage: 'رمز عبور را وارد کنید',
    description: 'two-step setting',
  },
  twoStepSetPasswordPasswordHint: {
    id: 'twoStepSetPassword.passwordHint',
    defaultMessage: 'رمز عبور',
    description: 'two-step setting',
  },
  twoStepSetPasswordConfirmPasswordLabel: {
    id: 'twoStepSetPassword.confirmPasswordLabel',
    defaultMessage: 'تأیید رمز عبور را وارد کنید',
    description: 'two-step setting',
  },
  twoStepSetPasswordConfirmPasswordNotMatch: {
    id: 'twoStepSetPassword.confirmPasswordNotMatch',
    defaultMessage: 'تأیید رمز عبور اشتباه است',
    description: 'two-step setting',
  },
  twoStepSetPasswordConfirmPasswordHint: {
    id: 'twoStepSetPassword.confirmPasswordHint',
    defaultMessage: 'تأیید رمز عبور',
    description: 'two-step setting',
  },
  twoStepSetPasswordHintLabel: {
    id: 'twoStepSetPassword.hintLabel',
    defaultMessage: 'راهنما',
    description: 'two-step setting',
  },
  twoStepSetPasswordVerifyEmailTitle: {
    id: 'twoStepSetPasswordVerifyEmail.title',
    defaultMessage: 'تأیید  پست الکترونیک',
    description: 'two-step setting',
  },
  twoStepSetPasswordVerifyEmailTokenLabel: {
    id: 'twoStepVerifyEmail.tokenLabel',
    defaultMessage: 'تأیید کد توکن',
    description: 'two-step setting',
  },
  twoStepSetPasswordVerifyEmailRecentCode: {
    id: 'twoStepVerifyEmail.recentCode',
    defaultMessage: 'ارسال مجدد توکن',
    description: 'two-step setting',
  },

  twoStepChangeEmailTitle: {
    id: 'twoStepChangeEmail.title',
    defaultMessage: 'تغییر  پست الکترونیک',
    description: 'two-step setting',
  },

  twoStepChangeHintTitle: {
    id: 'twoStepChangeHint.title',
    defaultMessage: 'تغییر کلمه راهنما',
    description: 'two-step setting',
  },
  twoStepChangeRecoveryQuestionTitle: {
    id: 'twoStepChangeRecoveryQuestion.title',
    defaultMessage: 'تغییر پرسش برای بازیابی',
    description: 'two-step setting',
  },
  twoStepVerifyEmailTitle: {
    id: 'twoStepVerifyEmail.title',
    defaultMessage: 'تأیید  پست الکترونیک بازیابی',
    description: 'two-step setting',
  },

  twoStepSetPasswordQuestionOneLabel: {
    id: 'twoStepSetPassword.questionOneLabel',
    defaultMessage: 'سوال اول',
    description: 'two-step setting',
  },
  twoStepSetPasswordAnswerOneLabel: {
    id: 'twoStepSetPassword.answerOneLabel',
    defaultMessage: 'پاسخ اول',
    description: 'two-step setting',
  },
  twoStepSetPasswordQuestionTwoLabel: {
    id: 'twoStepSetPassword.questionTwoLabel',
    defaultMessage: 'سوال دوم',
    description: 'two-step setting',
  },
  twoStepSetPasswordAnswerTwoLabel: {
    id: 'twoStepSetPassword.answerTwoLabel',
    defaultMessage: 'پاسخ دوم',
    description: 'two-step setting',
  },
  twoStepSetPasswordEmailLabel: {
    id: 'twoStepSetPassword.emailLabel',
    defaultMessage: 'پست الکترونیک',
    description: 'two-step setting',
  },

  twoStepSettingChangePasswordBtn: {
    id: 'twoStepSetting.changePasswordBtn',
    defaultMessage: 'تغییر رمز عبور',
    description: 'two-step setting',
  },
  twoStepSettingChangeEmailBtn: {
    id: 'twoStepSetting.changeEmailBtn',
    defaultMessage: 'تغییر پست الکترونیک',
    description: 'two-step setting',
  },
  twoStepSettingChangeHintBtn: {
    id: 'twoStepSetting.changeHintBtn',
    defaultMessage: 'تغییر کلمه راهنما',
    description: 'two-step setting',
  },
  twoStepSettingChangeRecoveryQuestionsBtn: {
    id: 'twoStepSetting.changeRecoveryQuestionsBtn',
    defaultMessage: 'تغییر سوالات بازیابی',
    description: 'two-step setting',
  },
  twoStepSettingVerifyEmailBtn: {
    id: 'twoStepSetting.verifyEmailBtn',
    defaultMessage: 'تأیید پست الکترونیک',
    description: 'two-step setting',
  },
  twoStepSettingDeleteTwoStepBtn: {
    id: 'twoStepSetting.deleteTwoStepBtn',
    defaultMessage: 'حذف تأیید دو مرحله ای',
    description: 'two-step setting',
  },
  twoStepSettingSettingHelp: {
    id: 'twoStepSetting.settingHelp',
    defaultMessage: 'حذف تأیید دو مرحله ای',
    description: 'two-step setting',
  },
  twoStepSettingSettingUnsetPassowrdTitle: {
    id: 'twoStepSetting.unsetPassowrdTitle',
    defaultMessage: 'حذف تأیید دو مرحله ای',
    description: 'two-step setting',
  },
  twoStepSettingSettingUnsetPassowrdDescription: {
    id: 'twoStepSetting.unsetPassowrdDescription',
    defaultMessage: 'ایا مطمئن هستید که میخواهید تأیید دو مرحله ای را حذف کنید؟',
    description: 'two-step setting',
  },


  twoStepForgetTitle: {
    id: 'twoStepForget.toolbarTitle',
    defaultMessage: 'بازیابی رمز عبور از طریق:',
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
    defaultMessage: 'بازیابی کد توسط  پست الکترونیک',
    description: 'forget Page',
  },
  twoStepForgetRecoveryByQuestionBtn: {
    id: 'twoStepForget.recoveryByQuestionBtn',
    defaultMessage: 'بازیابی با سوال',
    description: 'forget Page',
  },
  twoStepRecoveryByQuestionTitle: {
    id: 'twoStepRecoveryByQuestion.title',
    defaultMessage: 'رمز عبور بازیابی',
    description: 'RecoveryByQuestion Page',
  },
  twoStepRecoveryByQuestionQuestionOne: {
    id: 'twoStepRecoveryByQuestion.questionOne',
    defaultMessage: 'سوال اول :',
    description: 'RecoveryByQuestion Page',
  },
  twoStepRecoveryByQuestionQuestionTwo: {
    id: 'twoStepRecoveryByQuestion.questioTwo',
    defaultMessage: 'سوال دوم : ',
    description: 'RecoveryByQuestion Page',
  },
  twoStepRecoveryByQuestionAnswerOnePlaceholder: {
    id: 'twoStepRecoveryByQuestion.answerOnePlaceholder',
    defaultMessage: 'پاسخ اول',
    description: 'RecoveryByQuestion Page',
  },
  twoStepRecoveryByQuestionAnswerTwoPlaceholder: {
    id: 'twoStepRecoveryByQuestion.answerTwoPlaceholder',
    defaultMessage: 'پاسخ دوم',
    description: 'RecoveryByQuestion Page',
  },
  twoStepRecoveryByQuestionSubmitFormBtnTitle: {
    id: 'twoStepRecoveryByQuestion.submitFormBtnTitle',
    defaultMessage: 'بازیابی',
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
    defaultMessage: 'بازیافت توسط  پست الکترونیک',
    description: 'twoStepVerification Page',
  },
  twoStepRecoveryByEmailTokenLabel: {
    id: 'twoStepRecoveryByEmail.tokenLabel',
    defaultMessage: 'بازبابی کد توکن',
    description: 'twoStepVerification Page',
  },
  twoStepRecoveryByEmailTokenHelp: {
    id: 'twoStepRecoveryByEmail.tokenHelp',
    defaultMessage: 'ارسال کد بازیابی به {email}.',
    description: 'twoStepVerification Page',
  },
  twoStepRecoveryByEmailSubmitFormBtnTitle: {
    id: 'twoStepRecoveryByEmail.submitFormBtnTitle',
    defaultMessage: 'بازیابی',
    description: 'twoStepVerification Page',
  },
  twoStepRecoveryByEmailResendBtnTitle: {
    id: 'twoStepRecoveryByEmail.resendBtnTitle',
    defaultMessage: 'ارسال مجدد کد توکن',
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
    defaultMessage: 'نمایه جدید',
    description: 'New Profile Page',
  },
  newProfileBtnTitle: {
    id: 'newProfile.btnTitle',
    defaultMessage: 'ارسال',
    description: 'New Profile Page',
  },
  newProfileNicknameLabel: {
    id: 'newProfile.nicknameLabel',
    defaultMessage: 'نام مستعار',
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
    defaultMessage: 'لیست مخاطبین',
    description: 'Contact List Screen',
  },
  contactFormTitleToolbar: {
    id: 'contactForm.titleToolbar',
    defaultMessage: 'مخاطب جدید',
    description: 'Contact New Screen',
  },
  contactFormFirstNameLabel: {
    id: 'contactForm.firstNameLabel',
    defaultMessage: 'نام کوچک',
    description: 'Contact New Screen',
  },
  contactFormLastNameLabel: {
    id: 'contactForm.lastNameLabel',
    defaultMessage: 'نام خانوادگی',
    description: 'Contact New Screen',
  },
  contactFormPhoneLabel: {
    id: 'contactForm.phoneLabel',
    defaultMessage: 'شماره تلفن',
    description: 'Contact New Screen',
  },
  contactFormPhoneHelp: {
    id: 'contactForm.phoneHelp',
    defaultMessage: 'مثال : 9123456789(98+)',
    description: 'Contact New Screen',
  },

  userProfileChat: {
    id: 'userProfile.chat',
    defaultMessage: 'چت',
    description: 'page user profile',
  },
  userProfileUserName: {
    id: 'userProfile.username',
    defaultMessage: 'نام کاربری : ',
    description: 'page user profile',
  },
  userProfilePhoneNumber: {
    id: 'userProfile.phonenumber',
    defaultMessage: 'شماره تلفن : ',
    description: 'page user profile',
  },
  userProfileBlock: {
    id: 'userProfile.block',
    defaultMessage: 'مسدود کردن',
    description: 'page user profile',
  },
  userProfileClearHistory: {
    id: 'userProfile.clearhistory',
    defaultMessage: 'پاک کردن تاریخچه',
    description: 'page user profile',
  },
  userProfileConvertToGroup: {
    id: 'userProfile.userprofileconverttogroup',
    defaultMessage: 'تبدیل به گروه',
    description: 'page user profile',
  },
  userProfileIgapBalance: {
    id: 'userProfile.igapBalance',
    defaultMessage: 'موجودی آی گپ',
    description: 'page user profile',
  },
  userProfileDetailLabel: {
    id: 'userProfile.detailLabel',
    defaultMessage: 'جزئیات',
    description: 'page user profile',
  },
  userProfileAvailableBalance: {
    id: 'userProfile.availableBalance',
    defaultMessage: 'موجودی الان ',
    description: 'page user profile',
  },

  editProfileName: {
    id: 'editProfile.name',
    defaultMessage: 'نام',
    description: 'EditProfile Page',
  },
  editProfileUserName: {
    id: 'editProfile.userName',
    defaultMessage: 'نام کاربری',
    description: 'EditProfile Page',
  },
  editProfilePhoneNumber: {
    id: 'editProfile.phoneNumber',
    defaultMessage: 'شماره تلفن',
    description: 'EditProfile Page',
  },
  editProfileBio: {
    id: 'editProfile.bio',
    defaultMessage: 'تاریخچه شخصی',
    description: 'EditProfile Page',
  },
  editProfilePrivateInformation: {
    id: 'editProfile.privateInformation',
    defaultMessage: 'اطلاعات شخصی',
    description: 'EditProfile Page',
  },
  editProfileEmail: {
    id: 'editProfile.email',
    defaultMessage: 'پست الکترونیک',
    description: 'EditProfile Page',
  },
  editProfileMale: {
    id: 'editProfile.male',
    defaultMessage: 'مرد',
    description: 'EditProfile Page',
  },
  editProfileFemale: {
    id: 'editProfile.female',
    defaultMessage: 'زن',
    description: 'EditProfile Page',
  },
  editProfileNotSpecified: {
    id: 'editProfile.notSpecified',
    defaultMessage: 'مشخص نشده',
    description: 'EditProfile Page',
  },
  editProfileGender: {
    id: 'editProfile.gender',
    defaultMessage: 'جنسيت',
    description: 'EditProfile Page',
  },
  editProfileEditProfile: {
    id: 'editProfile.ditProfile',
    defaultMessage: 'ویرایش مشخصات',
    description: 'EditProfile Page',
  },
  editProfileChangePhoto: {
    id: 'editProfile.changePhoto',
    defaultMessage: 'تعویض عکس',
    description: 'EditProfile Page',
  },

  editProfileCheckUsernameInvalid: {
    id: 'editProfile.checkUsernameInvalid',
    defaultMessage: 'نام کاربری نامعتبر است',
    description: 'EditProfile Page',
  },
  editProfileCheckUsernameTaken: {
    id: 'editProfile.checkUsernameTaken',
    defaultMessage: 'نام کاربری گرفته شده است',
    description: 'EditProfile Page',
  },

  roomInfoMember: {
    id: 'roomInfo.member',
    defaultMessage: 'عضو',
    description: 'RoomInfo screen',
  },
  roomInfoUsername: {
    id: 'roomInfo.username',
    defaultMessage: 'نام کاربری',
    description: 'RoomInfo screen',
  },
  roomInfoPhone: {
    id: 'roomInfo.phone',
    defaultMessage: 'شماره تلفن',
    description: 'RoomInfo screen',
  },
  roomInfoMuteNotifications: {
    id: 'roomInfo.mute.notifications',
    defaultMessage: 'بی صداکردن اعلانها',
    description: 'RoomInfo screen',
  },
  roomInfoSharedMedia: {
    id: 'roomInfo.shared.media',
    defaultMessage: 'رسانه به اشتراک گذاشته شده',
    description: 'RoomInfo screen',
  },
  roomInfoSharedImages: {
    id: 'roomInfo.shared.images',
    defaultMessage: 'تصاویر',
    description: 'RoomInfo screen',
  },
  roomInfoSharedVideos: {
    id: 'roomInfo.videos',
    defaultMessage: 'فیلم ها',
    description: 'RoomInfo screen',
  },
  roomInfoSharedAudios: {
    id: 'roomInfo.audios',
    defaultMessage: 'شنیداری',
    description: 'RoomInfo screen',
  },
  roomInfoSharedVoices: {
    id: 'roomInfo.voices',
    defaultMessage: 'صداها',
    description: 'RoomInfo screen',
  },
  roomInfoSharedFiles: {
    id: 'roomInfo.files',
    defaultMessage: 'فایل ها',
    description: 'RoomInfo screen',
  },
  roomInfoSharedLinks: {
    id: 'roomInfo.links',
    defaultMessage: 'لینک ها',
    description: 'RoomInfo screen',
  },
  newNewGroup: {
    id: 'new.newGroup',
    defaultMessage: 'گروه جدید',
    description: 'new Screen',
  },
  newPlus: {
    id: 'new.plus',
    defaultMessage: 'Plus',
    description: 'صفحه جدید',
  },
  newNewChannel: {
    id: 'new.newChannel',
    defaultMessage: 'کانال جدید',
    description: 'new Screen',
  },
  newNewSecretP2PChat: {
    id: 'new.newSecretP2PChat',
    defaultMessage: 'شروع جت ایمن فرد به فرد',
    description: 'new Screen',
  },
  newNewCreateInvoice: {
    id: 'new.newCreateInvoice',
    defaultMessage: 'ایجاد صورتحساب جدید',
    description: 'new Screen',
  },
  newMyCloud: {
    id: 'new.myCloud',
    defaultMessage: 'فضای ابری من',
    description: 'new Screen',
  },
  newContacts: {
    id: 'new.contacts',
    defaultMessage: 'مخاطبین',
    description: 'new Screen',
  },
  newSearch: {
    id: 'new.search',
    defaultMessage: 'جستجو',
    description: 'new Screen',
  },
  newGlobal: {
    id: 'new.global',
    defaultMessage: 'عمومی',
    description: 'new Screen',
  },
  newAddContacts: {
    id: 'new.addContacts',
    defaultMessage: 'افزودن شماره',
    description: 'new Screen',
  },
  roomCreateToolbarTitle: {
    id: 'roomCreate.toolbarTitle',
    defaultMessage: 'صفحه جدید',
    description: 'room Create screen',
  },
  roomCreateFieldName: {
    id: 'roomGroupCreate.fieldName',
    defaultMessage: 'نام',
    description: 'room Create screen',
  },
  roomCreateFieldDescription: {
    id: 'roomCreate.fieldDescription',
    defaultMessage: 'توضیحات',
    description: 'room Create screen',
  },
  roomChannelCreateNewChannel: {
    id: 'roomChannelCreate.newChannel',
    defaultMessage: 'کانال جدید',
    description: 'room Channel Create screen',
  },
  roomChannelCreateChannelName: {
    id: 'roomChannelCreate.channelName',
    defaultMessage: 'نام کانال',
    description: 'room Channel Create screen',
  },
  roomChannelCreateChannelDescription: {
    id: 'roomChannelCreate.channelDescription',
    defaultMessage: 'توضیحات کانال',
    description: 'room Channel Create screen',
  },
  callMute: {
    id: 'call.mute',
    defaultMessage: 'بی صدا',
    description: 'call screen',
  },
  callSpeaker: {
    id: 'call.speaker.',
    defaultMessage: 'بلندگو',
    description: 'call screen',
  },
  callSendMessage: {
    id: 'call.sendMessage',
    defaultMessage: 'فرستادن پیام',
    description: 'call screen',
  },
  callKeyPad: {
    id: 'call.keyPad',
    defaultMessage: 'صفحه کلید',
    description: 'call screen',
  },
  calliGapCall: {
    id: 'call.iGapCall',
    defaultMessage: 'تماس آی گپ',
    description: 'call screen',
  },
  callInCall: {
    id: 'call.inCall',
    defaultMessage: 'تماس ورودی',
    description: 'call screen',
  },
  callOutCall: {
    id: 'call.outCall',
    defaultMessage: 'تماس خروجی',
    description: 'call screen',
  },
  callDisconnected: {
    id: 'call.disconnected',
    defaultMessage: 'قطع شده',
    description: 'call screen',
  },
  callCalling: {
    id: 'call.calling',
    defaultMessage: 'در حال تماس',
    description: 'call screen',
  },
  callRinging: {
    id: 'call.ringing',
    defaultMessage: 'زنگ زدن',
    description: 'call screen',
  },
  callConnecting: {
    id: 'call.connecting',
    defaultMessage: 'برقراری ارتباط',
    description: 'call screen',
  },
  callConnected: {
    id: 'call.connected',
    defaultMessage: 'متصل',
    description: 'call screen',
  },
  callRejected: {
    id: 'call.rejected',
    defaultMessage: 'رد شد',
    description: 'call screen',
  },
  callNotAnswered: {
    id: 'call.notAnswered',
    defaultMessage: 'جواب نداد',
    description: 'call screen',
  },
  callUnavailable: {
    id: 'call.unavailable',
    defaultMessage: 'در دسترس نیست',
    description: 'call screen',
  },
  callBusy: {
    id: 'call.Busy',
    defaultMessage: 'مشغول',
    description: 'call screen',
  },
  callTitlePermission: {
    id: 'call.titleVoicePermission',
    defaultMessage: '{callDirect , select ,true{ورودی} false{خروجی} }{callType,select ,0{صوتی} 1{تصویری} }تماس ',
    description: 'call screen',
  },
  callContentVoicePermission: {
    id: 'call.contentVoicePermission',
    defaultMessage: 'تماس نیاز به مجوز دریافت صدا دارد',
    description: 'call screen',
  },
  callContentVideoPermission: {
    id: 'call.contentVideoPermission',
    defaultMessage: 'تماس نیاز به مجوز دریافت تصویر دارد',
    description: 'call screen',
  },
  callReturnToCall: {
    id: 'call.returnToCall',
    defaultMessage: 'برگشت به صفحه تماس',
    description: 'call screen',
  },
  callListRecentCall: {
    id: 'callList.recentCall',
    defaultMessage: 'تماس های اخیر',
    description: 'callList screen',
  },
  callListClearCallHistory: {
    id: 'callList.clearCallHistory',
    defaultMessage: 'پاک کردن تاریخچه تماس',
    description: 'callList screen',
  },
  groupCreateSelectContactTitle: {
    id: 'groupCreate.selectContactTitle',
    defaultMessage: 'گروه جدید با ...',
    description: 'contact picker screen',
  },
  groupCheckUsernameInvalid: {
    id: 'group.checkUsernameInvalid',
    defaultMessage: 'نام کاربری نامعتبر است',
    description: 'Room Update Username Screen',
  },
  groupCheckUsernameTaken: {
    id: 'group.checkUsernameTaken',
    defaultMessage: 'نام کاربری گرفته شده',
    description: 'Room Update Username Screen',
  },
  channelCheckUsernameInvalid: {
    id: 'channel.checkUsernameInvalid',
    defaultMessage: 'نام کاربری نامعتبر است',
    description: 'Room Update Username Screen',
  },
  channelCheckUsernameTaken: {
    id: 'channel.checkUsernameTaken',
    defaultMessage: 'نام کاربری گرفته شده',
    description: 'Room Update Username Screen',
  },
  roomUpdateUsernameRadioBtnPublic: {
    id: 'roomUpdateUsername.radioBtnPublic',
    defaultMessage: 'عمومی',
    description: 'Room Update Username Screen',
  },
  roomUpdateUsernameRadioBtnPrivate: {
    id: 'roomUpdateUsername.radioBtnPrivate',
    defaultMessage: 'خصوصی',
    description: 'Room Update Username Screen',
  },
  roomUpdateUsernameToolbarTitle: {
    id: 'roomUpdateUsername.toolbarTitle',
    defaultMessage: 'تغییر نوع صفحه',
    description: 'Room Update Username Screen',
  },
  roomUpdateUsernameTitle: {
    id: 'roomUpdateUsername.title',
    defaultMessage: 'نام کاربری',
    description: 'Room Update Username Screen',
  },
  roomUpdateUsernameDescription: {
    id: 'roomUpdateUsername.description',
    defaultMessage: 'فراد با جستجوی این نام کاربری میتوانند به صفحه شما بپیوندند. شما می توانید از a-z، 0-9 و زیر خط استفاده کنید. حداقل طول نام کاربری باید 5 کاراکتر باشد.',
    description: 'Room Update Username Screen',
  },
  roomUpdateUsernameInviteLinkLabel: {
    id: 'roomUpdateUsername.inviteLinkLabel',
    defaultMessage: 'لینک دعوت',
    description: 'Room Update Username Screen',
  },
  roomUpdateUsernameRevokeLinkBtn: {
    id: 'roomUpdateUsername.revokeLinkBtn',
    defaultMessage: 'ابطال پیوند',
    description: 'Room Update Username Screen',
  },

  channelCreateSelectContactTitle: {
    id: 'channelCreate.selectContactTitle',
    defaultMessage: 'کانال جدید با ...',
    description: 'contact picker screen',
  },
  roomEditToolbarTitle: {
    id: 'roomEdit.toolbarTitle',
    defaultMessage: 'ویرایش صفحه',
    description: 'room Edit screen',
  },
  roomEditChangePhoto: {
    id: 'roomEdit.changePhoto',
    defaultMessage: 'تغییر تصویر',
    description: 'room Edit screen',
  },
  roomInfoChatSendMessageBtn: {
    id: 'roomInfo.chatSendMessageBtn',
    defaultMessage: 'پیام',
    description: 'room Info screen',
  },
  roomInfoChatCallBtn: {
    id: 'roomInfo.chatCallBtn',
    defaultMessage: 'تماس',
    description: 'room Info screen',
  },
  roomInfoLeaveRoomBtn: {
    id: 'roomInfo.leaveRoomBtn',
    defaultMessage: 'ترک کردن',
    description: 'room Info screen',
  },
  roomInfoJoinRoomBtn: {
    id: 'roomInfo.joinRoomBtn',
    defaultMessage: 'پیوستن',
    description: 'room Info screen',
  },
  roomInfoEditRoomBtn: {
    id: 'roomInfo.editRoomBtn',
    defaultMessage: 'ویرایش',
    description: 'room Info screen',
  },
  roomInfoAddMember: {
    id: 'roomInfo.addMember',
    defaultMessage: 'اضافه کردن عضو',
    description: 'room Info screen',
  },
  roomInfoMemberList: {
    id: 'roomInfo.memberList',
    defaultMessage: 'لیست اعضا',
    description: 'room Info screen',
  },
  roomInfoInviteLink: {
    id: 'roomInfo.InviteLink',
    defaultMessage: 'لینک دعوت',
    description: 'room Info screen',
  },
  roomInfoConvertType: {
    id: 'roomInfo.convertToPrivate',
    defaultMessage: 'تبدیل نوع صفحه',
    description: 'room Info screen',
  },
  roomInfoClearHistory: {
    id: 'roomInfo.clearHistory',
    defaultMessage: 'پاک کردن تاریخچه',
    description: 'room Info screen',
  },
  roomInfoDeleteRoom: {
    id: 'roomInfo.deleteRoom',
    defaultMessage: 'حذف صفحه',
    description: 'room Info screen',
  },
  roomInfoAddMemberToolbarTitle: {
    id: 'roomInfo.addMemberToolbartTitle',
    defaultMessage: 'اضافه کردن عضو',
    description: 'room Info screen',
  },
  roomInfoDeleteRoomConfirmTitle: {
    id: 'roomInfo.deleteRoomConfirmTitle',
    defaultMessage: 'حذف صفحه',
    description: 'room info screen',
  },
  roomInfoDeleteRoomConfirmDescription: {
    id: 'roomInfo.deleteRoomConfirmDescription',
    defaultMessage: 'آیا مطمئنید که میخواهید {roomTitle} حذف کنید ?',
    description: 'room info screen',
  },
  roomInfoClearHistoryConfirmTitle: {
    id: 'roomInfo.clearHistoryConfirmTitle',
    defaultMessage: 'پاک کردن تاریخچه',
    description: 'room info screen',
  },
  roomInfoClearHistoryConfirmDescription: {
    id: 'roomInfo.clearHistoryConfirmDescription',
    defaultMessage: 'آیا مطمئن هستید که می خواهید تاریخچه {roomTitle} پاک شود؟',
    description: 'room info screen',
  },
  roomInfoLeaveRomConfirmTitle: {
    id: 'roomInfo.leaveRoomConfirmTitle',
    defaultMessage: 'Leave Room',
    description: 'room info screen',
  },
  roomInfoLeaveRomConfirmDescription: {
    id: 'roomInfo.leaveRoomConfirmDescription',
    defaultMessage: 'آیا مطمئن هستید که می خواهید {roomTitle} ترک کنید؟',
    description: 'room info screen',
  },
  roomInfoShareContact: {
    id: 'roomInfo.shareContact',
    defaultMessage: 'اشتراک گذاری',
    description: 'room info screen',
  },
  roomInfoEditContact: {
    id: 'roomInfo.editContact',
    defaultMessage: 'ویرایش مخاطب',
    description: 'room info screen',
  },
  roomInfoBlockContact: {
    id: 'roomInfo.blockContact',
    defaultMessage: 'مسدود کردن مخاطب',
    description: 'room info screen',
  },
  roomInfoUnBlockContact: {
    id: 'roomInfo.unBlockContact',
    defaultMessage: 'رفع انسداد مخاطب',
    description: 'room info screen',
  },
  roomInfoDeleteContact: {
    id: 'roomInfo.deleteContact',
    defaultMessage: 'حذف تماس',
    description: 'room info screen',
  },
  roomInfoDeleteContactConfirmTitle: {
    id: 'roomInfo.deleteContactConfirmTitle',
    defaultMessage: 'حذف تماس',
    description: 'room info screen',
  },
  roomInfoDeleteContactConfirmDescription: {
    id: 'roomInfo.deleteContactConfirmDescription',
    defaultMessage: 'آیا مطمئن هستید که می خواهید این مخاطب را حذف کنید؟',
    description: 'room info screen',
  },
  roomInfoBlockContactConfirmTitle: {
    id: 'roomInfo.blockContactConfirmTitle',
    defaultMessage: 'مسدود کردن مخاطب',
    description: 'room info screen',
  },
  roomInfoBlockContactConfirmDescription: {
    id: 'roomInfo.blockContactConfirmDescription',
    defaultMessage: 'آیا مطمئن هستید که میخواهید این مخاطب را مسدود کنید؟',
    description: 'room info screen',
  },
  roomMemberListToolbarTitle: {
    id: 'roomMemberList.toolbarTitle',
    defaultMessage: 'لیست اعضا',
    description: 'room Member List screen',
  },
  roomMemberListKickAdmin: {
    id: 'roomMemberList.kickAdmin',
    defaultMessage: 'حذف مدیریت',
    description: 'room Member List screen',
  },
  roomMemberListAddAdmin: {
    id: 'roomMemberList.addAdmin',
    defaultMessage: 'تبدیل به مدیر',
    description: 'room Member List screen',
  },
  roomMemberListKickModerator: {
    id: 'roomMemberList.kickModerator',
    defaultMessage: 'حذف سردبیر',
    description: 'room Member List screen',
  },
  roomMemberListAddtModerator: {
    id: 'roomMemberList.addModerator',
    defaultMessage: 'تبدیل به سردبیر',
    description: 'room Member List screen',
  },
  roomMemberListKickMember: {
    id: 'roomMemberList.kickMember',
    defaultMessage: 'حذف عضو',
    description: 'room Member List screen',
  },
  roomInviteLinkToolbarTitle: {
    id: 'roomInviteLink.toolbarTitle',
    defaultMessage: 'لینک دعوت',
    description: 'Room Revoke Invite Link Screen',
  },
  roomInviteLinkInviteLinkLabel: {
    id: 'roomInviteLink.inviteLinkLabel',
    defaultMessage: 'لینک دعوت',
    description: 'Room Revoke Invite Link Screen',
  },
  roomInviteLinkRevokeLinkBtn: {
    id: 'roomInviteLink.revokeLinkBtn',
    defaultMessage: 'لغو لینک',
    description: 'Room Revoke Invite Link Screen',
  },
  roomInviteLinkCopyClipboardBtn: {
    id: 'roomInviteLink.copyClipboardBtn',
    defaultMessage: 'کپی کردن لینک',
    description: 'Room Revoke Invite Link Screen',
  },
  roomHistoryUnreadMessageLabel: {
    id: 'roomHistory.unreadMessageLabel',
    defaultMessage: 'پیام های خوانده نشده',
    description: 'roomHistory screen',
  },
  roomHistorySendBoxCamera: {
    id: 'roomHistory.sendBox.camera',
    defaultMessage: 'دوربین',
    description: 'roomHistory sendBox screen',
  },
  roomHistorySendBoxImage: {
    id: 'roomHistory.sendBox.image',
    defaultMessage: 'تصویر',
    description: 'roomHistory sendBox screen',
  },
  roomHistorySendBoxVideo: {
    id: 'roomHistory.sendBox.video',
    defaultMessage: 'فیلم',
    description: 'roomHistory sendBox  screen',
  },
  roomHistorySendBoxMusic: {
    id: 'roomHistory.sendBox.music',
    defaultMessage: 'موزیک',
    description: 'roomHistory sendBox screen',
  },
  roomHistorySendBoxFile: {
    id: 'roomHistory.sendBox.file',
    defaultMessage: 'فایل',
    description: 'roomHistory sendBox screen',
  },
  roomHistorySendBoxContact: {
    id: 'roomHistory.sendBox.contact',
    defaultMessage: 'مخاطب',
    description: 'roomHistory SendBox screen',
  },
  roomHistorySendBoxLocation: {
    id: 'roomHistory.sendBox.location',
    defaultMessage: 'موقعیت',
    description: 'roomHistory sendBox screen',
  },
  roomHistorySendBoxClose: {
    id: 'roomHistory.sendBox.close',
    defaultMessage: 'بستن',
    description: 'roomHistory sendBox screen',
  },
  roomHistorySendBoxReplyTo: {
    id: 'roomHistory.sendBox.replyTo',
    defaultMessage: 'پاسخ به',
    description: 'roomHistory sendBox screen',
  },
  roomHistorySendBoxForward: {
    id: 'roomHistory.sendBox.forward',
    defaultMessage: 'فرستادن',
    description: 'roomHistory sendBox screen',
  },
  roomHistoryMicrophonePermission: {
    id: 'roomHistory.microphone.permission',
    defaultMessage: 'اجازه میکروفون',
    description: 'roomHistory sendBox screen',
  },
  roomHistoryRecordSound: {
    id: 'roomHistory.record.sound ',
    defaultMessage: 'برای ضبط صدا مجوز میکروفون نیاز است',
    description: 'roomHistory sendBox screen',
  },
  roomHistoryCameraPermission: {
    id: 'roomHistory.camera.permission',
    defaultMessage: 'مجوز دوربین',
    description: 'roomHistory sendBox screen',
  },
  roomHistoryCameraPermissionMessage: {
    id: 'roomHistory.camera.permission.message',
    defaultMessage: 'تصویربرداری نیاز به اجازه دوربین دارد',
    description: 'roomHistory sendBox screen',
  },
  roomHistoryStoragePermission: {
    id: 'roomHistory.storage.permission',
    defaultMessage: 'اجازه ذخیره سازی',
    description: 'roomHistory sendBox screen',
  },
  roomHistoryStoragePermissionMessage: {
    id: 'roomHistory.Storage.permission.message',
    defaultMessage: 'دوربین نیاز به اجازه ذخیره سازی دارد',
    description: 'roomHistory sendBox screen',
  },
  roomHistoryDeleteMessagesTitle: {
    id: 'roomHistory.deleteMessagesTitle',
    defaultMessage: 'حذف پیام',
    description: 'roomHistory screen',
  },
  roomHistoryDeleteMessagesDescription: {
    id: 'roomHistory.deleteMessagesDescription',
    defaultMessage: 'آیا شما مطمئنا میخواهید {count} پیام را از {roomTitle} حذف کنید؟',
    description: 'roomHistory screen',
  },
  roomHistoryJoinBoxJoin: {
    id: 'roomHistory.joinBox.join',
    defaultMessage: 'پیوستن',
    description: 'roomHistory joinBox screen',
  },
  roomHistoryJoinBoxMute: {
    id: 'roomHistory.joinBox.mute',
    defaultMessage: 'بی صدا',
    description: 'roomHistory joinBox screen',
  },
  roomHistoryJoinBoxUnMute: {
    id: 'roomHistory.joinBox.unMute',
    defaultMessage: 'صدا دار',
    description: 'roomHistory joinBox screen',
  },
  roomHistoryActionTitle: {
    id: 'roomHistory.actionTitle',
    defaultMessage: 'پیام',
    description: 'roomHistory screen',
  },
  roomHistoryActionEdit: {
    id: 'roomHistory.actionEdit',
    defaultMessage: 'ویرایش',
    description: 'roomHistory screen',
  },
  roomHistoryActionContentCopy: {
    id: 'roomHistory.actionContentCopy',
    defaultMessage: 'کپی محتوا',
    description: 'roomHistory screen',
  },
  roomHistoryActionForward: {
    id: 'roomHistory.actionForward',
    defaultMessage: 'هدایت',
    description: 'roomHistory screen',
  },
  roomHistoryActionReply: {
    id: 'roomHistory.actionReply',
    defaultMessage: 'پاسخ',
    description: 'roomHistory screen',
  },
  roomHistoryActionSaveToDownload: {
    id: 'roomHistory.actionSaveToDownload',
    defaultMessage: 'ذخیره در پوشه دانلود',
    description: 'roomHistory screen',
  },
  roomHistoryActionSaveToGallery: {
    id: 'roomHistory.actionSaveToGallery',
    defaultMessage: 'ذخیره در گالری',
    description: 'roomHistory screen',
  },
  roomHistoryActionSaveToMusic: {
    id: 'roomHistory.actionSaveToMusic',
    defaultMessage: 'ذخیره در پوشه موزیک',
    description: 'roomHistory screen',
  },
  roomHistoryActionShare: {
    id: 'roomHistory.actionShare',
    defaultMessage: 'اشتراک',
    description: 'roomHistory screen',
  },
  roomHistoryForwardTo: {
    id: 'roomHistory.forwardTo',
    defaultMessage: 'فرستادن به : ',
    description: 'roomHistory screen',
  },
  roomHistoryActionChat: {
    id: 'roomHistory.actionChat',
    defaultMessage: ' {action, select, 1{در حال تایپ} 2{ارسال تصویر} 3{گرفتن تصویر} 4{ارسال ویدیو} 5{گرفتن فیلم} 6{ارسال موزیک} 7{ضبط صدا} 8{ارسال صدا} 9{ارسال فایل سندی} 10{ارسال گیف} 11{ارسال فایل} 12{ارسال موقعیت} 13{انتخاب مخاطب} 14{نقاشی}}...',
    description: 'roomHistory screen',
  },
  roomHistoryAction: {
    id: 'roomHistory.action',
    defaultMessage: '{count, select, 1{{author} } other{{count}عضو}} {action, select, 1{در حال تایپ} 2{ارسال تصویر} 3{گرفتن تصویر} 4{ارسال ویدیو} 5{گرفتن فیلم} 6{ارسال موزیک} 7{ضبط صدا} 8{ارسال صدا} 9{ارسال فایل سندی} 10{ارسال گیف} 11{ارسال فایل} 12{ارسال موقعیت} 13{انتخاب مخاطب} 14{نقاشی}}...',
    description: 'roomHistory screen',
  },
  roomHistoryActionReport: {
    id: 'roomHistory.actionReport',
    defaultMessage: 'گزارش',
    description: 'roomHistory screen',
  },
  roomHistoryQrLink: {
    id: 'roomHistory.qrLink',
    defaultMessage: 'QR کد',
    description: 'roomHistory screen',
  },
  roomHistoryPickContactTitle: {
    id: 'roomHistory.pickContactTitle',
    defaultMessage: 'انتخاب تماس',
    description: 'roomHistory screen',
  },
  roomHistoryDeleteMessageForBoth: {
    id: 'roomHistory.deleteMessageForBoth',
    defaultMessage: 'حذف پیام برای {userTitle}؟',
    description: 'roomHistory screen',
  },
  roomMessageReplyTo: {
    id: 'roomMessage.replyTo',
    defaultMessage: 'پاسخ به',
    description: 'roomMessage Box',
  },
  roomMessageForwardFrom: {
    id: 'roomMessage.ForwardFrom',
    defaultMessage: 'ارسال شده از ',
    description: 'roomMessage Box',
  },
  roomMessagePrivateRoom: {
    id: 'roomMessage.privateRoom',
    defaultMessage: 'صفحه شخصی',
    description: 'roomMessage Box',
  },
  logMessageTypeUserJoined: {
    id: 'logMessageType.userJoined',
    defaultMessage: 'به آی گپ ملحق شد`{author}',
    description: 'roomMessage Log',
  },
  logMessageTypeUserDeleted: {
    id: 'logMessageType.userDeleted',
    defaultMessage: '`{author}`حساب کاربری خود را پاک کرد',
    description: 'roomMessage Log',
  },
  logMessageTypeRoomCreated: {
    id: 'logMessageType.roomCreated',
    defaultMessage: '{roomType, select, 1{گروه} 2{کانال}} `{roomTitle}` ایجادشد',
    description: 'roomMessage Log',
  },
  logMessageTypeMemberAdded: {
    id: 'logMessageType.memberAdded',
    defaultMessage: '{ownerMessage, select, 0{اضافه کرد {author}} 1{شما اضافه کردید}} {targetUserOwner, select, 0{{targetUser}} 1{شما}} را به {roomType, select, 1{گروه} 2{کانال}}',
    description: 'roomMessage Log',
  },
  logMessageTypeMemberKicked: {
    id: 'logMessageType.memberKicked',
    defaultMessage: '{ownerMessage, select, 0{حذف کرد {author}} 1{شما حذف کردید}} {targetUserOwner, select, 0{{targetUser}} 1{شما}} را از {roomType, select, 1{گروه} 2{کانال}}',
    description: 'roomMessage Log',
  },
  logMessageTypeMemberLeft: {
    id: 'logMessageType.memberLeft',
    defaultMessage: '{ownerMessage, select, 0{ترک کرد {author}} 1{شما ترک کردید }} {roomType, select, 1{گروه} 2{کانال}} را ',
    description: 'roomMessage Log',
  },
  logMessageTypeRoomConvertedToPublic: {
    id: 'logMessageType.roomConvertedToPublic',
    defaultMessage: '{roomType, select, 1{گروه} 2{کانال}} به عمومی تبدیل شد',
    description: 'roomMessage Log',
  },
  logMessageTypeRoomConvertedToPrivate: {
    id: 'logMessageType.roomConvertedToPrivate',
    defaultMessage: '{roomType, select, 1{گروه} 2{کانال}} به خصوصی تبدیل شد',
    description: 'roomMessage Log',
  },
  logMessageTypeMemberJoinedByInviteLink: {
    id: 'logMessageType.memberJoinedByInviteLink',
    defaultMessage: '{ownerMessage, select, 0{ ملحق شد {author}} 1{شما ملحق شدید }} به  {roomType, select, 1{گروه} 2{کانال}}  از طریق لینک دعوت',
    description: 'roomMessage Log',
  },
  logMessageTypeRoomDeleted: {
    id: 'logMessageType.roomDeleted',
    defaultMessage: '{roomType, select, 1{گروه} 2{کانال}} `{roomTitle}` حذف شد',
    description: 'roomMessage Log',
  },
  logMessageTypeMissedVoiceCall: {
    id: 'logMessageType.missedVoiceCall',
    defaultMessage: 'تماس صوتی  {ownerMessage, select, 0{از دست رفته} 1{لغو شده}}',
    description: 'roomMessage Log',
  },
  logMessageTypeMissedVideoCall: {
    id: 'logMessageType.missedVideoCall',
    defaultMessage: 'تماس تصویری  {ownerMessage, select, 0{از دست رفته} 1{لغو شده}}',
    description: 'roomMessage Log',
  },
  logMessageTypeMissedScreenShare: {
    id: 'logMessageType.missedScreenShare',
    defaultMessage: 'اشتراک صفحه نمایش  {ownerMessage, select, 0{از دست رفته} 1{لغو شده}}',
    description: 'roomMessage Log',
  },
  logMessageTypeMissedSecretChat: {
    id: 'logMessageType.missedSecretChat',
    defaultMessage: 'ارتباط رمز شده  {ownerMessage, select, 0{از دست رفته} 1{لغو شده}}',
    description: 'roomMessage Log',
  },
  settingSetting: {
    id: 'setting.setting',
    defaultMessage: 'تنظیمات',
    description: 'setting screen',
  },
  settingLogout: {
    id: 'setting.logout',
    defaultMessage: 'خروج',
    description: 'setting screen',
  },
  settingDeleteAccount: {
    id: 'setting.deleteAccount',
    defaultMessage: 'حذف حساب کاربری',
    description: 'setting screen',
  },
  settingGeneralSettings: {
    id: 'setting.generalSettings',
    defaultMessage: 'تنظیمات عمومی',
    description: 'setting screen',
  },
  settingIgapSupport: {
    id: 'setting.igapSupport',
    defaultMessage: 'پشتیبانی آی گپ',
    description: 'setting screen',
  },
  settingIgapOfficialHome: {
    id: 'setting.igapOfficialHome',
    defaultMessage: 'صفحه رسمی آی گپ',
    description: 'setting screen',
  },
  settingIgapOfficialBlog: {
    id: 'setting.igapOfficialBlog',
    defaultMessage: 'بلاگ رسمی آی گپ',
    description: 'setting screen',
  },
  settingSupportRequest: {
    id: 'setting.supportRequest',
    defaultMessage: 'درخواست پشتیبانی',
    description: 'setting screen',
  },
  settingBlockList: {
    id: 'setting.blockList',
    defaultMessage: 'لیست سیاه',
    description: 'setting screen',
  },
  settingLogOutSubTitle: {
    id: 'setting.logOuSubTitlet',
    defaultMessage: 'آیا می خواهید از این دستگاه خارج شوید؟',
    description: 'setting screen',
  },
  settingDeleteAccountSubTitle: {
    id: 'setting.deleteAccountSubTitle',
    defaultMessage: 'آیا می خواهید حساب کاربری خود را حذف کنید؟',
    description: 'setting screen',
  },
  settingNotificationAndSound: {
    id: 'setting.notificationAndSound',
    defaultMessage: 'اعلانات و صدا',
    description: 'setting screen',
  },
  settingLanguage: {
    id: 'setting.language',
    defaultMessage: 'زبان',
    description: 'setting screen',
  },
  settingThemes: {
    id: 'setting.themes',
    defaultMessage: 'تم ها',
    description: 'setting screen',
  },
  settingThemesPickerTitle: {
    id: 'setting.themesPickerTitle',
    defaultMessage: 'تم',
    description: 'setting screen',
  },
  settingThemesPickerPlaceHolder: {
    id: 'setting.themesPickerPlaceHolder',
    defaultMessage: 'تغییر زمینه',
    description: 'setting screen',
  },
  settingTwoStepVerification: {
    id: 'setting.twoStepVerification',
    defaultMessage: 'تأیید دو مرحله ای',
    description: 'setting screen',
  },
  settingIgapVersion: {
    id: 'setting.igapVersion',
    defaultMessage: 'آی گپ پلاس  پلتفرم { platform }  ورژن { appVersion }  ',
    description: 'setting screen',
  },
  settingLoginWithQrCode: {
    id: 'setting.LoginWithQrCode',
    defaultMessage: 'اسکن کد QR',
    description: 'setting screen',
  },
  settingChatBackground: {
    id: 'setting.chatBackground',
    defaultMessage: 'پس زمینه صفحه گفتگو',
    description: 'setting screen',
  },
  qrCodeLoggedInDevice: {
    id: 'qrCode.loggedInDevice',
    defaultMessage: 'دستگاه وارد شده',
    description: 'qrCode screen',
  },
  qrCodeQrCodeLogin: {
    id: 'qrCode.qrCodeLogin',
    defaultMessage: 'ورود با QR',
    description: 'qrCode screen',
  },


  privacyPrivacy: {
    id: 'privacy.privacy',
    defaultMessage: 'حریم خصوصی',
    description: 'Privacy screen',
  },
  privacyWhoCanSeeMyAvatar: {
    id: 'privacy.whoCanSeeMyAvatar',
    defaultMessage: 'چه کسی می تواند تصویر من را ببیند',
    description: 'Privacy screen',
  },
  privacyWhoCanInviteMeToChannels: {
    id: 'privacy.whoCanInviteMeToChannels',
    defaultMessage: 'چه کسی میتواند مرا به کانالها دعوت کند',
    description: 'Privacy screen',
  },
  privacyWhoCanInviteMeToGroups: {
    id: 'privacy.whoCanInviteMeToGroups',
    defaultMessage: 'چه کسی می تواند مرا به گروه دعوت کند',
    description: 'Privacy screen',
  },
  privacyWhoCanCallMe: {
    id: 'privacy.whoCanCallMe',
    defaultMessage: 'چه کسی می تواند با من تماس بگیرد',
    description: 'Privacy screen',
  },
  privacyLastSeen: {
    id: 'privacy.lastSeen',
    defaultMessage: 'بازدید اخیر',
    description: 'Privacy screen',
  },
  privacyEveryBody: {
    id: 'privacy.everyBody',
    defaultMessage: 'همه',
    description: 'Privacy screen',
  },
  privacyMyContacts: {
    id: 'privacy.myContacts',
    defaultMessage: 'مخاطبین من',
    description: 'Privacy screen',
  },
  privacyNobody: {
    id: 'privacy.nobody',
    defaultMessage: 'هیچ کسی',
    description: 'Privacy screen',
  },
  privacyAccountSelfDestruct: {
    id: 'privacy.accountSelfDestruct',
    defaultMessage: 'حساب شخصی خود تخریب',
    description: 'Privacy screen',
  },
  privacyAwayFor: {
    id: 'privacy.awayFor',
    defaultMessage: 'غایب به مدت',
    description: 'Privacy screen',
  },
  privacyMonth: {
    id: 'privacy.month',
    defaultMessage: '{value, number} {value, plural,one {ماه}other {ماه}}',
    description: 'Privacy screen',
  },
  privacySelfRemoveComment: {
    id: 'privacy.selfRemoveComment',
    defaultMessage: 'اگر یکی از دوره های زیر را انتخاب کنید و از حساب کاربری آی گپ خود در طول زمان مشخص استفاده نکنید، حساب کاربری شما پاک خواهد شد',
    description: 'Privacy screen',
  },
  privacyYear: {
    id: 'privacy.year',
    defaultMessage: '{value, number} {value, plural,one {سال}other {سال}}',
    description: 'Privacy screen',
  },
  blockContentDialog: {
    id: 'block.contentDialog',
    defaultMessage: 'رفع انسداد کاربر',
    description: 'block screen',
  },
  blockTitleDialog: {
    id: 'block.titleDialog',
    defaultMessage: 'ایا شما مطمئن هستید',
    description: 'block screen',
  },
  activeSessionActiveSession: {
    id: 'activeSession.activeSession',
    defaultMessage: 'اکانت های فعال',
    description: 'Active Session page',
  },
  activeSessionCurrentSession: {
    id: 'activeSession.currentSession',
    defaultMessage: 'اکانت فعلی',
    description: 'Active Session page',
  },
  activeSessionTerminateAllOtherActiveSession: {
    id: 'activeSession.terminateAllOtherActiveSession',
    defaultMessage: 'تمام اکانت های فعال دیگر را خاتمه دهید',
    description: 'Active Session page',
  },
  activeSessionTerminate: {
    id: 'activeSession.terminate',
    defaultMessage: 'پایان دادن',
    description: 'Active Session page',
  },
  activeSessionPlatform: {
    id: 'activeSession.platform',
    defaultMessage: '{ platform, select, 1{ANDROID} 2{IOS} 3{MAC_OS} 4{WINDOWS} 5{LINUX} 6{BLACK_BERRY} other{ناشناس}}',
    description: 'activeSession Page',
  },
  activeSessionLogsOutAllDevice: {
    id: 'activeSession.logsOutAllDevice',
    defaultMessage: 'همه دستگاهها به جز این یکی را خارج کنید',
    description: 'Active Session page',
  },
  activeSessionTapOnSessionToTerminate: {
    id: 'activeSession.tapOnSessionToTerminate',
    defaultMessage: 'برای پایان دادن روی لیست ضربه بزنید',
    description: 'Active Session page',
  },
  activeSessionCloseAllSession: {
    id: 'activeSession.closeAllSession',
    defaultMessage: 'آیا مطمئن هستید که می خواهید تمامی اکانت های فعال را خاتمه دهید؟',
    description: 'Active Session page',
  },
  activeSessionCloseThisSession: {
    id: 'activeSession.closeThisSession',
    defaultMessage: 'آیا مطمئن هستید که می خواهید این اکانت را خاتمه دهید؟',
    description: 'Active Session page',
  },
  activeSessionOnline: {
    id: 'activeSession.online',
    defaultMessage: 'انلاین',
    description: 'Active Session page',
  },
  activeSessionCountry: {
    id: 'activeSession.country',
    defaultMessage: 'کشور',
    description: 'Active Session page',
  },
  activeSessionLastActivity: {
    id: 'activeSession.lastActivity',
    defaultMessage: 'اخرین وضعیت',
    description: 'Active Session page',
  },
  activeSessionTerminateTitle: {
    id: 'activeSession.terminateTitle',
    defaultMessage: 'پایان دادن اکانت',
    description: 'Active Session page',
  },
  userVerifyDeleteVerifyDeleteAccount: {
    id: 'userVerifyDelete.verifyDeleteAccount',
    defaultMessage: 'تأیید حذف حساب',
    description: 'userVerifyDelete Page',
  },
  userVerifyDeleteSubTitle: {
    id: 'userVerifyDelete.subTitle',
    defaultMessage: 'ما اس ام اس با یک کد فعال سازی به گوشی شما ارسال کرده ایم.',
    description: 'userVerifyDelete Page',
  },
  userVerifyDeleteEnterCode: {
    id: 'userVerifyDelete.enterCode',
    defaultMessage: 'کد دریافتی',
    description: 'userVerifyDelete Page',
  },
  userVerifyDeleteCode: {
    id: 'userVerifyDelete.code',
    defaultMessage: 'کد',
    description: 'userVerifyDelete Page',
  },
  roomReportTitle: {
    id: 'roomReport.title',
    defaultMessage: 'گزارش',
    description: 'Room Report Page',
  },
  roomReportReason: {
    id: 'roomReport.reason',
    defaultMessage: 'دلیل',
    description: 'Room Report Page',
  },
  roomReportReasonSpam: {
    id: 'roomReport.reasonSpam',
    defaultMessage: 'هرزنامه',
    description: 'Room Report Page',
  },
  roomReportReasonPornography: {
    id: 'roomReport.reasonPornography',
    defaultMessage: 'پورنوگرافی',
    description: 'Room Report Page',
  },
  roomReportReasonViolence: {
    id: 'roomReport.reasonViolence',
    defaultMessage: 'خشونت',
    description: 'Room Report Page',
  },
  roomReportReasonAbuse: {
    id: 'roomReport.reasonAbuse',
    defaultMessage: 'سو استفاده کردن',
    description: 'Room Report Page',
  },
  roomReportReasonOther: {
    id: 'roomReport.reasonOther',
    defaultMessage: 'دیگر',
    description: 'Room Report Page',
  },
  roomReportReasonDescription: {
    id: 'roomReport.reasonDescription',
    defaultMessage: 'توضیحات',
    description: 'Room Report Page',
  },
  roomReportReasonDescriptionRequired: {
    id: 'roomReport.reasonDescriptionRequired',
    defaultMessage: 'توضیحات ضروری است',
    description: 'Room Report Page',
  },
  avatarListSaveToGallery: {
    id: 'avatarList.saveToGallery',
    defaultMessage: 'ذخیره در گالری',
    description: 'avatarListSave Page',
  },
  avatarListShare: {
    id: 'avatarList.share',
    defaultMessage: 'اشتراک',
    description: 'avatarListSave Page',
  },
  avatarListDeletePhoto: {
    id: 'avatarList.deletePhoto',
    defaultMessage: 'حذف عکس',
    description: 'avatarListSave Page',
  },
  voiceRecorderSlideToCancel: {
    id: 'voiceRecorder.slideToCancel',
    defaultMessage: 'برای لغو بکشید > ',
    description: 'voice Recorder',
  },

  roomListActionTitle: {
    id: 'roomList.actionTitle',
    defaultMessage: 'اقدامات',
    description: 'Room List Screen',
  },
  roomListActionUnpinRoom: {
    id: 'roomList.actionUnpinRoom',
    defaultMessage: 'حذف سنجاق',
    description: 'Room List Screen',
  },
  roomListActionPinRoom: {
    id: 'roomList.actionPinRoom',
    defaultMessage: 'سنجاق',
    description: 'Room List Screen',
  },
  roomListActionMuteNotification: {
    id: 'roomList.actionMuteNotification',
    defaultMessage: 'بی صدا کردن اعلانات',
    description: 'Room List Screen',
  },
  roomListActionUnMuteNotification: {
    id: 'roomList.actionUnMuteNotification',
    defaultMessage: 'صدا دار کردن اعلانات',
    description: 'Room List Screen',
  },
  roomListActionClearHistory: {
    id: 'roomList.actionClearHistory',
    defaultMessage: 'پاک کردن تاریخچه',
    description: 'Room List Screen',
  },
  roomListActionDeleteRoom: {
    id: 'roomList.actionDeleteRoom',
    defaultMessage: 'حذف صفحه',
    description: 'Room List Screen',
  },
  roomListActionLeaveRoom: {
    id: 'roomList.actionLeaveRoom',
    defaultMessage: 'ترک صفحه',
    description: 'Room List Screen',
  },
  roomListLastMessageTitle: {
    id: 'roomList.lastMessageTitle',
    defaultMessage: '{type, select, 1{پیام تصویری} 3{پیام ویدیویی} 5{پیام شنیداری} 7{پیام صوتی} 8{گیف} 9{ضمیمه} 11{موقعیت مکانی} 12{پیام اطلاع رسانی} 13{مخاطب} other{بدون پیام}}',
    description: 'Room List Screen',
  },
  roomListFilterAll: {
    id: 'roomList.filterAll',
    defaultMessage: 'همه',
    description: 'Room List Screen',
  },
  roomListFilterChat: {
    id: 'roomList.filterChat',
    defaultMessage: 'چت',
    description: 'Room List Screen',
  },
  roomListFilterGroup: {
    id: 'roomList.filterGroup',
    defaultMessage: 'گروه',
    description: 'Room List Screen',
  },
  roomListFilterChannel: {
    id: 'roomList.filterChannel',
    defaultMessage: 'کانال',
    description: 'Room List Screen',
  },
  roomListFilterCall: {
    id: 'roomList.filterCall',
    defaultMessage: 'تماس',
    description: 'Room List Screen',
  },
  nearbyScreenListTitle: {
    id: 'nearbyScreen.listTitle',
    defaultMessage: 'لیست اطراف من',
    description: 'Nearby Screen',
  },
  nearbyScreenMapTitle: {
    id: 'nearbyScreen.mapTitle',
    defaultMessage: 'نقشه اطراف من',
    description: 'Nearby Screen',
  },
  nearbyScreenRegisterNoties: {
    id: 'nearbyScreen.RegisterNoties',
    defaultMessage: 'اطلاع! فعال شدن وضعیت نقشه در نتیجه ایجاد موقعیت مکانی شما برای دیگران است. لطفا قبل از ورود به آن مطمئن شوید.',
    description: 'Nearby Screen',
  },
  nearbyScreenLocationPermissionTitle: {
    id: 'nearbyScreen.locationPermissionTitle',
    defaultMessage: 'مجوز موقعیت',
    description: 'Deactivate Nearby page',
  },
  nearbyScreenLocationPermissionMessage: {
    id: 'nearbyScreen.locationPermissionMessage',
    defaultMessage: 'برای پیدا کردن مکان خود و مشاهده افراد آنلاین در نزدیکی شما.',
    description: 'Deactivate Nearby page',
  },
  nearbyDeactivateAreYouSure: {
    id: 'nearbyDeactivate.areYouSure',
    defaultMessage: 'شما مطمئن هستید ؟',
    description: 'Deactivate Nearby page',
  },
  nearbyDeactivateMessage: {
    id: 'nearbyDeactivate.message',
    defaultMessage: 'این جلوگیری می کند که شما مردم نزدیک را ببینید',
    description: 'Deactivate Nearby page',
  },
  locationPickerToolbar: {
    id: 'locationPicker.toolbar',
    defaultMessage: 'یک محل را انتخاب کنید',
    description: 'choseLocation Screen',
  },
  locationPickerHelp: {
    id: 'locationPicker.help',
    defaultMessage: 'نگه داری و کشیدن نشانگر برای انتخاب یک مکان دیگر',
    description: 'choseLocation Screen',
  },
  locationPickerSendLocation: {
    id: 'locationPicker.sendLocation',
    defaultMessage: 'فرستادن موقعیت',
    description: 'choseLocation Screen',
  },
  roomStatusLabelMember: {
    id: 'roomStatusLabel.member',
    defaultMessage: '{member, select,0{بدون عضو} 1{یک عضو} other{{memberLabel} عضو}}',
    description: 'roomStatusLabelMember',
  },
  roomStatusLabelStatus: {
    id: 'roomStatusLabel.status',
    defaultMessage: '{status, select,1{ماه پیش} 2{هفته پیش} 3{انلاین} 5{اخیرا} 6{حمایت} 7{سروس اعلان} other{خیلی وقت پیش}}',
    description: 'roomStatusLabelMember',
  },
  roomPickerTitle: {
    id: 'roomPicker.title',
    defaultMessage: 'انتخاب چت',
    description: 'RoomPicker Screen',
  },
  sendBoxDialogCameraTitle: {
    id: 'sendBox.dialogCameraTitle',
    defaultMessage: 'نوع عملکرد دوربین',
    description: 'sendBox Screen',
  },
  sendBoxCaptureImage: {
    id: 'sendBox.captureImage',
    defaultMessage: 'گرفتن تصویر',
    description: 'sendBox Screen',
  },
  sendBoxCaptureVideo: {
    id: 'sendBox.captureVideo',
    defaultMessage: 'گرفتن فیلم',
    description: 'sendBox Screen',
  },
};