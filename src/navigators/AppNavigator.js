/**
 * @flow
 */

import {navigate, resetNavigation} from './index';
import {StackNavigator} from 'react-navigation';
import IntroScreen from '../screens/IntroScreen';
import UserRegister from '../screens/User/UserRegisterScreen';
import UserVerify from '../screens/User/UserVerifyScreen';
import UserTwoStepVerificationScreen from '../screens/User/TwoStep/UserTwoStepVerificationScreen';
import MainScreen from '../screens/MainScreen';
import InitialScreen from '../screens/InitialScreen';

import {
  INITIAL_SCREEN,
  INTRO_SCREEN,
  MAIN_SCREEN,
  USER_REGISTER_SCREEN,
  USER_TWO_STEP_VERIFICATION_SCREEN,
  USER_VERIFY_SCREEN,
} from '../constants/navigators';

const AppNavigator = StackNavigator({
  [INTRO_SCREEN]: {screen: IntroScreen},
  [USER_REGISTER_SCREEN]: {screen: UserRegister},
  [USER_VERIFY_SCREEN]: {screen: UserVerify},
  [USER_TWO_STEP_VERIFICATION_SCREEN]: {screen: UserTwoStepVerificationScreen},
  [MAIN_SCREEN]: {screen: MainScreen},
  [INITIAL_SCREEN]: {screen: InitialScreen},
});

export default AppNavigator;

export function goInitialScreen() {
  navigate(INITIAL_SCREEN);
}

export function goMainScreen(reset = true) {
  if (resetNavigation) {
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

export function goUserTwoStepVerificationScreen() {
  navigate(USER_TWO_STEP_VERIFICATION_SCREEN);
}