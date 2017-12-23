import React from 'react';
import {Text, View} from 'react-native';
import styles from './index.styles';
import {connect} from 'react-redux';

import ChannelBox from '../ChannelBox/index';
import MessageAtomBox from '../../../../containers/Unit/MessageAtomBox';
import {Proto} from '../../../../modules/Proto/index';
import {getEntitiesRoomMessage} from '../../../../selector/entities/roomMessage';
import ReplyTo from './ReplyTo';

class MessageBox extends React.Component {
  render() {
    const {message, replyToMessage, showText, onMessagePress, onMessageLongPress} = this.props;
    const forwardFrom = message.forwardFrom;

    let forward = null;
    let main = null;

    if (forwardFrom) {
      if (forwardFrom.channelViewsLabel) {
        forward = (
          <ChannelBox
            onMessagePress={onMessagePress}
            onMessageLongPress={onMessageLongPress}
            message={forwardFrom}
            showText={false}
            roomId={forwardFrom.roomId}/>);
      } else {
        forward = (
          <MessageAtomBox
            onMessagePress={onMessagePress}
            onMessageLongPress={onMessageLongPress}
            message={forwardFrom}
            showText={true}/>);
      }
    }

    if (!forwardFrom || (forwardFrom && (message.messageType !== Proto.RoomMessageType.TEXT || message.message))) {
      main = (<MessageAtomBox
        onMessagePress={onMessagePress}
        onMessageLongPress={onMessageLongPress}
        message={message}
        showText={showText}/>);
    }

    return (
      <View style={[styles.container]}>
        {forward && (<View>
          <Text>Forward from ...</Text>
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