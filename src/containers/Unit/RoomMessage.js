import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAuthorHash} from '../../utils/app';
import RoomMessageComponent from '../../components/Unit/RoomMessage/index';
import {getRoomMessage} from '../../selector/entities/roomMessage';

class RoomMessage extends Component {

  onMessagePress = () => {
    const {message, onMessagePress} = this.props;
    onMessagePress(message.id);
  };
  onMessageLongPress = () => {
    const {message, onMessageLongPress} = this.props;
    onMessageLongPress(message.id);
  };

  render() {
    const authorHash = getAuthorHash();
    const {message, roomType, selected} = this.props;

    if (!message || message.deleted) {
      return null;
    }

    return (
      <RoomMessageComponent
        authorHash={authorHash}
        roomType={roomType}
        selected={selected}
        onMessagePress={this.onMessagePress}
        onMessageLongPress={this.onMessageLongPress}
        message={message}/>
    );
  }
}


const makeMapStateToProps = () => {
  return (state, props) => {
    return {
      message: getRoomMessage(state, props),
    };
  };
};


export default connect(
  makeMapStateToProps
)(RoomMessage);

