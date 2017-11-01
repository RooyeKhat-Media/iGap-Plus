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
    const {dispose, upload} = this.props;
    const {selectedFile} = this.state;
    const {selectedContact} = this.props.navigation.state.params;

    try {
      /**
       * @type ProtoGroupCreate
       **/
      const groupCreate = new GroupCreate();
      groupCreate.setName(formData.groupName);
      groupCreate.setDescription(formData.groupDescription);
      const groupCreateResponse = await Api.invoke(GROUP_CREATE, groupCreate);
      const roomId = groupCreateResponse.getId().toString();

      const promiseList = [];
      selectedContact.forEach(function(userId) {
        const member = new GroupAddMember.Member();
        member.setUserId(userId);
        const groupAddMember = new GroupAddMember();
        groupAddMember.setRoomId(groupCreateResponse.getId());
        groupAddMember.setMember(member);
        promiseList.push(Api.invoke(GROUP_ADD_MEMBER, groupAddMember));
      });
      await Promise.all(promiseList);

      if (selectedFile) {
        upload(getRoomAvatarUploadIdPrefix(roomId), selectedFile)
          .then(function(token) {
            const groupAddAvatar = new GroupAvatarAdd();
            groupAddAvatar.setRoomId(roomId);
            groupAddAvatar.setAttachment(token);
            Api.invoke(GROUP_AVATAR_ADD, groupAddAvatar);
            dispose(getRoomAvatarUploadIdPrefix(roomId));
          }, function() {
            dispose(getRoomAvatarUploadIdPrefix(roomId));
          });
      }

      goRoomHistory(roomId);

    } catch (e) {
      // TODO COMPLETE ERRORS
      setError('create group', e.name + ': ' + e.message);
    }
  };


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