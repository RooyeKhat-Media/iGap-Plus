import React, {Component} from 'react';
import {View} from 'react-native';
import MessageBox from '../MessageBox/index';
import Avatar from '../../../../containers/Unit/Avatar';
import AddonTime from '../MessageBox/AddonTime';
import PropTypes from 'prop-types';
import style from './index.styles';
import MemoizeResponsiveStyleSheet from '../../../../modules/Responsive/MemoizeResponsiveStyleSheet';

class ChatBox extends Component {

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(style);
  };

  render() {
    const {message, showText, onMessagePress, onMessageLongPress, goUserInfo} = this.props;
    const styles = this.getStyles();

    return (
      <View style={styles.container}>
        <View style={styles.avatarWrap}>
          <Avatar userId={message.authorUser} roomId={message.authorRoom} size={45} onPress={goUserInfo}/>
        </View>
        <View>
          <View style={styles.messageBox}>
            <MessageBox
              message={message}
              showText={showText}
              onMessagePress={onMessagePress}
              onMessageLongPress={onMessageLongPress}/>
          </View>
          <View style={styles.footerWrap}>
            <AddonTime createTime={message.createTime}/>
          </View>
        </View>
      </View>
    );
  }
}

ChatBox.propTypes = {
  message: PropTypes.object.isRequired,
  showText: PropTypes.bool.isRequired,
  onMessagePress: PropTypes.func.isRequired,
  onMessageLongPress: PropTypes.func.isRequired,
};

export default ChatBox;