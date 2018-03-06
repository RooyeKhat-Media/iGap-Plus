import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getAuthorHash} from '../../utils/app';
import RoomMessageComponent from '../../components/Unit/RoomMessage/index';
import {getRoomMessage, getRoomMessageIsFirstUnread} from '../../selector/entities/roomMessage';
import {getPeerRoomId} from '../../utils/messenger';
import {goRoomInfo} from '../../navigators/SecondaryNavigator';
import {Proto} from '../../modules/Proto/index';

class RoomMessage extends PureComponent {

  getChildContext() {
    return {
      boxType: null,
    };
  }

  goUserInfo = async () => {
    const {message} = this.props;
    const roomId = await getPeerRoomId(message.authorUser);
    goRoomInfo(roomId);
  };
  onMessagePress = () => {
    const {message, onMessagePress} = this.props;
    onMessagePress(message);
  };
  onMessageLongPress = () => {
    const {message, onMessageLongPress} = this.props;
    onMessageLongPress(message);
  };

  render() {
    const authorHash = getAuthorHash();
    const {message, roomType, selected, isFirstUnread} = this.props;
    if (!message || message.deleted) {
      return null;
    }
    return (
      <RoomMessageComponent
        message={message}
        roomType={roomType}
        selected={selected}
        authorHash={authorHash}
        isFirstUnread={isFirstUnread}
        goUserInfo={this.goUserInfo}
        onMessagePress={this.onMessagePress}
        onMessageLongPress={this.onMessageLongPress}/>
    );
  }
}

RoomMessage.propTypes = {
  message: PropTypes.object.isRequired,
  roomId: PropTypes.string.isRequired,
  roomType: PropTypes.oneOf([
    Proto.Room.Type.CHAT,
    Proto.Room.Type.GROUP,
    Proto.Room.Type.CHANNEL,
  ]).isRequired,
  selected: PropTypes.bool,
  onMessagePress: PropTypes.func,
  onMessageLongPress: PropTypes.func,
  isFirstUnread: PropTypes.bool,
};

RoomMessage.childContextTypes = {
  boxType: PropTypes.number,
};

const makeMapStateToProps = () => {
  return (state, props) => {
    return {
      message: getRoomMessage(state, props),
      isFirstUnread: getRoomMessageIsFirstUnread(state, props),
    };
  };
};

export default connect(
  makeMapStateToProps
)(RoomMessage);

