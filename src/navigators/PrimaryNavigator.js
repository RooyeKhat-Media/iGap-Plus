import React from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation';
import {navigate} from './index';
import MainBottom from '../containers/MainBottom';

import {
  CONTACT_LIST_SCREEN,
  CONTACT_NEW_SCREEN,
  NEW_SCREEN,
  PROFILE_SCREEN,
  PUBLIC_SCREEN,
  ROOM_LIST_SCREEN,
  SEARCH_SCREEN,
} from '../constants/navigators';
import ProfileScreen from '../screens/MainTabs/ProfileScreen';
import SearchScreen from '../screens/MainTabs/SearchScreen';
import RoomsScreen from '../screens/MainTabs/RoomListScreen';
import NewScreen from '../screens/MainTabs/NewScreen';
import PublicScreen from '../screens/MainTabs/PublicScreen';
import ContactListScreen from '../screens/Contact/ContactListScreen';
import ContactNewScreen from '../screens/Contact/ContactNewScreen';

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

const tabNav = TabNavigator({
  [ROOM_LIST_SCREEN]: {screen: RoomsScreen},
  [SEARCH_SCREEN]: {screen: SearchScreen},
  [NEW_SCREEN]: {screen: NewScreen},
  [PUBLIC_SCREEN]: {screen: PublicScreen},
  [PROFILE_SCREEN]: {screen: ProfileScreen},
  [CONTACT_NEW_SCREEN]: {screen: ContactNewScreen},
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
});

export default PrimaryNavigator;