import React, {Component} from 'react';
import {connect} from 'react-redux';
import UserTwoStepVerifyEmailComponent from '../../../components/User/TwoStep/VerifyEmail';
import {requiredValidator} from '../../../utils/validator';
import Api from '../../../modules/Api/index';
import {
  UserTwoStepVerificationResendVerifyEmail,
  UserTwoStepVerificationVerifyRecoveryEmail,
} from '../../../modules/Proto/index';
import {
  USER_TWO_STEP_VERIFICATION_RESEND_VERIFY_EMAIL,
  USER_TWO_STEP_VERIFICATION_VERIFY_RECOVERY_EMAIL,
} from '../../../constants/methods/index';
import {
  ERROR_USER_TWO_STEP_VERIFICATION_VERIFY_RECOVERY_EMAIL_BAD_PAYLOAD,
  ERROR_USER_TWO_STEP_VERIFICATION_VERIFY_RECOVERY_EMAIL_EXPIRED_TOKEN,
  ERROR_USER_TWO_STEP_VERIFICATION_VERIFY_RECOVERY_EMAIL_INTERNAL_SERVER_ERROR,
  ERROR_USER_TWO_STEP_VERIFICATION_VERIFY_RECOVERY_EMAIL_INVALID_TOKEN,
  ERROR_USER_TWO_STEP_VERIFICATION_VERIFY_RECOVERY_EMAIL_MAX_TRY_LOCK,
  ERROR_USER_TWO_STEP_VERIFICATION_VERIFY_RECOVERY_EMAIL_NO_PASSWORD,
} from '../../../modules/Api/errors/index';
import {errorId} from '../../../modules/Error/index';

const rules = {
  token: [
    {validate: requiredValidator},
  ],
};

class UserTwoStepVerifyRecoveryEmailScreen extends Component {

  onSubmit = async (data, setError) => {
    const verifyEmail = new UserTwoStepVerificationVerifyRecoveryEmail();
    verifyEmail.setToken(data.token);
    await Api.invokeMapError(USER_TWO_STEP_VERIFICATION_VERIFY_RECOVERY_EMAIL, verifyEmail,
      setError, {
        [errorId(ERROR_USER_TWO_STEP_VERIFICATION_VERIFY_RECOVERY_EMAIL_BAD_PAYLOAD)]: 'token',
        [errorId(ERROR_USER_TWO_STEP_VERIFICATION_VERIFY_RECOVERY_EMAIL_INTERNAL_SERVER_ERROR)]: 'token',
        [errorId(ERROR_USER_TWO_STEP_VERIFICATION_VERIFY_RECOVERY_EMAIL_MAX_TRY_LOCK)]: 'token',
        [errorId(ERROR_USER_TWO_STEP_VERIFICATION_VERIFY_RECOVERY_EMAIL_EXPIRED_TOKEN)]: 'token',
        [errorId(ERROR_USER_TWO_STEP_VERIFICATION_VERIFY_RECOVERY_EMAIL_NO_PASSWORD)]: 'token',
        [errorId(ERROR_USER_TWO_STEP_VERIFICATION_VERIFY_RECOVERY_EMAIL_INVALID_TOKEN)]: 'token',
      });
    this.props.navigation.goBack();
  };

  resendEmail = async () => {
    await Api.invoke(USER_TWO_STEP_VERIFICATION_RESEND_VERIFY_EMAIL, new UserTwoStepVerificationResendVerifyEmail());
  };

  render() {
    const {passwordDetail} = this.props;
    return (
      <UserTwoStepVerifyEmailComponent
        formRules={rules}
        onSubmit={this.onSubmit}
        resendEmail={this.resendEmail}
        passwordDetail={passwordDetail}
        goBack={this.props.navigation.goBack}
      />
    );
  }
}

UserTwoStepVerifyRecoveryEmailScreen.navigationOptions = {
  header: null,
};

const mapStateToProps = state => {
  return {passwordDetail: state.methods.passwordDetail};
};

export default connect(mapStateToProps)(UserTwoStepVerifyRecoveryEmailScreen);