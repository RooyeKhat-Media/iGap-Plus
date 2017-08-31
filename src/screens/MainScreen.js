import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {goUserTwoStepRecoveryByEmailScreen, goUserTwoStepRecoveryByQuestionScreen} from '../navigators/AppNavigator';
import {Button} from 'react-native-material-ui';

class MainScreen extends Component {
  static navigationOptions = {
    title: 'Main Screen',
  }


  recoveryByEmail = () => {
    goUserTwoStepRecoveryByEmailScreen();
  };

  recoveryByQuestionAndAnswer = () => {
    goUserTwoStepRecoveryByQuestionScreen();
  };


  render() {
    return (
      <View>
        <Text>Main Screen</Text>

        <Button raised accent
          onPress={this.recoveryByQuestionAndAnswer}
          text="Recovery By Answer"/>
      </View>
    );
  }
}

MainScreen.propTypes = {
  // myProp: PropTypes.string.isRequired
};

export default MainScreen;