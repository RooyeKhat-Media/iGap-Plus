import React from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation';
import {createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers';
import {navigate, resetPrimaryNavigation} from './index';
import MainBottom from '../containers/MainBottom';

import {
  ACTIVE_SESSION_SCREEN,
  CALL_LIST_SCREEN,
  CONTACT_LIST_SCREEN,
  CONTACT_NEW_SCREEN,
  EDIT_PROFILE_SCREEN,
  NEARBY_SCREEN,
  NEW_SCREEN,
  PRIMARY_CONTACT_PICKER_SCREEN,
  PRIMARY_NAV_TAB,
  PROFILE_SCREEN,
  ROOM_CREATE_SCREEN,
  ROOM_LIST_SCREEN,
  ROOM_UPDATE_USERNAME_SCREEN,
  SETTING_BLOCK_SCREEN,
  SETTING_PRIVACY_SCREEN,
  SETTING_SCREEN,
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

export function goRoomCreate(type, selectedContact = {}) {
  resetPrimaryNavigation(ROOM_CREATE_SCREEN, {type, selectedContact});
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

const tabNav = TabNavigator({
  [ROOM_LIST_SCREEN]: {screen: RoomsScreen},
  [NEARBY_SCREEN]: {screen: NearbyScreen},
  [NEW_SCREEN]: {screen: NewScreen},
  [CALL_LIST_SCREEN]: {screen: CallListScreen},
  [PROFILE_SCREEN]: {screen: ProfileScreen},
}, {
  tabBarComponent: props => (<MainBottom {...props}/>),
  tabBarPosition: 'bottom',
  swipeEnabled: false,
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
});

export default PrimaryNavigator;