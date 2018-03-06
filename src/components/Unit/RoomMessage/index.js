import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import {FormattedMessage, injectIntl, intlShape} from 'react-intl';
import {Proto} from '../../../modules/Proto/index';
import LogBox from './LogBox';
import OwnerBox from './OwnerBox';
import ChatBox from './ChatBox';
import GroupBox from './GroupBox';
import ChannelBox from './ChannelBox';
import i18n from '../../../i18n';

class RoomMessage extends React.PureComponent {

  renderContent = () => {
    const {message, authorHash, roomType, goUserInfo, onMessagePress, onMessageLongPress} = this.props;

    if (roomType === Proto.Room.Type.CHANNEL) {
      return (<ChannelBox
        roomId={message.roomId}
        message={message}
        showText={false}
        onMessagePress={onMessagePress}
        onMessageLongPress={onMessageLongPress}/>);

    } else if (message.authorHash === authorHash) {
      return (<OwnerBox
        message={message}
        showText={true}
        onMessagePress={onMessagePress}
        onMessageLongPress={onMessageLongPress}/>);

    } else if (roomType === Proto.Room.Type.CHAT) {
      return (<ChatBox
        message={message}
        showText={true}
        goUserInfo={goUserInfo}
        onMessagePress={onMessagePress}
        onMessageLongPress={onMessageLongPress}/>);

    } else if (roomType === Proto.Room.Type.GROUP) {
      return (<GroupBox
        message={message}
        showText={true}
        goUserInfo={goUserInfo}
        onMessagePress={onMessagePress}
        onMessageLongPress={onMessageLongPress}/>);
    }
    return null;
  };

  render() {
    const {message, selected, isFirstUnread, onMessagePress, onMessageLongPress} = this.props;

    if (message.messageType === Proto.RoomMessageType.LOG) {
      return (<LogBox message={message}/>);
    }

    return (<TouchableOpacity activeOpacity={selected ? 1 : 0.8} style={selected ? styles.selected : styles.baseStyle}
      delayLongPress={700}
      onPress={onMessagePress}
      onLongPress={onMessageLongPress}>
      {(isFirstUnread) && (<View style={styles.unreadBar}><FormattedMessage {...i18n.roomHistoryUnreadMessageLabel} /></View>)}
      {this.renderContent()}
    </TouchableOpacity>);
  }
}

RoomMessage.propTypes = {
  intl: intlShape.isRequired,
  message: PropTypes.object.isRequired,
  roomType: PropTypes.oneOf([
    Proto.Room.Type.CHAT,
    Proto.Room.Type.GROUP,
    Proto.Room.Type.CHANNEL,
  ]).isRequired,
  selected: PropTypes.bool,
  authorHash: PropTypes.string.isRequired,
  goUserInfo: PropTypes.func,
  onMessagePress: PropTypes.func,
  onMessageLongPress: PropTypes.func,
};
export default injectIntl(RoomMessage);

const styles = StyleSheet.create({
  baseStyle: {
    flex: 1,
  },
  selected: {
    flex: 1,
    backgroundColor: '#d2dbff',
  },
  unreadBar: {
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d2dbff',
  },
});