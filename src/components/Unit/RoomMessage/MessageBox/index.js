import React from 'react';
import {View} from 'react-native';
import styles from './index.styles';
import {connect} from 'react-redux';

import ChannelBox from '../ChannelBox/index';
import MessageAtomBox from '../../../../containers/Unit/MessageAtomBox';
import {Proto} from '../../../../modules/Proto/index';
import {getEntitiesRoomMessage} from '../../../../selector/entities/roomMessage';
import ReplyTo from './ReplyTo';
import ForwardFrom from './ForwardFrom';

class MessageBox extends React.PureComponent {
  render() {
    const {isForwarded, message, replyToMessage, showText, onMessagePress, onMessageLongPress, onReactionPress} = this.props;
    const forwardFrom = message.forwardFrom;

    let forward = null;
    let main = null;

    if (!isForwarded && forwardFrom) {
      if (forwardFrom.channelViewsLabel) {
        forward = (
          <ChannelBox
            isForwarded={true}
            onMessagePress={onMessagePress}
            onMessageLongPress={onMessageLongPress}
            message={forwardFrom}
            showText={false}
            roomId={forwardFrom.roomId}
            onReactionPress={onReactionPress}/>);
      } else {
        forward = (
          <MessageAtomBox
            isForwarded={true}
            onMessagePress={onMessagePress}
            onMessageLongPress={onMessageLongPress}
            message={forwardFrom}
            showText={true}/>);
      }
    }

    if (!forwardFrom || (forwardFrom && (message.messageType !== Proto.RoomMessageType.TEXT || message.message))) {
      main = (<MessageAtomBox
        isForwarded={isForwarded}
        onMessagePress={onMessagePress}
        onMessageLongPress={onMessageLongPress}
        message={message}
        showText={showText}/>);
    }

    return (
      <View style={[styles.container]}>
        {forward && (<View>
          <ForwardFrom userId={forwardFrom.authorUser} roomId={forwardFrom.authorRoom}/>
          {forward}
        </View>)}
        {replyToMessage ? (<ReplyTo message={replyToMessage}/>) : null}
        {main}
      </View>
    );
  }
}

const makeMapStateToProps = () => {
  return (state, props) => {
    return {
      replyToMessage: getEntitiesRoomMessage(state, props.message.replyTo),
    };
  };
};

export default connect(
  makeMapStateToProps
)(MessageBox);