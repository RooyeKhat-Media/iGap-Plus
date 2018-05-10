/**
 * @flow
 */

import React, {Component} from 'react';
import {injectIntl, intlShape} from 'react-intl';
import UserTwoStepRecoveryByEmailComponent from '../../../components/User/TwoStep/RecoveryByEmail';
import {
  UserTwoStepVerificationRecoverPasswordByToken,
  UserTwoStepVerificationRequestRecoveryToken,
} from '../../../modules/Proto/index';
import {
  USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_TOKEN,
  USER_TWO_STEP_VERIFICATION_REQUEST_RECOVERY_TOKEN,
} from '../../../constants/methods/index';
import Api from '../../../modules/Api/index';
import {requiredValidator} from '../../../utils/validator';
import {login, setUserToken} from '../../../utils/app';
import {goMainScreen} from '../../../navigators/AppNavigator';
import {errorId} from '../../../modules/Error/index';
import {
  ERROR_USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_TOKEN_BAD_PAYLOAD,
  ERROR_USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_TOKEN_EXPIRED_TOKEN,
  ERROR_USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_TOKEN_FORBIDDEN,
  ERROR_USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_TOKEN_INTERNAL_SERVER_ERROR,
  ERROR_USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_TOKEN_INVALID_TOKEN,
  ERROR_USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_TOKEN_MAX_TRY_LOCK,
  ERROR_USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_TOKEN_NO_PASSWORD,
} from '../../../modules/Api/errors/index';

const rules = {
  token: [
    {validate: requiredValidator},
  ],
};

class UserTwoStepRecoveryByEmailScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tokenError: '',
    };
  }

  handleFormData = async (formData, setError) => {
    const {navigation} = this.props;
    const {needLogin} = navigation.state.params;
    const recoveryPasswordByToken = new UserTwoStepVerificationRecoverPasswordByToken();
    recoveryPasswordByToken.setToken(formData.token);
    const response = await Api.invokeMapError(
      USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_TOKEN,
      recoveryPasswordByToken, setError, {
        [errorId(ERROR_USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_TOKEN_BAD_PAYLOAD)]: 'token',
        [errorId(ERROR_USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_TOKEN_INTERNAL_SERVER_ERROR)]: 'token',
        [errorId(ERROR_USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_TOKEN_MAX_TRY_LOCK)]: 'token',
        [errorId(ERROR_USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_TOKEN_EXPIRED_TOKEN)]: 'token',
        [errorId(ERROR_USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_TOKEN_INVALID_TOKEN)]: 'token',
        [errorId(ERROR_USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_TOKEN_NO_PASSWORD)]: 'token',
        [errorId(ERROR_USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_TOKEN_FORBIDDEN)]: 'token',
      });
    if (needLogin) {
      await setUserToken(response.getToken());
      await login();
      goMainScreen();
    } else {
      navigation.goBack();
    }
  };

  resendToken = async () => {
    try {
      const requestRecovery = new UserTwoStepVerificationRequestRecoveryToken();
      const response = await Api.invoke(USER_TWO_STEP_VERIFICATION_REQUEST_RECOVERY_TOKEN, requestRecovery);
      this.setState({
        emailPattern: response.getEmailPattern(),
      });
    } catch (e) {
      // TODO COMPLETE ERRORS
    }
  }

  render() {
    const {tokenError, emailPattern} = this.state;
    return (
      <UserTwoStepRecoveryByEmailComponent
        formRules={rules}
        tokenError={tokenError}
        emailPattern={emailPattern}
        resendToken={this.resendToken}
        handleFormData={this.handleFormData}
        goBack={this.props.navigation.goBack}
      />
    );
  }
}


UserTwoStepRecoveryByEmailScreen.propTypes = {
  intl: intlShape.isRequired,
};
const UserTwoStepRecoveryByEmailScreenIntl = injectIntl(UserTwoStepRecoveryByEmailScreen);
UserTwoStepRecoveryByEmailScreenIntl.navigationOptions = {
  header: null,
};
export default UserTwoStepRecoveryByEmailScreenIntl;