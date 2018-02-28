import React, {Component} from 'react';
import UserTwoStepSetPasswordComponent from '../../../components/User/TwoStep/SetPassword';
import Api from '../../../modules/Api/index';
import {emailValidator, requiredValidator, stringValidator} from '../../../utils/validator';
import {
  UserTwoStepVerificationGetPasswordDetail,
  UserTwoStepVerificationSetPassword,
} from '../../../modules/Proto/index';
import {
  USER_TWO_STEP_VERIFICATION_GET_PASSWORD_DETAIL,
  USER_TWO_STEP_VERIFICATION_SET_PASSWORD,
} from '../../../constants/methods/index';
import i18n from '../../../i18n/index';

const rules = {
  password: [
    {validate: requiredValidator},
    {validate: stringValidator, options: {min: 2}},
  ],
  confirmPassword: [
    {validate: requiredValidator},
    {validate: stringValidator, options: {min: 2}},
  ],
  hint: [
    {validate: requiredValidator},
  ],
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
  recovery_email: [
    {validate: emailValidator, options: {optional: true}},
  ],
};

const navState = [
  'password',
  'confirmPassword',
  'hint',
  'question_one',
  'question_two',
  'recovery_email',
];

class UserTwoStepSetPasswordScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentState: 0,
      formData: {},
    };
  }

  onSubmit = async (data, form) => {
    const {currentState} = this.state;
    let formData = {...this.state.formData};
    formData[navState[currentState]] = data[navState[currentState]];
    switch (currentState) {
      case 1:
        if (formData.password !== formData.confirmPassword) {
          return form.setError('confirmPassword', i18n.twoStepSetPasswordConfirmPasswordNotMatch);
        }
        break;
      case 3:
        formData['answer_one'] = data['answer_one'];
        break;
      case 4:
        formData['answer_two'] = data['answer_two'];
        break;
    }
    if (currentState === 5) {
      try {
        form.loadingOn();
        const setPassword = new UserTwoStepVerificationSetPassword();
        setPassword.setNewPassword(formData.password);
        setPassword.setHint(formData.hint);
        setPassword.setQuestionOne(formData.question_one);
        setPassword.setAnswerOne(formData.answer_one);
        setPassword.setQuestionTwo(formData.question_two);
        setPassword.setAnswerTwo(formData.answer_two);
        setPassword.setRecoveryEmail(formData.recovery_email);

        await Api.invoke(USER_TWO_STEP_VERIFICATION_SET_PASSWORD, setPassword);
        await Api.invoke(USER_TWO_STEP_VERIFICATION_GET_PASSWORD_DETAIL, new UserTwoStepVerificationGetPasswordDetail());
        this.props.navigation.state.params.setPasswordState(formData.password);

      } finally {
        form.loadingOff();
        this.props.navigation.goBack();
      }
    } else {
      this.setState({formData, currentState: currentState + 1});
    }
  };

  render() {
    const {currentState, formData} = this.state;
    return (
      <UserTwoStepSetPasswordComponent
        formRules={rules}
        currentState={currentState}
        formData={formData}
        onSubmit={this.onSubmit}
        goBack={this.props.navigation.goBack}
      />
    );
  }
}

UserTwoStepSetPasswordScreen.navigationOptions = {
  header: null,
};

export default UserTwoStepSetPasswordScreen;