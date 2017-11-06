import React from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation';
import {navigate, resetPrimaryNavigation} from './index';
import MainBottom from '../containers/MainBottom';

import {
  CONTACT_LIST_SCREEN,
  CONTACT_NEW_SCREEN,
  EDIT_PROFILE_SCREEN,
  NEW_SCREEN,
  PRIMARY_CONTACT_PICKER_SCREEN,
  PRIMARY_NAV_TAB,
  PROFILE_SCREEN,
  PUBLIC_SCREEN,
  ROOM_CREATE_SCREEN,
  ROOM_LIST_SCREEN,
  ROOM_UPDATE_USERNAME_SCREEN,
  SEARCH_SCREEN,
} from '../constants/navigators';
import ProfileScreen from '../screens/MainTabs/ProfileScreen';
import SearchScreen from '../screens/MainTabs/SearchScreen';
import RoomsScreen from '../screens/MainTabs/RoomListScreen';
import NewScreen from '../screens/MainTabs/NewScreen';
import PublicScreen from '../screens/MainTabs/PublicScreen';
import ContactListScreen from '../screens/Contact/ContactListScreen';
import EditProfileScreen from '../screens/User/UserEditProfileScreen';
import ContactNewScreen from '../screens/Contact/ContactNewScreen';
import RoomCreateScreen from '../screens/Room/RoomCreateScreen';
import ContactPickerScreen from '../screens/Contact/ContactPickerScreen';
import RoomUpdateUsernameScreen from '../screens/Room/RoomUpdateUsernameScreen';

export function goRoomList() {
  navigate(ROOM_LIST_SCREEN);
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

export function goContactPicker(title, onSubmit, multiple) {
  navigate(PRIMARY_CONTACT_PICKER_SCREEN, {title, onSubmit, multiple});
}

export function goContactNew() {
  navigate(CONTACT_NEW_SCREEN);
}

export function goEditProfile() {
  navigate(EDIT_PROFILE_SCREEN);
}

export function goRoomCreate(type, selectedContact) {
  resetPrimaryNavigation(ROOM_CREATE_SCREEN, {type, selectedContact});
}

export function goRoomUpdateUsername(roomId) {
  navigate(ROOM_UPDATE_USERNAME_SCREEN, {roomId});
}

const tabNav = TabNavigator({
  [ROOM_LIST_SCREEN]: {screen: RoomsScreen},
  [SEARCH_SCREEN]: {screen: SearchScreen},
  [NEW_SCREEN]: {screen: NewScreen},
  [PUBLIC_SCREEN]: {screen: PublicScreen},
  [PROFILE_SCREEN]: {screen: ProfileScreen},
}, {
  tabBarComponent: props => (<MainBottom {...props}/>),
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  lazy: true,
});

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
});

export default PrimaryNavigator;