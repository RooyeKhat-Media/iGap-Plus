/**
 * @flow
 */

import {schema} from 'normalizr';
import roomMessage from './roomMessage';
import registeredUser from './registeredUser';

/**
 * @typedef {{id: string, longId: (string|Long|*), type: (ProtoRoomMessageLog_Type|ProtoRoom_Type|ProtoGroupRoom_Type|ProtoChannelRoom_Type|ProtoClientResolveUsernameResponse_Type|ProtoClientSearchUsernameResponse_Result_Type|*), title: string, initials: string, color: string, unreadCount: number, lastMessage: (ProtoRoomMessage|null|undefined), readOnly: boolean, isParticipant: boolean, draft: (ProtoRoomDraft|null|undefined), firstUnreadMessage: (ProtoRoomMessage|null|undefined)}} FlatRoom
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
      flat.groupProvateInviteLink = gre.getPrivateExtra().getInviteLink();
      flat.groupProvateInviteToken = gre.getPrivateExtra().getInviteToken();
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

    if (room.getChannelRoomExtra().getPrivateExtra()) {
      flat.channelProvateInviteLink = cre.getPrivateExtra().getInviteLink();
      flat.channelProvateInviteToken = cre.getPrivateExtra().getInviteToken();
    }

    if (room.getChannelRoomExtra().getPublicExtra()) {
      flat.channelPublicUsername = cre.getPublicExtra().getUsername();
    }
  }
  return flat;
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