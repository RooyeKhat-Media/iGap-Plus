import {createSelector} from 'reselect';
import {FileDownload} from '../../modules/Proto/index';

const getRoom = (state, props) => {
  const room = state.entities.rooms[props.roomId];
  return {
    ...room,
    chatPeer: room.chatPeer ? state.entities.registeredUsers[room.chatPeer] : null,
  };
};

export const getRoomWithMessages = createSelector(
  getRoom,
  (state) => state.entities.roomMessages,
  (room, roomMessages) => {
    return {
      ...room,
      lastMessage: room ? roomMessages[room.lastMessage] : null,
      firstUnreadMessage: room ? roomMessages[room.firstUnreadMessage] : null,
    };
  }
);

export const getRoomAvatar = createSelector(
  getRoom,
  (state, props) => props.size,
  (room, size) => {
    const avatar = room.groupAvatar || room.channelAvatar || (room.chatPeer ? room.chatPeer.avatar : null);
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
      } : null,
    };
  }
);