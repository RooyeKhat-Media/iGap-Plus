import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {isArray, keys} from 'lodash';
import {injectIntl, intlShape} from 'react-intl';
import SaveTo from '../../../native/modules/SaveTo';
import Share from '../../modules/Share/index';
import {getRoom} from '../../selector/entities/room';
import RNFileSystem, {FileUtil} from 'react-native-file-system';
import loadRoomHistory, {getRoomFirstMessageId, getRoomLastMessageId} from '../../modules/Messenger/loadRoomHistory';
import RoomHistoryComponent from '../../components/Room/RoomHistory';
import {getRoomMessageList} from '../../selector/messenger/roomMessage';
import {
  goCamera,
  goContactPicker,
  goLocationPicker,
  goRoomHistory,
  goRoomInfo,
  goRoomReport,
} from '../../navigators/SecondaryNavigator';
import {
  blurRoom,
  deleteMessages,
  editRoomMessage, focusRoom,
  forwardToList,
  resendMessage,
  sendActionRequest,
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
import {getAuthorHash, getFakeMessageId, getMessageDownloadFileUri, setRoomHistorySelectedMode} from '../../utils/app';
import {
  ClientJoinByUsername,
  ClientMuteRoom,
  ClientSubscribeToRoom,
  ClientUnsubscribeFromRoom,
  Proto,
} from '../../modules/Proto/index';
import {getEntitiesRoomMessageFunc, getEntitiesRoomMessageTypeFunc} from '../../selector/entities/roomMessage';
import {
  CLIENT_JOIN_BY_USERNAME,
  CLIENT_MUTE_ROOM,
  CLIENT_SUBSCRIBE_TO_ROOM,
  CLIENT_UNSUBSCRIBE_FROM_ROOM,
} from '../../constants/methods/index';
import Api from '../../modules/Api/index';
import i18n from '../../i18n';
import {getImageSize, prependFileProtocol, sleep} from '../../utils/core';
import Clipboard from '../../modules/Clipboard/index';
import {messengerRoomAddList} from '../../actions/messenger/rooms';
import {messengerRoomMessageClearMessageFromStore} from '../../actions/messenger/roomMessages';
import {cameraMode} from '../General/CameraScreen';
import {getUserFunc} from '../../selector/entities/registeredUser';
import {entitiesRoomEdit} from '../../actions/entities/rooms';
import {getMessagesDimension} from '../../modules/DimensionCalculator/index';

class RoomHistoryScreen extends PureComponent {

  onScroll = async (event, offsetX, offsetY) => {
    const {room} = this.props;
    if (!this.loading && offsetY < 300) {
      try {
        this.loading = true;
        const roomMessages = await loadRoomHistory(room.id, getRoomLastMessageId(room.id) || room.lastMessage, false);
        const offsetTop = getMessagesDimension(roomMessages, room.type);
        this.flatList.scrollToOffset(0, offsetTop);
      } finally {
        await sleep(1);
        this.loading = false;
      }
    }
  };

  onEndReached = async (firstLoad = false) => {
    const {room} = this.props;
    if (!this.loading) {
      try {
        this.loading = true;
        await loadRoomHistory(room.id, getRoomFirstMessageId(room.id) || room.lastMessage, true, firstLoad);
      } finally {
        this.loading = false;
      }
    }
  };

  async componentDidMount() {
    const {room, messageList} = this.props;
    focusRoom(room.id);
    this.didFocusSubscription = this.props.navigation.addListener(
      'didFocus',
      () => {
        focusRoom(room.id);
      }
    );
    this.didBlurSubscription = this.props.navigation.addListener(
      'didBlur',
      () => {
        blurRoom(room.id);
      }
    );

    if (!messageList || !messageList.length) {
      if (room.firstUnreadMessage) {
        try {
          this.loading = true;
          await Promise.all([
            loadRoomHistory(room.id, room.firstUnreadMessage),
            loadRoomHistory(room.id, room.firstUnreadMessage, false, true),
          ]);
          this.scrollToIndex();
        } finally {
          this.loading = false;
        }
      } else {
        await this.onEndReached(true);
      }
    } else {
      this.scrollToIndex();
    }

    if (this.props.navigation.state.params.forwardedMessage) {
      const forwardParam = this.props.navigation.state.params.forwardedMessage;
      if (isArray(forwardParam)) {
        forwardParam.map(function (forwardedMessage) {
          sendMessage(room.id, null, null, null, null, forwardedMessage);
        });
      } else {
        this.setState({forwardedMessage: forwardParam});
      }
    }

    if (!room.isParticipant) {
      const {clearMessageFromStore} = this.props;
      clearMessageFromStore(room.id);
      const clientSubscribeToRoom = new ClientSubscribeToRoom();
      clientSubscribeToRoom.setRoomId(room.id);
      await Api.invoke(CLIENT_SUBSCRIBE_TO_ROOM, clientSubscribeToRoom);
    }
  }

  scrollToIndex = async () => {
    const {room, messageList} = this.props;
    await sleep(1);
    if (messageList && room.firstUnreadMessage) {
      const index = messageList.indexOf(room.firstUnreadMessage);
      if (index >= 0) {
        this.flatList.scrollToIndex(index);
      }
    }
  };

  componentWillUnmount() {
    const {room, editRoom} = this.props;
    blurRoom(room.id);
    if (room && !room.isParticipant) {
      const {clearMessageFromStore} = this.props;
      clearMessageFromStore(room.id);
      const clientUnsubscribeFromRoom = new ClientUnsubscribeFromRoom();
      clientUnsubscribeFromRoom.setRoomId(room.id);
      Api.invoke(CLIENT_UNSUBSCRIBE_FROM_ROOM, clientUnsubscribeFromRoom);
    }

    if (room && room.firstUnreadMessage) {
      editRoom(room.id, {firstUnreadMessage: null});
    }
    this.didFocusSubscription.remove();
    this.didBlurSubscription.remove();
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
    this.typingId = null;
    this.typingTimeout = null;
    this.state = {
      text: '',
      pickedFile: null,
      attachmentType: null,
      replyTo: null,
      forwardedMessage: null,
      editMessageId: null,
      selectedList: {},
      selectedCount: 0,
      access: {
        sendMessage: room.isParticipant && (isChat || isGroup || (isChannel && (isModerator || isAdmin || isOwner))),
        editMessage: false,
        deleteMessage: room.isParticipant && (isChat || isGroup || (isChannel && (isModerator || isAdmin || isOwner))),
      },
    };
  }

  goRoomInfoBtn = () => {
    const {room} = this.props;
    goRoomInfo(room.id);
  };

  onChangeText = (text) => {
    const {room} = this.props;
    this.setState({text});
    if (!text) {
      return;
    }
    if (!this.typingId) {
      this.typingId = sendActionRequest(room.id, Proto.ClientAction.TYPING);
    }
    clearTimeout(this.typingTimeout);
    this.typingTimeout = setTimeout(() => {
      if (this.typingId) {
        sendActionRequest(room.id, Proto.ClientAction.CANCEL, this.typingId);
        this.typingId = null;
      }
    }, 3000);
  };

  /**
   * @param text
   * @returns {Promise.<void>}
   */
  submitForm = (text) => {
    const {room, getRoomMessage} = this.props;
    const {editMessageId, pickedFile, attachmentType, replyTo, forwardedMessage} = this.state;
    try {
      if (!editMessageId) {
        sendMessage(room.id, text, pickedFile, attachmentType, replyTo ? replyTo.longId : null, forwardedMessage);
      } else {
        const roomMessage = getRoomMessage(editMessageId);
        editRoomMessage(room.id, roomMessage.longId, text);
      }
    } finally {
      this.setState({
        editMessageId: null,
        text: '',
        pickedFile: null,
        attachmentType: null,
        replyTo: null,
        forwardedMessage: null,
      });
      if (this.typingId) {
        sendActionRequest(room.id, Proto.ClientAction.CANCEL, this.typingId);
        this.typingId = null;
      }
    }
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

  selectCamera = () => {
    const {intl} = this.props;
    const denialMessage = [
      intl.formatMessage(i18n.roomHistoryCameraPermission),
      intl.formatMessage(i18n.roomHistoryCameraPermissionMessage),
      intl.formatMessage(i18n.roomHistoryStoragePermission),
      intl.formatMessage(i18n.roomHistoryStoragePermissionMessage),
    ];
    goCamera(
      async (path) => {
        const pickedFile = await RNFileSystem.fInfo(path);
        const size = await getImageSize(path);
        pickedFile.width = size.width;
        pickedFile.height = size.height;
        this.setState({
          pickedFile: pickedFile,
          attachmentType: ROOM_MESSAGE_ATTACHMENT_TYPE_IMAGE,
        });
      },
      (error) => {},
      cameraMode.CAMERA,
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
        sendMessage(room.id, '', null, null, null, null, roomMessageContact);
      }
    }, false);
  };

  selectLocation = () => {
    const {room} = this.props;
    goLocationPicker((coordinate) => {
      const roomMessageLocation = new Proto.RoomMessageLocation();
      roomMessageLocation.setLat(coordinate.latitude);
      roomMessageLocation.setLon(coordinate.longitude);
      sendMessage(room.id, '', null, null, null, null, null, roomMessageLocation);
    });
  };

  cancelAttach = () => {
    this.setState({
      pickedFile: null,
      attachmentType: null,
    });
  };

  onMessagePress = (message) => {
    const {selectedCount} = this.state;
    if (message.status === Proto.RoomMessageStatus.FAILED) {
      resendMessage(message);
    } else {
      if (selectedCount) {
        this.selectMessage(message.id);
      } else {
        this.actionSheet.open(this.getActionList(message));
      }
    }
  };
  onMessageLongPress = (message) => {
    const {selectedCount} = this.state;
    if (!selectedCount) {
      this.selectMessage(message.id);
    }
  };

  selectMessage = (messageId) => {
    const {getRoomMessage} = this.props;
    this.setState(prevState => {
      const selectedList = {...prevState.selectedList};
      const selectedCount = selectedList[messageId] ? prevState.selectedCount - 1 : prevState.selectedCount + 1;
      if (!selectedList[messageId]) {
        selectedList[messageId] = true;
      } else {
        delete selectedList[messageId];
      }
      const firstRoomMessage = selectedCount === 1 ? getRoomMessage(keys(selectedList)[0]) : null;
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
    const {room, getRoomMessage} = this.props;
    const {selectedList} = this.state;
    const selectedKeys = keys(selectedList);
    const roomMessage = getRoomMessage(selectedKeys[0]);
    switch (selected.action) {

      case ROOM_MESSAGE_ACTION_REPLY:
        this.actionReply(roomMessage);
        break;
      case ROOM_MESSAGE_ACTION_FORWARD:
        const forwardList = [];
        selectedKeys.forEach(function(id) {
          forwardList.push(getRoomMessage(id));
        });
        this.actionForward(forwardList);
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
    if (ref) {
      this.forwardModal = ref.getWrappedInstance();
    }
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
        count: keys(selectedList).length,
      },
    }, () => {
      deleteMessages(room.id, keys(selectedList));
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

          const {addRoomList} = this.props;
          room.isParticipant = true;
          addRoomList(room.id);
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
    const {access} = this.state;
    const {intl} = this.props;

    let uri = null;
    let message = null;
    let mimType = null;
    const forwardMessage = roomMessage.forwardFrom;

    if (forwardMessage) {
      message = forwardMessage.message;
      if (forwardMessage.attachment) {
        uri = getMessageDownloadFileUri(forwardMessage.attachment.getCacheId());
        mimType = forwardMessage.attachment.getMime();
      }
    }
    if (roomMessage.message) {
      message = roomMessage.message;
    }
    if (roomMessage.attachment) {
      uri = getMessageDownloadFileUri(roomMessage.attachment.getCacheId());
      mimType = roomMessage.attachment.getMime();
    }

    uri = prependFileProtocol(uri);

    if (message && Clipboard.isSetSupported) {
      actions.push({
        icon: 'content-copy',
        title: intl.formatMessage(i18n.roomHistoryActionContentCopy),
        onPress: () => {
          Clipboard.setString(message);
        },
      });
    }
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
    if (uri && SaveTo.downloadsSupport()) {
      actions.push({
        icon: 'cloud-download',
        title: intl.formatMessage(i18n.roomHistoryActionSaveToDownload),
        onPress: () => {
          SaveTo.downloads(uri);
        },
      });
    }
    if (uri && SaveTo.gallerySupport(mimType)) {
      actions.push({
        icon: 'collections',
        title: intl.formatMessage(i18n.roomHistoryActionSaveToGallery),
        onPress: () => {
          SaveTo.gallery(uri, mimType);
        },
      });
    }
    if (uri && SaveTo.musicSupport(mimType)) {
      actions.push({
        icon: 'audiotrack',
        title: intl.formatMessage(i18n.roomHistoryActionSaveToMusic),
        onPress: () => {
          SaveTo.music(uri, mimType);
        },
      });
    }
    if (Share.isSupported && !(mimType && !uri)) {
      actions.push({
        icon: 'share',
        title: intl.formatMessage(i18n.roomHistoryActionShare),
        onPress: () => {
          Share.open(uri, uri ? mimType : null, message);
        },
      });
    }
    return actions;
  };

  render() {
    const {room, messageList, getRoomMessage, getRoomMessageType} = this.props;
    const {text, pickedFile, replyTo, forwardedMessage, editMessageId, selectedCount, selectedList} = this.state;
    const Form = {
      text,
      replyTo,
      pickedFile,
      editMessageId,
      forwardedMessage,
      selectAttachment: this.selectAttachment,
      selectCamera: this.selectCamera,
      selectContact: this.selectContact,
      selectLocation: this.selectLocation,
      cancelAttach: this.cancelAttach,
      onChangeText: this.onChangeText,
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
        getRoomMessage={getRoomMessage}
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
        onScroll={this.onScroll}
        onEndReached={this.onEndReached}
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
      getRoomMessage: getEntitiesRoomMessageFunc(state),
      getRoomMessageType: getEntitiesRoomMessageTypeFunc(state),
      getRegisteredUser: getUserFunc(state),
    };
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addRoomList: (roomId) => {
      return dispatch(messengerRoomAddList({
        [roomId]: {
          id: roomId,
          sort: getFakeMessageId().toString(),
          pinId: '0',
        },
      }));
    },

    clearMessageFromStore: (roomId) => {
      dispatch(messengerRoomMessageClearMessageFromStore(roomId));
    },

    editRoom: (roomId, payload, updateDb) => {
      dispatch(entitiesRoomEdit(roomId, payload, updateDb));
    },
  };
};

RoomHistoryScreen.propTypes = {
  intl: intlShape.isRequired,
};
export default connect(makeMapStateToProps, mapDispatchToProps)(injectIntl(RoomHistoryScreen));
