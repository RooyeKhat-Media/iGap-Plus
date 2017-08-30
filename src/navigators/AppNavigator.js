/**
 * @flow
 */

import {navigate} from './index';
import {StackNavigator} from 'react-navigation';
import IntroScreen from '../screens/IntroScreen';
import UserRegister from '../screens/User/UserRegisterScreen';
import UserVerify from '../screens/User/UserVerifyScreen';
import UserTwoStepVerificationScreen from '../screens/User/UserTwoStepVerificationScreen';
import {
  INTRO_SCREEN,
  USER_REGISTER_SCREEN,
  USER_TWO_STEP_VERIFICATION_SCREEN,
  USER_VERIFY_SCREEN,
} from '../constants/navigators';

const AppNavigator = StackNavigator({
  [INTRO_SCREEN]: {screen: IntroScreen},
  [USER_REGISTER_SCREEN]: {screen: UserRegister},
  [USER_VERIFY_SCREEN]: {screen: UserVerify},
  [USER_TWO_STEP_VERIFICATION_SCREEN]: {screen: UserTwoStepVerificationScreen},
});

export default AppNavigator;

export function goIntro() {
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