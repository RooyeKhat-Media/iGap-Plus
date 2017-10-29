import React from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation';
import {navigate} from './index';
import MainBottom from '../containers/MainBottom';

import {
  CONTACT_LIST_SCREEN,
  CONTACT_NEW_SCREEN,
  EDIT_PROFILE_SCREEN,
  NEW_SCREEN,
  PROFILE_SCREEN,
  PUBLIC_SCREEN,
  ROOM_GROUP_CREATE_SCREEN,
  ROOM_CHANNEL_CREATE_SCREEN,
  ROOM_LIST_SCREEN,
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
import RoomGroupCreateScreen from '../screens/Room/RoomGroupCreateScreen';
import RoomChannelCreateScreen from '../screens/Room/RoomChannelCreateScreen';

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

export function goContactNew() {
  navigate(CONTACT_NEW_SCREEN);
}

export function goEditProfile() {
  navigate(EDIT_PROFILE_SCREEN);
}

export function goGroupCreate() {
  navigate(ROOM_GROUP_CREATE_SCREEN);
}

export function goChannelCreate() {
  navigate(ROOM_CHANNEL_CREATE_SCREEN);
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
  tabNav: {
    screen: tabNav,
    navigationOptions: {
      header: null,
    },
  },
  [CONTACT_LIST_SCREEN]: {screen: ContactListScreen},
  [EDIT_PROFILE_SCREEN]: {screen: EditProfileScreen},
  [CONTACT_NEW_SCREEN]: {screen: ContactNewScreen},
  [ROOM_GROUP_CREATE_SCREEN]: {screen: RoomGroupCreateScreen},
  [ROOM_CHANNEL_CREATE_SCREEN]: {screen: RoomChannelCreateScreen},
});

export default PrimaryNavigator;