import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {black600} from '../../../../themes/default/index';
import {connect} from 'react-redux';
import {getRoom} from '../../../../selector/entities/room';
import MessageBox from '../MessageBox/index';
import {MCIcon} from '../../../BaseUI/index';
import AddonTime from '../MessageBox/AddonTime';
import Avatar from '../../../../containers/Unit/Avatar';
import styleSheet from './index.styles';
import MemoizeResponsiveStyleSheet from '../../../../modules/Responsive/MemoizeResponsiveStyleSheet';

class ChannelBox extends Component {

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  render() {
    const {room, message, onMessagePress, onMessageLongPress} = this.props;
    const styles = this.getStyles();

    return (
      <View style={styles.container}>

        <View style={styles.layoutHeader}>
          <View style={styles.avatarWrap}>
            <Avatar roomId={message.roomId} size={40}/>
          </View>
          {room && <Text style={styles.textTitle}>{room.title}</Text>}
          <MCIcon color={black600} name="share-variant" size={20} onPress={() => alert('share')}/>
          <MCIcon color={black600} name="bookmark-outline" size={20} onPress={() => alert('bookmark-outline')}
            style={styles.bookmark}/>
        </View>

        <View style={styles.messageWrapper}>
          <MessageBox
            message={message}
            showText={false}
            onMessagePress={onMessagePress}
            onMessageLongPress={onMessageLongPress}/>
          <Text style={styles.textMessage}>{message.message}</Text>
        </View>

        <View style={styles.layoutChannelInfo}>
          <Text style={styles.textSeen}>{message.channelViewsLabel}</Text>
          <MCIcon color={black600} name="eye" size={22}/>
          <Text style={styles.textUPDown}>{message.channelThumbsUpLabel}</Text>
          <MCIcon color={black600} name="thumb-up" size={20} onPress={() => alert('up')}/>
          <Text style={styles.textUPDown}>{message.channelThumbsDownLabel}</Text>
          <MCIcon color={black600} name="thumb-down" size={20} onPress={() => alert('down')}/>
          <Text style={styles.textSignature}>{message.channelSignature}</Text>
          <AddonTime createTime={message.createTime}/>
        </View>
      </View>
    );
  }
}

ChannelBox.propTypes = {
  roomId: PropTypes.string,
  message: PropTypes.object.isRequired,
  showText: PropTypes.bool.isRequired,
  onMessagePress: PropTypes.func.isRequired,
  onMessageLongPress: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => {
  return {
    room: getRoom(state, props),
  };
};

export default connect(mapStateToProps)(ChannelBox);