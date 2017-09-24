import React, {Component} from 'react';
import {Text, View} from 'react-native';

class RoomScreen extends Component {
  render() {
    const {id} = this.props.navigation.state.params;
    return (
      <View style={{backgroundColor: 'blue'}}><Text>Room id: {id}</Text></View>
    );
  }
}

export default RoomScreen;