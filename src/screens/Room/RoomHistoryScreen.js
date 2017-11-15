import React, {Component} from 'react';
import {connect} from 'react-redux';
import Api from '../../modules/Api/index';
import RNFileSystem, {FileUtil} from 'react-native-file-system';
import {getRoom} from '../../selector/entities/room';
import loadRoomHistory from '../../modules/Messenger/loadRoomHistory';
import RoomHistoryComponent from '../../components/Room/RoomHistory';
import {getRoomMessageList} from '../../selector/messenger/roomMessage';
import {goRoomInfo} from '../../navigators/SecondaryNavigator';
import {fileManagerUpload, fileManagerUploadDisposed} from '../../actions/fileManager';
import {
  ROOM_MESSAGE_ATTACHMENT_TYPE_AUDIO,
  ROOM_MESSAGE_ATTACHMENT_TYPE_FILE,
  ROOM_MESSAGE_ATTACHMENT_TYPE_IMAGE,
  ROOM_MESSAGE_ATTACHMENT_TYPE_VIDEO,
} from '../../constants/app';
import {ChannelSendMessage, ChatSendMessage, GroupSendMessage, Proto} from '../../modules/Proto/index';
import {CHANNEL_SEND_MESSAGE, CHAT_SEND_MESSAGE, GROUP_SEND_MESSAGE} from '../../constants/methods/index';
import {dispatchNewRoomMessage, getAuthorHash, getFakeMessageId, getUserId} from '../../utils/app';
import {tNow} from '../../utils/core';
import {messengerRoomMessageReplace} from '../../actions/messenger/roomMessages';

class RoomHistoryScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: 'sakalm',
      attachment: null,
      attachmentType: null,
    };
  }

  async componentDidMount() {
    const {roomId} = this.props.navigation.state.params;
    await loadRoomHistory(roomId);
  }

  submitForm = async (text) => {
    const {room, replaceFakeMessage} = this.props;

    /**
     * @type {ProtoChatSendMessage || ProtoGroupSendMessage || ProtoChannelSendMessage} proto
     */
    let actionId, proto;

    switch (room.type) {
      case Proto.Room.Type.CHAT:
        actionId = CHAT_SEND_MESSAGE;
        proto = new ChatSendMessage();
        break;
      case Proto.Room.Type.GROUP:
        actionId = GROUP_SEND_MESSAGE;
        proto = new GroupSendMessage();
        break;
      case Proto.Room.Type.CHANNEL:
        actionId = CHANNEL_SEND_MESSAGE;
        proto = new ChannelSendMessage();
        break;
    }

    if (actionId && proto) {
      const fakeId = getFakeMessageId();
      this.__sendFakeMessage(fakeId, text);

      proto.setRoomId(room.longId);
      proto.setMessage(text);
      const sendMessageResponse = await Api.invoke(actionId, proto);
      replaceFakeMessage(room.id, sendMessageResponse.getRoomMessage().getMessageId().toString(), fakeId.toString());
    }

    this.setState({
      text: '',
      attachment: null,
      attachmentType: null,
    });
  };

  __sendFakeMessage = (fakeId, text) => {
    const {room} = this.props;
    /**
     * @type {proto.RoomMessage.Author}
     */
    const author = new Proto.RoomMessage.Author();
    author.setHash(getAuthorHash());

    if (room.type === Proto.Room.Type.CHANNEL) {
      const authorRoom = new Proto.RoomMessage.Author.Room();
      authorRoom.setRoomId(room.longId);
    } else {
      const authorUser = new Proto.RoomMessage.Author.User();
      authorUser.setUserId(getUserId());
    }
    const roomMessage = new Proto.RoomMessage();
    roomMessage.setMessageId(fakeId);
    roomMessage.setMessage(text);
    roomMessage.setAuthor(author);
    roomMessage.setCreateTime(tNow());
    roomMessage.setUpdateTime(tNow());

    dispatchNewRoomMessage(roomMessage, room.id);
  };

  goRoomInfoBtn = () => {
    const {roomId} = this.props.navigation.state.params;
    goRoomInfo(roomId);
  };
  selectImages = async () => {
    const file = await RNFileSystem.filePicker(FileUtil.images());
    this.setState({
      attachment: file,
      attachmentType: ROOM_MESSAGE_ATTACHMENT_TYPE_IMAGE,
    });
  };
  selectFile = async () => {
    const file = await RNFileSystem.filePicker(FileUtil.allFiles());
    this.setState({
      attachment: file,
      attachmentType: ROOM_MESSAGE_ATTACHMENT_TYPE_FILE,
    });
  };
  selectAudio = async () => {
    const file = await RNFileSystem.filePicker(FileUtil.audios());
    this.setState({
      attachment: file,
      attachmentType: ROOM_MESSAGE_ATTACHMENT_TYPE_AUDIO,
    });
  };
  selectVideos = async () => {
    const file = await RNFileSystem.filePicker(FileUtil.videos());
    this.setState({
      attachment: file,
      attachmentType: ROOM_MESSAGE_ATTACHMENT_TYPE_VIDEO,
    });
  };

  cancelAttach = () => {
    this.setState({
      attachment: null,
      attachmentType: null,
    });
  };

  render() {
    const {room, messageList} = this.props;
    const {text, attachment} = this.state;
    const Form = {
      text,
      attachment,
      selectImages: this.selectImages,
      selectFile: this.selectFile,
      selectAudio: this.selectAudio,
      selectVideos: this.selectVideos,
      cancelAttach: this.cancelAttach,
      submitForm: this.submitForm,
    };
    if (!room) {
      return null;
    }
    return (
      <RoomHistoryComponent
        room={room}
        Form={Form}
        messageList={messageList}
        goRoomInfoBtn={this.goRoomInfoBtn}
        goBack={this.props.navigation.goBack}
      />
    );
  }
}

const makeMapStateToProps = () => {
  return (state, props) => {
    return {
      room: getRoom(state, props),
      messageList: getRoomMessageList(state, props),
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
    replaceFakeMessage: (roomId, newMessageId, oldMessageId) => {
      return dispatch(messengerRoomMessageReplace(roomId, newMessageId, oldMessageId));
    },
  };
};

export default connect(
  makeMapStateToProps,
  mapDispatchToProps
)(RoomHistoryScreen);
