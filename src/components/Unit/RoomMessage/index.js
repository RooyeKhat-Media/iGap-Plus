import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {injectIntl, intlShape} from 'react-intl';
import {Proto} from '../../../modules/Proto/index';
import LogBox from './LoxBox';
import OwnerBox from './OwnerBox';
import ChatBox from './ChatBox';
import GroupBox from './GroupBox';
import ChannelBox from './ChannelBox';

class RoomMessage extends React.Component {

  renderContent = () => {
    const {message, authorHash, roomType, onMessagePress, onMessageLongPress} = this.props;

    if (roomType === Proto.Room.Type.CHANNEL) {
      return (<ChannelBox onMessagePress={onMessagePress} onMessageLongPress={onMessageLongPress} message={message} showText={false}/>);
    } else if (message.authorHash === authorHash) {
      return (<OwnerBox onMessagePress={onMessagePress} onMessageLongPress={onMessageLongPress} message={message} showText={true}/>);
    } else if (roomType === Proto.Room.Type.CHAT) {
      return (<ChatBox onMessagePress={onMessagePress} onMessageLongPress={onMessageLongPress} message={message} showText={true}/>);
    } else if (roomType === Proto.Room.Type.GROUP) {
      return (<GroupBox onMessagePress={onMessagePress} onMessageLongPress={onMessageLongPress} message={message} showText={true}/>);
    }

    return null;
  };

  render() {
    const {message, selected, onMessagePress, onMessageLongPress} = this.props;

    if (message.messageType === Proto.RoomMessageType.LOG) {
      return (<LogBox message={message}/>);
    }

    return (<TouchableOpacity activeOpacity={selected ? 1 : 0.8} style={selected ? styles.selected : {}}
      delayLongPress={700}
      onPress={onMessagePress}
      onLongPress={onMessageLongPress}>
      {this.renderContent()}
    </TouchableOpacity>);
  }
}

RoomMessage.propTypes = {
  intl: intlShape.isRequired,
  message: PropTypes.object.isRequired,
  authorHash: PropTypes.string.isRequired,
  roomType: PropTypes.oneOf([
    Proto.Room.Type.CHAT,
    Proto.Room.Type.GROUP,
    Proto.Room.Type.CHANNEL,
  ]).isRequired,
};
export default injectIntl(RoomMessage);


const styles = StyleSheet.create({
  selected: {
    backgroundColor: '#d2dbff',
  },
});