/**
 * @flow
 */

import React, {Component} from 'react';
import {injectIntl, intlShape} from 'react-intl';
import UserTwoStepRecoveryByQuestionComponent from '../../../components/User/TwoStep/RecoveryByQuestion';
import {
  UserTwoStepVerificationGetPasswordDetail,
  UserTwoStepVerificationRecoverPasswordByAnswers,
} from '../../../modules/Proto/index';
import {
  USER_TWO_STEP_VERIFICATION_GET_PASSWORD_DETAIL,
  USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_ANSWERS,
} from '../../../constants/methods/index';
import Api from '../../../modules/Api/index';
import {requiredValidator} from '../../../utils/validator';
import {login, setUserToken} from '../../../utils/app';
import {goMainScreen} from '../../../navigators/AppNavigator';
import {errorId} from '../../../modules/Error/index';
import {
  ERROR_USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_ANSWERS_BAD_PAYLOAD,
  ERROR_USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_ANSWERS_FORBIDDEN,
  ERROR_USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_ANSWERS_INTERNAL_SERVER_ERROR,
  ERROR_USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_ANSWERS_INVALID_ANSWERS,
  ERROR_USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_ANSWERS_MAX_TRY_LOCK,
  ERROR_USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_ANSWERS_NO_PASSWORD,
} from '../../../modules/Api/errors/index';

const rules = {
  question1: [
    {validate: requiredValidator},
  ],
  question2: [
    {validate: requiredValidator},
  ],
};

class UserTwoStepRecoveryByQuestionScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      question1: '',
      question2: '',
    };
  }

  componentDidMount() {
    let getPasswordDetail = new UserTwoStepVerificationGetPasswordDetail();
    Api.invoke(USER_TWO_STEP_VERIFICATION_GET_PASSWORD_DETAIL, getPasswordDetail)
      .then((response) => {
        this.setState({
          question1: response.getQuestionOne(),
          question2: response.getQuestionTwo(),
        });
      });
  }

  handleFormData = async (formData, setError) => {
    const {navigation} = this.props;
    const {needLogin} = navigation.state.params;
    const recoveryPasswordByAnswers = new UserTwoStepVerificationRecoverPasswordByAnswers();
    recoveryPasswordByAnswers.setAnswerOne(formData.question1);
    recoveryPasswordByAnswers.setAnswerTwo(formData.question2);
    const response = await Api.invokeMapError(
      USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_ANSWERS,
      recoveryPasswordByAnswers,
      setError, {
        [errorId(ERROR_USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_ANSWERS_BAD_PAYLOAD)]: 'question1',
        [errorId(ERROR_USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_ANSWERS_INTERNAL_SERVER_ERROR)]: 'question1',
        [errorId(ERROR_USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_ANSWERS_MAX_TRY_LOCK)]: 'question1',
        [errorId(ERROR_USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_ANSWERS_INVALID_ANSWERS)]: 'question1',
        [errorId(ERROR_USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_ANSWERS_NO_PASSWORD)]: 'question1',
        [errorId(ERROR_USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_ANSWERS_FORBIDDEN)]: 'question1',
      });
    if (needLogin) {
      await setUserToken(response.getToken());
      await login();
      goMainScreen();
    } else {
      navigation.goBack();
    }
  };

  render() {
    const {question1, question2, errorQuestion1, errorQuestion2} = this.state;
    return (
      <UserTwoStepRecoveryByQuestionComponent
        formRules={rules}
        question1={question1}
        question2={question2}
        errorQuestion1={errorQuestion1}
        errorQuestion2={errorQuestion2}
        handleFormData={this.handleFormData}
        goBack={this.props.navigation.goBack}
      />
    );
  }
}


UserTwoStepRecoveryByQuestionScreen.propTypes = {
  intl: intlShape.isRequired,
};
const UserTwoStepRecoveryByQuestionScreenIntl = injectIntl(UserTwoStepRecoveryByQuestionScreen);
UserTwoStepRecoveryByQuestionScreenIntl.navigationOptions = {
  header: null,
};
export default UserTwoStepRecoveryByQuestionScreenIntl;