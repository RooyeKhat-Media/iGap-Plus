import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getRoomList} from '../selector/messenger/room';
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
      <RoomListComponent onPress={(id) => {
        goRoomHistory(id);
      }} roomList={roomList}/>
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