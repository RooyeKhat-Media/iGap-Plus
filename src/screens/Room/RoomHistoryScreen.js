import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getRoom} from '../../selector/entities/room';
import RNFileSystem, {FileUtil} from 'react-native-file-system';
import loadRoomHistory from '../../modules/Messenger/loadRoomHistory';
import RoomHistoryComponent from '../../components/Room/RoomHistory';
import {getRoomMessageList} from '../../selector/messenger/roomMessage';
import {goRoomInfo} from '../../navigators/SecondaryNavigator';
import {sendMessage} from '../../utils/messenger';
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

export default connect(
  makeMapStateToProps
)(RoomHistoryScreen);
