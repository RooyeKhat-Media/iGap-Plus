import React, {Component} from 'react';
import {connect} from 'react-redux';
import UserTwoStepChangeEmailComponent from '../../../components/User/TwoStep/ChangeEmail';
import {emailValidator, requiredValidator} from '../../../utils/validator';
import Api from '../../../modules/Api/index';
import {UserTwoStepVerificationChangeRecoveryEmail} from '../../../modules/Proto/index';
import {USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_EMAIL} from '../../../constants/methods/index';
import {
  ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_EMAIL_BAD_PAYLOAD,
  ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_EMAIL_CONFIRMED_BEFORE,
  ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_EMAIL_INTERNAL_SERVER_ERROR,
  ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_EMAIL_INVALID_PASSWORD,
  ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_EMAIL_MAX_TRY_LOCK,
  ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_EMAIL_NO_PASSWORD,
} from '../../../modules/Api/errors/index';
import {errorId} from '../../../modules/Error/index';

const rules = {
  email: [
    {validate: requiredValidator},
    {validate: emailValidator},
  ],
};

class UserTwoStepChangeEmailScreen extends Component {

  onSubmit = async (data, setError) => {
    const {currentPassword} = this.props.navigation.state.params;
    const changeEmail = new UserTwoStepVerificationChangeRecoveryEmail();
    changeEmail.setPassword(currentPassword);
    changeEmail.setEmail(data.email);
    await Api.invokeMapError(USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_EMAIL, changeEmail,
      setError, {
        [errorId(ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_EMAIL_BAD_PAYLOAD)]: 'email',
        [errorId(ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_EMAIL_INTERNAL_SERVER_ERROR)]: 'email',
        [errorId(ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_EMAIL_MAX_TRY_LOCK)]: 'email',
        [errorId(ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_EMAIL_NO_PASSWORD)]: 'email',
        [errorId(ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_EMAIL_INVALID_PASSWORD)]: 'email',
        [errorId(ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_EMAIL_CONFIRMED_BEFORE)]: 'email',
      });
    this.props.navigation.goBack();
  };

  render() {
    return (
      <UserTwoStepChangeEmailComponent
        formRules={rules}
        onSubmit={this.onSubmit}
        goBack={this.props.navigation.goBack}
      />
    );
  }
}

UserTwoStepChangeEmailScreen.navigationOptions = {
  header: null,
};

const mapStateToProps = state => {
  return {passwordDetail: state.methods.passwordDetail};
};

export default connect(mapStateToProps)(UserTwoStepChangeEmailScreen);