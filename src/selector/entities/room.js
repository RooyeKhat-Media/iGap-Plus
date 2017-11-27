import {createSelector} from 'reselect';
import {FileDownload} from '../../modules/Proto/index';
import {FILE_MANAGER_DOWNLOAD_STATUS} from '../../constants/fileManager';

export const getRoomId = (state, props) => {
  return props.roomId || (props.navigation ? props.navigation.state.params.roomId : null);
};

export const getRoom = createSelector(
  (state) => state.entities,
  getRoomId,
  (entities, roomId) => {
    return entities.rooms[roomId];
  }
);

export const getRoomPeer = createSelector(
  getRoom,
  (state) => state.entities.registeredUsers,
  (room, registeredUsers) => {
    return room ? registeredUsers[room.chatPeer] : null;
  }
);

export const getRoomLastMessage = createSelector(
  getRoom,
  (state) => state.entities.roomMessages,
  (room, roomMessages) => {
    return room ? roomMessages[room.lastMessage] : null;
  }
);

export const getRoomAvatar = createSelector(
  getRoom,
  getRoomPeer,
  (state, props) => props.size,
  (room, chatPeer, size) => {
    if (!room) {
      return null;
    }
    const avatar = room.groupAvatar || room.channelAvatar || (chatPeer ? chatPeer.avatar : null);
    let selector = null;
    let fileSelector = null;

    if (avatar) {
      if (size > 100 && avatar.file.getLargeThumbnail()) {
        selector = FileDownload.Selector.LARGE_THUMBNAIL;
        fileSelector = avatar.file.getLargeThumbnail();
      } else if (avatar.file.getSmallThumbnail()) {
        selector = FileDownload.Selector.SMALL_THUMBNAIL;
        fileSelector = avatar.file.getSmallThumbnail();
      }
    }

    return {
      color: room.color,
      initials: room.initials,
      avatar: fileSelector ? {
        token: avatar.file.getToken(),
        selector,
        size: fileSelector.getSize(),
        cacheId: fileSelector.getCacheId(),
        fileName: fileSelector.getName(),
      } : null,
    };
  }
);

export const getRoomAvatarUri = createSelector(
  getRoomAvatar,
  (state) => state.fileManager.download,
  (roomAvatar, downloads) => {
    if (
      roomAvatar &&
      roomAvatar.avatar &&
      downloads[roomAvatar.avatar.cacheId] &&
      downloads[roomAvatar.avatar.cacheId].status === FILE_MANAGER_DOWNLOAD_STATUS.COMPLETED
    ) {
      return downloads[roomAvatar.avatar.cacheId].uri;
    }
    return null;
  }
);

export const getRoomTitle = createSelector(
  getRoom,
  (room) => {
    return room ? {
      title: room.title,
      color: room.color,
    } : null;
  }
);