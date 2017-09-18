import React, {Component} from 'react';
import MainBottomComponent from '../components/MainBottom/index';
import {goNew, goProfile, goPublic, goRooms, goSearch} from '../navigators/PrimaryNavigator';

class MainBottom extends Component {
  render() {
    return (
      <MainBottomComponent index={this.props.navigationState.index}
        goRooms={goRooms} goSearch={goSearch}
        goNew={goNew} goPublic={goPublic}
        goProfile={goProfile}/>
    );
  }
}

export default MainBottom;