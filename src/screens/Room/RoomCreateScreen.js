import React, {Component} from 'react';
import {connect} from 'react-redux';
import RoomCreateComponent from '../../components/Room/RoomCreate/index';
import {requiredValidator, stringValidator} from '../../utils/validator';
import {
  ChannelAddMember,
  ChannelAvatarAdd,
  ChannelCreate,
  ChatConvertToGroup,
  GroupAddMember,
  GroupAvatarAdd,
  GroupCreate,
} from '../../modules/Proto/index';
import Api from '../../modules/Api/index';
import {
  CHANNEL_ADD_MEMBER,
  CHANNEL_AVATAR_ADD,
  CHANNEL_CREATE,
  CHAT_CONVERT_TO_GROUP,
  GROUP_ADD_MEMBER,
  GROUP_AVATAR_ADD,
  GROUP_CREATE,
} from '../../constants/methods/index';
import {fileManagerUpload, fileManagerUploadDisposed} from '../../actions/fileManager';
import {getRoomAvatarUploadIdPrefix} from '../../utils/app';
import {goRoomHistory} from '../../navigators/SecondaryNavigator';
import {goRoomUpdateUsername} from '../../navigators/PrimaryNavigator';
import {ROOM_CREATE_SCREEN_TYPE_GROUP} from '../../constants/app';
import {errorId} from '../../modules/Error/index';
import {
  ERROR_CHANNEL_CREATE_BAD_PAYLOAD,
  ERROR_CHANNEL_CREATE_LIMIT_REACHED,
  ERROR_GROUP_CREATE_BAD_PAYLOAD,
  ERROR_GROUP_CREATE_LIMIT_REACHED,
} from '../../modules/Api/errors/index';

const formRules = {
  name: [
    {validate: requiredValidator},
    {validate: stringValidator},
  ],
  description: [],
};

class RoomCreateScreen extends Component {

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
    const {selectedContact, type, roomId} = this.props.navigation.state.params;
    let actionId;
    let proto;
    if (roomId) {
      actionId = CHAT_CONVERT_TO_GROUP;
      proto = new ChatConvertToGroup();
      proto.setRoomId(roomId);
    } else if (type === ROOM_CREATE_SCREEN_TYPE_GROUP) {
      actionId = GROUP_CREATE;
      proto = new GroupCreate();
    } else {
      actionId = CHANNEL_CREATE;
      proto = new ChannelCreate();
    }
    proto.setName(formData.name);
    proto.setDescription(formData.description);

    const roomCreateResponse = await Api.invokeMapError(actionId, proto, setError, {
      [errorId(ERROR_CHANNEL_CREATE_BAD_PAYLOAD)]: 'name',
      [errorId(ERROR_CHANNEL_CREATE_LIMIT_REACHED)]: 'name',
      [errorId(ERROR_GROUP_CREATE_BAD_PAYLOAD)]: 'name',
      [errorId(ERROR_GROUP_CREATE_LIMIT_REACHED)]: 'name',
    });
    const newRoomId = roomCreateResponse.getRoomId().toString();

    selectedContact.forEach(function(userId) {

      const addMemberActionId = type === ROOM_CREATE_SCREEN_TYPE_GROUP ? GROUP_ADD_MEMBER : CHANNEL_ADD_MEMBER;
      const addMemberProto = type === ROOM_CREATE_SCREEN_TYPE_GROUP ? GroupAddMember : ChannelAddMember;

      const member = new addMemberProto.Member();
      member.setUserId(userId);

      const roomAddMember = new addMemberProto();
      roomAddMember.setRoomId(roomCreateResponse.getRoomId());
      roomAddMember.setMember(member);
      Api.invoke(addMemberActionId, roomAddMember);
    });
    this.addAvatar(roomCreateResponse.getRoomId());

    this.props.navigation.goBack();
    goRoomUpdateUsername(newRoomId, {
      goBack: () => {
        goRoomHistory(newRoomId);
      },
    });
  };

  addAvatar = async (roomId) => {
    const {type} = this.props.navigation.state.params;
    const {selectedFile} = this.state;
    const {dispose, upload} = this.props;
    const id = roomId.toString();
    if (selectedFile) {
      try {
        const token = await upload(getRoomAvatarUploadIdPrefix(id), selectedFile);

        const actionId = type === ROOM_CREATE_SCREEN_TYPE_GROUP ? GROUP_AVATAR_ADD : CHANNEL_AVATAR_ADD;
        const proto = new (type === ROOM_CREATE_SCREEN_TYPE_GROUP ? GroupAvatarAdd : ChannelAvatarAdd)();
        proto.setRoomId(roomId);
        proto.setAttachment(token);
        await Api.invoke(actionId, proto);

      } finally {
        dispose(getRoomAvatarUploadIdPrefix(id));
      }
    }
  };

  selectPhoto = (file) => {
    this.setState({selectedFile: file});
  };

  render() {
    return (
      <RoomCreateComponent
        goBack={this.props.navigation.goBack}
        formRules={formRules}
        selectPhoto={this.selectPhoto}
        handleFormData={this.handleFormData}
      />
    );
  }
}

RoomCreateScreen.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(RoomCreateScreen);