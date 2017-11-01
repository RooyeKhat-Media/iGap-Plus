import React, {Component} from 'react';
import {connect} from 'react-redux';
import RNFileSystem, {FileUtil} from 'react-native-file-system';
import RoomGroupCreateComponent from '../../components/Room/RoomGroupCreate/index';
import {requiredValidator, stringValidator} from '../../utils/validator';
import {GroupAddMember, GroupAvatarAdd, GroupCreate} from '../../modules/Proto/index';
import Api from '../../modules/Api/index';
import {GROUP_ADD_MEMBER, GROUP_AVATAR_ADD, GROUP_CREATE} from '../../constants/methods/index';
import {fileManagerUpload, fileManagerUploadDisposed} from '../../actions/fileManager';
import {getRoomAvatarUploadIdPrefix} from '../../utils/app';
import {goRoomHistory} from '../../navigators/SecondaryNavigator';
import {goRoomUpdateUsername} from '../../navigators/PrimaryNavigator';

const formRules = {
  groupName: [
    {validate: requiredValidator},
    {validate: stringValidator},
  ],
  groupDescription: [],
};

class RoomGroupCreateScreen extends Component {

  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
    };
  }

  handleFormData = async (formData, setError) => {
    const {selectedContact} = this.props.navigation.state.params;

    try {
      /**
       * @type ProtoGroupCreate
       **/
      const groupCreate = new GroupCreate();
      groupCreate.setName(formData.groupName);
      groupCreate.setDescription(formData.groupDescription);
      /**
       * @type {ProtoGroupCreateResponse}
       */
      const groupCreateResponse = await Api.invoke(GROUP_CREATE, groupCreate);
      const roomId = groupCreateResponse.getRoomId().toString();

      const promiseList = [];
      selectedContact.forEach(function(userId) {
        const member = new GroupAddMember.Member();
        member.setUserId(userId);
        const groupAddMember = new GroupAddMember();
        groupAddMember.setRoomId(groupCreateResponse.getRoomId());
        groupAddMember.setMember(member);
        promiseList.push(Api.invoke(GROUP_ADD_MEMBER, groupAddMember));
      });
      await Promise.all(promiseList);

      this.addGroupAvatar(groupCreateResponse.getRoomId());
      this.props.navigation.goBack();
      goRoomUpdateUsername(roomId, {
        goBack: () => {
          goRoomHistory(roomId);
        },
      });
    } catch (e) {
      // TODO COMPLETE ERRORS
      console.log('create group', e.name + ': ' + e.message);
    }
  };

  addGroupAvatar = async (roomId) => {
    const {selectedFile} = this.state;
    const {dispose, upload} = this.props;
    const id = roomId.toString();
    if (selectedFile) {
      try {
        const token = await upload(getRoomAvatarUploadIdPrefix(id), selectedFile);
        const groupAddAvatar = new GroupAvatarAdd();
        groupAddAvatar.setRoomId(id);
        groupAddAvatar.setAttachment(token);
        await Api.invoke(GROUP_AVATAR_ADD, groupAddAvatar);
      } finally {
        dispose(getRoomAvatarUploadIdPrefix(id));
      }
    }
  }

  selectPhoto = async () => {
    try {
      const selectedFile = await RNFileSystem.filePicker(FileUtil.images());
      this.setState({selectedFile});
    } finally {
    }
  };

  render() {
    return (
      <RoomGroupCreateComponent
        goBack={this.props.navigation.goBack}
        formRules={formRules}
        selectPhoto={this.selectPhoto}
        handleFormData={this.handleFormData}
      />
    );
  }
}

RoomGroupCreateScreen.propTypes = {
  // myProp: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    upload: (id, file) => {
      return dispatch(fileManagerUpload(id, file.fileUri, file.fileName, file.fileSize));
    },
    dispose: (id) => {
      return dispatch(fileManagerUploadDisposed(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomGroupCreateScreen);