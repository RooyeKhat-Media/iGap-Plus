import React, {Component} from 'react';
import SettingComponent from '../../components/Setting/index';
import {USER_GET_DELETE_TOKEN, USER_SESSION_LOGOUT} from '../../constants/methods/index';
import Api from '../../modules/Api/index';
import {UserGetDeleteToken, UserSessionLogout} from '../../modules/Proto/index';
import {goUserRegisterScreen, goUserVerifyDeleteScreen} from '../../navigators/AppNavigator';

class SettingScreen extends Component {

  static navigationOptions = {
    header: null,
  };

  logOut = async () => {
    await  Api.invoke(USER_SESSION_LOGOUT, new UserSessionLogout());
    goUserRegisterScreen();
    // TODO [NEJATI] - 11/13/2017 9:46 AM -  clean db , state , cached variable like author hash , usrId , token and ...
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