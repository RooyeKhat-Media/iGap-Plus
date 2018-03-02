import React, {Component} from 'react';
import {connect} from 'react-redux';
import UserTwoStepChangeRecoveryQuestionComponent from '../../../components/User/TwoStep/ChangeRecoveryQuestion';
import {requiredValidator} from '../../../utils/validator';
import Api from '../../../modules/Api/index';
import {UserTwoStepVerificationChangeRecoveryQuestion} from '../../../modules/Proto/index';
import {USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_QUESTION} from '../../../constants/methods/index';
import {
  ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_QUESTION_BAD_PAYLOAD,
  ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_QUESTION_INTERNAL_SERVER_ERROR,
  ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_QUESTION_INVALID_PASSWORD,
  ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_QUESTION_MAX_TRY_LOCK,
  ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_QUESTION_NO_PASSWORD,
} from '../../../modules/Api/errors/index';
import {errorId} from '../../../modules/Error/index';

const rules = {
  question_one: [
    {validate: requiredValidator},
  ],
  answer_one: [
    {validate: requiredValidator},
  ],
  question_two: [
    {validate: requiredValidator},
  ],
  answer_two: [
    {validate: requiredValidator},
  ],
};

class UserTwoStepChangeRecoveryQuestionScreen extends Component {

  onSubmit = async (data, setError) => {
    const {currentPassword} = this.props.navigation.state.params;
    const changeRecoveryQuestion = new UserTwoStepVerificationChangeRecoveryQuestion();
    changeRecoveryQuestion.setPassword(currentPassword);
    changeRecoveryQuestion.setQuestionOne(data.question_one);
    changeRecoveryQuestion.setAnswerOne(data.answer_one);
    changeRecoveryQuestion.setQuestionTwo(data.question_two);
    changeRecoveryQuestion.setAnswerTwo(data.answer_two);
    await Api.invokeMapError(USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_QUESTION, changeRecoveryQuestion,
      setError, {
        [errorId(ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_QUESTION_BAD_PAYLOAD)]: 'question_one',
        [errorId(ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_QUESTION_INTERNAL_SERVER_ERROR)]: 'question_one',
        [errorId(ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_QUESTION_MAX_TRY_LOCK)]: 'question_one',
        [errorId(ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_QUESTION_NO_PASSWORD)]: 'question_one',
        [errorId(ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_QUESTION_INVALID_PASSWORD)]: 'question_one',
      });
    this.props.navigation.goBack();
  };

  render() {
    const {passwordDetail} = this.props;
    return (
      <UserTwoStepChangeRecoveryQuestionComponent
        formRules={rules}
        passwordDetail={passwordDetail}
        onSubmit={this.onSubmit}
        goBack={this.props.navigation.goBack}
      />
    );
  }
}

UserTwoStepChangeRecoveryQuestionScreen.navigationOptions = {
  header: null,
};

const mapStateToProps = state => {
  return {passwordDetail: state.methods.passwordDetail || {}};
};

export default connect(mapStateToProps)(UserTwoStepChangeRecoveryQuestionScreen);