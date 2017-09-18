import React, {Component} from 'react';
import MainDrawerComponent from '../components/MainDrawer/index';
import {goContactList} from '../navigators/PrimaryNavigator';

class MainDrawer extends Component {
  render() {
    return (
      <MainDrawerComponent drawerClose={() => {
        this.props.navigation.navigate('DrawerClose');
      }} goContacts={goContactList}/>
    );
  }
}

export default MainDrawer;