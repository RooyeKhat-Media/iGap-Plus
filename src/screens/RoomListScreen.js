import React, {Component} from 'react';
import {ClientGetRoomList} from '../modules/Proto/index';
import {CLIENT_GET_ROOM_LIST} from '../constants/methods/index';
import Api from '../modules/Api/index';
import {connect} from 'react-redux';
import makeGetRooms from '../selector/messenger/room';

class RoomListScreen extends Component {

  state = {
    loading: true,
  };

  async componentDidMount() {
    const clientGetRoomList = new ClientGetRoomList();
    await Api.invoke(CLIENT_GET_ROOM_LIST, clientGetRoomList);
    this.setState({loading: false});
  }

  render() {
    const {roomList} = this.props;
    const {loading} = this.state;

    console.log('roomList', roomList);

    return null;

    // return (
    //   <RoomListComponent loading={loading} goRoom={goRoomHistory} roomList={roomList}/>
    // );
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