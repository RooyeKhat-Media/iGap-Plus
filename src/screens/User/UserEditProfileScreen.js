import React, {Component} from 'react';
import UserEditProfileComponent from '../../components/User/EditProfile/index';
import {
  Proto,
  UserProfileCheckUsername,
  UserProfileGetBio,
  UserProfileGetEmail,
  UserProfileGetGender,
  UserProfileGetNickname,
  UserProfileSetBio,
  UserProfileSetEmail,
  UserProfileSetGender,
  UserProfileSetNickname,
  UserProfileUpdateUsername,
} from '../../modules/Proto/index';
import {
  USER_PROFILE_CHECK_USERNAME,
  USER_PROFILE_GET_BIO,
  USER_PROFILE_GET_EMAIL,
  USER_PROFILE_GET_GENDER,
  USER_PROFILE_GET_NICKNAME,
  USER_PROFILE_SET_BIO,
  USER_PROFILE_SET_EMAIL,
  USER_PROFILE_SET_GENDER,
  USER_PROFILE_SET_NICKNAME,
  USER_PROFILE_UPDATE_USERNAME,
} from '../../constants/methods/index';
import Api from '../../modules/Api/index';
import {connect} from 'react-redux';
import {getCurrentUser} from '../../selector/entities/registeredUser';
import {emailValidator, requiredValidator, stringValidator} from '../../utils/validator';
import i18n from '../../i18n';
import {errorId} from '../../modules/Error/index';
import {
  ERROR_USER_PROFILE_SET_BIO_BAD_PAYLOAD,
  ERROR_USER_PROFILE_SET_EMAIL_BAD_PAYLOAD,
  ERROR_USER_PROFILE_SET_GENDER_BAD_PAYLOAD,
  ERROR_USER_PROFILE_SET_NICKNAME_BAD_PAYLOAD,
  ERROR_USER_PROFILE_UPDATE_USERNAME_BAD_PAYLOAD,
  ERROR_USER_PROFILE_UPDATE_USERNAME_UPDATE_LOCK,
} from '../../modules/Api/errors/index';

const formRules = {
  email: [
    {validate: emailValidator, options: {optional: true}},
  ],
  nickName: [
    {validate: requiredValidator},
    {validate: stringValidator, options: {min: 3}},
  ],
  userName: [
    {validate: requiredValidator},
    {validate: stringValidator, options: {min: 5}},
  ],
  bio: [
    {validate: stringValidator},
  ],
};

class UserEditProfileScreen extends Component {

  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    formRules.userName.push({
      validate: this.checkUsername,
    });
  }

  async componentDidMount() {
    const promiseAll = Promise.all([
      Api.invoke(USER_PROFILE_GET_NICKNAME, new UserProfileGetNickname()),
      Api.invoke(USER_PROFILE_GET_EMAIL, new UserProfileGetEmail()),
      Api.invoke(USER_PROFILE_GET_BIO, new UserProfileGetBio()),
      Api.invoke(USER_PROFILE_GET_GENDER, new UserProfileGetGender())]);
    await promiseAll;
  }

  checkUsername = (value, options = {}) => {
    return new Promise(function(resolve, reject) {
      const userProfileCheckUsername = new UserProfileCheckUsername();
      userProfileCheckUsername.setUsername(value);

      Api.invoke(USER_PROFILE_CHECK_USERNAME, userProfileCheckUsername)
        .then(function(response) {
          /**
           * @type {ProtoUserProfileCheckUsernameResponse} response
           */
          if (response.getStatus() === Proto.UserProfileCheckUsernameResponse.Status.INVALID) {
            reject(i18n.editProfileCheckUsernameInvalid);
          } else if (response.getStatus() === Proto.UserProfileCheckUsernameResponse.Status.TAKEN) {
            reject(i18n.editProfileCheckUsernameTaken);
          } else {
            resolve();
          }
        }, function() {
          reject();
        });
    });
  }

  handleFormData = async (data, setError) => {

    const userProfileNickname = new UserProfileSetNickname();
    userProfileNickname.setNickname(data.nickName);

    const userProfileUsername = new UserProfileUpdateUsername();
    userProfileUsername.setUsername(data.userName);

    const userProfileBio = new UserProfileSetBio();
    userProfileBio.setBio(data.bio);

    const userProfileGender = new UserProfileSetGender();
    userProfileGender.setGender(data.gender);

    const userProfileEmail = new UserProfileSetEmail();
    userProfileEmail.setEmail(data.email);

    try {
      const promiseList = [
        Api.invokeMapError(
          USER_PROFILE_SET_NICKNAME,
          userProfileNickname,
          setError, {
            [errorId(ERROR_USER_PROFILE_SET_NICKNAME_BAD_PAYLOAD)]: 'nickName',
          }),

        Api.invokeMapError(
          USER_PROFILE_UPDATE_USERNAME,
          userProfileUsername,
          setError, {
            [errorId(ERROR_USER_PROFILE_UPDATE_USERNAME_BAD_PAYLOAD)]: 'userName',
            [errorId(ERROR_USER_PROFILE_UPDATE_USERNAME_UPDATE_LOCK)]: 'userName',
          }),

        Api.invokeMapError(
          USER_PROFILE_SET_BIO,
          userProfileBio,
          setError, {
            [errorId(ERROR_USER_PROFILE_SET_BIO_BAD_PAYLOAD)]: 'bio',
          }),

        Api.invokeMapError(
          USER_PROFILE_SET_GENDER,
          userProfileGender,
          setError, {
            [errorId(ERROR_USER_PROFILE_SET_GENDER_BAD_PAYLOAD)]: 'gender',
          }),

        Api.invokeMapError(
          USER_PROFILE_SET_EMAIL,
          userProfileEmail,
          setError, {
            [errorId(ERROR_USER_PROFILE_SET_EMAIL_BAD_PAYLOAD)]: 'email',
          }),
      ];
      const response = await Promise.all(promiseList);
      console.log('handleFormData.response', response);
    } catch (e) {
      console.warn('handleFormData:Error', e);
    }
  }

  render() {
    const {nickName, gender, email, bio, currentUser} = this.props;
    return (
      <UserEditProfileComponent
        goBack={this.props.navigation.goBack}
        formRules={formRules}
        nickName={nickName}
        currentUser={currentUser}
        gender={gender}
        email={email}
        bio={bio}
        handleFormData={this.handleFormData}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    nickName: state.methods.nickName,
    email: state.methods.email,
    gender: state.methods.gender,
    bio: state.methods.bio,
    currentUser: getCurrentUser(state),
  };
};

export default connect(mapStateToProps)(UserEditProfileScreen);