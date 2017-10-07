import {createSelector} from 'reselect';
import {FileDownload} from '../../modules/Proto/index';


export const getUserId = (state, props) => {
  return props.userId || (props.navigation ? props.navigation.state.params.userId : null);
};

export const getUser = createSelector(
  getUserId,
  (state) => state.entities.registeredUsers,
  (userId, registeredUsers) => {
    return registeredUsers[userId];
  }
);

export const getUserAvatar = createSelector(
  getUser,
  (state, props) => props.size,
  (user, size) => {
    let selector = null;
    let fileSelector = null;

    if (user.avatar) {
      if (size > 100 && user.avatar.file.getLargeThumbnail()) {
        selector = FileDownload.Selector.LARGE_THUMBNAIL;
        fileSelector = user.avatar.file.getLargeThumbnail();
      } else if (user.avatar.file.getSmallThumbnail()) {
        selector = FileDownload.Selector.SMALL_THUMBNAIL;
        fileSelector = user.avatar.file.getSmallThumbnail();
      }
    }

    return {
      color: user.color,
      initials: user.initials,
      avatar: fileSelector ? {
        token: user.avatar.file.getToken(),
        selector,
        size: fileSelector.getSize(),
        cacheId: fileSelector.getCacheId(),
      } : null,
    };
  }
);