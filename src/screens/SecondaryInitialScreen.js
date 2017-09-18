import React, {Component} from 'react';
import {View} from 'react-native';
import {Button} from '../components/BaseUI';
import {goRoom} from '../navigators/SecondaryNavigator';

class InitialScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button text="goRoom" onPress={() => {
          console.log('Go Room Press');
          goRoom();
        }}/>
      </View>
    );
  }
}

InitialScreen.propTypes = {
  // myProp: PropTypes.string.isRequired
};

export default InitialScreen;