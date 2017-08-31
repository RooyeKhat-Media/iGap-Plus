import React, {Component} from 'react';
import {View} from 'react-native';
import {ActivityIndicator} from '../components/BaseUI';

class InitialScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }
}

InitialScreen.propTypes = {
  // myProp: PropTypes.string.isRequired
};

export default InitialScreen;