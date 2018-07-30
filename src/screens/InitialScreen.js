import React, {Component} from 'react';
import {View} from 'react-native';
import {ActivityIndicator} from '../components/BaseUI';
import {appTheme} from '../themes/default/index';

class InitialScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: appTheme.wrapperBackground,
      }}>
        <ActivityIndicator size="large" color="#3298ee"/>
      </View>
    );
  }
}

InitialScreen.propTypes = {
  // myProp: PropTypes.string.isRequired
};

export default InitialScreen;