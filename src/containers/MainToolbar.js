import React, {Component} from 'react';
import {Toolbar} from '../components/BaseUI';

class MainToolbar extends Component {
  render() {
    return (
      <Toolbar
        leftElement="menu"
        onLeftElementPress={() => {
          this.props.navigation.navigate('DrawerOpen');
        }}
        centerElement="iGap+"/>
    );
  }
}

export default MainToolbar;