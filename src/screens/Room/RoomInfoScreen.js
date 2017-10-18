import React, {Component} from 'react';
import PropTypes from 'prop-types';
import RoomViewComponent from '../../components/Room/RoomInfo';
import {getRoom} from '../../selector/entities/room';
import {connect} from 'react-redux';
import putState from '../../modules/Entities/Rooms/index';
import {ClientCountRoomHistory} from '../../modules/Proto/index';
import {CLIENT_COUNT_ROOM_HISTORY} from '../../constants/methods/index';
import Api from '../../modules/Api/index';
import {getCountRoomHistory} from '../../selector/methods/client/index';

class RoomInfoScreen extends Component {

  async componentDidMount() {
    const {roomId} = this.props.navigation.state.params;
    await putState(roomId);
    const {room} = this.props;

    const clientCountRoomHistory = new ClientCountRoomHistory();
    clientCountRoomHistory.setRoomId(room.longId);

    await Api.invoke(CLIENT_COUNT_ROOM_HISTORY, clientCountRoomHistory);
  }

  render() {
    const {room, countRoomHistory} = this.props;
    return (
      <RoomViewComponent
        room={room}
        countRoomHistory={countRoomHistory}
        goBack={this.props.navigation.goBack}
      />
    );
  }
}

RoomInfoScreen.propTypes = {
  room: PropTypes.object,
  countRoomHistory: PropTypes.shape({
    media: PropTypes.number.isRequired,
    image: PropTypes.number.isRequired,
    video: PropTypes.number.isRequired,
    audio: PropTypes.number.isRequired,
    voice: PropTypes.number.isRequired,
    gif: PropTypes.number.isRequired,
    file: PropTypes.number.isRequired,
    url: PropTypes.number.isRequired,
  }),
};

const makeMapStateToProps = () => {
  return (state, props) => {
    return {
      room: getRoom(state, props),
      countRoomHistory: getCountRoomHistory(state, props),
    };
  };
};

export default connect(
  makeMapStateToProps,
)(RoomInfoScreen);