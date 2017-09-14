import React from 'react';
import {goContactList, goNew, goProfile, goPublic, goRooms, goSearch} from '../navigators/AppNavigator';
import MainDrawerComponent from '../components/Main/Drawer';
import MainBottomNavigationComponent from '../components/Main/BottomNavigation';
import {DrawerNavigator, TabNavigator} from 'react-navigation';
import {
  MAIN_SCREEN,
  NEW_SCREEN,
  PROFILE_SCREEN,
  PUBLIC_SCREEN,
  ROOMS_SCREEN,
  SEARCH_SCREEN,
} from '../constants/navigators';
import ProfileScreen from './ProfileScreen';
import SearchScreen from './SearchScreen';
import RoomsScreen from './RoomsScreen';
import NewScreen from './NewScreen';
import PublicScreen from './PublicScreen';

const MainBottomNavigator = TabNavigator({
  [ROOMS_SCREEN]: {screen: RoomsScreen},
  [SEARCH_SCREEN]: {screen: SearchScreen},
  [NEW_SCREEN]: {screen: NewScreen},
  [PUBLIC_SCREEN]: {screen: PublicScreen},
  [PROFILE_SCREEN]: {screen: ProfileScreen},
}, {
  tabBarComponent: props =>
    (<MainBottomNavigationComponent
      index={props.navigationState.index}
      goRooms={goRooms} goSearch={goSearch}
      goNew={goNew} goPublic={goPublic}
      goProfile={goProfile}/>),
  tabBarPosition: 'bottom',
});

const DrawerScreen = DrawerNavigator({
  [MAIN_SCREEN]: {screen: MainBottomNavigator},
}, {
  contentComponent: props => (<MainDrawerComponent drawerClose={() => {
    props.navigation.navigate('DrawerClose');
  }} goContacts={goContactList}/>),
});

DrawerScreen.navigationOptions = {
  header: null,
};

export default DrawerScreen;