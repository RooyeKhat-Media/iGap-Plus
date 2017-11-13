import React, {Component} from 'react';
import {connect} from 'react-redux';
import RNFileSystem, {FileUtil} from 'react-native-file-system';
import RoomEditComponent from '../../components/Room/RoomEdit/index';
import {requiredValidator, stringValidator} from '../../utils/validator';
import {ChannelAvatarAdd, ChannelEdit, GroupAvatarAdd, GroupEdit, Proto} from '../../modules/Proto/index';
import Api from '../../modules/Api/index';
import {CHANNEL_AVATAR_ADD, CHANNEL_EDIT, GROUP_AVATAR_ADD, GROUP_EDIT} from '../../constants/methods/index';
import {fileManagerUpload, fileManagerUploadDisposed} from '../../actions/fileManager';
import {getRoomAvatarUploadIdPrefix} from '../../utils/app';
import {errorId} from '../../modules/Error/index';
import {
  ERROR_CHANNEL_CREATE_BAD_PAYLOAD,
  ERROR_CHANNEL_CREATE_LIMIT_REACHED,
  ERROR_GROUP_EDIT_BAD_PAYLOAD,
  ERROR_GROUP_EDIT_FORBIDDEN,
} from '../../modules/Api/errors/index';
import {getRoom} from '../../selector/entities/room';

const formRules = {
  name: [
    {validate: requiredValidator},
    {validate: stringValidator},
  ],
  description: [],
};

class RoomEditScreen extends Component {

  static navigationOptions = {
    header: null,
  };

  handleFormData = async (formData, setError) => {
    const {room} = this.props;
    const actionId = room.type === Proto.Room.Type.GROUP ? GROUP_EDIT : CHANNEL_EDIT;
    const proto = new (room.type === Proto.Room.Type.CHANNEL ? GroupEdit : ChannelEdit)();
    try {
      proto.setRoomId(room.longId);
      proto.setName(formData.name);
      proto.setDescription(formData.description);

      await Api.invokeMapError(actionId, proto, setError, {
        [errorId(ERROR_CHANNEL_CREATE_BAD_PAYLOAD)]: 'name',
        [errorId(ERROR_CHANNEL_CREATE_LIMIT_REACHED)]: 'name',
        [errorId(ERROR_GROUP_EDIT_BAD_PAYLOAD)]: 'name',
        [errorId(ERROR_GROUP_EDIT_FORBIDDEN)]: 'name',
      });
      this.props.navigation.goBack();
    } catch (e) {
      // TODO COMPLETE ERRORS
      console.log('create group', e.name + ': ' + e.message);
    }
  };

  selectPhoto = async () => {
    const {room} = this.props;
    const {dispose, upload} = this.props;
    try {
      const selectedFile = await RNFileSystem.filePicker(FileUtil.images());
      const token = await upload(getRoomAvatarUploadIdPrefix(room.id), selectedFile);

      const actionId = room.type === Proto.Room.Type.GROUP ? GROUP_AVATAR_ADD : CHANNEL_AVATAR_ADD;
      const proto = new (room.type === Proto.Room.Type.GROUP ? GroupAvatarAdd : ChannelAvatarAdd)();
      proto.setRoomId(room.longId);
      proto.setAttachment(token);
      await Api.invoke(actionId, proto);
    } finally {
      dispose(getRoomAvatarUploadIdPrefix(room.id));
    }
  };

  render() {
    const {room, uploading} = this.props;
    if (!room) {
      return null;
    }
    return (
      <RoomEditComponent
        goBack={this.props.navigation.goBack}
        roomId={room.id}
        name={room.title}
        description={room.type === Proto.Room.Type.GROUP ? room.groupDescription : room.channelDescription}
        uploading={uploading}
        formRules={formRules}
        selectPhoto={this.selectPhoto}
        handleFormData={this.handleFormData}
      />
    );
  }
}

RoomEditScreen.propTypes = {
  // myProp: PropTypes.string.isRequired
};

const mapStateToProps = () => {
  return (state, props) => {
    const room = getRoom(state, props);
    return {
      room,
      uploading: state.fileManager.upload[getRoomAvatarUploadIdPrefix(room.id)],
    };
  };
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

export default connect(mapStateToProps, mapDispatchToProps)(RoomEditScreen);