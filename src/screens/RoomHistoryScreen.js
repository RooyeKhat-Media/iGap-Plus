import React, {Component} from 'react';
import Api from '../modules/Api/index';
import {ClientGetRoom, ClientGetRoomHistory} from '../modules/Proto/index';
import {CLIENT_GET_ROOM, CLIENT_GET_ROOM_HISTORY} from '../constants/methods/index';
import RoomHistoryComponent from '../components/RoomHistory';

class RoomHistoryScreen extends Component {

  state = {
    loading: true,
    room: null,
    messageList: [],
  };

  async componentDidMount() {
    const {id} = this.props.navigation.state.params;

    const clientGetRoom = new ClientGetRoom();
    clientGetRoom.setRoomId(id);
    const clientGetRoomResponse = await Api.invoke(CLIENT_GET_ROOM, clientGetRoom);
    const currentRoom = clientGetRoomResponse.getRoom();
    this.setState({loading: false, room: currentRoom});

    const clientRoomHistory = new ClientGetRoomHistory();
    clientRoomHistory.setRoomId(currentRoom.getId());
    clientRoomHistory.setLimit(100);

    /**
     * @type {ProtoClientGetRoomHistoryResponse}
     */
    const clientRoomHistoryResponse = await Api.invoke(CLIENT_GET_ROOM_HISTORY, clientRoomHistory);
    this.setState({messageList: clientRoomHistoryResponse.getMessageList()});
  }

  render() {
    const {room, loading, messageList} = this.state;
    if (loading) {
      return null;
    }
    return (
      <RoomHistoryComponent
        room={room}
        messageList={messageList}
        goBack={this.props.navigation.goBack}
      />
    );
  }
}

export default RoomHistoryScreen;