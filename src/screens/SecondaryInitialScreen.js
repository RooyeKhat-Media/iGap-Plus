import React, {Component} from 'react';
import {View} from 'react-native';
import {Button} from '../components/BaseUI';
import {goRoom} from '../navigators/SecondaryNavigator';

import Device from '../modules/Responsive/Device';
import {NORMAL_HEIGHT} from '../constants/screenBreakPoints';
import {responsive} from '../modules/Responsive';

class InitialScreen extends Component {
  render() {
    const {width} = Device.dimensions.window;
    if (width <= NORMAL_HEIGHT) {
      return null;
    } else {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Button text="goRoom" onPress={() => {
            goRoom();
          }}/>
        </View>
      );
    }
  }
}

InitialScreen.propTypes = {
  // myProp: PropTypes.string.isRequired
};
const ResponsiveInitialScreen = responsive(InitialScreen);
ResponsiveInitialScreen.navigationOptions = {
  header: null,
};

export default ResponsiveInitialScreen;