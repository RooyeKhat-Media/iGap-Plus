/**
 * @flow
 */

import {navigate} from './index';
import {StackNavigator} from 'react-navigation';
import Intro from '../screens/Intro';
import Register from '../screens/Register';
import {INTRO, REGISTER} from '../constants/navigators';

const AppNavigator = StackNavigator({
  [INTRO]: {screen: Intro},
  [REGISTER]: {screen: Register},
});

export default AppNavigator;

export function goIntro() {
  navigate(INTRO);
}

export function goRegister() {
  navigate(REGISTER);
}