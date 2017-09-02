import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {
  goUserNewProfileScreen,
  goUserTwoStepRecoveryByEmailScreen,
  goUserTwoStepRecoveryByQuestionScreen,
} from '../navigators/AppNavigator';
import {Button} from 'react-native-material-ui';
import {connect} from 'react-redux';

class MainScreen extends Component {
  static navigationOptions = {
    title: 'Main Screen',
  };

  recoveryByEmail = () => {
    goUserTwoStepRecoveryByEmailScreen();
  };

  recoveryByQuestionAndAnswer = () => {
    goUserTwoStepRecoveryByQuestionScreen();
  };

  userNewProfileScreen = () => {
    goUserNewProfileScreen();
  };


  render() {

    const {nickName} = this.props;
    return (
      <View>
        <Text>{nickName}</Text>
        <Button raised accent
          onPress={this.userNewProfileScreen}
          text="New Profile"/>

        <Text>Main Screen</Text>
        <Button raised accent
          onPress={this.recoveryByEmail}
          text="Recovery By Email"/>

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
const mapStateToProps = state => {
  return {
    nickName: state.methods.nickName,
  };
};
export default connect(
  mapStateToProps,
)(MainScreen);