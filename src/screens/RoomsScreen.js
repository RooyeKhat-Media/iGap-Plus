import React, {Component} from 'react';
import RoomsComponent from '../components/Rooms';
import {ClientGetRoomList} from '../modules/Proto/index';
import {CLIENT_GET_ROOM_LIST} from '../constants/methods/index';
import Api from '../modules/Api/index';
import {connect} from 'react-redux';

class RoomsScreen extends Component {

  state = {
    loading: true,
  }

  async componentDidMount() {
    const clientGteRoomList = new ClientGetRoomList();
    await Api.invoke(CLIENT_GET_ROOM_LIST, clientGteRoomList);
    this.setState({loading: false});

  }

  onMenuPressed = () => {
    this.props.navigation.navigate('DrawerOpen');
  }

  render() {
    const {roomList} = this.props;
    const {loading} = this.state;
    return (
      <RoomsComponent loading={loading} onMenuPressed={this.onMenuPressed} roomList={roomList}/>
    );
  }
}

const mapStateToProps = state => {
  return {
    roomList: state.methods.roomList,
  };
};
export default connect(
  mapStateToProps,
)(RoomsScreen);