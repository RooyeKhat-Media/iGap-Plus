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

  handleFormData = async (formData) => {
    const {navigation} = this.props;
    const {needLogin} = navigation;
    try {
      const recoveryPasswordByAnswers = new UserTwoStepVerificationRecoverPasswordByAnswers();
      recoveryPasswordByAnswers.setAnswerOne(formData.question1);
      recoveryPasswordByAnswers.setAnswerTwo(formData.question2);
      const response = await Api.invoke(USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_ANSWERS, recoveryPasswordByAnswers);
      if (needLogin) {
        await setUserToken(response.getToken());
        await login();
        goMainScreen();
      } else {
        navigation.goBack();
      }
      this.setState({passwordError: ''});
    } catch (e) {
      // TODO COMPLETE ERRORS
      this.setState({errorQuestion1: e.name + ': ' + e.message});
      this.setState({errorQuestion2: e.name + ': ' + e.message});
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