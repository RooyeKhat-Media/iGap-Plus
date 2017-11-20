import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getRoom} from '../../selector/entities/room';
import RNFileSystem, {FileUtil} from 'react-native-file-system';
import loadRoomHistory from '../../modules/Messenger/loadRoomHistory';
import RoomHistoryComponent from '../../components/Room/RoomHistory';
import {getRoomMessageList} from '../../selector/messenger/roomMessage';
import {goRoomInfo} from '../../navigators/SecondaryNavigator';
import {sendMessage, sendMultiAttachMessages} from '../../utils/messenger';
import {
  ROOM_MESSAGE_ATTACHMENT_TYPE_AUDIO,
  ROOM_MESSAGE_ATTACHMENT_TYPE_FILE,
  ROOM_MESSAGE_ATTACHMENT_TYPE_IMAGE,
  ROOM_MESSAGE_ATTACHMENT_TYPE_VIDEO,
} from '../../constants/app';

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

  /**
   * @param text
   * @returns {Promise.<void>}
   */
  submitForm = (text) => {
    const {room} = this.props;
    const {pickedFile, attachmentType} = this.state;
    sendMessage(room.id, text, pickedFile, attachmentType);
    this.setState({
      text: '',
      pickedFile: null,
      attachmentType: null,
    });
  };

  goRoomInfoBtn = () => {
    const {roomId} = this.props.navigation.state.params;
    goRoomInfo(roomId);
  };
  selectImages = async () => {
    const {room} = this.props;
    const files = await RNFileSystem.filesPicker(FileUtil.images());
    if (files.length === 1) {
      this.setState({
        pickedFile: files[0],
        attachmentType: ROOM_MESSAGE_ATTACHMENT_TYPE_IMAGE,
      });
    } else {
      sendMultiAttachMessages(room.id, files, ROOM_MESSAGE_ATTACHMENT_TYPE_IMAGE);
    }
  };
  selectFile = async () => {
    const {room} = this.props;
    const files = await RNFileSystem.filesPicker(FileUtil.allFiles());
    if (files.length === 1) {
      this.setState({
        pickedFile: files[0],
        attachmentType: ROOM_MESSAGE_ATTACHMENT_TYPE_FILE,
      });
    } else {
      sendMultiAttachMessages(room.id, files, ROOM_MESSAGE_ATTACHMENT_TYPE_FILE);
    }
  };
  selectAudio = async () => {
    const {room} = this.props;
    const files = await RNFileSystem.filesPicker(FileUtil.audios());
    if (files.length === 1) {
      this.setState({
        pickedFile: files[0],
        attachmentType: ROOM_MESSAGE_ATTACHMENT_TYPE_AUDIO,
      });
    } else {
      sendMultiAttachMessages(room.id, files, ROOM_MESSAGE_ATTACHMENT_TYPE_AUDIO);
    }
  };
  selectVideos = async () => {
    const {room} = this.props;
    const files = await RNFileSystem.filesPicker(FileUtil.videos());
    if (files.length === 1) {
      this.setState({
        pickedFile: files[0],
        attachmentType: ROOM_MESSAGE_ATTACHMENT_TYPE_VIDEO,
      });
    } else {
      sendMultiAttachMessages(room.id, files, ROOM_MESSAGE_ATTACHMENT_TYPE_VIDEO);
    }
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

export default connect(
  makeMapStateToProps
)(RoomHistoryScreen);
