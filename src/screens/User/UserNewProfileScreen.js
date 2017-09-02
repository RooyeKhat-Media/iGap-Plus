/**
 * @flow
 */

import React, {Component} from 'react';
import {requiredValidator, stringValidator} from '../../utils/validator';
import {injectIntl, intlShape} from 'react-intl';
import UserNewProfileComponent from '../../components/User/NewProfile';
import {UserProfileSetNickname} from '../../modules/Proto/index';
import Api from '../../modules/Api/index';
import {USER_PROFILE_SET_NICKNAME} from '../../constants/methods/index';
import {goMainScreen} from '../../navigators/AppNavigator';

const rules = {
  nickName: [
    {validate: requiredValidator},
    {validate: stringValidator, options: {min: 5}},
  ],
};

class UserNewProfileScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nickNameError: '',
    };
  }


  handleFormData = async (formData) => {

    const userProfile = new UserProfileSetNickname();
    userProfile.setNickname(formData.nickName);

    try {
      await Api.invoke(USER_PROFILE_SET_NICKNAME, userProfile);
      this.setState({nickName: ''});
      goMainScreen();
    } catch (e) {
      // TODO COMPLETE ERRORS
      this.setState({nickName: e.name + ': ' + e.message});
    }
  };

  render() {
    const {nickNameError} = this.state;
    return (
      <UserNewProfileComponent
        formRules={rules}
        handleFormData={this.handleFormData}
        nickNameError={nickNameError}
      />
    );
  }
}

UserNewProfileScreen.propTypes = {
  intl: intlShape.isRequired,
};
const UserNewProfileScreenIntl = injectIntl(UserNewProfileScreen);
UserNewProfileScreenIntl.navigationOptions = {
  header: null,
};
export default UserNewProfileScreenIntl;