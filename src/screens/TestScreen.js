import React, {Component} from 'react';
import {Text, View} from 'react-native';

class TestScreen extends Component {
  static navigationOptions = {
    title: 'Test Screen',
  };

  render() {
    return (
      <View>
        <Text>Screen Test</Text>
      </View>
    );
  }
}

TestScreen.propTypes = {
  // myProp: PropTypes.string.isRequired
};

export default TestScreen;