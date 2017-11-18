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
import {
  getAuthorHash,
  getFakeMessageId,
  getRoomHistoryUploadIdPrefix,
  getUserId,
  prepareRoomMessage,
} from '../../utils/app';
import {tNow} from '../../utils/core';
import {messengerRoomMessageConcat, messengerRoomMessageReplace} from '../../actions/messenger/roomMessages';

import {normalize} from 'normalizr';
import roomMessageSchema from '../../schemas/roomMessage';
import {entitiesRoomMessagesAdd} from '../../actions/entities/roomMessages';

class RoomHistoryScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      pickedFile: null,
      attachmentType: null,
    };
  }

  async componentDidMount() {
    const {roomId} = this.props.navigation.state.params;
    await loadRoomHistory(roomId);
  }

  submitForm = async (text) => {
    const {pickedFile, attachmentType} = this.state;
    const {room, upload, dispose} = this.props;

    this.setState({
      text: '',
      pickedFile: null,
      attachmentType: null,
    });

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
      const fakeRoomMessage = this.__getFakeMessage(text);
      const normalizeFakeMessage = this.__normalizeMessage(fakeRoomMessage, room.id, pickedFile);
      this.props.dispatch(messengerRoomMessageConcat(room.id, [normalizeFakeMessage.id]));

      proto.setRoomId(room.longId);
      proto.setMessage(text);
      if (pickedFile) {
        try {
          const token = await upload(getRoomHistoryUploadIdPrefix(room.id, normalizeFakeMessage.id), pickedFile);
          proto.setAttachment(token);
          switch (attachmentType) {
            case ROOM_MESSAGE_ATTACHMENT_TYPE_IMAGE:
              proto.setMessageType(text ? Proto.RoomMessageType.IMAGE_TEXT : Proto.RoomMessageType.IMAGE);
              break;
            case ROOM_MESSAGE_ATTACHMENT_TYPE_VIDEO:
              proto.setMessageType(text ? Proto.RoomMessageType.VIDEO_TEXT : Proto.RoomMessageType.VIDEO);
              break;
            case ROOM_MESSAGE_ATTACHMENT_TYPE_AUDIO:
              proto.setMessageType(text ? Proto.RoomMessageType.AUDIO_TEXT : Proto.RoomMessageType.AUDIO);
              break;
            case ROOM_MESSAGE_ATTACHMENT_TYPE_FILE:
              proto.setMessageType(text ? Proto.RoomMessageType.FILE_TEXT : Proto.RoomMessageType.FILE);
              break;
          }
        } finally {
          dispose(getRoomHistoryUploadIdPrefix(room.id, normalizeFakeMessage.id));
        }
      }
      const sendMessageResponse = await Api.invoke(actionId, proto);
      const normalizedRoomMessage = this.__normalizeMessage(sendMessageResponse.getRoomMessage(), room.id, pickedFile);
      this.props.dispatch(messengerRoomMessageReplace(room.id, normalizedRoomMessage.id, normalizeFakeMessage.id));
    }
  };

  __getFakeMessage = (text) => {
    const {room} = this.props;
    const {attachmentType} = this.state;
    const fakeId = getFakeMessageId();
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

    switch (attachmentType) {
      case ROOM_MESSAGE_ATTACHMENT_TYPE_IMAGE:
        roomMessage.setMessageType(text ? Proto.RoomMessageType.IMAGE_TEXT : Proto.RoomMessageType.IMAGE);
        break;
      case ROOM_MESSAGE_ATTACHMENT_TYPE_VIDEO:
        roomMessage.setMessageType(text ? Proto.RoomMessageType.VIDEO_TEXT : Proto.RoomMessageType.VIDEO);
        break;
      case ROOM_MESSAGE_ATTACHMENT_TYPE_AUDIO:
        roomMessage.setMessageType(text ? Proto.RoomMessageType.AUDIO_TEXT : Proto.RoomMessageType.AUDIO);
        break;
      case ROOM_MESSAGE_ATTACHMENT_TYPE_FILE:
        roomMessage.setMessageType(text ? Proto.RoomMessageType.FILE_TEXT : Proto.RoomMessageType.FILE);
        break;
    }

    return roomMessage;
  };

  __normalizeMessage = (roomMessage, roomId, pickedFile) => {
    const normalizedData = normalize(roomMessage, roomMessageSchema);
    const normalizedRoomMessage = normalizedData.entities.roomMessages[normalizedData.result];
    normalizedRoomMessage.pickedFile = pickedFile;
    prepareRoomMessage(normalizedRoomMessage, roomId);
    this.props.dispatch(entitiesRoomMessagesAdd({
      [normalizedRoomMessage.id]: normalizedRoomMessage,
    }));
    return normalizedRoomMessage;
  };


  goRoomInfoBtn = () => {
    const {roomId} = this.props.navigation.state.params;
    goRoomInfo(roomId);
  };
  selectImages = async () => {
    const file = await RNFileSystem.filePicker(FileUtil.images());
    this.setState({
      pickedFile: file,
      attachmentType: ROOM_MESSAGE_ATTACHMENT_TYPE_IMAGE,
    });
  };
  selectFile = async () => {
    const file = await RNFileSystem.filePicker(FileUtil.allFiles());
    this.setState({
      pickedFile: file,
      attachmentType: ROOM_MESSAGE_ATTACHMENT_TYPE_FILE,
    });
  };
  selectAudio = async () => {
    const file = await RNFileSystem.filePicker(FileUtil.audios());
    this.setState({
      pickedFile: file,
      attachmentType: ROOM_MESSAGE_ATTACHMENT_TYPE_AUDIO,
    });
  };
  selectVideos = async () => {
    const file = await RNFileSystem.filePicker(FileUtil.videos());
    this.setState({
      pickedFile: file,
      attachmentType: ROOM_MESSAGE_ATTACHMENT_TYPE_VIDEO,
    });
  };

  cancelAttach = () => {
    this.setState({
      pickedFile: null,
      attachmentType: null,
    });
  };

  render() {
    const {room, messageList} = this.props;
    const {text, pickedFile} = this.state;
    const Form = {
      text,
      pickedFile,
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
    dispatch,
  };
};

export default connect(
  makeMapStateToProps,
  mapDispatchToProps
)(RoomHistoryScreen);
