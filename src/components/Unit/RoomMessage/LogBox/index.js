import {View} from 'react-native';
import Log from '../../../../containers/Unit/MessageLog';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styleSheet from './index.styles';
import {MemoizeResponsiveStyleSheet} from '../../../../modules/Responsive';

class LogBox extends Component {

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
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