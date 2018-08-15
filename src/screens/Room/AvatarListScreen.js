import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AvatarListComponent from '../../components/Room/AvatarList/index';
import putState from '../../modules/Entities/Rooms/index';
import {getRoom} from '../../selector/entities/room';
import {connect} from 'react-redux';
import {
  ChannelAvatarDelete,
  ChannelAvatarGetList,
  GroupAvatarDelete,
  GroupAvatarGetList,
  Proto,
  UserAvatarDelete,
  UserAvatarGetList,
} from '../../modules/Proto/index';
import {getUserId, saveToGallery} from '../../utils/app';
import Api from '../../modules/Api/index';
import {
  CHANNEL_AVATAR_DELETE,
  CHANNEL_AVATAR_GET_LIST,
  GROUP_AVATAR_DELETE,
  GROUP_AVATAR_GET_LIST,
  USER_AVATAR_DELETE,
  USER_AVATAR_GET_LIST,
} from '../../constants/methods/index';
import {deleteAvatarList} from '../../actions/methods/rooms/getAvatarList';
import {getAvatarList} from '../../selector/methods/rooms/index';
import Share from '../../modules/Share/index';
import SaveTo from '../../../native/modules/SaveTo/index';
import {fileManagerDownload, fileManagerDownloadAutoPaused} from '../../actions/fileManager';
import {FILE_MANAGER_DOWNLOAD_MANNER, FILE_MANAGER_DOWNLOAD_STATUS} from '../../constants/fileManager';
import store from '../../configureStore';
import {getDownloadedFile} from '../../selector/entities/roomMessage';
import {prependFileProtocol} from '../../utils/core';
import {entitiesRoomEdit} from '../../actions/entities/rooms';
import {entitiesRegisteredUserEdit} from '../../actions/entities/registeredUser';

export const menuAction = {delete: 'delete', share: 'share', save: 'save'};
let priority = 1000000;

class AvatarListScreen extends Component {

  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {access: {accessDeleteAvatar: false, accessSaveToGallery: false, accessShareAvatar: false}};
    this.isChat = false;
    this.isGroup = false;
    this.isChannel = false;
  }

  componentWillUnmount() {
    const {cleanAvatarListFromMemory} = this.props;
    const {userId, roomId} = this.props.navigation.state.params;
    cleanAvatarListFromMemory(userId ? 'U' + userId : 'R' + roomId);
  }

  componentDidMount() {
    const {roomId, userId} = this.props.navigation.state.params;
    const {room} = this.props;

    if (roomId) {
      putState(roomId);
    } else {
      putState(userId);
    }
    this.setAccess(room, userId);
    this.invokeGetAvatar(room, userId);
  }

  setAccess = (room, userId) => {
    let accessDeleteAvatar = false;

    if (userId) {
      if (userId === getUserId(true)) {
        accessDeleteAvatar = true;
      }
    } else if (room) {
      this.isChat = room.type === Proto.Room.Type.CHAT;
      this.isGroup = room.type === Proto.Room.Type.GROUP;
      this.isChannel = room.type === Proto.Room.Type.CHANNEL;
      const isOwner = ((this.isGroup && room.groupRole === Proto.GroupRoom.Role.OWNER) || (this.isChannel && room.channelRole === Proto.ChannelRoom.Role.OWNER));
      const isAdmin = ((this.isGroup && room.groupRole === Proto.GroupRoom.Role.ADMIN) || (this.isChannel && room.channelRole === Proto.ChannelRoom.Role.ADMIN));
      const isMyCloud = ( this.isChat && (room.chatPeer.id === getUserId(true))  );
      accessDeleteAvatar = (isOwner || isAdmin || isMyCloud);
    }

    this.setState({
      access: {
        accessDeleteAvatar,
        accessSaveToGallery: SaveTo.gallerySupport('image'),
        accessShareAvatar: Share.isSupported,
      },
    });
  };

  invokeGetAvatar = (room, userId) => {
    if (userId) {
      const userAvatarGetList = new UserAvatarGetList();
      userAvatarGetList.setUserId(userId);
      Api.invoke(USER_AVATAR_GET_LIST, userAvatarGetList);
    } else {
      if (this.isChat) {
        const userAvatarGetList = new UserAvatarGetList();
        userAvatarGetList.setUserId(room.chatPeer.id);
        Api.invoke(USER_AVATAR_GET_LIST, userAvatarGetList);
      } else if (this.isGroup) {
        const groupAvatarGetList = new GroupAvatarGetList();
        groupAvatarGetList.setRoomId(room.id);
        Api.invoke(GROUP_AVATAR_GET_LIST, groupAvatarGetList);
      } else if (this.isChannel) {
        const channelAvatarGetList = new ChannelAvatarGetList();
        channelAvatarGetList.setRoomId(room.id);
        Api.invoke(CHANNEL_AVATAR_GET_LIST, channelAvatarGetList);
      }
    }
  };

  menuClick = (action, index) => {
    switch (action) {
      case 'delete':
        this.deleteAvatar(index);
        break;
      case 'share':
        this.shareAvatar(index);
        break;
      case 'save':
        this.saveAvatarToGallery(index);
        break;
    }
  };

  deleteAvatar = async (index) => {
    const {avatarList, room} = this.props;

    if (!avatarList) {
      return;
    }

    const {userId} = this.props.navigation.state.params;
    const avatarId = avatarList[index].avatar.getId();

    const lastAvatarIndex = index === 0 ? 1 : 0;
    const lastAvatar = avatarList.length > 1 ? avatarList[lastAvatarIndex].avatar : null;
    const count = Math.max(0, avatarList.length - 1);

    if (userId || this.isChat) {
      const userAvatarDelete = new UserAvatarDelete();
      userAvatarDelete.setId(avatarId);
      await Api.invoke(USER_AVATAR_DELETE, userAvatarDelete);
      if (store.getState().entities.registeredUsers[userId]) {
        this.props.updateChatRoomAvatar(userId, lastAvatar, count);
      }
    } else {
      if (this.isGroup) {
        const groupAvatarDelete = new GroupAvatarDelete();
        groupAvatarDelete.setRoomId(room.id);
        groupAvatarDelete.setId(avatarId);
        await Api.invoke(GROUP_AVATAR_DELETE, groupAvatarDelete);
        if (store.getState().entities.rooms[room.id]) {
          this.props.updateGroupRoomAvatar(room.id, lastAvatar, count);
        }
      } else if (this.isChannel) {
        const channelAvatarDelete = new ChannelAvatarDelete();
        channelAvatarDelete.setRoomId(room.id);
        channelAvatarDelete.setId(avatarId);
        await Api.invoke(CHANNEL_AVATAR_DELETE, channelAvatarDelete);
        if (store.getState().entities.rooms[room.id]) {
          this.props.updateChannelRoomAvatar(room.id, lastAvatar, count);
        }
      }
    }
  };

  shareAvatar = async (index) => {
    const _info = await  this.checkDownloadState(index);
    if (_info) {
      Share.open(prependFileProtocol(_info.uri), _info.mimeType);
    }
  };

  saveAvatarToGallery = async (index) => {
    const _info = await  this.checkDownloadState(index);
    if (_info) {
      saveToGallery(prependFileProtocol(_info.uri), _info.mimeType);
    }
  };

  checkDownloadState = async (index) => {
    const {avatarList} = this.props;
    const avatar = avatarList[index].avatar;
    let downloadedFile = getDownloadedFile(store.getState(), avatar.getFile());
    let result = {uri: '', mimeType: ''};
    if (downloadedFile && downloadedFile.status === FILE_MANAGER_DOWNLOAD_STATUS.COMPLETED) {
      result.uri = downloadedFile.uri;
      result.mimeType = avatar.getFile().getMime();
      return result;
    } else {
      await store.dispatch(fileManagerDownload(
        FILE_MANAGER_DOWNLOAD_MANNER.AUTO,
        avatar.getFile().getToken(),
        Proto.FileDownload.Selector.FILE,
        avatar.getFile().getSize(),
        avatar.getFile().getCacheId(),
        avatar.getFile().getName(),
        priority--));

      downloadedFile = getDownloadedFile(store.getState(), avatar.getFile());
      if (downloadedFile && downloadedFile.status === FILE_MANAGER_DOWNLOAD_STATUS.COMPLETED) {
        result.uri = downloadedFile.uri;
        result.mimeType = avatar.getFile().getMime();
        return result;
      }

      return null;
    }
  };

  startAvatarDownload = (index) => {
    const {download, avatarList} = this.props;
    download(index, avatarList);
  };

  stopAvatarDownload = (index) => {
    const {pauseDownload, avatarList} = this.props;
    if (avatarList && avatarList[index]) {
      const avatar = avatarList[index].avatar;
      const attachment = avatar.getFile();
      pauseDownload(attachment.getCacheId());
    }
  };

  render() {
    const {avatarList} = this.props;
    return (
      <AvatarListComponent
        goBack={this.props.navigation.goBack}
        avatarList={avatarList}
        access={this.state.access}
        menuClick={this.menuClick}
        startAvatarDownload={this.startAvatarDownload}
        stopAvatarDownload={this.stopAvatarDownload}
      />
    );
  }
}

AvatarListScreen.propTypes = {
  roomId: PropTypes.string,
  userId: PropTypes.string,
};

const makeMapStateToProps = () => {
  return (state, props) => {
    return {
      room: getRoom(state, props),
      avatarList: getAvatarList(state, props),
    };
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    cleanAvatarListFromMemory: (id) => {
      dispatch(deleteAvatarList(id));
    },
    updateGroupRoomAvatar: (id, lastAvatar, count) => {
      dispatch(entitiesRoomEdit(id, {groupAvatar: lastAvatar, groupAvatarCount: count}));
    },
    updateChannelRoomAvatar: (id, lastAvatar, count) => {
      dispatch(entitiesRoomEdit(id, {channelAvatar: lastAvatar, channelAvatarCount: count}));
    },
    updateChatRoomAvatar: (id, lastAvatar, count) => {
      dispatch(entitiesRegisteredUserEdit(id, {avatar: lastAvatar, avatarCount: count}));
    },

    download: (index, avatarList) => {
      const avatar = avatarList[index].avatar;
      const attachment = avatar.getFile();
      dispatch(fileManagerDownload(
        FILE_MANAGER_DOWNLOAD_MANNER.AUTO,
        attachment.getToken(),
        Proto.FileDownload.Selector.FILE,
        attachment.getSize(),
        attachment.getCacheId(),
        attachment.getName(),
        priority--));
    },

    pauseDownload: (cacheId) => {
      dispatch(fileManagerDownloadAutoPaused(cacheId));
    },

  };
};

export default connect(makeMapStateToProps, mapDispatchToProps)(AvatarListScreen);

