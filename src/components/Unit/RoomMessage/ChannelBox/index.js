import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {black600, red} from '../../../../themes/default/index';
import {connect} from 'react-redux';
import {getRoom} from '../../../../selector/entities/room';
import MessageBox from '../MessageBox/index';
import {MCIcon, IconToggle} from '../../../BaseUI/index';
import AddonTime from '../MessageBox/AddonTime';
import Avatar from '../../../../containers/Unit/Avatar';
import styles from './index.styles';
import {BOX_TYPE_CHANNEL} from '../../../../modules/DimensionCalculator/index';
import RichTextView from '../../../../modules/RichTextView/index';

class ChannelBox extends Component {

  state = {
    saveMessageState: 'default',
  };

  getChildContext() {
    return {boxType: this.context.boxType ? this.context.boxType : BOX_TYPE_CHANNEL};
  }

  saveMessagePress = async () => {
    const {onSaveMessagePress} = this.props;
    try {
      this.setState({saveMessageState: 'loading'});
      await onSaveMessagePress();
      this.setState({saveMessageState: 'default'});
    } catch (e) {
      this.setState({saveMessageState: 'failed'});
    }
  };

  render() {
    const {saveMessageState} = this.state;
    const {room, message, onMessagePress, onMessageLongPress, showText, isForwarded, onShareMessagePress} = this.props;

    return (
      <View style={styles.container}>

        <View style={styles.layoutHeader}>
          <View style={styles.avatarWrap}>
            <Avatar roomId={message.roomId} size={45}/>
          </View>
          {room && <Text style={styles.textTitle}>{room.title}</Text>}
          <MCIcon color={black600} name="share-variant" size={20} onPress={onShareMessagePress}/>

          {saveMessageState === 'default' &&
          (<IconToggle color={black600} name="cloud-upload" size={25} onPress={this.saveMessagePress} style={styles.bookmark}/>)}

          {saveMessageState === 'loading' &&
          (<IconToggle color={black600} name="hourglass-empty" size={25} style={styles.bookmark}/>)}

          {saveMessageState === 'failed' &&
          (<IconToggle color={red} name="remove-circle" size={25} onPress={this.saveMessagePress} style={styles.bookmark}/>)}

        </View>

        <View style={styles.messageWrapper}>
          <MessageBox
            isForwarded={isForwarded}
            message={message}
            showText={showText}
            onMessagePress={onMessagePress}
            onMessageLongPress={onMessageLongPress}/>
          <RichTextView style={styles.textMessage} rawText={message.message}/>
        </View>

        <View style={styles.layoutChannelInfo}>
          <Text style={styles.textSeen}>{message.channelViewsLabel}</Text>
          <MCIcon color={black600} name="eye" size={22}/>
          <Text style={styles.textUPDown}>{message.channelThumbsUpLabel}</Text>
          <MCIcon color={black600} name="thumb-up" size={20} onPress={() => alert('up')}/>
          <Text style={styles.textUPDown}>{message.channelThumbsDownLabel}</Text>
          <MCIcon color={black600} name="thumb-down" size={20} onPress={() => alert('down')}/>
          <Text numberOfLines={1} style={styles.textSignature}>{message.channelSignature}</Text>
          <AddonTime createTime={message.createTime}/>
        </View>
      </View>
    );
  }
}

ChannelBox.propTypes = {
  roomId: PropTypes.string,
  isForwarded: PropTypes.bool,
  message: PropTypes.object.isRequired,
  showText: PropTypes.bool.isRequired,
  onMessagePress: PropTypes.func.isRequired,
  onMessageLongPress: PropTypes.func.isRequired,
};

ChannelBox.childContextTypes = {
  boxType: PropTypes.number,
};

ChannelBox.contextTypes = {
  boxType: PropTypes.number,
};

const mapStateToProps = (state, props) => {
  return {
    room: getRoom(state, props),
  };
};

export default connect(mapStateToProps)(ChannelBox);