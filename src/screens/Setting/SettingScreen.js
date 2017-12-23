import React, {Component} from 'react';
import SettingComponent from '../../components/Setting/index';
import {USER_GET_DELETE_TOKEN} from '../../constants/methods/index';
import Api from '../../modules/Api/index';
import {UserGetDeleteToken} from '../../modules/Proto/index';
import {goUserVerifyDeleteScreen} from '../../navigators/AppNavigator';
import {logout} from '../../utils/app';

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
        goBack={this.props.navigation.goBack}
        logOut={this.logOut}
        deleteAccount={this.deleteAccount}
      />
    );
  }
}

SettingScreen.propTypes = {};

export default SettingScreen;