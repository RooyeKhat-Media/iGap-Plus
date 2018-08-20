import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {isArray, keys} from 'lodash';
import {injectIntl, intlShape} from 'react-intl';
import SaveTo from '../../../native/modules/SaveTo';
import Share from '../../modules/Share/index';
import {getRoom, getRoomPeer} from '../../selector/entities/room';
import loadRoomHistory, {getRoomFirstMessageId, getRoomLastMessageId} from '../../modules/Messenger/loadRoomHistory';
import RoomHistoryComponent from '../../components/Room/RoomHistory';
import {getRoomMessageList} from '../../selector/messenger/roomMessage';
import {goRoomHistory, goRoomInfo, goRoomPicker, goRoomReport} from '../../navigators/SecondaryNavigator';
import {
  blurRoom,
  deleteMessages,
  dispatchMessengerRoomAddList,
  focusRoom,
  forwardToList,
  resendMessage,
  sendMessage,
} from '../../utils/messenger';
import {
  ROOM_MESSAGE_ACTION_DELETE,
  ROOM_MESSAGE_ACTION_EDIT,
  ROOM_MESSAGE_ACTION_FORWARD,
  ROOM_MESSAGE_ACTION_REPLY,
  ROOM_MESSAGE_ACTION_REPORT,
} from '../../constants/app';
import {
  getAuthorHash,
  getChatDeleteMessageForBothPeriod,
  getMessageDownloadFileUri,
  saveToDownloads,
  saveToGallery,
  saveToMusic,
  setRoomHistorySelectedMode,
  shareMessage,
} from '../../utils/app';
import {
  ClientJoinByUsername,
  ClientMuteRoom,
  ClientSubscribeToRoom,
  ClientUnsubscribeFromRoom,
  Proto,
} from '../../modules/Proto/index';
import {getEntitiesRoomMessageFunc} from '../../selector/entities/roomMessage';
import {
  CLIENT_JOIN_BY_USERNAME,
  CLIENT_MUTE_ROOM,
  CLIENT_SUBSCRIBE_TO_ROOM,
  CLIENT_UNSUBSCRIBE_FROM_ROOM,
  INFO_WALLPAPER_RESPONSE,
} from '../../constants/methods/index';
import Api, {getServerTime} from '../../modules/Api/index';
import i18n from '../../i18n';
import {objectToUint8Array, prependFileProtocol, sleep} from '../../utils/core';
import Clipboard from '../../modules/Clipboard/index';
import {messengerRoomMessageClearMessageFromStore} from '../../actions/messenger/roomMessages';
import {entitiesRoomEdit} from '../../actions/entities/rooms';
import {getMessagesDimension} from '../../modules/DimensionCalculator/index';
import {CLIENT_GET_ROOM_HISTORY_PAGINATION_LIMIT} from '../../constants/configs';
import {apiInvoke} from '../../modules/Entities/Rooms/index';
import {fileManagerDownload} from '../../actions/fileManager';
import {FILE_MANAGER_DOWNLOAD_MANNER} from '../../constants/fileManager';
import MetaData from '../../models/MetaData';
import {METADATA_USER_SELECTED_WALLPAPER, METADATA_USER_WALLPAPER_DATA} from '../../models/MetaData/constant';
import protoTable from '../../modules/Proto';
import {goUserQrCodeLoginScreen} from '../../navigators/AppNavigator';
import {qrMode} from '../User/UserQrCodeLoginScreen';

let priority = 1000000;

class RoomHistoryScreen extends PureComponent {

  onScroll = async (event, offsetX, offsetY) => {
    if (offsetY < 300) {
      this.loadFromBottom();
    } else if (event.nativeEvent.contentSize.height - offsetY <= 2 * event.nativeEvent.layoutMeasurement.height) {
      this.loadFromTop();
    }
  };

  loadFromBottom = async () => {
    const {room} = this.props;
    if (!this.loading) {
      try {
        this.loading = true;
        const roomMessages = await loadRoomHistory(room.id, getRoomLastMessageId(room.id) || room.lastMessage, false);
        if (roomMessages.length) {
          const offsetTop = getMessagesDimension(roomMessages, room.type);
          this.flatList.scrollToOffset(0, offsetTop);
        }
      } finally {
        await sleep(1);
        this.loading = false;
      }
    }
  };

  loadFromTop = async (firstLoad = false) => {
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
    let {room} = this.props;
    if (room) {
      this.initializeRoom(room);
    }
    this.loadBackground();
  }

  loadBackground = async () => {
    const selectedWallpaper = await MetaData.load(METADATA_USER_SELECTED_WALLPAPER);
    if (selectedWallpaper !== null && selectedWallpaper >= 0) {
      const wallpaperData = await MetaData.load(METADATA_USER_WALLPAPER_DATA);
      if (wallpaperData !== null || wallpaperData.data !== null) {
        const responseProto = protoTable[INFO_WALLPAPER_RESPONSE].deserializeBinary(objectToUint8Array(wallpaperData.data));
        this.setState({
          selectedBackGround: {
            index: selectedWallpaper,
            avatar: responseProto.getWallpaperList()[selectedWallpaper],
          },
        });
      }
    }
  };


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
    this.initialized = false;
    this.loading = false;
    this.state = {
      selectedList: {},
      selectedCount: 0,
      toolbarActions: [],
      access: {
        sendMessage: false,
        editMessage: false,
        deleteMessage: false,
      },
      selectedBackGround: null,
    };
  }

  componentWillReceiveProps(nextProps) {
    const {room} = nextProps;
    if (room && !this.initialized) {
      this.initializeRoom(room);
    }
    if (room && this.props.room && this.props.room.type !== room.type) {
      this.setAccess(room);
    }
  }

  async initializeRoom(room) {
    const {messageList, editRoom} = this.props;
    this.initialized = true;
    this.setAccess(room);
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
    } else if (!messageList || messageList.length < CLIENT_GET_ROOM_HISTORY_PAGINATION_LIMIT) {
      await loadRoomHistory(room.id, room.lastMessage, true, true);
    }

    if (this.props.navigation.state.params.forwardedMessage) {
      const forwardParam = this.props.navigation.state.params.forwardedMessage;
      if (isArray(forwardParam)) {
        forwardParam.map(function(forwardedMessage) {
          sendMessage(room.id, null, null, null, null, forwardedMessage);
        });
      } else {
        this.sendBox.setForwardMessage(forwardParam);
      }
    }
    editRoom(room.id, {unreadCount: 0});
    if (!room.isParticipant) {
      const clientSubscribeToRoom = new ClientSubscribeToRoom();
      clientSubscribeToRoom.setRoomId(room.id);
      await Api.invoke(CLIENT_SUBSCRIBE_TO_ROOM, clientSubscribeToRoom);
    }
  }

  setAccess(room) {
    const isChat = room.type === Proto.Room.Type.CHAT;
    const isGroup = room.type === Proto.Room.Type.GROUP;
    const isChannel = room.type === Proto.Room.Type.CHANNEL;

    const isOwner = ((isGroup && room.groupRole === Proto.GroupRoom.Role.OWNER) || (isChannel && room.channelRole === Proto.ChannelRoom.Role.OWNER));
    const isAdmin = ((isGroup && room.groupRole === Proto.GroupRoom.Role.ADMIN) || (isChannel && room.channelRole === Proto.ChannelRoom.Role.ADMIN));
    const isModerator = ((isGroup && room.groupRole === Proto.GroupRoom.Role.MODERATOR) || (isChannel && room.channelRole === Proto.ChannelRoom.Role.MODERATOR));

    this.setState({
      access: {
        sendMessage: room.isParticipant && (isChat || isGroup || (isChannel && (isModerator || isAdmin || isOwner))) && !room.readOnly,
        editMessage: false,
        deleteMessage: room.isParticipant && (isChat || isGroup || (isChannel && (isModerator || isAdmin || isOwner))),
      },
    });
  }

  goRoomInfoBtn = () => {
    const {room} = this.props;
    goRoomInfo(room.id);
  };

  onMessagePress = (message) => {
    const {selectedCount} = this.state;
    if (message.status === Proto.RoomMessageStatus.FAILED) {
      resendMessage(message);
    } else if (message.status !== Proto.RoomMessageStatus.SENDING) {
      if (selectedCount) {
        this.selectMessage(message.id);
      } else {
        this.actionSheet.open(this.getActionList(message));
      }
    }
  };
  onMessageLongPress = (message) => {
    const {selectedCount} = this.state;
    if (!selectedCount && (
      message.status !== Proto.RoomMessageStatus.FAILED &&
        message.status !== Proto.RoomMessageStatus.SENDING)) {
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
        toolbarActions: this.getToolbarAction(selectedCount),
        access: {
          ...prevState.access,
          editMessage: firstRoomMessage ? (
            firstRoomMessage.authorHash === getAuthorHash() &&
            firstRoomMessage.messageType !== Proto.RoomMessageType.VOICE
          ) : false,
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
      toolbarActions: this.getToolbarAction(0),
    });
  };

  getToolbarAction = (selectedCount) => {
    const actions = [];
    const {room} = this.props;
    const {access} = this.state;

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
          this.sendBox.setEditMessage(roomMessage);
        }
        break;
    }
    this.cancelSelected();
  };

  actionReply = (message) => {
    this.sendBox.setReplyTo(message);
  };

  actionForward = (message) => {
    goRoomPicker(selectList => {
      if (selectList.length === 1 && selectList[0].roomId) {
        goRoomHistory(selectList[0].roomId, message);
      } else {
        forwardToList(selectList, message);
      }
    });
  };

  actionDeleteMessages = (selectedList) => {
    const {room, intl, getRoomMessage} = this.props;
    let _allowDeleteForBoth = room.type === Proto.Room.Type.CHAT;
    keys(selectedList).forEach((key) => {
      const message = getRoomMessage(key);
      _allowDeleteForBoth =
        _allowDeleteForBoth &&
        message &&
        message.authorHash === getAuthorHash() &&
        getServerTime() < getRoomMessage(key).createTime + getChatDeleteMessageForBothPeriod();
    });

    this.confirm.open(i18n.roomHistoryDeleteMessagesTitle, {
      ...i18n.roomHistoryDeleteMessagesDescription, values: {
        roomTitle: room.title,
        count: keys(selectedList).length,
      },
    }, (both) => {
      deleteMessages(room.id, keys(selectedList), both);
    }, _allowDeleteForBoth ? {
      label: intl.formatMessage(i18n.roomHistoryDeleteMessageForBoth, {userTitle: room.title}),
      value: 'checkbox',
    } : null);
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
          await apiInvoke(room.id);
          dispatchMessengerRoomAddList(room.id);
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
    if (roomMessage.authorHash === getAuthorHash() && roomMessage.messageType !== Proto.RoomMessageType.VOICE) {
      actions.push({
        icon: 'edit',
        title: intl.formatMessage(i18n.roomHistoryActionEdit),
        onPress: () => {
          this.sendBox.setEditMessage(roomMessage);
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
          saveToDownloads(uri);
        },
      });
    }
    if (uri && SaveTo.gallerySupport(mimType)) {
      actions.push({
        icon: 'collections',
        title: intl.formatMessage(i18n.roomHistoryActionSaveToGallery),
        onPress: () => {
          saveToGallery(uri, mimType);
        },
      });
    }
    if (uri && SaveTo.musicSupport(mimType)) {
      actions.push({
        icon: 'audiotrack',
        title: intl.formatMessage(i18n.roomHistoryActionSaveToMusic),
        onPress: () => {
          saveToMusic(uri, mimType);
        },
      });
    }
    if (Share.isSupported && !(mimType && !uri)) {
      actions.push({
        icon: 'share',
        title: intl.formatMessage(i18n.roomHistoryActionShare),
        onPress: () => {
          shareMessage(roomMessage);
        },
      });
    }
    return actions;
  };

  onRoomHistoryMorePress = (selected) => {
    const {room} = this.props;
    switch (selected) {
      case 0:
        goRoomReport(room.id);
        break;
      case 1:
        this.getQrLink(room);
        break;
    }
  };

  getQrLink = (room) => {
    switch (room.type) {
      case 0:                                 //chat
        const {chatUserName} = this.props;
        if (chatUserName) {
          goUserQrCodeLoginScreen(qrMode.RESOLVE, {username: chatUserName, message_id: 0});
        }
        break;
      case 1:                               //group
        if (room.groupType === 0) {
          if (room.groupPrivateInviteToken && room.groupPrivateInviteToken.length > 0) {
            goUserQrCodeLoginScreen(qrMode.JOIN, {invite_token: room.groupPrivateInviteToken});
          }
        } else {
          if (room.groupPublicUsername && room.groupPublicUsername.length > 0) {
            goUserQrCodeLoginScreen(qrMode.RESOLVE, {username: room.groupPublicUsername, message_id: 0});
          }
        }
        break;
      case 2:                              //channel
        if (room.channelType === 0) {
          if (room.channelPrivateInviteToken && room.channelPrivateInviteToken.length > 0) {
            goUserQrCodeLoginScreen(qrMode.JOIN, {invite_token: room.channelPrivateInviteToken});
          }
        } else {
          if (room.channelPublicUsername && room.channelPublicUsername.length > 0) {
            goUserQrCodeLoginScreen(qrMode.RESOLVE, {username: room.channelPublicUsername, message_id: 0});
          }
        }
        break;
    }
  };

  controlSendBox = (sendBox) => {
    this.sendBox = sendBox;
  };

  startAvatarDownload = (index) => {
    const {download} = this.props;
    download(this.state.selectedBackGround.avatar.file);
  };

  stopAvatarDownload = (index) => {
    //backGround chat must download without stop
  };


  render() {
    const {room, clientUpdating, messageList, getRoomMessage, chatPeerVerified} = this.props;
    const {selectedCount, selectedList, toolbarActions} = this.state;
    if (!room) {
      return null;
    }
    return (
      <RoomHistoryComponent
        roomId={room.id}
        roomType={room.type}
        roomTitle={room.title}
        readOnly={room.readOnly}
        clientUpdating={clientUpdating}
        isParticipant={room.isParticipant}
        isPublic={room.groupType === Proto.GroupRoom.Type.PUBLIC_ROOM || room.channelType === Proto.ChannelRoom.Type.PUBLIC_ROOM}
        roomMute={room.roomMute === Proto.RoomMute.MUTE}
        joinBoxToggle={this.joinBoxToggle}
        messageList={messageList || []}
        selectedList={selectedList}
        selectedCount={selectedCount}
        getRoomMessage={getRoomMessage}
        controlSendBox={this.controlSendBox}
        cancelSelected={this.cancelSelected}
        goRoomInfoBtn={this.goRoomInfoBtn}
        onMessagePress={this.onMessagePress}
        onMessageLongPress={this.onMessageLongPress}
        selectedMessageAction={this.selectedMessageAction}
        conformControl={this.confirmControl}
        flatListRef={this.flatListRef}
        toolbarActions={toolbarActions}
        onRoomHistoryMorePress={this.onRoomHistoryMorePress}
        actionSheetControl={this.actionSheetControl}
        onScroll={this.onScroll}
        goBack={this.props.navigation.goBack}
        verified={room.channelVerified || chatPeerVerified}
        startAvatarDownload={this.startAvatarDownload}
        stopAvatarDownload={this.stopAvatarDownload}
        selectedBackGround={this.state.selectedBackGround}
      />
    );
  }
}

const makeMapStateToProps = () => {
  return (state, props) => {
    const chatPeer = getRoomPeer(state, props);
    return {
      room: getRoom(state, props),
      messageList: getRoomMessageList(state, props),
      getRoomMessage: getEntitiesRoomMessageFunc(state),
      clientUpdating: state.clientUpdating,
      chatPeerVerified: chatPeer ? chatPeer.verified : null,
      chatUserName: chatPeer ? chatPeer.username : null,
    };
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearMessageFromStore: (roomId) => {
      dispatch(messengerRoomMessageClearMessageFromStore(roomId));
    },

    editRoom: (roomId, payload, updateDb) => {
      dispatch(entitiesRoomEdit(roomId, payload, updateDb));
    },

    download: (attachment) => {
      dispatch(fileManagerDownload(
        FILE_MANAGER_DOWNLOAD_MANNER.AUTO,
        attachment.getToken(),
        Proto.FileDownload.Selector.FILE,
        attachment.getSize(),
        attachment.getCacheId(),
        attachment.getName(),
        priority--));
    },
  };
};

RoomHistoryScreen.propTypes = {
  intl: intlShape.isRequired,
};
export default connect(makeMapStateToProps, mapDispatchToProps)(injectIntl(RoomHistoryScreen));
