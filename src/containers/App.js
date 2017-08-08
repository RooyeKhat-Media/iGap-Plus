/**
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  Text,
  View,
} from 'react-native';

class App extends Component {
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