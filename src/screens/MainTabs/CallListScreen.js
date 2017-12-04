import React, {Component} from 'react';
import {Text, View} from 'react-native';

class CallListScreen extends Component {

  onMenuPressed = () => {
    this.props.navigation.navigate('DrawerOpen');
  }

  render() {
    return (
      <View style={{backgroundColor: 'blue'}}><Text>CallList Screen</Text></View>
    );
  }
}

export default CallListScreen;