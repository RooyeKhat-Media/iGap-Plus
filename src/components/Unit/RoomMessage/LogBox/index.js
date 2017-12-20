import {View} from 'react-native';
import Log from '../../../../containers/Unit/MessageLog';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import style from './index.styles';
import MemoizeResponsiveStyleSheet from '../../../../modules/Responsive/MemoizeResponsiveStyleSheet';

class LogBox extends Component {

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(style);
  };

  render() {
    const {message} = this.props;
    const styles = this.getStyles();

    return (
      <View style={styles.parent}>
        <View style={styles.container}>
          <Log message={message}/>
        </View>
      </View>
    );
  }
}

LogBox.propTypes = {
  message: PropTypes.object.isRequired,
};

export default LogBox;