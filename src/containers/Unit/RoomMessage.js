import React, {PureComponent} from 'react';
import Long from 'long';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getAuthorHash, getUserId, loadPeerRoom, shareMessage} from '../../utils/app';
import RoomMessageComponent from '../../components/Unit/RoomMessage/index';
import {getRoomMessage, getRoomMessageIsFirstUnread} from '../../selector/entities/roomMessage';
import {getPeerRoomId, sendMessage} from '../../utils/messenger';
import {goRoomInfo} from '../../navigators/SecondaryNavigator';
import {ChannelAddMessageReaction, Proto} from '../../modules/Proto/index';
import Api from '../../modules/Api/index';
import {CHANNEL_ADD_MESSAGE_REACTION} from '../../constants/methods/index';

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

  onShareMessagePress = () => {
    const {message} = this.props;
    shareMessage(message);
  };

  onSaveMessagePress = async () => {
    const {message} = this.props;
    const room = await loadPeerRoom(getUserId(true));
    if (room) {
      await sendMessage(room.id, null, null, null, null, message);
    }
  };

  onReactionPress = (reaction, forward = false) => {
    let {message} = this.props;
    if (forward) {
      message = message.forwardFrom;
    }

    if (!message || message.status === Proto.RoomMessageStatus.FAILED ||
      message.status === Proto.RoomMessageStatus.SENDING) {
      return;
    }
    const channelReaction = new ChannelAddMessageReaction();
    channelReaction.setRoomId(Long.fromString(message.roomId));
    channelReaction.setMessageId(message.longId);
    channelReaction.setReaction(reaction);
    return Api.invoke(CHANNEL_ADD_MESSAGE_REACTION, channelReaction);
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
        onMessageLongPress={this.onMessageLongPress}
        onShareMessagePress={this.onShareMessagePress}
        onSaveMessagePress={this.onSaveMessagePress}
        onReactionPress={this.onReactionPress}/>
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

