/**
 * @flow
 */

import {schema} from 'normalizr';
import {objectToLong, objectToUint8Array} from '../utils/core';
import {Proto} from '../modules/Proto/index';

/**
 * @typedef {{id: string, longId: (string|Long|*), username:string, phone: (Long|string), firstName: string, lastName: string, displayName, initials: string, color: string, status: (ProtoRegisteredUser_Status|ProtoRoomMessageStatus|ProtoChannelCheckUsernameResponseStatus|ProtoConnectionSymmetricKeyResponse_Status|ProtoFileUploadStatusResponse_Status|ProtoGroupCheckUsernameResponse_Status|*), lastSeen: number, avatarCount: number, avatar: (ProtoAvatar|null|undefined), mutual: boolean, deleted: boolean, cacheId: string, verified: boolean}} FlatRegisteredUser
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
    verified: user.getVerified(),
  };
};


/**
 * MUST BE PURE FUNCTION
 * Convert normalized registeredUser to serializable object
 * @param {FlatRegisteredUser} normalizedRegisteredUser
 * @return object
 */
export const normalizedRegisteredUserToSerializableRegisteredUser = (normalizedRegisteredUser) => {
  return {
    ...normalizedRegisteredUser,
    avatar: normalizedRegisteredUser.avatar ? normalizedRegisteredUser.avatar.serializeBinary() : null,
  };
};

/**
 * Convert serializable object to normalized registeredUser
 * @param {object} serializableRegisteredUser
 * @return {FlatRegisteredUser}
 */
export const serializableRegisteredUserToNormalizedRegisteredUser = (serializableRegisteredUser) => {
  return {
    ...serializableRegisteredUser,
    longId: objectToLong(serializableRegisteredUser.longId),
    avatar: serializableRegisteredUser.avatar ? Proto.Avatar.deserializeBinary(objectToUint8Array(serializableRegisteredUser.avatar)) : null,
    phone: serializableRegisteredUser.phone ? objectToLong(serializableRegisteredUser.phone) : null,
  };
};

/**
 * @param {ProtoRegisteredUser} user
 * @param {object} parent
 * @param {string} key
 */
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