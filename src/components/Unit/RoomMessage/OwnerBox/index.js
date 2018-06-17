import React, {Component} from 'react';
import {Icon} from '../../../BaseUI';
import {View} from 'react-native';
import MessageBox from '../MessageBox/index';
import AddonTime from '../MessageBox/AddonTime';
import PropTypes from 'prop-types';
import style from './index.styles';
import MemoizeResponsiveStyleSheet from '../../../../modules/Responsive/MemoizeResponsiveStyleSheet';
import {BOX_TYPE_OWNER} from '../../../../modules/DimensionCalculator/index';
import MessageStatus from '../../../../containers/Unit/MessageStatus';
import {appTheme} from '../../../../themes/default/index';

class OwnerBox extends Component {

  getChildContext() {
    return {boxType: BOX_TYPE_OWNER};
  }

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(style);
  };

  render() {
    const {message, showText, onMessagePress, onMessageLongPress, onReactionPress} = this.props;
    const styles = this.getStyles();

    return (
      <View style={styles.container}>
        <View style={styles.messageBox}>
          <MessageBox
            message={message}
            showText={showText}
            onMessagePress={onMessagePress}
            onMessageLongPress={onMessageLongPress}
            onReactionPress={onReactionPress}/>
        </View>
        <View style={styles.footerWrapper}>
          <View style={styles.footerTimeWrap}>
            {message.edited && (<Icon size={15} name="mode-edit" color={appTheme.icon}/>)}
            <AddonTime createTime={message.createTime}/>
          </View>
          <MessageStatus status={message.status} size={15}/>
        </View>
      </View>
    );
  }
}

OwnerBox.propTypes = {
  message: PropTypes.object.isRequired,
  showText: PropTypes.bool.isRequired,
  onMessagePress: PropTypes.func.isRequired,
  onMessageLongPress: PropTypes.func.isRequired,
  onReactionPress: PropTypes.func.isRequired,
};

OwnerBox.childContextTypes = {
  boxType: PropTypes.number,
};

export default OwnerBox;