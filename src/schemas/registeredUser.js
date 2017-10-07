/**
 * @flow
 */

import {schema} from 'normalizr';

/**
 * @typedef {{id: string, longId: (string|Long|*), username:string, phone: (Long|string), firstName: string, lastName: string, displayName, initials: string, color: string, status: (ProtoRegisteredUser_Status|ProtoRoomMessageStatus|ProtoChannelCheckUsernameResponseStatus|ProtoConnectionSymmetricKeyResponse_Status|ProtoFileUploadStatusResponse_Status|ProtoGroupCheckUsernameResponse_Status|*), lastSeen: number, avatarCount: number, avatar: (ProtoAvatar|null|undefined), mutual: boolean, deleted: boolean, cacheId: string}} FlatRegisteredUser
 */

/**
 * @param {ProtoRegisteredUser} user
 * @return {FlatRegisteredUser}
 */
export const flatProtoRegisteredUser = (user) => {
  return {
    id: user.getId().toString(),
    longId: user.getId(),
    username: user.getUsername(),
    phone: user.getPhone(),
    firstName: user.getFirstName(),
    lastName: user.getLastName(),
    displayName: user.getDisplayName(),
    initials: user.getInitials(),
    color: user.getColor(),
    status: user.getStatus(),
    lastSeen: user.getLastSeen(),
    avatarCount: user.getAvatarCount(),
    avatar: user.getAvatar(),
    mutual: user.getMutual(),
    deleted: user.getDeleted(),
    cacheId: user.getCacheId(),
  };
};

const registeredUserProcessStrategy = (user, parent, key) => flatProtoRegisteredUser(user);

/**
 * @typedef {Object.<string,FlatRegisteredUser>} NormalizedRegisteredUserEntities
 */

/**
 * @typedef {{entities:{registeredUsers:NormalizedRegisteredUserEntities}}} NormalizedRegisteredUserFullEntities
 */

const registeredUser = new schema.Entity('registeredUsers', {}, {
  processStrategy: registeredUserProcessStrategy,
  idAttribute: function(value) {
    return value.getId().toString();
  },
});

export default registeredUser;