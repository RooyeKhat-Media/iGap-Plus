/**
 * @flow
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {injectIntl, intlShape} from 'react-intl';
import UserTwoStepForgetComponent from '../../../components/User/TwoStep/Forget';
import {UserTwoStepVerificationGetPasswordDetail} from '../../../modules/Proto/index';
import {USER_TWO_STEP_VERIFICATION_GET_PASSWORD_DETAIL} from '../../../constants/methods/index';
import Api, {CLIENT_STATUS} from '../../../modules/Api/index';
import {
  goUserTwoStepRecoveryByEmailScreen,
  goUserTwoStepRecoveryByQuestionScreen,
} from '../../../navigators/AppNavigator';

class UserTwoStepForgetScreen extends Component {

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

  recoveryByEmail = () => {
    const {status} = this.props;
    goUserTwoStepRecoveryByEmailScreen(status !== CLIENT_STATUS.LOGGED_IN);
  };

  recoveryByQuestionAndAnswer = () => {
    const {status} = this.props;
    goUserTwoStepRecoveryByQuestionScreen(status !== CLIENT_STATUS.LOGGED_IN);
  };

  render() {
    const {hasConfirmedEmail} = this.state;
    return (
      <UserTwoStepForgetComponent
        hasConfirmedEmail={hasConfirmedEmail}
        recoveryByEmail={this.recoveryByEmail}
        recoveryByQuestionAndAnswer={this.recoveryByQuestionAndAnswer}
        goBack={this.props.navigation.goBack}
      />
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    status: state.api.status,
  };
};

UserTwoStepForgetScreen.propTypes = {
  intl: intlShape.isRequired,
};
const UserTwoStepForgetScreenIntl = injectIntl(UserTwoStepForgetScreen);
UserTwoStepForgetScreenIntl.navigationOptions = {
  header: null,
};
export default connect(
  mapStateToProps
)(UserTwoStepForgetScreenIntl);