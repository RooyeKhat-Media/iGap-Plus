import React, {Component} from 'react';
import {View} from 'react-native';
import MessageBox from '../MessageBox/index';
import AddonTime from '../MessageBox/AddonTime';
import PropTypes from 'prop-types';
import style from './index.styles';
import MemoizeResponsiveStyleSheet from '../../../../modules/Responsive/MemoizeResponsiveStyleSheet';

class OwnerBox extends Component {

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(style);
  };

  render() {
    const {message, showText, onMessagePress, onMessageLongPress} = this.props;
    const styles = this.getStyles();

    return (
      <View style={styles.container}>
        <View style={styles.messageBox}>
          <MessageBox
            message={message}
            showText={showText}
            onMessagePress={onMessagePress}
            onMessageLongPress={onMessageLongPress}/>
        </View>
        <AddonTime createTime={message.createTime}/>
      </View>
    );
  }
}

OwnerBox.propTypes = {
  message: PropTypes.object.isRequired,
  showText: PropTypes.bool.isRequired,
  onMessagePress: PropTypes.func.isRequired,
  onMessageLongPress: PropTypes.func.isRequired,
};

export default OwnerBox;