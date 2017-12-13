import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {getAuthorHash} from '../../utils/app';
import RoomMessageComponent from '../../components/Unit/RoomMessage/index';
import {getRoomMessage} from '../../selector/entities/roomMessage';
import {getPeerRoomId} from '../../utils/messenger';
import {goRoomInfo} from '../../navigators/SecondaryNavigator';

class RoomMessage extends PureComponent {

  onMessagePress = () => {
    const {message, onMessagePress} = this.props;
    onMessagePress(message);
  };
  onMessageLongPress = () => {
    const {message, onMessageLongPress} = this.props;
    onMessageLongPress(message);
  };

  goUserInfo = async () => {
    const {message} = this.props;
    const roomId = await getPeerRoomId(message.authorUser);
    goRoomInfo(roomId);
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
        goUserInfo={this.goUserInfo}
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

