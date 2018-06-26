/**
 * @flow
 */

import {schema} from 'normalizr';
import roomMessage from './roomMessage';
import registeredUser from './registeredUser';
import {Proto} from '../modules/Proto';
import {objectToLong, objectToUint8Array} from '../utils/core';

/**
 * @typedef {{id: string, longId: (string|Long|*), type: (ProtoRoomMessageLog_Type|ProtoRoom_Type|ProtoGroupRoom_Type|ProtoChannelRoom_Type|ProtoClientResolveUsernameResponse_Type|ProtoClientSearchUsernameResponse_Result_Type|*), title: string, initials: string, color: string, unreadCount: number, lastMessage: (ProtoRoomMessage|null|undefined|string), readOnly: boolean, isParticipant: boolean, draft: (ProtoRoomDraft|null|undefined), firstUnreadMessage: (ProtoRoomMessage|null|undefined|string)}} FlatRoom
 */

/**
 * @param {ProtoRoom} room
 * @return {FlatRoom}
 */
export const flatProtoRoom = (room) => {
  const roomId = room.getId().toString();
  const flat = {
    id: roomId,
    longId: room.getId(),
    type: room.getType(),
    title: room.getTitle(),
    initials: room.getInitials(),
    color: room.getColor(),
    unreadCount: room.getUnreadCount(),
    lastMessage: room.getLastMessage(),
    readOnly: room.getReadOnly(),
    isParticipant: room.getIsParticipant(),
    draft: room.getDraft(),
    firstUnreadMessage: room.getFirstUnreadMessage(),
    pinId: room.getPinId().toString(),
    roomMute: room.getRoomMute(),
  };

  /**
   * chatRoomExtra
   */
  if (room.getChatRoomExtra()) {
    flat.chatPeer = room.getChatRoomExtra().getPeer();
  }

  /**
   * groupRoomExtra
   */
  const gre = room.getGroupRoomExtra();

  if (gre) {
    flat.groupType = gre.getType();
    flat.groupRole = gre.getRole();

    flat.groupParticipantsCount = gre.getParticipantsCount();
    flat.groupParticipantsCountLimit = gre.getParticipantsCountLimit();
    flat.groupDescription = gre.getDescription();
    flat.groupAvatarCount = gre.getAvatarCount();
    flat.groupAvatar = gre.getAvatar();

    if (room.getGroupRoomExtra().getPrivateExtra()) {
      flat.groupPrivateInviteLink = gre.getPrivateExtra().getInviteLink();
      flat.groupPrivateInviteToken = gre.getPrivateExtra().getInviteToken();
    }

    if (room.getGroupRoomExtra().getPublicExtra()) {
      flat.groupPublicUsername = gre.getPublicExtra().getUsername();
    }
  }

  /**
   * channelRoomExtra
   */
  const cre = room.getChannelRoomExtra();

  if (cre) {
    flat.channelType = cre.getType();
    flat.channelRole = cre.getRole();

    flat.channelParticipantsCount = cre.getParticipantsCount();
    flat.channelDescription = cre.getDescription();
    flat.channelAvatarCount = cre.getAvatarCount();
    flat.channelAvatar = cre.getAvatar();
    flat.channelSignature = cre.getSignature();
    flat.channelSeenId = cre.getSeenId();
    flat.channelVerified = cre.getVerified();

    if (room.getChannelRoomExtra().getPrivateExtra()) {
      flat.channelPrivateInviteLink = cre.getPrivateExtra().getInviteLink();
      flat.channelPrivateInviteToken = cre.getPrivateExtra().getInviteToken();
    }

    if (room.getChannelRoomExtra().getPublicExtra()) {
      flat.channelPublicUsername = cre.getPublicExtra().getUsername();
    }
  }
  return flat;
};


/**
 * MUST BE PURE FUNCTION
 * Convert normalized room to serializable object
 * @param {FlatRoom} normalizedRoom
 * @return object
 */
export const normalizedRoomToSerializableRoom = (normalizedRoom) => {
  return {
    ...normalizedRoom,
    draft: normalizedRoom.draft ? normalizedRoom.draft.serializeBinary() : null,

    /**
     * groupRoomExtra
     */
    groupAvatar: normalizedRoom.groupAvatar ? normalizedRoom.groupAvatar.serializeBinary() : null,

    /**
     * channelRoomExtra
     */
    channelAvatar: normalizedRoom.channelAvatar ? normalizedRoom.channelAvatar.serializeBinary() : null,
  };
};

/**
 * Convert serializable object to normalized room
 * @param {object} serializableRoom
 * @return {FlatRoom}
 */
export const serializableRoomToNormalizedRoom = (serializableRoom) => {
  return {
    ...serializableRoom,
    longId: objectToLong(serializableRoom.longId),
    draft: serializableRoom.draft ? Proto.RoomDraft.deserializeBinary(objectToUint8Array(serializableRoom.draft)) : null,

    /**
     * groupRoomExtra
     */
    groupAvatar: serializableRoom.groupAvatar ? Proto.Avatar.deserializeBinary(objectToUint8Array(serializableRoom.groupAvatar)) : null,

    /**
     * channelRoomExtra
     */
    channelAvatar: serializableRoom.channelAvatar ? Proto.Avatar.deserializeBinary(objectToUint8Array(serializableRoom.channelAvatar)) : null,
  };
};

/**
 * @param {ProtoRoom} room
 * @param {object} parent
 * @param {string} key
 * @return {*}
 */
const roomProcessStrategy = (room, parent, key) => flatProtoRoom(room);


/**
 * @typedef {Object.<string,FlatRoom>} NormalizedRoomEntities
 */

/**
 * @typedef {{entities:{rooms:NormalizedRoomEntities,roomMessages:NormalizedRoomMessageEntities,registeredUsers:NormalizedRegisteredUserEntities}}} NormalizedRoomFullEntities
 */


const room = new schema.Entity('rooms', {
  lastMessage: roomMessage,
  firstUnreadMessage: roomMessage,
  /**
   * chatRoomExtra
   */
  chatPeer: registeredUser,
}, {
  processStrategy: roomProcessStrategy,
  idAttribute: function(value) {
    return value.getId().toString();
  },
});

export default room;