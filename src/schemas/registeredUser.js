/**
 * @flow
 */

import {schema} from 'normalizr';

/**
 * @typedef {{id: string, longId: (string|Long|*), username:string, phone: (Long|string), first_name: string, last_name: string, display_name, initials: string, color: string, status: (ProtoRegisteredUser_Status|ProtoRoomMessageStatus|ProtoChannelCheckUsernameResponse_Status|ProtoConnectionSymmetricKeyResponse_Status|ProtoFileUploadStatusResponse_Status|ProtoGroupCheckUsernameResponse_Status|*), last_seen: number, avatar_count: number, avatar: (ProtoAvatar|null|undefined), mutual: boolean, deleted: boolean, cache_id: string}} FlatRegisteredUser
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
    first_name: user.getFirstName(),
    last_name: user.getLastName(),
    display_name: user.getDisplayName(),
    initials: user.getInitials(),
    color: user.getColor(),
    status: user.getStatus(),
    last_seen: user.getLastSeen(),
    avatar_count: user.getAvatarCount(),
    avatar: user.getAvatar(),
    mutual: user.getMutual(),
    deleted: user.getDeleted(),
    cache_id: user.getCacheId(),
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