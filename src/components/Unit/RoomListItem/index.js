import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {FormattedRelative, injectIntl, intlShape} from 'react-intl';
import {MCIcon, RippleFeedback} from '../../BaseUI/index';
import Avatar from '../../../containers/Unit/Avatar';
import MessageStatus from '../../../containers/Unit/MessageStatus';
import styleSheet from './index.styles';
import {metricSuffix} from '../../../utils/core';
import {appTheme} from '../../../themes/default/index';
import MemoizeResponsiveStyleSheet from '../../../modules/Responsive/MemoizeResponsiveStyleSheet';
import Verify from '../../../assets/images/verify';

class RoomListItem extends React.PureComponent {
  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  render() {
    const styles = this.getStyles();
    const {roomId, roomTitle, roomPined, roomMute, selected, lastMessageTitle, lastMessageStatue, lastMessageTime, unreadCount, onPress, onLongPress, verified} = this.props;
    return (<RippleFeedback
      onPress={onPress}
      onLongPress={onLongPress}>
      <View
        style={(selected || roomPined) ? styles.wrapperBold : styles.wrapper}>
        <View style={styles.avatar}>
          <Avatar onPress={onPress} roomId={roomId} size={52}/>
        </View>
        <View style={styles.body}>
          <View style={styles.primary}>
            <View style={styles.rowTitle}>
              <Text numberOfLines={1} style={styles.title}>{roomTitle} </Text>
              {verified && <Verify style={styles.verifyStyle}/>}
            </View>
            <View style={styles.addOn}>
              <MessageStatus status={lastMessageStatue} size={15}/>
              <Text style={styles.timeTitle} numberOfLines={1}>
                {lastMessageTime ? (<FormattedRelative updateInterval={0} value={lastMessageTime * 1000}/>) : null}
              </Text>
            </View>
          </View>
          <View style={styles.secondary}>
            <Text numberOfLines={1} style={styles.description}>{lastMessageTitle}</Text>
            <View style={styles.addOn}>
              <Text numberOfLines={1}
                style={unreadCount ? (roomMute ? styles.muteBadgeStyle : styles.badgeStyle) : styles.hideStyle}>
                {unreadCount ? metricSuffix(unreadCount) : null}</Text>
              <Text style={roomPined ? styles.pinStyle : styles.hideStyle}><MCIcon name="pin" size={22}
                color={appTheme.icon}/></Text>
            </View>
          </View>
        </View>
      </View>
    </RippleFeedback>);
  }
}

RoomListItem.propTypes = {
  intl: intlShape.isRequired,
  roomId: PropTypes.string.isRequired,
  roomTitle: PropTypes.string.isRequired,
  roomPined: PropTypes.bool,
  roomMute: PropTypes.bool,
  selected: PropTypes.bool,
  lastMessageTitle: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  lastMessageStatue: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.bool,
  ]).isRequired,
  lastMessageTime: PropTypes.number,
  unreadCount: PropTypes.number,
  onPress: PropTypes.func,
  verified: PropTypes.bool,
};
export default injectIntl(RoomListItem);