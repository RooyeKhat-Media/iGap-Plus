import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, View} from 'react-native';
import {MemoizeResponsiveStyleSheet} from '../../../modules/Responsive';
import styleSheet from './index.style';
import {FormattedRelative, injectIntl, intlShape} from 'react-intl';
import i18n from '../../../i18n/index';
import {green, primary, red, textTitleStyle} from '../../../themes/default/index';
import {FlatList, ListItem, MCIcon, Toolbar} from '../../BaseUI/index';
import Avatar from '../../../containers/Unit/Avatar';
import ReturnToCall from '../../Call/ReturnToCall';
import {Proto} from '../../../modules/Proto/index';
import {toHHMMSS} from '../../../utils/core';
import {goCall} from '../../../navigators/SecondaryNavigator';
import UserListItem from '../../../containers/Unit/UserListItem';
import {APP_MODAL_ID_PRIMARY} from '../../../constants/app';
import PopupMenu from '../../BaseUI/PopupMenu/index';

class CallListComponent extends Component {
  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  menuClick = (index) => {
    switch (index) {
      case 0:
        this.props.clearLogList();
        break;
    }
  };

  render() {
    const styles = this.getStyles();
    const {intl, callLogList, onLoadMore} = this.props;

    return (
      <View style={styles.root}>
        <Toolbar
          centerElement={<Text style={textTitleStyle}>{intl.formatMessage(i18n.callListRecentCall)}</Text>}
          rightElement={(<PopupMenu actionList={[
            intl.formatMessage(i18n.callListClearCallHistory),
          ]}
          type={APP_MODAL_ID_PRIMARY}
          onPress={(result) => this.menuClick(result)}/>)}
        />
        <ReturnToCall/>
        <FlatList
          data={callLogList}
          keyExtractor={(item, index) => ('callLogList-' + item.id)}
          renderItem={({item}) => <UserListItem userId={item.peerId.toString()} item={item}
            render={(props) => this.renderItem(props)}/>}
          onEndReached={onLoadMore}
          onEndReachedThreshold={1}
        />
      </View>
    );
  }

  onCallPress = (peerId, type) => {
    const {permission} = this.props;
    if ((type === Proto.SignalingOffer.Type.VOICE_CALLING && permission.voice)
      || (type === Proto.SignalingOffer.Type.VIDEO_CALLING && permission.video)) {
      goCall(peerId, false, type);
    }
  };

  renderItem = (props) => {
    const {item, user} = props;
    const styles = this.getStyles();
    const {statusIcon, statusColor} = this.statusIcon(item.status);

    return (
      <View style={styles.itemLayout}>
        <ListItem
          leftElement={<Avatar userId={item.peerId.toString()} size={52}/>}
          centerElement={
            <View>
              <Text style={styles.titleText} numberOfLines={1}> {user.displayName}</Text>
              <View style={styles.rowLayout}>
                <MCIcon name={statusIcon} color={statusColor} size={22} style={styles.icon}/>
                <FormattedRelative updateInterval={0} value={item.offerTime * 1000}/>
              </View>
            </View>}
          rightElement={
            <TouchableOpacity onPress={() => this.onCallPress(item.peerId.toString(), item.type)}
              style={styles.rightElement}>
              <MCIcon name={this.callTypeIcon(item.type)} size={30} style={styles.CallTypeIcon}/>
              <Text> {toHHMMSS(item.duration)}</Text>
            </TouchableOpacity>}
        />
      </View>
    );
  };


  statusIcon(status) {
    let statusIcon, statusColor;
    switch (status) {
      case Proto.SignalingGetLogResponse.SignalingLog.Status.MISSED:
        statusIcon = 'phone-missed';
        statusColor = red;
        break;
      case Proto.SignalingGetLogResponse.SignalingLog.Status.CANCELED :
        statusIcon = 'phone-hangup';
        statusColor = red;
        break;
      case Proto.SignalingGetLogResponse.SignalingLog.Status.INCOMING :
        statusIcon = 'phone-incoming';
        statusColor = primary;
        break;
      case Proto.SignalingGetLogResponse.SignalingLog.Status.OUTGOING :
        statusIcon = 'phone-outgoing';
        statusColor = green;
        break;
    }
    return {
      statusIcon,
      statusColor,
    };
  }

  callTypeIcon(type) {
    let typeIcon;
    switch (type) {
      case Proto.SignalingOffer.Type.VIDEO_CALLING:
        typeIcon = 'video';
        break;
      case Proto.SignalingOffer.Type.VOICE_CALLING :
        typeIcon = 'phone';
        break;
    }
    return typeIcon;
  }
}

CallListComponent.propTypes = {
  intl: intlShape.isRequired,
  callLogList: PropTypes.array.isRequired,
  permission: PropTypes.object.isRequired,
  clearLogList: PropTypes.func.isRequired,
  onLoadMore: PropTypes.func.isRequired,
};

export default injectIntl(CallListComponent);