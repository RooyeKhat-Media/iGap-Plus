import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, View} from 'react-native';
import {MemoizeResponsiveStyleSheet} from '../../../modules/Responsive';
import styleSheet from './index.style';
import {injectIntl, intlShape, FormattedRelative} from 'react-intl';
import i18n from '../../../i18n/index';
import {red, green, primary, textTitleStyle} from '../../../themes/default/index';
import {ListItem, MCIcon, FlatList, Toolbar} from '../../BaseUI/index';
import Avatar from '../../../containers/Unit/Avatar';
import ReturnToCall from '../../Call/ReturnToCall';
import {Proto} from '../../../modules/Proto/index';
import {toHHMMSS} from '../../../utils/core';
import {goCall} from '../../../navigators/SecondaryNavigator';

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
          rightElement={{menu: {icon: 'more-vert', labels: [intl.formatMessage(i18n.callListClearCallHistory)]}}}
          onRightElementPress={(result) => this.menuClick(result.index)}
        />
        <ReturnToCall/>
        <FlatList
          data={callLogList}
          keyExtractor={(item, index) => ('callLogList-' + index)}
          renderItem={({item}) => this.renderItem(item.item)}
          onEndReached={onLoadMore}
          onEndReachedThreshold={0.5}
        />
      </View>
    );
  }

  renderItem = (item) => {
    const styles = this.getStyles();
    const {statusIcon, statusColor} = this.statusIcon(item.status);

    return (
      <View style={styles.itemLayout}>
        <ListItem
          leftElement={<Avatar userId={item.peer.id.toString()} size={52}/>}
          centerElement={
            <View>
              <Text style={styles.titleText} numberOfLines={1}> {item.peer.displayName}</Text>
              <View style={styles.rowLayout}>
                <MCIcon name={statusIcon} color={statusColor} size={22} style={styles.icon}/>
                <FormattedRelative updateInterval={0} value={item.offerTime * 1000}/>
              </View>
            </View>}
          rightElement={
            <TouchableOpacity onPress={() => goCall(item.peer.id.toString(), false, item.type)}
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
  clearLogList: PropTypes.func.isRequired,
  onLoadMore: PropTypes.func.isRequired,
};

export default injectIntl(CallListComponent);