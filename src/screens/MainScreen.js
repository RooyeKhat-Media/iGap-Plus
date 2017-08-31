import React, {Component} from 'react';
import {Text, View} from 'react-native';

class MainScreen extends Component {
  static navigationOptions = {
    title: 'Main Screen',
  }

  render() {
    return (
      <View><Text>Main Screen</Text></View>
    );
  }
}

MainScreen.propTypes = {
  // myProp: PropTypes.string.isRequired
};

export default MainScreen;