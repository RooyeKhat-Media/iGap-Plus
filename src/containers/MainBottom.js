import React, {Component} from 'react';
import MainBottomComponent from '../components/MainBottom/index';
import {goCallList, goNearby, goNew, goProfile, goRoomList} from '../navigators/PrimaryNavigator';

class MainBottom extends Component {
  render() {
    return (
      <MainBottomComponent index={this.props.navigationState.index}
        goRooms={goRoomList} goNearby={goNearby}
        goNew={goNew} goCallList={goCallList}
        goProfile={goProfile}/>
    );
  }
}

export default MainBottom;