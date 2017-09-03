import React, {Component} from 'react';
import {
  goUserNewProfileScreen,
  goUserTwoStepRecoveryByEmailScreen,
  goUserTwoStepRecoveryByQuestionScreen,
} from '../navigators/AppNavigator';
import MainComponent from '../components/Main';
import MainDrawer from '../components/Main/Drawer';
import {connect} from 'react-redux';
import {DrawerNavigator} from 'react-navigation';
import {MAIN_SCREEN} from '../constants/navigators';

class MainScreen extends Component {
  render() {
    return (
      <MainComponent />
    );
  }
}

const mapStateToProps = state => {
  return {
    nickName: state.methods.nickName,
  };
};

let DrawerScreen = connect(
  mapStateToProps,
)(MainScreen);
DrawerScreen = DrawerNavigator({
  [MAIN_SCREEN]: {screen: DrawerScreen},
}, {
  contentComponent: props => (<MainDrawer/>),
});
DrawerScreen.navigationOptions = {
  header: null,
};
export default DrawerScreen;
