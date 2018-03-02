import React, {Component} from 'react';
import {connect} from 'react-redux';
import UserTwoStepSettingComponent from '../../../components/User/TwoStep/Setting';
import Api from '../../../modules/Api/index';
import {requiredValidator, stringValidator} from '../../../utils/validator';
import {
  goTwoStepChangeEmail,
  goTwoStepChangeHint,
  goTwoStepChangeRecoveryQuestion,
  goTwoStepSetPassword,
  goTwoStepVerifyEmail,
} from '../../../navigators/PrimaryNavigator';
import {
  USER_TWO_STEP_VERIFICATION_CHECK_PASSWORD,
  USER_TWO_STEP_VERIFICATION_GET_PASSWORD_DETAIL,
  USER_TWO_STEP_VERIFICATION_UNSET_PASSWORD,
} from '../../../constants/methods/index';
import ServerError from '../../../modules/Error/ServerError';
import {
  ERROR_USER_TWO_STEP_VERIFICATION_CHECK_PASSWORD_BAD_PAYLOAD,
  ERROR_USER_TWO_STEP_VERIFICATION_CHECK_PASSWORD_INTERNAL_SERVER_ERROR,
  ERROR_USER_TWO_STEP_VERIFICATION_CHECK_PASSWORD_INVALID_PASSWORD,
  ERROR_USER_TWO_STEP_VERIFICATION_CHECK_PASSWORD_MAX_TRY_LOCK,
  ERROR_USER_TWO_STEP_VERIFICATION_CHECK_PASSWORD_NO_PASSWORD,
  ERROR_USER_TWO_STEP_VERIFICATION_GET_PASSWORD_DETAIL_NO_PASSWORD,
} from '../../../modules/Api/errors/index';
import {
  UserTwoStepVerificationCheckPassword,
  UserTwoStepVerificationGetPasswordDetail,
  UserTwoStepVerificationUnsetPassword,
} from '../../../modules/Proto/index';
import {errorId} from '../../../modules/Error/index';
import {goUserTwoStepForgetScreen} from '../../../navigators/AppNavigator';

const rules = {
  password: [
    {validate: requiredValidator},
    {validate: stringValidator, options: {min: 2}},
  ],
};

const SETTING_STATE = {
  LOADING: 'loading',
  SET_PASSWORD: 'setPassword',
  CHECK_PASSWORD: 'checkPassword',
  SETTING_MENU: 'settingMenu',
};

class UserTwoStepSettingScreen extends Component {

  constructor(args) {
    super(args);
    this.state = {
      currentState: SETTING_STATE.LOADING,
    };
  }

  async componentDidMount() {
    let currentState;
    try {
      const passwordDetail = new UserTwoStepVerificationGetPasswordDetail();
      await Api.invoke(USER_TWO_STEP_VERIFICATION_GET_PASSWORD_DETAIL, passwordDetail);
      currentState = SETTING_STATE.CHECK_PASSWORD;
    } catch (e) {
      if (e instanceof ServerError && e.errorResponse.getMajorCode() === ERROR_USER_TWO_STEP_VERIFICATION_GET_PASSWORD_DETAIL_NO_PASSWORD) {
        currentState = SETTING_STATE.SET_PASSWORD;
      }
    }
    this.setState({currentState});
  }

  checkPassword = async (data, setError) => {
    const checkPassword = new UserTwoStepVerificationCheckPassword();
    checkPassword.setPassword(data.password);
    await Api.invokeMapError(
      USER_TWO_STEP_VERIFICATION_CHECK_PASSWORD,
      checkPassword, setError, {
        [errorId(ERROR_USER_TWO_STEP_VERIFICATION_CHECK_PASSWORD_BAD_PAYLOAD)]: 'password',
        [errorId(ERROR_USER_TWO_STEP_VERIFICATION_CHECK_PASSWORD_INTERNAL_SERVER_ERROR)]: 'password',
        [errorId(ERROR_USER_TWO_STEP_VERIFICATION_CHECK_PASSWORD_INVALID_PASSWORD)]: 'password',
        [errorId(ERROR_USER_TWO_STEP_VERIFICATION_CHECK_PASSWORD_MAX_TRY_LOCK)]: 'password',
        [errorId(ERROR_USER_TWO_STEP_VERIFICATION_CHECK_PASSWORD_NO_PASSWORD)]: 'password',
      });
    this.setPasswordState(data.password);
  };

  setPasswordState = (password) => {
    this.setState({password, currentState: SETTING_STATE.SETTING_MENU});
  };

  goSetPassword = () => {
    goTwoStepSetPassword(this.setPasswordState);
  };

  goChangePassword = () => {
    const {password} = this.state;
    goTwoStepSetPassword(this.setPasswordState, password);
  };

  goChangeEmail = () => {
    const {password} = this.state;
    goTwoStepChangeEmail(password);
  };

  goChangeHint = () => {
    const {password} = this.state;
    goTwoStepChangeHint(password);
  };
  goChangeRecoveryQuestion = () => {
    const {password} = this.state;
    goTwoStepChangeRecoveryQuestion(password);
  };

  deleteTwoStep = async () => {
    const {password} = this.state;
    const unsetPassword = new UserTwoStepVerificationUnsetPassword();
    unsetPassword.setPassword(password);
    await Api.invoke(USER_TWO_STEP_VERIFICATION_UNSET_PASSWORD, unsetPassword);
    this.props.navigation.goBack();
  };

  render() {
    const {currentState} = this.state;
    const {passwordDetail} = this.props;

    return (
      <UserTwoStepSettingComponent
        SETTING_STATE={SETTING_STATE}
        formRules={rules}
        currentState={currentState}
        passwordDetail={passwordDetail}
        checkPassword={this.checkPassword}
        geTwoStepSetPassword={this.goSetPassword}
        geTwoStepChangePassword={this.goChangePassword}
        geTwoStepChangeEmail={this.goChangeEmail}
        geTwoStepChangeHint={this.goChangeHint}
        goChangeRecoveryQuestion={this.goChangeRecoveryQuestion}
        goVerifyEmail={goTwoStepVerifyEmail}
        deleteTwoStep={this.deleteTwoStep}
        goForgetScreen={goUserTwoStepForgetScreen}
        goBack={this.props.navigation.goBack}
      />
    );
  }
}

UserTwoStepSettingScreen.navigationOptions = {
  header: null,
};

const mapStateToProps = state => {
  return {passwordDetail: state.methods.passwordDetail};
};

export default connect(mapStateToProps)(UserTwoStepSettingScreen);