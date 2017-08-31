/**
 * @flow
 */

import React, {Component} from 'react';
import {injectIntl, intlShape} from 'react-intl';
import UserTwoStepForgetComponent from '../../../components/User/TwoStep/Forget';
import {UserTwoStepVerificationGetPasswordDetail} from '../../../modules/Proto/index';
import {USER_TWO_STEP_VERIFICATION_GET_PASSWORD_DETAIL} from '../../../constants/methods/index';
import Api from '../../../modules/Api/index';

class UserTwoStepRecoveryByEmailScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hasConfirmedEmail: false,
    };
  }

  componentDidMount() {
    let getPasswordDetail = new UserTwoStepVerificationGetPasswordDetail();
    Api.invoke(USER_TWO_STEP_VERIFICATION_GET_PASSWORD_DETAIL, getPasswordDetail)
      .then((response) => {
        this.setState({
          hasConfirmedEmail: response.getHasConfirmedRecoveryEmail(),
        });
      });
  }

  render() {
    const {hasConfirmedEmail} = this.state;
    return (
      <UserTwoStepForgetComponent
        hasConfirmedEmail={hasConfirmedEmail}
        recoveryByEmail={this.recoveryByEmail}
        recoveryByQuestionAndAnswer={this.recoveryByQuestionAndAnswer}
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