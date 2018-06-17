import React, {Component} from 'react';
import {View} from 'react-native';
import {Icon} from '../../../BaseUI';
import MessageBox from '../MessageBox/index';
import Avatar from '../../../../containers/Unit/Avatar';
import AddonTime from '../MessageBox/AddonTime';
import PropTypes from 'prop-types';
import styleSheet from './index.styles';
import MemoizeResponsiveStyleSheet from '../../../../modules/Responsive/MemoizeResponsiveStyleSheet';
import {BOX_TYPE_CHAT} from '../../../../modules/DimensionCalculator/index';
import {appTheme} from '../../../../themes/default/index';

class ChatBox extends Component {

  getChildContext() {
    return {boxType: BOX_TYPE_CHAT};
  }

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  render() {
    const {message, showText, onMessagePress, onMessageLongPress, goUserInfo, onReactionPress} = this.props;
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
              onMessageLongPress={onMessageLongPress}
              onReactionPress={onReactionPress}/>
          </View>
          <View style={styles.footerWrap}>
            {message.edited && (<Icon size={15} name="mode-edit" color={appTheme.icon}/>)}
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
  onReactionPress: PropTypes.func.isRequired,
};

ChatBox.childContextTypes = {
  boxType: PropTypes.number,
};

export default ChatBox;