import React, {Component} from 'react';
import SettingComponent from '../../components/Setting/index';
import {USER_GET_DELETE_TOKEN} from '../../constants/methods/index';
import Api from '../../modules/Api/index';
import {UserGetDeleteToken} from '../../modules/Proto/index';
import {logout} from '../../utils/app';
import {goTowStepSetting, goUserVerifyDeleteScreen} from '../../navigators/PrimaryNavigator';

class SettingScreen extends Component {

  static navigationOptions = {
    header: null,
  };

  logOut = async () => {
    await logout();
  };

  deleteAccount = async () => {
    const token = await Api.invoke(USER_GET_DELETE_TOKEN, new UserGetDeleteToken());
    goUserVerifyDeleteScreen(token);
  };

  render() {
    return (
      <SettingComponent
        logOut={this.logOut}
        goTowStepSetting={goTowStepSetting}
        deleteAccount={this.deleteAccount}
        goBack={this.props.navigation.goBack}
      />
    );
  }
}

SettingScreen.propTypes = {};

export default SettingScreen;