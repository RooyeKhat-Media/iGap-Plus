import React, {Component} from 'react';
import {connect} from 'react-redux';
import UserTwoStepChangeHintComponent from '../../../components/User/TwoStep/ChangeHint';
import {requiredValidator} from '../../../utils/validator';
import Api from '../../../modules/Api/index';
import {UserTwoStepVerificationChangeHint} from '../../../modules/Proto/index';
import {USER_TWO_STEP_VERIFICATION_CHANGE_HINT} from '../../../constants/methods/index';
import {
  ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_HINT_BAD_PAYLOAD,
  ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_HINT_INTERNAL_SERVER_ERROR,
  ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_HINT_INVALID_PASSWORD,
  ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_HINT_MAX_TRY_LOCK,
  ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_HINT_NO_PASSWORD,
} from '../../../modules/Api/errors/index';
import {errorId} from '../../../modules/Error/index';

const rules = {
  hint: [
    {validate: requiredValidator},
  ],
};

class UserTwoStepChangeHintScreen extends Component {

  onSubmit = async (data, setError) => {
    const {currentPassword} = this.props.navigation.state.params;
    const changeHint = new UserTwoStepVerificationChangeHint();
    changeHint.setPassword(currentPassword);
    changeHint.setHint(data.hint);
    await Api.invokeMapError(USER_TWO_STEP_VERIFICATION_CHANGE_HINT, changeHint,
      setError, {
        [errorId(ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_HINT_BAD_PAYLOAD)]: 'hint',
        [errorId(ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_HINT_INTERNAL_SERVER_ERROR)]: 'hint',
        [errorId(ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_HINT_MAX_TRY_LOCK)]: 'hint',
        [errorId(ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_HINT_NO_PASSWORD)]: 'hint',
        [errorId(ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_HINT_INVALID_PASSWORD)]: 'hint',
      });
    this.props.navigation.goBack();
  };

  render() {
    return (
      <UserTwoStepChangeHintComponent
        formRules={rules}
        onSubmit={this.onSubmit}
        goBack={this.props.navigation.goBack}
      />
    );
  }
}

UserTwoStepChangeHintScreen.navigationOptions = {
  header: null,
};

const mapStateToProps = state => {
  return {passwordDetail: state.methods.passwordDetail};
};

export default connect(mapStateToProps)(UserTwoStepChangeHintScreen);