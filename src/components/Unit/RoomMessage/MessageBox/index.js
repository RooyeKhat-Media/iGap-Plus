import React from 'react';
import {Text, View} from 'react-native';
import styles from './index.styles';

import {Proto} from '../../../../modules/Proto/index';
import ChannelBox from '../ChannelBox';
import MessageAtomBox from '../../../../containers/Unit/MessageAtomBox';

class MessageBox extends React.Component {
  render() {
    const {message, showText, onMessagePress, onMessageLongPress} = this.props;
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
            showText={true}/>);
      } else {
        forward = (
          <MessageAtomBox
            onMessagePress={onMessagePress}
            onMessageLongPress={onMessageLongPress}
            message={forwardFrom}
            showText={true}/>);
      }
    }

    if (!forwardFrom || (forwardFrom && (forwardFrom.messageType !== Proto.RoomMessageType.TEXT || forwardFrom.message))) {
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
        {main}
      </View>
    );
  }
}

export default MessageBox;