/**
 * @flow
 */

import React, {Component} from 'react';
import {integerValidator, requiredValidator} from '../../utils/validator';
import {injectIntl, intlShape} from 'react-intl';
import UserVerifyComponent from '../../components/User/Verify/index';
import {UserRegister, UserVerify} from '../../modules/Proto/index';
import Api from '../../modules/Api/index';
import {USER_REGISTER, USER_VERIFY} from '../../constants/methods/index';
import {login, setUserToken} from '../../utils/app';
import {goMainScreen} from '../../navigators/AppNavigator';

const rules = {
  code: [
    {validate: requiredValidator},
    {validate: integerValidator},
  ],
};

class UserVerifyScreen extends Component {

  constructor(props) {
    super(props);
    const {resendDelay} = props.navigation.state.params;
    this.state = {
      codeError: '',
      resendDelay: resendDelay,
    };
  }

  tick() {
    this.setState((prevState) => {
      if (prevState.resendDelay === 0) {
        clearInterval(this.interval);
        return prevState;
      } else {
        return {
          resendDelay: prevState.resendDelay - 1,
        };
      }
    });
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }


  handleFormData = async (formData) => {
    const {username} = this.props.navigation.state.params;
    const {verifyCode} = formData;

    const userVerify = new UserVerify();
    userVerify.setUsername(username);
    userVerify.setCode(parseInt(verifyCode));

    try {
      const response = await Api.invoke(USER_VERIFY, userVerify);
      await setUserToken(response.getToken());
      await login();
      this.setState({codeError: ''});
      goMainScreen();
    } catch (e) {
      // TODO COMPLETE ERRORS
      this.setState({codeError: e.name + ': ' + e.message});
    }
  }

  resendCode = async () => {
    const {resendParams} = this.props.navigation.state.params;
    try {
      const userRegister = new UserRegister();
      userRegister.setPhoneNumber(parseInt(resendParams.phoneNumber));
      userRegister.setCountryCode(resendParams.countryCode);
      const response = await Api.invoke(USER_REGISTER, userRegister);
      this.setState({
        resendDelay: response.getResendDelay(),
      });
      this.interval = setInterval(() => this.tick(), 1000);
    } catch (e) {
      this.setState({codeError: e.name + ': ' + e.message});
    }
  }

  render() {
    const {phoneNumber, method} = this.props.navigation.state.params;
    const {resendDelay, codeError} = this.state;
    return (
      <UserVerifyComponent
        formRules={rules}
        handleFormData={this.handleFormData}
        phoneNumber={phoneNumber}
        method={method}
        resendDelay={resendDelay}
        codeError={codeError}
        resendCode={this.resendCode}
      />
    );
  }
}


UserVerifyScreen.propTypes = {
  intl: intlShape.isRequired,
};
const UserVerifyScreenIntl = injectIntl(UserVerifyScreen);
UserVerifyScreenIntl.navigationOptions = {
  header: null,
};
export default UserVerifyScreenIntl;