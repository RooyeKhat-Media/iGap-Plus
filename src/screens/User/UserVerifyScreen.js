/**
 * @flow
 */

import React, {Component} from 'react';
import {requiredValidator, stringValidator} from '../../utils/validator';
import {injectIntl, intlShape} from 'react-intl';
import UserVerifyComponent from '../../components/User/Verify/index';

const rules = {
  code: [
    {validate: requiredValidator},
    {validate: stringValidator},
  ],
};

class UserVerifyScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <UserVerifyComponent
        formRules={rules}
      />
    );
  }
}


UserVerifyScreen.propTypes = {
  intl: intlShape.isRequired,
};
const UserVerifyScreenIntl = injectIntl(UserVerifyScreen);
UserVerifyScreenIntl.navigationOptions = {
  header: null,
};
export default UserVerifyScreenIntl;