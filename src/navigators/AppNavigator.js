/**
 * @flow
 */

import {navigate, resetNavigation} from './index';
import {StackNavigator} from 'react-navigation';
import IntroScreen from '../screens/IntroScreen';
import UserRegister from '../screens/User/UserRegisterScreen';
import UserVerify from '../screens/User/UserVerifyScreen';
import UserNewProfile from '../screens/User/UserNewProfileScreen';
import UserTwoStepVerificationScreen from '../screens/User/TwoStep/UserTwoStepVerificationScreen';
import UserTwoStepForgetScreen from '../screens/User/TwoStep/UserTwoStepForgetScreen';
import MainScreen from '../screens/MainScreen';
import InitialScreen from '../screens/InitialScreen';
import UserTwoStepRecoveryByEmailScreen from '../screens/User/TwoStep/UserTwoStepRecoveryByEmailScreen';
import UserTwoStepRecoveryByQuestionScreen from '../screens/User/TwoStep/UserTwoStepRecoveryByQuestionScreen';
import ContactListScreen from '../screens/Contact/ContactListScreen';

import {
  CONTACT_LIST_SCREEN,
  CONTACT_NEW_SCREEN,
  INITIAL_SCREEN,
  INTRO_SCREEN,
  MAIN_SCREEN,
  NEW_SCREEN,
  PROFILE_SCREEN,
  PUBLIC_SCREEN,
  ROOMS_SCREEN,
  SEARCH_SCREEN,
  USER_NEW_PROFILE_SCREEN,
  USER_REGISTER_SCREEN,
  USER_TWO_STEP_FORGET_SCREEN,
  USER_TWO_STEP_RECOVERY_BY_EMAIL_SCREEN,
  USER_TWO_STEP_RECOVERY_BY_QUESTION_SCREEN,
  USER_TWO_STEP_VERIFICATION_SCREEN,
  USER_VERIFY_SCREEN,
} from '../constants/navigators';
import ContactNewScreen from '../screens/Contact/ContactNewScreen';

export function goInitialScreen() {
  navigate(INITIAL_SCREEN);
}

export function goMainScreen(reset = true) {
  if (reset) {
    resetNavigation(MAIN_SCREEN);
  } else {

    navigate(MAIN_SCREEN);
  }
}

export function goIntroScreen() {
  navigate(INTRO_SCREEN);
}

export function goUserRegisterScreen() {
  navigate(USER_REGISTER_SCREEN);
}

export function goUserVerifyScreen(phoneNumber, username, method, resendDelay, smsNumber, verifyCodeRegex, verifyCodeDigitCount, resendParams) {
  navigate(USER_VERIFY_SCREEN, {
    phoneNumber: phoneNumber,
    username: username,
    method: method,
    resendDelay: resendDelay,
    smsNumber: smsNumber,
    verifyCodeRegex: verifyCodeRegex,
    verifyCodeDigitCount: verifyCodeDigitCount,
    resendParams: resendParams,
  });
}

export function goUserNewProfileScreen() {
  navigate(USER_NEW_PROFILE_SCREEN);
}

export function goUserTwoStepVerificationScreen() {
  navigate(USER_TWO_STEP_VERIFICATION_SCREEN);
}

export function goUserTwoStepForgetScreen() {
  navigate(USER_TWO_STEP_FORGET_SCREEN);
}

export function goUserTwoStepRecoveryByEmailScreen() {
  navigate(USER_TWO_STEP_RECOVERY_BY_EMAIL_SCREEN);
}

export function goUserTwoStepRecoveryByQuestionScreen(needLogin = false) {
  navigate(USER_TWO_STEP_RECOVERY_BY_QUESTION_SCREEN, {needLogin});
}


export function goRooms() {
  navigate(ROOMS_SCREEN);
}

export function goSearch() {
  navigate(SEARCH_SCREEN);
}

export function goPublic() {
  navigate(PUBLIC_SCREEN);
}

export function goNew() {
  navigate(NEW_SCREEN);
}

export function goProfile() {
  navigate(PROFILE_SCREEN);
}

export function goContactList() {
  navigate(CONTACT_LIST_SCREEN);
}

export function goContactNew() {
  navigate(CONTACT_NEW_SCREEN);
}


const AppNavigator = StackNavigator({
  [MAIN_SCREEN]: {screen: MainScreen},
  [CONTACT_LIST_SCREEN]: {screen: ContactListScreen},
  [CONTACT_NEW_SCREEN]: {screen: ContactNewScreen},

  [INTRO_SCREEN]: {screen: IntroScreen},
  [USER_REGISTER_SCREEN]: {screen: UserRegister},
  [USER_VERIFY_SCREEN]: {screen: UserVerify},
  [USER_NEW_PROFILE_SCREEN]: {screen: UserNewProfile},
  [USER_TWO_STEP_VERIFICATION_SCREEN]: {screen: UserTwoStepVerificationScreen},
  [USER_TWO_STEP_FORGET_SCREEN]: {screen: UserTwoStepForgetScreen},
  [INITIAL_SCREEN]: {screen: InitialScreen},
  [USER_TWO_STEP_RECOVERY_BY_EMAIL_SCREEN]: {screen: UserTwoStepRecoveryByEmailScreen},
  [USER_TWO_STEP_RECOVERY_BY_QUESTION_SCREEN]: {screen: UserTwoStepRecoveryByQuestionScreen},
});

export default AppNavigator;