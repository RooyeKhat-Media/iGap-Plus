import React, {Component} from 'react';
import RoomMessageComponent from '../../components/Unit/RoomMessage/index';
import {getAuthorHash} from '../../utils/app';
import {Proto} from '../../modules/Proto/index';
import {getFullMessage} from '../../selector/entities/roomMessage';
import {connect} from 'react-redux';

class RoomMessage extends Component {
  render() {
    let messageType = null;
    const authorHash = getAuthorHash();
    const {message, roomType} = this.props;

    if (!message || message.deleted) {
      return null;
    }
    if (message.messageType === Proto.RoomMessageType.LOG) {
      messageType = 'log';
    } else if (message.authorHash === authorHash) {
      messageType = 'owner';
    } else if (roomType === Proto.Room.Type.CHAT) {
      messageType = 'chat';
    } else if (roomType === Proto.Room.Type.GROUP) {
      messageType = 'group';
    } else if (roomType === Proto.Room.Type.CHANNEL) {
      messageType = 'channel';
    }

    return (
      <RoomMessageComponent
        message={message}
        messageType={messageType}/>
    );
  }
}


const makeMapStateToProps = () => {
  return (state, props) => {
    return {
      message: getFullMessage(state, props),
    };
  };
};

export default connect(
  makeMapStateToProps,
)(RoomMessage);

