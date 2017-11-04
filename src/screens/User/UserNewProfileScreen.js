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
import {
  ERROR_USER_PROFILE_SET_NICKNAME_BAD_PAYLOAD,
  ERROR_USER_PROFILE_SET_NICKNAME_INTERNAL_SERVER_ERROR,
} from '../../modules/Api/errors/index';
import {errorId} from '../../modules/Error/index';

const rules = {
  nickName: [
    {validate: requiredValidator},
    {validate: stringValidator, options: {min: 5}},
  ],
};

class UserNewProfileScreen extends Component {

  handleFormData = async (formData, setError) => {

    const userProfile = new UserProfileSetNickname();
    userProfile.setNickname(formData.nickName);


    await Api.invokeMapError(
      USER_PROFILE_SET_NICKNAME,
      userProfile,
      setError,
      {
        [errorId(ERROR_USER_PROFILE_SET_NICKNAME_BAD_PAYLOAD, 1)]: 'nickName',
        [errorId(ERROR_USER_PROFILE_SET_NICKNAME_INTERNAL_SERVER_ERROR)]: 'nickName',
      }
    );
    goMainScreen();

  };

  render() {
    return (
      <UserNewProfileComponent
        formRules={rules}
        handleFormData={this.handleFormData}
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