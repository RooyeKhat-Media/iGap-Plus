import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {FormattedRelative, injectIntl, intlShape} from 'react-intl';
import {Badge, ListItem as BaseListItem} from '../../BaseUI/index';
import Avatar from '../../../containers/Unit/Avatar';
import MessageStatus from '../../../containers/Unit/MessageStatus';
import styles, {badgeStyle, hideStyle} from './index.styles';

class RoomListItem extends React.PureComponent {
  render() {
    const {roomId, roomTitle, lastMessageTitle, lastMessageStatue, lastMessageTime, unreadCount, onPress, onLongPress} = this.props;
    return (<BaseListItem
      onPress={onPress}
      onLongPress={onLongPress}
      leftElement={<Avatar roomId={roomId} size={52}/>}
      centerElement={{
        primaryText: roomTitle || ' ',
        secondaryText: lastMessageTitle || ' ',
      }}
      rightElement={
        <View style={styles.rightElementWrap}>
          <View style={styles.row}>
            <MessageStatus status={lastMessageStatue} size={15}/>
            <Text style={styles.timeTitle} numberOfLines={1}>
              {lastMessageTime ? (<FormattedRelative updateInterval={0} value={lastMessageTime * 1000}/>) : null}
            </Text>
          </View>
          <View style={styles.row}>
            <Badge style={unreadCount ? badgeStyle : hideStyle} text={unreadCount ? unreadCount.toString() : null}/>
          </View>
        </View>}
    />);
  }
}

RoomListItem.propTypes = {
  intl: intlShape.isRequired,
  roomId: PropTypes.string.isRequired,
  roomTitle: PropTypes.string.isRequired,
  lastMessageTitle: PropTypes.string,
  lastMessageStatue: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.bool,
  ]).isRequired,
  lastMessageTime: PropTypes.number,
  unreadCount: PropTypes.number,
  onPress: PropTypes.func,

};
export default injectIntl(RoomListItem);