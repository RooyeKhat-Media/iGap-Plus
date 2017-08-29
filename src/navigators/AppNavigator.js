/**
 * @flow
 */

import {navigate} from './index';
import {StackNavigator} from 'react-navigation';
import Intro from '../screens/Intro';
import UserRegister from '../screens/User/UserRegisterScreen';
import UserVerify from '../screens/User/UserVerifyScreen';
import {INTRO, REGISTER, VERIFY} from '../constants/navigators';

const AppNavigator = StackNavigator({
  [INTRO]: {screen: Intro},
  [REGISTER]: {screen: UserRegister},
  [VERIFY]: {screen: UserVerify},
});

export default AppNavigator;

export function goIntro() {
  navigate(INTRO);
}

export function goRegister() {
  navigate(REGISTER);
}

export function goVerify(username, method, resendDelay, smsNumber, verifyCodeRegex, verifyCodeDigitCount) {
  navigate(VERIFY, {
    username: username,
    method: method,
    resendDelay: resendDelay,
    smsNumber: smsNumber,
    verifyCodeRegex: verifyCodeRegex,
    verifyCodeDigitCount: verifyCodeDigitCount,
  });
}