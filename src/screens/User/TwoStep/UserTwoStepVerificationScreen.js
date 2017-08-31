/**
 * @flow
 */

import React, {Component} from 'react';
import {injectIntl, intlShape} from 'react-intl';
import UserTwoStepVerificationComponent from '../../../components/User/TwoStep/Verification/index';
import {requiredValidator} from '../../../utils/validator';
import {
  UserTwoStepVerificationGetPasswordDetail,
  UserTwoStepVerificationVerifyPassword,
} from '../../../modules/Proto/index';
import {
  USER_TWO_STEP_VERIFICATION_GET_PASSWORD_DETAIL,
  USER_TWO_STEP_VERIFICATION_VERIFY_PASSWORD,
} from '../../../constants/methods/index';
import Api from '../../../modules/Api/index';
import {login, setUserToken} from '../../../utils/app';
import {goMainScreen, goUserTwoStepForgetScreen} from '../../../navigators/AppNavigator';

const rules = {
  password: [
    {validate: requiredValidator},
  ],
};

class UserTwoStepVerificationScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      passwordError: '',
      hint: '',
    };
  }

  componentDidMount() {
    let getPasswordDetail = new UserTwoStepVerificationGetPasswordDetail();
    Api.invoke(USER_TWO_STEP_VERIFICATION_GET_PASSWORD_DETAIL, getPasswordDetail)
      .then((response) => {
        this.setState({
          hint: response.getHint(),
        });
      });
  }

  handleFormData = async (formData) => {
    try {
      this.setState({passwordError: ''});
      const verifyPassword = new UserTwoStepVerificationVerifyPassword();
      verifyPassword.setPassword(formData.password);

      const response = await Api.invoke(USER_TWO_STEP_VERIFICATION_VERIFY_PASSWORD, verifyPassword);
      await setUserToken(response.getToken());
      await login();
      goMainScreen();
      this.setState({passwordError: ''});
    } catch (e) {
      // TODO COMPLETE ERRORS
      this.setState({passwordError: e.name + ': ' + e.message});
    }
  }
  forgetPassword = async () => {
    goUserTwoStepForgetScreen();
  }

  render() {
    const {hint, passwordError} = this.state;
    return (
      <UserTwoStepVerificationComponent
        formRules={rules}
        handleFormData={this.handleFormData}
        forgetPassword={this.forgetPassword}
        hint={hint}
        passwordError={passwordError}
      />
    );
  }
}


UserTwoStepVerificationScreen.propTypes = {
  intl: intlShape.isRequired,
};
const UserTwoStepVerificationScreenIntl = injectIntl(UserTwoStepVerificationScreen);
UserTwoStepVerificationScreenIntl.navigationOptions = {
  header: null,
};
export default UserTwoStepVerificationScreenIntl;