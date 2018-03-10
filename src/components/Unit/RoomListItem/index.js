import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {FormattedRelative, injectIntl, intlShape} from 'react-intl';
import {ListItem as BaseListItem, MCIcon} from '../../BaseUI/index';
import Avatar from '../../../containers/Unit/Avatar';
import MessageStatus from '../../../containers/Unit/MessageStatus';
import styles, {badgeStyle, boldListItemStyle, hideStyle, muteBadgeStyle, pinedListItemStyle} from './index.styles';
import {metricSuffix} from '../../../utils/core';

class RoomListItem extends React.PureComponent {
  render() {
    const {roomId, roomTitle, roomPined, roomMute, selected, lastMessageTitle, lastMessageStatue, lastMessageTime, unreadCount, onPress, onLongPress} = this.props;
    return (<BaseListItem
      style={(selected || roomPined) ? pinedListItemStyle : boldListItemStyle}
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
            <Text numberOfLines={1} style={unreadCount ? (roomMute ? muteBadgeStyle.container : badgeStyle.container) : hideStyle.container}>
              {unreadCount ? metricSuffix(unreadCount) : null}</Text>
            <Text style={roomPined ? styles.pinStyle : hideStyle.container}><MCIcon name="pin" size={22}/></Text>
          </View>
        </View>}
    />);
  }
}

RoomListItem.propTypes = {
  intl: intlShape.isRequired,
  roomId: PropTypes.string.isRequired,
  roomTitle: PropTypes.string.isRequired,
  roomPined: PropTypes.bool,
  roomMute: PropTypes.bool,
  selected: PropTypes.bool,
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