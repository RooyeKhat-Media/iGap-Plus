import React, {Component} from 'react';
import {connect} from 'react-redux';
import makeGetRooms from '../selector/messenger/room';
import RoomListComponent from '../components/RoomList';
import {goRoomHistory} from '../navigators/SecondaryNavigator';

class RoomListScreen extends Component {

  state = {
    loading: true,
  };

  async componentDidMount() {
  }

  render() {
    const {roomList} = this.props;

    return (
      <RoomListComponent goRoom={goRoomHistory} roomList={roomList}/>
    );
  }
}

const makeMapStateToProps = () => {
  const getRooms = makeGetRooms();
  return (state) => {
    return {
      roomList: getRooms(state),
    };
  };
};


export default connect(
  makeMapStateToProps,
)(RoomListScreen);