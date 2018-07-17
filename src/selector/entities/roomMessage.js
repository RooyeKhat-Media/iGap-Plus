import {createSelector} from 'reselect';
import {FILE_MANAGER_DOWNLOAD_STATUS} from '../../constants/fileManager';

export const getEntitiesRoomMessages = (state) => state.entities.roomMessages;
export const getEntitiesRoomMessage = (state, messageId) => state.entities.roomMessages[messageId];

export const getEntitiesRoomMessageFunc = createSelector(
  getEntitiesRoomMessages,
  (getEntitiesRoomMessages) => (messageId) => {
    return getEntitiesRoomMessages[messageId];
  }
);

export const getRoomMessage = (state, props) => state.entities.roomMessages[props.messageId];

export const getRoomMessageIsFirstUnread = (state, props) => state.entities.rooms[props.roomId] && state.entities.rooms[props.roomId].firstUnreadMessage === props.messageId;

export const getDownloadedFile = createSelector(
  (state, attachment) => attachment,
  (state) => state.fileManager.download,
  (attachment, downloads) => {
    return attachment ? downloads[attachment.getCacheId()] : null;
  }
);

export const getSmallThumbnailUri = createSelector(
  (state, attachment) => attachment,
  (state) => state.fileManager.download,
  (attachment, downloads) => {
    if (attachment) {
      const smallTC = attachment.getSmallThumbnail() ? attachment.getSmallThumbnail().getCacheId() : null;
      if (smallTC && downloads[smallTC] && downloads[smallTC].status === FILE_MANAGER_DOWNLOAD_STATUS.COMPLETED) {
        return downloads[smallTC].uri;
      }
    }
    return null;
  }
);

export const getWaveformThumbnailUri = createSelector(
  (state, attachment) => attachment,
  (state) => state.fileManager.download,
  (attachment, downloads) => {
    if (attachment) {
      const waveformTC = attachment.getWaveformThumbnail() ? attachment.getWaveformThumbnail().getCacheId() : null;
      if (waveformTC && downloads[waveformTC] && downloads[waveformTC].status === FILE_MANAGER_DOWNLOAD_STATUS.COMPLETED) {
        return downloads[waveformTC].uri;
      }
    }
    return null;
  }
);

export const getLogMessageDetails = createSelector(
  (state, param) => state.entities.rooms[param.message.roomId],
  (state, param) => state.entities.registeredUsers[param.message.authorUser],
  (state, param) => state.entities.registeredUsers[param.message.log.getTargetUser() ? param.message.log.getTargetUser().getId().toString() : null],
  function(room, authorUser, targetUser) {
    return {
      roomType: room ? room.type : null,
      roomTitle: room ? room.title : null,
      author: authorUser ? authorUser.displayName : null,
      targetUser: targetUser ? targetUser.displayName : null,
    };
  }
);