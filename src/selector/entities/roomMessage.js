import {createSelector} from 'reselect';
import {FILE_MANAGER_DOWNLOAD_STATUS} from '../../constants/fileManager';

export const getRoomMessage = (state, props) => state.entities.roomMessages[props.messageId];

export const getFullMessage = createSelector(
  getRoomMessage,
  (state) => state.entities.registeredUsers,
  (roomMessage, registeredUsers) => {
    if (!roomMessage) {
      return null;
    }
    return {
      ...roomMessage,
      authorUserObject: roomMessage.authorUser ? registeredUsers[roomMessage.authorUser] : null,
    };
  }
);

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

