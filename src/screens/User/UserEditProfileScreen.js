import React, {Component} from 'react';
import RNFileSystem, {FileUtil} from 'react-native-file-system';
import UserEditProfileComponent from '../../components/User/EditProfile/index';
import {
  Proto,
  UserAvatarAdd,
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
  USER_AVATAR_ADD,
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
import {fileManagerUpload, fileManagerUploadDisposed} from '../../actions/fileManager';
import {FILE_UPLOAD_ID_EDIT_PROFILE} from '../../constants/app';

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
    const {nickName, gender, email, bio, currentUser} = this.props;

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
      const promiseList = [];
      if (data.nickName !== nickName) {
        promiseList.push(Api.invokeMapError(
          USER_PROFILE_SET_NICKNAME,
          userProfileNickname,
          setError, {
            [errorId(ERROR_USER_PROFILE_SET_NICKNAME_BAD_PAYLOAD)]: 'nickName',
          }));
      }
      if (data.userName !== currentUser.username) {
        promiseList.push(Api.invokeMapError(
          USER_PROFILE_UPDATE_USERNAME,
          userProfileUsername,
          setError, {
            [errorId(ERROR_USER_PROFILE_UPDATE_USERNAME_BAD_PAYLOAD)]: 'userName',
            [errorId(ERROR_USER_PROFILE_UPDATE_USERNAME_UPDATE_LOCK)]: 'userName',
          }));
      }
      if (data.bio !== bio) {
        promiseList.push(Api.invokeMapError(
          USER_PROFILE_SET_BIO,
          userProfileBio,
          setError, {
            [errorId(ERROR_USER_PROFILE_SET_BIO_BAD_PAYLOAD)]: 'bio',
          }));
      }
      if (data.gender !== gender) {
        promiseList.push(Api.invokeMapError(
          USER_PROFILE_SET_GENDER,
          userProfileGender,
          setError, {
            [errorId(ERROR_USER_PROFILE_SET_GENDER_BAD_PAYLOAD)]: 'gender',
          }));
      }
      if (data.email !== email) {
        promiseList.push(Api.invokeMapError(
          USER_PROFILE_SET_EMAIL,
          userProfileEmail,
          setError, {
            [errorId(ERROR_USER_PROFILE_SET_EMAIL_BAD_PAYLOAD)]: 'email',
          }));
      }
      await Promise.all(promiseList);
    } catch (e) {
      console.warn('handleFormData:Error', e);
    }
  }

  selectPhoto = async () => {
    const {upload, dispose} = this.props;
    try {
      const file = await RNFileSystem.filePicker(FileUtil.images());
      const token = await upload(file);

      const userAvatarAdd = new UserAvatarAdd();
      userAvatarAdd.setAttachment(token);
      await Api.invoke(USER_AVATAR_ADD, userAvatarAdd);
    } finally {
      dispose();
    }
  }

  render() {
    const {nickName, gender, email, bio, currentUser} = this.props;
    return (
      <UserEditProfileComponent
        currentUser={currentUser}
        formRules={formRules}
        nickName={nickName}
        gender={gender}
        email={email}
        bio={bio}
        selectPhoto={this.selectPhoto}
        handleFormData={this.handleFormData}
        goBack={this.props.navigation.goBack}
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

const mapDispatchToProps = (dispatch) => {
  return {
    upload: (file) => {
      return dispatch(fileManagerUpload(FILE_UPLOAD_ID_EDIT_PROFILE, file.fileUri, file.fileName, file.fileSize));
    },
    dispose: () => {
      return dispatch(fileManagerUploadDisposed(FILE_UPLOAD_ID_EDIT_PROFILE));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserEditProfileScreen);