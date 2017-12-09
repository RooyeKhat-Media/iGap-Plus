/**
 * @flow
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {requiredValidator, stringValidator} from '../../utils/validator';
import {injectIntl, intlShape} from 'react-intl';
import UserNewProfileComponent from '../../components/User/NewProfile';
import {UserAvatarAdd, UserProfileSetNickname} from '../../modules/Proto/index';
import Api from '../../modules/Api/index';
import {USER_AVATAR_ADD, USER_PROFILE_SET_NICKNAME} from '../../constants/methods/index';
import {goMainScreen} from '../../navigators/AppNavigator';
import {
  ERROR_USER_PROFILE_SET_NICKNAME_BAD_PAYLOAD,
  ERROR_USER_PROFILE_SET_NICKNAME_INTERNAL_SERVER_ERROR,
} from '../../modules/Api/errors/index';
import {errorId} from '../../modules/Error/index';
import {fileManagerUpload, fileManagerUploadDisposed} from '../../actions/fileManager';
import {FILE_UPLOAD_ID_EDIT_PROFILE} from '../../constants/app';

const rules = {
  nickName: [
    {validate: requiredValidator},
    {validate: stringValidator, options: {min: 5}},
  ],
};

class UserNewProfileScreen extends Component {

  constructor(args) {
    super(args);
    this.state = {
      selectedFile: null,
    };
  }

  selectPhoto = (file) => {
    this.setState({
      selectedFile: file,
    });
  };

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
    this.uploadAvatar();
    goMainScreen();
  };

  uploadAvatar = async () => {
    const {upload, dispose} = this.props;
    const {selectedFile} = this.state;
    if (selectedFile) {
      try {
        const token = await upload(selectedFile);
        const userAvatarAdd = new UserAvatarAdd();
        userAvatarAdd.setAttachment(token);
        await Api.invoke(USER_AVATAR_ADD, userAvatarAdd);
      } finally {
        dispose();
      }
    }
  };

  render() {
    return (
      <UserNewProfileComponent
        formRules={rules}
        selectPhoto={this.selectPhoto}
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
const mapStateToProps = state => {
  return {};
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

export default connect(mapStateToProps, mapDispatchToProps)(UserNewProfileScreenIntl);