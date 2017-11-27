export const METHOD_GET_AVATAR_LIST = 'METHOD_GET_AVATAR_LIST';
export const METHOD_DELETE_AVATAR_LIST = 'METHOD_DELETE_AVATAR_LIST';
export const METHOD_DELETE_AVATAR = 'METHOD_DELETE_AVATAR';

export function getAvatarList(id, avatarList) {
  return {
    type: METHOD_GET_AVATAR_LIST,
    id,
    avatarList,
  };
}

export function deleteAvatarList(id) {
  return {
    type: METHOD_DELETE_AVATAR_LIST,
    id,
  };
}

export function deleteAvatar(userId, roomId, deletedAvatarId) {
  return {
    type: METHOD_DELETE_AVATAR,
    userId,
    roomId,
    deletedAvatarId,
  };
}