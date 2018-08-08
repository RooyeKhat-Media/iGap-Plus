import React from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation';
import {I18nManager, Platform} from 'react-native';
import {createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers';
import {navigate, resetPrimaryNavigation} from './index';
import MainBottom from '../containers/MainBottom';

import {
  ACTIVE_SESSION_SCREEN,
  CALL_LIST_SCREEN,
  CHAT_BACKGROUND_SCREEN,
  CONTACT_LIST_SCREEN,
  CONTACT_NEW_SCREEN,
  EDIT_PROFILE_SCREEN,
  NEARBY_SCREEN,
  NEW_SCREEN,
  PRIMARY_CONTACT_PICKER_SCREEN,
  PRIMARY_NAV_TAB,
  PROFILE_SCREEN,
  QR_CODE_SCREEN,
  ROOM_CREATE_SCREEN,
  ROOM_LIST_SCREEN,
  ROOM_UPDATE_USERNAME_SCREEN,
  SETTING_BLOCK_SCREEN,
  SETTING_PRIVACY_SCREEN,
  SETTING_SCREEN,
  USER_TWO_STEP_CHANGE_EMAIL_SCREEN,
  USER_TWO_STEP_CHANGE_HINT_SCREEN,
  USER_TWO_STEP_CHANGE_RECOVERY_QUESTION_SCREEN,
  USER_TWO_STEP_SET_PASSWORD_SCREEN,
  USER_TWO_STEP_SETTING_SCREEN,
  USER_TWO_STEP_VERIFY_EMAIL_SCREEN,
  USER_VERIFY_DELETE_SCREEN,
} from '../constants/navigators';
import ProfileScreen from '../screens/MainTabs/ProfileScreen';
import NearbyScreen from '../screens/MainTabs/NearbyScreen';
import RoomsScreen from '../screens/MainTabs/RoomListScreen';
import NewScreen from '../screens/MainTabs/NewScreen';
import CallListScreen from '../screens/MainTabs/CallListScreen';
import ContactListScreen from '../screens/Contact/ContactListScreen';
import EditProfileScreen from '../screens/User/UserEditProfileScreen';
import ContactNewScreen from '../screens/Contact/ContactNewScreen';
import RoomCreateScreen from '../screens/Room/RoomCreateScreen';
import ContactPickerScreen from '../screens/Contact/ContactPickerScreen';
import RoomUpdateUsernameScreen from '../screens/Room/RoomUpdateUsernameScreen';
import SettingScreen from '../screens/Setting/SettingScreen';
import SettingPrivacyScreen from '../screens/Setting/Privacy/SettingPrivacyScreen';
import BlockScreen from '../screens/Setting/Block/BlockScreen';
import ActiveSessionScreen from '../screens/User/ActiveSessionScreen';
import UserTwoStepSettingScreen from '../screens/User/TwoStep/UserTwoStepSettingScreen';
import UserTwoStepSetPasswordScreen from '../screens/User/TwoStep/UserTwoStepSetPasswordScreen';
import UserTwoStepChangeEmailScreen from '../screens/User/TwoStep/UserTwoStepChangeEmailScreen';
import UserTwoStepChangeHintScreen from '../screens/User/TwoStep/UserTwoStepChangeHintScreen';
import UserTwoStepChangeRecoveryQuestionScreen from '../screens/User/TwoStep/UserTwoStepChangeRecoveryQuestionScreen';
import UserTwoStepVerifyRecoveryEmailScreen from '../screens/User/TwoStep/UserTwoStepVerifyRecoveryEmail';
import QrCodeScreen from '../screens/QrCode/QrCodeScreen';
import UserVerifyDeleteScreen from '../screens/User/UserVerifyDeleteScreen';
import ChatBackgroundScreen from '../screens/Setting/ChatBackground/ChatBackgroundScreen';

export function goRoomList() {
  navigate(ROOM_LIST_SCREEN);
}

export function goNearby() {
  navigate(NEARBY_SCREEN);
}

export function goCallList() {
  navigate(CALL_LIST_SCREEN);
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

export function goContactPicker(title, onSubmit, multiple, required = true) {
  navigate(PRIMARY_CONTACT_PICKER_SCREEN, {title, onSubmit, multiple, required});
}

export function goContactNew() {
  navigate(CONTACT_NEW_SCREEN);
}

export function goEditProfile() {
  navigate(EDIT_PROFILE_SCREEN);
}

export function goRoomCreate(type, selectedContact = {}, roomId = null) {
  resetPrimaryNavigation(ROOM_CREATE_SCREEN, {type, selectedContact, roomId});
}

export function goRoomUpdateUsername(roomId) {
  navigate(ROOM_UPDATE_USERNAME_SCREEN, {roomId});
}


export function goSetting() {
  navigate(SETTING_SCREEN);
}

export function goSettingPrivacy() {
  navigate(SETTING_PRIVACY_SCREEN);
}

export function goBlockList() {
  navigate(SETTING_BLOCK_SCREEN);
}

export function goActiveSession() {
  navigate(ACTIVE_SESSION_SCREEN);
}

export function goTowStepSetting() {
  navigate(USER_TWO_STEP_SETTING_SCREEN);
}

export function goTwoStepSetPassword(setPasswordState, currentPassword = null) {
  navigate(USER_TWO_STEP_SET_PASSWORD_SCREEN, {setPasswordState, currentPassword});
}

export function goTwoStepChangeEmail(currentPassword) {
  navigate(USER_TWO_STEP_CHANGE_EMAIL_SCREEN, {currentPassword});
}

export function goTwoStepChangeHint(currentPassword) {
  navigate(USER_TWO_STEP_CHANGE_HINT_SCREEN, {currentPassword});
}

export function goTwoStepChangeRecoveryQuestion(currentPassword) {
  navigate(USER_TWO_STEP_CHANGE_RECOVERY_QUESTION_SCREEN, {currentPassword});
}

export function goTwoStepVerifyEmail() {
  navigate(USER_TWO_STEP_VERIFY_EMAIL_SCREEN);
}

export function goQrCode() {
  navigate(QR_CODE_SCREEN);
}

export function goUserVerifyDeleteScreen(token) {
  navigate(USER_VERIFY_DELETE_SCREEN, {token});
}

export function goChatBackGround() {
  navigate(CHAT_BACKGROUND_SCREEN);
}

const tabNav = TabNavigator({
  [ROOM_LIST_SCREEN]: {screen: RoomsScreen},
  [NEARBY_SCREEN]: {screen: NearbyScreen},
  [NEW_SCREEN]: {screen: NewScreen},
  [CALL_LIST_SCREEN]: {screen: CallListScreen},
  [PROFILE_SCREEN]: {screen: ProfileScreen},
}, {
  tabBarComponent: props => (<MainBottom {...props}/>),
  tabBarPosition: 'bottom',
  swipeEnabled: (I18nManager.isRTL && Platform.OS === 'ios'),
  lazy: true,
});

export const middleware = createReactNavigationReduxMiddleware(
  'primary',
  state => state.navPrimary,
);

const PrimaryNavigator = StackNavigator({
  [PRIMARY_NAV_TAB]: {
    screen: tabNav,
    navigationOptions: {
      header: null,
    },
  },
  [CONTACT_LIST_SCREEN]: {screen: ContactListScreen},
  [PRIMARY_CONTACT_PICKER_SCREEN]: {screen: ContactPickerScreen},
  [EDIT_PROFILE_SCREEN]: {screen: EditProfileScreen},
  [CONTACT_NEW_SCREEN]: {screen: ContactNewScreen},
  [ROOM_CREATE_SCREEN]: {screen: RoomCreateScreen},
  [ROOM_UPDATE_USERNAME_SCREEN]: {screen: RoomUpdateUsernameScreen},
  [SETTING_SCREEN]: {screen: SettingScreen},
  [SETTING_PRIVACY_SCREEN]: {screen: SettingPrivacyScreen},
  [SETTING_BLOCK_SCREEN]: {screen: BlockScreen},
  [ACTIVE_SESSION_SCREEN]: {screen: ActiveSessionScreen},
  [USER_TWO_STEP_SETTING_SCREEN]: {screen: UserTwoStepSettingScreen},
  [USER_TWO_STEP_SET_PASSWORD_SCREEN]: {screen: UserTwoStepSetPasswordScreen},
  [USER_TWO_STEP_CHANGE_EMAIL_SCREEN]: {screen: UserTwoStepChangeEmailScreen},
  [USER_TWO_STEP_CHANGE_HINT_SCREEN]: {screen: UserTwoStepChangeHintScreen},
  [USER_TWO_STEP_CHANGE_RECOVERY_QUESTION_SCREEN]: {screen: UserTwoStepChangeRecoveryQuestionScreen},
  [USER_TWO_STEP_VERIFY_EMAIL_SCREEN]: {screen: UserTwoStepVerifyRecoveryEmailScreen},
  [QR_CODE_SCREEN]: {screen: QrCodeScreen},
  [USER_VERIFY_DELETE_SCREEN]: {screen: UserVerifyDeleteScreen},
  [CHAT_BACKGROUND_SCREEN]: {screen: ChatBackgroundScreen},
});

export default PrimaryNavigator;