/**
 * @flow
 */

import React, {Component} from 'react';
import {injectIntl, intlShape} from 'react-intl';
import UserVerifyComponent from '../../components/User/TwoStepVerification/index';

class UserTwoStepVerificationScreen extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <UserVerifyComponent/>
    );
  }
}


UserTwoStepVerificationScreen.propTypes = {
  intl: intlShape.isRequired,
};
const UserTwoStepVerificationScreenIntl = injectIntl(UserTwoStepVerificationScreen);
UserTwoStepVerificationScreenIntl.navigationOptions = {
  header: null,
};
export default UserTwoStepVerificationScreenIntl;