import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import SendBoxComoponent from '../../components/Unit/SendBox';
import {
  editRoomMessage,
  sendActionRequest,
  sendMessage as basicSendMessage,
  sendMultiAttachMessages,
} from '../../utils/messenger';
import {getRoom} from '../../selector/entities/room';
import {Proto} from '../../modules/Proto/index';
import {
  ROOM_MESSAGE_ATTACHMENT_TYPE_AUDIO,
  ROOM_MESSAGE_ATTACHMENT_TYPE_FILE,
  ROOM_MESSAGE_ATTACHMENT_TYPE_IMAGE,
  ROOM_MESSAGE_ATTACHMENT_TYPE_VIDEO,
  ROOM_MESSAGE_ATTACHMENT_TYPE_VOICE,
} from '../../constants/app';
import RNIGFileSystem, {FileUtil} from 'react-native-file-system';
import {filesPicker} from '../../utils/app';
import {getImageSize, prependFileProtocol} from '../../utils/core';
import {injectIntl, intlShape} from 'react-intl';
import i18n from '../../i18n/';
import {goCamera, goContactPicker, goLocationPicker} from '../../navigators/SecondaryNavigator';
import {cameraMode} from '../../screens/General/CameraScreen';
import {getUserFunc} from '../../selector/entities/registeredUser';
import {getEntitiesRoomMessageFunc} from '../../selector/entities/roomMessage';

class SendBox extends React.PureComponent {
  constructor(props) {
    super(props);
    const {control} = this.props;
    this.typingId = null;
    this.recordingVoiceId = null;
    this.typingTimeout = null;
    this.state = {
      text: '',
      pickedFile: null,
      attachmentType: null,
      replyTo: null,
      forwardedMessage: null,
      editMessage: null,
    };
    control({
      setEditMessage: this.setEditMessage,
      setReplyTo: this.setReplyTo,
      setForwardMessage: this.setForwardMessage,
    });
  }

  /**
   * @param text
   * @returns {Promise.<void>}
   */
  submitForm = (text) => {
    this.setState({text}, this.sendMessage);
  };

  sendMessage = () => {
    const {room} = this.props;
    const {text, editMessage, pickedFile, attachmentType, replyTo, forwardedMessage} = this.state;
    try {
      if (!editMessage) {
        basicSendMessage(room.id, text, pickedFile, attachmentType, replyTo ? replyTo.longId : null, forwardedMessage);
      } else {
        editRoomMessage(room.id, editMessage.longId, text);
      }
    } finally {
      this.setState({
        text: '',
        editMessage: null,
        replyTo: null,
        pickedFile: null,
        attachmentType: null,
        forwardedMessage: null,
      });
      if (this.typingId) {
        sendActionRequest(room.id, Proto.ClientAction.CANCEL, this.typingId);
        this.typingId = null;
      }
    }
  };

  onChangeText = (text) => {
    const {room} = this.props;
    this.setState({text});
    if (text && !this.typingId) {
      this.typingId = sendActionRequest(room.id, Proto.ClientAction.TYPING);
    }
    clearTimeout(this.typingTimeout);
    this.typingTimeout = setTimeout(() => {
      if (this.typingId) {
        sendActionRequest(room.id, Proto.ClientAction.CANCEL, this.typingId);
        this.typingId = null;
      }
    }, text ? 3000 : 0);
  };

  selectAttachment = async (type) => {
    let fileType;
    const {room} = this.props;
    switch (type) {
      case ROOM_MESSAGE_ATTACHMENT_TYPE_IMAGE:
        fileType = FileUtil.images();
        break;
      case ROOM_MESSAGE_ATTACHMENT_TYPE_AUDIO:
        fileType = FileUtil.audios();
        break;
      case ROOM_MESSAGE_ATTACHMENT_TYPE_VIDEO:
        fileType = FileUtil.videos();
        break;
      case ROOM_MESSAGE_ATTACHMENT_TYPE_FILE:
        fileType = FileUtil.allFiles();
        break;
      default:
        throw new Error('Invalid File Picker Format');
    }
    const files = await filesPicker(fileType);
    files.map(async function(file) {
      const size = await getImageSize(prependFileProtocol(file.fileUri));
      file.width = size.width;
      file.height = size.height;
    });
    if (files.length === 1) {
      this.setState({
        pickedFile: files[0],
        attachmentType: type,
      });
    } else {
      sendMultiAttachMessages(room.id, files, type);
    }
  };

  selectCamera = (mode) => {
    const {intl} = this.props;
    const denialMessage = [
      intl.formatMessage(i18n.roomHistoryCameraPermission),
      intl.formatMessage(i18n.roomHistoryCameraPermissionMessage),
      intl.formatMessage(i18n.roomHistoryStoragePermission),
      intl.formatMessage(i18n.roomHistoryStoragePermissionMessage),
    ];
    goCamera(
      async (path) => {
        const pickedFile = await RNIGFileSystem.fInfo(path);
        const size = await getImageSize(path);
        pickedFile.width = size.width;
        pickedFile.height = size.height;
        this.setState({
          pickedFile: pickedFile,
          attachmentType:mode === cameraMode.CAMERA ? ROOM_MESSAGE_ATTACHMENT_TYPE_IMAGE : ROOM_MESSAGE_ATTACHMENT_TYPE_VIDEO,
        });
      },
      (error) => {
      },
      mode,
      denialMessage
    );
  };

  selectContact = () => {
    const {room, getRegisteredUser} = this.props;
    goContactPicker(i18n.roomHistoryPickContactTitle, (userId) => {
      const user = getRegisteredUser(userId.toString());
      if (user) {
        const roomMessageContact = new Proto.RoomMessageContact();
        roomMessageContact.setFirstName(user.firstName);
        roomMessageContact.setLastName(user.lastName);
        roomMessageContact.setNickname(user.displayName);
        roomMessageContact.setPhoneList([user.phone.toString()]);
        basicSendMessage(room.id, '', null, null, null, null, roomMessageContact);
      }
    }, false);
  };

  selectLocation = () => {
    const {room} = this.props;
    goLocationPicker((coordinate) => {
      const roomMessageLocation = new Proto.RoomMessageLocation();
      roomMessageLocation.setLat(coordinate.latitude);
      roomMessageLocation.setLon(coordinate.longitude);
      basicSendMessage(room.id, '', null, null, null, null, null, roomMessageLocation);
    });
  };

  setEditMessage = (editMessage) => {
    this.setState({
      editMessage,
      text: editMessage.message,
    });
  };

  setReplyTo = (replyTo) => {
    this.setState({
      replyTo,
    });
  };

  setForwardMessage = (forwardedMessage) => {
    this.setState({
      forwardedMessage,
    });
  };

  onStartRecordSound = () => {
    const {room} = this.props;
    if (!this.recordingVoiceId) {
      this.recordingVoiceId = sendActionRequest(room.id, Proto.ClientAction.RECORDING_VOICE);
    }
  };

  onEndRecordSound = async (path) => {
    const {replyTo} = this.state;
    const {room} = this.props;
    if (path) {
      const pickedFile = await RNIGFileSystem.fInfo(path);
      await basicSendMessage(room.id, '', pickedFile, ROOM_MESSAGE_ATTACHMENT_TYPE_VOICE, replyTo ? replyTo.longId : null);
    }
    if (this.recordingVoiceId) {
      sendActionRequest(room.id, Proto.ClientAction.CANCEL, this.recordingVoiceId);
      this.recordingVoiceId = null;
    }
  };

  cancelAttach = () => {
    this.setState({
      pickedFile: null,
      attachmentType: null,
    });
  };

  cancelReply = () => {
    this.setState({
      replyTo: null,
    });
  };

  cancelForward = () => {
    this.setState({
      forwardedMessage: null,
    });
  };

  cancelEdit = () => {
    this.setState({
      editMessage: null,
      text: '',
    });
  };

  render() {
    const {text, pickedFile, attachmentType, replyTo, forwardedMessage, editMessage} = this.state;
    return (<SendBoxComoponent
      text={text}
      pickedFile={pickedFile}
      attachmentType={attachmentType}
      replyTo={replyTo}
      forwardedMessage={forwardedMessage}
      editMessage={!!editMessage}
      submitForm={this.submitForm}
      onChangeText={this.onChangeText}
      selectCamera={this.selectCamera}
      selectContact={this.selectContact}
      selectLocation={this.selectLocation}
      selectAttachment={this.selectAttachment}
      onStartRecordSound={this.onStartRecordSound}
      onEndRecordSound={this.onEndRecordSound}
      cancelAttach={this.cancelAttach}
      cancelEdit={this.cancelEdit}
      cancelReply={this.cancelReply}
      cancelForward={this.cancelForward}
    />);
  }
}

SendBox.propTypes = {
  intl: intlShape.isRequired,
  control: PropTypes.func.isRequired,
  roomId: PropTypes.string.isRequired,
  room: PropTypes.object.isRequired,
  getRegisteredUser: PropTypes.func.isRequired,
};

const makeMapStateToProps = () => {
  return (state, props) => {
    return {
      room: getRoom(state, props),
      getRegisteredUser: getUserFunc(state),
      getRoomMessage: getEntitiesRoomMessageFunc(state),
    };
  };
};

export default connect(makeMapStateToProps)(injectIntl(SendBox));
