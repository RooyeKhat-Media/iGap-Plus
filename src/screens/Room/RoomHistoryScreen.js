import React, {Component} from 'react';
import {connect} from 'react-redux';
import {injectIntl, intlShape} from 'react-intl';
import SaveTo from '../../../native/modules/SaveTo';
import Share from '../../modules/Share/index';
import {getRoom} from '../../selector/entities/room';
import RNFileSystem, {FileUtil} from 'react-native-file-system';
import loadRoomHistory from '../../modules/Messenger/loadRoomHistory';
import RoomHistoryComponent from '../../components/Room/RoomHistory';
import {getRoomMessageList} from '../../selector/messenger/roomMessage';
import {goRoomHistory, goRoomInfo, goRoomReport} from '../../navigators/SecondaryNavigator';
import {
  deleteMessages,
  editRoomMessage,
  forwardToList,
  sendMessage,
  sendMultiAttachMessages,
} from '../../utils/messenger';
import {
  ROOM_MESSAGE_ACTION_DELETE,
  ROOM_MESSAGE_ACTION_EDIT,
  ROOM_MESSAGE_ACTION_FORWARD,
  ROOM_MESSAGE_ACTION_REPLY,
  ROOM_MESSAGE_ACTION_REPORT,
  ROOM_MESSAGE_ATTACHMENT_TYPE_AUDIO,
  ROOM_MESSAGE_ATTACHMENT_TYPE_FILE,
  ROOM_MESSAGE_ATTACHMENT_TYPE_IMAGE,
  ROOM_MESSAGE_ATTACHMENT_TYPE_VIDEO,
} from '../../constants/app';
import {getAuthorHash, setRoomHistorySelectedMode} from '../../utils/app';
import {ClientJoinByUsername, ClientMuteRoom, Proto} from '../../modules/Proto/index';
import {getEntitiesRoomMessage} from '../../selector/entities/roomMessage';
import {CLIENT_JOIN_BY_USERNAME, CLIENT_MUTE_ROOM} from '../../constants/methods/index';
import Api from '../../modules/Api/index';
import i18n from '../../i18n';
import {getImageSize, prependFileProtocol} from '../../utils/core';

class RoomHistoryScreen extends Component {

  onScroll = async (event, offsetX, offsetY) => {
    const {room} = this.props;
    if (offsetY <= 300 && !this.loading) {
      try {
        this.loading = true;
        await loadRoomHistory(room.id);
      } finally {
        this.loading = false;
      }
    }
  };

  async componentDidMount() {
    const {room} = this.props;
    await loadRoomHistory(room.id);
  }

  flatListRef = (ref) => {
    this.flatList = ref;
  };

  constructor(props) {
    super(props);
    const {room} = this.props;

    const isChat = room.type === Proto.Room.Type.CHAT;
    const isGroup = room.type === Proto.Room.Type.GROUP;
    const isChannel = room.type === Proto.Room.Type.CHANNEL;

    const isOwner = ((isGroup && room.groupRole === Proto.GroupRoom.Role.OWNER) || (isChannel && room.channelRole === Proto.ChannelRoom.Role.OWNER));
    const isAdmin = ((isGroup && room.groupRole === Proto.GroupRoom.Role.ADMIN) || (isChannel && room.channelRole === Proto.ChannelRoom.Role.ADMIN));
    const isModerator = ((isGroup && room.groupRole === Proto.GroupRoom.Role.MODERATOR) || (isChannel && room.channelRole === Proto.ChannelRoom.Role.MODERATOR));

    this.loading = false;
    this.state = {
      text: '',
      pickedFile: null,
      attachmentType: null,
      replyTo: null,
      forwardedMessage: this.props.navigation.state.params.forwardedMessage,
      editMessageId: null,
      selectedList: {},
      selectedCount: 0,
      access: {
        sendMessage: room.isParticipant && (isChat || isGroup || (isChannel && (isModerator || isAdmin || isOwner))),
        editMessage: false,
        deleteMessage: room.isParticipant && (isChat || isGroup || (isChannel && (isModerator || isAdmin || isOwner))),
      },
      actionSheetActions: [],
    };
  }


  goRoomInfoBtn = () => {
    const {room} = this.props;
    goRoomInfo(room.id);
  };
  /**
   * @param text
   * @returns {Promise.<void>}
   */
  submitForm = (text) => {
    const {room, getEntitiesRoomMessage} = this.props;
    const {editMessageId, pickedFile, attachmentType, replyTo, forwardedMessage} = this.state;
    if (!editMessageId) {
      sendMessage(room.id, text, pickedFile, attachmentType, replyTo ? replyTo.longId : null, forwardedMessage);
    } else {
      const roomMessage = getEntitiesRoomMessage(editMessageId);
      editRoomMessage(room.id, roomMessage.longId, text);
    }
    this.setState({
      editMessageId: null,
      text: '',
      pickedFile: null,
      attachmentType: null,
      replyTo: null,
      forwardedMessage: null,
    });
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
    const files = await RNFileSystem.filesPicker(fileType);
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
  cancelAttach = () => {
    this.setState({
      pickedFile: null,
      attachmentType: null,
    });
  };

  onMessagePress = (message) => {
    const {selectedCount} = this.state;
    if (selectedCount) {
      this.selectMessage(message.id);
    } else {
      this.setState({
        actionSheetActions: this.getActionList(message),
      }, () => {
        const {actionSheetActions} = this.state;
        if (actionSheetActions.length) {
          this.actionSheet.open();
        }
      });
    }
  };
  onMessageLongPress = (message) => {
    const {selectedCount} = this.state;
    if (!selectedCount) {
      this.selectMessage(message.id);
    }
  };

  selectMessage = (messageId) => {
    const {getEntitiesRoomMessage} = this.props;
    this.setState(prevState => {
      const selectedList = {...prevState.selectedList};
      const selectedCount = selectedList[messageId] ? prevState.selectedCount - 1 : prevState.selectedCount + 1;
      if (!selectedList[messageId]) {
        selectedList[messageId] = true;
      } else {
        delete selectedList[messageId];
      }
      const firstRoomMessage = selectedCount === 1 ? getEntitiesRoomMessage(Object.keys(selectedList)[0]) : null;
      return {
        ...prevState,
        selectedCount,
        selectedList,
        access: {
          ...prevState.access,
          editMessage: firstRoomMessage ? firstRoomMessage.authorHash === getAuthorHash() : false,
        },
      };
    }, () => {
      setRoomHistorySelectedMode(!!this.state.selectedCount);
    });
  };
  cancelSelected = () => {
    setRoomHistorySelectedMode(false);
    this.setState({
      selectedCount: 0,
      selectedList: {},
    });
  };

  getToolbarAction = () => {
    const actions = [];
    const {room} = this.props;
    const {selectedCount, access} = this.state;

    if (room.isParticipant && selectedCount === 1 && access.sendMessage) {
      actions.push(ROOM_MESSAGE_ACTION_REPLY);
    }
    actions.push(ROOM_MESSAGE_ACTION_FORWARD);
    if (room.isParticipant && access.deleteMessage) {
      actions.push(ROOM_MESSAGE_ACTION_DELETE);
    }
    if (selectedCount === 1) {
      actions.push(ROOM_MESSAGE_ACTION_REPORT);
    }
    if (room.isParticipant && selectedCount === 1 && access.editMessage) {
      actions.push(ROOM_MESSAGE_ACTION_EDIT);
    }
    return actions;
  };

  selectedMessageAction = (selected) => {
    const {room, getEntitiesRoomMessage} = this.props;
    const {selectedList} = this.state;
    const roomMessage = getEntitiesRoomMessage(Object.keys(selectedList)[0]);
    switch (selected.action) {

      case ROOM_MESSAGE_ACTION_REPLY:
        this.actionReply(roomMessage);
        break;
      case ROOM_MESSAGE_ACTION_FORWARD:
        this.actionForward([]);
        break;
      case ROOM_MESSAGE_ACTION_DELETE:
        this.actionDeleteMessages(selectedList);
        break;
      case ROOM_MESSAGE_ACTION_REPORT:
        if (roomMessage) {
          goRoomReport(room.id, roomMessage.longId);
        }
        break;
      case ROOM_MESSAGE_ACTION_EDIT:
        if (roomMessage) {
          this.setState({
            text: roomMessage.message,
            editMessageId: roomMessage.id,
          });
        }
        break;
    }
    this.cancelSelected();
  };

  actionReply = (message) => {
    this.setState({
      replyTo: message,
    });
  };
  cancelReply = () => {
    this.setState({
      replyTo: null,
    });
  };

  forwardModalControl = (ref) => {
    this.forwardModal = ref;
  };

  actionForward = (message) => {
    this.forwardModal.open(selectList => {
      if (selectList.length === 1 && selectList[0].roomId) {
        goRoomHistory(selectList[0].roomId, message);
      } else {
        forwardToList(selectList, message);
      }
    });
  };

  cancelForward = () => {
    this.setState({
      forwardedMessage: null,
    });
  };

  actionDeleteMessages = (selectedList) => {
    const {room} = this.props;
    this.confirm.open(i18n.roomHistoryDeleteMessagesTitle, {
      ...i18n.roomHistoryDeleteMessagesDescription, values: {
        roomTitle: room.title,
        count: Object.keys(selectedList).length,
      },
    }, () => {
      deleteMessages(room.id, Object.keys(selectedList));
    });
  };

  cancelEdit = () => {
    this.setState({
      editMessageId: null,
      text: '',
    });
  };

  confirmControl = (confirm) => {
    this.confirm = confirm;
  };

  joinBoxToggle = async () => {
    const {room} = this.props;
    const isParticipant = room.isParticipant;
    const isPublic = room.groupType === Proto.GroupRoom.Type.PUBLIC_ROOM || room.channelType === Proto.ChannelRoom.Type.PUBLIC_ROOM;
    const roomMute = room.roomMute === Proto.RoomMute.MUTE;
    try {
      if (!isParticipant) {
        if (isPublic) {
          const clientJoinByUsername = new ClientJoinByUsername();
          clientJoinByUsername.setUsername(room.groupPublicUsername || room.channelPublicUsername);
          await Api.invoke(CLIENT_JOIN_BY_USERNAME, clientJoinByUsername);
        }
      } else {
        const clientMuteRoom = new ClientMuteRoom();
        clientMuteRoom.setRoomId(room.longId);
        clientMuteRoom.setRoomMute(roomMute ? Proto.RoomMute.UNMUTE : Proto.RoomMute.MUTE);
        await Api.invoke(CLIENT_MUTE_ROOM, clientMuteRoom);
      }
    } catch (e) {
      console.error('joinBoxToggle Error');
    }
  };

  actionSheetControl = (action) => {
    this.actionSheet = action;
  };
  /**
   * @param {FlatRoomMessage} roomMessage
   * @return {Array}
   */
  getActionList = (roomMessage) => {
    const actions = [];
    const {intl, getMessageDownloadFileUri} = this.props;
    const {access} = this.state;
    const uri = getMessageDownloadFileUri(roomMessage.attachment ? roomMessage.attachment.getCacheId() : null);

    if (roomMessage.authorHash === getAuthorHash()) {
      actions.push({
        icon: 'edit',
        title: intl.formatMessage(i18n.roomHistoryActionEdit),
        onPress: () => {
          this.setState({
            text: roomMessage.message,
            editMessageId: roomMessage.id,
          });
        },
      });
    }
    actions.push({
      icon: 'forward',
      title: intl.formatMessage(i18n.roomHistoryActionForward),
      onPress: () => {
        this.actionForward(roomMessage);
      },
    });
    if (access.sendMessage) {
      actions.push({
        icon: 'reply',
        title: intl.formatMessage(i18n.roomHistoryActionReply),
        onPress: () => {
          this.actionReply(roomMessage);
        },
      });
    }
    if (uri && SaveTo.downloadsSupport() && roomMessage.attachment) {
      actions.push({
        icon: 'cloud-download',
        title: intl.formatMessage(i18n.roomHistoryActionSaveToDownload),
        onPress: () => {
          SaveTo.downloads(uri);
        },
      });
    }
    if (uri && SaveTo.gallerySupport(roomMessage.attachment.getMime())) {
      actions.push({
        icon: 'collections',
        title: intl.formatMessage(i18n.roomHistoryActionSaveToGallery),
        onPress: () => {
          SaveTo.gallery(uri, roomMessage.attachment.getMime());
        },
      });
    }
    if (uri && SaveTo.musicSupport(roomMessage.attachment.getMime())) {
      actions.push({
        icon: 'audiotrack',
        title: intl.formatMessage(i18n.roomHistoryActionSaveToMusic),
        onPress: () => {
          SaveTo.music(uri, roomMessage.attachment.getMime());
        },
      });
    }
    if (Share.isSupported) {
      actions.push({
        icon: 'share',
        title: intl.formatMessage(i18n.roomHistoryActionShare),
        onPress: () => {
          Share.open(uri, uri ? roomMessage.attachment.getMime() : null, roomMessage.message);
        },
      });
    }
    return actions;
  };

  render() {
    const {room, messageList, getRoomMessageType} = this.props;
    const {text, pickedFile, replyTo, forwardedMessage, editMessageId, selectedCount, selectedList, actionSheetActions} = this.state;
    const Form = {
      text,
      replyTo,
      pickedFile,
      editMessageId,
      forwardedMessage,
      selectAttachment: this.selectAttachment,
      cancelAttach: this.cancelAttach,
      submitForm: this.submitForm,
      cancelEdit: this.cancelEdit,
      cancelReply: this.cancelReply,
      cancelForward: this.cancelForward,
    };
    if (!room) {
      return null;
    }
    const toolbarActions = this.getToolbarAction();
    return (
      <RoomHistoryComponent
        Form={Form}
        roomId={room.id}
        roomType={room.type}
        roomTitle={room.title}
        readOnly={room.readOnly}
        isParticipant={room.isParticipant}
        isPublic={room.groupType === Proto.GroupRoom.Type.PUBLIC_ROOM || room.channelType === Proto.ChannelRoom.Type.PUBLIC_ROOM}
        roomMute={room.roomMute === Proto.RoomMute.MUTE}
        joinBoxToggle={this.joinBoxToggle}
        messageList={messageList}
        selectedList={selectedList}
        selectedCount={selectedCount}
        getRoomMessageType={getRoomMessageType}
        cancelSelected={this.cancelSelected}
        goRoomInfoBtn={this.goRoomInfoBtn}
        onMessagePress={this.onMessagePress}
        onMessageLongPress={this.onMessageLongPress}
        selectedMessageAction={this.selectedMessageAction}
        conformControl={this.confirmControl}
        flatListRef={this.flatListRef}
        toolbarActions={toolbarActions}
        actionSheetControl={this.actionSheetControl}
        actionSheetActions={actionSheetActions}
        onScroll={this.onScroll}
        forwardModalControl={this.forwardModalControl}
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
      getEntitiesRoomMessage: (messageId) => {
        return getEntitiesRoomMessage(state, messageId);
      },
      getMessageDownloadFileUri: (cacheId) => {
        const downloadFile = state.fileManager.download[cacheId];
        return downloadFile ? downloadFile.uri : null;
      },
      getRoomMessageType: (messageId) => {
        const roomMessage = state.entities.roomMessages[messageId];
        if (!roomMessage) {
          //todo Error Report
          console.warn('getRoomMessageType: Invalid MessageId', messageId);
          return -1;
        }
        let type = roomMessage.messageType;

        if (roomMessage.replyTo) {
          type += 100;
        }
        if (roomMessage.forwardFrom) {
          const offset = roomMessage.forwardFrom.channelViewsLabel ? 100000 : 1000;
          type = roomMessage.messageType * 100 + roomMessage.forwardFrom.messageType + offset;
        }
        return type;
      },
    };
  };
};

RoomHistoryScreen.propTypes = {
  intl: intlShape.isRequired,
};
export default connect(
  makeMapStateToProps
)(injectIntl(RoomHistoryScreen));
