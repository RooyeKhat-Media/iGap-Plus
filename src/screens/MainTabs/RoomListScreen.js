import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getRoomList} from '../../selector/messenger/room';
import RoomListComponent from '../../components/MainTabs/RoomList';
import {goRoomHistory} from '../../navigators/SecondaryNavigator';
import {initialRoomsState} from '../../modules/Messenger/Rooms/index';

class RoomListScreen extends Component {

  async componentDidMount() {
    await initialRoomsState();
  }

  onPressRoomListComponent = (room) => {
    goRoomHistory(room.id);
  };

  render() {
    const {roomList} = this.props;
    return (
      <RoomListComponent onPress={this.onPressRoomListComponent} roomList={roomList}/>
    );
  }
}

const makeMapStateToProps = () => {
  return (state) => {
    return {
      roomList: getRoomList(state),
    };
  };
};

export default connect(
  makeMapStateToProps,
)(RoomListScreen);