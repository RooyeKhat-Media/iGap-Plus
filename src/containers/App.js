/**
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  Text,
  View,
} from 'react-native';
import Api from '../modules/Api';

class App extends Component {
  componentDidMount() {
    Api.instance;
  }

  render() {
    return (
      <View>
        <Text>
          iGap+ {Platform.OS} Client
        </Text>
      </View>
    );
  }
}

export default App;