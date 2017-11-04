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
import {
  ERROR_USER_TWO_STEP_VERIFICATION_VERIFY_PASSWORD_BAD_PAYLOAD,
  ERROR_USER_TWO_STEP_VERIFICATION_VERIFY_PASSWORD_FORBIDDEN,
  ERROR_USER_TWO_STEP_VERIFICATION_VERIFY_PASSWORD_INTERNAL_SERVER_ERROR,
  ERROR_USER_TWO_STEP_VERIFICATION_VERIFY_PASSWORD_INVALID_PASSWORD,
  ERROR_USER_TWO_STEP_VERIFICATION_VERIFY_PASSWORD_MAX_TRY_LOCK,
  ERROR_USER_TWO_STEP_VERIFICATION_VERIFY_PASSWORD_NO_PASSWORD,
} from '../../../modules/Api/errors/index';
import {errorId} from '../../../modules/Error/index';

const rules = {
  password: [
    {validate: requiredValidator},
  ],
};

class UserTwoStepVerificationScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
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

  handleFormData = async (formData, setError) => {
    const verifyPassword = new UserTwoStepVerificationVerifyPassword();
    verifyPassword.setPassword(formData.password);

    const response = await Api.invokeMapError(
      USER_TWO_STEP_VERIFICATION_VERIFY_PASSWORD,
      verifyPassword,
      setError,
      {
        [errorId(ERROR_USER_TWO_STEP_VERIFICATION_VERIFY_PASSWORD_BAD_PAYLOAD, 1)]: 'password',
        [errorId(ERROR_USER_TWO_STEP_VERIFICATION_VERIFY_PASSWORD_INTERNAL_SERVER_ERROR)]: 'password',
        [errorId(ERROR_USER_TWO_STEP_VERIFICATION_VERIFY_PASSWORD_MAX_TRY_LOCK)]: 'password',
        [errorId(ERROR_USER_TWO_STEP_VERIFICATION_VERIFY_PASSWORD_FORBIDDEN)]: 'password',
        [errorId(ERROR_USER_TWO_STEP_VERIFICATION_VERIFY_PASSWORD_NO_PASSWORD)]: 'password',
        [errorId(ERROR_USER_TWO_STEP_VERIFICATION_VERIFY_PASSWORD_INVALID_PASSWORD)]: 'password',
      }
    );
    await setUserToken(response.getToken());
    await login();
    goMainScreen();

  };
  forgetPassword = async () => {
    goUserTwoStepForgetScreen();
  };

  render() {
    const {hint} = this.state;
    return (
      <UserTwoStepVerificationComponent
        formRules={rules}
        handleFormData={this.handleFormData}
        forgetPassword={this.forgetPassword}
        hint={hint}
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