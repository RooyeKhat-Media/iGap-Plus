import React from 'react';
import {DrawerNavigator, StackNavigator, TabNavigator} from 'react-navigation';
import {navigate} from './index';
import MainBottom from '../containers/MainBottom';
import MainDrawer from '../containers/MainDrawer';
import MainToolbar from '../containers/MainToolbar';

import {
  CONTACT_LIST_SCREEN,
  CONTACT_NEW_SCREEN,
  NEW_SCREEN,
  PRIMARY_DRAWER_NAVIGATION,
  PROFILE_SCREEN,
  PUBLIC_SCREEN,
  ROOM_LIST_SCREEN,
  SEARCH_SCREEN,
} from '../constants/navigators';
import ProfileScreen from '../screens/ProfileScreen';
import SearchScreen from '../screens/SearchScreen';
import RoomsScreen from '../screens/RoomListScreen';
import NewScreen from '../screens/NewScreen';
import PublicScreen from '../screens/PublicScreen';
import ContactListScreen from '../screens/Contact/ContactListScreen';

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
}, {
  tabBarComponent: props => (<MainBottom {...props}/>),
  tabBarPosition: 'bottom',
});

const drawerNav = DrawerNavigator({
  tabNav: {
    screen: tabNav,
  },
}, {
  contentComponent: props => (<MainDrawer {...props}/>),
});

const PrimaryNavigator = StackNavigator({
  [PRIMARY_DRAWER_NAVIGATION]: {
    screen: drawerNav,
    navigationOptions: {
      header: props => (<MainToolbar {...props}/>),
    },
  },
  [CONTACT_LIST_SCREEN]: {screen: ContactListScreen},
});

export default PrimaryNavigator;