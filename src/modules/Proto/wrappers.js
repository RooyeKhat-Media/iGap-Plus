import proto from './bundle';

/**
 * @interface ProtoChannelAddAdmin
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelAddAdmin.prototype.serializeBinary = function() {
  return proto.proto.ChannelAddAdmin.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelAddAdmin}
 */
proto.proto.ChannelAddAdmin.deserializeBinary = function(buffer) {
  return proto.proto.ChannelAddAdmin.decode(buffer);
};

/**
 * Get ChannelAddAdmin request.
 * @memberof ProtoChannelAddAdmin
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.ChannelAddAdmin.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set ChannelAddAdmin request.
 * @memberof ProtoChannelAddAdmin
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.ChannelAddAdmin.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get ChannelAddAdmin roomId.
 * @memberof ProtoChannelAddAdmin
 * @return {Long}
 */
proto.proto.ChannelAddAdmin.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChannelAddAdmin roomId.
 * @memberof ProtoChannelAddAdmin
 * @param {Long} value
 */
proto.proto.ChannelAddAdmin.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get ChannelAddAdmin memberId.
 * @memberof ProtoChannelAddAdmin
 * @return {Long}
 */
proto.proto.ChannelAddAdmin.prototype.getMemberId = function() {
  return this.memberId;
};

/**
 * Set ChannelAddAdmin memberId.
 * @memberof ProtoChannelAddAdmin
 * @param {Long} value
 */
proto.proto.ChannelAddAdmin.prototype.setMemberId = function(value) {
  this.memberId = value;
};

/**
 * @interface ProtoChannelAddAdminResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelAddAdminResponse.prototype.serializeBinary = function() {
  return proto.proto.ChannelAddAdminResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelAddAdminResponse}
 */
proto.proto.ChannelAddAdminResponse.deserializeBinary = function(buffer) {
  return proto.proto.ChannelAddAdminResponse.decode(buffer);
};

/**
 * Get ChannelAddAdminResponse response.
 * @memberof ProtoChannelAddAdminResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.ChannelAddAdminResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set ChannelAddAdminResponse response.
 * @memberof ProtoChannelAddAdminResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.ChannelAddAdminResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get ChannelAddAdminResponse roomId.
 * @memberof ProtoChannelAddAdminResponse
 * @return {Long}
 */
proto.proto.ChannelAddAdminResponse.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChannelAddAdminResponse roomId.
 * @memberof ProtoChannelAddAdminResponse
 * @param {Long} value
 */
proto.proto.ChannelAddAdminResponse.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get ChannelAddAdminResponse memberId.
 * @memberof ProtoChannelAddAdminResponse
 * @return {Long}
 */
proto.proto.ChannelAddAdminResponse.prototype.getMemberId = function() {
  return this.memberId;
};

/**
 * Set ChannelAddAdminResponse memberId.
 * @memberof ProtoChannelAddAdminResponse
 * @param {Long} value
 */
proto.proto.ChannelAddAdminResponse.prototype.setMemberId = function(value) {
  this.memberId = value;
};

/**
 * @interface ProtoRequest
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.Request.prototype.serializeBinary = function() {
  return proto.proto.Request.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoRequest}
 */
proto.proto.Request.deserializeBinary = function(buffer) {
  return proto.proto.Request.decode(buffer);
};

/**
 * Get Request id.
 * @memberof ProtoRequest
 * @return {string}
 */
proto.proto.Request.prototype.getId = function() {
  return this.id;
};

/**
 * Set Request id.
 * @memberof ProtoRequest
 * @param {string} value
 */
proto.proto.Request.prototype.setId = function(value) {
  this.id = value;
};

/**
 * @interface ProtoResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.Response.prototype.serializeBinary = function() {
  return proto.proto.Response.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoResponse}
 */
proto.proto.Response.deserializeBinary = function(buffer) {
  return proto.proto.Response.decode(buffer);
};

/**
 * Get Response id.
 * @memberof ProtoResponse
 * @return {string}
 */
proto.proto.Response.prototype.getId = function() {
  return this.id;
};

/**
 * Set Response id.
 * @memberof ProtoResponse
 * @param {string} value
 */
proto.proto.Response.prototype.setId = function(value) {
  this.id = value;
};

/**
 * Get Response timestamp.
 * @memberof ProtoResponse
 * @return {number}
 */
proto.proto.Response.prototype.getTimestamp = function() {
  return this.timestamp;
};

/**
 * Set Response timestamp.
 * @memberof ProtoResponse
 * @param {number} value
 */
proto.proto.Response.prototype.setTimestamp = function(value) {
  this.timestamp = value;
};

/**
 * @interface ProtoChannelAddMember
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelAddMember.prototype.serializeBinary = function() {
  return proto.proto.ChannelAddMember.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelAddMember}
 */
proto.proto.ChannelAddMember.deserializeBinary = function(buffer) {
  return proto.proto.ChannelAddMember.decode(buffer);
};

/**
 * Get ChannelAddMember request.
 * @memberof ProtoChannelAddMember
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.ChannelAddMember.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set ChannelAddMember request.
 * @memberof ProtoChannelAddMember
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.ChannelAddMember.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get ChannelAddMember roomId.
 * @memberof ProtoChannelAddMember
 * @return {Long}
 */
proto.proto.ChannelAddMember.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChannelAddMember roomId.
 * @memberof ProtoChannelAddMember
 * @param {Long} value
 */
proto.proto.ChannelAddMember.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get ChannelAddMember member.
 * @memberof ProtoChannelAddMember
 * @return {(ProtoChannelAddMember_Member|null|undefined)}
 */
proto.proto.ChannelAddMember.prototype.getMember = function() {
  return this.member;
};

/**
 * Set ChannelAddMember member.
 * @memberof ProtoChannelAddMember
 * @param {(ProtoChannelAddMember_Member|null|undefined)} value
 */
proto.proto.ChannelAddMember.prototype.setMember = function(value) {
  this.member = value;
};

/**
 * @interface ProtoChannelAddMember_Member
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelAddMember.Member.prototype.serializeBinary = function() {
  return proto.proto.ChannelAddMember.Member.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelAddMember_Member}
 */
proto.proto.ChannelAddMember.Member.deserializeBinary = function(buffer) {
  return proto.proto.ChannelAddMember.Member.decode(buffer);
};

/**
 * Get Member userId.
 * @memberof ProtoChannelAddMember_Member
 * @return {Long}
 */
proto.proto.ChannelAddMember.Member.prototype.getUserId = function() {
  return this.userId;
};

/**
 * Set Member userId.
 * @memberof ProtoChannelAddMember_Member
 * @param {Long} value
 */
proto.proto.ChannelAddMember.Member.prototype.setUserId = function(value) {
  this.userId = value;
};

/**
 * @interface ProtoChannelAddMemberResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelAddMemberResponse.prototype.serializeBinary = function() {
  return proto.proto.ChannelAddMemberResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelAddMemberResponse}
 */
proto.proto.ChannelAddMemberResponse.deserializeBinary = function(buffer) {
  return proto.proto.ChannelAddMemberResponse.decode(buffer);
};

/**
 * Get ChannelAddMemberResponse response.
 * @memberof ProtoChannelAddMemberResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.ChannelAddMemberResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set ChannelAddMemberResponse response.
 * @memberof ProtoChannelAddMemberResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.ChannelAddMemberResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get ChannelAddMemberResponse roomId.
 * @memberof ProtoChannelAddMemberResponse
 * @return {Long}
 */
proto.proto.ChannelAddMemberResponse.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChannelAddMemberResponse roomId.
 * @memberof ProtoChannelAddMemberResponse
 * @param {Long} value
 */
proto.proto.ChannelAddMemberResponse.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get ChannelAddMemberResponse userId.
 * @memberof ProtoChannelAddMemberResponse
 * @return {Long}
 */
proto.proto.ChannelAddMemberResponse.prototype.getUserId = function() {
  return this.userId;
};

/**
 * Set ChannelAddMemberResponse userId.
 * @memberof ProtoChannelAddMemberResponse
 * @param {Long} value
 */
proto.proto.ChannelAddMemberResponse.prototype.setUserId = function(value) {
  this.userId = value;
};

/**
 * Get ChannelAddMemberResponse role.
 * @memberof ProtoChannelAddMemberResponse
 * @return {ProtoChannelRoom_Role}
 */
proto.proto.ChannelAddMemberResponse.prototype.getRole = function() {
  return this.role;
};

/**
 * Set ChannelAddMemberResponse role.
 * @memberof ProtoChannelAddMemberResponse
 * @param {ProtoChannelRoom_Role} value
 */
proto.proto.ChannelAddMemberResponse.prototype.setRole = function(value) {
  this.role = value;
};

/**
 * @typedef {number} ProtoGender
 */

/**
 * Gender enum.
 * @enum {ProtoGender}
 * @memberof Proto
 */
proto.proto.Gender = {
  UNKNOWN : 0,
  MALE : 1,
  FEMALE : 2,
};

/**
 * @typedef {number} ProtoDevice
 */

/**
 * Device enum.
 * @enum {ProtoDevice}
 * @memberof Proto
 */
proto.proto.Device = {
  UNKNOWN_DEVICE : 0,
  PC : 1,
  TABLET : 2,
  MOBILE : 3,
};

/**
 * @typedef {number} ProtoPlatform
 */

/**
 * Platform enum.
 * @enum {ProtoPlatform}
 * @memberof Proto
 */
proto.proto.Platform = {
  UNKNOWN_PLATFORM : 0,
  ANDROID : 1,
  IOS : 2,
  MAC_OS : 3,
  WINDOWS : 4,
  LINUX : 5,
  BLACK_BERRY : 6,
};

/**
 * @typedef {number} ProtoLanguage
 */

/**
 * Language enum.
 * @enum {ProtoLanguage}
 * @memberof Proto
 */
proto.proto.Language = {
  EN_US : 0,
  FA_IR : 1,
};

/**
 * @typedef {number} ProtoRoomMessageType
 */

/**
 * RoomMessageType enum.
 * @enum {ProtoRoomMessageType}
 * @memberof Proto
 */
proto.proto.RoomMessageType = {
  TEXT : 0,
  IMAGE : 1,
  IMAGE_TEXT : 2,
  VIDEO : 3,
  VIDEO_TEXT : 4,
  AUDIO : 5,
  AUDIO_TEXT : 6,
  VOICE : 7,
  GIF : 8,
  GIF_TEXT : 14,
  FILE : 9,
  FILE_TEXT : 10,
  LOCATION : 11,
  LOG : 12,
  CONTACT : 13,
};

/**
 * @typedef {number} ProtoRoomMessageStatus
 */

/**
 * RoomMessageStatus enum.
 * @enum {ProtoRoomMessageStatus}
 * @memberof Proto
 */
proto.proto.RoomMessageStatus = {
  FAILED : 0,
  SENDING : 1,
  SENT : 2,
  DELIVERED : 3,
  SEEN : 4,
  LISTENED : 5,
};

/**
 * @typedef {number} ProtoRoomMessageReaction
 */

/**
 * RoomMessageReaction enum.
 * @enum {ProtoRoomMessageReaction}
 * @memberof Proto
 */
proto.proto.RoomMessageReaction = {
  THUMBS_UP : 0,
  THUMBS_DOWN : 1,
};

/**
 * @interface ProtoRoomMessageLocation
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.RoomMessageLocation.prototype.serializeBinary = function() {
  return proto.proto.RoomMessageLocation.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoRoomMessageLocation}
 */
proto.proto.RoomMessageLocation.deserializeBinary = function(buffer) {
  return proto.proto.RoomMessageLocation.decode(buffer);
};

/**
 * Get RoomMessageLocation lat.
 * @memberof ProtoRoomMessageLocation
 * @return {number}
 */
proto.proto.RoomMessageLocation.prototype.getLat = function() {
  return this.lat;
};

/**
 * Set RoomMessageLocation lat.
 * @memberof ProtoRoomMessageLocation
 * @param {number} value
 */
proto.proto.RoomMessageLocation.prototype.setLat = function(value) {
  this.lat = value;
};

/**
 * Get RoomMessageLocation lon.
 * @memberof ProtoRoomMessageLocation
 * @return {number}
 */
proto.proto.RoomMessageLocation.prototype.getLon = function() {
  return this.lon;
};

/**
 * Set RoomMessageLocation lon.
 * @memberof ProtoRoomMessageLocation
 * @param {number} value
 */
proto.proto.RoomMessageLocation.prototype.setLon = function(value) {
  this.lon = value;
};

/**
 * @interface ProtoRoomMessageLog
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.RoomMessageLog.prototype.serializeBinary = function() {
  return proto.proto.RoomMessageLog.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoRoomMessageLog}
 */
proto.proto.RoomMessageLog.deserializeBinary = function(buffer) {
  return proto.proto.RoomMessageLog.decode(buffer);
};

/**
 * Get RoomMessageLog type.
 * @memberof ProtoRoomMessageLog
 * @return {ProtoRoomMessageLog_Type}
 */
proto.proto.RoomMessageLog.prototype.getType = function() {
  return this.type;
};

/**
 * Set RoomMessageLog type.
 * @memberof ProtoRoomMessageLog
 * @param {ProtoRoomMessageLog_Type} value
 */
proto.proto.RoomMessageLog.prototype.setType = function(value) {
  this.type = value;
};

/**
 * Get RoomMessageLog extraType.
 * @memberof ProtoRoomMessageLog
 * @return {ProtoRoomMessageLog_ExtraType}
 */
proto.proto.RoomMessageLog.prototype.getExtraType = function() {
  return this.extraType;
};

/**
 * Set RoomMessageLog extraType.
 * @memberof ProtoRoomMessageLog
 * @param {ProtoRoomMessageLog_ExtraType} value
 */
proto.proto.RoomMessageLog.prototype.setExtraType = function(value) {
  this.extraType = value;
};

/**
 * Get RoomMessageLog targetUser.
 * @memberof ProtoRoomMessageLog
 * @return {(ProtoRoomMessageLog_TargetUser|null|undefined)}
 */
proto.proto.RoomMessageLog.prototype.getTargetUser = function() {
  return this.targetUser;
};

/**
 * Set RoomMessageLog targetUser.
 * @memberof ProtoRoomMessageLog
 * @param {(ProtoRoomMessageLog_TargetUser|null|undefined)} value
 */
proto.proto.RoomMessageLog.prototype.setTargetUser = function(value) {
  this.targetUser = value;
};

/**
 * @typedef {number} ProtoRoomMessageLog_Type
 */

/**
 * Type enum.
 * @enum {ProtoRoomMessageLog_Type}
 * @memberof ProtoRoomMessageLog
 */
proto.proto.RoomMessageLog.Type = proto.proto.RoomMessageLog.prototype.Type = {
  USER_JOINED : 0,
  USER_DELETED : 1,
  ROOM_CREATED : 2,
  MEMBER_ADDED : 3,
  MEMBER_KICKED : 4,
  MEMBER_LEFT : 5,
  ROOM_CONVERTED_TO_PUBLIC : 6,
  ROOM_CONVERTED_TO_PRIVATE : 7,
  MEMBER_JOINED_BY_INVITE_LINK : 8,
  ROOM_DELETED : 9,
  MISSED_VOICE_CALL : 10,
  MISSED_VIDEO_CALL : 11,
  MISSED_SCREEN_SHARE : 12,
  MISSED_SECRET_CHAT : 13,
  PINNED_MESSAGE : 14,
};

/**
 * @typedef {number} ProtoRoomMessageLog_ExtraType
 */

/**
 * ExtraType enum.
 * @enum {ProtoRoomMessageLog_ExtraType}
 * @memberof ProtoRoomMessageLog
 */
proto.proto.RoomMessageLog.ExtraType = proto.proto.RoomMessageLog.prototype.ExtraType = {
  NO_EXTRA : 0,
  TARGET_USER : 1,
};

/**
 * @interface ProtoRoomMessageLog_TargetUser
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.RoomMessageLog.TargetUser.prototype.serializeBinary = function() {
  return proto.proto.RoomMessageLog.TargetUser.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoRoomMessageLog_TargetUser}
 */
proto.proto.RoomMessageLog.TargetUser.deserializeBinary = function(buffer) {
  return proto.proto.RoomMessageLog.TargetUser.decode(buffer);
};

/**
 * Get TargetUser id.
 * @memberof ProtoRoomMessageLog_TargetUser
 * @return {Long}
 */
proto.proto.RoomMessageLog.TargetUser.prototype.getId = function() {
  return this.id;
};

/**
 * Set TargetUser id.
 * @memberof ProtoRoomMessageLog_TargetUser
 * @param {Long} value
 */
proto.proto.RoomMessageLog.TargetUser.prototype.setId = function(value) {
  this.id = value;
};

/**
 * @interface ProtoRoomMessageContact
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.RoomMessageContact.prototype.serializeBinary = function() {
  return proto.proto.RoomMessageContact.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoRoomMessageContact}
 */
proto.proto.RoomMessageContact.deserializeBinary = function(buffer) {
  return proto.proto.RoomMessageContact.decode(buffer);
};

/**
 * Get RoomMessageContact firstName.
 * @memberof ProtoRoomMessageContact
 * @return {string}
 */
proto.proto.RoomMessageContact.prototype.getFirstName = function() {
  return this.firstName;
};

/**
 * Set RoomMessageContact firstName.
 * @memberof ProtoRoomMessageContact
 * @param {string} value
 */
proto.proto.RoomMessageContact.prototype.setFirstName = function(value) {
  this.firstName = value;
};

/**
 * Get RoomMessageContact lastName.
 * @memberof ProtoRoomMessageContact
 * @return {string}
 */
proto.proto.RoomMessageContact.prototype.getLastName = function() {
  return this.lastName;
};

/**
 * Set RoomMessageContact lastName.
 * @memberof ProtoRoomMessageContact
 * @param {string} value
 */
proto.proto.RoomMessageContact.prototype.setLastName = function(value) {
  this.lastName = value;
};

/**
 * Get RoomMessageContact nickname.
 * @memberof ProtoRoomMessageContact
 * @return {string}
 */
proto.proto.RoomMessageContact.prototype.getNickname = function() {
  return this.nickname;
};

/**
 * Set RoomMessageContact nickname.
 * @memberof ProtoRoomMessageContact
 * @param {string} value
 */
proto.proto.RoomMessageContact.prototype.setNickname = function(value) {
  this.nickname = value;
};

/**
 * Get RoomMessageContact phone.
 * @memberof ProtoRoomMessageContact
 * @return {Array.<string>}
 */
proto.proto.RoomMessageContact.prototype.getPhoneList = function() {
  return this.phone;
};

/**
 * Set RoomMessageContact phone.
 * @memberof ProtoRoomMessageContact
 * @param {Array.<string>} value
 */
proto.proto.RoomMessageContact.prototype.setPhoneList = function(value) {
  this.phone = value;
};

/**
 * Get RoomMessageContact email.
 * @memberof ProtoRoomMessageContact
 * @return {Array.<string>}
 */
proto.proto.RoomMessageContact.prototype.getEmailList = function() {
  return this.email;
};

/**
 * Set RoomMessageContact email.
 * @memberof ProtoRoomMessageContact
 * @param {Array.<string>} value
 */
proto.proto.RoomMessageContact.prototype.setEmailList = function(value) {
  this.email = value;
};

/**
 * @interface ProtoRoomMessageForwardFrom
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.RoomMessageForwardFrom.prototype.serializeBinary = function() {
  return proto.proto.RoomMessageForwardFrom.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoRoomMessageForwardFrom}
 */
proto.proto.RoomMessageForwardFrom.deserializeBinary = function(buffer) {
  return proto.proto.RoomMessageForwardFrom.decode(buffer);
};

/**
 * Get RoomMessageForwardFrom roomId.
 * @memberof ProtoRoomMessageForwardFrom
 * @return {Long}
 */
proto.proto.RoomMessageForwardFrom.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set RoomMessageForwardFrom roomId.
 * @memberof ProtoRoomMessageForwardFrom
 * @param {Long} value
 */
proto.proto.RoomMessageForwardFrom.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get RoomMessageForwardFrom messageId.
 * @memberof ProtoRoomMessageForwardFrom
 * @return {Long}
 */
proto.proto.RoomMessageForwardFrom.prototype.getMessageId = function() {
  return this.messageId;
};

/**
 * Set RoomMessageForwardFrom messageId.
 * @memberof ProtoRoomMessageForwardFrom
 * @param {Long} value
 */
proto.proto.RoomMessageForwardFrom.prototype.setMessageId = function(value) {
  this.messageId = value;
};

/**
 * @interface ProtoRegisteredUser
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.RegisteredUser.prototype.serializeBinary = function() {
  return proto.proto.RegisteredUser.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoRegisteredUser}
 */
proto.proto.RegisteredUser.deserializeBinary = function(buffer) {
  return proto.proto.RegisteredUser.decode(buffer);
};

/**
 * Get RegisteredUser id.
 * @memberof ProtoRegisteredUser
 * @return {Long}
 */
proto.proto.RegisteredUser.prototype.getId = function() {
  return this.id;
};

/**
 * Set RegisteredUser id.
 * @memberof ProtoRegisteredUser
 * @param {Long} value
 */
proto.proto.RegisteredUser.prototype.setId = function(value) {
  this.id = value;
};

/**
 * Get RegisteredUser username.
 * @memberof ProtoRegisteredUser
 * @return {string}
 */
proto.proto.RegisteredUser.prototype.getUsername = function() {
  return this.username;
};

/**
 * Set RegisteredUser username.
 * @memberof ProtoRegisteredUser
 * @param {string} value
 */
proto.proto.RegisteredUser.prototype.setUsername = function(value) {
  this.username = value;
};

/**
 * Get RegisteredUser phone.
 * @memberof ProtoRegisteredUser
 * @return {Long}
 */
proto.proto.RegisteredUser.prototype.getPhone = function() {
  return this.phone;
};

/**
 * Set RegisteredUser phone.
 * @memberof ProtoRegisteredUser
 * @param {Long} value
 */
proto.proto.RegisteredUser.prototype.setPhone = function(value) {
  this.phone = value;
};

/**
 * Get RegisteredUser firstName.
 * @memberof ProtoRegisteredUser
 * @return {string}
 */
proto.proto.RegisteredUser.prototype.getFirstName = function() {
  return this.firstName;
};

/**
 * Set RegisteredUser firstName.
 * @memberof ProtoRegisteredUser
 * @param {string} value
 */
proto.proto.RegisteredUser.prototype.setFirstName = function(value) {
  this.firstName = value;
};

/**
 * Get RegisteredUser lastName.
 * @memberof ProtoRegisteredUser
 * @return {string}
 */
proto.proto.RegisteredUser.prototype.getLastName = function() {
  return this.lastName;
};

/**
 * Set RegisteredUser lastName.
 * @memberof ProtoRegisteredUser
 * @param {string} value
 */
proto.proto.RegisteredUser.prototype.setLastName = function(value) {
  this.lastName = value;
};

/**
 * Get RegisteredUser displayName.
 * @memberof ProtoRegisteredUser
 * @return {string}
 */
proto.proto.RegisteredUser.prototype.getDisplayName = function() {
  return this.displayName;
};

/**
 * Set RegisteredUser displayName.
 * @memberof ProtoRegisteredUser
 * @param {string} value
 */
proto.proto.RegisteredUser.prototype.setDisplayName = function(value) {
  this.displayName = value;
};

/**
 * Get RegisteredUser initials.
 * @memberof ProtoRegisteredUser
 * @return {string}
 */
proto.proto.RegisteredUser.prototype.getInitials = function() {
  return this.initials;
};

/**
 * Set RegisteredUser initials.
 * @memberof ProtoRegisteredUser
 * @param {string} value
 */
proto.proto.RegisteredUser.prototype.setInitials = function(value) {
  this.initials = value;
};

/**
 * Get RegisteredUser color.
 * @memberof ProtoRegisteredUser
 * @return {string}
 */
proto.proto.RegisteredUser.prototype.getColor = function() {
  return this.color;
};

/**
 * Set RegisteredUser color.
 * @memberof ProtoRegisteredUser
 * @param {string} value
 */
proto.proto.RegisteredUser.prototype.setColor = function(value) {
  this.color = value;
};

/**
 * Get RegisteredUser status.
 * @memberof ProtoRegisteredUser
 * @return {ProtoRegisteredUser_Status}
 */
proto.proto.RegisteredUser.prototype.getStatus = function() {
  return this.status;
};

/**
 * Set RegisteredUser status.
 * @memberof ProtoRegisteredUser
 * @param {ProtoRegisteredUser_Status} value
 */
proto.proto.RegisteredUser.prototype.setStatus = function(value) {
  this.status = value;
};

/**
 * Get RegisteredUser lastSeen.
 * @memberof ProtoRegisteredUser
 * @return {number}
 */
proto.proto.RegisteredUser.prototype.getLastSeen = function() {
  return this.lastSeen;
};

/**
 * Set RegisteredUser lastSeen.
 * @memberof ProtoRegisteredUser
 * @param {number} value
 */
proto.proto.RegisteredUser.prototype.setLastSeen = function(value) {
  this.lastSeen = value;
};

/**
 * Get RegisteredUser avatarCount.
 * @memberof ProtoRegisteredUser
 * @return {number}
 */
proto.proto.RegisteredUser.prototype.getAvatarCount = function() {
  return this.avatarCount;
};

/**
 * Set RegisteredUser avatarCount.
 * @memberof ProtoRegisteredUser
 * @param {number} value
 */
proto.proto.RegisteredUser.prototype.setAvatarCount = function(value) {
  this.avatarCount = value;
};

/**
 * Get RegisteredUser avatar.
 * @memberof ProtoRegisteredUser
 * @return {(ProtoAvatar|null|undefined)}
 */
proto.proto.RegisteredUser.prototype.getAvatar = function() {
  return this.avatar;
};

/**
 * Set RegisteredUser avatar.
 * @memberof ProtoRegisteredUser
 * @param {(ProtoAvatar|null|undefined)} value
 */
proto.proto.RegisteredUser.prototype.setAvatar = function(value) {
  this.avatar = value;
};

/**
 * Get RegisteredUser mutual.
 * @memberof ProtoRegisteredUser
 * @return {boolean}
 */
proto.proto.RegisteredUser.prototype.getMutual = function() {
  return this.mutual;
};

/**
 * Set RegisteredUser mutual.
 * @memberof ProtoRegisteredUser
 * @param {boolean} value
 */
proto.proto.RegisteredUser.prototype.setMutual = function(value) {
  this.mutual = value;
};

/**
 * Get RegisteredUser deleted.
 * @memberof ProtoRegisteredUser
 * @return {boolean}
 */
proto.proto.RegisteredUser.prototype.getDeleted = function() {
  return this.deleted;
};

/**
 * Set RegisteredUser deleted.
 * @memberof ProtoRegisteredUser
 * @param {boolean} value
 */
proto.proto.RegisteredUser.prototype.setDeleted = function(value) {
  this.deleted = value;
};

/**
 * Get RegisteredUser cacheId.
 * @memberof ProtoRegisteredUser
 * @return {string}
 */
proto.proto.RegisteredUser.prototype.getCacheId = function() {
  return this.cacheId;
};

/**
 * Set RegisteredUser cacheId.
 * @memberof ProtoRegisteredUser
 * @param {string} value
 */
proto.proto.RegisteredUser.prototype.setCacheId = function(value) {
  this.cacheId = value;
};

/**
 * Get RegisteredUser bio.
 * @memberof ProtoRegisteredUser
 * @return {string}
 */
proto.proto.RegisteredUser.prototype.getBio = function() {
  return this.bio;
};

/**
 * Set RegisteredUser bio.
 * @memberof ProtoRegisteredUser
 * @param {string} value
 */
proto.proto.RegisteredUser.prototype.setBio = function(value) {
  this.bio = value;
};

/**
 * Get RegisteredUser verified.
 * @memberof ProtoRegisteredUser
 * @return {boolean}
 */
proto.proto.RegisteredUser.prototype.getVerified = function() {
  return this.verified;
};

/**
 * Set RegisteredUser verified.
 * @memberof ProtoRegisteredUser
 * @param {boolean} value
 */
proto.proto.RegisteredUser.prototype.setVerified = function(value) {
  this.verified = value;
};

/**
 * @typedef {number} ProtoRegisteredUser_Status
 */

/**
 * Status enum.
 * @enum {ProtoRegisteredUser_Status}
 * @memberof ProtoRegisteredUser
 */
proto.proto.RegisteredUser.Status = proto.proto.RegisteredUser.prototype.Status = {
  LONG_TIME_AGO : 0,
  LAST_MONTH : 1,
  LAST_WEEK : 2,
  ONLINE : 3,
  EXACTLY : 4,
  RECENTLY : 5,
  SUPPORT : 6,
  SERVICE_NOTIFICATIONS : 7,
};

/**
 * @typedef {number} ProtoClientAction
 */

/**
 * ClientAction enum.
 * @enum {ProtoClientAction}
 * @memberof Proto
 */
proto.proto.ClientAction = {
  CANCEL : 0,
  TYPING : 1,
  SENDING_IMAGE : 2,
  CAPTURING_IMAGE : 3,
  SENDING_VIDEO : 4,
  CAPTURING_VIDEO : 5,
  SENDING_AUDIO : 6,
  RECORDING_VOICE : 7,
  SENDING_VOICE : 8,
  SENDING_DOCUMENT : 9,
  SENDING_GIF : 10,
  SENDING_FILE : 11,
  SENDING_LOCATION : 12,
  CHOOSING_CONTACT : 13,
  PAINTING : 14,
};

/**
 * @interface ProtoAvatar
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.Avatar.prototype.serializeBinary = function() {
  return proto.proto.Avatar.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoAvatar}
 */
proto.proto.Avatar.deserializeBinary = function(buffer) {
  return proto.proto.Avatar.decode(buffer);
};

/**
 * Get Avatar id.
 * @memberof ProtoAvatar
 * @return {Long}
 */
proto.proto.Avatar.prototype.getId = function() {
  return this.id;
};

/**
 * Set Avatar id.
 * @memberof ProtoAvatar
 * @param {Long} value
 */
proto.proto.Avatar.prototype.setId = function(value) {
  this.id = value;
};

/**
 * Get Avatar file.
 * @memberof ProtoAvatar
 * @return {(ProtoFile|null|undefined)}
 */
proto.proto.Avatar.prototype.getFile = function() {
  return this.file;
};

/**
 * Set Avatar file.
 * @memberof ProtoAvatar
 * @param {(ProtoFile|null|undefined)} value
 */
proto.proto.Avatar.prototype.setFile = function(value) {
  this.file = value;
};

/**
 * @interface ProtoRoomMessage
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.RoomMessage.prototype.serializeBinary = function() {
  return proto.proto.RoomMessage.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoRoomMessage}
 */
proto.proto.RoomMessage.deserializeBinary = function(buffer) {
  return proto.proto.RoomMessage.decode(buffer);
};

/**
 * Get RoomMessage messageId.
 * @memberof ProtoRoomMessage
 * @return {Long}
 */
proto.proto.RoomMessage.prototype.getMessageId = function() {
  return this.messageId;
};

/**
 * Set RoomMessage messageId.
 * @memberof ProtoRoomMessage
 * @param {Long} value
 */
proto.proto.RoomMessage.prototype.setMessageId = function(value) {
  this.messageId = value;
};

/**
 * Get RoomMessage messageVersion.
 * @memberof ProtoRoomMessage
 * @return {Long}
 */
proto.proto.RoomMessage.prototype.getMessageVersion = function() {
  return this.messageVersion;
};

/**
 * Set RoomMessage messageVersion.
 * @memberof ProtoRoomMessage
 * @param {Long} value
 */
proto.proto.RoomMessage.prototype.setMessageVersion = function(value) {
  this.messageVersion = value;
};

/**
 * Get RoomMessage status.
 * @memberof ProtoRoomMessage
 * @return {ProtoRoomMessageStatus}
 */
proto.proto.RoomMessage.prototype.getStatus = function() {
  return this.status;
};

/**
 * Set RoomMessage status.
 * @memberof ProtoRoomMessage
 * @param {ProtoRoomMessageStatus} value
 */
proto.proto.RoomMessage.prototype.setStatus = function(value) {
  this.status = value;
};

/**
 * Get RoomMessage statusVersion.
 * @memberof ProtoRoomMessage
 * @return {Long}
 */
proto.proto.RoomMessage.prototype.getStatusVersion = function() {
  return this.statusVersion;
};

/**
 * Set RoomMessage statusVersion.
 * @memberof ProtoRoomMessage
 * @param {Long} value
 */
proto.proto.RoomMessage.prototype.setStatusVersion = function(value) {
  this.statusVersion = value;
};

/**
 * Get RoomMessage messageType.
 * @memberof ProtoRoomMessage
 * @return {ProtoRoomMessageType}
 */
proto.proto.RoomMessage.prototype.getMessageType = function() {
  return this.messageType;
};

/**
 * Set RoomMessage messageType.
 * @memberof ProtoRoomMessage
 * @param {ProtoRoomMessageType} value
 */
proto.proto.RoomMessage.prototype.setMessageType = function(value) {
  this.messageType = value;
};

/**
 * Get RoomMessage message.
 * @memberof ProtoRoomMessage
 * @return {string}
 */
proto.proto.RoomMessage.prototype.getMessage = function() {
  return this.message;
};

/**
 * Set RoomMessage message.
 * @memberof ProtoRoomMessage
 * @param {string} value
 */
proto.proto.RoomMessage.prototype.setMessage = function(value) {
  this.message = value;
};

/**
 * Get RoomMessage attachment.
 * @memberof ProtoRoomMessage
 * @return {(ProtoFile|null|undefined)}
 */
proto.proto.RoomMessage.prototype.getAttachment = function() {
  return this.attachment;
};

/**
 * Set RoomMessage attachment.
 * @memberof ProtoRoomMessage
 * @param {(ProtoFile|null|undefined)} value
 */
proto.proto.RoomMessage.prototype.setAttachment = function(value) {
  this.attachment = value;
};

/**
 * Get RoomMessage author.
 * @memberof ProtoRoomMessage
 * @return {(ProtoRoomMessage_Author|null|undefined)}
 */
proto.proto.RoomMessage.prototype.getAuthor = function() {
  return this.author;
};

/**
 * Set RoomMessage author.
 * @memberof ProtoRoomMessage
 * @param {(ProtoRoomMessage_Author|null|undefined)} value
 */
proto.proto.RoomMessage.prototype.setAuthor = function(value) {
  this.author = value;
};

/**
 * Get RoomMessage location.
 * @memberof ProtoRoomMessage
 * @return {(ProtoRoomMessageLocation|null|undefined)}
 */
proto.proto.RoomMessage.prototype.getLocation = function() {
  return this.location;
};

/**
 * Set RoomMessage location.
 * @memberof ProtoRoomMessage
 * @param {(ProtoRoomMessageLocation|null|undefined)} value
 */
proto.proto.RoomMessage.prototype.setLocation = function(value) {
  this.location = value;
};

/**
 * Get RoomMessage log.
 * @memberof ProtoRoomMessage
 * @return {(ProtoRoomMessageLog|null|undefined)}
 */
proto.proto.RoomMessage.prototype.getLog = function() {
  return this.log;
};

/**
 * Set RoomMessage log.
 * @memberof ProtoRoomMessage
 * @param {(ProtoRoomMessageLog|null|undefined)} value
 */
proto.proto.RoomMessage.prototype.setLog = function(value) {
  this.log = value;
};

/**
 * Get RoomMessage contact.
 * @memberof ProtoRoomMessage
 * @return {(ProtoRoomMessageContact|null|undefined)}
 */
proto.proto.RoomMessage.prototype.getContact = function() {
  return this.contact;
};

/**
 * Set RoomMessage contact.
 * @memberof ProtoRoomMessage
 * @param {(ProtoRoomMessageContact|null|undefined)} value
 */
proto.proto.RoomMessage.prototype.setContact = function(value) {
  this.contact = value;
};

/**
 * Get RoomMessage edited.
 * @memberof ProtoRoomMessage
 * @return {boolean}
 */
proto.proto.RoomMessage.prototype.getEdited = function() {
  return this.edited;
};

/**
 * Set RoomMessage edited.
 * @memberof ProtoRoomMessage
 * @param {boolean} value
 */
proto.proto.RoomMessage.prototype.setEdited = function(value) {
  this.edited = value;
};

/**
 * Get RoomMessage createTime.
 * @memberof ProtoRoomMessage
 * @return {number}
 */
proto.proto.RoomMessage.prototype.getCreateTime = function() {
  return this.createTime;
};

/**
 * Set RoomMessage createTime.
 * @memberof ProtoRoomMessage
 * @param {number} value
 */
proto.proto.RoomMessage.prototype.setCreateTime = function(value) {
  this.createTime = value;
};

/**
 * Get RoomMessage updateTime.
 * @memberof ProtoRoomMessage
 * @return {number}
 */
proto.proto.RoomMessage.prototype.getUpdateTime = function() {
  return this.updateTime;
};

/**
 * Set RoomMessage updateTime.
 * @memberof ProtoRoomMessage
 * @param {number} value
 */
proto.proto.RoomMessage.prototype.setUpdateTime = function(value) {
  this.updateTime = value;
};

/**
 * Get RoomMessage deleted.
 * @memberof ProtoRoomMessage
 * @return {boolean}
 */
proto.proto.RoomMessage.prototype.getDeleted = function() {
  return this.deleted;
};

/**
 * Set RoomMessage deleted.
 * @memberof ProtoRoomMessage
 * @param {boolean} value
 */
proto.proto.RoomMessage.prototype.setDeleted = function(value) {
  this.deleted = value;
};

/**
 * Get RoomMessage forwardFrom.
 * @memberof ProtoRoomMessage
 * @return {(ProtoRoomMessage|null|undefined)}
 */
proto.proto.RoomMessage.prototype.getForwardFrom = function() {
  return this.forwardFrom;
};

/**
 * Set RoomMessage forwardFrom.
 * @memberof ProtoRoomMessage
 * @param {(ProtoRoomMessage|null|undefined)} value
 */
proto.proto.RoomMessage.prototype.setForwardFrom = function(value) {
  this.forwardFrom = value;
};

/**
 * Get RoomMessage replyTo.
 * @memberof ProtoRoomMessage
 * @return {(ProtoRoomMessage|null|undefined)}
 */
proto.proto.RoomMessage.prototype.getReplyTo = function() {
  return this.replyTo;
};

/**
 * Set RoomMessage replyTo.
 * @memberof ProtoRoomMessage
 * @param {(ProtoRoomMessage|null|undefined)} value
 */
proto.proto.RoomMessage.prototype.setReplyTo = function(value) {
  this.replyTo = value;
};

/**
 * Get RoomMessage previousMessageId.
 * @memberof ProtoRoomMessage
 * @return {Long}
 */
proto.proto.RoomMessage.prototype.getPreviousMessageId = function() {
  return this.previousMessageId;
};

/**
 * Set RoomMessage previousMessageId.
 * @memberof ProtoRoomMessage
 * @param {Long} value
 */
proto.proto.RoomMessage.prototype.setPreviousMessageId = function(value) {
  this.previousMessageId = value;
};

/**
 * Get RoomMessage randomId.
 * @memberof ProtoRoomMessage
 * @return {Long}
 */
proto.proto.RoomMessage.prototype.getRandomId = function() {
  return this.randomId;
};

/**
 * Set RoomMessage randomId.
 * @memberof ProtoRoomMessage
 * @param {Long} value
 */
proto.proto.RoomMessage.prototype.setRandomId = function(value) {
  this.randomId = value;
};

/**
 * Get RoomMessage extraType.
 * @memberof ProtoRoomMessage
 * @return {ProtoRoomMessage_ExtraType}
 */
proto.proto.RoomMessage.prototype.getExtraType = function() {
  return this.extraType;
};

/**
 * Set RoomMessage extraType.
 * @memberof ProtoRoomMessage
 * @param {ProtoRoomMessage_ExtraType} value
 */
proto.proto.RoomMessage.prototype.setExtraType = function(value) {
  this.extraType = value;
};

/**
 * Get RoomMessage channelExtra.
 * @memberof ProtoRoomMessage
 * @return {(ProtoRoomMessage_ChannelExtra|null|undefined)}
 */
proto.proto.RoomMessage.prototype.getChannelExtra = function() {
  return this.channelExtra;
};

/**
 * Set RoomMessage channelExtra.
 * @memberof ProtoRoomMessage
 * @param {(ProtoRoomMessage_ChannelExtra|null|undefined)} value
 */
proto.proto.RoomMessage.prototype.setChannelExtra = function(value) {
  this.channelExtra = value;
};

/**
 * @interface ProtoRoomMessage_Author
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.RoomMessage.Author.prototype.serializeBinary = function() {
  return proto.proto.RoomMessage.Author.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoRoomMessage_Author}
 */
proto.proto.RoomMessage.Author.deserializeBinary = function(buffer) {
  return proto.proto.RoomMessage.Author.decode(buffer);
};

/**
 * Get Author hash.
 * @memberof ProtoRoomMessage_Author
 * @return {string}
 */
proto.proto.RoomMessage.Author.prototype.getHash = function() {
  return this.hash;
};

/**
 * Set Author hash.
 * @memberof ProtoRoomMessage_Author
 * @param {string} value
 */
proto.proto.RoomMessage.Author.prototype.setHash = function(value) {
  this.hash = value;
};

/**
 * Get Author user.
 * @memberof ProtoRoomMessage_Author
 * @return {(ProtoRoomMessage_Author_User|null|undefined)}
 */
proto.proto.RoomMessage.Author.prototype.getUser = function() {
  return this.user;
};

/**
 * Set Author user.
 * @memberof ProtoRoomMessage_Author
 * @param {(ProtoRoomMessage_Author_User|null|undefined)} value
 */
proto.proto.RoomMessage.Author.prototype.setUser = function(value) {
  this.user = value;
};

/**
 * Get Author room.
 * @memberof ProtoRoomMessage_Author
 * @return {(ProtoRoomMessage_Author_Room|null|undefined)}
 */
proto.proto.RoomMessage.Author.prototype.getRoom = function() {
  return this.room;
};

/**
 * Set Author room.
 * @memberof ProtoRoomMessage_Author
 * @param {(ProtoRoomMessage_Author_Room|null|undefined)} value
 */
proto.proto.RoomMessage.Author.prototype.setRoom = function(value) {
  this.room = value;
};

/**
 * @interface ProtoRoomMessage_Author_User
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.RoomMessage.Author.User.prototype.serializeBinary = function() {
  return proto.proto.RoomMessage.Author.User.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoRoomMessage_Author_User}
 */
proto.proto.RoomMessage.Author.User.deserializeBinary = function(buffer) {
  return proto.proto.RoomMessage.Author.User.decode(buffer);
};

/**
 * Get User userId.
 * @memberof ProtoRoomMessage_Author_User
 * @return {Long}
 */
proto.proto.RoomMessage.Author.User.prototype.getUserId = function() {
  return this.userId;
};

/**
 * Set User userId.
 * @memberof ProtoRoomMessage_Author_User
 * @param {Long} value
 */
proto.proto.RoomMessage.Author.User.prototype.setUserId = function(value) {
  this.userId = value;
};

/**
 * Get User cacheId.
 * @memberof ProtoRoomMessage_Author_User
 * @return {string}
 */
proto.proto.RoomMessage.Author.User.prototype.getCacheId = function() {
  return this.cacheId;
};

/**
 * Set User cacheId.
 * @memberof ProtoRoomMessage_Author_User
 * @param {string} value
 */
proto.proto.RoomMessage.Author.User.prototype.setCacheId = function(value) {
  this.cacheId = value;
};

/**
 * @interface ProtoRoomMessage_Author_Room
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.RoomMessage.Author.Room.prototype.serializeBinary = function() {
  return proto.proto.RoomMessage.Author.Room.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoRoomMessage_Author_Room}
 */
proto.proto.RoomMessage.Author.Room.deserializeBinary = function(buffer) {
  return proto.proto.RoomMessage.Author.Room.decode(buffer);
};

/**
 * Get Room roomId.
 * @memberof ProtoRoomMessage_Author_Room
 * @return {Long}
 */
proto.proto.RoomMessage.Author.Room.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set Room roomId.
 * @memberof ProtoRoomMessage_Author_Room
 * @param {Long} value
 */
proto.proto.RoomMessage.Author.Room.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * @typedef {number} ProtoRoomMessage_ExtraType
 */

/**
 * ExtraType enum.
 * @enum {ProtoRoomMessage_ExtraType}
 * @memberof ProtoRoomMessage
 */
proto.proto.RoomMessage.ExtraType = proto.proto.RoomMessage.prototype.ExtraType = {
  NO_EXTRA : 0,
  CHANNEL_EXTRA : 1,
};

/**
 * @interface ProtoRoomMessage_ChannelExtra
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.RoomMessage.ChannelExtra.prototype.serializeBinary = function() {
  return proto.proto.RoomMessage.ChannelExtra.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoRoomMessage_ChannelExtra}
 */
proto.proto.RoomMessage.ChannelExtra.deserializeBinary = function(buffer) {
  return proto.proto.RoomMessage.ChannelExtra.decode(buffer);
};

/**
 * Get ChannelExtra signature.
 * @memberof ProtoRoomMessage_ChannelExtra
 * @return {string}
 */
proto.proto.RoomMessage.ChannelExtra.prototype.getSignature = function() {
  return this.signature;
};

/**
 * Set ChannelExtra signature.
 * @memberof ProtoRoomMessage_ChannelExtra
 * @param {string} value
 */
proto.proto.RoomMessage.ChannelExtra.prototype.setSignature = function(value) {
  this.signature = value;
};

/**
 * Get ChannelExtra viewsLabel.
 * @memberof ProtoRoomMessage_ChannelExtra
 * @return {string}
 */
proto.proto.RoomMessage.ChannelExtra.prototype.getViewsLabel = function() {
  return this.viewsLabel;
};

/**
 * Set ChannelExtra viewsLabel.
 * @memberof ProtoRoomMessage_ChannelExtra
 * @param {string} value
 */
proto.proto.RoomMessage.ChannelExtra.prototype.setViewsLabel = function(value) {
  this.viewsLabel = value;
};

/**
 * Get ChannelExtra thumbsUpLabel.
 * @memberof ProtoRoomMessage_ChannelExtra
 * @return {string}
 */
proto.proto.RoomMessage.ChannelExtra.prototype.getThumbsUpLabel = function() {
  return this.thumbsUpLabel;
};

/**
 * Set ChannelExtra thumbsUpLabel.
 * @memberof ProtoRoomMessage_ChannelExtra
 * @param {string} value
 */
proto.proto.RoomMessage.ChannelExtra.prototype.setThumbsUpLabel = function(value) {
  this.thumbsUpLabel = value;
};

/**
 * Get ChannelExtra thumbsDownLabel.
 * @memberof ProtoRoomMessage_ChannelExtra
 * @return {string}
 */
proto.proto.RoomMessage.ChannelExtra.prototype.getThumbsDownLabel = function() {
  return this.thumbsDownLabel;
};

/**
 * Set ChannelExtra thumbsDownLabel.
 * @memberof ProtoRoomMessage_ChannelExtra
 * @param {string} value
 */
proto.proto.RoomMessage.ChannelExtra.prototype.setThumbsDownLabel = function(value) {
  this.thumbsDownLabel = value;
};

/**
 * @interface ProtoRoomDraft
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.RoomDraft.prototype.serializeBinary = function() {
  return proto.proto.RoomDraft.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoRoomDraft}
 */
proto.proto.RoomDraft.deserializeBinary = function(buffer) {
  return proto.proto.RoomDraft.decode(buffer);
};

/**
 * Get RoomDraft message.
 * @memberof ProtoRoomDraft
 * @return {string}
 */
proto.proto.RoomDraft.prototype.getMessage = function() {
  return this.message;
};

/**
 * Set RoomDraft message.
 * @memberof ProtoRoomDraft
 * @param {string} value
 */
proto.proto.RoomDraft.prototype.setMessage = function(value) {
  this.message = value;
};

/**
 * Get RoomDraft replyTo.
 * @memberof ProtoRoomDraft
 * @return {Long}
 */
proto.proto.RoomDraft.prototype.getReplyTo = function() {
  return this.replyTo;
};

/**
 * Set RoomDraft replyTo.
 * @memberof ProtoRoomDraft
 * @param {Long} value
 */
proto.proto.RoomDraft.prototype.setReplyTo = function(value) {
  this.replyTo = value;
};

/**
 * @typedef {number} ProtoRoomMute
 */

/**
 * RoomMute enum.
 * @enum {ProtoRoomMute}
 * @memberof Proto
 */
proto.proto.RoomMute = {
  UNMUTE : 0,
  MUTE : 1,
};

/**
 * @interface ProtoRoom
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.Room.prototype.serializeBinary = function() {
  return proto.proto.Room.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoRoom}
 */
proto.proto.Room.deserializeBinary = function(buffer) {
  return proto.proto.Room.decode(buffer);
};

/**
 * Get Room id.
 * @memberof ProtoRoom
 * @return {Long}
 */
proto.proto.Room.prototype.getId = function() {
  return this.id;
};

/**
 * Set Room id.
 * @memberof ProtoRoom
 * @param {Long} value
 */
proto.proto.Room.prototype.setId = function(value) {
  this.id = value;
};

/**
 * Get Room type.
 * @memberof ProtoRoom
 * @return {ProtoRoom_Type}
 */
proto.proto.Room.prototype.getType = function() {
  return this.type;
};

/**
 * Set Room type.
 * @memberof ProtoRoom
 * @param {ProtoRoom_Type} value
 */
proto.proto.Room.prototype.setType = function(value) {
  this.type = value;
};

/**
 * Get Room title.
 * @memberof ProtoRoom
 * @return {string}
 */
proto.proto.Room.prototype.getTitle = function() {
  return this.title;
};

/**
 * Set Room title.
 * @memberof ProtoRoom
 * @param {string} value
 */
proto.proto.Room.prototype.setTitle = function(value) {
  this.title = value;
};

/**
 * Get Room initials.
 * @memberof ProtoRoom
 * @return {string}
 */
proto.proto.Room.prototype.getInitials = function() {
  return this.initials;
};

/**
 * Set Room initials.
 * @memberof ProtoRoom
 * @param {string} value
 */
proto.proto.Room.prototype.setInitials = function(value) {
  this.initials = value;
};

/**
 * Get Room color.
 * @memberof ProtoRoom
 * @return {string}
 */
proto.proto.Room.prototype.getColor = function() {
  return this.color;
};

/**
 * Set Room color.
 * @memberof ProtoRoom
 * @param {string} value
 */
proto.proto.Room.prototype.setColor = function(value) {
  this.color = value;
};

/**
 * Get Room unreadCount.
 * @memberof ProtoRoom
 * @return {number}
 */
proto.proto.Room.prototype.getUnreadCount = function() {
  return this.unreadCount;
};

/**
 * Set Room unreadCount.
 * @memberof ProtoRoom
 * @param {number} value
 */
proto.proto.Room.prototype.setUnreadCount = function(value) {
  this.unreadCount = value;
};

/**
 * Get Room lastMessage.
 * @memberof ProtoRoom
 * @return {(ProtoRoomMessage|null|undefined)}
 */
proto.proto.Room.prototype.getLastMessage = function() {
  return this.lastMessage;
};

/**
 * Set Room lastMessage.
 * @memberof ProtoRoom
 * @param {(ProtoRoomMessage|null|undefined)} value
 */
proto.proto.Room.prototype.setLastMessage = function(value) {
  this.lastMessage = value;
};

/**
 * Get Room readOnly.
 * @memberof ProtoRoom
 * @return {boolean}
 */
proto.proto.Room.prototype.getReadOnly = function() {
  return this.readOnly;
};

/**
 * Set Room readOnly.
 * @memberof ProtoRoom
 * @param {boolean} value
 */
proto.proto.Room.prototype.setReadOnly = function(value) {
  this.readOnly = value;
};

/**
 * Get Room isParticipant.
 * @memberof ProtoRoom
 * @return {boolean}
 */
proto.proto.Room.prototype.getIsParticipant = function() {
  return this.isParticipant;
};

/**
 * Set Room isParticipant.
 * @memberof ProtoRoom
 * @param {boolean} value
 */
proto.proto.Room.prototype.setIsParticipant = function(value) {
  this.isParticipant = value;
};

/**
 * Get Room draft.
 * @memberof ProtoRoom
 * @return {(ProtoRoomDraft|null|undefined)}
 */
proto.proto.Room.prototype.getDraft = function() {
  return this.draft;
};

/**
 * Set Room draft.
 * @memberof ProtoRoom
 * @param {(ProtoRoomDraft|null|undefined)} value
 */
proto.proto.Room.prototype.setDraft = function(value) {
  this.draft = value;
};

/**
 * Get Room firstUnreadMessage.
 * @memberof ProtoRoom
 * @return {(ProtoRoomMessage|null|undefined)}
 */
proto.proto.Room.prototype.getFirstUnreadMessage = function() {
  return this.firstUnreadMessage;
};

/**
 * Set Room firstUnreadMessage.
 * @memberof ProtoRoom
 * @param {(ProtoRoomMessage|null|undefined)} value
 */
proto.proto.Room.prototype.setFirstUnreadMessage = function(value) {
  this.firstUnreadMessage = value;
};

/**
 * Get Room roomMute.
 * @memberof ProtoRoom
 * @return {ProtoRoomMute}
 */
proto.proto.Room.prototype.getRoomMute = function() {
  return this.roomMute;
};

/**
 * Set Room roomMute.
 * @memberof ProtoRoom
 * @param {ProtoRoomMute} value
 */
proto.proto.Room.prototype.setRoomMute = function(value) {
  this.roomMute = value;
};

/**
 * Get Room pinId.
 * @memberof ProtoRoom
 * @return {Long}
 */
proto.proto.Room.prototype.getPinId = function() {
  return this.pinId;
};

/**
 * Set Room pinId.
 * @memberof ProtoRoom
 * @param {Long} value
 */
proto.proto.Room.prototype.setPinId = function(value) {
  this.pinId = value;
};

/**
 * Get Room pinnedMessage.
 * @memberof ProtoRoom
 * @return {(ProtoRoomMessage|null|undefined)}
 */
proto.proto.Room.prototype.getPinnedMessage = function() {
  return this.pinnedMessage;
};

/**
 * Set Room pinnedMessage.
 * @memberof ProtoRoom
 * @param {(ProtoRoomMessage|null|undefined)} value
 */
proto.proto.Room.prototype.setPinnedMessage = function(value) {
  this.pinnedMessage = value;
};

/**
 * Get Room chatRoomExtra.
 * @memberof ProtoRoom
 * @return {(ProtoChatRoom|null|undefined)}
 */
proto.proto.Room.prototype.getChatRoomExtra = function() {
  return this.chatRoomExtra;
};

/**
 * Set Room chatRoomExtra.
 * @memberof ProtoRoom
 * @param {(ProtoChatRoom|null|undefined)} value
 */
proto.proto.Room.prototype.setChatRoomExtra = function(value) {
  this.chatRoomExtra = value;
};

/**
 * Get Room groupRoomExtra.
 * @memberof ProtoRoom
 * @return {(ProtoGroupRoom|null|undefined)}
 */
proto.proto.Room.prototype.getGroupRoomExtra = function() {
  return this.groupRoomExtra;
};

/**
 * Set Room groupRoomExtra.
 * @memberof ProtoRoom
 * @param {(ProtoGroupRoom|null|undefined)} value
 */
proto.proto.Room.prototype.setGroupRoomExtra = function(value) {
  this.groupRoomExtra = value;
};

/**
 * Get Room channelRoomExtra.
 * @memberof ProtoRoom
 * @return {(ProtoChannelRoom|null|undefined)}
 */
proto.proto.Room.prototype.getChannelRoomExtra = function() {
  return this.channelRoomExtra;
};

/**
 * Set Room channelRoomExtra.
 * @memberof ProtoRoom
 * @param {(ProtoChannelRoom|null|undefined)} value
 */
proto.proto.Room.prototype.setChannelRoomExtra = function(value) {
  this.channelRoomExtra = value;
};

/**
 * @typedef {number} ProtoRoom_Type
 */

/**
 * Type enum.
 * @enum {ProtoRoom_Type}
 * @memberof ProtoRoom
 */
proto.proto.Room.Type = proto.proto.Room.prototype.Type = {
  CHAT : 0,
  GROUP : 1,
  CHANNEL : 2,
};

/**
 * @interface ProtoChatRoom
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChatRoom.prototype.serializeBinary = function() {
  return proto.proto.ChatRoom.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChatRoom}
 */
proto.proto.ChatRoom.deserializeBinary = function(buffer) {
  return proto.proto.ChatRoom.decode(buffer);
};

/**
 * Get ChatRoom peer.
 * @memberof ProtoChatRoom
 * @return {(ProtoRegisteredUser|null|undefined)}
 */
proto.proto.ChatRoom.prototype.getPeer = function() {
  return this.peer;
};

/**
 * Set ChatRoom peer.
 * @memberof ProtoChatRoom
 * @param {(ProtoRegisteredUser|null|undefined)} value
 */
proto.proto.ChatRoom.prototype.setPeer = function(value) {
  this.peer = value;
};

/**
 * @interface ProtoGroupRoom
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GroupRoom.prototype.serializeBinary = function() {
  return proto.proto.GroupRoom.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGroupRoom}
 */
proto.proto.GroupRoom.deserializeBinary = function(buffer) {
  return proto.proto.GroupRoom.decode(buffer);
};

/**
 * Get GroupRoom type.
 * @memberof ProtoGroupRoom
 * @return {ProtoGroupRoom_Type}
 */
proto.proto.GroupRoom.prototype.getType = function() {
  return this.type;
};

/**
 * Set GroupRoom type.
 * @memberof ProtoGroupRoom
 * @param {ProtoGroupRoom_Type} value
 */
proto.proto.GroupRoom.prototype.setType = function(value) {
  this.type = value;
};

/**
 * Get GroupRoom role.
 * @memberof ProtoGroupRoom
 * @return {ProtoGroupRoom_Role}
 */
proto.proto.GroupRoom.prototype.getRole = function() {
  return this.role;
};

/**
 * Set GroupRoom role.
 * @memberof ProtoGroupRoom
 * @param {ProtoGroupRoom_Role} value
 */
proto.proto.GroupRoom.prototype.setRole = function(value) {
  this.role = value;
};

/**
 * Get GroupRoom participantsCount.
 * @memberof ProtoGroupRoom
 * @return {number}
 */
proto.proto.GroupRoom.prototype.getParticipantsCount = function() {
  return this.participantsCount;
};

/**
 * Set GroupRoom participantsCount.
 * @memberof ProtoGroupRoom
 * @param {number} value
 */
proto.proto.GroupRoom.prototype.setParticipantsCount = function(value) {
  this.participantsCount = value;
};

/**
 * Get GroupRoom participantsCountLabel.
 * @memberof ProtoGroupRoom
 * @return {string}
 */
proto.proto.GroupRoom.prototype.getParticipantsCountLabel = function() {
  return this.participantsCountLabel;
};

/**
 * Set GroupRoom participantsCountLabel.
 * @memberof ProtoGroupRoom
 * @param {string} value
 */
proto.proto.GroupRoom.prototype.setParticipantsCountLabel = function(value) {
  this.participantsCountLabel = value;
};

/**
 * Get GroupRoom participantsCountLimit.
 * @memberof ProtoGroupRoom
 * @return {number}
 */
proto.proto.GroupRoom.prototype.getParticipantsCountLimit = function() {
  return this.participantsCountLimit;
};

/**
 * Set GroupRoom participantsCountLimit.
 * @memberof ProtoGroupRoom
 * @param {number} value
 */
proto.proto.GroupRoom.prototype.setParticipantsCountLimit = function(value) {
  this.participantsCountLimit = value;
};

/**
 * Get GroupRoom participantsCountLimitLabel.
 * @memberof ProtoGroupRoom
 * @return {string}
 */
proto.proto.GroupRoom.prototype.getParticipantsCountLimitLabel = function() {
  return this.participantsCountLimitLabel;
};

/**
 * Set GroupRoom participantsCountLimitLabel.
 * @memberof ProtoGroupRoom
 * @param {string} value
 */
proto.proto.GroupRoom.prototype.setParticipantsCountLimitLabel = function(value) {
  this.participantsCountLimitLabel = value;
};

/**
 * Get GroupRoom description.
 * @memberof ProtoGroupRoom
 * @return {string}
 */
proto.proto.GroupRoom.prototype.getDescription = function() {
  return this.description;
};

/**
 * Set GroupRoom description.
 * @memberof ProtoGroupRoom
 * @param {string} value
 */
proto.proto.GroupRoom.prototype.setDescription = function(value) {
  this.description = value;
};

/**
 * Get GroupRoom avatarCount.
 * @memberof ProtoGroupRoom
 * @return {number}
 */
proto.proto.GroupRoom.prototype.getAvatarCount = function() {
  return this.avatarCount;
};

/**
 * Set GroupRoom avatarCount.
 * @memberof ProtoGroupRoom
 * @param {number} value
 */
proto.proto.GroupRoom.prototype.setAvatarCount = function(value) {
  this.avatarCount = value;
};

/**
 * Get GroupRoom avatar.
 * @memberof ProtoGroupRoom
 * @return {(ProtoAvatar|null|undefined)}
 */
proto.proto.GroupRoom.prototype.getAvatar = function() {
  return this.avatar;
};

/**
 * Set GroupRoom avatar.
 * @memberof ProtoGroupRoom
 * @param {(ProtoAvatar|null|undefined)} value
 */
proto.proto.GroupRoom.prototype.setAvatar = function(value) {
  this.avatar = value;
};

/**
 * Get GroupRoom privateExtra.
 * @memberof ProtoGroupRoom
 * @return {(ProtoGroupRoom_PrivateExtra|null|undefined)}
 */
proto.proto.GroupRoom.prototype.getPrivateExtra = function() {
  return this.privateExtra;
};

/**
 * Set GroupRoom privateExtra.
 * @memberof ProtoGroupRoom
 * @param {(ProtoGroupRoom_PrivateExtra|null|undefined)} value
 */
proto.proto.GroupRoom.prototype.setPrivateExtra = function(value) {
  this.privateExtra = value;
};

/**
 * Get GroupRoom publicExtra.
 * @memberof ProtoGroupRoom
 * @return {(ProtoGroupRoom_PublicExtra|null|undefined)}
 */
proto.proto.GroupRoom.prototype.getPublicExtra = function() {
  return this.publicExtra;
};

/**
 * Set GroupRoom publicExtra.
 * @memberof ProtoGroupRoom
 * @param {(ProtoGroupRoom_PublicExtra|null|undefined)} value
 */
proto.proto.GroupRoom.prototype.setPublicExtra = function(value) {
  this.publicExtra = value;
};

/**
 * @typedef {number} ProtoGroupRoom_Type
 */

/**
 * Type enum.
 * @enum {ProtoGroupRoom_Type}
 * @memberof ProtoGroupRoom
 */
proto.proto.GroupRoom.Type = proto.proto.GroupRoom.prototype.Type = {
  PRIVATE_ROOM : 0,
  PUBLIC_ROOM : 1,
};

/**
 * @typedef {number} ProtoGroupRoom_Role
 */

/**
 * Role enum.
 * @enum {ProtoGroupRoom_Role}
 * @memberof ProtoGroupRoom
 */
proto.proto.GroupRoom.Role = proto.proto.GroupRoom.prototype.Role = {
  MEMBER : 0,
  MODERATOR : 1,
  ADMIN : 2,
  OWNER : 3,
};

/**
 * @interface ProtoGroupRoom_PrivateExtra
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GroupRoom.PrivateExtra.prototype.serializeBinary = function() {
  return proto.proto.GroupRoom.PrivateExtra.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGroupRoom_PrivateExtra}
 */
proto.proto.GroupRoom.PrivateExtra.deserializeBinary = function(buffer) {
  return proto.proto.GroupRoom.PrivateExtra.decode(buffer);
};

/**
 * Get PrivateExtra inviteLink.
 * @memberof ProtoGroupRoom_PrivateExtra
 * @return {string}
 */
proto.proto.GroupRoom.PrivateExtra.prototype.getInviteLink = function() {
  return this.inviteLink;
};

/**
 * Set PrivateExtra inviteLink.
 * @memberof ProtoGroupRoom_PrivateExtra
 * @param {string} value
 */
proto.proto.GroupRoom.PrivateExtra.prototype.setInviteLink = function(value) {
  this.inviteLink = value;
};

/**
 * Get PrivateExtra inviteToken.
 * @memberof ProtoGroupRoom_PrivateExtra
 * @return {string}
 */
proto.proto.GroupRoom.PrivateExtra.prototype.getInviteToken = function() {
  return this.inviteToken;
};

/**
 * Set PrivateExtra inviteToken.
 * @memberof ProtoGroupRoom_PrivateExtra
 * @param {string} value
 */
proto.proto.GroupRoom.PrivateExtra.prototype.setInviteToken = function(value) {
  this.inviteToken = value;
};

/**
 * @interface ProtoGroupRoom_PublicExtra
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GroupRoom.PublicExtra.prototype.serializeBinary = function() {
  return proto.proto.GroupRoom.PublicExtra.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGroupRoom_PublicExtra}
 */
proto.proto.GroupRoom.PublicExtra.deserializeBinary = function(buffer) {
  return proto.proto.GroupRoom.PublicExtra.decode(buffer);
};

/**
 * Get PublicExtra username.
 * @memberof ProtoGroupRoom_PublicExtra
 * @return {string}
 */
proto.proto.GroupRoom.PublicExtra.prototype.getUsername = function() {
  return this.username;
};

/**
 * Set PublicExtra username.
 * @memberof ProtoGroupRoom_PublicExtra
 * @param {string} value
 */
proto.proto.GroupRoom.PublicExtra.prototype.setUsername = function(value) {
  this.username = value;
};

/**
 * @interface ProtoChannelRoom
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelRoom.prototype.serializeBinary = function() {
  return proto.proto.ChannelRoom.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelRoom}
 */
proto.proto.ChannelRoom.deserializeBinary = function(buffer) {
  return proto.proto.ChannelRoom.decode(buffer);
};

/**
 * Get ChannelRoom type.
 * @memberof ProtoChannelRoom
 * @return {ProtoChannelRoom_Type}
 */
proto.proto.ChannelRoom.prototype.getType = function() {
  return this.type;
};

/**
 * Set ChannelRoom type.
 * @memberof ProtoChannelRoom
 * @param {ProtoChannelRoom_Type} value
 */
proto.proto.ChannelRoom.prototype.setType = function(value) {
  this.type = value;
};

/**
 * Get ChannelRoom role.
 * @memberof ProtoChannelRoom
 * @return {ProtoChannelRoom_Role}
 */
proto.proto.ChannelRoom.prototype.getRole = function() {
  return this.role;
};

/**
 * Set ChannelRoom role.
 * @memberof ProtoChannelRoom
 * @param {ProtoChannelRoom_Role} value
 */
proto.proto.ChannelRoom.prototype.setRole = function(value) {
  this.role = value;
};

/**
 * Get ChannelRoom participantsCount.
 * @memberof ProtoChannelRoom
 * @return {number}
 */
proto.proto.ChannelRoom.prototype.getParticipantsCount = function() {
  return this.participantsCount;
};

/**
 * Set ChannelRoom participantsCount.
 * @memberof ProtoChannelRoom
 * @param {number} value
 */
proto.proto.ChannelRoom.prototype.setParticipantsCount = function(value) {
  this.participantsCount = value;
};

/**
 * Get ChannelRoom participantsCountLabel.
 * @memberof ProtoChannelRoom
 * @return {string}
 */
proto.proto.ChannelRoom.prototype.getParticipantsCountLabel = function() {
  return this.participantsCountLabel;
};

/**
 * Set ChannelRoom participantsCountLabel.
 * @memberof ProtoChannelRoom
 * @param {string} value
 */
proto.proto.ChannelRoom.prototype.setParticipantsCountLabel = function(value) {
  this.participantsCountLabel = value;
};

/**
 * Get ChannelRoom description.
 * @memberof ProtoChannelRoom
 * @return {string}
 */
proto.proto.ChannelRoom.prototype.getDescription = function() {
  return this.description;
};

/**
 * Set ChannelRoom description.
 * @memberof ProtoChannelRoom
 * @param {string} value
 */
proto.proto.ChannelRoom.prototype.setDescription = function(value) {
  this.description = value;
};

/**
 * Get ChannelRoom avatarCount.
 * @memberof ProtoChannelRoom
 * @return {number}
 */
proto.proto.ChannelRoom.prototype.getAvatarCount = function() {
  return this.avatarCount;
};

/**
 * Set ChannelRoom avatarCount.
 * @memberof ProtoChannelRoom
 * @param {number} value
 */
proto.proto.ChannelRoom.prototype.setAvatarCount = function(value) {
  this.avatarCount = value;
};

/**
 * Get ChannelRoom avatar.
 * @memberof ProtoChannelRoom
 * @return {(ProtoAvatar|null|undefined)}
 */
proto.proto.ChannelRoom.prototype.getAvatar = function() {
  return this.avatar;
};

/**
 * Set ChannelRoom avatar.
 * @memberof ProtoChannelRoom
 * @param {(ProtoAvatar|null|undefined)} value
 */
proto.proto.ChannelRoom.prototype.setAvatar = function(value) {
  this.avatar = value;
};

/**
 * Get ChannelRoom privateExtra.
 * @memberof ProtoChannelRoom
 * @return {(ProtoChannelRoom_PrivateExtra|null|undefined)}
 */
proto.proto.ChannelRoom.prototype.getPrivateExtra = function() {
  return this.privateExtra;
};

/**
 * Set ChannelRoom privateExtra.
 * @memberof ProtoChannelRoom
 * @param {(ProtoChannelRoom_PrivateExtra|null|undefined)} value
 */
proto.proto.ChannelRoom.prototype.setPrivateExtra = function(value) {
  this.privateExtra = value;
};

/**
 * Get ChannelRoom publicExtra.
 * @memberof ProtoChannelRoom
 * @return {(ProtoChannelRoom_PublicExtra|null|undefined)}
 */
proto.proto.ChannelRoom.prototype.getPublicExtra = function() {
  return this.publicExtra;
};

/**
 * Set ChannelRoom publicExtra.
 * @memberof ProtoChannelRoom
 * @param {(ProtoChannelRoom_PublicExtra|null|undefined)} value
 */
proto.proto.ChannelRoom.prototype.setPublicExtra = function(value) {
  this.publicExtra = value;
};

/**
 * Get ChannelRoom signature.
 * @memberof ProtoChannelRoom
 * @return {boolean}
 */
proto.proto.ChannelRoom.prototype.getSignature = function() {
  return this.signature;
};

/**
 * Set ChannelRoom signature.
 * @memberof ProtoChannelRoom
 * @param {boolean} value
 */
proto.proto.ChannelRoom.prototype.setSignature = function(value) {
  this.signature = value;
};

/**
 * Get ChannelRoom seenId.
 * @memberof ProtoChannelRoom
 * @return {Long}
 */
proto.proto.ChannelRoom.prototype.getSeenId = function() {
  return this.seenId;
};

/**
 * Set ChannelRoom seenId.
 * @memberof ProtoChannelRoom
 * @param {Long} value
 */
proto.proto.ChannelRoom.prototype.setSeenId = function(value) {
  this.seenId = value;
};

/**
 * Get ChannelRoom verified.
 * @memberof ProtoChannelRoom
 * @return {boolean}
 */
proto.proto.ChannelRoom.prototype.getVerified = function() {
  return this.verified;
};

/**
 * Set ChannelRoom verified.
 * @memberof ProtoChannelRoom
 * @param {boolean} value
 */
proto.proto.ChannelRoom.prototype.setVerified = function(value) {
  this.verified = value;
};

/**
 * Get ChannelRoom reactionStatus.
 * @memberof ProtoChannelRoom
 * @return {boolean}
 */
proto.proto.ChannelRoom.prototype.getReactionStatus = function() {
  return this.reactionStatus;
};

/**
 * Set ChannelRoom reactionStatus.
 * @memberof ProtoChannelRoom
 * @param {boolean} value
 */
proto.proto.ChannelRoom.prototype.setReactionStatus = function(value) {
  this.reactionStatus = value;
};

/**
 * @typedef {number} ProtoChannelRoom_Type
 */

/**
 * Type enum.
 * @enum {ProtoChannelRoom_Type}
 * @memberof ProtoChannelRoom
 */
proto.proto.ChannelRoom.Type = proto.proto.ChannelRoom.prototype.Type = {
  PRIVATE_ROOM : 0,
  PUBLIC_ROOM : 1,
};

/**
 * @typedef {number} ProtoChannelRoom_Role
 */

/**
 * Role enum.
 * @enum {ProtoChannelRoom_Role}
 * @memberof ProtoChannelRoom
 */
proto.proto.ChannelRoom.Role = proto.proto.ChannelRoom.prototype.Role = {
  MEMBER : 0,
  MODERATOR : 1,
  ADMIN : 2,
  OWNER : 3,
};

/**
 * @interface ProtoChannelRoom_PrivateExtra
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelRoom.PrivateExtra.prototype.serializeBinary = function() {
  return proto.proto.ChannelRoom.PrivateExtra.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelRoom_PrivateExtra}
 */
proto.proto.ChannelRoom.PrivateExtra.deserializeBinary = function(buffer) {
  return proto.proto.ChannelRoom.PrivateExtra.decode(buffer);
};

/**
 * Get PrivateExtra inviteLink.
 * @memberof ProtoChannelRoom_PrivateExtra
 * @return {string}
 */
proto.proto.ChannelRoom.PrivateExtra.prototype.getInviteLink = function() {
  return this.inviteLink;
};

/**
 * Set PrivateExtra inviteLink.
 * @memberof ProtoChannelRoom_PrivateExtra
 * @param {string} value
 */
proto.proto.ChannelRoom.PrivateExtra.prototype.setInviteLink = function(value) {
  this.inviteLink = value;
};

/**
 * Get PrivateExtra inviteToken.
 * @memberof ProtoChannelRoom_PrivateExtra
 * @return {string}
 */
proto.proto.ChannelRoom.PrivateExtra.prototype.getInviteToken = function() {
  return this.inviteToken;
};

/**
 * Set PrivateExtra inviteToken.
 * @memberof ProtoChannelRoom_PrivateExtra
 * @param {string} value
 */
proto.proto.ChannelRoom.PrivateExtra.prototype.setInviteToken = function(value) {
  this.inviteToken = value;
};

/**
 * @interface ProtoChannelRoom_PublicExtra
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelRoom.PublicExtra.prototype.serializeBinary = function() {
  return proto.proto.ChannelRoom.PublicExtra.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelRoom_PublicExtra}
 */
proto.proto.ChannelRoom.PublicExtra.deserializeBinary = function(buffer) {
  return proto.proto.ChannelRoom.PublicExtra.decode(buffer);
};

/**
 * Get PublicExtra username.
 * @memberof ProtoChannelRoom_PublicExtra
 * @return {string}
 */
proto.proto.ChannelRoom.PublicExtra.prototype.getUsername = function() {
  return this.username;
};

/**
 * Set PublicExtra username.
 * @memberof ProtoChannelRoom_PublicExtra
 * @param {string} value
 */
proto.proto.ChannelRoom.PublicExtra.prototype.setUsername = function(value) {
  this.username = value;
};

/**
 * @interface ProtoThumbnail
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.Thumbnail.prototype.serializeBinary = function() {
  return proto.proto.Thumbnail.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoThumbnail}
 */
proto.proto.Thumbnail.deserializeBinary = function(buffer) {
  return proto.proto.Thumbnail.decode(buffer);
};

/**
 * Get Thumbnail size.
 * @memberof ProtoThumbnail
 * @return {Long}
 */
proto.proto.Thumbnail.prototype.getSize = function() {
  return this.size;
};

/**
 * Set Thumbnail size.
 * @memberof ProtoThumbnail
 * @param {Long} value
 */
proto.proto.Thumbnail.prototype.setSize = function(value) {
  this.size = value;
};

/**
 * Get Thumbnail width.
 * @memberof ProtoThumbnail
 * @return {number}
 */
proto.proto.Thumbnail.prototype.getWidth = function() {
  return this.width;
};

/**
 * Set Thumbnail width.
 * @memberof ProtoThumbnail
 * @param {number} value
 */
proto.proto.Thumbnail.prototype.setWidth = function(value) {
  this.width = value;
};

/**
 * Get Thumbnail height.
 * @memberof ProtoThumbnail
 * @return {number}
 */
proto.proto.Thumbnail.prototype.getHeight = function() {
  return this.height;
};

/**
 * Set Thumbnail height.
 * @memberof ProtoThumbnail
 * @param {number} value
 */
proto.proto.Thumbnail.prototype.setHeight = function(value) {
  this.height = value;
};

/**
 * Get Thumbnail cacheId.
 * @memberof ProtoThumbnail
 * @return {string}
 */
proto.proto.Thumbnail.prototype.getCacheId = function() {
  return this.cacheId;
};

/**
 * Set Thumbnail cacheId.
 * @memberof ProtoThumbnail
 * @param {string} value
 */
proto.proto.Thumbnail.prototype.setCacheId = function(value) {
  this.cacheId = value;
};

/**
 * Get Thumbnail name.
 * @memberof ProtoThumbnail
 * @return {string}
 */
proto.proto.Thumbnail.prototype.getName = function() {
  return this.name;
};

/**
 * Set Thumbnail name.
 * @memberof ProtoThumbnail
 * @param {string} value
 */
proto.proto.Thumbnail.prototype.setName = function(value) {
  this.name = value;
};

/**
 * Get Thumbnail mime.
 * @memberof ProtoThumbnail
 * @return {string}
 */
proto.proto.Thumbnail.prototype.getMime = function() {
  return this.mime;
};

/**
 * Set Thumbnail mime.
 * @memberof ProtoThumbnail
 * @param {string} value
 */
proto.proto.Thumbnail.prototype.setMime = function(value) {
  this.mime = value;
};

/**
 * @interface ProtoFile
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.File.prototype.serializeBinary = function() {
  return proto.proto.File.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoFile}
 */
proto.proto.File.deserializeBinary = function(buffer) {
  return proto.proto.File.decode(buffer);
};

/**
 * Get File token.
 * @memberof ProtoFile
 * @return {string}
 */
proto.proto.File.prototype.getToken = function() {
  return this.token;
};

/**
 * Set File token.
 * @memberof ProtoFile
 * @param {string} value
 */
proto.proto.File.prototype.setToken = function(value) {
  this.token = value;
};

/**
 * Get File name.
 * @memberof ProtoFile
 * @return {string}
 */
proto.proto.File.prototype.getName = function() {
  return this.name;
};

/**
 * Set File name.
 * @memberof ProtoFile
 * @param {string} value
 */
proto.proto.File.prototype.setName = function(value) {
  this.name = value;
};

/**
 * Get File size.
 * @memberof ProtoFile
 * @return {Long}
 */
proto.proto.File.prototype.getSize = function() {
  return this.size;
};

/**
 * Set File size.
 * @memberof ProtoFile
 * @param {Long} value
 */
proto.proto.File.prototype.setSize = function(value) {
  this.size = value;
};

/**
 * Get File largeThumbnail.
 * @memberof ProtoFile
 * @return {(ProtoThumbnail|null|undefined)}
 */
proto.proto.File.prototype.getLargeThumbnail = function() {
  return this.largeThumbnail;
};

/**
 * Set File largeThumbnail.
 * @memberof ProtoFile
 * @param {(ProtoThumbnail|null|undefined)} value
 */
proto.proto.File.prototype.setLargeThumbnail = function(value) {
  this.largeThumbnail = value;
};

/**
 * Get File smallThumbnail.
 * @memberof ProtoFile
 * @return {(ProtoThumbnail|null|undefined)}
 */
proto.proto.File.prototype.getSmallThumbnail = function() {
  return this.smallThumbnail;
};

/**
 * Set File smallThumbnail.
 * @memberof ProtoFile
 * @param {(ProtoThumbnail|null|undefined)} value
 */
proto.proto.File.prototype.setSmallThumbnail = function(value) {
  this.smallThumbnail = value;
};

/**
 * Get File waveformThumbnail.
 * @memberof ProtoFile
 * @return {(ProtoThumbnail|null|undefined)}
 */
proto.proto.File.prototype.getWaveformThumbnail = function() {
  return this.waveformThumbnail;
};

/**
 * Set File waveformThumbnail.
 * @memberof ProtoFile
 * @param {(ProtoThumbnail|null|undefined)} value
 */
proto.proto.File.prototype.setWaveformThumbnail = function(value) {
  this.waveformThumbnail = value;
};

/**
 * Get File width.
 * @memberof ProtoFile
 * @return {number}
 */
proto.proto.File.prototype.getWidth = function() {
  return this.width;
};

/**
 * Set File width.
 * @memberof ProtoFile
 * @param {number} value
 */
proto.proto.File.prototype.setWidth = function(value) {
  this.width = value;
};

/**
 * Get File height.
 * @memberof ProtoFile
 * @return {number}
 */
proto.proto.File.prototype.getHeight = function() {
  return this.height;
};

/**
 * Set File height.
 * @memberof ProtoFile
 * @param {number} value
 */
proto.proto.File.prototype.setHeight = function(value) {
  this.height = value;
};

/**
 * Get File duration.
 * @memberof ProtoFile
 * @return {number}
 */
proto.proto.File.prototype.getDuration = function() {
  return this.duration;
};

/**
 * Set File duration.
 * @memberof ProtoFile
 * @param {number} value
 */
proto.proto.File.prototype.setDuration = function(value) {
  this.duration = value;
};

/**
 * Get File cacheId.
 * @memberof ProtoFile
 * @return {string}
 */
proto.proto.File.prototype.getCacheId = function() {
  return this.cacheId;
};

/**
 * Set File cacheId.
 * @memberof ProtoFile
 * @param {string} value
 */
proto.proto.File.prototype.setCacheId = function(value) {
  this.cacheId = value;
};

/**
 * Get File mime.
 * @memberof ProtoFile
 * @return {string}
 */
proto.proto.File.prototype.getMime = function() {
  return this.mime;
};

/**
 * Set File mime.
 * @memberof ProtoFile
 * @param {string} value
 */
proto.proto.File.prototype.setMime = function(value) {
  this.mime = value;
};

/**
 * Get File publicUrl.
 * @memberof ProtoFile
 * @return {string}
 */
proto.proto.File.prototype.getPublicUrl = function() {
  return this.publicUrl;
};

/**
 * Set File publicUrl.
 * @memberof ProtoFile
 * @param {string} value
 */
proto.proto.File.prototype.setPublicUrl = function(value) {
  this.publicUrl = value;
};

/**
 * @typedef {number} ProtoPrivacyType
 */

/**
 * PrivacyType enum.
 * @enum {ProtoPrivacyType}
 * @memberof Proto
 */
proto.proto.PrivacyType = {
  USER_STATUS : 0,
  AVATAR : 1,
  GROUP_INVITE : 2,
  CHANNEL_INVITE : 3,
  VOICE_CALLING : 4,
  VIDEO_CALLING : 5,
  SCREEN_SHARING : 6,
  SECRET_CHAT : 7,
};

/**
 * @typedef {number} ProtoPrivacyLevel
 */

/**
 * PrivacyLevel enum.
 * @enum {ProtoPrivacyLevel}
 * @memberof Proto
 */
proto.proto.PrivacyLevel = {
  ALLOW_ALL : 0,
  DENY_ALL : 1,
  ALLOW_CONTACTS : 2,
};

/**
 * @interface ProtoWallpaper
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.Wallpaper.prototype.serializeBinary = function() {
  return proto.proto.Wallpaper.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoWallpaper}
 */
proto.proto.Wallpaper.deserializeBinary = function(buffer) {
  return proto.proto.Wallpaper.decode(buffer);
};

/**
 * Get Wallpaper file.
 * @memberof ProtoWallpaper
 * @return {(ProtoFile|null|undefined)}
 */
proto.proto.Wallpaper.prototype.getFile = function() {
  return this.file;
};

/**
 * Set Wallpaper file.
 * @memberof ProtoWallpaper
 * @param {(ProtoFile|null|undefined)} value
 */
proto.proto.Wallpaper.prototype.setFile = function(value) {
  this.file = value;
};

/**
 * Get Wallpaper color.
 * @memberof ProtoWallpaper
 * @return {string}
 */
proto.proto.Wallpaper.prototype.getColor = function() {
  return this.color;
};

/**
 * Set Wallpaper color.
 * @memberof ProtoWallpaper
 * @param {string} value
 */
proto.proto.Wallpaper.prototype.setColor = function(value) {
  this.color = value;
};

/**
 * @interface ProtoPagination
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.Pagination.prototype.serializeBinary = function() {
  return proto.proto.Pagination.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoPagination}
 */
proto.proto.Pagination.deserializeBinary = function(buffer) {
  return proto.proto.Pagination.decode(buffer);
};

/**
 * Get Pagination offset.
 * @memberof ProtoPagination
 * @return {number}
 */
proto.proto.Pagination.prototype.getOffset = function() {
  return this.offset;
};

/**
 * Set Pagination offset.
 * @memberof ProtoPagination
 * @param {number} value
 */
proto.proto.Pagination.prototype.setOffset = function(value) {
  this.offset = value;
};

/**
 * Get Pagination limit.
 * @memberof ProtoPagination
 * @return {number}
 */
proto.proto.Pagination.prototype.getLimit = function() {
  return this.limit;
};

/**
 * Set Pagination limit.
 * @memberof ProtoPagination
 * @param {number} value
 */
proto.proto.Pagination.prototype.setLimit = function(value) {
  this.limit = value;
};

/**
 * @interface ProtoChannelAddMessageReaction
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelAddMessageReaction.prototype.serializeBinary = function() {
  return proto.proto.ChannelAddMessageReaction.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelAddMessageReaction}
 */
proto.proto.ChannelAddMessageReaction.deserializeBinary = function(buffer) {
  return proto.proto.ChannelAddMessageReaction.decode(buffer);
};

/**
 * Get ChannelAddMessageReaction request.
 * @memberof ProtoChannelAddMessageReaction
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.ChannelAddMessageReaction.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set ChannelAddMessageReaction request.
 * @memberof ProtoChannelAddMessageReaction
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.ChannelAddMessageReaction.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get ChannelAddMessageReaction roomId.
 * @memberof ProtoChannelAddMessageReaction
 * @return {Long}
 */
proto.proto.ChannelAddMessageReaction.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChannelAddMessageReaction roomId.
 * @memberof ProtoChannelAddMessageReaction
 * @param {Long} value
 */
proto.proto.ChannelAddMessageReaction.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get ChannelAddMessageReaction messageId.
 * @memberof ProtoChannelAddMessageReaction
 * @return {Long}
 */
proto.proto.ChannelAddMessageReaction.prototype.getMessageId = function() {
  return this.messageId;
};

/**
 * Set ChannelAddMessageReaction messageId.
 * @memberof ProtoChannelAddMessageReaction
 * @param {Long} value
 */
proto.proto.ChannelAddMessageReaction.prototype.setMessageId = function(value) {
  this.messageId = value;
};

/**
 * Get ChannelAddMessageReaction reaction.
 * @memberof ProtoChannelAddMessageReaction
 * @return {ProtoRoomMessageReaction}
 */
proto.proto.ChannelAddMessageReaction.prototype.getReaction = function() {
  return this.reaction;
};

/**
 * Set ChannelAddMessageReaction reaction.
 * @memberof ProtoChannelAddMessageReaction
 * @param {ProtoRoomMessageReaction} value
 */
proto.proto.ChannelAddMessageReaction.prototype.setReaction = function(value) {
  this.reaction = value;
};

/**
 * @interface ProtoChannelAddMessageReactionResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelAddMessageReactionResponse.prototype.serializeBinary = function() {
  return proto.proto.ChannelAddMessageReactionResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelAddMessageReactionResponse}
 */
proto.proto.ChannelAddMessageReactionResponse.deserializeBinary = function(buffer) {
  return proto.proto.ChannelAddMessageReactionResponse.decode(buffer);
};

/**
 * Get ChannelAddMessageReactionResponse response.
 * @memberof ProtoChannelAddMessageReactionResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.ChannelAddMessageReactionResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set ChannelAddMessageReactionResponse response.
 * @memberof ProtoChannelAddMessageReactionResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.ChannelAddMessageReactionResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get ChannelAddMessageReactionResponse reactionCounterLabel.
 * @memberof ProtoChannelAddMessageReactionResponse
 * @return {string}
 */
proto.proto.ChannelAddMessageReactionResponse.prototype.getReactionCounterLabel = function() {
  return this.reactionCounterLabel;
};

/**
 * Set ChannelAddMessageReactionResponse reactionCounterLabel.
 * @memberof ProtoChannelAddMessageReactionResponse
 * @param {string} value
 */
proto.proto.ChannelAddMessageReactionResponse.prototype.setReactionCounterLabel = function(value) {
  this.reactionCounterLabel = value;
};

/**
 * @interface ProtoChannelAddModerator
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelAddModerator.prototype.serializeBinary = function() {
  return proto.proto.ChannelAddModerator.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelAddModerator}
 */
proto.proto.ChannelAddModerator.deserializeBinary = function(buffer) {
  return proto.proto.ChannelAddModerator.decode(buffer);
};

/**
 * Get ChannelAddModerator request.
 * @memberof ProtoChannelAddModerator
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.ChannelAddModerator.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set ChannelAddModerator request.
 * @memberof ProtoChannelAddModerator
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.ChannelAddModerator.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get ChannelAddModerator roomId.
 * @memberof ProtoChannelAddModerator
 * @return {Long}
 */
proto.proto.ChannelAddModerator.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChannelAddModerator roomId.
 * @memberof ProtoChannelAddModerator
 * @param {Long} value
 */
proto.proto.ChannelAddModerator.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get ChannelAddModerator memberId.
 * @memberof ProtoChannelAddModerator
 * @return {Long}
 */
proto.proto.ChannelAddModerator.prototype.getMemberId = function() {
  return this.memberId;
};

/**
 * Set ChannelAddModerator memberId.
 * @memberof ProtoChannelAddModerator
 * @param {Long} value
 */
proto.proto.ChannelAddModerator.prototype.setMemberId = function(value) {
  this.memberId = value;
};

/**
 * @interface ProtoChannelAddModeratorResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelAddModeratorResponse.prototype.serializeBinary = function() {
  return proto.proto.ChannelAddModeratorResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelAddModeratorResponse}
 */
proto.proto.ChannelAddModeratorResponse.deserializeBinary = function(buffer) {
  return proto.proto.ChannelAddModeratorResponse.decode(buffer);
};

/**
 * Get ChannelAddModeratorResponse response.
 * @memberof ProtoChannelAddModeratorResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.ChannelAddModeratorResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set ChannelAddModeratorResponse response.
 * @memberof ProtoChannelAddModeratorResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.ChannelAddModeratorResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get ChannelAddModeratorResponse roomId.
 * @memberof ProtoChannelAddModeratorResponse
 * @return {Long}
 */
proto.proto.ChannelAddModeratorResponse.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChannelAddModeratorResponse roomId.
 * @memberof ProtoChannelAddModeratorResponse
 * @param {Long} value
 */
proto.proto.ChannelAddModeratorResponse.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get ChannelAddModeratorResponse memberId.
 * @memberof ProtoChannelAddModeratorResponse
 * @return {Long}
 */
proto.proto.ChannelAddModeratorResponse.prototype.getMemberId = function() {
  return this.memberId;
};

/**
 * Set ChannelAddModeratorResponse memberId.
 * @memberof ProtoChannelAddModeratorResponse
 * @param {Long} value
 */
proto.proto.ChannelAddModeratorResponse.prototype.setMemberId = function(value) {
  this.memberId = value;
};

/**
 * @interface ProtoChannelAvatarAdd
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelAvatarAdd.prototype.serializeBinary = function() {
  return proto.proto.ChannelAvatarAdd.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelAvatarAdd}
 */
proto.proto.ChannelAvatarAdd.deserializeBinary = function(buffer) {
  return proto.proto.ChannelAvatarAdd.decode(buffer);
};

/**
 * Get ChannelAvatarAdd request.
 * @memberof ProtoChannelAvatarAdd
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.ChannelAvatarAdd.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set ChannelAvatarAdd request.
 * @memberof ProtoChannelAvatarAdd
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.ChannelAvatarAdd.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get ChannelAvatarAdd attachment.
 * @memberof ProtoChannelAvatarAdd
 * @return {string}
 */
proto.proto.ChannelAvatarAdd.prototype.getAttachment = function() {
  return this.attachment;
};

/**
 * Set ChannelAvatarAdd attachment.
 * @memberof ProtoChannelAvatarAdd
 * @param {string} value
 */
proto.proto.ChannelAvatarAdd.prototype.setAttachment = function(value) {
  this.attachment = value;
};

/**
 * Get ChannelAvatarAdd roomId.
 * @memberof ProtoChannelAvatarAdd
 * @return {Long}
 */
proto.proto.ChannelAvatarAdd.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChannelAvatarAdd roomId.
 * @memberof ProtoChannelAvatarAdd
 * @param {Long} value
 */
proto.proto.ChannelAvatarAdd.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * @interface ProtoChannelAvatarAddResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelAvatarAddResponse.prototype.serializeBinary = function() {
  return proto.proto.ChannelAvatarAddResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelAvatarAddResponse}
 */
proto.proto.ChannelAvatarAddResponse.deserializeBinary = function(buffer) {
  return proto.proto.ChannelAvatarAddResponse.decode(buffer);
};

/**
 * Get ChannelAvatarAddResponse response.
 * @memberof ProtoChannelAvatarAddResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.ChannelAvatarAddResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set ChannelAvatarAddResponse response.
 * @memberof ProtoChannelAvatarAddResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.ChannelAvatarAddResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get ChannelAvatarAddResponse avatar.
 * @memberof ProtoChannelAvatarAddResponse
 * @return {(ProtoAvatar|null|undefined)}
 */
proto.proto.ChannelAvatarAddResponse.prototype.getAvatar = function() {
  return this.avatar;
};

/**
 * Set ChannelAvatarAddResponse avatar.
 * @memberof ProtoChannelAvatarAddResponse
 * @param {(ProtoAvatar|null|undefined)} value
 */
proto.proto.ChannelAvatarAddResponse.prototype.setAvatar = function(value) {
  this.avatar = value;
};

/**
 * Get ChannelAvatarAddResponse roomId.
 * @memberof ProtoChannelAvatarAddResponse
 * @return {Long}
 */
proto.proto.ChannelAvatarAddResponse.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChannelAvatarAddResponse roomId.
 * @memberof ProtoChannelAvatarAddResponse
 * @param {Long} value
 */
proto.proto.ChannelAvatarAddResponse.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * @interface ProtoChannelAvatarDelete
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelAvatarDelete.prototype.serializeBinary = function() {
  return proto.proto.ChannelAvatarDelete.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelAvatarDelete}
 */
proto.proto.ChannelAvatarDelete.deserializeBinary = function(buffer) {
  return proto.proto.ChannelAvatarDelete.decode(buffer);
};

/**
 * Get ChannelAvatarDelete request.
 * @memberof ProtoChannelAvatarDelete
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.ChannelAvatarDelete.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set ChannelAvatarDelete request.
 * @memberof ProtoChannelAvatarDelete
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.ChannelAvatarDelete.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get ChannelAvatarDelete id.
 * @memberof ProtoChannelAvatarDelete
 * @return {Long}
 */
proto.proto.ChannelAvatarDelete.prototype.getId = function() {
  return this.id;
};

/**
 * Set ChannelAvatarDelete id.
 * @memberof ProtoChannelAvatarDelete
 * @param {Long} value
 */
proto.proto.ChannelAvatarDelete.prototype.setId = function(value) {
  this.id = value;
};

/**
 * Get ChannelAvatarDelete roomId.
 * @memberof ProtoChannelAvatarDelete
 * @return {Long}
 */
proto.proto.ChannelAvatarDelete.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChannelAvatarDelete roomId.
 * @memberof ProtoChannelAvatarDelete
 * @param {Long} value
 */
proto.proto.ChannelAvatarDelete.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * @interface ProtoChannelAvatarDeleteResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelAvatarDeleteResponse.prototype.serializeBinary = function() {
  return proto.proto.ChannelAvatarDeleteResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelAvatarDeleteResponse}
 */
proto.proto.ChannelAvatarDeleteResponse.deserializeBinary = function(buffer) {
  return proto.proto.ChannelAvatarDeleteResponse.decode(buffer);
};

/**
 * Get ChannelAvatarDeleteResponse response.
 * @memberof ProtoChannelAvatarDeleteResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.ChannelAvatarDeleteResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set ChannelAvatarDeleteResponse response.
 * @memberof ProtoChannelAvatarDeleteResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.ChannelAvatarDeleteResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get ChannelAvatarDeleteResponse id.
 * @memberof ProtoChannelAvatarDeleteResponse
 * @return {Long}
 */
proto.proto.ChannelAvatarDeleteResponse.prototype.getId = function() {
  return this.id;
};

/**
 * Set ChannelAvatarDeleteResponse id.
 * @memberof ProtoChannelAvatarDeleteResponse
 * @param {Long} value
 */
proto.proto.ChannelAvatarDeleteResponse.prototype.setId = function(value) {
  this.id = value;
};

/**
 * Get ChannelAvatarDeleteResponse roomId.
 * @memberof ProtoChannelAvatarDeleteResponse
 * @return {Long}
 */
proto.proto.ChannelAvatarDeleteResponse.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChannelAvatarDeleteResponse roomId.
 * @memberof ProtoChannelAvatarDeleteResponse
 * @param {Long} value
 */
proto.proto.ChannelAvatarDeleteResponse.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * @interface ProtoChannelAvatarGetList
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelAvatarGetList.prototype.serializeBinary = function() {
  return proto.proto.ChannelAvatarGetList.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelAvatarGetList}
 */
proto.proto.ChannelAvatarGetList.deserializeBinary = function(buffer) {
  return proto.proto.ChannelAvatarGetList.decode(buffer);
};

/**
 * Get ChannelAvatarGetList request.
 * @memberof ProtoChannelAvatarGetList
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.ChannelAvatarGetList.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set ChannelAvatarGetList request.
 * @memberof ProtoChannelAvatarGetList
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.ChannelAvatarGetList.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get ChannelAvatarGetList roomId.
 * @memberof ProtoChannelAvatarGetList
 * @return {Long}
 */
proto.proto.ChannelAvatarGetList.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChannelAvatarGetList roomId.
 * @memberof ProtoChannelAvatarGetList
 * @param {Long} value
 */
proto.proto.ChannelAvatarGetList.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * @interface ProtoChannelAvatarGetListResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelAvatarGetListResponse.prototype.serializeBinary = function() {
  return proto.proto.ChannelAvatarGetListResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelAvatarGetListResponse}
 */
proto.proto.ChannelAvatarGetListResponse.deserializeBinary = function(buffer) {
  return proto.proto.ChannelAvatarGetListResponse.decode(buffer);
};

/**
 * Get ChannelAvatarGetListResponse response.
 * @memberof ProtoChannelAvatarGetListResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.ChannelAvatarGetListResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set ChannelAvatarGetListResponse response.
 * @memberof ProtoChannelAvatarGetListResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.ChannelAvatarGetListResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get ChannelAvatarGetListResponse avatar.
 * @memberof ProtoChannelAvatarGetListResponse
 * @return {Array.<ProtoAvatar>}
 */
proto.proto.ChannelAvatarGetListResponse.prototype.getAvatarList = function() {
  return this.avatar;
};

/**
 * Set ChannelAvatarGetListResponse avatar.
 * @memberof ProtoChannelAvatarGetListResponse
 * @param {Array.<ProtoAvatar>} value
 */
proto.proto.ChannelAvatarGetListResponse.prototype.setAvatarList = function(value) {
  this.avatar = value;
};

/**
 * @interface ProtoChannelCheckUsername
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelCheckUsername.prototype.serializeBinary = function() {
  return proto.proto.ChannelCheckUsername.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelCheckUsername}
 */
proto.proto.ChannelCheckUsername.deserializeBinary = function(buffer) {
  return proto.proto.ChannelCheckUsername.decode(buffer);
};

/**
 * Get ChannelCheckUsername request.
 * @memberof ProtoChannelCheckUsername
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.ChannelCheckUsername.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set ChannelCheckUsername request.
 * @memberof ProtoChannelCheckUsername
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.ChannelCheckUsername.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get ChannelCheckUsername username.
 * @memberof ProtoChannelCheckUsername
 * @return {string}
 */
proto.proto.ChannelCheckUsername.prototype.getUsername = function() {
  return this.username;
};

/**
 * Set ChannelCheckUsername username.
 * @memberof ProtoChannelCheckUsername
 * @param {string} value
 */
proto.proto.ChannelCheckUsername.prototype.setUsername = function(value) {
  this.username = value;
};

/**
 * Get ChannelCheckUsername roomId.
 * @memberof ProtoChannelCheckUsername
 * @return {Long}
 */
proto.proto.ChannelCheckUsername.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChannelCheckUsername roomId.
 * @memberof ProtoChannelCheckUsername
 * @param {Long} value
 */
proto.proto.ChannelCheckUsername.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * @interface ProtoChannelCheckUsernameResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelCheckUsernameResponse.prototype.serializeBinary = function() {
  return proto.proto.ChannelCheckUsernameResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelCheckUsernameResponse}
 */
proto.proto.ChannelCheckUsernameResponse.deserializeBinary = function(buffer) {
  return proto.proto.ChannelCheckUsernameResponse.decode(buffer);
};

/**
 * Get ChannelCheckUsernameResponse response.
 * @memberof ProtoChannelCheckUsernameResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.ChannelCheckUsernameResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set ChannelCheckUsernameResponse response.
 * @memberof ProtoChannelCheckUsernameResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.ChannelCheckUsernameResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get ChannelCheckUsernameResponse status.
 * @memberof ProtoChannelCheckUsernameResponse
 * @return {ProtoChannelCheckUsernameResponse_Status}
 */
proto.proto.ChannelCheckUsernameResponse.prototype.getStatus = function() {
  return this.status;
};

/**
 * Set ChannelCheckUsernameResponse status.
 * @memberof ProtoChannelCheckUsernameResponse
 * @param {ProtoChannelCheckUsernameResponse_Status} value
 */
proto.proto.ChannelCheckUsernameResponse.prototype.setStatus = function(value) {
  this.status = value;
};

/**
 * @typedef {number} ProtoChannelCheckUsernameResponse_Status
 */

/**
 * Status enum.
 * @enum {ProtoChannelCheckUsernameResponse_Status}
 * @memberof ProtoChannelCheckUsernameResponse
 */
proto.proto.ChannelCheckUsernameResponse.Status = proto.proto.ChannelCheckUsernameResponse.prototype.Status = {
  INVALID : 0,
  TAKEN : 1,
  AVAILABLE : 2,
  OCCUPYING_LIMIT_EXCEEDED : 3,
};

/**
 * @interface ProtoChannelCreate
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelCreate.prototype.serializeBinary = function() {
  return proto.proto.ChannelCreate.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelCreate}
 */
proto.proto.ChannelCreate.deserializeBinary = function(buffer) {
  return proto.proto.ChannelCreate.decode(buffer);
};

/**
 * Get ChannelCreate request.
 * @memberof ProtoChannelCreate
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.ChannelCreate.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set ChannelCreate request.
 * @memberof ProtoChannelCreate
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.ChannelCreate.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get ChannelCreate name.
 * @memberof ProtoChannelCreate
 * @return {string}
 */
proto.proto.ChannelCreate.prototype.getName = function() {
  return this.name;
};

/**
 * Set ChannelCreate name.
 * @memberof ProtoChannelCreate
 * @param {string} value
 */
proto.proto.ChannelCreate.prototype.setName = function(value) {
  this.name = value;
};

/**
 * Get ChannelCreate description.
 * @memberof ProtoChannelCreate
 * @return {string}
 */
proto.proto.ChannelCreate.prototype.getDescription = function() {
  return this.description;
};

/**
 * Set ChannelCreate description.
 * @memberof ProtoChannelCreate
 * @param {string} value
 */
proto.proto.ChannelCreate.prototype.setDescription = function(value) {
  this.description = value;
};

/**
 * @interface ProtoChannelCreateResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelCreateResponse.prototype.serializeBinary = function() {
  return proto.proto.ChannelCreateResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelCreateResponse}
 */
proto.proto.ChannelCreateResponse.deserializeBinary = function(buffer) {
  return proto.proto.ChannelCreateResponse.decode(buffer);
};

/**
 * Get ChannelCreateResponse response.
 * @memberof ProtoChannelCreateResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.ChannelCreateResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set ChannelCreateResponse response.
 * @memberof ProtoChannelCreateResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.ChannelCreateResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get ChannelCreateResponse roomId.
 * @memberof ProtoChannelCreateResponse
 * @return {Long}
 */
proto.proto.ChannelCreateResponse.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChannelCreateResponse roomId.
 * @memberof ProtoChannelCreateResponse
 * @param {Long} value
 */
proto.proto.ChannelCreateResponse.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get ChannelCreateResponse inviteLink.
 * @memberof ProtoChannelCreateResponse
 * @return {string}
 */
proto.proto.ChannelCreateResponse.prototype.getInviteLink = function() {
  return this.inviteLink;
};

/**
 * Set ChannelCreateResponse inviteLink.
 * @memberof ProtoChannelCreateResponse
 * @param {string} value
 */
proto.proto.ChannelCreateResponse.prototype.setInviteLink = function(value) {
  this.inviteLink = value;
};

/**
 * @interface ProtoChannelDelete
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelDelete.prototype.serializeBinary = function() {
  return proto.proto.ChannelDelete.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelDelete}
 */
proto.proto.ChannelDelete.deserializeBinary = function(buffer) {
  return proto.proto.ChannelDelete.decode(buffer);
};

/**
 * Get ChannelDelete request.
 * @memberof ProtoChannelDelete
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.ChannelDelete.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set ChannelDelete request.
 * @memberof ProtoChannelDelete
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.ChannelDelete.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get ChannelDelete roomId.
 * @memberof ProtoChannelDelete
 * @return {Long}
 */
proto.proto.ChannelDelete.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChannelDelete roomId.
 * @memberof ProtoChannelDelete
 * @param {Long} value
 */
proto.proto.ChannelDelete.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * @interface ProtoChannelDeleteResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelDeleteResponse.prototype.serializeBinary = function() {
  return proto.proto.ChannelDeleteResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelDeleteResponse}
 */
proto.proto.ChannelDeleteResponse.deserializeBinary = function(buffer) {
  return proto.proto.ChannelDeleteResponse.decode(buffer);
};

/**
 * Get ChannelDeleteResponse response.
 * @memberof ProtoChannelDeleteResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.ChannelDeleteResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set ChannelDeleteResponse response.
 * @memberof ProtoChannelDeleteResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.ChannelDeleteResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get ChannelDeleteResponse roomId.
 * @memberof ProtoChannelDeleteResponse
 * @return {Long}
 */
proto.proto.ChannelDeleteResponse.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChannelDeleteResponse roomId.
 * @memberof ProtoChannelDeleteResponse
 * @param {Long} value
 */
proto.proto.ChannelDeleteResponse.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * @interface ProtoChannelDeleteMessage
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelDeleteMessage.prototype.serializeBinary = function() {
  return proto.proto.ChannelDeleteMessage.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelDeleteMessage}
 */
proto.proto.ChannelDeleteMessage.deserializeBinary = function(buffer) {
  return proto.proto.ChannelDeleteMessage.decode(buffer);
};

/**
 * Get ChannelDeleteMessage request.
 * @memberof ProtoChannelDeleteMessage
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.ChannelDeleteMessage.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set ChannelDeleteMessage request.
 * @memberof ProtoChannelDeleteMessage
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.ChannelDeleteMessage.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get ChannelDeleteMessage roomId.
 * @memberof ProtoChannelDeleteMessage
 * @return {Long}
 */
proto.proto.ChannelDeleteMessage.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChannelDeleteMessage roomId.
 * @memberof ProtoChannelDeleteMessage
 * @param {Long} value
 */
proto.proto.ChannelDeleteMessage.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get ChannelDeleteMessage messageId.
 * @memberof ProtoChannelDeleteMessage
 * @return {Long}
 */
proto.proto.ChannelDeleteMessage.prototype.getMessageId = function() {
  return this.messageId;
};

/**
 * Set ChannelDeleteMessage messageId.
 * @memberof ProtoChannelDeleteMessage
 * @param {Long} value
 */
proto.proto.ChannelDeleteMessage.prototype.setMessageId = function(value) {
  this.messageId = value;
};

/**
 * @interface ProtoChannelDeleteMessageResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelDeleteMessageResponse.prototype.serializeBinary = function() {
  return proto.proto.ChannelDeleteMessageResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelDeleteMessageResponse}
 */
proto.proto.ChannelDeleteMessageResponse.deserializeBinary = function(buffer) {
  return proto.proto.ChannelDeleteMessageResponse.decode(buffer);
};

/**
 * Get ChannelDeleteMessageResponse response.
 * @memberof ProtoChannelDeleteMessageResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.ChannelDeleteMessageResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set ChannelDeleteMessageResponse response.
 * @memberof ProtoChannelDeleteMessageResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.ChannelDeleteMessageResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get ChannelDeleteMessageResponse roomId.
 * @memberof ProtoChannelDeleteMessageResponse
 * @return {Long}
 */
proto.proto.ChannelDeleteMessageResponse.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChannelDeleteMessageResponse roomId.
 * @memberof ProtoChannelDeleteMessageResponse
 * @param {Long} value
 */
proto.proto.ChannelDeleteMessageResponse.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get ChannelDeleteMessageResponse messageId.
 * @memberof ProtoChannelDeleteMessageResponse
 * @return {Long}
 */
proto.proto.ChannelDeleteMessageResponse.prototype.getMessageId = function() {
  return this.messageId;
};

/**
 * Set ChannelDeleteMessageResponse messageId.
 * @memberof ProtoChannelDeleteMessageResponse
 * @param {Long} value
 */
proto.proto.ChannelDeleteMessageResponse.prototype.setMessageId = function(value) {
  this.messageId = value;
};

/**
 * Get ChannelDeleteMessageResponse deleteVersion.
 * @memberof ProtoChannelDeleteMessageResponse
 * @return {Long}
 */
proto.proto.ChannelDeleteMessageResponse.prototype.getDeleteVersion = function() {
  return this.deleteVersion;
};

/**
 * Set ChannelDeleteMessageResponse deleteVersion.
 * @memberof ProtoChannelDeleteMessageResponse
 * @param {Long} value
 */
proto.proto.ChannelDeleteMessageResponse.prototype.setDeleteVersion = function(value) {
  this.deleteVersion = value;
};

/**
 * @interface ProtoChannelEdit
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelEdit.prototype.serializeBinary = function() {
  return proto.proto.ChannelEdit.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelEdit}
 */
proto.proto.ChannelEdit.deserializeBinary = function(buffer) {
  return proto.proto.ChannelEdit.decode(buffer);
};

/**
 * Get ChannelEdit request.
 * @memberof ProtoChannelEdit
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.ChannelEdit.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set ChannelEdit request.
 * @memberof ProtoChannelEdit
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.ChannelEdit.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get ChannelEdit roomId.
 * @memberof ProtoChannelEdit
 * @return {Long}
 */
proto.proto.ChannelEdit.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChannelEdit roomId.
 * @memberof ProtoChannelEdit
 * @param {Long} value
 */
proto.proto.ChannelEdit.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get ChannelEdit name.
 * @memberof ProtoChannelEdit
 * @return {string}
 */
proto.proto.ChannelEdit.prototype.getName = function() {
  return this.name;
};

/**
 * Set ChannelEdit name.
 * @memberof ProtoChannelEdit
 * @param {string} value
 */
proto.proto.ChannelEdit.prototype.setName = function(value) {
  this.name = value;
};

/**
 * Get ChannelEdit description.
 * @memberof ProtoChannelEdit
 * @return {string}
 */
proto.proto.ChannelEdit.prototype.getDescription = function() {
  return this.description;
};

/**
 * Set ChannelEdit description.
 * @memberof ProtoChannelEdit
 * @param {string} value
 */
proto.proto.ChannelEdit.prototype.setDescription = function(value) {
  this.description = value;
};

/**
 * @interface ProtoChannelEditResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelEditResponse.prototype.serializeBinary = function() {
  return proto.proto.ChannelEditResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelEditResponse}
 */
proto.proto.ChannelEditResponse.deserializeBinary = function(buffer) {
  return proto.proto.ChannelEditResponse.decode(buffer);
};

/**
 * Get ChannelEditResponse response.
 * @memberof ProtoChannelEditResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.ChannelEditResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set ChannelEditResponse response.
 * @memberof ProtoChannelEditResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.ChannelEditResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get ChannelEditResponse roomId.
 * @memberof ProtoChannelEditResponse
 * @return {Long}
 */
proto.proto.ChannelEditResponse.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChannelEditResponse roomId.
 * @memberof ProtoChannelEditResponse
 * @param {Long} value
 */
proto.proto.ChannelEditResponse.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get ChannelEditResponse name.
 * @memberof ProtoChannelEditResponse
 * @return {string}
 */
proto.proto.ChannelEditResponse.prototype.getName = function() {
  return this.name;
};

/**
 * Set ChannelEditResponse name.
 * @memberof ProtoChannelEditResponse
 * @param {string} value
 */
proto.proto.ChannelEditResponse.prototype.setName = function(value) {
  this.name = value;
};

/**
 * Get ChannelEditResponse description.
 * @memberof ProtoChannelEditResponse
 * @return {string}
 */
proto.proto.ChannelEditResponse.prototype.getDescription = function() {
  return this.description;
};

/**
 * Set ChannelEditResponse description.
 * @memberof ProtoChannelEditResponse
 * @param {string} value
 */
proto.proto.ChannelEditResponse.prototype.setDescription = function(value) {
  this.description = value;
};

/**
 * @interface ProtoChannelEditMessage
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelEditMessage.prototype.serializeBinary = function() {
  return proto.proto.ChannelEditMessage.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelEditMessage}
 */
proto.proto.ChannelEditMessage.deserializeBinary = function(buffer) {
  return proto.proto.ChannelEditMessage.decode(buffer);
};

/**
 * Get ChannelEditMessage request.
 * @memberof ProtoChannelEditMessage
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.ChannelEditMessage.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set ChannelEditMessage request.
 * @memberof ProtoChannelEditMessage
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.ChannelEditMessage.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get ChannelEditMessage roomId.
 * @memberof ProtoChannelEditMessage
 * @return {Long}
 */
proto.proto.ChannelEditMessage.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChannelEditMessage roomId.
 * @memberof ProtoChannelEditMessage
 * @param {Long} value
 */
proto.proto.ChannelEditMessage.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get ChannelEditMessage messageId.
 * @memberof ProtoChannelEditMessage
 * @return {Long}
 */
proto.proto.ChannelEditMessage.prototype.getMessageId = function() {
  return this.messageId;
};

/**
 * Set ChannelEditMessage messageId.
 * @memberof ProtoChannelEditMessage
 * @param {Long} value
 */
proto.proto.ChannelEditMessage.prototype.setMessageId = function(value) {
  this.messageId = value;
};

/**
 * Get ChannelEditMessage message.
 * @memberof ProtoChannelEditMessage
 * @return {string}
 */
proto.proto.ChannelEditMessage.prototype.getMessage = function() {
  return this.message;
};

/**
 * Set ChannelEditMessage message.
 * @memberof ProtoChannelEditMessage
 * @param {string} value
 */
proto.proto.ChannelEditMessage.prototype.setMessage = function(value) {
  this.message = value;
};

/**
 * @interface ProtoChannelEditMessageResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelEditMessageResponse.prototype.serializeBinary = function() {
  return proto.proto.ChannelEditMessageResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelEditMessageResponse}
 */
proto.proto.ChannelEditMessageResponse.deserializeBinary = function(buffer) {
  return proto.proto.ChannelEditMessageResponse.decode(buffer);
};

/**
 * Get ChannelEditMessageResponse response.
 * @memberof ProtoChannelEditMessageResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.ChannelEditMessageResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set ChannelEditMessageResponse response.
 * @memberof ProtoChannelEditMessageResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.ChannelEditMessageResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get ChannelEditMessageResponse roomId.
 * @memberof ProtoChannelEditMessageResponse
 * @return {Long}
 */
proto.proto.ChannelEditMessageResponse.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChannelEditMessageResponse roomId.
 * @memberof ProtoChannelEditMessageResponse
 * @param {Long} value
 */
proto.proto.ChannelEditMessageResponse.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get ChannelEditMessageResponse messageId.
 * @memberof ProtoChannelEditMessageResponse
 * @return {Long}
 */
proto.proto.ChannelEditMessageResponse.prototype.getMessageId = function() {
  return this.messageId;
};

/**
 * Set ChannelEditMessageResponse messageId.
 * @memberof ProtoChannelEditMessageResponse
 * @param {Long} value
 */
proto.proto.ChannelEditMessageResponse.prototype.setMessageId = function(value) {
  this.messageId = value;
};

/**
 * Get ChannelEditMessageResponse messageVersion.
 * @memberof ProtoChannelEditMessageResponse
 * @return {Long}
 */
proto.proto.ChannelEditMessageResponse.prototype.getMessageVersion = function() {
  return this.messageVersion;
};

/**
 * Set ChannelEditMessageResponse messageVersion.
 * @memberof ProtoChannelEditMessageResponse
 * @param {Long} value
 */
proto.proto.ChannelEditMessageResponse.prototype.setMessageVersion = function(value) {
  this.messageVersion = value;
};

/**
 * Get ChannelEditMessageResponse message.
 * @memberof ProtoChannelEditMessageResponse
 * @return {string}
 */
proto.proto.ChannelEditMessageResponse.prototype.getMessage = function() {
  return this.message;
};

/**
 * Set ChannelEditMessageResponse message.
 * @memberof ProtoChannelEditMessageResponse
 * @param {string} value
 */
proto.proto.ChannelEditMessageResponse.prototype.setMessage = function(value) {
  this.message = value;
};

/**
 * Get ChannelEditMessageResponse messageType.
 * @memberof ProtoChannelEditMessageResponse
 * @return {ProtoRoomMessageType}
 */
proto.proto.ChannelEditMessageResponse.prototype.getMessageType = function() {
  return this.messageType;
};

/**
 * Set ChannelEditMessageResponse messageType.
 * @memberof ProtoChannelEditMessageResponse
 * @param {ProtoRoomMessageType} value
 */
proto.proto.ChannelEditMessageResponse.prototype.setMessageType = function(value) {
  this.messageType = value;
};

/**
 * @interface ProtoChannelGetDraft
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelGetDraft.prototype.serializeBinary = function() {
  return proto.proto.ChannelGetDraft.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelGetDraft}
 */
proto.proto.ChannelGetDraft.deserializeBinary = function(buffer) {
  return proto.proto.ChannelGetDraft.decode(buffer);
};

/**
 * Get ChannelGetDraft request.
 * @memberof ProtoChannelGetDraft
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.ChannelGetDraft.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set ChannelGetDraft request.
 * @memberof ProtoChannelGetDraft
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.ChannelGetDraft.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get ChannelGetDraft roomId.
 * @memberof ProtoChannelGetDraft
 * @return {Long}
 */
proto.proto.ChannelGetDraft.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChannelGetDraft roomId.
 * @memberof ProtoChannelGetDraft
 * @param {Long} value
 */
proto.proto.ChannelGetDraft.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * @interface ProtoChannelGetDraftResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelGetDraftResponse.prototype.serializeBinary = function() {
  return proto.proto.ChannelGetDraftResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelGetDraftResponse}
 */
proto.proto.ChannelGetDraftResponse.deserializeBinary = function(buffer) {
  return proto.proto.ChannelGetDraftResponse.decode(buffer);
};

/**
 * Get ChannelGetDraftResponse response.
 * @memberof ProtoChannelGetDraftResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.ChannelGetDraftResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set ChannelGetDraftResponse response.
 * @memberof ProtoChannelGetDraftResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.ChannelGetDraftResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get ChannelGetDraftResponse draft.
 * @memberof ProtoChannelGetDraftResponse
 * @return {(ProtoRoomDraft|null|undefined)}
 */
proto.proto.ChannelGetDraftResponse.prototype.getDraft = function() {
  return this.draft;
};

/**
 * Set ChannelGetDraftResponse draft.
 * @memberof ProtoChannelGetDraftResponse
 * @param {(ProtoRoomDraft|null|undefined)} value
 */
proto.proto.ChannelGetDraftResponse.prototype.setDraft = function(value) {
  this.draft = value;
};

/**
 * @interface ProtoChannelGetMemberList
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelGetMemberList.prototype.serializeBinary = function() {
  return proto.proto.ChannelGetMemberList.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelGetMemberList}
 */
proto.proto.ChannelGetMemberList.deserializeBinary = function(buffer) {
  return proto.proto.ChannelGetMemberList.decode(buffer);
};

/**
 * Get ChannelGetMemberList request.
 * @memberof ProtoChannelGetMemberList
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.ChannelGetMemberList.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set ChannelGetMemberList request.
 * @memberof ProtoChannelGetMemberList
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.ChannelGetMemberList.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get ChannelGetMemberList roomId.
 * @memberof ProtoChannelGetMemberList
 * @return {Long}
 */
proto.proto.ChannelGetMemberList.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChannelGetMemberList roomId.
 * @memberof ProtoChannelGetMemberList
 * @param {Long} value
 */
proto.proto.ChannelGetMemberList.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get ChannelGetMemberList filterRole.
 * @memberof ProtoChannelGetMemberList
 * @return {ProtoChannelGetMemberList_FilterRole}
 */
proto.proto.ChannelGetMemberList.prototype.getFilterRole = function() {
  return this.filterRole;
};

/**
 * Set ChannelGetMemberList filterRole.
 * @memberof ProtoChannelGetMemberList
 * @param {ProtoChannelGetMemberList_FilterRole} value
 */
proto.proto.ChannelGetMemberList.prototype.setFilterRole = function(value) {
  this.filterRole = value;
};

/**
 * Get ChannelGetMemberList pagination.
 * @memberof ProtoChannelGetMemberList
 * @return {(ProtoPagination|null|undefined)}
 */
proto.proto.ChannelGetMemberList.prototype.getPagination = function() {
  return this.pagination;
};

/**
 * Set ChannelGetMemberList pagination.
 * @memberof ProtoChannelGetMemberList
 * @param {(ProtoPagination|null|undefined)} value
 */
proto.proto.ChannelGetMemberList.prototype.setPagination = function(value) {
  this.pagination = value;
};

/**
 * @typedef {number} ProtoChannelGetMemberList_FilterRole
 */

/**
 * FilterRole enum.
 * @enum {ProtoChannelGetMemberList_FilterRole}
 * @memberof ProtoChannelGetMemberList
 */
proto.proto.ChannelGetMemberList.FilterRole = proto.proto.ChannelGetMemberList.prototype.FilterRole = {
  ALL : 0,
  MEMBER : 1,
  MODERATOR : 2,
  ADMIN : 3,
};

/**
 * @interface ProtoChannelGetMemberListResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelGetMemberListResponse.prototype.serializeBinary = function() {
  return proto.proto.ChannelGetMemberListResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelGetMemberListResponse}
 */
proto.proto.ChannelGetMemberListResponse.deserializeBinary = function(buffer) {
  return proto.proto.ChannelGetMemberListResponse.decode(buffer);
};

/**
 * Get ChannelGetMemberListResponse response.
 * @memberof ProtoChannelGetMemberListResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.ChannelGetMemberListResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set ChannelGetMemberListResponse response.
 * @memberof ProtoChannelGetMemberListResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.ChannelGetMemberListResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get ChannelGetMemberListResponse member.
 * @memberof ProtoChannelGetMemberListResponse
 * @return {Array.<ProtoChannelGetMemberListResponse_Member>}
 */
proto.proto.ChannelGetMemberListResponse.prototype.getMemberList = function() {
  return this.member;
};

/**
 * Set ChannelGetMemberListResponse member.
 * @memberof ProtoChannelGetMemberListResponse
 * @param {Array.<ProtoChannelGetMemberListResponse_Member>} value
 */
proto.proto.ChannelGetMemberListResponse.prototype.setMemberList = function(value) {
  this.member = value;
};

/**
 * @interface ProtoChannelGetMemberListResponse_Member
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelGetMemberListResponse.Member.prototype.serializeBinary = function() {
  return proto.proto.ChannelGetMemberListResponse.Member.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelGetMemberListResponse_Member}
 */
proto.proto.ChannelGetMemberListResponse.Member.deserializeBinary = function(buffer) {
  return proto.proto.ChannelGetMemberListResponse.Member.decode(buffer);
};

/**
 * Get Member userId.
 * @memberof ProtoChannelGetMemberListResponse_Member
 * @return {Long}
 */
proto.proto.ChannelGetMemberListResponse.Member.prototype.getUserId = function() {
  return this.userId;
};

/**
 * Set Member userId.
 * @memberof ProtoChannelGetMemberListResponse_Member
 * @param {Long} value
 */
proto.proto.ChannelGetMemberListResponse.Member.prototype.setUserId = function(value) {
  this.userId = value;
};

/**
 * Get Member role.
 * @memberof ProtoChannelGetMemberListResponse_Member
 * @return {ProtoChannelRoom_Role}
 */
proto.proto.ChannelGetMemberListResponse.Member.prototype.getRole = function() {
  return this.role;
};

/**
 * Set Member role.
 * @memberof ProtoChannelGetMemberListResponse_Member
 * @param {ProtoChannelRoom_Role} value
 */
proto.proto.ChannelGetMemberListResponse.Member.prototype.setRole = function(value) {
  this.role = value;
};

/**
 * @interface ProtoChannelGetMessagesStats
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelGetMessagesStats.prototype.serializeBinary = function() {
  return proto.proto.ChannelGetMessagesStats.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelGetMessagesStats}
 */
proto.proto.ChannelGetMessagesStats.deserializeBinary = function(buffer) {
  return proto.proto.ChannelGetMessagesStats.decode(buffer);
};

/**
 * Get ChannelGetMessagesStats request.
 * @memberof ProtoChannelGetMessagesStats
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.ChannelGetMessagesStats.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set ChannelGetMessagesStats request.
 * @memberof ProtoChannelGetMessagesStats
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.ChannelGetMessagesStats.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get ChannelGetMessagesStats roomId.
 * @memberof ProtoChannelGetMessagesStats
 * @return {Long}
 */
proto.proto.ChannelGetMessagesStats.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChannelGetMessagesStats roomId.
 * @memberof ProtoChannelGetMessagesStats
 * @param {Long} value
 */
proto.proto.ChannelGetMessagesStats.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get ChannelGetMessagesStats messageId.
 * @memberof ProtoChannelGetMessagesStats
 * @return {Array.<Long>}
 */
proto.proto.ChannelGetMessagesStats.prototype.getMessageIdList = function() {
  return this.messageId;
};

/**
 * Set ChannelGetMessagesStats messageId.
 * @memberof ProtoChannelGetMessagesStats
 * @param {Array.<Long>} value
 */
proto.proto.ChannelGetMessagesStats.prototype.setMessageIdList = function(value) {
  this.messageId = value;
};

/**
 * @interface ProtoChannelGetMessagesStatsResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelGetMessagesStatsResponse.prototype.serializeBinary = function() {
  return proto.proto.ChannelGetMessagesStatsResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelGetMessagesStatsResponse}
 */
proto.proto.ChannelGetMessagesStatsResponse.deserializeBinary = function(buffer) {
  return proto.proto.ChannelGetMessagesStatsResponse.decode(buffer);
};

/**
 * Get ChannelGetMessagesStatsResponse response.
 * @memberof ProtoChannelGetMessagesStatsResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.ChannelGetMessagesStatsResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set ChannelGetMessagesStatsResponse response.
 * @memberof ProtoChannelGetMessagesStatsResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.ChannelGetMessagesStatsResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get ChannelGetMessagesStatsResponse stats.
 * @memberof ProtoChannelGetMessagesStatsResponse
 * @return {Array.<ProtoChannelGetMessagesStatsResponse_Stats>}
 */
proto.proto.ChannelGetMessagesStatsResponse.prototype.getStatsList = function() {
  return this.stats;
};

/**
 * Set ChannelGetMessagesStatsResponse stats.
 * @memberof ProtoChannelGetMessagesStatsResponse
 * @param {Array.<ProtoChannelGetMessagesStatsResponse_Stats>} value
 */
proto.proto.ChannelGetMessagesStatsResponse.prototype.setStatsList = function(value) {
  this.stats = value;
};

/**
 * @interface ProtoChannelGetMessagesStatsResponse_Stats
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelGetMessagesStatsResponse.Stats.prototype.serializeBinary = function() {
  return proto.proto.ChannelGetMessagesStatsResponse.Stats.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelGetMessagesStatsResponse_Stats}
 */
proto.proto.ChannelGetMessagesStatsResponse.Stats.deserializeBinary = function(buffer) {
  return proto.proto.ChannelGetMessagesStatsResponse.Stats.decode(buffer);
};

/**
 * Get Stats messageId.
 * @memberof ProtoChannelGetMessagesStatsResponse_Stats
 * @return {Long}
 */
proto.proto.ChannelGetMessagesStatsResponse.Stats.prototype.getMessageId = function() {
  return this.messageId;
};

/**
 * Set Stats messageId.
 * @memberof ProtoChannelGetMessagesStatsResponse_Stats
 * @param {Long} value
 */
proto.proto.ChannelGetMessagesStatsResponse.Stats.prototype.setMessageId = function(value) {
  this.messageId = value;
};

/**
 * Get Stats viewsLabel.
 * @memberof ProtoChannelGetMessagesStatsResponse_Stats
 * @return {string}
 */
proto.proto.ChannelGetMessagesStatsResponse.Stats.prototype.getViewsLabel = function() {
  return this.viewsLabel;
};

/**
 * Set Stats viewsLabel.
 * @memberof ProtoChannelGetMessagesStatsResponse_Stats
 * @param {string} value
 */
proto.proto.ChannelGetMessagesStatsResponse.Stats.prototype.setViewsLabel = function(value) {
  this.viewsLabel = value;
};

/**
 * Get Stats thumbsUpLabel.
 * @memberof ProtoChannelGetMessagesStatsResponse_Stats
 * @return {string}
 */
proto.proto.ChannelGetMessagesStatsResponse.Stats.prototype.getThumbsUpLabel = function() {
  return this.thumbsUpLabel;
};

/**
 * Set Stats thumbsUpLabel.
 * @memberof ProtoChannelGetMessagesStatsResponse_Stats
 * @param {string} value
 */
proto.proto.ChannelGetMessagesStatsResponse.Stats.prototype.setThumbsUpLabel = function(value) {
  this.thumbsUpLabel = value;
};

/**
 * Get Stats thumbsDownLabel.
 * @memberof ProtoChannelGetMessagesStatsResponse_Stats
 * @return {string}
 */
proto.proto.ChannelGetMessagesStatsResponse.Stats.prototype.getThumbsDownLabel = function() {
  return this.thumbsDownLabel;
};

/**
 * Set Stats thumbsDownLabel.
 * @memberof ProtoChannelGetMessagesStatsResponse_Stats
 * @param {string} value
 */
proto.proto.ChannelGetMessagesStatsResponse.Stats.prototype.setThumbsDownLabel = function(value) {
  this.thumbsDownLabel = value;
};

/**
 * @interface ProtoChannelKickAdmin
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelKickAdmin.prototype.serializeBinary = function() {
  return proto.proto.ChannelKickAdmin.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelKickAdmin}
 */
proto.proto.ChannelKickAdmin.deserializeBinary = function(buffer) {
  return proto.proto.ChannelKickAdmin.decode(buffer);
};

/**
 * Get ChannelKickAdmin request.
 * @memberof ProtoChannelKickAdmin
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.ChannelKickAdmin.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set ChannelKickAdmin request.
 * @memberof ProtoChannelKickAdmin
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.ChannelKickAdmin.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get ChannelKickAdmin roomId.
 * @memberof ProtoChannelKickAdmin
 * @return {Long}
 */
proto.proto.ChannelKickAdmin.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChannelKickAdmin roomId.
 * @memberof ProtoChannelKickAdmin
 * @param {Long} value
 */
proto.proto.ChannelKickAdmin.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get ChannelKickAdmin memberId.
 * @memberof ProtoChannelKickAdmin
 * @return {Long}
 */
proto.proto.ChannelKickAdmin.prototype.getMemberId = function() {
  return this.memberId;
};

/**
 * Set ChannelKickAdmin memberId.
 * @memberof ProtoChannelKickAdmin
 * @param {Long} value
 */
proto.proto.ChannelKickAdmin.prototype.setMemberId = function(value) {
  this.memberId = value;
};

/**
 * @interface ProtoChannelKickAdminResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelKickAdminResponse.prototype.serializeBinary = function() {
  return proto.proto.ChannelKickAdminResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelKickAdminResponse}
 */
proto.proto.ChannelKickAdminResponse.deserializeBinary = function(buffer) {
  return proto.proto.ChannelKickAdminResponse.decode(buffer);
};

/**
 * Get ChannelKickAdminResponse response.
 * @memberof ProtoChannelKickAdminResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.ChannelKickAdminResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set ChannelKickAdminResponse response.
 * @memberof ProtoChannelKickAdminResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.ChannelKickAdminResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get ChannelKickAdminResponse roomId.
 * @memberof ProtoChannelKickAdminResponse
 * @return {Long}
 */
proto.proto.ChannelKickAdminResponse.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChannelKickAdminResponse roomId.
 * @memberof ProtoChannelKickAdminResponse
 * @param {Long} value
 */
proto.proto.ChannelKickAdminResponse.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get ChannelKickAdminResponse memberId.
 * @memberof ProtoChannelKickAdminResponse
 * @return {Long}
 */
proto.proto.ChannelKickAdminResponse.prototype.getMemberId = function() {
  return this.memberId;
};

/**
 * Set ChannelKickAdminResponse memberId.
 * @memberof ProtoChannelKickAdminResponse
 * @param {Long} value
 */
proto.proto.ChannelKickAdminResponse.prototype.setMemberId = function(value) {
  this.memberId = value;
};

/**
 * @interface ProtoChannelKickMember
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelKickMember.prototype.serializeBinary = function() {
  return proto.proto.ChannelKickMember.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelKickMember}
 */
proto.proto.ChannelKickMember.deserializeBinary = function(buffer) {
  return proto.proto.ChannelKickMember.decode(buffer);
};

/**
 * Get ChannelKickMember request.
 * @memberof ProtoChannelKickMember
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.ChannelKickMember.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set ChannelKickMember request.
 * @memberof ProtoChannelKickMember
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.ChannelKickMember.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get ChannelKickMember roomId.
 * @memberof ProtoChannelKickMember
 * @return {Long}
 */
proto.proto.ChannelKickMember.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChannelKickMember roomId.
 * @memberof ProtoChannelKickMember
 * @param {Long} value
 */
proto.proto.ChannelKickMember.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get ChannelKickMember memberId.
 * @memberof ProtoChannelKickMember
 * @return {Long}
 */
proto.proto.ChannelKickMember.prototype.getMemberId = function() {
  return this.memberId;
};

/**
 * Set ChannelKickMember memberId.
 * @memberof ProtoChannelKickMember
 * @param {Long} value
 */
proto.proto.ChannelKickMember.prototype.setMemberId = function(value) {
  this.memberId = value;
};

/**
 * @interface ProtoChannelKickMemberResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelKickMemberResponse.prototype.serializeBinary = function() {
  return proto.proto.ChannelKickMemberResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelKickMemberResponse}
 */
proto.proto.ChannelKickMemberResponse.deserializeBinary = function(buffer) {
  return proto.proto.ChannelKickMemberResponse.decode(buffer);
};

/**
 * Get ChannelKickMemberResponse response.
 * @memberof ProtoChannelKickMemberResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.ChannelKickMemberResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set ChannelKickMemberResponse response.
 * @memberof ProtoChannelKickMemberResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.ChannelKickMemberResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get ChannelKickMemberResponse roomId.
 * @memberof ProtoChannelKickMemberResponse
 * @return {Long}
 */
proto.proto.ChannelKickMemberResponse.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChannelKickMemberResponse roomId.
 * @memberof ProtoChannelKickMemberResponse
 * @param {Long} value
 */
proto.proto.ChannelKickMemberResponse.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get ChannelKickMemberResponse memberId.
 * @memberof ProtoChannelKickMemberResponse
 * @return {Long}
 */
proto.proto.ChannelKickMemberResponse.prototype.getMemberId = function() {
  return this.memberId;
};

/**
 * Set ChannelKickMemberResponse memberId.
 * @memberof ProtoChannelKickMemberResponse
 * @param {Long} value
 */
proto.proto.ChannelKickMemberResponse.prototype.setMemberId = function(value) {
  this.memberId = value;
};

/**
 * @interface ProtoChannelKickModerator
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelKickModerator.prototype.serializeBinary = function() {
  return proto.proto.ChannelKickModerator.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelKickModerator}
 */
proto.proto.ChannelKickModerator.deserializeBinary = function(buffer) {
  return proto.proto.ChannelKickModerator.decode(buffer);
};

/**
 * Get ChannelKickModerator request.
 * @memberof ProtoChannelKickModerator
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.ChannelKickModerator.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set ChannelKickModerator request.
 * @memberof ProtoChannelKickModerator
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.ChannelKickModerator.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get ChannelKickModerator roomId.
 * @memberof ProtoChannelKickModerator
 * @return {Long}
 */
proto.proto.ChannelKickModerator.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChannelKickModerator roomId.
 * @memberof ProtoChannelKickModerator
 * @param {Long} value
 */
proto.proto.ChannelKickModerator.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get ChannelKickModerator memberId.
 * @memberof ProtoChannelKickModerator
 * @return {Long}
 */
proto.proto.ChannelKickModerator.prototype.getMemberId = function() {
  return this.memberId;
};

/**
 * Set ChannelKickModerator memberId.
 * @memberof ProtoChannelKickModerator
 * @param {Long} value
 */
proto.proto.ChannelKickModerator.prototype.setMemberId = function(value) {
  this.memberId = value;
};

/**
 * @interface ProtoChannelKickModeratorResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelKickModeratorResponse.prototype.serializeBinary = function() {
  return proto.proto.ChannelKickModeratorResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelKickModeratorResponse}
 */
proto.proto.ChannelKickModeratorResponse.deserializeBinary = function(buffer) {
  return proto.proto.ChannelKickModeratorResponse.decode(buffer);
};

/**
 * Get ChannelKickModeratorResponse response.
 * @memberof ProtoChannelKickModeratorResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.ChannelKickModeratorResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set ChannelKickModeratorResponse response.
 * @memberof ProtoChannelKickModeratorResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.ChannelKickModeratorResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get ChannelKickModeratorResponse roomId.
 * @memberof ProtoChannelKickModeratorResponse
 * @return {Long}
 */
proto.proto.ChannelKickModeratorResponse.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChannelKickModeratorResponse roomId.
 * @memberof ProtoChannelKickModeratorResponse
 * @param {Long} value
 */
proto.proto.ChannelKickModeratorResponse.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get ChannelKickModeratorResponse memberId.
 * @memberof ProtoChannelKickModeratorResponse
 * @return {Long}
 */
proto.proto.ChannelKickModeratorResponse.prototype.getMemberId = function() {
  return this.memberId;
};

/**
 * Set ChannelKickModeratorResponse memberId.
 * @memberof ProtoChannelKickModeratorResponse
 * @param {Long} value
 */
proto.proto.ChannelKickModeratorResponse.prototype.setMemberId = function(value) {
  this.memberId = value;
};

/**
 * @interface ProtoChannelLeft
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelLeft.prototype.serializeBinary = function() {
  return proto.proto.ChannelLeft.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelLeft}
 */
proto.proto.ChannelLeft.deserializeBinary = function(buffer) {
  return proto.proto.ChannelLeft.decode(buffer);
};

/**
 * Get ChannelLeft request.
 * @memberof ProtoChannelLeft
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.ChannelLeft.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set ChannelLeft request.
 * @memberof ProtoChannelLeft
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.ChannelLeft.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get ChannelLeft roomId.
 * @memberof ProtoChannelLeft
 * @return {Long}
 */
proto.proto.ChannelLeft.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChannelLeft roomId.
 * @memberof ProtoChannelLeft
 * @param {Long} value
 */
proto.proto.ChannelLeft.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * @interface ProtoChannelLeftResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelLeftResponse.prototype.serializeBinary = function() {
  return proto.proto.ChannelLeftResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelLeftResponse}
 */
proto.proto.ChannelLeftResponse.deserializeBinary = function(buffer) {
  return proto.proto.ChannelLeftResponse.decode(buffer);
};

/**
 * Get ChannelLeftResponse response.
 * @memberof ProtoChannelLeftResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.ChannelLeftResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set ChannelLeftResponse response.
 * @memberof ProtoChannelLeftResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.ChannelLeftResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get ChannelLeftResponse roomId.
 * @memberof ProtoChannelLeftResponse
 * @return {Long}
 */
proto.proto.ChannelLeftResponse.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChannelLeftResponse roomId.
 * @memberof ProtoChannelLeftResponse
 * @param {Long} value
 */
proto.proto.ChannelLeftResponse.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get ChannelLeftResponse memberId.
 * @memberof ProtoChannelLeftResponse
 * @return {Long}
 */
proto.proto.ChannelLeftResponse.prototype.getMemberId = function() {
  return this.memberId;
};

/**
 * Set ChannelLeftResponse memberId.
 * @memberof ProtoChannelLeftResponse
 * @param {Long} value
 */
proto.proto.ChannelLeftResponse.prototype.setMemberId = function(value) {
  this.memberId = value;
};

/**
 * @interface ProtoChannelPinMessage
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelPinMessage.prototype.serializeBinary = function() {
  return proto.proto.ChannelPinMessage.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelPinMessage}
 */
proto.proto.ChannelPinMessage.deserializeBinary = function(buffer) {
  return proto.proto.ChannelPinMessage.decode(buffer);
};

/**
 * Get ChannelPinMessage request.
 * @memberof ProtoChannelPinMessage
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.ChannelPinMessage.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set ChannelPinMessage request.
 * @memberof ProtoChannelPinMessage
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.ChannelPinMessage.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get ChannelPinMessage roomId.
 * @memberof ProtoChannelPinMessage
 * @return {Long}
 */
proto.proto.ChannelPinMessage.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChannelPinMessage roomId.
 * @memberof ProtoChannelPinMessage
 * @param {Long} value
 */
proto.proto.ChannelPinMessage.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get ChannelPinMessage messageId.
 * @memberof ProtoChannelPinMessage
 * @return {Long}
 */
proto.proto.ChannelPinMessage.prototype.getMessageId = function() {
  return this.messageId;
};

/**
 * Set ChannelPinMessage messageId.
 * @memberof ProtoChannelPinMessage
 * @param {Long} value
 */
proto.proto.ChannelPinMessage.prototype.setMessageId = function(value) {
  this.messageId = value;
};

/**
 * @interface ProtoChannelPinMessageResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelPinMessageResponse.prototype.serializeBinary = function() {
  return proto.proto.ChannelPinMessageResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelPinMessageResponse}
 */
proto.proto.ChannelPinMessageResponse.deserializeBinary = function(buffer) {
  return proto.proto.ChannelPinMessageResponse.decode(buffer);
};

/**
 * Get ChannelPinMessageResponse response.
 * @memberof ProtoChannelPinMessageResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.ChannelPinMessageResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set ChannelPinMessageResponse response.
 * @memberof ProtoChannelPinMessageResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.ChannelPinMessageResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get ChannelPinMessageResponse roomId.
 * @memberof ProtoChannelPinMessageResponse
 * @return {Long}
 */
proto.proto.ChannelPinMessageResponse.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChannelPinMessageResponse roomId.
 * @memberof ProtoChannelPinMessageResponse
 * @param {Long} value
 */
proto.proto.ChannelPinMessageResponse.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get ChannelPinMessageResponse pinnedMessage.
 * @memberof ProtoChannelPinMessageResponse
 * @return {(ProtoRoomMessage|null|undefined)}
 */
proto.proto.ChannelPinMessageResponse.prototype.getPinnedMessage = function() {
  return this.pinnedMessage;
};

/**
 * Set ChannelPinMessageResponse pinnedMessage.
 * @memberof ProtoChannelPinMessageResponse
 * @param {(ProtoRoomMessage|null|undefined)} value
 */
proto.proto.ChannelPinMessageResponse.prototype.setPinnedMessage = function(value) {
  this.pinnedMessage = value;
};

/**
 * @interface ProtoChannelRemoveUsername
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelRemoveUsername.prototype.serializeBinary = function() {
  return proto.proto.ChannelRemoveUsername.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelRemoveUsername}
 */
proto.proto.ChannelRemoveUsername.deserializeBinary = function(buffer) {
  return proto.proto.ChannelRemoveUsername.decode(buffer);
};

/**
 * Get ChannelRemoveUsername request.
 * @memberof ProtoChannelRemoveUsername
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.ChannelRemoveUsername.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set ChannelRemoveUsername request.
 * @memberof ProtoChannelRemoveUsername
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.ChannelRemoveUsername.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get ChannelRemoveUsername roomId.
 * @memberof ProtoChannelRemoveUsername
 * @return {Long}
 */
proto.proto.ChannelRemoveUsername.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChannelRemoveUsername roomId.
 * @memberof ProtoChannelRemoveUsername
 * @param {Long} value
 */
proto.proto.ChannelRemoveUsername.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * @interface ProtoChannelRemoveUsernameResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelRemoveUsernameResponse.prototype.serializeBinary = function() {
  return proto.proto.ChannelRemoveUsernameResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelRemoveUsernameResponse}
 */
proto.proto.ChannelRemoveUsernameResponse.deserializeBinary = function(buffer) {
  return proto.proto.ChannelRemoveUsernameResponse.decode(buffer);
};

/**
 * Get ChannelRemoveUsernameResponse response.
 * @memberof ProtoChannelRemoveUsernameResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.ChannelRemoveUsernameResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set ChannelRemoveUsernameResponse response.
 * @memberof ProtoChannelRemoveUsernameResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.ChannelRemoveUsernameResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get ChannelRemoveUsernameResponse roomId.
 * @memberof ProtoChannelRemoveUsernameResponse
 * @return {Long}
 */
proto.proto.ChannelRemoveUsernameResponse.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChannelRemoveUsernameResponse roomId.
 * @memberof ProtoChannelRemoveUsernameResponse
 * @param {Long} value
 */
proto.proto.ChannelRemoveUsernameResponse.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * @interface ProtoChannelRevokeLink
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelRevokeLink.prototype.serializeBinary = function() {
  return proto.proto.ChannelRevokeLink.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelRevokeLink}
 */
proto.proto.ChannelRevokeLink.deserializeBinary = function(buffer) {
  return proto.proto.ChannelRevokeLink.decode(buffer);
};

/**
 * Get ChannelRevokeLink request.
 * @memberof ProtoChannelRevokeLink
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.ChannelRevokeLink.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set ChannelRevokeLink request.
 * @memberof ProtoChannelRevokeLink
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.ChannelRevokeLink.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get ChannelRevokeLink roomId.
 * @memberof ProtoChannelRevokeLink
 * @return {Long}
 */
proto.proto.ChannelRevokeLink.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChannelRevokeLink roomId.
 * @memberof ProtoChannelRevokeLink
 * @param {Long} value
 */
proto.proto.ChannelRevokeLink.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * @interface ProtoChannelRevokeLinkResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelRevokeLinkResponse.prototype.serializeBinary = function() {
  return proto.proto.ChannelRevokeLinkResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelRevokeLinkResponse}
 */
proto.proto.ChannelRevokeLinkResponse.deserializeBinary = function(buffer) {
  return proto.proto.ChannelRevokeLinkResponse.decode(buffer);
};

/**
 * Get ChannelRevokeLinkResponse response.
 * @memberof ProtoChannelRevokeLinkResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.ChannelRevokeLinkResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set ChannelRevokeLinkResponse response.
 * @memberof ProtoChannelRevokeLinkResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.ChannelRevokeLinkResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get ChannelRevokeLinkResponse roomId.
 * @memberof ProtoChannelRevokeLinkResponse
 * @return {Long}
 */
proto.proto.ChannelRevokeLinkResponse.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChannelRevokeLinkResponse roomId.
 * @memberof ProtoChannelRevokeLinkResponse
 * @param {Long} value
 */
proto.proto.ChannelRevokeLinkResponse.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get ChannelRevokeLinkResponse inviteLink.
 * @memberof ProtoChannelRevokeLinkResponse
 * @return {string}
 */
proto.proto.ChannelRevokeLinkResponse.prototype.getInviteLink = function() {
  return this.inviteLink;
};

/**
 * Set ChannelRevokeLinkResponse inviteLink.
 * @memberof ProtoChannelRevokeLinkResponse
 * @param {string} value
 */
proto.proto.ChannelRevokeLinkResponse.prototype.setInviteLink = function(value) {
  this.inviteLink = value;
};

/**
 * Get ChannelRevokeLinkResponse inviteToken.
 * @memberof ProtoChannelRevokeLinkResponse
 * @return {string}
 */
proto.proto.ChannelRevokeLinkResponse.prototype.getInviteToken = function() {
  return this.inviteToken;
};

/**
 * Set ChannelRevokeLinkResponse inviteToken.
 * @memberof ProtoChannelRevokeLinkResponse
 * @param {string} value
 */
proto.proto.ChannelRevokeLinkResponse.prototype.setInviteToken = function(value) {
  this.inviteToken = value;
};

/**
 * @interface ProtoChannelSendMessage
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelSendMessage.prototype.serializeBinary = function() {
  return proto.proto.ChannelSendMessage.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelSendMessage}
 */
proto.proto.ChannelSendMessage.deserializeBinary = function(buffer) {
  return proto.proto.ChannelSendMessage.decode(buffer);
};

/**
 * Get ChannelSendMessage request.
 * @memberof ProtoChannelSendMessage
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.ChannelSendMessage.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set ChannelSendMessage request.
 * @memberof ProtoChannelSendMessage
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.ChannelSendMessage.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get ChannelSendMessage messageType.
 * @memberof ProtoChannelSendMessage
 * @return {ProtoRoomMessageType}
 */
proto.proto.ChannelSendMessage.prototype.getMessageType = function() {
  return this.messageType;
};

/**
 * Set ChannelSendMessage messageType.
 * @memberof ProtoChannelSendMessage
 * @param {ProtoRoomMessageType} value
 */
proto.proto.ChannelSendMessage.prototype.setMessageType = function(value) {
  this.messageType = value;
};

/**
 * Get ChannelSendMessage roomId.
 * @memberof ProtoChannelSendMessage
 * @return {Long}
 */
proto.proto.ChannelSendMessage.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChannelSendMessage roomId.
 * @memberof ProtoChannelSendMessage
 * @param {Long} value
 */
proto.proto.ChannelSendMessage.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get ChannelSendMessage message.
 * @memberof ProtoChannelSendMessage
 * @return {string}
 */
proto.proto.ChannelSendMessage.prototype.getMessage = function() {
  return this.message;
};

/**
 * Set ChannelSendMessage message.
 * @memberof ProtoChannelSendMessage
 * @param {string} value
 */
proto.proto.ChannelSendMessage.prototype.setMessage = function(value) {
  this.message = value;
};

/**
 * Get ChannelSendMessage attachment.
 * @memberof ProtoChannelSendMessage
 * @return {string}
 */
proto.proto.ChannelSendMessage.prototype.getAttachment = function() {
  return this.attachment;
};

/**
 * Set ChannelSendMessage attachment.
 * @memberof ProtoChannelSendMessage
 * @param {string} value
 */
proto.proto.ChannelSendMessage.prototype.setAttachment = function(value) {
  this.attachment = value;
};

/**
 * Get ChannelSendMessage location.
 * @memberof ProtoChannelSendMessage
 * @return {(ProtoRoomMessageLocation|null|undefined)}
 */
proto.proto.ChannelSendMessage.prototype.getLocation = function() {
  return this.location;
};

/**
 * Set ChannelSendMessage location.
 * @memberof ProtoChannelSendMessage
 * @param {(ProtoRoomMessageLocation|null|undefined)} value
 */
proto.proto.ChannelSendMessage.prototype.setLocation = function(value) {
  this.location = value;
};

/**
 * Get ChannelSendMessage contact.
 * @memberof ProtoChannelSendMessage
 * @return {(ProtoRoomMessageContact|null|undefined)}
 */
proto.proto.ChannelSendMessage.prototype.getContact = function() {
  return this.contact;
};

/**
 * Set ChannelSendMessage contact.
 * @memberof ProtoChannelSendMessage
 * @param {(ProtoRoomMessageContact|null|undefined)} value
 */
proto.proto.ChannelSendMessage.prototype.setContact = function(value) {
  this.contact = value;
};

/**
 * Get ChannelSendMessage replyTo.
 * @memberof ProtoChannelSendMessage
 * @return {Long}
 */
proto.proto.ChannelSendMessage.prototype.getReplyTo = function() {
  return this.replyTo;
};

/**
 * Set ChannelSendMessage replyTo.
 * @memberof ProtoChannelSendMessage
 * @param {Long} value
 */
proto.proto.ChannelSendMessage.prototype.setReplyTo = function(value) {
  this.replyTo = value;
};

/**
 * Get ChannelSendMessage forwardFrom.
 * @memberof ProtoChannelSendMessage
 * @return {(ProtoRoomMessageForwardFrom|null|undefined)}
 */
proto.proto.ChannelSendMessage.prototype.getForwardFrom = function() {
  return this.forwardFrom;
};

/**
 * Set ChannelSendMessage forwardFrom.
 * @memberof ProtoChannelSendMessage
 * @param {(ProtoRoomMessageForwardFrom|null|undefined)} value
 */
proto.proto.ChannelSendMessage.prototype.setForwardFrom = function(value) {
  this.forwardFrom = value;
};

/**
 * Get ChannelSendMessage randomId.
 * @memberof ProtoChannelSendMessage
 * @return {Long}
 */
proto.proto.ChannelSendMessage.prototype.getRandomId = function() {
  return this.randomId;
};

/**
 * Set ChannelSendMessage randomId.
 * @memberof ProtoChannelSendMessage
 * @param {Long} value
 */
proto.proto.ChannelSendMessage.prototype.setRandomId = function(value) {
  this.randomId = value;
};

/**
 * @interface ProtoChannelSendMessageResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelSendMessageResponse.prototype.serializeBinary = function() {
  return proto.proto.ChannelSendMessageResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelSendMessageResponse}
 */
proto.proto.ChannelSendMessageResponse.deserializeBinary = function(buffer) {
  return proto.proto.ChannelSendMessageResponse.decode(buffer);
};

/**
 * Get ChannelSendMessageResponse response.
 * @memberof ProtoChannelSendMessageResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.ChannelSendMessageResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set ChannelSendMessageResponse response.
 * @memberof ProtoChannelSendMessageResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.ChannelSendMessageResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get ChannelSendMessageResponse roomId.
 * @memberof ProtoChannelSendMessageResponse
 * @return {Long}
 */
proto.proto.ChannelSendMessageResponse.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChannelSendMessageResponse roomId.
 * @memberof ProtoChannelSendMessageResponse
 * @param {Long} value
 */
proto.proto.ChannelSendMessageResponse.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get ChannelSendMessageResponse roomMessage.
 * @memberof ProtoChannelSendMessageResponse
 * @return {(ProtoRoomMessage|null|undefined)}
 */
proto.proto.ChannelSendMessageResponse.prototype.getRoomMessage = function() {
  return this.roomMessage;
};

/**
 * Set ChannelSendMessageResponse roomMessage.
 * @memberof ProtoChannelSendMessageResponse
 * @param {(ProtoRoomMessage|null|undefined)} value
 */
proto.proto.ChannelSendMessageResponse.prototype.setRoomMessage = function(value) {
  this.roomMessage = value;
};

/**
 * @interface ProtoChannelSetAction
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelSetAction.prototype.serializeBinary = function() {
  return proto.proto.ChannelSetAction.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelSetAction}
 */
proto.proto.ChannelSetAction.deserializeBinary = function(buffer) {
  return proto.proto.ChannelSetAction.decode(buffer);
};

/**
 * Get ChannelSetAction request.
 * @memberof ProtoChannelSetAction
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.ChannelSetAction.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set ChannelSetAction request.
 * @memberof ProtoChannelSetAction
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.ChannelSetAction.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get ChannelSetAction roomId.
 * @memberof ProtoChannelSetAction
 * @return {Long}
 */
proto.proto.ChannelSetAction.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChannelSetAction roomId.
 * @memberof ProtoChannelSetAction
 * @param {Long} value
 */
proto.proto.ChannelSetAction.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get ChannelSetAction action.
 * @memberof ProtoChannelSetAction
 * @return {ProtoClientAction}
 */
proto.proto.ChannelSetAction.prototype.getAction = function() {
  return this.action;
};

/**
 * Set ChannelSetAction action.
 * @memberof ProtoChannelSetAction
 * @param {ProtoClientAction} value
 */
proto.proto.ChannelSetAction.prototype.setAction = function(value) {
  this.action = value;
};

/**
 * Get ChannelSetAction actionId.
 * @memberof ProtoChannelSetAction
 * @return {number}
 */
proto.proto.ChannelSetAction.prototype.getActionId = function() {
  return this.actionId;
};

/**
 * Set ChannelSetAction actionId.
 * @memberof ProtoChannelSetAction
 * @param {number} value
 */
proto.proto.ChannelSetAction.prototype.setActionId = function(value) {
  this.actionId = value;
};

/**
 * @interface ProtoChannelSetActionResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelSetActionResponse.prototype.serializeBinary = function() {
  return proto.proto.ChannelSetActionResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelSetActionResponse}
 */
proto.proto.ChannelSetActionResponse.deserializeBinary = function(buffer) {
  return proto.proto.ChannelSetActionResponse.decode(buffer);
};

/**
 * Get ChannelSetActionResponse response.
 * @memberof ProtoChannelSetActionResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.ChannelSetActionResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set ChannelSetActionResponse response.
 * @memberof ProtoChannelSetActionResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.ChannelSetActionResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get ChannelSetActionResponse roomId.
 * @memberof ProtoChannelSetActionResponse
 * @return {Long}
 */
proto.proto.ChannelSetActionResponse.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChannelSetActionResponse roomId.
 * @memberof ProtoChannelSetActionResponse
 * @param {Long} value
 */
proto.proto.ChannelSetActionResponse.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get ChannelSetActionResponse action.
 * @memberof ProtoChannelSetActionResponse
 * @return {ProtoClientAction}
 */
proto.proto.ChannelSetActionResponse.prototype.getAction = function() {
  return this.action;
};

/**
 * Set ChannelSetActionResponse action.
 * @memberof ProtoChannelSetActionResponse
 * @param {ProtoClientAction} value
 */
proto.proto.ChannelSetActionResponse.prototype.setAction = function(value) {
  this.action = value;
};

/**
 * Get ChannelSetActionResponse userId.
 * @memberof ProtoChannelSetActionResponse
 * @return {Long}
 */
proto.proto.ChannelSetActionResponse.prototype.getUserId = function() {
  return this.userId;
};

/**
 * Set ChannelSetActionResponse userId.
 * @memberof ProtoChannelSetActionResponse
 * @param {Long} value
 */
proto.proto.ChannelSetActionResponse.prototype.setUserId = function(value) {
  this.userId = value;
};

/**
 * @interface ProtoChannelUpdateDraft
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelUpdateDraft.prototype.serializeBinary = function() {
  return proto.proto.ChannelUpdateDraft.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelUpdateDraft}
 */
proto.proto.ChannelUpdateDraft.deserializeBinary = function(buffer) {
  return proto.proto.ChannelUpdateDraft.decode(buffer);
};

/**
 * Get ChannelUpdateDraft request.
 * @memberof ProtoChannelUpdateDraft
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.ChannelUpdateDraft.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set ChannelUpdateDraft request.
 * @memberof ProtoChannelUpdateDraft
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.ChannelUpdateDraft.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get ChannelUpdateDraft roomId.
 * @memberof ProtoChannelUpdateDraft
 * @return {Long}
 */
proto.proto.ChannelUpdateDraft.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChannelUpdateDraft roomId.
 * @memberof ProtoChannelUpdateDraft
 * @param {Long} value
 */
proto.proto.ChannelUpdateDraft.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get ChannelUpdateDraft draft.
 * @memberof ProtoChannelUpdateDraft
 * @return {(ProtoRoomDraft|null|undefined)}
 */
proto.proto.ChannelUpdateDraft.prototype.getDraft = function() {
  return this.draft;
};

/**
 * Set ChannelUpdateDraft draft.
 * @memberof ProtoChannelUpdateDraft
 * @param {(ProtoRoomDraft|null|undefined)} value
 */
proto.proto.ChannelUpdateDraft.prototype.setDraft = function(value) {
  this.draft = value;
};

/**
 * @interface ProtoChannelUpdateDraftResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelUpdateDraftResponse.prototype.serializeBinary = function() {
  return proto.proto.ChannelUpdateDraftResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelUpdateDraftResponse}
 */
proto.proto.ChannelUpdateDraftResponse.deserializeBinary = function(buffer) {
  return proto.proto.ChannelUpdateDraftResponse.decode(buffer);
};

/**
 * Get ChannelUpdateDraftResponse response.
 * @memberof ProtoChannelUpdateDraftResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.ChannelUpdateDraftResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set ChannelUpdateDraftResponse response.
 * @memberof ProtoChannelUpdateDraftResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.ChannelUpdateDraftResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get ChannelUpdateDraftResponse roomId.
 * @memberof ProtoChannelUpdateDraftResponse
 * @return {Long}
 */
proto.proto.ChannelUpdateDraftResponse.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChannelUpdateDraftResponse roomId.
 * @memberof ProtoChannelUpdateDraftResponse
 * @param {Long} value
 */
proto.proto.ChannelUpdateDraftResponse.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get ChannelUpdateDraftResponse draft.
 * @memberof ProtoChannelUpdateDraftResponse
 * @return {(ProtoRoomDraft|null|undefined)}
 */
proto.proto.ChannelUpdateDraftResponse.prototype.getDraft = function() {
  return this.draft;
};

/**
 * Set ChannelUpdateDraftResponse draft.
 * @memberof ProtoChannelUpdateDraftResponse
 * @param {(ProtoRoomDraft|null|undefined)} value
 */
proto.proto.ChannelUpdateDraftResponse.prototype.setDraft = function(value) {
  this.draft = value;
};

/**
 * @interface ProtoChannelUpdateReactionStatus
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelUpdateReactionStatus.prototype.serializeBinary = function() {
  return proto.proto.ChannelUpdateReactionStatus.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelUpdateReactionStatus}
 */
proto.proto.ChannelUpdateReactionStatus.deserializeBinary = function(buffer) {
  return proto.proto.ChannelUpdateReactionStatus.decode(buffer);
};

/**
 * Get ChannelUpdateReactionStatus request.
 * @memberof ProtoChannelUpdateReactionStatus
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.ChannelUpdateReactionStatus.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set ChannelUpdateReactionStatus request.
 * @memberof ProtoChannelUpdateReactionStatus
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.ChannelUpdateReactionStatus.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get ChannelUpdateReactionStatus roomId.
 * @memberof ProtoChannelUpdateReactionStatus
 * @return {Long}
 */
proto.proto.ChannelUpdateReactionStatus.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChannelUpdateReactionStatus roomId.
 * @memberof ProtoChannelUpdateReactionStatus
 * @param {Long} value
 */
proto.proto.ChannelUpdateReactionStatus.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get ChannelUpdateReactionStatus reactionStatus.
 * @memberof ProtoChannelUpdateReactionStatus
 * @return {boolean}
 */
proto.proto.ChannelUpdateReactionStatus.prototype.getReactionStatus = function() {
  return this.reactionStatus;
};

/**
 * Set ChannelUpdateReactionStatus reactionStatus.
 * @memberof ProtoChannelUpdateReactionStatus
 * @param {boolean} value
 */
proto.proto.ChannelUpdateReactionStatus.prototype.setReactionStatus = function(value) {
  this.reactionStatus = value;
};

/**
 * @interface ProtoChannelUpdateReactionStatusResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelUpdateReactionStatusResponse.prototype.serializeBinary = function() {
  return proto.proto.ChannelUpdateReactionStatusResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelUpdateReactionStatusResponse}
 */
proto.proto.ChannelUpdateReactionStatusResponse.deserializeBinary = function(buffer) {
  return proto.proto.ChannelUpdateReactionStatusResponse.decode(buffer);
};

/**
 * Get ChannelUpdateReactionStatusResponse response.
 * @memberof ProtoChannelUpdateReactionStatusResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.ChannelUpdateReactionStatusResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set ChannelUpdateReactionStatusResponse response.
 * @memberof ProtoChannelUpdateReactionStatusResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.ChannelUpdateReactionStatusResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get ChannelUpdateReactionStatusResponse roomId.
 * @memberof ProtoChannelUpdateReactionStatusResponse
 * @return {Long}
 */
proto.proto.ChannelUpdateReactionStatusResponse.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChannelUpdateReactionStatusResponse roomId.
 * @memberof ProtoChannelUpdateReactionStatusResponse
 * @param {Long} value
 */
proto.proto.ChannelUpdateReactionStatusResponse.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get ChannelUpdateReactionStatusResponse reactionStatus.
 * @memberof ProtoChannelUpdateReactionStatusResponse
 * @return {boolean}
 */
proto.proto.ChannelUpdateReactionStatusResponse.prototype.getReactionStatus = function() {
  return this.reactionStatus;
};

/**
 * Set ChannelUpdateReactionStatusResponse reactionStatus.
 * @memberof ProtoChannelUpdateReactionStatusResponse
 * @param {boolean} value
 */
proto.proto.ChannelUpdateReactionStatusResponse.prototype.setReactionStatus = function(value) {
  this.reactionStatus = value;
};

/**
 * @interface ProtoChannelUpdateSignature
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelUpdateSignature.prototype.serializeBinary = function() {
  return proto.proto.ChannelUpdateSignature.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelUpdateSignature}
 */
proto.proto.ChannelUpdateSignature.deserializeBinary = function(buffer) {
  return proto.proto.ChannelUpdateSignature.decode(buffer);
};

/**
 * Get ChannelUpdateSignature request.
 * @memberof ProtoChannelUpdateSignature
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.ChannelUpdateSignature.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set ChannelUpdateSignature request.
 * @memberof ProtoChannelUpdateSignature
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.ChannelUpdateSignature.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get ChannelUpdateSignature roomId.
 * @memberof ProtoChannelUpdateSignature
 * @return {Long}
 */
proto.proto.ChannelUpdateSignature.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChannelUpdateSignature roomId.
 * @memberof ProtoChannelUpdateSignature
 * @param {Long} value
 */
proto.proto.ChannelUpdateSignature.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get ChannelUpdateSignature signature.
 * @memberof ProtoChannelUpdateSignature
 * @return {boolean}
 */
proto.proto.ChannelUpdateSignature.prototype.getSignature = function() {
  return this.signature;
};

/**
 * Set ChannelUpdateSignature signature.
 * @memberof ProtoChannelUpdateSignature
 * @param {boolean} value
 */
proto.proto.ChannelUpdateSignature.prototype.setSignature = function(value) {
  this.signature = value;
};

/**
 * @interface ProtoChannelUpdateSignatureResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelUpdateSignatureResponse.prototype.serializeBinary = function() {
  return proto.proto.ChannelUpdateSignatureResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelUpdateSignatureResponse}
 */
proto.proto.ChannelUpdateSignatureResponse.deserializeBinary = function(buffer) {
  return proto.proto.ChannelUpdateSignatureResponse.decode(buffer);
};

/**
 * Get ChannelUpdateSignatureResponse response.
 * @memberof ProtoChannelUpdateSignatureResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.ChannelUpdateSignatureResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set ChannelUpdateSignatureResponse response.
 * @memberof ProtoChannelUpdateSignatureResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.ChannelUpdateSignatureResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get ChannelUpdateSignatureResponse roomId.
 * @memberof ProtoChannelUpdateSignatureResponse
 * @return {Long}
 */
proto.proto.ChannelUpdateSignatureResponse.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChannelUpdateSignatureResponse roomId.
 * @memberof ProtoChannelUpdateSignatureResponse
 * @param {Long} value
 */
proto.proto.ChannelUpdateSignatureResponse.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get ChannelUpdateSignatureResponse signature.
 * @memberof ProtoChannelUpdateSignatureResponse
 * @return {boolean}
 */
proto.proto.ChannelUpdateSignatureResponse.prototype.getSignature = function() {
  return this.signature;
};

/**
 * Set ChannelUpdateSignatureResponse signature.
 * @memberof ProtoChannelUpdateSignatureResponse
 * @param {boolean} value
 */
proto.proto.ChannelUpdateSignatureResponse.prototype.setSignature = function(value) {
  this.signature = value;
};

/**
 * @interface ProtoChannelUpdateUsername
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelUpdateUsername.prototype.serializeBinary = function() {
  return proto.proto.ChannelUpdateUsername.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelUpdateUsername}
 */
proto.proto.ChannelUpdateUsername.deserializeBinary = function(buffer) {
  return proto.proto.ChannelUpdateUsername.decode(buffer);
};

/**
 * Get ChannelUpdateUsername request.
 * @memberof ProtoChannelUpdateUsername
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.ChannelUpdateUsername.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set ChannelUpdateUsername request.
 * @memberof ProtoChannelUpdateUsername
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.ChannelUpdateUsername.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get ChannelUpdateUsername username.
 * @memberof ProtoChannelUpdateUsername
 * @return {string}
 */
proto.proto.ChannelUpdateUsername.prototype.getUsername = function() {
  return this.username;
};

/**
 * Set ChannelUpdateUsername username.
 * @memberof ProtoChannelUpdateUsername
 * @param {string} value
 */
proto.proto.ChannelUpdateUsername.prototype.setUsername = function(value) {
  this.username = value;
};

/**
 * Get ChannelUpdateUsername roomId.
 * @memberof ProtoChannelUpdateUsername
 * @return {Long}
 */
proto.proto.ChannelUpdateUsername.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChannelUpdateUsername roomId.
 * @memberof ProtoChannelUpdateUsername
 * @param {Long} value
 */
proto.proto.ChannelUpdateUsername.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * @interface ProtoChannelUpdateUsernameResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChannelUpdateUsernameResponse.prototype.serializeBinary = function() {
  return proto.proto.ChannelUpdateUsernameResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChannelUpdateUsernameResponse}
 */
proto.proto.ChannelUpdateUsernameResponse.deserializeBinary = function(buffer) {
  return proto.proto.ChannelUpdateUsernameResponse.decode(buffer);
};

/**
 * Get ChannelUpdateUsernameResponse response.
 * @memberof ProtoChannelUpdateUsernameResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.ChannelUpdateUsernameResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set ChannelUpdateUsernameResponse response.
 * @memberof ProtoChannelUpdateUsernameResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.ChannelUpdateUsernameResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get ChannelUpdateUsernameResponse username.
 * @memberof ProtoChannelUpdateUsernameResponse
 * @return {string}
 */
proto.proto.ChannelUpdateUsernameResponse.prototype.getUsername = function() {
  return this.username;
};

/**
 * Set ChannelUpdateUsernameResponse username.
 * @memberof ProtoChannelUpdateUsernameResponse
 * @param {string} value
 */
proto.proto.ChannelUpdateUsernameResponse.prototype.setUsername = function(value) {
  this.username = value;
};

/**
 * Get ChannelUpdateUsernameResponse roomId.
 * @memberof ProtoChannelUpdateUsernameResponse
 * @return {Long}
 */
proto.proto.ChannelUpdateUsernameResponse.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChannelUpdateUsernameResponse roomId.
 * @memberof ProtoChannelUpdateUsernameResponse
 * @param {Long} value
 */
proto.proto.ChannelUpdateUsernameResponse.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * @interface ProtoChatClearMessage
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChatClearMessage.prototype.serializeBinary = function() {
  return proto.proto.ChatClearMessage.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChatClearMessage}
 */
proto.proto.ChatClearMessage.deserializeBinary = function(buffer) {
  return proto.proto.ChatClearMessage.decode(buffer);
};

/**
 * Get ChatClearMessage request.
 * @memberof ProtoChatClearMessage
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.ChatClearMessage.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set ChatClearMessage request.
 * @memberof ProtoChatClearMessage
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.ChatClearMessage.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get ChatClearMessage roomId.
 * @memberof ProtoChatClearMessage
 * @return {Long}
 */
proto.proto.ChatClearMessage.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChatClearMessage roomId.
 * @memberof ProtoChatClearMessage
 * @param {Long} value
 */
proto.proto.ChatClearMessage.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get ChatClearMessage clearId.
 * @memberof ProtoChatClearMessage
 * @return {Long}
 */
proto.proto.ChatClearMessage.prototype.getClearId = function() {
  return this.clearId;
};

/**
 * Set ChatClearMessage clearId.
 * @memberof ProtoChatClearMessage
 * @param {Long} value
 */
proto.proto.ChatClearMessage.prototype.setClearId = function(value) {
  this.clearId = value;
};

/**
 * @interface ProtoChatClearMessageResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChatClearMessageResponse.prototype.serializeBinary = function() {
  return proto.proto.ChatClearMessageResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChatClearMessageResponse}
 */
proto.proto.ChatClearMessageResponse.deserializeBinary = function(buffer) {
  return proto.proto.ChatClearMessageResponse.decode(buffer);
};

/**
 * Get ChatClearMessageResponse response.
 * @memberof ProtoChatClearMessageResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.ChatClearMessageResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set ChatClearMessageResponse response.
 * @memberof ProtoChatClearMessageResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.ChatClearMessageResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get ChatClearMessageResponse roomId.
 * @memberof ProtoChatClearMessageResponse
 * @return {Long}
 */
proto.proto.ChatClearMessageResponse.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChatClearMessageResponse roomId.
 * @memberof ProtoChatClearMessageResponse
 * @param {Long} value
 */
proto.proto.ChatClearMessageResponse.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get ChatClearMessageResponse clearId.
 * @memberof ProtoChatClearMessageResponse
 * @return {Long}
 */
proto.proto.ChatClearMessageResponse.prototype.getClearId = function() {
  return this.clearId;
};

/**
 * Set ChatClearMessageResponse clearId.
 * @memberof ProtoChatClearMessageResponse
 * @param {Long} value
 */
proto.proto.ChatClearMessageResponse.prototype.setClearId = function(value) {
  this.clearId = value;
};

/**
 * @interface ProtoChatConvertToGroup
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChatConvertToGroup.prototype.serializeBinary = function() {
  return proto.proto.ChatConvertToGroup.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChatConvertToGroup}
 */
proto.proto.ChatConvertToGroup.deserializeBinary = function(buffer) {
  return proto.proto.ChatConvertToGroup.decode(buffer);
};

/**
 * Get ChatConvertToGroup request.
 * @memberof ProtoChatConvertToGroup
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.ChatConvertToGroup.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set ChatConvertToGroup request.
 * @memberof ProtoChatConvertToGroup
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.ChatConvertToGroup.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get ChatConvertToGroup roomId.
 * @memberof ProtoChatConvertToGroup
 * @return {Long}
 */
proto.proto.ChatConvertToGroup.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChatConvertToGroup roomId.
 * @memberof ProtoChatConvertToGroup
 * @param {Long} value
 */
proto.proto.ChatConvertToGroup.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get ChatConvertToGroup name.
 * @memberof ProtoChatConvertToGroup
 * @return {string}
 */
proto.proto.ChatConvertToGroup.prototype.getName = function() {
  return this.name;
};

/**
 * Set ChatConvertToGroup name.
 * @memberof ProtoChatConvertToGroup
 * @param {string} value
 */
proto.proto.ChatConvertToGroup.prototype.setName = function(value) {
  this.name = value;
};

/**
 * Get ChatConvertToGroup description.
 * @memberof ProtoChatConvertToGroup
 * @return {string}
 */
proto.proto.ChatConvertToGroup.prototype.getDescription = function() {
  return this.description;
};

/**
 * Set ChatConvertToGroup description.
 * @memberof ProtoChatConvertToGroup
 * @param {string} value
 */
proto.proto.ChatConvertToGroup.prototype.setDescription = function(value) {
  this.description = value;
};

/**
 * @interface ProtoChatConvertToGroupResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChatConvertToGroupResponse.prototype.serializeBinary = function() {
  return proto.proto.ChatConvertToGroupResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChatConvertToGroupResponse}
 */
proto.proto.ChatConvertToGroupResponse.deserializeBinary = function(buffer) {
  return proto.proto.ChatConvertToGroupResponse.decode(buffer);
};

/**
 * Get ChatConvertToGroupResponse response.
 * @memberof ProtoChatConvertToGroupResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.ChatConvertToGroupResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set ChatConvertToGroupResponse response.
 * @memberof ProtoChatConvertToGroupResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.ChatConvertToGroupResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get ChatConvertToGroupResponse roomId.
 * @memberof ProtoChatConvertToGroupResponse
 * @return {Long}
 */
proto.proto.ChatConvertToGroupResponse.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChatConvertToGroupResponse roomId.
 * @memberof ProtoChatConvertToGroupResponse
 * @param {Long} value
 */
proto.proto.ChatConvertToGroupResponse.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get ChatConvertToGroupResponse name.
 * @memberof ProtoChatConvertToGroupResponse
 * @return {string}
 */
proto.proto.ChatConvertToGroupResponse.prototype.getName = function() {
  return this.name;
};

/**
 * Set ChatConvertToGroupResponse name.
 * @memberof ProtoChatConvertToGroupResponse
 * @param {string} value
 */
proto.proto.ChatConvertToGroupResponse.prototype.setName = function(value) {
  this.name = value;
};

/**
 * Get ChatConvertToGroupResponse description.
 * @memberof ProtoChatConvertToGroupResponse
 * @return {string}
 */
proto.proto.ChatConvertToGroupResponse.prototype.getDescription = function() {
  return this.description;
};

/**
 * Set ChatConvertToGroupResponse description.
 * @memberof ProtoChatConvertToGroupResponse
 * @param {string} value
 */
proto.proto.ChatConvertToGroupResponse.prototype.setDescription = function(value) {
  this.description = value;
};

/**
 * Get ChatConvertToGroupResponse role.
 * @memberof ProtoChatConvertToGroupResponse
 * @return {ProtoGroupRoom_Role}
 */
proto.proto.ChatConvertToGroupResponse.prototype.getRole = function() {
  return this.role;
};

/**
 * Set ChatConvertToGroupResponse role.
 * @memberof ProtoChatConvertToGroupResponse
 * @param {ProtoGroupRoom_Role} value
 */
proto.proto.ChatConvertToGroupResponse.prototype.setRole = function(value) {
  this.role = value;
};

/**
 * @interface ProtoChatDelete
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChatDelete.prototype.serializeBinary = function() {
  return proto.proto.ChatDelete.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChatDelete}
 */
proto.proto.ChatDelete.deserializeBinary = function(buffer) {
  return proto.proto.ChatDelete.decode(buffer);
};

/**
 * Get ChatDelete request.
 * @memberof ProtoChatDelete
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.ChatDelete.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set ChatDelete request.
 * @memberof ProtoChatDelete
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.ChatDelete.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get ChatDelete roomId.
 * @memberof ProtoChatDelete
 * @return {Long}
 */
proto.proto.ChatDelete.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChatDelete roomId.
 * @memberof ProtoChatDelete
 * @param {Long} value
 */
proto.proto.ChatDelete.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * @interface ProtoChatDeleteResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChatDeleteResponse.prototype.serializeBinary = function() {
  return proto.proto.ChatDeleteResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChatDeleteResponse}
 */
proto.proto.ChatDeleteResponse.deserializeBinary = function(buffer) {
  return proto.proto.ChatDeleteResponse.decode(buffer);
};

/**
 * Get ChatDeleteResponse response.
 * @memberof ProtoChatDeleteResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.ChatDeleteResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set ChatDeleteResponse response.
 * @memberof ProtoChatDeleteResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.ChatDeleteResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get ChatDeleteResponse roomId.
 * @memberof ProtoChatDeleteResponse
 * @return {Long}
 */
proto.proto.ChatDeleteResponse.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChatDeleteResponse roomId.
 * @memberof ProtoChatDeleteResponse
 * @param {Long} value
 */
proto.proto.ChatDeleteResponse.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * @interface ProtoChatDeleteMessage
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChatDeleteMessage.prototype.serializeBinary = function() {
  return proto.proto.ChatDeleteMessage.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChatDeleteMessage}
 */
proto.proto.ChatDeleteMessage.deserializeBinary = function(buffer) {
  return proto.proto.ChatDeleteMessage.decode(buffer);
};

/**
 * Get ChatDeleteMessage request.
 * @memberof ProtoChatDeleteMessage
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.ChatDeleteMessage.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set ChatDeleteMessage request.
 * @memberof ProtoChatDeleteMessage
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.ChatDeleteMessage.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get ChatDeleteMessage roomId.
 * @memberof ProtoChatDeleteMessage
 * @return {Long}
 */
proto.proto.ChatDeleteMessage.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChatDeleteMessage roomId.
 * @memberof ProtoChatDeleteMessage
 * @param {Long} value
 */
proto.proto.ChatDeleteMessage.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get ChatDeleteMessage messageId.
 * @memberof ProtoChatDeleteMessage
 * @return {Long}
 */
proto.proto.ChatDeleteMessage.prototype.getMessageId = function() {
  return this.messageId;
};

/**
 * Set ChatDeleteMessage messageId.
 * @memberof ProtoChatDeleteMessage
 * @param {Long} value
 */
proto.proto.ChatDeleteMessage.prototype.setMessageId = function(value) {
  this.messageId = value;
};

/**
 * Get ChatDeleteMessage both.
 * @memberof ProtoChatDeleteMessage
 * @return {boolean}
 */
proto.proto.ChatDeleteMessage.prototype.getBoth = function() {
  return this.both;
};

/**
 * Set ChatDeleteMessage both.
 * @memberof ProtoChatDeleteMessage
 * @param {boolean} value
 */
proto.proto.ChatDeleteMessage.prototype.setBoth = function(value) {
  this.both = value;
};

/**
 * @interface ProtoChatDeleteMessageResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChatDeleteMessageResponse.prototype.serializeBinary = function() {
  return proto.proto.ChatDeleteMessageResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChatDeleteMessageResponse}
 */
proto.proto.ChatDeleteMessageResponse.deserializeBinary = function(buffer) {
  return proto.proto.ChatDeleteMessageResponse.decode(buffer);
};

/**
 * Get ChatDeleteMessageResponse response.
 * @memberof ProtoChatDeleteMessageResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.ChatDeleteMessageResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set ChatDeleteMessageResponse response.
 * @memberof ProtoChatDeleteMessageResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.ChatDeleteMessageResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get ChatDeleteMessageResponse roomId.
 * @memberof ProtoChatDeleteMessageResponse
 * @return {Long}
 */
proto.proto.ChatDeleteMessageResponse.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChatDeleteMessageResponse roomId.
 * @memberof ProtoChatDeleteMessageResponse
 * @param {Long} value
 */
proto.proto.ChatDeleteMessageResponse.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get ChatDeleteMessageResponse messageId.
 * @memberof ProtoChatDeleteMessageResponse
 * @return {Long}
 */
proto.proto.ChatDeleteMessageResponse.prototype.getMessageId = function() {
  return this.messageId;
};

/**
 * Set ChatDeleteMessageResponse messageId.
 * @memberof ProtoChatDeleteMessageResponse
 * @param {Long} value
 */
proto.proto.ChatDeleteMessageResponse.prototype.setMessageId = function(value) {
  this.messageId = value;
};

/**
 * Get ChatDeleteMessageResponse deleteVersion.
 * @memberof ProtoChatDeleteMessageResponse
 * @return {Long}
 */
proto.proto.ChatDeleteMessageResponse.prototype.getDeleteVersion = function() {
  return this.deleteVersion;
};

/**
 * Set ChatDeleteMessageResponse deleteVersion.
 * @memberof ProtoChatDeleteMessageResponse
 * @param {Long} value
 */
proto.proto.ChatDeleteMessageResponse.prototype.setDeleteVersion = function(value) {
  this.deleteVersion = value;
};

/**
 * @interface ProtoChatEditMessage
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChatEditMessage.prototype.serializeBinary = function() {
  return proto.proto.ChatEditMessage.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChatEditMessage}
 */
proto.proto.ChatEditMessage.deserializeBinary = function(buffer) {
  return proto.proto.ChatEditMessage.decode(buffer);
};

/**
 * Get ChatEditMessage request.
 * @memberof ProtoChatEditMessage
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.ChatEditMessage.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set ChatEditMessage request.
 * @memberof ProtoChatEditMessage
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.ChatEditMessage.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get ChatEditMessage roomId.
 * @memberof ProtoChatEditMessage
 * @return {Long}
 */
proto.proto.ChatEditMessage.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChatEditMessage roomId.
 * @memberof ProtoChatEditMessage
 * @param {Long} value
 */
proto.proto.ChatEditMessage.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get ChatEditMessage messageId.
 * @memberof ProtoChatEditMessage
 * @return {Long}
 */
proto.proto.ChatEditMessage.prototype.getMessageId = function() {
  return this.messageId;
};

/**
 * Set ChatEditMessage messageId.
 * @memberof ProtoChatEditMessage
 * @param {Long} value
 */
proto.proto.ChatEditMessage.prototype.setMessageId = function(value) {
  this.messageId = value;
};

/**
 * Get ChatEditMessage message.
 * @memberof ProtoChatEditMessage
 * @return {string}
 */
proto.proto.ChatEditMessage.prototype.getMessage = function() {
  return this.message;
};

/**
 * Set ChatEditMessage message.
 * @memberof ProtoChatEditMessage
 * @param {string} value
 */
proto.proto.ChatEditMessage.prototype.setMessage = function(value) {
  this.message = value;
};

/**
 * @interface ProtoChatEditMessageResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChatEditMessageResponse.prototype.serializeBinary = function() {
  return proto.proto.ChatEditMessageResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChatEditMessageResponse}
 */
proto.proto.ChatEditMessageResponse.deserializeBinary = function(buffer) {
  return proto.proto.ChatEditMessageResponse.decode(buffer);
};

/**
 * Get ChatEditMessageResponse response.
 * @memberof ProtoChatEditMessageResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.ChatEditMessageResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set ChatEditMessageResponse response.
 * @memberof ProtoChatEditMessageResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.ChatEditMessageResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get ChatEditMessageResponse roomId.
 * @memberof ProtoChatEditMessageResponse
 * @return {Long}
 */
proto.proto.ChatEditMessageResponse.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChatEditMessageResponse roomId.
 * @memberof ProtoChatEditMessageResponse
 * @param {Long} value
 */
proto.proto.ChatEditMessageResponse.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get ChatEditMessageResponse messageId.
 * @memberof ProtoChatEditMessageResponse
 * @return {Long}
 */
proto.proto.ChatEditMessageResponse.prototype.getMessageId = function() {
  return this.messageId;
};

/**
 * Set ChatEditMessageResponse messageId.
 * @memberof ProtoChatEditMessageResponse
 * @param {Long} value
 */
proto.proto.ChatEditMessageResponse.prototype.setMessageId = function(value) {
  this.messageId = value;
};

/**
 * Get ChatEditMessageResponse messageVersion.
 * @memberof ProtoChatEditMessageResponse
 * @return {Long}
 */
proto.proto.ChatEditMessageResponse.prototype.getMessageVersion = function() {
  return this.messageVersion;
};

/**
 * Set ChatEditMessageResponse messageVersion.
 * @memberof ProtoChatEditMessageResponse
 * @param {Long} value
 */
proto.proto.ChatEditMessageResponse.prototype.setMessageVersion = function(value) {
  this.messageVersion = value;
};

/**
 * Get ChatEditMessageResponse message.
 * @memberof ProtoChatEditMessageResponse
 * @return {string}
 */
proto.proto.ChatEditMessageResponse.prototype.getMessage = function() {
  return this.message;
};

/**
 * Set ChatEditMessageResponse message.
 * @memberof ProtoChatEditMessageResponse
 * @param {string} value
 */
proto.proto.ChatEditMessageResponse.prototype.setMessage = function(value) {
  this.message = value;
};

/**
 * Get ChatEditMessageResponse messageType.
 * @memberof ProtoChatEditMessageResponse
 * @return {ProtoRoomMessageType}
 */
proto.proto.ChatEditMessageResponse.prototype.getMessageType = function() {
  return this.messageType;
};

/**
 * Set ChatEditMessageResponse messageType.
 * @memberof ProtoChatEditMessageResponse
 * @param {ProtoRoomMessageType} value
 */
proto.proto.ChatEditMessageResponse.prototype.setMessageType = function(value) {
  this.messageType = value;
};

/**
 * @interface ProtoChatGetDraft
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChatGetDraft.prototype.serializeBinary = function() {
  return proto.proto.ChatGetDraft.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChatGetDraft}
 */
proto.proto.ChatGetDraft.deserializeBinary = function(buffer) {
  return proto.proto.ChatGetDraft.decode(buffer);
};

/**
 * Get ChatGetDraft request.
 * @memberof ProtoChatGetDraft
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.ChatGetDraft.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set ChatGetDraft request.
 * @memberof ProtoChatGetDraft
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.ChatGetDraft.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get ChatGetDraft roomId.
 * @memberof ProtoChatGetDraft
 * @return {Long}
 */
proto.proto.ChatGetDraft.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChatGetDraft roomId.
 * @memberof ProtoChatGetDraft
 * @param {Long} value
 */
proto.proto.ChatGetDraft.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * @interface ProtoChatGetDraftResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChatGetDraftResponse.prototype.serializeBinary = function() {
  return proto.proto.ChatGetDraftResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChatGetDraftResponse}
 */
proto.proto.ChatGetDraftResponse.deserializeBinary = function(buffer) {
  return proto.proto.ChatGetDraftResponse.decode(buffer);
};

/**
 * Get ChatGetDraftResponse response.
 * @memberof ProtoChatGetDraftResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.ChatGetDraftResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set ChatGetDraftResponse response.
 * @memberof ProtoChatGetDraftResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.ChatGetDraftResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get ChatGetDraftResponse draft.
 * @memberof ProtoChatGetDraftResponse
 * @return {(ProtoRoomDraft|null|undefined)}
 */
proto.proto.ChatGetDraftResponse.prototype.getDraft = function() {
  return this.draft;
};

/**
 * Set ChatGetDraftResponse draft.
 * @memberof ProtoChatGetDraftResponse
 * @param {(ProtoRoomDraft|null|undefined)} value
 */
proto.proto.ChatGetDraftResponse.prototype.setDraft = function(value) {
  this.draft = value;
};

/**
 * @interface ProtoChatGetRoom
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChatGetRoom.prototype.serializeBinary = function() {
  return proto.proto.ChatGetRoom.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChatGetRoom}
 */
proto.proto.ChatGetRoom.deserializeBinary = function(buffer) {
  return proto.proto.ChatGetRoom.decode(buffer);
};

/**
 * Get ChatGetRoom request.
 * @memberof ProtoChatGetRoom
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.ChatGetRoom.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set ChatGetRoom request.
 * @memberof ProtoChatGetRoom
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.ChatGetRoom.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get ChatGetRoom peerId.
 * @memberof ProtoChatGetRoom
 * @return {Long}
 */
proto.proto.ChatGetRoom.prototype.getPeerId = function() {
  return this.peerId;
};

/**
 * Set ChatGetRoom peerId.
 * @memberof ProtoChatGetRoom
 * @param {Long} value
 */
proto.proto.ChatGetRoom.prototype.setPeerId = function(value) {
  this.peerId = value;
};

/**
 * @interface ProtoChatGetRoomResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChatGetRoomResponse.prototype.serializeBinary = function() {
  return proto.proto.ChatGetRoomResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChatGetRoomResponse}
 */
proto.proto.ChatGetRoomResponse.deserializeBinary = function(buffer) {
  return proto.proto.ChatGetRoomResponse.decode(buffer);
};

/**
 * Get ChatGetRoomResponse response.
 * @memberof ProtoChatGetRoomResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.ChatGetRoomResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set ChatGetRoomResponse response.
 * @memberof ProtoChatGetRoomResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.ChatGetRoomResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get ChatGetRoomResponse room.
 * @memberof ProtoChatGetRoomResponse
 * @return {(ProtoRoom|null|undefined)}
 */
proto.proto.ChatGetRoomResponse.prototype.getRoom = function() {
  return this.room;
};

/**
 * Set ChatGetRoomResponse room.
 * @memberof ProtoChatGetRoomResponse
 * @param {(ProtoRoom|null|undefined)} value
 */
proto.proto.ChatGetRoomResponse.prototype.setRoom = function(value) {
  this.room = value;
};

/**
 * @interface ProtoChatSendMessage
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChatSendMessage.prototype.serializeBinary = function() {
  return proto.proto.ChatSendMessage.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChatSendMessage}
 */
proto.proto.ChatSendMessage.deserializeBinary = function(buffer) {
  return proto.proto.ChatSendMessage.decode(buffer);
};

/**
 * Get ChatSendMessage request.
 * @memberof ProtoChatSendMessage
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.ChatSendMessage.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set ChatSendMessage request.
 * @memberof ProtoChatSendMessage
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.ChatSendMessage.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get ChatSendMessage messageType.
 * @memberof ProtoChatSendMessage
 * @return {ProtoRoomMessageType}
 */
proto.proto.ChatSendMessage.prototype.getMessageType = function() {
  return this.messageType;
};

/**
 * Set ChatSendMessage messageType.
 * @memberof ProtoChatSendMessage
 * @param {ProtoRoomMessageType} value
 */
proto.proto.ChatSendMessage.prototype.setMessageType = function(value) {
  this.messageType = value;
};

/**
 * Get ChatSendMessage roomId.
 * @memberof ProtoChatSendMessage
 * @return {Long}
 */
proto.proto.ChatSendMessage.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChatSendMessage roomId.
 * @memberof ProtoChatSendMessage
 * @param {Long} value
 */
proto.proto.ChatSendMessage.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get ChatSendMessage message.
 * @memberof ProtoChatSendMessage
 * @return {string}
 */
proto.proto.ChatSendMessage.prototype.getMessage = function() {
  return this.message;
};

/**
 * Set ChatSendMessage message.
 * @memberof ProtoChatSendMessage
 * @param {string} value
 */
proto.proto.ChatSendMessage.prototype.setMessage = function(value) {
  this.message = value;
};

/**
 * Get ChatSendMessage attachment.
 * @memberof ProtoChatSendMessage
 * @return {string}
 */
proto.proto.ChatSendMessage.prototype.getAttachment = function() {
  return this.attachment;
};

/**
 * Set ChatSendMessage attachment.
 * @memberof ProtoChatSendMessage
 * @param {string} value
 */
proto.proto.ChatSendMessage.prototype.setAttachment = function(value) {
  this.attachment = value;
};

/**
 * Get ChatSendMessage location.
 * @memberof ProtoChatSendMessage
 * @return {(ProtoRoomMessageLocation|null|undefined)}
 */
proto.proto.ChatSendMessage.prototype.getLocation = function() {
  return this.location;
};

/**
 * Set ChatSendMessage location.
 * @memberof ProtoChatSendMessage
 * @param {(ProtoRoomMessageLocation|null|undefined)} value
 */
proto.proto.ChatSendMessage.prototype.setLocation = function(value) {
  this.location = value;
};

/**
 * Get ChatSendMessage contact.
 * @memberof ProtoChatSendMessage
 * @return {(ProtoRoomMessageContact|null|undefined)}
 */
proto.proto.ChatSendMessage.prototype.getContact = function() {
  return this.contact;
};

/**
 * Set ChatSendMessage contact.
 * @memberof ProtoChatSendMessage
 * @param {(ProtoRoomMessageContact|null|undefined)} value
 */
proto.proto.ChatSendMessage.prototype.setContact = function(value) {
  this.contact = value;
};

/**
 * Get ChatSendMessage replyTo.
 * @memberof ProtoChatSendMessage
 * @return {Long}
 */
proto.proto.ChatSendMessage.prototype.getReplyTo = function() {
  return this.replyTo;
};

/**
 * Set ChatSendMessage replyTo.
 * @memberof ProtoChatSendMessage
 * @param {Long} value
 */
proto.proto.ChatSendMessage.prototype.setReplyTo = function(value) {
  this.replyTo = value;
};

/**
 * Get ChatSendMessage forwardFrom.
 * @memberof ProtoChatSendMessage
 * @return {(ProtoRoomMessageForwardFrom|null|undefined)}
 */
proto.proto.ChatSendMessage.prototype.getForwardFrom = function() {
  return this.forwardFrom;
};

/**
 * Set ChatSendMessage forwardFrom.
 * @memberof ProtoChatSendMessage
 * @param {(ProtoRoomMessageForwardFrom|null|undefined)} value
 */
proto.proto.ChatSendMessage.prototype.setForwardFrom = function(value) {
  this.forwardFrom = value;
};

/**
 * Get ChatSendMessage randomId.
 * @memberof ProtoChatSendMessage
 * @return {Long}
 */
proto.proto.ChatSendMessage.prototype.getRandomId = function() {
  return this.randomId;
};

/**
 * Set ChatSendMessage randomId.
 * @memberof ProtoChatSendMessage
 * @param {Long} value
 */
proto.proto.ChatSendMessage.prototype.setRandomId = function(value) {
  this.randomId = value;
};

/**
 * @interface ProtoChatSendMessageResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChatSendMessageResponse.prototype.serializeBinary = function() {
  return proto.proto.ChatSendMessageResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChatSendMessageResponse}
 */
proto.proto.ChatSendMessageResponse.deserializeBinary = function(buffer) {
  return proto.proto.ChatSendMessageResponse.decode(buffer);
};

/**
 * Get ChatSendMessageResponse response.
 * @memberof ProtoChatSendMessageResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.ChatSendMessageResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set ChatSendMessageResponse response.
 * @memberof ProtoChatSendMessageResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.ChatSendMessageResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get ChatSendMessageResponse roomId.
 * @memberof ProtoChatSendMessageResponse
 * @return {Long}
 */
proto.proto.ChatSendMessageResponse.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChatSendMessageResponse roomId.
 * @memberof ProtoChatSendMessageResponse
 * @param {Long} value
 */
proto.proto.ChatSendMessageResponse.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get ChatSendMessageResponse roomMessage.
 * @memberof ProtoChatSendMessageResponse
 * @return {(ProtoRoomMessage|null|undefined)}
 */
proto.proto.ChatSendMessageResponse.prototype.getRoomMessage = function() {
  return this.roomMessage;
};

/**
 * Set ChatSendMessageResponse roomMessage.
 * @memberof ProtoChatSendMessageResponse
 * @param {(ProtoRoomMessage|null|undefined)} value
 */
proto.proto.ChatSendMessageResponse.prototype.setRoomMessage = function(value) {
  this.roomMessage = value;
};

/**
 * @interface ProtoChatSetAction
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChatSetAction.prototype.serializeBinary = function() {
  return proto.proto.ChatSetAction.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChatSetAction}
 */
proto.proto.ChatSetAction.deserializeBinary = function(buffer) {
  return proto.proto.ChatSetAction.decode(buffer);
};

/**
 * Get ChatSetAction request.
 * @memberof ProtoChatSetAction
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.ChatSetAction.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set ChatSetAction request.
 * @memberof ProtoChatSetAction
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.ChatSetAction.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get ChatSetAction roomId.
 * @memberof ProtoChatSetAction
 * @return {Long}
 */
proto.proto.ChatSetAction.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChatSetAction roomId.
 * @memberof ProtoChatSetAction
 * @param {Long} value
 */
proto.proto.ChatSetAction.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get ChatSetAction action.
 * @memberof ProtoChatSetAction
 * @return {ProtoClientAction}
 */
proto.proto.ChatSetAction.prototype.getAction = function() {
  return this.action;
};

/**
 * Set ChatSetAction action.
 * @memberof ProtoChatSetAction
 * @param {ProtoClientAction} value
 */
proto.proto.ChatSetAction.prototype.setAction = function(value) {
  this.action = value;
};

/**
 * Get ChatSetAction actionId.
 * @memberof ProtoChatSetAction
 * @return {number}
 */
proto.proto.ChatSetAction.prototype.getActionId = function() {
  return this.actionId;
};

/**
 * Set ChatSetAction actionId.
 * @memberof ProtoChatSetAction
 * @param {number} value
 */
proto.proto.ChatSetAction.prototype.setActionId = function(value) {
  this.actionId = value;
};

/**
 * @interface ProtoChatSetActionResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChatSetActionResponse.prototype.serializeBinary = function() {
  return proto.proto.ChatSetActionResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChatSetActionResponse}
 */
proto.proto.ChatSetActionResponse.deserializeBinary = function(buffer) {
  return proto.proto.ChatSetActionResponse.decode(buffer);
};

/**
 * Get ChatSetActionResponse response.
 * @memberof ProtoChatSetActionResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.ChatSetActionResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set ChatSetActionResponse response.
 * @memberof ProtoChatSetActionResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.ChatSetActionResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get ChatSetActionResponse roomId.
 * @memberof ProtoChatSetActionResponse
 * @return {Long}
 */
proto.proto.ChatSetActionResponse.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChatSetActionResponse roomId.
 * @memberof ProtoChatSetActionResponse
 * @param {Long} value
 */
proto.proto.ChatSetActionResponse.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get ChatSetActionResponse action.
 * @memberof ProtoChatSetActionResponse
 * @return {ProtoClientAction}
 */
proto.proto.ChatSetActionResponse.prototype.getAction = function() {
  return this.action;
};

/**
 * Set ChatSetActionResponse action.
 * @memberof ProtoChatSetActionResponse
 * @param {ProtoClientAction} value
 */
proto.proto.ChatSetActionResponse.prototype.setAction = function(value) {
  this.action = value;
};

/**
 * Get ChatSetActionResponse userId.
 * @memberof ProtoChatSetActionResponse
 * @return {Long}
 */
proto.proto.ChatSetActionResponse.prototype.getUserId = function() {
  return this.userId;
};

/**
 * Set ChatSetActionResponse userId.
 * @memberof ProtoChatSetActionResponse
 * @param {Long} value
 */
proto.proto.ChatSetActionResponse.prototype.setUserId = function(value) {
  this.userId = value;
};

/**
 * @interface ProtoChatUpdateDraft
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChatUpdateDraft.prototype.serializeBinary = function() {
  return proto.proto.ChatUpdateDraft.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChatUpdateDraft}
 */
proto.proto.ChatUpdateDraft.deserializeBinary = function(buffer) {
  return proto.proto.ChatUpdateDraft.decode(buffer);
};

/**
 * Get ChatUpdateDraft request.
 * @memberof ProtoChatUpdateDraft
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.ChatUpdateDraft.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set ChatUpdateDraft request.
 * @memberof ProtoChatUpdateDraft
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.ChatUpdateDraft.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get ChatUpdateDraft roomId.
 * @memberof ProtoChatUpdateDraft
 * @return {Long}
 */
proto.proto.ChatUpdateDraft.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChatUpdateDraft roomId.
 * @memberof ProtoChatUpdateDraft
 * @param {Long} value
 */
proto.proto.ChatUpdateDraft.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get ChatUpdateDraft draft.
 * @memberof ProtoChatUpdateDraft
 * @return {(ProtoRoomDraft|null|undefined)}
 */
proto.proto.ChatUpdateDraft.prototype.getDraft = function() {
  return this.draft;
};

/**
 * Set ChatUpdateDraft draft.
 * @memberof ProtoChatUpdateDraft
 * @param {(ProtoRoomDraft|null|undefined)} value
 */
proto.proto.ChatUpdateDraft.prototype.setDraft = function(value) {
  this.draft = value;
};

/**
 * @interface ProtoChatUpdateDraftResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChatUpdateDraftResponse.prototype.serializeBinary = function() {
  return proto.proto.ChatUpdateDraftResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChatUpdateDraftResponse}
 */
proto.proto.ChatUpdateDraftResponse.deserializeBinary = function(buffer) {
  return proto.proto.ChatUpdateDraftResponse.decode(buffer);
};

/**
 * Get ChatUpdateDraftResponse response.
 * @memberof ProtoChatUpdateDraftResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.ChatUpdateDraftResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set ChatUpdateDraftResponse response.
 * @memberof ProtoChatUpdateDraftResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.ChatUpdateDraftResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get ChatUpdateDraftResponse roomId.
 * @memberof ProtoChatUpdateDraftResponse
 * @return {Long}
 */
proto.proto.ChatUpdateDraftResponse.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChatUpdateDraftResponse roomId.
 * @memberof ProtoChatUpdateDraftResponse
 * @param {Long} value
 */
proto.proto.ChatUpdateDraftResponse.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get ChatUpdateDraftResponse draft.
 * @memberof ProtoChatUpdateDraftResponse
 * @return {(ProtoRoomDraft|null|undefined)}
 */
proto.proto.ChatUpdateDraftResponse.prototype.getDraft = function() {
  return this.draft;
};

/**
 * Set ChatUpdateDraftResponse draft.
 * @memberof ProtoChatUpdateDraftResponse
 * @param {(ProtoRoomDraft|null|undefined)} value
 */
proto.proto.ChatUpdateDraftResponse.prototype.setDraft = function(value) {
  this.draft = value;
};

/**
 * @interface ProtoChatUpdateStatus
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChatUpdateStatus.prototype.serializeBinary = function() {
  return proto.proto.ChatUpdateStatus.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChatUpdateStatus}
 */
proto.proto.ChatUpdateStatus.deserializeBinary = function(buffer) {
  return proto.proto.ChatUpdateStatus.decode(buffer);
};

/**
 * Get ChatUpdateStatus request.
 * @memberof ProtoChatUpdateStatus
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.ChatUpdateStatus.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set ChatUpdateStatus request.
 * @memberof ProtoChatUpdateStatus
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.ChatUpdateStatus.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get ChatUpdateStatus roomId.
 * @memberof ProtoChatUpdateStatus
 * @return {Long}
 */
proto.proto.ChatUpdateStatus.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChatUpdateStatus roomId.
 * @memberof ProtoChatUpdateStatus
 * @param {Long} value
 */
proto.proto.ChatUpdateStatus.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get ChatUpdateStatus messageId.
 * @memberof ProtoChatUpdateStatus
 * @return {Long}
 */
proto.proto.ChatUpdateStatus.prototype.getMessageId = function() {
  return this.messageId;
};

/**
 * Set ChatUpdateStatus messageId.
 * @memberof ProtoChatUpdateStatus
 * @param {Long} value
 */
proto.proto.ChatUpdateStatus.prototype.setMessageId = function(value) {
  this.messageId = value;
};

/**
 * Get ChatUpdateStatus status.
 * @memberof ProtoChatUpdateStatus
 * @return {ProtoRoomMessageStatus}
 */
proto.proto.ChatUpdateStatus.prototype.getStatus = function() {
  return this.status;
};

/**
 * Set ChatUpdateStatus status.
 * @memberof ProtoChatUpdateStatus
 * @param {ProtoRoomMessageStatus} value
 */
proto.proto.ChatUpdateStatus.prototype.setStatus = function(value) {
  this.status = value;
};

/**
 * @interface ProtoChatUpdateStatusResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ChatUpdateStatusResponse.prototype.serializeBinary = function() {
  return proto.proto.ChatUpdateStatusResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoChatUpdateStatusResponse}
 */
proto.proto.ChatUpdateStatusResponse.deserializeBinary = function(buffer) {
  return proto.proto.ChatUpdateStatusResponse.decode(buffer);
};

/**
 * Get ChatUpdateStatusResponse response.
 * @memberof ProtoChatUpdateStatusResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.ChatUpdateStatusResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set ChatUpdateStatusResponse response.
 * @memberof ProtoChatUpdateStatusResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.ChatUpdateStatusResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get ChatUpdateStatusResponse roomId.
 * @memberof ProtoChatUpdateStatusResponse
 * @return {Long}
 */
proto.proto.ChatUpdateStatusResponse.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ChatUpdateStatusResponse roomId.
 * @memberof ProtoChatUpdateStatusResponse
 * @param {Long} value
 */
proto.proto.ChatUpdateStatusResponse.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get ChatUpdateStatusResponse messageId.
 * @memberof ProtoChatUpdateStatusResponse
 * @return {Long}
 */
proto.proto.ChatUpdateStatusResponse.prototype.getMessageId = function() {
  return this.messageId;
};

/**
 * Set ChatUpdateStatusResponse messageId.
 * @memberof ProtoChatUpdateStatusResponse
 * @param {Long} value
 */
proto.proto.ChatUpdateStatusResponse.prototype.setMessageId = function(value) {
  this.messageId = value;
};

/**
 * Get ChatUpdateStatusResponse status.
 * @memberof ProtoChatUpdateStatusResponse
 * @return {ProtoRoomMessageStatus}
 */
proto.proto.ChatUpdateStatusResponse.prototype.getStatus = function() {
  return this.status;
};

/**
 * Set ChatUpdateStatusResponse status.
 * @memberof ProtoChatUpdateStatusResponse
 * @param {ProtoRoomMessageStatus} value
 */
proto.proto.ChatUpdateStatusResponse.prototype.setStatus = function(value) {
  this.status = value;
};

/**
 * Get ChatUpdateStatusResponse statusVersion.
 * @memberof ProtoChatUpdateStatusResponse
 * @return {Long}
 */
proto.proto.ChatUpdateStatusResponse.prototype.getStatusVersion = function() {
  return this.statusVersion;
};

/**
 * Set ChatUpdateStatusResponse statusVersion.
 * @memberof ProtoChatUpdateStatusResponse
 * @param {Long} value
 */
proto.proto.ChatUpdateStatusResponse.prototype.setStatusVersion = function(value) {
  this.statusVersion = value;
};

/**
 * Get ChatUpdateStatusResponse updaterAuthorHash.
 * @memberof ProtoChatUpdateStatusResponse
 * @return {string}
 */
proto.proto.ChatUpdateStatusResponse.prototype.getUpdaterAuthorHash = function() {
  return this.updaterAuthorHash;
};

/**
 * Set ChatUpdateStatusResponse updaterAuthorHash.
 * @memberof ProtoChatUpdateStatusResponse
 * @param {string} value
 */
proto.proto.ChatUpdateStatusResponse.prototype.setUpdaterAuthorHash = function(value) {
  this.updaterAuthorHash = value;
};

/**
 * @interface ProtoClientCheckInviteLink
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ClientCheckInviteLink.prototype.serializeBinary = function() {
  return proto.proto.ClientCheckInviteLink.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoClientCheckInviteLink}
 */
proto.proto.ClientCheckInviteLink.deserializeBinary = function(buffer) {
  return proto.proto.ClientCheckInviteLink.decode(buffer);
};

/**
 * Get ClientCheckInviteLink request.
 * @memberof ProtoClientCheckInviteLink
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.ClientCheckInviteLink.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set ClientCheckInviteLink request.
 * @memberof ProtoClientCheckInviteLink
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.ClientCheckInviteLink.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get ClientCheckInviteLink inviteToken.
 * @memberof ProtoClientCheckInviteLink
 * @return {string}
 */
proto.proto.ClientCheckInviteLink.prototype.getInviteToken = function() {
  return this.inviteToken;
};

/**
 * Set ClientCheckInviteLink inviteToken.
 * @memberof ProtoClientCheckInviteLink
 * @param {string} value
 */
proto.proto.ClientCheckInviteLink.prototype.setInviteToken = function(value) {
  this.inviteToken = value;
};

/**
 * @interface ProtoClientCheckInviteLinkResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ClientCheckInviteLinkResponse.prototype.serializeBinary = function() {
  return proto.proto.ClientCheckInviteLinkResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoClientCheckInviteLinkResponse}
 */
proto.proto.ClientCheckInviteLinkResponse.deserializeBinary = function(buffer) {
  return proto.proto.ClientCheckInviteLinkResponse.decode(buffer);
};

/**
 * Get ClientCheckInviteLinkResponse response.
 * @memberof ProtoClientCheckInviteLinkResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.ClientCheckInviteLinkResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set ClientCheckInviteLinkResponse response.
 * @memberof ProtoClientCheckInviteLinkResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.ClientCheckInviteLinkResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get ClientCheckInviteLinkResponse room.
 * @memberof ProtoClientCheckInviteLinkResponse
 * @return {(ProtoRoom|null|undefined)}
 */
proto.proto.ClientCheckInviteLinkResponse.prototype.getRoom = function() {
  return this.room;
};

/**
 * Set ClientCheckInviteLinkResponse room.
 * @memberof ProtoClientCheckInviteLinkResponse
 * @param {(ProtoRoom|null|undefined)} value
 */
proto.proto.ClientCheckInviteLinkResponse.prototype.setRoom = function(value) {
  this.room = value;
};

/**
 * @interface ProtoClientCondition
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ClientCondition.prototype.serializeBinary = function() {
  return proto.proto.ClientCondition.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoClientCondition}
 */
proto.proto.ClientCondition.deserializeBinary = function(buffer) {
  return proto.proto.ClientCondition.decode(buffer);
};

/**
 * Get ClientCondition request.
 * @memberof ProtoClientCondition
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.ClientCondition.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set ClientCondition request.
 * @memberof ProtoClientCondition
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.ClientCondition.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get ClientCondition rooms.
 * @memberof ProtoClientCondition
 * @return {Array.<ProtoClientCondition_Room>}
 */
proto.proto.ClientCondition.prototype.getRoomsList = function() {
  return this.rooms;
};

/**
 * Set ClientCondition rooms.
 * @memberof ProtoClientCondition
 * @param {Array.<ProtoClientCondition_Room>} value
 */
proto.proto.ClientCondition.prototype.setRoomsList = function(value) {
  this.rooms = value;
};

/**
 * @interface ProtoClientCondition_Room
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ClientCondition.Room.prototype.serializeBinary = function() {
  return proto.proto.ClientCondition.Room.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoClientCondition_Room}
 */
proto.proto.ClientCondition.Room.deserializeBinary = function(buffer) {
  return proto.proto.ClientCondition.Room.decode(buffer);
};

/**
 * Get Room roomId.
 * @memberof ProtoClientCondition_Room
 * @return {Long}
 */
proto.proto.ClientCondition.Room.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set Room roomId.
 * @memberof ProtoClientCondition_Room
 * @param {Long} value
 */
proto.proto.ClientCondition.Room.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get Room messageVersion.
 * @memberof ProtoClientCondition_Room
 * @return {Long}
 */
proto.proto.ClientCondition.Room.prototype.getMessageVersion = function() {
  return this.messageVersion;
};

/**
 * Set Room messageVersion.
 * @memberof ProtoClientCondition_Room
 * @param {Long} value
 */
proto.proto.ClientCondition.Room.prototype.setMessageVersion = function(value) {
  this.messageVersion = value;
};

/**
 * Get Room statusVersion.
 * @memberof ProtoClientCondition_Room
 * @return {Long}
 */
proto.proto.ClientCondition.Room.prototype.getStatusVersion = function() {
  return this.statusVersion;
};

/**
 * Set Room statusVersion.
 * @memberof ProtoClientCondition_Room
 * @param {Long} value
 */
proto.proto.ClientCondition.Room.prototype.setStatusVersion = function(value) {
  this.statusVersion = value;
};

/**
 * Get Room deleteVersion.
 * @memberof ProtoClientCondition_Room
 * @return {Long}
 */
proto.proto.ClientCondition.Room.prototype.getDeleteVersion = function() {
  return this.deleteVersion;
};

/**
 * Set Room deleteVersion.
 * @memberof ProtoClientCondition_Room
 * @param {Long} value
 */
proto.proto.ClientCondition.Room.prototype.setDeleteVersion = function(value) {
  this.deleteVersion = value;
};

/**
 * Get Room offlineDeletedDeprecated.
 * @memberof ProtoClientCondition_Room
 * @return {Array.<Long>}
 */
proto.proto.ClientCondition.Room.prototype.getOfflineDeletedDeprecatedList = function() {
  return this.offlineDeletedDeprecated;
};

/**
 * Set Room offlineDeletedDeprecated.
 * @memberof ProtoClientCondition_Room
 * @param {Array.<Long>} value
 */
proto.proto.ClientCondition.Room.prototype.setOfflineDeletedDeprecatedList = function(value) {
  this.offlineDeletedDeprecated = value;
};

/**
 * Get Room offlineEdited.
 * @memberof ProtoClientCondition_Room
 * @return {Array.<ProtoClientCondition_Room_OfflineEdited>}
 */
proto.proto.ClientCondition.Room.prototype.getOfflineEditedList = function() {
  return this.offlineEdited;
};

/**
 * Set Room offlineEdited.
 * @memberof ProtoClientCondition_Room
 * @param {Array.<ProtoClientCondition_Room_OfflineEdited>} value
 */
proto.proto.ClientCondition.Room.prototype.setOfflineEditedList = function(value) {
  this.offlineEdited = value;
};

/**
 * Get Room offlineSeen.
 * @memberof ProtoClientCondition_Room
 * @return {Array.<Long>}
 */
proto.proto.ClientCondition.Room.prototype.getOfflineSeenList = function() {
  return this.offlineSeen;
};

/**
 * Set Room offlineSeen.
 * @memberof ProtoClientCondition_Room
 * @param {Array.<Long>} value
 */
proto.proto.ClientCondition.Room.prototype.setOfflineSeenList = function(value) {
  this.offlineSeen = value;
};

/**
 * Get Room clearId.
 * @memberof ProtoClientCondition_Room
 * @return {Long}
 */
proto.proto.ClientCondition.Room.prototype.getClearId = function() {
  return this.clearId;
};

/**
 * Set Room clearId.
 * @memberof ProtoClientCondition_Room
 * @param {Long} value
 */
proto.proto.ClientCondition.Room.prototype.setClearId = function(value) {
  this.clearId = value;
};

/**
 * Get Room cacheStartId.
 * @memberof ProtoClientCondition_Room
 * @return {Long}
 */
proto.proto.ClientCondition.Room.prototype.getCacheStartId = function() {
  return this.cacheStartId;
};

/**
 * Set Room cacheStartId.
 * @memberof ProtoClientCondition_Room
 * @param {Long} value
 */
proto.proto.ClientCondition.Room.prototype.setCacheStartId = function(value) {
  this.cacheStartId = value;
};

/**
 * Get Room cacheEndId.
 * @memberof ProtoClientCondition_Room
 * @return {Long}
 */
proto.proto.ClientCondition.Room.prototype.getCacheEndId = function() {
  return this.cacheEndId;
};

/**
 * Set Room cacheEndId.
 * @memberof ProtoClientCondition_Room
 * @param {Long} value
 */
proto.proto.ClientCondition.Room.prototype.setCacheEndId = function(value) {
  this.cacheEndId = value;
};

/**
 * Get Room offlineMute.
 * @memberof ProtoClientCondition_Room
 * @return {ProtoClientCondition_Room_OfflineMute}
 */
proto.proto.ClientCondition.Room.prototype.getOfflineMute = function() {
  return this.offlineMute;
};

/**
 * Set Room offlineMute.
 * @memberof ProtoClientCondition_Room
 * @param {ProtoClientCondition_Room_OfflineMute} value
 */
proto.proto.ClientCondition.Room.prototype.setOfflineMute = function(value) {
  this.offlineMute = value;
};

/**
 * Get Room offlineListened.
 * @memberof ProtoClientCondition_Room
 * @return {Array.<Long>}
 */
proto.proto.ClientCondition.Room.prototype.getOfflineListenedList = function() {
  return this.offlineListened;
};

/**
 * Set Room offlineListened.
 * @memberof ProtoClientCondition_Room
 * @param {Array.<Long>} value
 */
proto.proto.ClientCondition.Room.prototype.setOfflineListenedList = function(value) {
  this.offlineListened = value;
};

/**
 * Get Room offlineDeleted.
 * @memberof ProtoClientCondition_Room
 * @return {Array.<ProtoClientCondition_Room_OfflineDeleted>}
 */
proto.proto.ClientCondition.Room.prototype.getOfflineDeletedList = function() {
  return this.offlineDeleted;
};

/**
 * Set Room offlineDeleted.
 * @memberof ProtoClientCondition_Room
 * @param {Array.<ProtoClientCondition_Room_OfflineDeleted>} value
 */
proto.proto.ClientCondition.Room.prototype.setOfflineDeletedList = function(value) {
  this.offlineDeleted = value;
};

/**
 * @interface ProtoClientCondition_Room_OfflineEdited
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ClientCondition.Room.OfflineEdited.prototype.serializeBinary = function() {
  return proto.proto.ClientCondition.Room.OfflineEdited.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoClientCondition_Room_OfflineEdited}
 */
proto.proto.ClientCondition.Room.OfflineEdited.deserializeBinary = function(buffer) {
  return proto.proto.ClientCondition.Room.OfflineEdited.decode(buffer);
};

/**
 * Get OfflineEdited messageId.
 * @memberof ProtoClientCondition_Room_OfflineEdited
 * @return {Long}
 */
proto.proto.ClientCondition.Room.OfflineEdited.prototype.getMessageId = function() {
  return this.messageId;
};

/**
 * Set OfflineEdited messageId.
 * @memberof ProtoClientCondition_Room_OfflineEdited
 * @param {Long} value
 */
proto.proto.ClientCondition.Room.OfflineEdited.prototype.setMessageId = function(value) {
  this.messageId = value;
};

/**
 * Get OfflineEdited message.
 * @memberof ProtoClientCondition_Room_OfflineEdited
 * @return {string}
 */
proto.proto.ClientCondition.Room.OfflineEdited.prototype.getMessage = function() {
  return this.message;
};

/**
 * Set OfflineEdited message.
 * @memberof ProtoClientCondition_Room_OfflineEdited
 * @param {string} value
 */
proto.proto.ClientCondition.Room.OfflineEdited.prototype.setMessage = function(value) {
  this.message = value;
};

/**
 * @typedef {number} ProtoClientCondition_Room_OfflineMute
 */

/**
 * OfflineMute enum.
 * @enum {ProtoClientCondition_Room_OfflineMute}
 * @memberof ProtoClientCondition_Room
 */
proto.proto.ClientCondition.Room.OfflineMute = proto.proto.ClientCondition.Room.prototype.OfflineMute = {
  UNCHANGED : 0,
  MUTED : 1,
  UNMUTED : 2,
};

/**
 * @interface ProtoClientCondition_Room_OfflineDeleted
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ClientCondition.Room.OfflineDeleted.prototype.serializeBinary = function() {
  return proto.proto.ClientCondition.Room.OfflineDeleted.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoClientCondition_Room_OfflineDeleted}
 */
proto.proto.ClientCondition.Room.OfflineDeleted.deserializeBinary = function(buffer) {
  return proto.proto.ClientCondition.Room.OfflineDeleted.decode(buffer);
};

/**
 * Get OfflineDeleted messageId.
 * @memberof ProtoClientCondition_Room_OfflineDeleted
 * @return {Long}
 */
proto.proto.ClientCondition.Room.OfflineDeleted.prototype.getMessageId = function() {
  return this.messageId;
};

/**
 * Set OfflineDeleted messageId.
 * @memberof ProtoClientCondition_Room_OfflineDeleted
 * @param {Long} value
 */
proto.proto.ClientCondition.Room.OfflineDeleted.prototype.setMessageId = function(value) {
  this.messageId = value;
};

/**
 * Get OfflineDeleted both.
 * @memberof ProtoClientCondition_Room_OfflineDeleted
 * @return {boolean}
 */
proto.proto.ClientCondition.Room.OfflineDeleted.prototype.getBoth = function() {
  return this.both;
};

/**
 * Set OfflineDeleted both.
 * @memberof ProtoClientCondition_Room_OfflineDeleted
 * @param {boolean} value
 */
proto.proto.ClientCondition.Room.OfflineDeleted.prototype.setBoth = function(value) {
  this.both = value;
};

/**
 * @interface ProtoClientConditionResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ClientConditionResponse.prototype.serializeBinary = function() {
  return proto.proto.ClientConditionResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoClientConditionResponse}
 */
proto.proto.ClientConditionResponse.deserializeBinary = function(buffer) {
  return proto.proto.ClientConditionResponse.decode(buffer);
};

/**
 * Get ClientConditionResponse response.
 * @memberof ProtoClientConditionResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.ClientConditionResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set ClientConditionResponse response.
 * @memberof ProtoClientConditionResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.ClientConditionResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * @interface ProtoClientCountRoomHistory
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ClientCountRoomHistory.prototype.serializeBinary = function() {
  return proto.proto.ClientCountRoomHistory.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoClientCountRoomHistory}
 */
proto.proto.ClientCountRoomHistory.deserializeBinary = function(buffer) {
  return proto.proto.ClientCountRoomHistory.decode(buffer);
};

/**
 * Get ClientCountRoomHistory request.
 * @memberof ProtoClientCountRoomHistory
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.ClientCountRoomHistory.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set ClientCountRoomHistory request.
 * @memberof ProtoClientCountRoomHistory
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.ClientCountRoomHistory.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get ClientCountRoomHistory roomId.
 * @memberof ProtoClientCountRoomHistory
 * @return {Long}
 */
proto.proto.ClientCountRoomHistory.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ClientCountRoomHistory roomId.
 * @memberof ProtoClientCountRoomHistory
 * @param {Long} value
 */
proto.proto.ClientCountRoomHistory.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * @interface ProtoClientCountRoomHistoryResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ClientCountRoomHistoryResponse.prototype.serializeBinary = function() {
  return proto.proto.ClientCountRoomHistoryResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoClientCountRoomHistoryResponse}
 */
proto.proto.ClientCountRoomHistoryResponse.deserializeBinary = function(buffer) {
  return proto.proto.ClientCountRoomHistoryResponse.decode(buffer);
};

/**
 * Get ClientCountRoomHistoryResponse response.
 * @memberof ProtoClientCountRoomHistoryResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.ClientCountRoomHistoryResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set ClientCountRoomHistoryResponse response.
 * @memberof ProtoClientCountRoomHistoryResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.ClientCountRoomHistoryResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get ClientCountRoomHistoryResponse media.
 * @memberof ProtoClientCountRoomHistoryResponse
 * @return {number}
 */
proto.proto.ClientCountRoomHistoryResponse.prototype.getMedia = function() {
  return this.media;
};

/**
 * Set ClientCountRoomHistoryResponse media.
 * @memberof ProtoClientCountRoomHistoryResponse
 * @param {number} value
 */
proto.proto.ClientCountRoomHistoryResponse.prototype.setMedia = function(value) {
  this.media = value;
};

/**
 * Get ClientCountRoomHistoryResponse image.
 * @memberof ProtoClientCountRoomHistoryResponse
 * @return {number}
 */
proto.proto.ClientCountRoomHistoryResponse.prototype.getImage = function() {
  return this.image;
};

/**
 * Set ClientCountRoomHistoryResponse image.
 * @memberof ProtoClientCountRoomHistoryResponse
 * @param {number} value
 */
proto.proto.ClientCountRoomHistoryResponse.prototype.setImage = function(value) {
  this.image = value;
};

/**
 * Get ClientCountRoomHistoryResponse video.
 * @memberof ProtoClientCountRoomHistoryResponse
 * @return {number}
 */
proto.proto.ClientCountRoomHistoryResponse.prototype.getVideo = function() {
  return this.video;
};

/**
 * Set ClientCountRoomHistoryResponse video.
 * @memberof ProtoClientCountRoomHistoryResponse
 * @param {number} value
 */
proto.proto.ClientCountRoomHistoryResponse.prototype.setVideo = function(value) {
  this.video = value;
};

/**
 * Get ClientCountRoomHistoryResponse audio.
 * @memberof ProtoClientCountRoomHistoryResponse
 * @return {number}
 */
proto.proto.ClientCountRoomHistoryResponse.prototype.getAudio = function() {
  return this.audio;
};

/**
 * Set ClientCountRoomHistoryResponse audio.
 * @memberof ProtoClientCountRoomHistoryResponse
 * @param {number} value
 */
proto.proto.ClientCountRoomHistoryResponse.prototype.setAudio = function(value) {
  this.audio = value;
};

/**
 * Get ClientCountRoomHistoryResponse voice.
 * @memberof ProtoClientCountRoomHistoryResponse
 * @return {number}
 */
proto.proto.ClientCountRoomHistoryResponse.prototype.getVoice = function() {
  return this.voice;
};

/**
 * Set ClientCountRoomHistoryResponse voice.
 * @memberof ProtoClientCountRoomHistoryResponse
 * @param {number} value
 */
proto.proto.ClientCountRoomHistoryResponse.prototype.setVoice = function(value) {
  this.voice = value;
};

/**
 * Get ClientCountRoomHistoryResponse gif.
 * @memberof ProtoClientCountRoomHistoryResponse
 * @return {number}
 */
proto.proto.ClientCountRoomHistoryResponse.prototype.getGif = function() {
  return this.gif;
};

/**
 * Set ClientCountRoomHistoryResponse gif.
 * @memberof ProtoClientCountRoomHistoryResponse
 * @param {number} value
 */
proto.proto.ClientCountRoomHistoryResponse.prototype.setGif = function(value) {
  this.gif = value;
};

/**
 * Get ClientCountRoomHistoryResponse file.
 * @memberof ProtoClientCountRoomHistoryResponse
 * @return {number}
 */
proto.proto.ClientCountRoomHistoryResponse.prototype.getFile = function() {
  return this.file;
};

/**
 * Set ClientCountRoomHistoryResponse file.
 * @memberof ProtoClientCountRoomHistoryResponse
 * @param {number} value
 */
proto.proto.ClientCountRoomHistoryResponse.prototype.setFile = function(value) {
  this.file = value;
};

/**
 * Get ClientCountRoomHistoryResponse url.
 * @memberof ProtoClientCountRoomHistoryResponse
 * @return {number}
 */
proto.proto.ClientCountRoomHistoryResponse.prototype.getUrl = function() {
  return this.url;
};

/**
 * Set ClientCountRoomHistoryResponse url.
 * @memberof ProtoClientCountRoomHistoryResponse
 * @param {number} value
 */
proto.proto.ClientCountRoomHistoryResponse.prototype.setUrl = function(value) {
  this.url = value;
};

/**
 * @interface ProtoClientGetRoom
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ClientGetRoom.prototype.serializeBinary = function() {
  return proto.proto.ClientGetRoom.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoClientGetRoom}
 */
proto.proto.ClientGetRoom.deserializeBinary = function(buffer) {
  return proto.proto.ClientGetRoom.decode(buffer);
};

/**
 * Get ClientGetRoom request.
 * @memberof ProtoClientGetRoom
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.ClientGetRoom.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set ClientGetRoom request.
 * @memberof ProtoClientGetRoom
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.ClientGetRoom.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get ClientGetRoom roomId.
 * @memberof ProtoClientGetRoom
 * @return {Long}
 */
proto.proto.ClientGetRoom.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ClientGetRoom roomId.
 * @memberof ProtoClientGetRoom
 * @param {Long} value
 */
proto.proto.ClientGetRoom.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * @interface ProtoClientGetRoomResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ClientGetRoomResponse.prototype.serializeBinary = function() {
  return proto.proto.ClientGetRoomResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoClientGetRoomResponse}
 */
proto.proto.ClientGetRoomResponse.deserializeBinary = function(buffer) {
  return proto.proto.ClientGetRoomResponse.decode(buffer);
};

/**
 * Get ClientGetRoomResponse response.
 * @memberof ProtoClientGetRoomResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.ClientGetRoomResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set ClientGetRoomResponse response.
 * @memberof ProtoClientGetRoomResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.ClientGetRoomResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get ClientGetRoomResponse room.
 * @memberof ProtoClientGetRoomResponse
 * @return {(ProtoRoom|null|undefined)}
 */
proto.proto.ClientGetRoomResponse.prototype.getRoom = function() {
  return this.room;
};

/**
 * Set ClientGetRoomResponse room.
 * @memberof ProtoClientGetRoomResponse
 * @param {(ProtoRoom|null|undefined)} value
 */
proto.proto.ClientGetRoomResponse.prototype.setRoom = function(value) {
  this.room = value;
};

/**
 * @interface ProtoClientGetRoomHistory
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ClientGetRoomHistory.prototype.serializeBinary = function() {
  return proto.proto.ClientGetRoomHistory.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoClientGetRoomHistory}
 */
proto.proto.ClientGetRoomHistory.deserializeBinary = function(buffer) {
  return proto.proto.ClientGetRoomHistory.decode(buffer);
};

/**
 * Get ClientGetRoomHistory request.
 * @memberof ProtoClientGetRoomHistory
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.ClientGetRoomHistory.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set ClientGetRoomHistory request.
 * @memberof ProtoClientGetRoomHistory
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.ClientGetRoomHistory.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get ClientGetRoomHistory roomId.
 * @memberof ProtoClientGetRoomHistory
 * @return {Long}
 */
proto.proto.ClientGetRoomHistory.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ClientGetRoomHistory roomId.
 * @memberof ProtoClientGetRoomHistory
 * @param {Long} value
 */
proto.proto.ClientGetRoomHistory.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get ClientGetRoomHistory firstMessageId.
 * @memberof ProtoClientGetRoomHistory
 * @return {Long}
 */
proto.proto.ClientGetRoomHistory.prototype.getFirstMessageId = function() {
  return this.firstMessageId;
};

/**
 * Set ClientGetRoomHistory firstMessageId.
 * @memberof ProtoClientGetRoomHistory
 * @param {Long} value
 */
proto.proto.ClientGetRoomHistory.prototype.setFirstMessageId = function(value) {
  this.firstMessageId = value;
};

/**
 * Get ClientGetRoomHistory direction.
 * @memberof ProtoClientGetRoomHistory
 * @return {ProtoClientGetRoomHistory_Direction}
 */
proto.proto.ClientGetRoomHistory.prototype.getDirection = function() {
  return this.direction;
};

/**
 * Set ClientGetRoomHistory direction.
 * @memberof ProtoClientGetRoomHistory
 * @param {ProtoClientGetRoomHistory_Direction} value
 */
proto.proto.ClientGetRoomHistory.prototype.setDirection = function(value) {
  this.direction = value;
};

/**
 * Get ClientGetRoomHistory limit.
 * @memberof ProtoClientGetRoomHistory
 * @return {number}
 */
proto.proto.ClientGetRoomHistory.prototype.getLimit = function() {
  return this.limit;
};

/**
 * Set ClientGetRoomHistory limit.
 * @memberof ProtoClientGetRoomHistory
 * @param {number} value
 */
proto.proto.ClientGetRoomHistory.prototype.setLimit = function(value) {
  this.limit = value;
};

/**
 * @typedef {number} ProtoClientGetRoomHistory_Direction
 */

/**
 * Direction enum.
 * @enum {ProtoClientGetRoomHistory_Direction}
 * @memberof ProtoClientGetRoomHistory
 */
proto.proto.ClientGetRoomHistory.Direction = proto.proto.ClientGetRoomHistory.prototype.Direction = {
  UP : 0,
  DOWN : 1,
};

/**
 * @interface ProtoClientGetRoomHistoryResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ClientGetRoomHistoryResponse.prototype.serializeBinary = function() {
  return proto.proto.ClientGetRoomHistoryResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoClientGetRoomHistoryResponse}
 */
proto.proto.ClientGetRoomHistoryResponse.deserializeBinary = function(buffer) {
  return proto.proto.ClientGetRoomHistoryResponse.decode(buffer);
};

/**
 * Get ClientGetRoomHistoryResponse response.
 * @memberof ProtoClientGetRoomHistoryResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.ClientGetRoomHistoryResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set ClientGetRoomHistoryResponse response.
 * @memberof ProtoClientGetRoomHistoryResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.ClientGetRoomHistoryResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get ClientGetRoomHistoryResponse message.
 * @memberof ProtoClientGetRoomHistoryResponse
 * @return {Array.<ProtoRoomMessage>}
 */
proto.proto.ClientGetRoomHistoryResponse.prototype.getMessageList = function() {
  return this.message;
};

/**
 * Set ClientGetRoomHistoryResponse message.
 * @memberof ProtoClientGetRoomHistoryResponse
 * @param {Array.<ProtoRoomMessage>} value
 */
proto.proto.ClientGetRoomHistoryResponse.prototype.setMessageList = function(value) {
  this.message = value;
};

/**
 * @interface ProtoClientGetRoomList
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ClientGetRoomList.prototype.serializeBinary = function() {
  return proto.proto.ClientGetRoomList.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoClientGetRoomList}
 */
proto.proto.ClientGetRoomList.deserializeBinary = function(buffer) {
  return proto.proto.ClientGetRoomList.decode(buffer);
};

/**
 * Get ClientGetRoomList request.
 * @memberof ProtoClientGetRoomList
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.ClientGetRoomList.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set ClientGetRoomList request.
 * @memberof ProtoClientGetRoomList
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.ClientGetRoomList.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get ClientGetRoomList pagination.
 * @memberof ProtoClientGetRoomList
 * @return {(ProtoPagination|null|undefined)}
 */
proto.proto.ClientGetRoomList.prototype.getPagination = function() {
  return this.pagination;
};

/**
 * Set ClientGetRoomList pagination.
 * @memberof ProtoClientGetRoomList
 * @param {(ProtoPagination|null|undefined)} value
 */
proto.proto.ClientGetRoomList.prototype.setPagination = function(value) {
  this.pagination = value;
};

/**
 * @interface ProtoClientGetRoomListResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ClientGetRoomListResponse.prototype.serializeBinary = function() {
  return proto.proto.ClientGetRoomListResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoClientGetRoomListResponse}
 */
proto.proto.ClientGetRoomListResponse.deserializeBinary = function(buffer) {
  return proto.proto.ClientGetRoomListResponse.decode(buffer);
};

/**
 * Get ClientGetRoomListResponse response.
 * @memberof ProtoClientGetRoomListResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.ClientGetRoomListResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set ClientGetRoomListResponse response.
 * @memberof ProtoClientGetRoomListResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.ClientGetRoomListResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get ClientGetRoomListResponse rooms.
 * @memberof ProtoClientGetRoomListResponse
 * @return {Array.<ProtoRoom>}
 */
proto.proto.ClientGetRoomListResponse.prototype.getRoomsList = function() {
  return this.rooms;
};

/**
 * Set ClientGetRoomListResponse rooms.
 * @memberof ProtoClientGetRoomListResponse
 * @param {Array.<ProtoRoom>} value
 */
proto.proto.ClientGetRoomListResponse.prototype.setRoomsList = function(value) {
  this.rooms = value;
};

/**
 * @interface ProtoClientGetRoomMessage
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ClientGetRoomMessage.prototype.serializeBinary = function() {
  return proto.proto.ClientGetRoomMessage.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoClientGetRoomMessage}
 */
proto.proto.ClientGetRoomMessage.deserializeBinary = function(buffer) {
  return proto.proto.ClientGetRoomMessage.decode(buffer);
};

/**
 * Get ClientGetRoomMessage request.
 * @memberof ProtoClientGetRoomMessage
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.ClientGetRoomMessage.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set ClientGetRoomMessage request.
 * @memberof ProtoClientGetRoomMessage
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.ClientGetRoomMessage.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get ClientGetRoomMessage roomId.
 * @memberof ProtoClientGetRoomMessage
 * @return {Long}
 */
proto.proto.ClientGetRoomMessage.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ClientGetRoomMessage roomId.
 * @memberof ProtoClientGetRoomMessage
 * @param {Long} value
 */
proto.proto.ClientGetRoomMessage.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get ClientGetRoomMessage messageId.
 * @memberof ProtoClientGetRoomMessage
 * @return {Long}
 */
proto.proto.ClientGetRoomMessage.prototype.getMessageId = function() {
  return this.messageId;
};

/**
 * Set ClientGetRoomMessage messageId.
 * @memberof ProtoClientGetRoomMessage
 * @param {Long} value
 */
proto.proto.ClientGetRoomMessage.prototype.setMessageId = function(value) {
  this.messageId = value;
};

/**
 * @interface ProtoClientGetRoomMessageResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ClientGetRoomMessageResponse.prototype.serializeBinary = function() {
  return proto.proto.ClientGetRoomMessageResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoClientGetRoomMessageResponse}
 */
proto.proto.ClientGetRoomMessageResponse.deserializeBinary = function(buffer) {
  return proto.proto.ClientGetRoomMessageResponse.decode(buffer);
};

/**
 * Get ClientGetRoomMessageResponse response.
 * @memberof ProtoClientGetRoomMessageResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.ClientGetRoomMessageResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set ClientGetRoomMessageResponse response.
 * @memberof ProtoClientGetRoomMessageResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.ClientGetRoomMessageResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get ClientGetRoomMessageResponse message.
 * @memberof ProtoClientGetRoomMessageResponse
 * @return {(ProtoRoomMessage|null|undefined)}
 */
proto.proto.ClientGetRoomMessageResponse.prototype.getMessage = function() {
  return this.message;
};

/**
 * Set ClientGetRoomMessageResponse message.
 * @memberof ProtoClientGetRoomMessageResponse
 * @param {(ProtoRoomMessage|null|undefined)} value
 */
proto.proto.ClientGetRoomMessageResponse.prototype.setMessage = function(value) {
  this.message = value;
};

/**
 * @interface ProtoClientJoinByInviteLink
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ClientJoinByInviteLink.prototype.serializeBinary = function() {
  return proto.proto.ClientJoinByInviteLink.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoClientJoinByInviteLink}
 */
proto.proto.ClientJoinByInviteLink.deserializeBinary = function(buffer) {
  return proto.proto.ClientJoinByInviteLink.decode(buffer);
};

/**
 * Get ClientJoinByInviteLink request.
 * @memberof ProtoClientJoinByInviteLink
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.ClientJoinByInviteLink.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set ClientJoinByInviteLink request.
 * @memberof ProtoClientJoinByInviteLink
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.ClientJoinByInviteLink.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get ClientJoinByInviteLink inviteToken.
 * @memberof ProtoClientJoinByInviteLink
 * @return {string}
 */
proto.proto.ClientJoinByInviteLink.prototype.getInviteToken = function() {
  return this.inviteToken;
};

/**
 * Set ClientJoinByInviteLink inviteToken.
 * @memberof ProtoClientJoinByInviteLink
 * @param {string} value
 */
proto.proto.ClientJoinByInviteLink.prototype.setInviteToken = function(value) {
  this.inviteToken = value;
};

/**
 * @interface ProtoClientJoinByInviteLinkResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ClientJoinByInviteLinkResponse.prototype.serializeBinary = function() {
  return proto.proto.ClientJoinByInviteLinkResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoClientJoinByInviteLinkResponse}
 */
proto.proto.ClientJoinByInviteLinkResponse.deserializeBinary = function(buffer) {
  return proto.proto.ClientJoinByInviteLinkResponse.decode(buffer);
};

/**
 * Get ClientJoinByInviteLinkResponse response.
 * @memberof ProtoClientJoinByInviteLinkResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.ClientJoinByInviteLinkResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set ClientJoinByInviteLinkResponse response.
 * @memberof ProtoClientJoinByInviteLinkResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.ClientJoinByInviteLinkResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * @interface ProtoClientJoinByUsername
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ClientJoinByUsername.prototype.serializeBinary = function() {
  return proto.proto.ClientJoinByUsername.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoClientJoinByUsername}
 */
proto.proto.ClientJoinByUsername.deserializeBinary = function(buffer) {
  return proto.proto.ClientJoinByUsername.decode(buffer);
};

/**
 * Get ClientJoinByUsername request.
 * @memberof ProtoClientJoinByUsername
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.ClientJoinByUsername.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set ClientJoinByUsername request.
 * @memberof ProtoClientJoinByUsername
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.ClientJoinByUsername.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get ClientJoinByUsername username.
 * @memberof ProtoClientJoinByUsername
 * @return {string}
 */
proto.proto.ClientJoinByUsername.prototype.getUsername = function() {
  return this.username;
};

/**
 * Set ClientJoinByUsername username.
 * @memberof ProtoClientJoinByUsername
 * @param {string} value
 */
proto.proto.ClientJoinByUsername.prototype.setUsername = function(value) {
  this.username = value;
};

/**
 * @interface ProtoClientJoinByUsernameResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ClientJoinByUsernameResponse.prototype.serializeBinary = function() {
  return proto.proto.ClientJoinByUsernameResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoClientJoinByUsernameResponse}
 */
proto.proto.ClientJoinByUsernameResponse.deserializeBinary = function(buffer) {
  return proto.proto.ClientJoinByUsernameResponse.decode(buffer);
};

/**
 * Get ClientJoinByUsernameResponse response.
 * @memberof ProtoClientJoinByUsernameResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.ClientJoinByUsernameResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set ClientJoinByUsernameResponse response.
 * @memberof ProtoClientJoinByUsernameResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.ClientJoinByUsernameResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * @interface ProtoClientMuteRoom
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ClientMuteRoom.prototype.serializeBinary = function() {
  return proto.proto.ClientMuteRoom.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoClientMuteRoom}
 */
proto.proto.ClientMuteRoom.deserializeBinary = function(buffer) {
  return proto.proto.ClientMuteRoom.decode(buffer);
};

/**
 * Get ClientMuteRoom request.
 * @memberof ProtoClientMuteRoom
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.ClientMuteRoom.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set ClientMuteRoom request.
 * @memberof ProtoClientMuteRoom
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.ClientMuteRoom.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get ClientMuteRoom roomId.
 * @memberof ProtoClientMuteRoom
 * @return {Long}
 */
proto.proto.ClientMuteRoom.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ClientMuteRoom roomId.
 * @memberof ProtoClientMuteRoom
 * @param {Long} value
 */
proto.proto.ClientMuteRoom.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get ClientMuteRoom roomMute.
 * @memberof ProtoClientMuteRoom
 * @return {ProtoRoomMute}
 */
proto.proto.ClientMuteRoom.prototype.getRoomMute = function() {
  return this.roomMute;
};

/**
 * Set ClientMuteRoom roomMute.
 * @memberof ProtoClientMuteRoom
 * @param {ProtoRoomMute} value
 */
proto.proto.ClientMuteRoom.prototype.setRoomMute = function(value) {
  this.roomMute = value;
};

/**
 * @interface ProtoClientMuteRoomResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ClientMuteRoomResponse.prototype.serializeBinary = function() {
  return proto.proto.ClientMuteRoomResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoClientMuteRoomResponse}
 */
proto.proto.ClientMuteRoomResponse.deserializeBinary = function(buffer) {
  return proto.proto.ClientMuteRoomResponse.decode(buffer);
};

/**
 * Get ClientMuteRoomResponse response.
 * @memberof ProtoClientMuteRoomResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.ClientMuteRoomResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set ClientMuteRoomResponse response.
 * @memberof ProtoClientMuteRoomResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.ClientMuteRoomResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get ClientMuteRoomResponse roomId.
 * @memberof ProtoClientMuteRoomResponse
 * @return {Long}
 */
proto.proto.ClientMuteRoomResponse.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ClientMuteRoomResponse roomId.
 * @memberof ProtoClientMuteRoomResponse
 * @param {Long} value
 */
proto.proto.ClientMuteRoomResponse.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get ClientMuteRoomResponse roomMute.
 * @memberof ProtoClientMuteRoomResponse
 * @return {ProtoRoomMute}
 */
proto.proto.ClientMuteRoomResponse.prototype.getRoomMute = function() {
  return this.roomMute;
};

/**
 * Set ClientMuteRoomResponse roomMute.
 * @memberof ProtoClientMuteRoomResponse
 * @param {ProtoRoomMute} value
 */
proto.proto.ClientMuteRoomResponse.prototype.setRoomMute = function(value) {
  this.roomMute = value;
};

/**
 * @interface ProtoClientPinRoom
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ClientPinRoom.prototype.serializeBinary = function() {
  return proto.proto.ClientPinRoom.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoClientPinRoom}
 */
proto.proto.ClientPinRoom.deserializeBinary = function(buffer) {
  return proto.proto.ClientPinRoom.decode(buffer);
};

/**
 * Get ClientPinRoom request.
 * @memberof ProtoClientPinRoom
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.ClientPinRoom.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set ClientPinRoom request.
 * @memberof ProtoClientPinRoom
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.ClientPinRoom.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get ClientPinRoom roomId.
 * @memberof ProtoClientPinRoom
 * @return {Long}
 */
proto.proto.ClientPinRoom.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ClientPinRoom roomId.
 * @memberof ProtoClientPinRoom
 * @param {Long} value
 */
proto.proto.ClientPinRoom.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get ClientPinRoom pin.
 * @memberof ProtoClientPinRoom
 * @return {boolean}
 */
proto.proto.ClientPinRoom.prototype.getPin = function() {
  return this.pin;
};

/**
 * Set ClientPinRoom pin.
 * @memberof ProtoClientPinRoom
 * @param {boolean} value
 */
proto.proto.ClientPinRoom.prototype.setPin = function(value) {
  this.pin = value;
};

/**
 * @interface ProtoClientPinRoomResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ClientPinRoomResponse.prototype.serializeBinary = function() {
  return proto.proto.ClientPinRoomResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoClientPinRoomResponse}
 */
proto.proto.ClientPinRoomResponse.deserializeBinary = function(buffer) {
  return proto.proto.ClientPinRoomResponse.decode(buffer);
};

/**
 * Get ClientPinRoomResponse response.
 * @memberof ProtoClientPinRoomResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.ClientPinRoomResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set ClientPinRoomResponse response.
 * @memberof ProtoClientPinRoomResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.ClientPinRoomResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get ClientPinRoomResponse roomId.
 * @memberof ProtoClientPinRoomResponse
 * @return {Long}
 */
proto.proto.ClientPinRoomResponse.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ClientPinRoomResponse roomId.
 * @memberof ProtoClientPinRoomResponse
 * @param {Long} value
 */
proto.proto.ClientPinRoomResponse.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get ClientPinRoomResponse pinId.
 * @memberof ProtoClientPinRoomResponse
 * @return {Long}
 */
proto.proto.ClientPinRoomResponse.prototype.getPinId = function() {
  return this.pinId;
};

/**
 * Set ClientPinRoomResponse pinId.
 * @memberof ProtoClientPinRoomResponse
 * @param {Long} value
 */
proto.proto.ClientPinRoomResponse.prototype.setPinId = function(value) {
  this.pinId = value;
};

/**
 * @interface ProtoClientRegisterDevice
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ClientRegisterDevice.prototype.serializeBinary = function() {
  return proto.proto.ClientRegisterDevice.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoClientRegisterDevice}
 */
proto.proto.ClientRegisterDevice.deserializeBinary = function(buffer) {
  return proto.proto.ClientRegisterDevice.decode(buffer);
};

/**
 * Get ClientRegisterDevice request.
 * @memberof ProtoClientRegisterDevice
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.ClientRegisterDevice.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set ClientRegisterDevice request.
 * @memberof ProtoClientRegisterDevice
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.ClientRegisterDevice.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get ClientRegisterDevice token.
 * @memberof ProtoClientRegisterDevice
 * @return {string}
 */
proto.proto.ClientRegisterDevice.prototype.getToken = function() {
  return this.token;
};

/**
 * Set ClientRegisterDevice token.
 * @memberof ProtoClientRegisterDevice
 * @param {string} value
 */
proto.proto.ClientRegisterDevice.prototype.setToken = function(value) {
  this.token = value;
};

/**
 * Get ClientRegisterDevice type.
 * @memberof ProtoClientRegisterDevice
 * @return {ProtoClientRegisterDevice_Type}
 */
proto.proto.ClientRegisterDevice.prototype.getType = function() {
  return this.type;
};

/**
 * Set ClientRegisterDevice type.
 * @memberof ProtoClientRegisterDevice
 * @param {ProtoClientRegisterDevice_Type} value
 */
proto.proto.ClientRegisterDevice.prototype.setType = function(value) {
  this.type = value;
};

/**
 * @typedef {number} ProtoClientRegisterDevice_Type
 */

/**
 * Type enum.
 * @enum {ProtoClientRegisterDevice_Type}
 * @memberof ProtoClientRegisterDevice
 */
proto.proto.ClientRegisterDevice.Type = proto.proto.ClientRegisterDevice.prototype.Type = {
  GENERIC : 0,
  ANDROID : 1,
  IOS : 2,
  WEB : 3,
};

/**
 * @interface ProtoClientRegisterDeviceResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ClientRegisterDeviceResponse.prototype.serializeBinary = function() {
  return proto.proto.ClientRegisterDeviceResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoClientRegisterDeviceResponse}
 */
proto.proto.ClientRegisterDeviceResponse.deserializeBinary = function(buffer) {
  return proto.proto.ClientRegisterDeviceResponse.decode(buffer);
};

/**
 * Get ClientRegisterDeviceResponse response.
 * @memberof ProtoClientRegisterDeviceResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.ClientRegisterDeviceResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set ClientRegisterDeviceResponse response.
 * @memberof ProtoClientRegisterDeviceResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.ClientRegisterDeviceResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * @interface ProtoClientResolveUsername
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ClientResolveUsername.prototype.serializeBinary = function() {
  return proto.proto.ClientResolveUsername.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoClientResolveUsername}
 */
proto.proto.ClientResolveUsername.deserializeBinary = function(buffer) {
  return proto.proto.ClientResolveUsername.decode(buffer);
};

/**
 * Get ClientResolveUsername request.
 * @memberof ProtoClientResolveUsername
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.ClientResolveUsername.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set ClientResolveUsername request.
 * @memberof ProtoClientResolveUsername
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.ClientResolveUsername.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get ClientResolveUsername username.
 * @memberof ProtoClientResolveUsername
 * @return {string}
 */
proto.proto.ClientResolveUsername.prototype.getUsername = function() {
  return this.username;
};

/**
 * Set ClientResolveUsername username.
 * @memberof ProtoClientResolveUsername
 * @param {string} value
 */
proto.proto.ClientResolveUsername.prototype.setUsername = function(value) {
  this.username = value;
};

/**
 * @interface ProtoClientResolveUsernameResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ClientResolveUsernameResponse.prototype.serializeBinary = function() {
  return proto.proto.ClientResolveUsernameResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoClientResolveUsernameResponse}
 */
proto.proto.ClientResolveUsernameResponse.deserializeBinary = function(buffer) {
  return proto.proto.ClientResolveUsernameResponse.decode(buffer);
};

/**
 * Get ClientResolveUsernameResponse response.
 * @memberof ProtoClientResolveUsernameResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.ClientResolveUsernameResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set ClientResolveUsernameResponse response.
 * @memberof ProtoClientResolveUsernameResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.ClientResolveUsernameResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get ClientResolveUsernameResponse type.
 * @memberof ProtoClientResolveUsernameResponse
 * @return {ProtoClientResolveUsernameResponse_Type}
 */
proto.proto.ClientResolveUsernameResponse.prototype.getType = function() {
  return this.type;
};

/**
 * Set ClientResolveUsernameResponse type.
 * @memberof ProtoClientResolveUsernameResponse
 * @param {ProtoClientResolveUsernameResponse_Type} value
 */
proto.proto.ClientResolveUsernameResponse.prototype.setType = function(value) {
  this.type = value;
};

/**
 * Get ClientResolveUsernameResponse user.
 * @memberof ProtoClientResolveUsernameResponse
 * @return {(ProtoRegisteredUser|null|undefined)}
 */
proto.proto.ClientResolveUsernameResponse.prototype.getUser = function() {
  return this.user;
};

/**
 * Set ClientResolveUsernameResponse user.
 * @memberof ProtoClientResolveUsernameResponse
 * @param {(ProtoRegisteredUser|null|undefined)} value
 */
proto.proto.ClientResolveUsernameResponse.prototype.setUser = function(value) {
  this.user = value;
};

/**
 * Get ClientResolveUsernameResponse room.
 * @memberof ProtoClientResolveUsernameResponse
 * @return {(ProtoRoom|null|undefined)}
 */
proto.proto.ClientResolveUsernameResponse.prototype.getRoom = function() {
  return this.room;
};

/**
 * Set ClientResolveUsernameResponse room.
 * @memberof ProtoClientResolveUsernameResponse
 * @param {(ProtoRoom|null|undefined)} value
 */
proto.proto.ClientResolveUsernameResponse.prototype.setRoom = function(value) {
  this.room = value;
};

/**
 * @typedef {number} ProtoClientResolveUsernameResponse_Type
 */

/**
 * Type enum.
 * @enum {ProtoClientResolveUsernameResponse_Type}
 * @memberof ProtoClientResolveUsernameResponse
 */
proto.proto.ClientResolveUsernameResponse.Type = proto.proto.ClientResolveUsernameResponse.prototype.Type = {
  USER : 0,
  ROOM : 1,
};

/**
 * @interface ProtoClientRoomReport
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ClientRoomReport.prototype.serializeBinary = function() {
  return proto.proto.ClientRoomReport.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoClientRoomReport}
 */
proto.proto.ClientRoomReport.deserializeBinary = function(buffer) {
  return proto.proto.ClientRoomReport.decode(buffer);
};

/**
 * Get ClientRoomReport request.
 * @memberof ProtoClientRoomReport
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.ClientRoomReport.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set ClientRoomReport request.
 * @memberof ProtoClientRoomReport
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.ClientRoomReport.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get ClientRoomReport roomId.
 * @memberof ProtoClientRoomReport
 * @return {Long}
 */
proto.proto.ClientRoomReport.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ClientRoomReport roomId.
 * @memberof ProtoClientRoomReport
 * @param {Long} value
 */
proto.proto.ClientRoomReport.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get ClientRoomReport messageId.
 * @memberof ProtoClientRoomReport
 * @return {Long}
 */
proto.proto.ClientRoomReport.prototype.getMessageId = function() {
  return this.messageId;
};

/**
 * Set ClientRoomReport messageId.
 * @memberof ProtoClientRoomReport
 * @param {Long} value
 */
proto.proto.ClientRoomReport.prototype.setMessageId = function(value) {
  this.messageId = value;
};

/**
 * Get ClientRoomReport reason.
 * @memberof ProtoClientRoomReport
 * @return {ProtoClientRoomReport_Reason}
 */
proto.proto.ClientRoomReport.prototype.getReason = function() {
  return this.reason;
};

/**
 * Set ClientRoomReport reason.
 * @memberof ProtoClientRoomReport
 * @param {ProtoClientRoomReport_Reason} value
 */
proto.proto.ClientRoomReport.prototype.setReason = function(value) {
  this.reason = value;
};

/**
 * Get ClientRoomReport description.
 * @memberof ProtoClientRoomReport
 * @return {string}
 */
proto.proto.ClientRoomReport.prototype.getDescription = function() {
  return this.description;
};

/**
 * Set ClientRoomReport description.
 * @memberof ProtoClientRoomReport
 * @param {string} value
 */
proto.proto.ClientRoomReport.prototype.setDescription = function(value) {
  this.description = value;
};

/**
 * @typedef {number} ProtoClientRoomReport_Reason
 */

/**
 * Reason enum.
 * @enum {ProtoClientRoomReport_Reason}
 * @memberof ProtoClientRoomReport
 */
proto.proto.ClientRoomReport.Reason = proto.proto.ClientRoomReport.prototype.Reason = {
  OTHER : 0,
  SPAM : 1,
  PORNOGRAPHY : 2,
  VIOLENCE : 3,
  ABUSE : 4,
};

/**
 * @interface ProtoClientRoomReportResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ClientRoomReportResponse.prototype.serializeBinary = function() {
  return proto.proto.ClientRoomReportResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoClientRoomReportResponse}
 */
proto.proto.ClientRoomReportResponse.deserializeBinary = function(buffer) {
  return proto.proto.ClientRoomReportResponse.decode(buffer);
};

/**
 * Get ClientRoomReportResponse response.
 * @memberof ProtoClientRoomReportResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.ClientRoomReportResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set ClientRoomReportResponse response.
 * @memberof ProtoClientRoomReportResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.ClientRoomReportResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * @interface ProtoClientSearchRoomHistory
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ClientSearchRoomHistory.prototype.serializeBinary = function() {
  return proto.proto.ClientSearchRoomHistory.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoClientSearchRoomHistory}
 */
proto.proto.ClientSearchRoomHistory.deserializeBinary = function(buffer) {
  return proto.proto.ClientSearchRoomHistory.decode(buffer);
};

/**
 * Get ClientSearchRoomHistory request.
 * @memberof ProtoClientSearchRoomHistory
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.ClientSearchRoomHistory.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set ClientSearchRoomHistory request.
 * @memberof ProtoClientSearchRoomHistory
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.ClientSearchRoomHistory.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get ClientSearchRoomHistory roomId.
 * @memberof ProtoClientSearchRoomHistory
 * @return {Long}
 */
proto.proto.ClientSearchRoomHistory.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ClientSearchRoomHistory roomId.
 * @memberof ProtoClientSearchRoomHistory
 * @param {Long} value
 */
proto.proto.ClientSearchRoomHistory.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get ClientSearchRoomHistory offset.
 * @memberof ProtoClientSearchRoomHistory
 * @return {number}
 */
proto.proto.ClientSearchRoomHistory.prototype.getOffset = function() {
  return this.offset;
};

/**
 * Set ClientSearchRoomHistory offset.
 * @memberof ProtoClientSearchRoomHistory
 * @param {number} value
 */
proto.proto.ClientSearchRoomHistory.prototype.setOffset = function(value) {
  this.offset = value;
};

/**
 * Get ClientSearchRoomHistory filter.
 * @memberof ProtoClientSearchRoomHistory
 * @return {ProtoClientSearchRoomHistory_Filter}
 */
proto.proto.ClientSearchRoomHistory.prototype.getFilter = function() {
  return this.filter;
};

/**
 * Set ClientSearchRoomHistory filter.
 * @memberof ProtoClientSearchRoomHistory
 * @param {ProtoClientSearchRoomHistory_Filter} value
 */
proto.proto.ClientSearchRoomHistory.prototype.setFilter = function(value) {
  this.filter = value;
};

/**
 * Get ClientSearchRoomHistory offsetMessageId.
 * @memberof ProtoClientSearchRoomHistory
 * @return {Long}
 */
proto.proto.ClientSearchRoomHistory.prototype.getOffsetMessageId = function() {
  return this.offsetMessageId;
};

/**
 * Set ClientSearchRoomHistory offsetMessageId.
 * @memberof ProtoClientSearchRoomHistory
 * @param {Long} value
 */
proto.proto.ClientSearchRoomHistory.prototype.setOffsetMessageId = function(value) {
  this.offsetMessageId = value;
};

/**
 * @typedef {number} ProtoClientSearchRoomHistory_Filter
 */

/**
 * Filter enum.
 * @enum {ProtoClientSearchRoomHistory_Filter}
 * @memberof ProtoClientSearchRoomHistory
 */
proto.proto.ClientSearchRoomHistory.Filter = proto.proto.ClientSearchRoomHistory.prototype.Filter = {
  IMAGE : 0,
  VIDEO : 1,
  AUDIO : 2,
  VOICE : 3,
  GIF : 4,
  FILE : 5,
  URL : 6,
};

/**
 * @interface ProtoClientSearchRoomHistoryResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ClientSearchRoomHistoryResponse.prototype.serializeBinary = function() {
  return proto.proto.ClientSearchRoomHistoryResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoClientSearchRoomHistoryResponse}
 */
proto.proto.ClientSearchRoomHistoryResponse.deserializeBinary = function(buffer) {
  return proto.proto.ClientSearchRoomHistoryResponse.decode(buffer);
};

/**
 * Get ClientSearchRoomHistoryResponse response.
 * @memberof ProtoClientSearchRoomHistoryResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.ClientSearchRoomHistoryResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set ClientSearchRoomHistoryResponse response.
 * @memberof ProtoClientSearchRoomHistoryResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.ClientSearchRoomHistoryResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get ClientSearchRoomHistoryResponse totalCount.
 * @memberof ProtoClientSearchRoomHistoryResponse
 * @return {number}
 */
proto.proto.ClientSearchRoomHistoryResponse.prototype.getTotalCount = function() {
  return this.totalCount;
};

/**
 * Set ClientSearchRoomHistoryResponse totalCount.
 * @memberof ProtoClientSearchRoomHistoryResponse
 * @param {number} value
 */
proto.proto.ClientSearchRoomHistoryResponse.prototype.setTotalCount = function(value) {
  this.totalCount = value;
};

/**
 * Get ClientSearchRoomHistoryResponse notDeletedCount.
 * @memberof ProtoClientSearchRoomHistoryResponse
 * @return {number}
 */
proto.proto.ClientSearchRoomHistoryResponse.prototype.getNotDeletedCount = function() {
  return this.notDeletedCount;
};

/**
 * Set ClientSearchRoomHistoryResponse notDeletedCount.
 * @memberof ProtoClientSearchRoomHistoryResponse
 * @param {number} value
 */
proto.proto.ClientSearchRoomHistoryResponse.prototype.setNotDeletedCount = function(value) {
  this.notDeletedCount = value;
};

/**
 * Get ClientSearchRoomHistoryResponse result.
 * @memberof ProtoClientSearchRoomHistoryResponse
 * @return {Array.<ProtoRoomMessage>}
 */
proto.proto.ClientSearchRoomHistoryResponse.prototype.getResultList = function() {
  return this.result;
};

/**
 * Set ClientSearchRoomHistoryResponse result.
 * @memberof ProtoClientSearchRoomHistoryResponse
 * @param {Array.<ProtoRoomMessage>} value
 */
proto.proto.ClientSearchRoomHistoryResponse.prototype.setResultList = function(value) {
  this.result = value;
};

/**
 * @interface ProtoClientSearchUsername
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ClientSearchUsername.prototype.serializeBinary = function() {
  return proto.proto.ClientSearchUsername.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoClientSearchUsername}
 */
proto.proto.ClientSearchUsername.deserializeBinary = function(buffer) {
  return proto.proto.ClientSearchUsername.decode(buffer);
};

/**
 * Get ClientSearchUsername request.
 * @memberof ProtoClientSearchUsername
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.ClientSearchUsername.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set ClientSearchUsername request.
 * @memberof ProtoClientSearchUsername
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.ClientSearchUsername.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get ClientSearchUsername query.
 * @memberof ProtoClientSearchUsername
 * @return {string}
 */
proto.proto.ClientSearchUsername.prototype.getQuery = function() {
  return this.query;
};

/**
 * Set ClientSearchUsername query.
 * @memberof ProtoClientSearchUsername
 * @param {string} value
 */
proto.proto.ClientSearchUsername.prototype.setQuery = function(value) {
  this.query = value;
};

/**
 * @interface ProtoClientSearchUsernameResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ClientSearchUsernameResponse.prototype.serializeBinary = function() {
  return proto.proto.ClientSearchUsernameResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoClientSearchUsernameResponse}
 */
proto.proto.ClientSearchUsernameResponse.deserializeBinary = function(buffer) {
  return proto.proto.ClientSearchUsernameResponse.decode(buffer);
};

/**
 * Get ClientSearchUsernameResponse response.
 * @memberof ProtoClientSearchUsernameResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.ClientSearchUsernameResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set ClientSearchUsernameResponse response.
 * @memberof ProtoClientSearchUsernameResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.ClientSearchUsernameResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get ClientSearchUsernameResponse result.
 * @memberof ProtoClientSearchUsernameResponse
 * @return {Array.<ProtoClientSearchUsernameResponse_Result>}
 */
proto.proto.ClientSearchUsernameResponse.prototype.getResultList = function() {
  return this.result;
};

/**
 * Set ClientSearchUsernameResponse result.
 * @memberof ProtoClientSearchUsernameResponse
 * @param {Array.<ProtoClientSearchUsernameResponse_Result>} value
 */
proto.proto.ClientSearchUsernameResponse.prototype.setResultList = function(value) {
  this.result = value;
};

/**
 * @interface ProtoClientSearchUsernameResponse_Result
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ClientSearchUsernameResponse.Result.prototype.serializeBinary = function() {
  return proto.proto.ClientSearchUsernameResponse.Result.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoClientSearchUsernameResponse_Result}
 */
proto.proto.ClientSearchUsernameResponse.Result.deserializeBinary = function(buffer) {
  return proto.proto.ClientSearchUsernameResponse.Result.decode(buffer);
};

/**
 * Get Result type.
 * @memberof ProtoClientSearchUsernameResponse_Result
 * @return {ProtoClientSearchUsernameResponse_Result_Type}
 */
proto.proto.ClientSearchUsernameResponse.Result.prototype.getType = function() {
  return this.type;
};

/**
 * Set Result type.
 * @memberof ProtoClientSearchUsernameResponse_Result
 * @param {ProtoClientSearchUsernameResponse_Result_Type} value
 */
proto.proto.ClientSearchUsernameResponse.Result.prototype.setType = function(value) {
  this.type = value;
};

/**
 * Get Result exactMatch.
 * @memberof ProtoClientSearchUsernameResponse_Result
 * @return {boolean}
 */
proto.proto.ClientSearchUsernameResponse.Result.prototype.getExactMatch = function() {
  return this.exactMatch;
};

/**
 * Set Result exactMatch.
 * @memberof ProtoClientSearchUsernameResponse_Result
 * @param {boolean} value
 */
proto.proto.ClientSearchUsernameResponse.Result.prototype.setExactMatch = function(value) {
  this.exactMatch = value;
};

/**
 * Get Result user.
 * @memberof ProtoClientSearchUsernameResponse_Result
 * @return {(ProtoRegisteredUser|null|undefined)}
 */
proto.proto.ClientSearchUsernameResponse.Result.prototype.getUser = function() {
  return this.user;
};

/**
 * Set Result user.
 * @memberof ProtoClientSearchUsernameResponse_Result
 * @param {(ProtoRegisteredUser|null|undefined)} value
 */
proto.proto.ClientSearchUsernameResponse.Result.prototype.setUser = function(value) {
  this.user = value;
};

/**
 * Get Result room.
 * @memberof ProtoClientSearchUsernameResponse_Result
 * @return {(ProtoRoom|null|undefined)}
 */
proto.proto.ClientSearchUsernameResponse.Result.prototype.getRoom = function() {
  return this.room;
};

/**
 * Set Result room.
 * @memberof ProtoClientSearchUsernameResponse_Result
 * @param {(ProtoRoom|null|undefined)} value
 */
proto.proto.ClientSearchUsernameResponse.Result.prototype.setRoom = function(value) {
  this.room = value;
};

/**
 * @typedef {number} ProtoClientSearchUsernameResponse_Result_Type
 */

/**
 * Type enum.
 * @enum {ProtoClientSearchUsernameResponse_Result_Type}
 * @memberof ProtoClientSearchUsernameResponse_Result
 */
proto.proto.ClientSearchUsernameResponse.Result.Type = proto.proto.ClientSearchUsernameResponse.Result.prototype.Type = {
  USER : 0,
  ROOM : 1,
};

/**
 * @interface ProtoClientSubscribeToRoom
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ClientSubscribeToRoom.prototype.serializeBinary = function() {
  return proto.proto.ClientSubscribeToRoom.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoClientSubscribeToRoom}
 */
proto.proto.ClientSubscribeToRoom.deserializeBinary = function(buffer) {
  return proto.proto.ClientSubscribeToRoom.decode(buffer);
};

/**
 * Get ClientSubscribeToRoom request.
 * @memberof ProtoClientSubscribeToRoom
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.ClientSubscribeToRoom.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set ClientSubscribeToRoom request.
 * @memberof ProtoClientSubscribeToRoom
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.ClientSubscribeToRoom.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get ClientSubscribeToRoom roomId.
 * @memberof ProtoClientSubscribeToRoom
 * @return {Long}
 */
proto.proto.ClientSubscribeToRoom.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ClientSubscribeToRoom roomId.
 * @memberof ProtoClientSubscribeToRoom
 * @param {Long} value
 */
proto.proto.ClientSubscribeToRoom.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * @interface ProtoClientSubscribeToRoomResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ClientSubscribeToRoomResponse.prototype.serializeBinary = function() {
  return proto.proto.ClientSubscribeToRoomResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoClientSubscribeToRoomResponse}
 */
proto.proto.ClientSubscribeToRoomResponse.deserializeBinary = function(buffer) {
  return proto.proto.ClientSubscribeToRoomResponse.decode(buffer);
};

/**
 * Get ClientSubscribeToRoomResponse response.
 * @memberof ProtoClientSubscribeToRoomResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.ClientSubscribeToRoomResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set ClientSubscribeToRoomResponse response.
 * @memberof ProtoClientSubscribeToRoomResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.ClientSubscribeToRoomResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * @interface ProtoClientUnsubscribeFromRoom
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ClientUnsubscribeFromRoom.prototype.serializeBinary = function() {
  return proto.proto.ClientUnsubscribeFromRoom.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoClientUnsubscribeFromRoom}
 */
proto.proto.ClientUnsubscribeFromRoom.deserializeBinary = function(buffer) {
  return proto.proto.ClientUnsubscribeFromRoom.decode(buffer);
};

/**
 * Get ClientUnsubscribeFromRoom request.
 * @memberof ProtoClientUnsubscribeFromRoom
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.ClientUnsubscribeFromRoom.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set ClientUnsubscribeFromRoom request.
 * @memberof ProtoClientUnsubscribeFromRoom
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.ClientUnsubscribeFromRoom.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get ClientUnsubscribeFromRoom roomId.
 * @memberof ProtoClientUnsubscribeFromRoom
 * @return {Long}
 */
proto.proto.ClientUnsubscribeFromRoom.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set ClientUnsubscribeFromRoom roomId.
 * @memberof ProtoClientUnsubscribeFromRoom
 * @param {Long} value
 */
proto.proto.ClientUnsubscribeFromRoom.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * @interface ProtoClientUnsubscribeFromRoomResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ClientUnsubscribeFromRoomResponse.prototype.serializeBinary = function() {
  return proto.proto.ClientUnsubscribeFromRoomResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoClientUnsubscribeFromRoomResponse}
 */
proto.proto.ClientUnsubscribeFromRoomResponse.deserializeBinary = function(buffer) {
  return proto.proto.ClientUnsubscribeFromRoomResponse.decode(buffer);
};

/**
 * Get ClientUnsubscribeFromRoomResponse response.
 * @memberof ProtoClientUnsubscribeFromRoomResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.ClientUnsubscribeFromRoomResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set ClientUnsubscribeFromRoomResponse response.
 * @memberof ProtoClientUnsubscribeFromRoomResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.ClientUnsubscribeFromRoomResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * @interface ProtoConnectionSecuringResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ConnectionSecuringResponse.prototype.serializeBinary = function() {
  return proto.proto.ConnectionSecuringResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoConnectionSecuringResponse}
 */
proto.proto.ConnectionSecuringResponse.deserializeBinary = function(buffer) {
  return proto.proto.ConnectionSecuringResponse.decode(buffer);
};

/**
 * Get ConnectionSecuringResponse response.
 * @memberof ProtoConnectionSecuringResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.ConnectionSecuringResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set ConnectionSecuringResponse response.
 * @memberof ProtoConnectionSecuringResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.ConnectionSecuringResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get ConnectionSecuringResponse publicKey.
 * @memberof ProtoConnectionSecuringResponse
 * @return {string}
 */
proto.proto.ConnectionSecuringResponse.prototype.getPublicKey = function() {
  return this.publicKey;
};

/**
 * Set ConnectionSecuringResponse publicKey.
 * @memberof ProtoConnectionSecuringResponse
 * @param {string} value
 */
proto.proto.ConnectionSecuringResponse.prototype.setPublicKey = function(value) {
  this.publicKey = value;
};

/**
 * Get ConnectionSecuringResponse symmetricKeyLength.
 * @memberof ProtoConnectionSecuringResponse
 * @return {number}
 */
proto.proto.ConnectionSecuringResponse.prototype.getSymmetricKeyLength = function() {
  return this.symmetricKeyLength;
};

/**
 * Set ConnectionSecuringResponse symmetricKeyLength.
 * @memberof ProtoConnectionSecuringResponse
 * @param {number} value
 */
proto.proto.ConnectionSecuringResponse.prototype.setSymmetricKeyLength = function(value) {
  this.symmetricKeyLength = value;
};

/**
 * Get ConnectionSecuringResponse heartbeatInterval.
 * @memberof ProtoConnectionSecuringResponse
 * @return {number}
 */
proto.proto.ConnectionSecuringResponse.prototype.getHeartbeatInterval = function() {
  return this.heartbeatInterval;
};

/**
 * Set ConnectionSecuringResponse heartbeatInterval.
 * @memberof ProtoConnectionSecuringResponse
 * @param {number} value
 */
proto.proto.ConnectionSecuringResponse.prototype.setHeartbeatInterval = function(value) {
  this.heartbeatInterval = value;
};

/**
 * Get ConnectionSecuringResponse primaryNodeName.
 * @memberof ProtoConnectionSecuringResponse
 * @return {string}
 */
proto.proto.ConnectionSecuringResponse.prototype.getPrimaryNodeName = function() {
  return this.primaryNodeName;
};

/**
 * Set ConnectionSecuringResponse primaryNodeName.
 * @memberof ProtoConnectionSecuringResponse
 * @param {string} value
 */
proto.proto.ConnectionSecuringResponse.prototype.setPrimaryNodeName = function(value) {
  this.primaryNodeName = value;
};

/**
 * Get ConnectionSecuringResponse secondaryChunkSize.
 * @memberof ProtoConnectionSecuringResponse
 * @return {number}
 */
proto.proto.ConnectionSecuringResponse.prototype.getSecondaryChunkSize = function() {
  return this.secondaryChunkSize;
};

/**
 * Set ConnectionSecuringResponse secondaryChunkSize.
 * @memberof ProtoConnectionSecuringResponse
 * @param {number} value
 */
proto.proto.ConnectionSecuringResponse.prototype.setSecondaryChunkSize = function(value) {
  this.secondaryChunkSize = value;
};

/**
 * @interface ProtoConnectionSymmetricKey
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ConnectionSymmetricKey.prototype.serializeBinary = function() {
  return proto.proto.ConnectionSymmetricKey.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoConnectionSymmetricKey}
 */
proto.proto.ConnectionSymmetricKey.deserializeBinary = function(buffer) {
  return proto.proto.ConnectionSymmetricKey.decode(buffer);
};

/**
 * Get ConnectionSymmetricKey request.
 * @memberof ProtoConnectionSymmetricKey
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.ConnectionSymmetricKey.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set ConnectionSymmetricKey request.
 * @memberof ProtoConnectionSymmetricKey
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.ConnectionSymmetricKey.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get ConnectionSymmetricKey symmetricKey.
 * @memberof ProtoConnectionSymmetricKey
 * @return {Uint8Array}
 */
proto.proto.ConnectionSymmetricKey.prototype.getSymmetricKey = function() {
  return this.symmetricKey;
};

/**
 * Set ConnectionSymmetricKey symmetricKey.
 * @memberof ProtoConnectionSymmetricKey
 * @param {Uint8Array} value
 */
proto.proto.ConnectionSymmetricKey.prototype.setSymmetricKey = function(value) {
  this.symmetricKey = value;
};

/**
 * Get ConnectionSymmetricKey version.
 * @memberof ProtoConnectionSymmetricKey
 * @return {number}
 */
proto.proto.ConnectionSymmetricKey.prototype.getVersion = function() {
  return this.version;
};

/**
 * Set ConnectionSymmetricKey version.
 * @memberof ProtoConnectionSymmetricKey
 * @param {number} value
 */
proto.proto.ConnectionSymmetricKey.prototype.setVersion = function(value) {
  this.version = value;
};

/**
 * @interface ProtoConnectionSymmetricKeyResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ConnectionSymmetricKeyResponse.prototype.serializeBinary = function() {
  return proto.proto.ConnectionSymmetricKeyResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoConnectionSymmetricKeyResponse}
 */
proto.proto.ConnectionSymmetricKeyResponse.deserializeBinary = function(buffer) {
  return proto.proto.ConnectionSymmetricKeyResponse.decode(buffer);
};

/**
 * Get ConnectionSymmetricKeyResponse response.
 * @memberof ProtoConnectionSymmetricKeyResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.ConnectionSymmetricKeyResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set ConnectionSymmetricKeyResponse response.
 * @memberof ProtoConnectionSymmetricKeyResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.ConnectionSymmetricKeyResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get ConnectionSymmetricKeyResponse status.
 * @memberof ProtoConnectionSymmetricKeyResponse
 * @return {ProtoConnectionSymmetricKeyResponse_Status}
 */
proto.proto.ConnectionSymmetricKeyResponse.prototype.getStatus = function() {
  return this.status;
};

/**
 * Set ConnectionSymmetricKeyResponse status.
 * @memberof ProtoConnectionSymmetricKeyResponse
 * @param {ProtoConnectionSymmetricKeyResponse_Status} value
 */
proto.proto.ConnectionSymmetricKeyResponse.prototype.setStatus = function(value) {
  this.status = value;
};

/**
 * Get ConnectionSymmetricKeyResponse symmetricMethod.
 * @memberof ProtoConnectionSymmetricKeyResponse
 * @return {string}
 */
proto.proto.ConnectionSymmetricKeyResponse.prototype.getSymmetricMethod = function() {
  return this.symmetricMethod;
};

/**
 * Set ConnectionSymmetricKeyResponse symmetricMethod.
 * @memberof ProtoConnectionSymmetricKeyResponse
 * @param {string} value
 */
proto.proto.ConnectionSymmetricKeyResponse.prototype.setSymmetricMethod = function(value) {
  this.symmetricMethod = value;
};

/**
 * Get ConnectionSymmetricKeyResponse symmetricIvSize.
 * @memberof ProtoConnectionSymmetricKeyResponse
 * @return {number}
 */
proto.proto.ConnectionSymmetricKeyResponse.prototype.getSymmetricIvSize = function() {
  return this.symmetricIvSize;
};

/**
 * Set ConnectionSymmetricKeyResponse symmetricIvSize.
 * @memberof ProtoConnectionSymmetricKeyResponse
 * @param {number} value
 */
proto.proto.ConnectionSymmetricKeyResponse.prototype.setSymmetricIvSize = function(value) {
  this.symmetricIvSize = value;
};

/**
 * Get ConnectionSymmetricKeyResponse securityIssue.
 * @memberof ProtoConnectionSymmetricKeyResponse
 * @return {boolean}
 */
proto.proto.ConnectionSymmetricKeyResponse.prototype.getSecurityIssue = function() {
  return this.securityIssue;
};

/**
 * Set ConnectionSymmetricKeyResponse securityIssue.
 * @memberof ProtoConnectionSymmetricKeyResponse
 * @param {boolean} value
 */
proto.proto.ConnectionSymmetricKeyResponse.prototype.setSecurityIssue = function(value) {
  this.securityIssue = value;
};

/**
 * @typedef {number} ProtoConnectionSymmetricKeyResponse_Status
 */

/**
 * Status enum.
 * @enum {ProtoConnectionSymmetricKeyResponse_Status}
 * @memberof ProtoConnectionSymmetricKeyResponse
 */
proto.proto.ConnectionSymmetricKeyResponse.Status = proto.proto.ConnectionSymmetricKeyResponse.prototype.Status = {
  REJECTED : 0,
  ACCEPTED : 1,
};

/**
 * @interface ProtoErrorResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.ErrorResponse.prototype.serializeBinary = function() {
  return proto.proto.ErrorResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoErrorResponse}
 */
proto.proto.ErrorResponse.deserializeBinary = function(buffer) {
  return proto.proto.ErrorResponse.decode(buffer);
};

/**
 * Get ErrorResponse response.
 * @memberof ProtoErrorResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.ErrorResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set ErrorResponse response.
 * @memberof ProtoErrorResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.ErrorResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get ErrorResponse majorCode.
 * @memberof ProtoErrorResponse
 * @return {number}
 */
proto.proto.ErrorResponse.prototype.getMajorCode = function() {
  return this.majorCode;
};

/**
 * Set ErrorResponse majorCode.
 * @memberof ProtoErrorResponse
 * @param {number} value
 */
proto.proto.ErrorResponse.prototype.setMajorCode = function(value) {
  this.majorCode = value;
};

/**
 * Get ErrorResponse minorCode.
 * @memberof ProtoErrorResponse
 * @return {number}
 */
proto.proto.ErrorResponse.prototype.getMinorCode = function() {
  return this.minorCode;
};

/**
 * Set ErrorResponse minorCode.
 * @memberof ProtoErrorResponse
 * @param {number} value
 */
proto.proto.ErrorResponse.prototype.setMinorCode = function(value) {
  this.minorCode = value;
};

/**
 * Get ErrorResponse wait.
 * @memberof ProtoErrorResponse
 * @return {number}
 */
proto.proto.ErrorResponse.prototype.getWait = function() {
  return this.wait;
};

/**
 * Set ErrorResponse wait.
 * @memberof ProtoErrorResponse
 * @param {number} value
 */
proto.proto.ErrorResponse.prototype.setWait = function(value) {
  this.wait = value;
};

/**
 * Get ErrorResponse message.
 * @memberof ProtoErrorResponse
 * @return {string}
 */
proto.proto.ErrorResponse.prototype.getMessage = function() {
  return this.message;
};

/**
 * Set ErrorResponse message.
 * @memberof ProtoErrorResponse
 * @param {string} value
 */
proto.proto.ErrorResponse.prototype.setMessage = function(value) {
  this.message = value;
};

/**
 * @interface ProtoFileDownload
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.FileDownload.prototype.serializeBinary = function() {
  return proto.proto.FileDownload.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoFileDownload}
 */
proto.proto.FileDownload.deserializeBinary = function(buffer) {
  return proto.proto.FileDownload.decode(buffer);
};

/**
 * Get FileDownload request.
 * @memberof ProtoFileDownload
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.FileDownload.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set FileDownload request.
 * @memberof ProtoFileDownload
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.FileDownload.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get FileDownload token.
 * @memberof ProtoFileDownload
 * @return {string}
 */
proto.proto.FileDownload.prototype.getToken = function() {
  return this.token;
};

/**
 * Set FileDownload token.
 * @memberof ProtoFileDownload
 * @param {string} value
 */
proto.proto.FileDownload.prototype.setToken = function(value) {
  this.token = value;
};

/**
 * Get FileDownload offset.
 * @memberof ProtoFileDownload
 * @return {Long}
 */
proto.proto.FileDownload.prototype.getOffset = function() {
  return this.offset;
};

/**
 * Set FileDownload offset.
 * @memberof ProtoFileDownload
 * @param {Long} value
 */
proto.proto.FileDownload.prototype.setOffset = function(value) {
  this.offset = value;
};

/**
 * Get FileDownload maxLimit.
 * @memberof ProtoFileDownload
 * @return {number}
 */
proto.proto.FileDownload.prototype.getMaxLimit = function() {
  return this.maxLimit;
};

/**
 * Set FileDownload maxLimit.
 * @memberof ProtoFileDownload
 * @param {number} value
 */
proto.proto.FileDownload.prototype.setMaxLimit = function(value) {
  this.maxLimit = value;
};

/**
 * Get FileDownload selector.
 * @memberof ProtoFileDownload
 * @return {ProtoFileDownload_Selector}
 */
proto.proto.FileDownload.prototype.getSelector = function() {
  return this.selector;
};

/**
 * Set FileDownload selector.
 * @memberof ProtoFileDownload
 * @param {ProtoFileDownload_Selector} value
 */
proto.proto.FileDownload.prototype.setSelector = function(value) {
  this.selector = value;
};

/**
 * @typedef {number} ProtoFileDownload_Selector
 */

/**
 * Selector enum.
 * @enum {ProtoFileDownload_Selector}
 * @memberof ProtoFileDownload
 */
proto.proto.FileDownload.Selector = proto.proto.FileDownload.prototype.Selector = {
  FILE : 0,
  SMALL_THUMBNAIL : 1,
  LARGE_THUMBNAIL : 2,
  WAVEFORM_THUMBNAIL : 3,
};

/**
 * @interface ProtoFileDownloadResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.FileDownloadResponse.prototype.serializeBinary = function() {
  return proto.proto.FileDownloadResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoFileDownloadResponse}
 */
proto.proto.FileDownloadResponse.deserializeBinary = function(buffer) {
  return proto.proto.FileDownloadResponse.decode(buffer);
};

/**
 * Get FileDownloadResponse response.
 * @memberof ProtoFileDownloadResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.FileDownloadResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set FileDownloadResponse response.
 * @memberof ProtoFileDownloadResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.FileDownloadResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get FileDownloadResponse bytes.
 * @memberof ProtoFileDownloadResponse
 * @return {Uint8Array}
 */
proto.proto.FileDownloadResponse.prototype.getBytes = function() {
  return this.bytes;
};

/**
 * Set FileDownloadResponse bytes.
 * @memberof ProtoFileDownloadResponse
 * @param {Uint8Array} value
 */
proto.proto.FileDownloadResponse.prototype.setBytes = function(value) {
  this.bytes = value;
};

/**
 * @interface ProtoFileInfo
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.FileInfo.prototype.serializeBinary = function() {
  return proto.proto.FileInfo.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoFileInfo}
 */
proto.proto.FileInfo.deserializeBinary = function(buffer) {
  return proto.proto.FileInfo.decode(buffer);
};

/**
 * Get FileInfo request.
 * @memberof ProtoFileInfo
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.FileInfo.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set FileInfo request.
 * @memberof ProtoFileInfo
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.FileInfo.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get FileInfo token.
 * @memberof ProtoFileInfo
 * @return {string}
 */
proto.proto.FileInfo.prototype.getToken = function() {
  return this.token;
};

/**
 * Set FileInfo token.
 * @memberof ProtoFileInfo
 * @param {string} value
 */
proto.proto.FileInfo.prototype.setToken = function(value) {
  this.token = value;
};

/**
 * @interface ProtoFileInfoResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.FileInfoResponse.prototype.serializeBinary = function() {
  return proto.proto.FileInfoResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoFileInfoResponse}
 */
proto.proto.FileInfoResponse.deserializeBinary = function(buffer) {
  return proto.proto.FileInfoResponse.decode(buffer);
};

/**
 * Get FileInfoResponse response.
 * @memberof ProtoFileInfoResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.FileInfoResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set FileInfoResponse response.
 * @memberof ProtoFileInfoResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.FileInfoResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get FileInfoResponse file.
 * @memberof ProtoFileInfoResponse
 * @return {(ProtoFile|null|undefined)}
 */
proto.proto.FileInfoResponse.prototype.getFile = function() {
  return this.file;
};

/**
 * Set FileInfoResponse file.
 * @memberof ProtoFileInfoResponse
 * @param {(ProtoFile|null|undefined)} value
 */
proto.proto.FileInfoResponse.prototype.setFile = function(value) {
  this.file = value;
};

/**
 * @interface ProtoFileUpload
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.FileUpload.prototype.serializeBinary = function() {
  return proto.proto.FileUpload.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoFileUpload}
 */
proto.proto.FileUpload.deserializeBinary = function(buffer) {
  return proto.proto.FileUpload.decode(buffer);
};

/**
 * Get FileUpload request.
 * @memberof ProtoFileUpload
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.FileUpload.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set FileUpload request.
 * @memberof ProtoFileUpload
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.FileUpload.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get FileUpload token.
 * @memberof ProtoFileUpload
 * @return {string}
 */
proto.proto.FileUpload.prototype.getToken = function() {
  return this.token;
};

/**
 * Set FileUpload token.
 * @memberof ProtoFileUpload
 * @param {string} value
 */
proto.proto.FileUpload.prototype.setToken = function(value) {
  this.token = value;
};

/**
 * Get FileUpload offset.
 * @memberof ProtoFileUpload
 * @return {Long}
 */
proto.proto.FileUpload.prototype.getOffset = function() {
  return this.offset;
};

/**
 * Set FileUpload offset.
 * @memberof ProtoFileUpload
 * @param {Long} value
 */
proto.proto.FileUpload.prototype.setOffset = function(value) {
  this.offset = value;
};

/**
 * Get FileUpload bytes.
 * @memberof ProtoFileUpload
 * @return {Uint8Array}
 */
proto.proto.FileUpload.prototype.getBytes = function() {
  return this.bytes;
};

/**
 * Set FileUpload bytes.
 * @memberof ProtoFileUpload
 * @param {Uint8Array} value
 */
proto.proto.FileUpload.prototype.setBytes = function(value) {
  this.bytes = value;
};

/**
 * @interface ProtoFileUploadResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.FileUploadResponse.prototype.serializeBinary = function() {
  return proto.proto.FileUploadResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoFileUploadResponse}
 */
proto.proto.FileUploadResponse.deserializeBinary = function(buffer) {
  return proto.proto.FileUploadResponse.decode(buffer);
};

/**
 * Get FileUploadResponse response.
 * @memberof ProtoFileUploadResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.FileUploadResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set FileUploadResponse response.
 * @memberof ProtoFileUploadResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.FileUploadResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get FileUploadResponse progress.
 * @memberof ProtoFileUploadResponse
 * @return {number}
 */
proto.proto.FileUploadResponse.prototype.getProgress = function() {
  return this.progress;
};

/**
 * Set FileUploadResponse progress.
 * @memberof ProtoFileUploadResponse
 * @param {number} value
 */
proto.proto.FileUploadResponse.prototype.setProgress = function(value) {
  this.progress = value;
};

/**
 * Get FileUploadResponse nextOffset.
 * @memberof ProtoFileUploadResponse
 * @return {Long}
 */
proto.proto.FileUploadResponse.prototype.getNextOffset = function() {
  return this.nextOffset;
};

/**
 * Set FileUploadResponse nextOffset.
 * @memberof ProtoFileUploadResponse
 * @param {Long} value
 */
proto.proto.FileUploadResponse.prototype.setNextOffset = function(value) {
  this.nextOffset = value;
};

/**
 * Get FileUploadResponse nextLimit.
 * @memberof ProtoFileUploadResponse
 * @return {number}
 */
proto.proto.FileUploadResponse.prototype.getNextLimit = function() {
  return this.nextLimit;
};

/**
 * Set FileUploadResponse nextLimit.
 * @memberof ProtoFileUploadResponse
 * @param {number} value
 */
proto.proto.FileUploadResponse.prototype.setNextLimit = function(value) {
  this.nextLimit = value;
};

/**
 * @interface ProtoFileUploadInit
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.FileUploadInit.prototype.serializeBinary = function() {
  return proto.proto.FileUploadInit.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoFileUploadInit}
 */
proto.proto.FileUploadInit.deserializeBinary = function(buffer) {
  return proto.proto.FileUploadInit.decode(buffer);
};

/**
 * Get FileUploadInit request.
 * @memberof ProtoFileUploadInit
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.FileUploadInit.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set FileUploadInit request.
 * @memberof ProtoFileUploadInit
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.FileUploadInit.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get FileUploadInit firstBytes.
 * @memberof ProtoFileUploadInit
 * @return {Uint8Array}
 */
proto.proto.FileUploadInit.prototype.getFirstBytes = function() {
  return this.firstBytes;
};

/**
 * Set FileUploadInit firstBytes.
 * @memberof ProtoFileUploadInit
 * @param {Uint8Array} value
 */
proto.proto.FileUploadInit.prototype.setFirstBytes = function(value) {
  this.firstBytes = value;
};

/**
 * Get FileUploadInit lastBytes.
 * @memberof ProtoFileUploadInit
 * @return {Uint8Array}
 */
proto.proto.FileUploadInit.prototype.getLastBytes = function() {
  return this.lastBytes;
};

/**
 * Set FileUploadInit lastBytes.
 * @memberof ProtoFileUploadInit
 * @param {Uint8Array} value
 */
proto.proto.FileUploadInit.prototype.setLastBytes = function(value) {
  this.lastBytes = value;
};

/**
 * Get FileUploadInit size.
 * @memberof ProtoFileUploadInit
 * @return {Long}
 */
proto.proto.FileUploadInit.prototype.getSize = function() {
  return this.size;
};

/**
 * Set FileUploadInit size.
 * @memberof ProtoFileUploadInit
 * @param {Long} value
 */
proto.proto.FileUploadInit.prototype.setSize = function(value) {
  this.size = value;
};

/**
 * Get FileUploadInit fileHash.
 * @memberof ProtoFileUploadInit
 * @return {Uint8Array}
 */
proto.proto.FileUploadInit.prototype.getFileHash = function() {
  return this.fileHash;
};

/**
 * Set FileUploadInit fileHash.
 * @memberof ProtoFileUploadInit
 * @param {Uint8Array} value
 */
proto.proto.FileUploadInit.prototype.setFileHash = function(value) {
  this.fileHash = value;
};

/**
 * Get FileUploadInit fileName.
 * @memberof ProtoFileUploadInit
 * @return {string}
 */
proto.proto.FileUploadInit.prototype.getFileName = function() {
  return this.fileName;
};

/**
 * Set FileUploadInit fileName.
 * @memberof ProtoFileUploadInit
 * @param {string} value
 */
proto.proto.FileUploadInit.prototype.setFileName = function(value) {
  this.fileName = value;
};

/**
 * @interface ProtoFileUploadInitResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.FileUploadInitResponse.prototype.serializeBinary = function() {
  return proto.proto.FileUploadInitResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoFileUploadInitResponse}
 */
proto.proto.FileUploadInitResponse.deserializeBinary = function(buffer) {
  return proto.proto.FileUploadInitResponse.decode(buffer);
};

/**
 * Get FileUploadInitResponse response.
 * @memberof ProtoFileUploadInitResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.FileUploadInitResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set FileUploadInitResponse response.
 * @memberof ProtoFileUploadInitResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.FileUploadInitResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get FileUploadInitResponse token.
 * @memberof ProtoFileUploadInitResponse
 * @return {string}
 */
proto.proto.FileUploadInitResponse.prototype.getToken = function() {
  return this.token;
};

/**
 * Set FileUploadInitResponse token.
 * @memberof ProtoFileUploadInitResponse
 * @param {string} value
 */
proto.proto.FileUploadInitResponse.prototype.setToken = function(value) {
  this.token = value;
};

/**
 * Get FileUploadInitResponse progress.
 * @memberof ProtoFileUploadInitResponse
 * @return {number}
 */
proto.proto.FileUploadInitResponse.prototype.getProgress = function() {
  return this.progress;
};

/**
 * Set FileUploadInitResponse progress.
 * @memberof ProtoFileUploadInitResponse
 * @param {number} value
 */
proto.proto.FileUploadInitResponse.prototype.setProgress = function(value) {
  this.progress = value;
};

/**
 * Get FileUploadInitResponse offset.
 * @memberof ProtoFileUploadInitResponse
 * @return {Long}
 */
proto.proto.FileUploadInitResponse.prototype.getOffset = function() {
  return this.offset;
};

/**
 * Set FileUploadInitResponse offset.
 * @memberof ProtoFileUploadInitResponse
 * @param {Long} value
 */
proto.proto.FileUploadInitResponse.prototype.setOffset = function(value) {
  this.offset = value;
};

/**
 * Get FileUploadInitResponse limit.
 * @memberof ProtoFileUploadInitResponse
 * @return {number}
 */
proto.proto.FileUploadInitResponse.prototype.getLimit = function() {
  return this.limit;
};

/**
 * Set FileUploadInitResponse limit.
 * @memberof ProtoFileUploadInitResponse
 * @param {number} value
 */
proto.proto.FileUploadInitResponse.prototype.setLimit = function(value) {
  this.limit = value;
};

/**
 * @interface ProtoFileUploadOption
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.FileUploadOption.prototype.serializeBinary = function() {
  return proto.proto.FileUploadOption.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoFileUploadOption}
 */
proto.proto.FileUploadOption.deserializeBinary = function(buffer) {
  return proto.proto.FileUploadOption.decode(buffer);
};

/**
 * Get FileUploadOption request.
 * @memberof ProtoFileUploadOption
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.FileUploadOption.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set FileUploadOption request.
 * @memberof ProtoFileUploadOption
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.FileUploadOption.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get FileUploadOption size.
 * @memberof ProtoFileUploadOption
 * @return {Long}
 */
proto.proto.FileUploadOption.prototype.getSize = function() {
  return this.size;
};

/**
 * Set FileUploadOption size.
 * @memberof ProtoFileUploadOption
 * @param {Long} value
 */
proto.proto.FileUploadOption.prototype.setSize = function(value) {
  this.size = value;
};

/**
 * @interface ProtoFileUploadOptionResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.FileUploadOptionResponse.prototype.serializeBinary = function() {
  return proto.proto.FileUploadOptionResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoFileUploadOptionResponse}
 */
proto.proto.FileUploadOptionResponse.deserializeBinary = function(buffer) {
  return proto.proto.FileUploadOptionResponse.decode(buffer);
};

/**
 * Get FileUploadOptionResponse response.
 * @memberof ProtoFileUploadOptionResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.FileUploadOptionResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set FileUploadOptionResponse response.
 * @memberof ProtoFileUploadOptionResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.FileUploadOptionResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get FileUploadOptionResponse firstBytesLimit.
 * @memberof ProtoFileUploadOptionResponse
 * @return {number}
 */
proto.proto.FileUploadOptionResponse.prototype.getFirstBytesLimit = function() {
  return this.firstBytesLimit;
};

/**
 * Set FileUploadOptionResponse firstBytesLimit.
 * @memberof ProtoFileUploadOptionResponse
 * @param {number} value
 */
proto.proto.FileUploadOptionResponse.prototype.setFirstBytesLimit = function(value) {
  this.firstBytesLimit = value;
};

/**
 * Get FileUploadOptionResponse lastBytesLimit.
 * @memberof ProtoFileUploadOptionResponse
 * @return {number}
 */
proto.proto.FileUploadOptionResponse.prototype.getLastBytesLimit = function() {
  return this.lastBytesLimit;
};

/**
 * Set FileUploadOptionResponse lastBytesLimit.
 * @memberof ProtoFileUploadOptionResponse
 * @param {number} value
 */
proto.proto.FileUploadOptionResponse.prototype.setLastBytesLimit = function(value) {
  this.lastBytesLimit = value;
};

/**
 * Get FileUploadOptionResponse maxConnection.
 * @memberof ProtoFileUploadOptionResponse
 * @return {number}
 */
proto.proto.FileUploadOptionResponse.prototype.getMaxConnection = function() {
  return this.maxConnection;
};

/**
 * Set FileUploadOptionResponse maxConnection.
 * @memberof ProtoFileUploadOptionResponse
 * @param {number} value
 */
proto.proto.FileUploadOptionResponse.prototype.setMaxConnection = function(value) {
  this.maxConnection = value;
};

/**
 * @interface ProtoFileUploadStatus
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.FileUploadStatus.prototype.serializeBinary = function() {
  return proto.proto.FileUploadStatus.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoFileUploadStatus}
 */
proto.proto.FileUploadStatus.deserializeBinary = function(buffer) {
  return proto.proto.FileUploadStatus.decode(buffer);
};

/**
 * Get FileUploadStatus request.
 * @memberof ProtoFileUploadStatus
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.FileUploadStatus.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set FileUploadStatus request.
 * @memberof ProtoFileUploadStatus
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.FileUploadStatus.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get FileUploadStatus token.
 * @memberof ProtoFileUploadStatus
 * @return {string}
 */
proto.proto.FileUploadStatus.prototype.getToken = function() {
  return this.token;
};

/**
 * Set FileUploadStatus token.
 * @memberof ProtoFileUploadStatus
 * @param {string} value
 */
proto.proto.FileUploadStatus.prototype.setToken = function(value) {
  this.token = value;
};

/**
 * @interface ProtoFileUploadStatusResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.FileUploadStatusResponse.prototype.serializeBinary = function() {
  return proto.proto.FileUploadStatusResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoFileUploadStatusResponse}
 */
proto.proto.FileUploadStatusResponse.deserializeBinary = function(buffer) {
  return proto.proto.FileUploadStatusResponse.decode(buffer);
};

/**
 * Get FileUploadStatusResponse response.
 * @memberof ProtoFileUploadStatusResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.FileUploadStatusResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set FileUploadStatusResponse response.
 * @memberof ProtoFileUploadStatusResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.FileUploadStatusResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get FileUploadStatusResponse status.
 * @memberof ProtoFileUploadStatusResponse
 * @return {ProtoFileUploadStatusResponse_Status}
 */
proto.proto.FileUploadStatusResponse.prototype.getStatus = function() {
  return this.status;
};

/**
 * Set FileUploadStatusResponse status.
 * @memberof ProtoFileUploadStatusResponse
 * @param {ProtoFileUploadStatusResponse_Status} value
 */
proto.proto.FileUploadStatusResponse.prototype.setStatus = function(value) {
  this.status = value;
};

/**
 * Get FileUploadStatusResponse progress.
 * @memberof ProtoFileUploadStatusResponse
 * @return {number}
 */
proto.proto.FileUploadStatusResponse.prototype.getProgress = function() {
  return this.progress;
};

/**
 * Set FileUploadStatusResponse progress.
 * @memberof ProtoFileUploadStatusResponse
 * @param {number} value
 */
proto.proto.FileUploadStatusResponse.prototype.setProgress = function(value) {
  this.progress = value;
};

/**
 * Get FileUploadStatusResponse recheckDelayMs.
 * @memberof ProtoFileUploadStatusResponse
 * @return {number}
 */
proto.proto.FileUploadStatusResponse.prototype.getRecheckDelayMs = function() {
  return this.recheckDelayMs;
};

/**
 * Set FileUploadStatusResponse recheckDelayMs.
 * @memberof ProtoFileUploadStatusResponse
 * @param {number} value
 */
proto.proto.FileUploadStatusResponse.prototype.setRecheckDelayMs = function(value) {
  this.recheckDelayMs = value;
};

/**
 * @typedef {number} ProtoFileUploadStatusResponse_Status
 */

/**
 * Status enum.
 * @enum {ProtoFileUploadStatusResponse_Status}
 * @memberof ProtoFileUploadStatusResponse
 */
proto.proto.FileUploadStatusResponse.Status = proto.proto.FileUploadStatusResponse.prototype.Status = {
  UPLOADING : 0,
  PROCESSING : 1,
  PROCESSED : 2,
  CORRUPTED : 3,
};

/**
 * @interface ProtoGeoGetComment
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GeoGetComment.prototype.serializeBinary = function() {
  return proto.proto.GeoGetComment.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGeoGetComment}
 */
proto.proto.GeoGetComment.deserializeBinary = function(buffer) {
  return proto.proto.GeoGetComment.decode(buffer);
};

/**
 * Get GeoGetComment request.
 * @memberof ProtoGeoGetComment
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.GeoGetComment.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set GeoGetComment request.
 * @memberof ProtoGeoGetComment
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.GeoGetComment.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get GeoGetComment userId.
 * @memberof ProtoGeoGetComment
 * @return {Long}
 */
proto.proto.GeoGetComment.prototype.getUserId = function() {
  return this.userId;
};

/**
 * Set GeoGetComment userId.
 * @memberof ProtoGeoGetComment
 * @param {Long} value
 */
proto.proto.GeoGetComment.prototype.setUserId = function(value) {
  this.userId = value;
};

/**
 * @interface ProtoGeoGetCommentResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GeoGetCommentResponse.prototype.serializeBinary = function() {
  return proto.proto.GeoGetCommentResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGeoGetCommentResponse}
 */
proto.proto.GeoGetCommentResponse.deserializeBinary = function(buffer) {
  return proto.proto.GeoGetCommentResponse.decode(buffer);
};

/**
 * Get GeoGetCommentResponse response.
 * @memberof ProtoGeoGetCommentResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.GeoGetCommentResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set GeoGetCommentResponse response.
 * @memberof ProtoGeoGetCommentResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.GeoGetCommentResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get GeoGetCommentResponse comment.
 * @memberof ProtoGeoGetCommentResponse
 * @return {string}
 */
proto.proto.GeoGetCommentResponse.prototype.getComment = function() {
  return this.comment;
};

/**
 * Set GeoGetCommentResponse comment.
 * @memberof ProtoGeoGetCommentResponse
 * @param {string} value
 */
proto.proto.GeoGetCommentResponse.prototype.setComment = function(value) {
  this.comment = value;
};

/**
 * @interface ProtoGeoGetConfiguration
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GeoGetConfiguration.prototype.serializeBinary = function() {
  return proto.proto.GeoGetConfiguration.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGeoGetConfiguration}
 */
proto.proto.GeoGetConfiguration.deserializeBinary = function(buffer) {
  return proto.proto.GeoGetConfiguration.decode(buffer);
};

/**
 * Get GeoGetConfiguration request.
 * @memberof ProtoGeoGetConfiguration
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.GeoGetConfiguration.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set GeoGetConfiguration request.
 * @memberof ProtoGeoGetConfiguration
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.GeoGetConfiguration.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * @interface ProtoGeoGetConfigurationResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GeoGetConfigurationResponse.prototype.serializeBinary = function() {
  return proto.proto.GeoGetConfigurationResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGeoGetConfigurationResponse}
 */
proto.proto.GeoGetConfigurationResponse.deserializeBinary = function(buffer) {
  return proto.proto.GeoGetConfigurationResponse.decode(buffer);
};

/**
 * Get GeoGetConfigurationResponse response.
 * @memberof ProtoGeoGetConfigurationResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.GeoGetConfigurationResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set GeoGetConfigurationResponse response.
 * @memberof ProtoGeoGetConfigurationResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.GeoGetConfigurationResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get GeoGetConfigurationResponse tileServer.
 * @memberof ProtoGeoGetConfigurationResponse
 * @return {Array.<ProtoGeoGetConfigurationResponse_TileServer>}
 */
proto.proto.GeoGetConfigurationResponse.prototype.getTileServerList = function() {
  return this.tileServer;
};

/**
 * Set GeoGetConfigurationResponse tileServer.
 * @memberof ProtoGeoGetConfigurationResponse
 * @param {Array.<ProtoGeoGetConfigurationResponse_TileServer>} value
 */
proto.proto.GeoGetConfigurationResponse.prototype.setTileServerList = function(value) {
  this.tileServer = value;
};

/**
 * Get GeoGetConfigurationResponse cacheId.
 * @memberof ProtoGeoGetConfigurationResponse
 * @return {string}
 */
proto.proto.GeoGetConfigurationResponse.prototype.getCacheId = function() {
  return this.cacheId;
};

/**
 * Set GeoGetConfigurationResponse cacheId.
 * @memberof ProtoGeoGetConfigurationResponse
 * @param {string} value
 */
proto.proto.GeoGetConfigurationResponse.prototype.setCacheId = function(value) {
  this.cacheId = value;
};

/**
 * @interface ProtoGeoGetConfigurationResponse_TileServer
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GeoGetConfigurationResponse.TileServer.prototype.serializeBinary = function() {
  return proto.proto.GeoGetConfigurationResponse.TileServer.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGeoGetConfigurationResponse_TileServer}
 */
proto.proto.GeoGetConfigurationResponse.TileServer.deserializeBinary = function(buffer) {
  return proto.proto.GeoGetConfigurationResponse.TileServer.decode(buffer);
};

/**
 * Get TileServer baseUrl.
 * @memberof ProtoGeoGetConfigurationResponse_TileServer
 * @return {string}
 */
proto.proto.GeoGetConfigurationResponse.TileServer.prototype.getBaseUrl = function() {
  return this.baseUrl;
};

/**
 * Set TileServer baseUrl.
 * @memberof ProtoGeoGetConfigurationResponse_TileServer
 * @param {string} value
 */
proto.proto.GeoGetConfigurationResponse.TileServer.prototype.setBaseUrl = function(value) {
  this.baseUrl = value;
};

/**
 * @interface ProtoGeoGetNearbyCoordinate
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GeoGetNearbyCoordinate.prototype.serializeBinary = function() {
  return proto.proto.GeoGetNearbyCoordinate.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGeoGetNearbyCoordinate}
 */
proto.proto.GeoGetNearbyCoordinate.deserializeBinary = function(buffer) {
  return proto.proto.GeoGetNearbyCoordinate.decode(buffer);
};

/**
 * Get GeoGetNearbyCoordinate request.
 * @memberof ProtoGeoGetNearbyCoordinate
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.GeoGetNearbyCoordinate.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set GeoGetNearbyCoordinate request.
 * @memberof ProtoGeoGetNearbyCoordinate
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.GeoGetNearbyCoordinate.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get GeoGetNearbyCoordinate lat.
 * @memberof ProtoGeoGetNearbyCoordinate
 * @return {number}
 */
proto.proto.GeoGetNearbyCoordinate.prototype.getLat = function() {
  return this.lat;
};

/**
 * Set GeoGetNearbyCoordinate lat.
 * @memberof ProtoGeoGetNearbyCoordinate
 * @param {number} value
 */
proto.proto.GeoGetNearbyCoordinate.prototype.setLat = function(value) {
  this.lat = value;
};

/**
 * Get GeoGetNearbyCoordinate lon.
 * @memberof ProtoGeoGetNearbyCoordinate
 * @return {number}
 */
proto.proto.GeoGetNearbyCoordinate.prototype.getLon = function() {
  return this.lon;
};

/**
 * Set GeoGetNearbyCoordinate lon.
 * @memberof ProtoGeoGetNearbyCoordinate
 * @param {number} value
 */
proto.proto.GeoGetNearbyCoordinate.prototype.setLon = function(value) {
  this.lon = value;
};

/**
 * @interface ProtoGeoGetNearbyCoordinateResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GeoGetNearbyCoordinateResponse.prototype.serializeBinary = function() {
  return proto.proto.GeoGetNearbyCoordinateResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGeoGetNearbyCoordinateResponse}
 */
proto.proto.GeoGetNearbyCoordinateResponse.deserializeBinary = function(buffer) {
  return proto.proto.GeoGetNearbyCoordinateResponse.decode(buffer);
};

/**
 * Get GeoGetNearbyCoordinateResponse response.
 * @memberof ProtoGeoGetNearbyCoordinateResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.GeoGetNearbyCoordinateResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set GeoGetNearbyCoordinateResponse response.
 * @memberof ProtoGeoGetNearbyCoordinateResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.GeoGetNearbyCoordinateResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get GeoGetNearbyCoordinateResponse result.
 * @memberof ProtoGeoGetNearbyCoordinateResponse
 * @return {Array.<ProtoGeoGetNearbyCoordinateResponse_Result>}
 */
proto.proto.GeoGetNearbyCoordinateResponse.prototype.getResultList = function() {
  return this.result;
};

/**
 * Set GeoGetNearbyCoordinateResponse result.
 * @memberof ProtoGeoGetNearbyCoordinateResponse
 * @param {Array.<ProtoGeoGetNearbyCoordinateResponse_Result>} value
 */
proto.proto.GeoGetNearbyCoordinateResponse.prototype.setResultList = function(value) {
  this.result = value;
};

/**
 * @interface ProtoGeoGetNearbyCoordinateResponse_Result
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GeoGetNearbyCoordinateResponse.Result.prototype.serializeBinary = function() {
  return proto.proto.GeoGetNearbyCoordinateResponse.Result.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGeoGetNearbyCoordinateResponse_Result}
 */
proto.proto.GeoGetNearbyCoordinateResponse.Result.deserializeBinary = function(buffer) {
  return proto.proto.GeoGetNearbyCoordinateResponse.Result.decode(buffer);
};

/**
 * Get Result userId.
 * @memberof ProtoGeoGetNearbyCoordinateResponse_Result
 * @return {Long}
 */
proto.proto.GeoGetNearbyCoordinateResponse.Result.prototype.getUserId = function() {
  return this.userId;
};

/**
 * Set Result userId.
 * @memberof ProtoGeoGetNearbyCoordinateResponse_Result
 * @param {Long} value
 */
proto.proto.GeoGetNearbyCoordinateResponse.Result.prototype.setUserId = function(value) {
  this.userId = value;
};

/**
 * Get Result hasComment.
 * @memberof ProtoGeoGetNearbyCoordinateResponse_Result
 * @return {boolean}
 */
proto.proto.GeoGetNearbyCoordinateResponse.Result.prototype.getHasComment = function() {
  return this.hasComment;
};

/**
 * Set Result hasComment.
 * @memberof ProtoGeoGetNearbyCoordinateResponse_Result
 * @param {boolean} value
 */
proto.proto.GeoGetNearbyCoordinateResponse.Result.prototype.setHasComment = function(value) {
  this.hasComment = value;
};

/**
 * Get Result lat.
 * @memberof ProtoGeoGetNearbyCoordinateResponse_Result
 * @return {number}
 */
proto.proto.GeoGetNearbyCoordinateResponse.Result.prototype.getLat = function() {
  return this.lat;
};

/**
 * Set Result lat.
 * @memberof ProtoGeoGetNearbyCoordinateResponse_Result
 * @param {number} value
 */
proto.proto.GeoGetNearbyCoordinateResponse.Result.prototype.setLat = function(value) {
  this.lat = value;
};

/**
 * Get Result lon.
 * @memberof ProtoGeoGetNearbyCoordinateResponse_Result
 * @return {number}
 */
proto.proto.GeoGetNearbyCoordinateResponse.Result.prototype.getLon = function() {
  return this.lon;
};

/**
 * Set Result lon.
 * @memberof ProtoGeoGetNearbyCoordinateResponse_Result
 * @param {number} value
 */
proto.proto.GeoGetNearbyCoordinateResponse.Result.prototype.setLon = function(value) {
  this.lon = value;
};

/**
 * @interface ProtoGeoGetNearbyDistance
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GeoGetNearbyDistance.prototype.serializeBinary = function() {
  return proto.proto.GeoGetNearbyDistance.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGeoGetNearbyDistance}
 */
proto.proto.GeoGetNearbyDistance.deserializeBinary = function(buffer) {
  return proto.proto.GeoGetNearbyDistance.decode(buffer);
};

/**
 * Get GeoGetNearbyDistance request.
 * @memberof ProtoGeoGetNearbyDistance
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.GeoGetNearbyDistance.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set GeoGetNearbyDistance request.
 * @memberof ProtoGeoGetNearbyDistance
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.GeoGetNearbyDistance.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get GeoGetNearbyDistance lat.
 * @memberof ProtoGeoGetNearbyDistance
 * @return {number}
 */
proto.proto.GeoGetNearbyDistance.prototype.getLat = function() {
  return this.lat;
};

/**
 * Set GeoGetNearbyDistance lat.
 * @memberof ProtoGeoGetNearbyDistance
 * @param {number} value
 */
proto.proto.GeoGetNearbyDistance.prototype.setLat = function(value) {
  this.lat = value;
};

/**
 * Get GeoGetNearbyDistance lon.
 * @memberof ProtoGeoGetNearbyDistance
 * @return {number}
 */
proto.proto.GeoGetNearbyDistance.prototype.getLon = function() {
  return this.lon;
};

/**
 * Set GeoGetNearbyDistance lon.
 * @memberof ProtoGeoGetNearbyDistance
 * @param {number} value
 */
proto.proto.GeoGetNearbyDistance.prototype.setLon = function(value) {
  this.lon = value;
};

/**
 * @interface ProtoGeoGetNearbyDistanceResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GeoGetNearbyDistanceResponse.prototype.serializeBinary = function() {
  return proto.proto.GeoGetNearbyDistanceResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGeoGetNearbyDistanceResponse}
 */
proto.proto.GeoGetNearbyDistanceResponse.deserializeBinary = function(buffer) {
  return proto.proto.GeoGetNearbyDistanceResponse.decode(buffer);
};

/**
 * Get GeoGetNearbyDistanceResponse response.
 * @memberof ProtoGeoGetNearbyDistanceResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.GeoGetNearbyDistanceResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set GeoGetNearbyDistanceResponse response.
 * @memberof ProtoGeoGetNearbyDistanceResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.GeoGetNearbyDistanceResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get GeoGetNearbyDistanceResponse result.
 * @memberof ProtoGeoGetNearbyDistanceResponse
 * @return {Array.<ProtoGeoGetNearbyDistanceResponse_Result>}
 */
proto.proto.GeoGetNearbyDistanceResponse.prototype.getResultList = function() {
  return this.result;
};

/**
 * Set GeoGetNearbyDistanceResponse result.
 * @memberof ProtoGeoGetNearbyDistanceResponse
 * @param {Array.<ProtoGeoGetNearbyDistanceResponse_Result>} value
 */
proto.proto.GeoGetNearbyDistanceResponse.prototype.setResultList = function(value) {
  this.result = value;
};

/**
 * @interface ProtoGeoGetNearbyDistanceResponse_Result
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GeoGetNearbyDistanceResponse.Result.prototype.serializeBinary = function() {
  return proto.proto.GeoGetNearbyDistanceResponse.Result.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGeoGetNearbyDistanceResponse_Result}
 */
proto.proto.GeoGetNearbyDistanceResponse.Result.deserializeBinary = function(buffer) {
  return proto.proto.GeoGetNearbyDistanceResponse.Result.decode(buffer);
};

/**
 * Get Result userId.
 * @memberof ProtoGeoGetNearbyDistanceResponse_Result
 * @return {Long}
 */
proto.proto.GeoGetNearbyDistanceResponse.Result.prototype.getUserId = function() {
  return this.userId;
};

/**
 * Set Result userId.
 * @memberof ProtoGeoGetNearbyDistanceResponse_Result
 * @param {Long} value
 */
proto.proto.GeoGetNearbyDistanceResponse.Result.prototype.setUserId = function(value) {
  this.userId = value;
};

/**
 * Get Result hasComment.
 * @memberof ProtoGeoGetNearbyDistanceResponse_Result
 * @return {boolean}
 */
proto.proto.GeoGetNearbyDistanceResponse.Result.prototype.getHasComment = function() {
  return this.hasComment;
};

/**
 * Set Result hasComment.
 * @memberof ProtoGeoGetNearbyDistanceResponse_Result
 * @param {boolean} value
 */
proto.proto.GeoGetNearbyDistanceResponse.Result.prototype.setHasComment = function(value) {
  this.hasComment = value;
};

/**
 * Get Result distance.
 * @memberof ProtoGeoGetNearbyDistanceResponse_Result
 * @return {number}
 */
proto.proto.GeoGetNearbyDistanceResponse.Result.prototype.getDistance = function() {
  return this.distance;
};

/**
 * Set Result distance.
 * @memberof ProtoGeoGetNearbyDistanceResponse_Result
 * @param {number} value
 */
proto.proto.GeoGetNearbyDistanceResponse.Result.prototype.setDistance = function(value) {
  this.distance = value;
};

/**
 * @interface ProtoGeoGetRegisterStatus
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GeoGetRegisterStatus.prototype.serializeBinary = function() {
  return proto.proto.GeoGetRegisterStatus.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGeoGetRegisterStatus}
 */
proto.proto.GeoGetRegisterStatus.deserializeBinary = function(buffer) {
  return proto.proto.GeoGetRegisterStatus.decode(buffer);
};

/**
 * Get GeoGetRegisterStatus request.
 * @memberof ProtoGeoGetRegisterStatus
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.GeoGetRegisterStatus.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set GeoGetRegisterStatus request.
 * @memberof ProtoGeoGetRegisterStatus
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.GeoGetRegisterStatus.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * @interface ProtoGeoGetRegisterStatusResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GeoGetRegisterStatusResponse.prototype.serializeBinary = function() {
  return proto.proto.GeoGetRegisterStatusResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGeoGetRegisterStatusResponse}
 */
proto.proto.GeoGetRegisterStatusResponse.deserializeBinary = function(buffer) {
  return proto.proto.GeoGetRegisterStatusResponse.decode(buffer);
};

/**
 * Get GeoGetRegisterStatusResponse response.
 * @memberof ProtoGeoGetRegisterStatusResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.GeoGetRegisterStatusResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set GeoGetRegisterStatusResponse response.
 * @memberof ProtoGeoGetRegisterStatusResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.GeoGetRegisterStatusResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get GeoGetRegisterStatusResponse enable.
 * @memberof ProtoGeoGetRegisterStatusResponse
 * @return {boolean}
 */
proto.proto.GeoGetRegisterStatusResponse.prototype.getEnable = function() {
  return this.enable;
};

/**
 * Set GeoGetRegisterStatusResponse enable.
 * @memberof ProtoGeoGetRegisterStatusResponse
 * @param {boolean} value
 */
proto.proto.GeoGetRegisterStatusResponse.prototype.setEnable = function(value) {
  this.enable = value;
};

/**
 * @interface ProtoGeoRegister
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GeoRegister.prototype.serializeBinary = function() {
  return proto.proto.GeoRegister.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGeoRegister}
 */
proto.proto.GeoRegister.deserializeBinary = function(buffer) {
  return proto.proto.GeoRegister.decode(buffer);
};

/**
 * Get GeoRegister request.
 * @memberof ProtoGeoRegister
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.GeoRegister.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set GeoRegister request.
 * @memberof ProtoGeoRegister
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.GeoRegister.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get GeoRegister enable.
 * @memberof ProtoGeoRegister
 * @return {boolean}
 */
proto.proto.GeoRegister.prototype.getEnable = function() {
  return this.enable;
};

/**
 * Set GeoRegister enable.
 * @memberof ProtoGeoRegister
 * @param {boolean} value
 */
proto.proto.GeoRegister.prototype.setEnable = function(value) {
  this.enable = value;
};

/**
 * @interface ProtoGeoRegisterResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GeoRegisterResponse.prototype.serializeBinary = function() {
  return proto.proto.GeoRegisterResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGeoRegisterResponse}
 */
proto.proto.GeoRegisterResponse.deserializeBinary = function(buffer) {
  return proto.proto.GeoRegisterResponse.decode(buffer);
};

/**
 * Get GeoRegisterResponse response.
 * @memberof ProtoGeoRegisterResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.GeoRegisterResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set GeoRegisterResponse response.
 * @memberof ProtoGeoRegisterResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.GeoRegisterResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get GeoRegisterResponse enable.
 * @memberof ProtoGeoRegisterResponse
 * @return {boolean}
 */
proto.proto.GeoRegisterResponse.prototype.getEnable = function() {
  return this.enable;
};

/**
 * Set GeoRegisterResponse enable.
 * @memberof ProtoGeoRegisterResponse
 * @param {boolean} value
 */
proto.proto.GeoRegisterResponse.prototype.setEnable = function(value) {
  this.enable = value;
};

/**
 * @interface ProtoGeoUpdateComment
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GeoUpdateComment.prototype.serializeBinary = function() {
  return proto.proto.GeoUpdateComment.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGeoUpdateComment}
 */
proto.proto.GeoUpdateComment.deserializeBinary = function(buffer) {
  return proto.proto.GeoUpdateComment.decode(buffer);
};

/**
 * Get GeoUpdateComment request.
 * @memberof ProtoGeoUpdateComment
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.GeoUpdateComment.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set GeoUpdateComment request.
 * @memberof ProtoGeoUpdateComment
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.GeoUpdateComment.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get GeoUpdateComment comment.
 * @memberof ProtoGeoUpdateComment
 * @return {string}
 */
proto.proto.GeoUpdateComment.prototype.getComment = function() {
  return this.comment;
};

/**
 * Set GeoUpdateComment comment.
 * @memberof ProtoGeoUpdateComment
 * @param {string} value
 */
proto.proto.GeoUpdateComment.prototype.setComment = function(value) {
  this.comment = value;
};

/**
 * @interface ProtoGeoUpdateCommentResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GeoUpdateCommentResponse.prototype.serializeBinary = function() {
  return proto.proto.GeoUpdateCommentResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGeoUpdateCommentResponse}
 */
proto.proto.GeoUpdateCommentResponse.deserializeBinary = function(buffer) {
  return proto.proto.GeoUpdateCommentResponse.decode(buffer);
};

/**
 * Get GeoUpdateCommentResponse response.
 * @memberof ProtoGeoUpdateCommentResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.GeoUpdateCommentResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set GeoUpdateCommentResponse response.
 * @memberof ProtoGeoUpdateCommentResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.GeoUpdateCommentResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get GeoUpdateCommentResponse comment.
 * @memberof ProtoGeoUpdateCommentResponse
 * @return {string}
 */
proto.proto.GeoUpdateCommentResponse.prototype.getComment = function() {
  return this.comment;
};

/**
 * Set GeoUpdateCommentResponse comment.
 * @memberof ProtoGeoUpdateCommentResponse
 * @param {string} value
 */
proto.proto.GeoUpdateCommentResponse.prototype.setComment = function(value) {
  this.comment = value;
};

/**
 * @interface ProtoGeoUpdatePosition
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GeoUpdatePosition.prototype.serializeBinary = function() {
  return proto.proto.GeoUpdatePosition.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGeoUpdatePosition}
 */
proto.proto.GeoUpdatePosition.deserializeBinary = function(buffer) {
  return proto.proto.GeoUpdatePosition.decode(buffer);
};

/**
 * Get GeoUpdatePosition request.
 * @memberof ProtoGeoUpdatePosition
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.GeoUpdatePosition.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set GeoUpdatePosition request.
 * @memberof ProtoGeoUpdatePosition
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.GeoUpdatePosition.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get GeoUpdatePosition lat.
 * @memberof ProtoGeoUpdatePosition
 * @return {number}
 */
proto.proto.GeoUpdatePosition.prototype.getLat = function() {
  return this.lat;
};

/**
 * Set GeoUpdatePosition lat.
 * @memberof ProtoGeoUpdatePosition
 * @param {number} value
 */
proto.proto.GeoUpdatePosition.prototype.setLat = function(value) {
  this.lat = value;
};

/**
 * Get GeoUpdatePosition lon.
 * @memberof ProtoGeoUpdatePosition
 * @return {number}
 */
proto.proto.GeoUpdatePosition.prototype.getLon = function() {
  return this.lon;
};

/**
 * Set GeoUpdatePosition lon.
 * @memberof ProtoGeoUpdatePosition
 * @param {number} value
 */
proto.proto.GeoUpdatePosition.prototype.setLon = function(value) {
  this.lon = value;
};

/**
 * @interface ProtoGeoUpdatePositionResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GeoUpdatePositionResponse.prototype.serializeBinary = function() {
  return proto.proto.GeoUpdatePositionResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGeoUpdatePositionResponse}
 */
proto.proto.GeoUpdatePositionResponse.deserializeBinary = function(buffer) {
  return proto.proto.GeoUpdatePositionResponse.decode(buffer);
};

/**
 * Get GeoUpdatePositionResponse response.
 * @memberof ProtoGeoUpdatePositionResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.GeoUpdatePositionResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set GeoUpdatePositionResponse response.
 * @memberof ProtoGeoUpdatePositionResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.GeoUpdatePositionResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * @interface ProtoGroupAddAdmin
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GroupAddAdmin.prototype.serializeBinary = function() {
  return proto.proto.GroupAddAdmin.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGroupAddAdmin}
 */
proto.proto.GroupAddAdmin.deserializeBinary = function(buffer) {
  return proto.proto.GroupAddAdmin.decode(buffer);
};

/**
 * Get GroupAddAdmin request.
 * @memberof ProtoGroupAddAdmin
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.GroupAddAdmin.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set GroupAddAdmin request.
 * @memberof ProtoGroupAddAdmin
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.GroupAddAdmin.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get GroupAddAdmin roomId.
 * @memberof ProtoGroupAddAdmin
 * @return {Long}
 */
proto.proto.GroupAddAdmin.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set GroupAddAdmin roomId.
 * @memberof ProtoGroupAddAdmin
 * @param {Long} value
 */
proto.proto.GroupAddAdmin.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get GroupAddAdmin memberId.
 * @memberof ProtoGroupAddAdmin
 * @return {Long}
 */
proto.proto.GroupAddAdmin.prototype.getMemberId = function() {
  return this.memberId;
};

/**
 * Set GroupAddAdmin memberId.
 * @memberof ProtoGroupAddAdmin
 * @param {Long} value
 */
proto.proto.GroupAddAdmin.prototype.setMemberId = function(value) {
  this.memberId = value;
};

/**
 * @interface ProtoGroupAddAdminResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GroupAddAdminResponse.prototype.serializeBinary = function() {
  return proto.proto.GroupAddAdminResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGroupAddAdminResponse}
 */
proto.proto.GroupAddAdminResponse.deserializeBinary = function(buffer) {
  return proto.proto.GroupAddAdminResponse.decode(buffer);
};

/**
 * Get GroupAddAdminResponse response.
 * @memberof ProtoGroupAddAdminResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.GroupAddAdminResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set GroupAddAdminResponse response.
 * @memberof ProtoGroupAddAdminResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.GroupAddAdminResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get GroupAddAdminResponse roomId.
 * @memberof ProtoGroupAddAdminResponse
 * @return {Long}
 */
proto.proto.GroupAddAdminResponse.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set GroupAddAdminResponse roomId.
 * @memberof ProtoGroupAddAdminResponse
 * @param {Long} value
 */
proto.proto.GroupAddAdminResponse.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get GroupAddAdminResponse memberId.
 * @memberof ProtoGroupAddAdminResponse
 * @return {Long}
 */
proto.proto.GroupAddAdminResponse.prototype.getMemberId = function() {
  return this.memberId;
};

/**
 * Set GroupAddAdminResponse memberId.
 * @memberof ProtoGroupAddAdminResponse
 * @param {Long} value
 */
proto.proto.GroupAddAdminResponse.prototype.setMemberId = function(value) {
  this.memberId = value;
};

/**
 * @interface ProtoGroupAddMember
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GroupAddMember.prototype.serializeBinary = function() {
  return proto.proto.GroupAddMember.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGroupAddMember}
 */
proto.proto.GroupAddMember.deserializeBinary = function(buffer) {
  return proto.proto.GroupAddMember.decode(buffer);
};

/**
 * Get GroupAddMember request.
 * @memberof ProtoGroupAddMember
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.GroupAddMember.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set GroupAddMember request.
 * @memberof ProtoGroupAddMember
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.GroupAddMember.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get GroupAddMember roomId.
 * @memberof ProtoGroupAddMember
 * @return {Long}
 */
proto.proto.GroupAddMember.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set GroupAddMember roomId.
 * @memberof ProtoGroupAddMember
 * @param {Long} value
 */
proto.proto.GroupAddMember.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get GroupAddMember member.
 * @memberof ProtoGroupAddMember
 * @return {(ProtoGroupAddMember_Member|null|undefined)}
 */
proto.proto.GroupAddMember.prototype.getMember = function() {
  return this.member;
};

/**
 * Set GroupAddMember member.
 * @memberof ProtoGroupAddMember
 * @param {(ProtoGroupAddMember_Member|null|undefined)} value
 */
proto.proto.GroupAddMember.prototype.setMember = function(value) {
  this.member = value;
};

/**
 * @interface ProtoGroupAddMember_Member
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GroupAddMember.Member.prototype.serializeBinary = function() {
  return proto.proto.GroupAddMember.Member.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGroupAddMember_Member}
 */
proto.proto.GroupAddMember.Member.deserializeBinary = function(buffer) {
  return proto.proto.GroupAddMember.Member.decode(buffer);
};

/**
 * Get Member userId.
 * @memberof ProtoGroupAddMember_Member
 * @return {Long}
 */
proto.proto.GroupAddMember.Member.prototype.getUserId = function() {
  return this.userId;
};

/**
 * Set Member userId.
 * @memberof ProtoGroupAddMember_Member
 * @param {Long} value
 */
proto.proto.GroupAddMember.Member.prototype.setUserId = function(value) {
  this.userId = value;
};

/**
 * Get Member startMessageId.
 * @memberof ProtoGroupAddMember_Member
 * @return {Long}
 */
proto.proto.GroupAddMember.Member.prototype.getStartMessageId = function() {
  return this.startMessageId;
};

/**
 * Set Member startMessageId.
 * @memberof ProtoGroupAddMember_Member
 * @param {Long} value
 */
proto.proto.GroupAddMember.Member.prototype.setStartMessageId = function(value) {
  this.startMessageId = value;
};

/**
 * @interface ProtoGroupAddMemberResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GroupAddMemberResponse.prototype.serializeBinary = function() {
  return proto.proto.GroupAddMemberResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGroupAddMemberResponse}
 */
proto.proto.GroupAddMemberResponse.deserializeBinary = function(buffer) {
  return proto.proto.GroupAddMemberResponse.decode(buffer);
};

/**
 * Get GroupAddMemberResponse response.
 * @memberof ProtoGroupAddMemberResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.GroupAddMemberResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set GroupAddMemberResponse response.
 * @memberof ProtoGroupAddMemberResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.GroupAddMemberResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get GroupAddMemberResponse roomId.
 * @memberof ProtoGroupAddMemberResponse
 * @return {Long}
 */
proto.proto.GroupAddMemberResponse.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set GroupAddMemberResponse roomId.
 * @memberof ProtoGroupAddMemberResponse
 * @param {Long} value
 */
proto.proto.GroupAddMemberResponse.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get GroupAddMemberResponse userId.
 * @memberof ProtoGroupAddMemberResponse
 * @return {Long}
 */
proto.proto.GroupAddMemberResponse.prototype.getUserId = function() {
  return this.userId;
};

/**
 * Set GroupAddMemberResponse userId.
 * @memberof ProtoGroupAddMemberResponse
 * @param {Long} value
 */
proto.proto.GroupAddMemberResponse.prototype.setUserId = function(value) {
  this.userId = value;
};

/**
 * Get GroupAddMemberResponse role.
 * @memberof ProtoGroupAddMemberResponse
 * @return {ProtoGroupRoom_Role}
 */
proto.proto.GroupAddMemberResponse.prototype.getRole = function() {
  return this.role;
};

/**
 * Set GroupAddMemberResponse role.
 * @memberof ProtoGroupAddMemberResponse
 * @param {ProtoGroupRoom_Role} value
 */
proto.proto.GroupAddMemberResponse.prototype.setRole = function(value) {
  this.role = value;
};

/**
 * @interface ProtoGroupAddModerator
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GroupAddModerator.prototype.serializeBinary = function() {
  return proto.proto.GroupAddModerator.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGroupAddModerator}
 */
proto.proto.GroupAddModerator.deserializeBinary = function(buffer) {
  return proto.proto.GroupAddModerator.decode(buffer);
};

/**
 * Get GroupAddModerator request.
 * @memberof ProtoGroupAddModerator
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.GroupAddModerator.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set GroupAddModerator request.
 * @memberof ProtoGroupAddModerator
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.GroupAddModerator.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get GroupAddModerator roomId.
 * @memberof ProtoGroupAddModerator
 * @return {Long}
 */
proto.proto.GroupAddModerator.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set GroupAddModerator roomId.
 * @memberof ProtoGroupAddModerator
 * @param {Long} value
 */
proto.proto.GroupAddModerator.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get GroupAddModerator memberId.
 * @memberof ProtoGroupAddModerator
 * @return {Long}
 */
proto.proto.GroupAddModerator.prototype.getMemberId = function() {
  return this.memberId;
};

/**
 * Set GroupAddModerator memberId.
 * @memberof ProtoGroupAddModerator
 * @param {Long} value
 */
proto.proto.GroupAddModerator.prototype.setMemberId = function(value) {
  this.memberId = value;
};

/**
 * @interface ProtoGroupAddModeratorResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GroupAddModeratorResponse.prototype.serializeBinary = function() {
  return proto.proto.GroupAddModeratorResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGroupAddModeratorResponse}
 */
proto.proto.GroupAddModeratorResponse.deserializeBinary = function(buffer) {
  return proto.proto.GroupAddModeratorResponse.decode(buffer);
};

/**
 * Get GroupAddModeratorResponse response.
 * @memberof ProtoGroupAddModeratorResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.GroupAddModeratorResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set GroupAddModeratorResponse response.
 * @memberof ProtoGroupAddModeratorResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.GroupAddModeratorResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get GroupAddModeratorResponse roomId.
 * @memberof ProtoGroupAddModeratorResponse
 * @return {Long}
 */
proto.proto.GroupAddModeratorResponse.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set GroupAddModeratorResponse roomId.
 * @memberof ProtoGroupAddModeratorResponse
 * @param {Long} value
 */
proto.proto.GroupAddModeratorResponse.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get GroupAddModeratorResponse memberId.
 * @memberof ProtoGroupAddModeratorResponse
 * @return {Long}
 */
proto.proto.GroupAddModeratorResponse.prototype.getMemberId = function() {
  return this.memberId;
};

/**
 * Set GroupAddModeratorResponse memberId.
 * @memberof ProtoGroupAddModeratorResponse
 * @param {Long} value
 */
proto.proto.GroupAddModeratorResponse.prototype.setMemberId = function(value) {
  this.memberId = value;
};

/**
 * @interface ProtoGroupAvatarAdd
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GroupAvatarAdd.prototype.serializeBinary = function() {
  return proto.proto.GroupAvatarAdd.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGroupAvatarAdd}
 */
proto.proto.GroupAvatarAdd.deserializeBinary = function(buffer) {
  return proto.proto.GroupAvatarAdd.decode(buffer);
};

/**
 * Get GroupAvatarAdd request.
 * @memberof ProtoGroupAvatarAdd
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.GroupAvatarAdd.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set GroupAvatarAdd request.
 * @memberof ProtoGroupAvatarAdd
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.GroupAvatarAdd.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get GroupAvatarAdd attachment.
 * @memberof ProtoGroupAvatarAdd
 * @return {string}
 */
proto.proto.GroupAvatarAdd.prototype.getAttachment = function() {
  return this.attachment;
};

/**
 * Set GroupAvatarAdd attachment.
 * @memberof ProtoGroupAvatarAdd
 * @param {string} value
 */
proto.proto.GroupAvatarAdd.prototype.setAttachment = function(value) {
  this.attachment = value;
};

/**
 * Get GroupAvatarAdd roomId.
 * @memberof ProtoGroupAvatarAdd
 * @return {Long}
 */
proto.proto.GroupAvatarAdd.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set GroupAvatarAdd roomId.
 * @memberof ProtoGroupAvatarAdd
 * @param {Long} value
 */
proto.proto.GroupAvatarAdd.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * @interface ProtoGroupAvatarAddResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GroupAvatarAddResponse.prototype.serializeBinary = function() {
  return proto.proto.GroupAvatarAddResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGroupAvatarAddResponse}
 */
proto.proto.GroupAvatarAddResponse.deserializeBinary = function(buffer) {
  return proto.proto.GroupAvatarAddResponse.decode(buffer);
};

/**
 * Get GroupAvatarAddResponse response.
 * @memberof ProtoGroupAvatarAddResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.GroupAvatarAddResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set GroupAvatarAddResponse response.
 * @memberof ProtoGroupAvatarAddResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.GroupAvatarAddResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get GroupAvatarAddResponse avatar.
 * @memberof ProtoGroupAvatarAddResponse
 * @return {(ProtoAvatar|null|undefined)}
 */
proto.proto.GroupAvatarAddResponse.prototype.getAvatar = function() {
  return this.avatar;
};

/**
 * Set GroupAvatarAddResponse avatar.
 * @memberof ProtoGroupAvatarAddResponse
 * @param {(ProtoAvatar|null|undefined)} value
 */
proto.proto.GroupAvatarAddResponse.prototype.setAvatar = function(value) {
  this.avatar = value;
};

/**
 * Get GroupAvatarAddResponse roomId.
 * @memberof ProtoGroupAvatarAddResponse
 * @return {Long}
 */
proto.proto.GroupAvatarAddResponse.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set GroupAvatarAddResponse roomId.
 * @memberof ProtoGroupAvatarAddResponse
 * @param {Long} value
 */
proto.proto.GroupAvatarAddResponse.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * @interface ProtoGroupAvatarDelete
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GroupAvatarDelete.prototype.serializeBinary = function() {
  return proto.proto.GroupAvatarDelete.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGroupAvatarDelete}
 */
proto.proto.GroupAvatarDelete.deserializeBinary = function(buffer) {
  return proto.proto.GroupAvatarDelete.decode(buffer);
};

/**
 * Get GroupAvatarDelete request.
 * @memberof ProtoGroupAvatarDelete
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.GroupAvatarDelete.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set GroupAvatarDelete request.
 * @memberof ProtoGroupAvatarDelete
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.GroupAvatarDelete.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get GroupAvatarDelete id.
 * @memberof ProtoGroupAvatarDelete
 * @return {Long}
 */
proto.proto.GroupAvatarDelete.prototype.getId = function() {
  return this.id;
};

/**
 * Set GroupAvatarDelete id.
 * @memberof ProtoGroupAvatarDelete
 * @param {Long} value
 */
proto.proto.GroupAvatarDelete.prototype.setId = function(value) {
  this.id = value;
};

/**
 * Get GroupAvatarDelete roomId.
 * @memberof ProtoGroupAvatarDelete
 * @return {Long}
 */
proto.proto.GroupAvatarDelete.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set GroupAvatarDelete roomId.
 * @memberof ProtoGroupAvatarDelete
 * @param {Long} value
 */
proto.proto.GroupAvatarDelete.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * @interface ProtoGroupAvatarDeleteResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GroupAvatarDeleteResponse.prototype.serializeBinary = function() {
  return proto.proto.GroupAvatarDeleteResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGroupAvatarDeleteResponse}
 */
proto.proto.GroupAvatarDeleteResponse.deserializeBinary = function(buffer) {
  return proto.proto.GroupAvatarDeleteResponse.decode(buffer);
};

/**
 * Get GroupAvatarDeleteResponse response.
 * @memberof ProtoGroupAvatarDeleteResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.GroupAvatarDeleteResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set GroupAvatarDeleteResponse response.
 * @memberof ProtoGroupAvatarDeleteResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.GroupAvatarDeleteResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get GroupAvatarDeleteResponse id.
 * @memberof ProtoGroupAvatarDeleteResponse
 * @return {Long}
 */
proto.proto.GroupAvatarDeleteResponse.prototype.getId = function() {
  return this.id;
};

/**
 * Set GroupAvatarDeleteResponse id.
 * @memberof ProtoGroupAvatarDeleteResponse
 * @param {Long} value
 */
proto.proto.GroupAvatarDeleteResponse.prototype.setId = function(value) {
  this.id = value;
};

/**
 * Get GroupAvatarDeleteResponse roomId.
 * @memberof ProtoGroupAvatarDeleteResponse
 * @return {Long}
 */
proto.proto.GroupAvatarDeleteResponse.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set GroupAvatarDeleteResponse roomId.
 * @memberof ProtoGroupAvatarDeleteResponse
 * @param {Long} value
 */
proto.proto.GroupAvatarDeleteResponse.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * @interface ProtoGroupAvatarGetList
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GroupAvatarGetList.prototype.serializeBinary = function() {
  return proto.proto.GroupAvatarGetList.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGroupAvatarGetList}
 */
proto.proto.GroupAvatarGetList.deserializeBinary = function(buffer) {
  return proto.proto.GroupAvatarGetList.decode(buffer);
};

/**
 * Get GroupAvatarGetList request.
 * @memberof ProtoGroupAvatarGetList
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.GroupAvatarGetList.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set GroupAvatarGetList request.
 * @memberof ProtoGroupAvatarGetList
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.GroupAvatarGetList.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get GroupAvatarGetList roomId.
 * @memberof ProtoGroupAvatarGetList
 * @return {Long}
 */
proto.proto.GroupAvatarGetList.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set GroupAvatarGetList roomId.
 * @memberof ProtoGroupAvatarGetList
 * @param {Long} value
 */
proto.proto.GroupAvatarGetList.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * @interface ProtoGroupAvatarGetListResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GroupAvatarGetListResponse.prototype.serializeBinary = function() {
  return proto.proto.GroupAvatarGetListResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGroupAvatarGetListResponse}
 */
proto.proto.GroupAvatarGetListResponse.deserializeBinary = function(buffer) {
  return proto.proto.GroupAvatarGetListResponse.decode(buffer);
};

/**
 * Get GroupAvatarGetListResponse response.
 * @memberof ProtoGroupAvatarGetListResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.GroupAvatarGetListResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set GroupAvatarGetListResponse response.
 * @memberof ProtoGroupAvatarGetListResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.GroupAvatarGetListResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get GroupAvatarGetListResponse avatar.
 * @memberof ProtoGroupAvatarGetListResponse
 * @return {Array.<ProtoAvatar>}
 */
proto.proto.GroupAvatarGetListResponse.prototype.getAvatarList = function() {
  return this.avatar;
};

/**
 * Set GroupAvatarGetListResponse avatar.
 * @memberof ProtoGroupAvatarGetListResponse
 * @param {Array.<ProtoAvatar>} value
 */
proto.proto.GroupAvatarGetListResponse.prototype.setAvatarList = function(value) {
  this.avatar = value;
};

/**
 * @interface ProtoGroupCheckUsername
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GroupCheckUsername.prototype.serializeBinary = function() {
  return proto.proto.GroupCheckUsername.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGroupCheckUsername}
 */
proto.proto.GroupCheckUsername.deserializeBinary = function(buffer) {
  return proto.proto.GroupCheckUsername.decode(buffer);
};

/**
 * Get GroupCheckUsername request.
 * @memberof ProtoGroupCheckUsername
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.GroupCheckUsername.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set GroupCheckUsername request.
 * @memberof ProtoGroupCheckUsername
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.GroupCheckUsername.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get GroupCheckUsername username.
 * @memberof ProtoGroupCheckUsername
 * @return {string}
 */
proto.proto.GroupCheckUsername.prototype.getUsername = function() {
  return this.username;
};

/**
 * Set GroupCheckUsername username.
 * @memberof ProtoGroupCheckUsername
 * @param {string} value
 */
proto.proto.GroupCheckUsername.prototype.setUsername = function(value) {
  this.username = value;
};

/**
 * Get GroupCheckUsername roomId.
 * @memberof ProtoGroupCheckUsername
 * @return {Long}
 */
proto.proto.GroupCheckUsername.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set GroupCheckUsername roomId.
 * @memberof ProtoGroupCheckUsername
 * @param {Long} value
 */
proto.proto.GroupCheckUsername.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * @interface ProtoGroupCheckUsernameResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GroupCheckUsernameResponse.prototype.serializeBinary = function() {
  return proto.proto.GroupCheckUsernameResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGroupCheckUsernameResponse}
 */
proto.proto.GroupCheckUsernameResponse.deserializeBinary = function(buffer) {
  return proto.proto.GroupCheckUsernameResponse.decode(buffer);
};

/**
 * Get GroupCheckUsernameResponse response.
 * @memberof ProtoGroupCheckUsernameResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.GroupCheckUsernameResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set GroupCheckUsernameResponse response.
 * @memberof ProtoGroupCheckUsernameResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.GroupCheckUsernameResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get GroupCheckUsernameResponse status.
 * @memberof ProtoGroupCheckUsernameResponse
 * @return {ProtoGroupCheckUsernameResponse_Status}
 */
proto.proto.GroupCheckUsernameResponse.prototype.getStatus = function() {
  return this.status;
};

/**
 * Set GroupCheckUsernameResponse status.
 * @memberof ProtoGroupCheckUsernameResponse
 * @param {ProtoGroupCheckUsernameResponse_Status} value
 */
proto.proto.GroupCheckUsernameResponse.prototype.setStatus = function(value) {
  this.status = value;
};

/**
 * @typedef {number} ProtoGroupCheckUsernameResponse_Status
 */

/**
 * Status enum.
 * @enum {ProtoGroupCheckUsernameResponse_Status}
 * @memberof ProtoGroupCheckUsernameResponse
 */
proto.proto.GroupCheckUsernameResponse.Status = proto.proto.GroupCheckUsernameResponse.prototype.Status = {
  INVALID : 0,
  TAKEN : 1,
  AVAILABLE : 2,
  OCCUPYING_LIMIT_EXCEEDED : 3,
};

/**
 * @interface ProtoGroupClearMessage
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GroupClearMessage.prototype.serializeBinary = function() {
  return proto.proto.GroupClearMessage.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGroupClearMessage}
 */
proto.proto.GroupClearMessage.deserializeBinary = function(buffer) {
  return proto.proto.GroupClearMessage.decode(buffer);
};

/**
 * Get GroupClearMessage request.
 * @memberof ProtoGroupClearMessage
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.GroupClearMessage.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set GroupClearMessage request.
 * @memberof ProtoGroupClearMessage
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.GroupClearMessage.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get GroupClearMessage roomId.
 * @memberof ProtoGroupClearMessage
 * @return {Long}
 */
proto.proto.GroupClearMessage.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set GroupClearMessage roomId.
 * @memberof ProtoGroupClearMessage
 * @param {Long} value
 */
proto.proto.GroupClearMessage.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get GroupClearMessage clearId.
 * @memberof ProtoGroupClearMessage
 * @return {Long}
 */
proto.proto.GroupClearMessage.prototype.getClearId = function() {
  return this.clearId;
};

/**
 * Set GroupClearMessage clearId.
 * @memberof ProtoGroupClearMessage
 * @param {Long} value
 */
proto.proto.GroupClearMessage.prototype.setClearId = function(value) {
  this.clearId = value;
};

/**
 * @interface ProtoGroupClearMessageResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GroupClearMessageResponse.prototype.serializeBinary = function() {
  return proto.proto.GroupClearMessageResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGroupClearMessageResponse}
 */
proto.proto.GroupClearMessageResponse.deserializeBinary = function(buffer) {
  return proto.proto.GroupClearMessageResponse.decode(buffer);
};

/**
 * Get GroupClearMessageResponse response.
 * @memberof ProtoGroupClearMessageResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.GroupClearMessageResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set GroupClearMessageResponse response.
 * @memberof ProtoGroupClearMessageResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.GroupClearMessageResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get GroupClearMessageResponse roomId.
 * @memberof ProtoGroupClearMessageResponse
 * @return {Long}
 */
proto.proto.GroupClearMessageResponse.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set GroupClearMessageResponse roomId.
 * @memberof ProtoGroupClearMessageResponse
 * @param {Long} value
 */
proto.proto.GroupClearMessageResponse.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get GroupClearMessageResponse clearId.
 * @memberof ProtoGroupClearMessageResponse
 * @return {Long}
 */
proto.proto.GroupClearMessageResponse.prototype.getClearId = function() {
  return this.clearId;
};

/**
 * Set GroupClearMessageResponse clearId.
 * @memberof ProtoGroupClearMessageResponse
 * @param {Long} value
 */
proto.proto.GroupClearMessageResponse.prototype.setClearId = function(value) {
  this.clearId = value;
};

/**
 * @interface ProtoGroupCreate
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GroupCreate.prototype.serializeBinary = function() {
  return proto.proto.GroupCreate.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGroupCreate}
 */
proto.proto.GroupCreate.deserializeBinary = function(buffer) {
  return proto.proto.GroupCreate.decode(buffer);
};

/**
 * Get GroupCreate request.
 * @memberof ProtoGroupCreate
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.GroupCreate.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set GroupCreate request.
 * @memberof ProtoGroupCreate
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.GroupCreate.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get GroupCreate name.
 * @memberof ProtoGroupCreate
 * @return {string}
 */
proto.proto.GroupCreate.prototype.getName = function() {
  return this.name;
};

/**
 * Set GroupCreate name.
 * @memberof ProtoGroupCreate
 * @param {string} value
 */
proto.proto.GroupCreate.prototype.setName = function(value) {
  this.name = value;
};

/**
 * Get GroupCreate description.
 * @memberof ProtoGroupCreate
 * @return {string}
 */
proto.proto.GroupCreate.prototype.getDescription = function() {
  return this.description;
};

/**
 * Set GroupCreate description.
 * @memberof ProtoGroupCreate
 * @param {string} value
 */
proto.proto.GroupCreate.prototype.setDescription = function(value) {
  this.description = value;
};

/**
 * @interface ProtoGroupCreateResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GroupCreateResponse.prototype.serializeBinary = function() {
  return proto.proto.GroupCreateResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGroupCreateResponse}
 */
proto.proto.GroupCreateResponse.deserializeBinary = function(buffer) {
  return proto.proto.GroupCreateResponse.decode(buffer);
};

/**
 * Get GroupCreateResponse response.
 * @memberof ProtoGroupCreateResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.GroupCreateResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set GroupCreateResponse response.
 * @memberof ProtoGroupCreateResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.GroupCreateResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get GroupCreateResponse roomId.
 * @memberof ProtoGroupCreateResponse
 * @return {Long}
 */
proto.proto.GroupCreateResponse.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set GroupCreateResponse roomId.
 * @memberof ProtoGroupCreateResponse
 * @param {Long} value
 */
proto.proto.GroupCreateResponse.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get GroupCreateResponse inviteLink.
 * @memberof ProtoGroupCreateResponse
 * @return {string}
 */
proto.proto.GroupCreateResponse.prototype.getInviteLink = function() {
  return this.inviteLink;
};

/**
 * Set GroupCreateResponse inviteLink.
 * @memberof ProtoGroupCreateResponse
 * @param {string} value
 */
proto.proto.GroupCreateResponse.prototype.setInviteLink = function(value) {
  this.inviteLink = value;
};

/**
 * @interface ProtoGroupDelete
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GroupDelete.prototype.serializeBinary = function() {
  return proto.proto.GroupDelete.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGroupDelete}
 */
proto.proto.GroupDelete.deserializeBinary = function(buffer) {
  return proto.proto.GroupDelete.decode(buffer);
};

/**
 * Get GroupDelete request.
 * @memberof ProtoGroupDelete
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.GroupDelete.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set GroupDelete request.
 * @memberof ProtoGroupDelete
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.GroupDelete.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get GroupDelete roomId.
 * @memberof ProtoGroupDelete
 * @return {Long}
 */
proto.proto.GroupDelete.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set GroupDelete roomId.
 * @memberof ProtoGroupDelete
 * @param {Long} value
 */
proto.proto.GroupDelete.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * @interface ProtoGroupDeleteResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GroupDeleteResponse.prototype.serializeBinary = function() {
  return proto.proto.GroupDeleteResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGroupDeleteResponse}
 */
proto.proto.GroupDeleteResponse.deserializeBinary = function(buffer) {
  return proto.proto.GroupDeleteResponse.decode(buffer);
};

/**
 * Get GroupDeleteResponse response.
 * @memberof ProtoGroupDeleteResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.GroupDeleteResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set GroupDeleteResponse response.
 * @memberof ProtoGroupDeleteResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.GroupDeleteResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get GroupDeleteResponse roomId.
 * @memberof ProtoGroupDeleteResponse
 * @return {Long}
 */
proto.proto.GroupDeleteResponse.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set GroupDeleteResponse roomId.
 * @memberof ProtoGroupDeleteResponse
 * @param {Long} value
 */
proto.proto.GroupDeleteResponse.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * @interface ProtoGroupDeleteMessage
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GroupDeleteMessage.prototype.serializeBinary = function() {
  return proto.proto.GroupDeleteMessage.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGroupDeleteMessage}
 */
proto.proto.GroupDeleteMessage.deserializeBinary = function(buffer) {
  return proto.proto.GroupDeleteMessage.decode(buffer);
};

/**
 * Get GroupDeleteMessage request.
 * @memberof ProtoGroupDeleteMessage
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.GroupDeleteMessage.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set GroupDeleteMessage request.
 * @memberof ProtoGroupDeleteMessage
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.GroupDeleteMessage.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get GroupDeleteMessage roomId.
 * @memberof ProtoGroupDeleteMessage
 * @return {Long}
 */
proto.proto.GroupDeleteMessage.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set GroupDeleteMessage roomId.
 * @memberof ProtoGroupDeleteMessage
 * @param {Long} value
 */
proto.proto.GroupDeleteMessage.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get GroupDeleteMessage messageId.
 * @memberof ProtoGroupDeleteMessage
 * @return {Long}
 */
proto.proto.GroupDeleteMessage.prototype.getMessageId = function() {
  return this.messageId;
};

/**
 * Set GroupDeleteMessage messageId.
 * @memberof ProtoGroupDeleteMessage
 * @param {Long} value
 */
proto.proto.GroupDeleteMessage.prototype.setMessageId = function(value) {
  this.messageId = value;
};

/**
 * @interface ProtoGroupDeleteMessageResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GroupDeleteMessageResponse.prototype.serializeBinary = function() {
  return proto.proto.GroupDeleteMessageResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGroupDeleteMessageResponse}
 */
proto.proto.GroupDeleteMessageResponse.deserializeBinary = function(buffer) {
  return proto.proto.GroupDeleteMessageResponse.decode(buffer);
};

/**
 * Get GroupDeleteMessageResponse response.
 * @memberof ProtoGroupDeleteMessageResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.GroupDeleteMessageResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set GroupDeleteMessageResponse response.
 * @memberof ProtoGroupDeleteMessageResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.GroupDeleteMessageResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get GroupDeleteMessageResponse roomId.
 * @memberof ProtoGroupDeleteMessageResponse
 * @return {Long}
 */
proto.proto.GroupDeleteMessageResponse.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set GroupDeleteMessageResponse roomId.
 * @memberof ProtoGroupDeleteMessageResponse
 * @param {Long} value
 */
proto.proto.GroupDeleteMessageResponse.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get GroupDeleteMessageResponse messageId.
 * @memberof ProtoGroupDeleteMessageResponse
 * @return {Long}
 */
proto.proto.GroupDeleteMessageResponse.prototype.getMessageId = function() {
  return this.messageId;
};

/**
 * Set GroupDeleteMessageResponse messageId.
 * @memberof ProtoGroupDeleteMessageResponse
 * @param {Long} value
 */
proto.proto.GroupDeleteMessageResponse.prototype.setMessageId = function(value) {
  this.messageId = value;
};

/**
 * Get GroupDeleteMessageResponse deleteVersion.
 * @memberof ProtoGroupDeleteMessageResponse
 * @return {Long}
 */
proto.proto.GroupDeleteMessageResponse.prototype.getDeleteVersion = function() {
  return this.deleteVersion;
};

/**
 * Set GroupDeleteMessageResponse deleteVersion.
 * @memberof ProtoGroupDeleteMessageResponse
 * @param {Long} value
 */
proto.proto.GroupDeleteMessageResponse.prototype.setDeleteVersion = function(value) {
  this.deleteVersion = value;
};

/**
 * @interface ProtoGroupEdit
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GroupEdit.prototype.serializeBinary = function() {
  return proto.proto.GroupEdit.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGroupEdit}
 */
proto.proto.GroupEdit.deserializeBinary = function(buffer) {
  return proto.proto.GroupEdit.decode(buffer);
};

/**
 * Get GroupEdit request.
 * @memberof ProtoGroupEdit
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.GroupEdit.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set GroupEdit request.
 * @memberof ProtoGroupEdit
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.GroupEdit.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get GroupEdit roomId.
 * @memberof ProtoGroupEdit
 * @return {Long}
 */
proto.proto.GroupEdit.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set GroupEdit roomId.
 * @memberof ProtoGroupEdit
 * @param {Long} value
 */
proto.proto.GroupEdit.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get GroupEdit name.
 * @memberof ProtoGroupEdit
 * @return {string}
 */
proto.proto.GroupEdit.prototype.getName = function() {
  return this.name;
};

/**
 * Set GroupEdit name.
 * @memberof ProtoGroupEdit
 * @param {string} value
 */
proto.proto.GroupEdit.prototype.setName = function(value) {
  this.name = value;
};

/**
 * Get GroupEdit description.
 * @memberof ProtoGroupEdit
 * @return {string}
 */
proto.proto.GroupEdit.prototype.getDescription = function() {
  return this.description;
};

/**
 * Set GroupEdit description.
 * @memberof ProtoGroupEdit
 * @param {string} value
 */
proto.proto.GroupEdit.prototype.setDescription = function(value) {
  this.description = value;
};

/**
 * @interface ProtoGroupEditResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GroupEditResponse.prototype.serializeBinary = function() {
  return proto.proto.GroupEditResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGroupEditResponse}
 */
proto.proto.GroupEditResponse.deserializeBinary = function(buffer) {
  return proto.proto.GroupEditResponse.decode(buffer);
};

/**
 * Get GroupEditResponse response.
 * @memberof ProtoGroupEditResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.GroupEditResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set GroupEditResponse response.
 * @memberof ProtoGroupEditResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.GroupEditResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get GroupEditResponse roomId.
 * @memberof ProtoGroupEditResponse
 * @return {Long}
 */
proto.proto.GroupEditResponse.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set GroupEditResponse roomId.
 * @memberof ProtoGroupEditResponse
 * @param {Long} value
 */
proto.proto.GroupEditResponse.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get GroupEditResponse name.
 * @memberof ProtoGroupEditResponse
 * @return {string}
 */
proto.proto.GroupEditResponse.prototype.getName = function() {
  return this.name;
};

/**
 * Set GroupEditResponse name.
 * @memberof ProtoGroupEditResponse
 * @param {string} value
 */
proto.proto.GroupEditResponse.prototype.setName = function(value) {
  this.name = value;
};

/**
 * Get GroupEditResponse description.
 * @memberof ProtoGroupEditResponse
 * @return {string}
 */
proto.proto.GroupEditResponse.prototype.getDescription = function() {
  return this.description;
};

/**
 * Set GroupEditResponse description.
 * @memberof ProtoGroupEditResponse
 * @param {string} value
 */
proto.proto.GroupEditResponse.prototype.setDescription = function(value) {
  this.description = value;
};

/**
 * @interface ProtoGroupEditMessage
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GroupEditMessage.prototype.serializeBinary = function() {
  return proto.proto.GroupEditMessage.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGroupEditMessage}
 */
proto.proto.GroupEditMessage.deserializeBinary = function(buffer) {
  return proto.proto.GroupEditMessage.decode(buffer);
};

/**
 * Get GroupEditMessage request.
 * @memberof ProtoGroupEditMessage
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.GroupEditMessage.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set GroupEditMessage request.
 * @memberof ProtoGroupEditMessage
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.GroupEditMessage.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get GroupEditMessage roomId.
 * @memberof ProtoGroupEditMessage
 * @return {Long}
 */
proto.proto.GroupEditMessage.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set GroupEditMessage roomId.
 * @memberof ProtoGroupEditMessage
 * @param {Long} value
 */
proto.proto.GroupEditMessage.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get GroupEditMessage messageId.
 * @memberof ProtoGroupEditMessage
 * @return {Long}
 */
proto.proto.GroupEditMessage.prototype.getMessageId = function() {
  return this.messageId;
};

/**
 * Set GroupEditMessage messageId.
 * @memberof ProtoGroupEditMessage
 * @param {Long} value
 */
proto.proto.GroupEditMessage.prototype.setMessageId = function(value) {
  this.messageId = value;
};

/**
 * Get GroupEditMessage message.
 * @memberof ProtoGroupEditMessage
 * @return {string}
 */
proto.proto.GroupEditMessage.prototype.getMessage = function() {
  return this.message;
};

/**
 * Set GroupEditMessage message.
 * @memberof ProtoGroupEditMessage
 * @param {string} value
 */
proto.proto.GroupEditMessage.prototype.setMessage = function(value) {
  this.message = value;
};

/**
 * @interface ProtoGroupEditMessageResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GroupEditMessageResponse.prototype.serializeBinary = function() {
  return proto.proto.GroupEditMessageResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGroupEditMessageResponse}
 */
proto.proto.GroupEditMessageResponse.deserializeBinary = function(buffer) {
  return proto.proto.GroupEditMessageResponse.decode(buffer);
};

/**
 * Get GroupEditMessageResponse response.
 * @memberof ProtoGroupEditMessageResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.GroupEditMessageResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set GroupEditMessageResponse response.
 * @memberof ProtoGroupEditMessageResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.GroupEditMessageResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get GroupEditMessageResponse roomId.
 * @memberof ProtoGroupEditMessageResponse
 * @return {Long}
 */
proto.proto.GroupEditMessageResponse.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set GroupEditMessageResponse roomId.
 * @memberof ProtoGroupEditMessageResponse
 * @param {Long} value
 */
proto.proto.GroupEditMessageResponse.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get GroupEditMessageResponse messageId.
 * @memberof ProtoGroupEditMessageResponse
 * @return {Long}
 */
proto.proto.GroupEditMessageResponse.prototype.getMessageId = function() {
  return this.messageId;
};

/**
 * Set GroupEditMessageResponse messageId.
 * @memberof ProtoGroupEditMessageResponse
 * @param {Long} value
 */
proto.proto.GroupEditMessageResponse.prototype.setMessageId = function(value) {
  this.messageId = value;
};

/**
 * Get GroupEditMessageResponse messageVersion.
 * @memberof ProtoGroupEditMessageResponse
 * @return {Long}
 */
proto.proto.GroupEditMessageResponse.prototype.getMessageVersion = function() {
  return this.messageVersion;
};

/**
 * Set GroupEditMessageResponse messageVersion.
 * @memberof ProtoGroupEditMessageResponse
 * @param {Long} value
 */
proto.proto.GroupEditMessageResponse.prototype.setMessageVersion = function(value) {
  this.messageVersion = value;
};

/**
 * Get GroupEditMessageResponse message.
 * @memberof ProtoGroupEditMessageResponse
 * @return {string}
 */
proto.proto.GroupEditMessageResponse.prototype.getMessage = function() {
  return this.message;
};

/**
 * Set GroupEditMessageResponse message.
 * @memberof ProtoGroupEditMessageResponse
 * @param {string} value
 */
proto.proto.GroupEditMessageResponse.prototype.setMessage = function(value) {
  this.message = value;
};

/**
 * Get GroupEditMessageResponse messageType.
 * @memberof ProtoGroupEditMessageResponse
 * @return {ProtoRoomMessageType}
 */
proto.proto.GroupEditMessageResponse.prototype.getMessageType = function() {
  return this.messageType;
};

/**
 * Set GroupEditMessageResponse messageType.
 * @memberof ProtoGroupEditMessageResponse
 * @param {ProtoRoomMessageType} value
 */
proto.proto.GroupEditMessageResponse.prototype.setMessageType = function(value) {
  this.messageType = value;
};

/**
 * @interface ProtoGroupGetDraft
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GroupGetDraft.prototype.serializeBinary = function() {
  return proto.proto.GroupGetDraft.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGroupGetDraft}
 */
proto.proto.GroupGetDraft.deserializeBinary = function(buffer) {
  return proto.proto.GroupGetDraft.decode(buffer);
};

/**
 * Get GroupGetDraft request.
 * @memberof ProtoGroupGetDraft
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.GroupGetDraft.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set GroupGetDraft request.
 * @memberof ProtoGroupGetDraft
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.GroupGetDraft.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get GroupGetDraft roomId.
 * @memberof ProtoGroupGetDraft
 * @return {Long}
 */
proto.proto.GroupGetDraft.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set GroupGetDraft roomId.
 * @memberof ProtoGroupGetDraft
 * @param {Long} value
 */
proto.proto.GroupGetDraft.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * @interface ProtoGroupGetDraftResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GroupGetDraftResponse.prototype.serializeBinary = function() {
  return proto.proto.GroupGetDraftResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGroupGetDraftResponse}
 */
proto.proto.GroupGetDraftResponse.deserializeBinary = function(buffer) {
  return proto.proto.GroupGetDraftResponse.decode(buffer);
};

/**
 * Get GroupGetDraftResponse response.
 * @memberof ProtoGroupGetDraftResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.GroupGetDraftResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set GroupGetDraftResponse response.
 * @memberof ProtoGroupGetDraftResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.GroupGetDraftResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get GroupGetDraftResponse draft.
 * @memberof ProtoGroupGetDraftResponse
 * @return {(ProtoRoomDraft|null|undefined)}
 */
proto.proto.GroupGetDraftResponse.prototype.getDraft = function() {
  return this.draft;
};

/**
 * Set GroupGetDraftResponse draft.
 * @memberof ProtoGroupGetDraftResponse
 * @param {(ProtoRoomDraft|null|undefined)} value
 */
proto.proto.GroupGetDraftResponse.prototype.setDraft = function(value) {
  this.draft = value;
};

/**
 * @interface ProtoGroupGetMemberList
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GroupGetMemberList.prototype.serializeBinary = function() {
  return proto.proto.GroupGetMemberList.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGroupGetMemberList}
 */
proto.proto.GroupGetMemberList.deserializeBinary = function(buffer) {
  return proto.proto.GroupGetMemberList.decode(buffer);
};

/**
 * Get GroupGetMemberList request.
 * @memberof ProtoGroupGetMemberList
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.GroupGetMemberList.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set GroupGetMemberList request.
 * @memberof ProtoGroupGetMemberList
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.GroupGetMemberList.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get GroupGetMemberList roomId.
 * @memberof ProtoGroupGetMemberList
 * @return {Long}
 */
proto.proto.GroupGetMemberList.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set GroupGetMemberList roomId.
 * @memberof ProtoGroupGetMemberList
 * @param {Long} value
 */
proto.proto.GroupGetMemberList.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get GroupGetMemberList filterRole.
 * @memberof ProtoGroupGetMemberList
 * @return {ProtoGroupGetMemberList_FilterRole}
 */
proto.proto.GroupGetMemberList.prototype.getFilterRole = function() {
  return this.filterRole;
};

/**
 * Set GroupGetMemberList filterRole.
 * @memberof ProtoGroupGetMemberList
 * @param {ProtoGroupGetMemberList_FilterRole} value
 */
proto.proto.GroupGetMemberList.prototype.setFilterRole = function(value) {
  this.filterRole = value;
};

/**
 * Get GroupGetMemberList pagination.
 * @memberof ProtoGroupGetMemberList
 * @return {(ProtoPagination|null|undefined)}
 */
proto.proto.GroupGetMemberList.prototype.getPagination = function() {
  return this.pagination;
};

/**
 * Set GroupGetMemberList pagination.
 * @memberof ProtoGroupGetMemberList
 * @param {(ProtoPagination|null|undefined)} value
 */
proto.proto.GroupGetMemberList.prototype.setPagination = function(value) {
  this.pagination = value;
};

/**
 * @typedef {number} ProtoGroupGetMemberList_FilterRole
 */

/**
 * FilterRole enum.
 * @enum {ProtoGroupGetMemberList_FilterRole}
 * @memberof ProtoGroupGetMemberList
 */
proto.proto.GroupGetMemberList.FilterRole = proto.proto.GroupGetMemberList.prototype.FilterRole = {
  ALL : 0,
  MEMBER : 1,
  MODERATOR : 2,
  ADMIN : 3,
};

/**
 * @interface ProtoGroupGetMemberListResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GroupGetMemberListResponse.prototype.serializeBinary = function() {
  return proto.proto.GroupGetMemberListResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGroupGetMemberListResponse}
 */
proto.proto.GroupGetMemberListResponse.deserializeBinary = function(buffer) {
  return proto.proto.GroupGetMemberListResponse.decode(buffer);
};

/**
 * Get GroupGetMemberListResponse response.
 * @memberof ProtoGroupGetMemberListResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.GroupGetMemberListResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set GroupGetMemberListResponse response.
 * @memberof ProtoGroupGetMemberListResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.GroupGetMemberListResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get GroupGetMemberListResponse member.
 * @memberof ProtoGroupGetMemberListResponse
 * @return {Array.<ProtoGroupGetMemberListResponse_Member>}
 */
proto.proto.GroupGetMemberListResponse.prototype.getMemberList = function() {
  return this.member;
};

/**
 * Set GroupGetMemberListResponse member.
 * @memberof ProtoGroupGetMemberListResponse
 * @param {Array.<ProtoGroupGetMemberListResponse_Member>} value
 */
proto.proto.GroupGetMemberListResponse.prototype.setMemberList = function(value) {
  this.member = value;
};

/**
 * @interface ProtoGroupGetMemberListResponse_Member
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GroupGetMemberListResponse.Member.prototype.serializeBinary = function() {
  return proto.proto.GroupGetMemberListResponse.Member.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGroupGetMemberListResponse_Member}
 */
proto.proto.GroupGetMemberListResponse.Member.deserializeBinary = function(buffer) {
  return proto.proto.GroupGetMemberListResponse.Member.decode(buffer);
};

/**
 * Get Member userId.
 * @memberof ProtoGroupGetMemberListResponse_Member
 * @return {Long}
 */
proto.proto.GroupGetMemberListResponse.Member.prototype.getUserId = function() {
  return this.userId;
};

/**
 * Set Member userId.
 * @memberof ProtoGroupGetMemberListResponse_Member
 * @param {Long} value
 */
proto.proto.GroupGetMemberListResponse.Member.prototype.setUserId = function(value) {
  this.userId = value;
};

/**
 * Get Member role.
 * @memberof ProtoGroupGetMemberListResponse_Member
 * @return {ProtoGroupRoom_Role}
 */
proto.proto.GroupGetMemberListResponse.Member.prototype.getRole = function() {
  return this.role;
};

/**
 * Set Member role.
 * @memberof ProtoGroupGetMemberListResponse_Member
 * @param {ProtoGroupRoom_Role} value
 */
proto.proto.GroupGetMemberListResponse.Member.prototype.setRole = function(value) {
  this.role = value;
};

/**
 * @interface ProtoGroupKickAdmin
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GroupKickAdmin.prototype.serializeBinary = function() {
  return proto.proto.GroupKickAdmin.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGroupKickAdmin}
 */
proto.proto.GroupKickAdmin.deserializeBinary = function(buffer) {
  return proto.proto.GroupKickAdmin.decode(buffer);
};

/**
 * Get GroupKickAdmin request.
 * @memberof ProtoGroupKickAdmin
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.GroupKickAdmin.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set GroupKickAdmin request.
 * @memberof ProtoGroupKickAdmin
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.GroupKickAdmin.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get GroupKickAdmin roomId.
 * @memberof ProtoGroupKickAdmin
 * @return {Long}
 */
proto.proto.GroupKickAdmin.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set GroupKickAdmin roomId.
 * @memberof ProtoGroupKickAdmin
 * @param {Long} value
 */
proto.proto.GroupKickAdmin.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get GroupKickAdmin memberId.
 * @memberof ProtoGroupKickAdmin
 * @return {Long}
 */
proto.proto.GroupKickAdmin.prototype.getMemberId = function() {
  return this.memberId;
};

/**
 * Set GroupKickAdmin memberId.
 * @memberof ProtoGroupKickAdmin
 * @param {Long} value
 */
proto.proto.GroupKickAdmin.prototype.setMemberId = function(value) {
  this.memberId = value;
};

/**
 * @interface ProtoGroupKickAdminResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GroupKickAdminResponse.prototype.serializeBinary = function() {
  return proto.proto.GroupKickAdminResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGroupKickAdminResponse}
 */
proto.proto.GroupKickAdminResponse.deserializeBinary = function(buffer) {
  return proto.proto.GroupKickAdminResponse.decode(buffer);
};

/**
 * Get GroupKickAdminResponse response.
 * @memberof ProtoGroupKickAdminResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.GroupKickAdminResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set GroupKickAdminResponse response.
 * @memberof ProtoGroupKickAdminResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.GroupKickAdminResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get GroupKickAdminResponse roomId.
 * @memberof ProtoGroupKickAdminResponse
 * @return {Long}
 */
proto.proto.GroupKickAdminResponse.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set GroupKickAdminResponse roomId.
 * @memberof ProtoGroupKickAdminResponse
 * @param {Long} value
 */
proto.proto.GroupKickAdminResponse.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get GroupKickAdminResponse memberId.
 * @memberof ProtoGroupKickAdminResponse
 * @return {Long}
 */
proto.proto.GroupKickAdminResponse.prototype.getMemberId = function() {
  return this.memberId;
};

/**
 * Set GroupKickAdminResponse memberId.
 * @memberof ProtoGroupKickAdminResponse
 * @param {Long} value
 */
proto.proto.GroupKickAdminResponse.prototype.setMemberId = function(value) {
  this.memberId = value;
};

/**
 * @interface ProtoGroupKickMember
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GroupKickMember.prototype.serializeBinary = function() {
  return proto.proto.GroupKickMember.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGroupKickMember}
 */
proto.proto.GroupKickMember.deserializeBinary = function(buffer) {
  return proto.proto.GroupKickMember.decode(buffer);
};

/**
 * Get GroupKickMember request.
 * @memberof ProtoGroupKickMember
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.GroupKickMember.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set GroupKickMember request.
 * @memberof ProtoGroupKickMember
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.GroupKickMember.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get GroupKickMember roomId.
 * @memberof ProtoGroupKickMember
 * @return {Long}
 */
proto.proto.GroupKickMember.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set GroupKickMember roomId.
 * @memberof ProtoGroupKickMember
 * @param {Long} value
 */
proto.proto.GroupKickMember.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get GroupKickMember memberId.
 * @memberof ProtoGroupKickMember
 * @return {Long}
 */
proto.proto.GroupKickMember.prototype.getMemberId = function() {
  return this.memberId;
};

/**
 * Set GroupKickMember memberId.
 * @memberof ProtoGroupKickMember
 * @param {Long} value
 */
proto.proto.GroupKickMember.prototype.setMemberId = function(value) {
  this.memberId = value;
};

/**
 * @interface ProtoGroupKickMemberResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GroupKickMemberResponse.prototype.serializeBinary = function() {
  return proto.proto.GroupKickMemberResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGroupKickMemberResponse}
 */
proto.proto.GroupKickMemberResponse.deserializeBinary = function(buffer) {
  return proto.proto.GroupKickMemberResponse.decode(buffer);
};

/**
 * Get GroupKickMemberResponse response.
 * @memberof ProtoGroupKickMemberResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.GroupKickMemberResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set GroupKickMemberResponse response.
 * @memberof ProtoGroupKickMemberResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.GroupKickMemberResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get GroupKickMemberResponse roomId.
 * @memberof ProtoGroupKickMemberResponse
 * @return {Long}
 */
proto.proto.GroupKickMemberResponse.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set GroupKickMemberResponse roomId.
 * @memberof ProtoGroupKickMemberResponse
 * @param {Long} value
 */
proto.proto.GroupKickMemberResponse.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get GroupKickMemberResponse memberId.
 * @memberof ProtoGroupKickMemberResponse
 * @return {Long}
 */
proto.proto.GroupKickMemberResponse.prototype.getMemberId = function() {
  return this.memberId;
};

/**
 * Set GroupKickMemberResponse memberId.
 * @memberof ProtoGroupKickMemberResponse
 * @param {Long} value
 */
proto.proto.GroupKickMemberResponse.prototype.setMemberId = function(value) {
  this.memberId = value;
};

/**
 * @interface ProtoGroupKickModerator
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GroupKickModerator.prototype.serializeBinary = function() {
  return proto.proto.GroupKickModerator.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGroupKickModerator}
 */
proto.proto.GroupKickModerator.deserializeBinary = function(buffer) {
  return proto.proto.GroupKickModerator.decode(buffer);
};

/**
 * Get GroupKickModerator request.
 * @memberof ProtoGroupKickModerator
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.GroupKickModerator.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set GroupKickModerator request.
 * @memberof ProtoGroupKickModerator
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.GroupKickModerator.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get GroupKickModerator roomId.
 * @memberof ProtoGroupKickModerator
 * @return {Long}
 */
proto.proto.GroupKickModerator.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set GroupKickModerator roomId.
 * @memberof ProtoGroupKickModerator
 * @param {Long} value
 */
proto.proto.GroupKickModerator.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get GroupKickModerator memberId.
 * @memberof ProtoGroupKickModerator
 * @return {Long}
 */
proto.proto.GroupKickModerator.prototype.getMemberId = function() {
  return this.memberId;
};

/**
 * Set GroupKickModerator memberId.
 * @memberof ProtoGroupKickModerator
 * @param {Long} value
 */
proto.proto.GroupKickModerator.prototype.setMemberId = function(value) {
  this.memberId = value;
};

/**
 * @interface ProtoGroupKickModeratorResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GroupKickModeratorResponse.prototype.serializeBinary = function() {
  return proto.proto.GroupKickModeratorResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGroupKickModeratorResponse}
 */
proto.proto.GroupKickModeratorResponse.deserializeBinary = function(buffer) {
  return proto.proto.GroupKickModeratorResponse.decode(buffer);
};

/**
 * Get GroupKickModeratorResponse response.
 * @memberof ProtoGroupKickModeratorResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.GroupKickModeratorResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set GroupKickModeratorResponse response.
 * @memberof ProtoGroupKickModeratorResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.GroupKickModeratorResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get GroupKickModeratorResponse roomId.
 * @memberof ProtoGroupKickModeratorResponse
 * @return {Long}
 */
proto.proto.GroupKickModeratorResponse.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set GroupKickModeratorResponse roomId.
 * @memberof ProtoGroupKickModeratorResponse
 * @param {Long} value
 */
proto.proto.GroupKickModeratorResponse.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get GroupKickModeratorResponse memberId.
 * @memberof ProtoGroupKickModeratorResponse
 * @return {Long}
 */
proto.proto.GroupKickModeratorResponse.prototype.getMemberId = function() {
  return this.memberId;
};

/**
 * Set GroupKickModeratorResponse memberId.
 * @memberof ProtoGroupKickModeratorResponse
 * @param {Long} value
 */
proto.proto.GroupKickModeratorResponse.prototype.setMemberId = function(value) {
  this.memberId = value;
};

/**
 * @interface ProtoGroupLeft
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GroupLeft.prototype.serializeBinary = function() {
  return proto.proto.GroupLeft.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGroupLeft}
 */
proto.proto.GroupLeft.deserializeBinary = function(buffer) {
  return proto.proto.GroupLeft.decode(buffer);
};

/**
 * Get GroupLeft request.
 * @memberof ProtoGroupLeft
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.GroupLeft.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set GroupLeft request.
 * @memberof ProtoGroupLeft
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.GroupLeft.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get GroupLeft roomId.
 * @memberof ProtoGroupLeft
 * @return {Long}
 */
proto.proto.GroupLeft.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set GroupLeft roomId.
 * @memberof ProtoGroupLeft
 * @param {Long} value
 */
proto.proto.GroupLeft.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * @interface ProtoGroupLeftResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GroupLeftResponse.prototype.serializeBinary = function() {
  return proto.proto.GroupLeftResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGroupLeftResponse}
 */
proto.proto.GroupLeftResponse.deserializeBinary = function(buffer) {
  return proto.proto.GroupLeftResponse.decode(buffer);
};

/**
 * Get GroupLeftResponse response.
 * @memberof ProtoGroupLeftResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.GroupLeftResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set GroupLeftResponse response.
 * @memberof ProtoGroupLeftResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.GroupLeftResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get GroupLeftResponse roomId.
 * @memberof ProtoGroupLeftResponse
 * @return {Long}
 */
proto.proto.GroupLeftResponse.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set GroupLeftResponse roomId.
 * @memberof ProtoGroupLeftResponse
 * @param {Long} value
 */
proto.proto.GroupLeftResponse.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get GroupLeftResponse memberId.
 * @memberof ProtoGroupLeftResponse
 * @return {Long}
 */
proto.proto.GroupLeftResponse.prototype.getMemberId = function() {
  return this.memberId;
};

/**
 * Set GroupLeftResponse memberId.
 * @memberof ProtoGroupLeftResponse
 * @param {Long} value
 */
proto.proto.GroupLeftResponse.prototype.setMemberId = function(value) {
  this.memberId = value;
};

/**
 * @interface ProtoGroupPinMessage
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GroupPinMessage.prototype.serializeBinary = function() {
  return proto.proto.GroupPinMessage.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGroupPinMessage}
 */
proto.proto.GroupPinMessage.deserializeBinary = function(buffer) {
  return proto.proto.GroupPinMessage.decode(buffer);
};

/**
 * Get GroupPinMessage request.
 * @memberof ProtoGroupPinMessage
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.GroupPinMessage.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set GroupPinMessage request.
 * @memberof ProtoGroupPinMessage
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.GroupPinMessage.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get GroupPinMessage roomId.
 * @memberof ProtoGroupPinMessage
 * @return {Long}
 */
proto.proto.GroupPinMessage.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set GroupPinMessage roomId.
 * @memberof ProtoGroupPinMessage
 * @param {Long} value
 */
proto.proto.GroupPinMessage.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get GroupPinMessage messageId.
 * @memberof ProtoGroupPinMessage
 * @return {Long}
 */
proto.proto.GroupPinMessage.prototype.getMessageId = function() {
  return this.messageId;
};

/**
 * Set GroupPinMessage messageId.
 * @memberof ProtoGroupPinMessage
 * @param {Long} value
 */
proto.proto.GroupPinMessage.prototype.setMessageId = function(value) {
  this.messageId = value;
};

/**
 * @interface ProtoGroupPinMessageResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GroupPinMessageResponse.prototype.serializeBinary = function() {
  return proto.proto.GroupPinMessageResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGroupPinMessageResponse}
 */
proto.proto.GroupPinMessageResponse.deserializeBinary = function(buffer) {
  return proto.proto.GroupPinMessageResponse.decode(buffer);
};

/**
 * Get GroupPinMessageResponse response.
 * @memberof ProtoGroupPinMessageResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.GroupPinMessageResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set GroupPinMessageResponse response.
 * @memberof ProtoGroupPinMessageResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.GroupPinMessageResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get GroupPinMessageResponse roomId.
 * @memberof ProtoGroupPinMessageResponse
 * @return {Long}
 */
proto.proto.GroupPinMessageResponse.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set GroupPinMessageResponse roomId.
 * @memberof ProtoGroupPinMessageResponse
 * @param {Long} value
 */
proto.proto.GroupPinMessageResponse.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get GroupPinMessageResponse pinnedMessage.
 * @memberof ProtoGroupPinMessageResponse
 * @return {(ProtoRoomMessage|null|undefined)}
 */
proto.proto.GroupPinMessageResponse.prototype.getPinnedMessage = function() {
  return this.pinnedMessage;
};

/**
 * Set GroupPinMessageResponse pinnedMessage.
 * @memberof ProtoGroupPinMessageResponse
 * @param {(ProtoRoomMessage|null|undefined)} value
 */
proto.proto.GroupPinMessageResponse.prototype.setPinnedMessage = function(value) {
  this.pinnedMessage = value;
};

/**
 * @interface ProtoGroupRemoveUsername
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GroupRemoveUsername.prototype.serializeBinary = function() {
  return proto.proto.GroupRemoveUsername.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGroupRemoveUsername}
 */
proto.proto.GroupRemoveUsername.deserializeBinary = function(buffer) {
  return proto.proto.GroupRemoveUsername.decode(buffer);
};

/**
 * Get GroupRemoveUsername request.
 * @memberof ProtoGroupRemoveUsername
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.GroupRemoveUsername.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set GroupRemoveUsername request.
 * @memberof ProtoGroupRemoveUsername
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.GroupRemoveUsername.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get GroupRemoveUsername roomId.
 * @memberof ProtoGroupRemoveUsername
 * @return {Long}
 */
proto.proto.GroupRemoveUsername.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set GroupRemoveUsername roomId.
 * @memberof ProtoGroupRemoveUsername
 * @param {Long} value
 */
proto.proto.GroupRemoveUsername.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * @interface ProtoGroupRemoveUsernameResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GroupRemoveUsernameResponse.prototype.serializeBinary = function() {
  return proto.proto.GroupRemoveUsernameResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGroupRemoveUsernameResponse}
 */
proto.proto.GroupRemoveUsernameResponse.deserializeBinary = function(buffer) {
  return proto.proto.GroupRemoveUsernameResponse.decode(buffer);
};

/**
 * Get GroupRemoveUsernameResponse response.
 * @memberof ProtoGroupRemoveUsernameResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.GroupRemoveUsernameResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set GroupRemoveUsernameResponse response.
 * @memberof ProtoGroupRemoveUsernameResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.GroupRemoveUsernameResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get GroupRemoveUsernameResponse roomId.
 * @memberof ProtoGroupRemoveUsernameResponse
 * @return {Long}
 */
proto.proto.GroupRemoveUsernameResponse.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set GroupRemoveUsernameResponse roomId.
 * @memberof ProtoGroupRemoveUsernameResponse
 * @param {Long} value
 */
proto.proto.GroupRemoveUsernameResponse.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * @interface ProtoGroupRevokeLink
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GroupRevokeLink.prototype.serializeBinary = function() {
  return proto.proto.GroupRevokeLink.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGroupRevokeLink}
 */
proto.proto.GroupRevokeLink.deserializeBinary = function(buffer) {
  return proto.proto.GroupRevokeLink.decode(buffer);
};

/**
 * Get GroupRevokeLink request.
 * @memberof ProtoGroupRevokeLink
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.GroupRevokeLink.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set GroupRevokeLink request.
 * @memberof ProtoGroupRevokeLink
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.GroupRevokeLink.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get GroupRevokeLink roomId.
 * @memberof ProtoGroupRevokeLink
 * @return {Long}
 */
proto.proto.GroupRevokeLink.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set GroupRevokeLink roomId.
 * @memberof ProtoGroupRevokeLink
 * @param {Long} value
 */
proto.proto.GroupRevokeLink.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * @interface ProtoGroupRevokeLinkResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GroupRevokeLinkResponse.prototype.serializeBinary = function() {
  return proto.proto.GroupRevokeLinkResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGroupRevokeLinkResponse}
 */
proto.proto.GroupRevokeLinkResponse.deserializeBinary = function(buffer) {
  return proto.proto.GroupRevokeLinkResponse.decode(buffer);
};

/**
 * Get GroupRevokeLinkResponse response.
 * @memberof ProtoGroupRevokeLinkResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.GroupRevokeLinkResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set GroupRevokeLinkResponse response.
 * @memberof ProtoGroupRevokeLinkResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.GroupRevokeLinkResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get GroupRevokeLinkResponse roomId.
 * @memberof ProtoGroupRevokeLinkResponse
 * @return {Long}
 */
proto.proto.GroupRevokeLinkResponse.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set GroupRevokeLinkResponse roomId.
 * @memberof ProtoGroupRevokeLinkResponse
 * @param {Long} value
 */
proto.proto.GroupRevokeLinkResponse.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get GroupRevokeLinkResponse inviteLink.
 * @memberof ProtoGroupRevokeLinkResponse
 * @return {string}
 */
proto.proto.GroupRevokeLinkResponse.prototype.getInviteLink = function() {
  return this.inviteLink;
};

/**
 * Set GroupRevokeLinkResponse inviteLink.
 * @memberof ProtoGroupRevokeLinkResponse
 * @param {string} value
 */
proto.proto.GroupRevokeLinkResponse.prototype.setInviteLink = function(value) {
  this.inviteLink = value;
};

/**
 * Get GroupRevokeLinkResponse inviteToken.
 * @memberof ProtoGroupRevokeLinkResponse
 * @return {string}
 */
proto.proto.GroupRevokeLinkResponse.prototype.getInviteToken = function() {
  return this.inviteToken;
};

/**
 * Set GroupRevokeLinkResponse inviteToken.
 * @memberof ProtoGroupRevokeLinkResponse
 * @param {string} value
 */
proto.proto.GroupRevokeLinkResponse.prototype.setInviteToken = function(value) {
  this.inviteToken = value;
};

/**
 * @interface ProtoGroupSendMessage
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GroupSendMessage.prototype.serializeBinary = function() {
  return proto.proto.GroupSendMessage.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGroupSendMessage}
 */
proto.proto.GroupSendMessage.deserializeBinary = function(buffer) {
  return proto.proto.GroupSendMessage.decode(buffer);
};

/**
 * Get GroupSendMessage request.
 * @memberof ProtoGroupSendMessage
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.GroupSendMessage.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set GroupSendMessage request.
 * @memberof ProtoGroupSendMessage
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.GroupSendMessage.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get GroupSendMessage messageType.
 * @memberof ProtoGroupSendMessage
 * @return {ProtoRoomMessageType}
 */
proto.proto.GroupSendMessage.prototype.getMessageType = function() {
  return this.messageType;
};

/**
 * Set GroupSendMessage messageType.
 * @memberof ProtoGroupSendMessage
 * @param {ProtoRoomMessageType} value
 */
proto.proto.GroupSendMessage.prototype.setMessageType = function(value) {
  this.messageType = value;
};

/**
 * Get GroupSendMessage roomId.
 * @memberof ProtoGroupSendMessage
 * @return {Long}
 */
proto.proto.GroupSendMessage.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set GroupSendMessage roomId.
 * @memberof ProtoGroupSendMessage
 * @param {Long} value
 */
proto.proto.GroupSendMessage.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get GroupSendMessage message.
 * @memberof ProtoGroupSendMessage
 * @return {string}
 */
proto.proto.GroupSendMessage.prototype.getMessage = function() {
  return this.message;
};

/**
 * Set GroupSendMessage message.
 * @memberof ProtoGroupSendMessage
 * @param {string} value
 */
proto.proto.GroupSendMessage.prototype.setMessage = function(value) {
  this.message = value;
};

/**
 * Get GroupSendMessage attachment.
 * @memberof ProtoGroupSendMessage
 * @return {string}
 */
proto.proto.GroupSendMessage.prototype.getAttachment = function() {
  return this.attachment;
};

/**
 * Set GroupSendMessage attachment.
 * @memberof ProtoGroupSendMessage
 * @param {string} value
 */
proto.proto.GroupSendMessage.prototype.setAttachment = function(value) {
  this.attachment = value;
};

/**
 * Get GroupSendMessage location.
 * @memberof ProtoGroupSendMessage
 * @return {(ProtoRoomMessageLocation|null|undefined)}
 */
proto.proto.GroupSendMessage.prototype.getLocation = function() {
  return this.location;
};

/**
 * Set GroupSendMessage location.
 * @memberof ProtoGroupSendMessage
 * @param {(ProtoRoomMessageLocation|null|undefined)} value
 */
proto.proto.GroupSendMessage.prototype.setLocation = function(value) {
  this.location = value;
};

/**
 * Get GroupSendMessage contact.
 * @memberof ProtoGroupSendMessage
 * @return {(ProtoRoomMessageContact|null|undefined)}
 */
proto.proto.GroupSendMessage.prototype.getContact = function() {
  return this.contact;
};

/**
 * Set GroupSendMessage contact.
 * @memberof ProtoGroupSendMessage
 * @param {(ProtoRoomMessageContact|null|undefined)} value
 */
proto.proto.GroupSendMessage.prototype.setContact = function(value) {
  this.contact = value;
};

/**
 * Get GroupSendMessage replyTo.
 * @memberof ProtoGroupSendMessage
 * @return {Long}
 */
proto.proto.GroupSendMessage.prototype.getReplyTo = function() {
  return this.replyTo;
};

/**
 * Set GroupSendMessage replyTo.
 * @memberof ProtoGroupSendMessage
 * @param {Long} value
 */
proto.proto.GroupSendMessage.prototype.setReplyTo = function(value) {
  this.replyTo = value;
};

/**
 * Get GroupSendMessage forwardFrom.
 * @memberof ProtoGroupSendMessage
 * @return {(ProtoRoomMessageForwardFrom|null|undefined)}
 */
proto.proto.GroupSendMessage.prototype.getForwardFrom = function() {
  return this.forwardFrom;
};

/**
 * Set GroupSendMessage forwardFrom.
 * @memberof ProtoGroupSendMessage
 * @param {(ProtoRoomMessageForwardFrom|null|undefined)} value
 */
proto.proto.GroupSendMessage.prototype.setForwardFrom = function(value) {
  this.forwardFrom = value;
};

/**
 * Get GroupSendMessage randomId.
 * @memberof ProtoGroupSendMessage
 * @return {Long}
 */
proto.proto.GroupSendMessage.prototype.getRandomId = function() {
  return this.randomId;
};

/**
 * Set GroupSendMessage randomId.
 * @memberof ProtoGroupSendMessage
 * @param {Long} value
 */
proto.proto.GroupSendMessage.prototype.setRandomId = function(value) {
  this.randomId = value;
};

/**
 * @interface ProtoGroupSendMessageResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GroupSendMessageResponse.prototype.serializeBinary = function() {
  return proto.proto.GroupSendMessageResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGroupSendMessageResponse}
 */
proto.proto.GroupSendMessageResponse.deserializeBinary = function(buffer) {
  return proto.proto.GroupSendMessageResponse.decode(buffer);
};

/**
 * Get GroupSendMessageResponse response.
 * @memberof ProtoGroupSendMessageResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.GroupSendMessageResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set GroupSendMessageResponse response.
 * @memberof ProtoGroupSendMessageResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.GroupSendMessageResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get GroupSendMessageResponse roomId.
 * @memberof ProtoGroupSendMessageResponse
 * @return {Long}
 */
proto.proto.GroupSendMessageResponse.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set GroupSendMessageResponse roomId.
 * @memberof ProtoGroupSendMessageResponse
 * @param {Long} value
 */
proto.proto.GroupSendMessageResponse.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get GroupSendMessageResponse roomMessage.
 * @memberof ProtoGroupSendMessageResponse
 * @return {(ProtoRoomMessage|null|undefined)}
 */
proto.proto.GroupSendMessageResponse.prototype.getRoomMessage = function() {
  return this.roomMessage;
};

/**
 * Set GroupSendMessageResponse roomMessage.
 * @memberof ProtoGroupSendMessageResponse
 * @param {(ProtoRoomMessage|null|undefined)} value
 */
proto.proto.GroupSendMessageResponse.prototype.setRoomMessage = function(value) {
  this.roomMessage = value;
};

/**
 * @interface ProtoGroupSetAction
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GroupSetAction.prototype.serializeBinary = function() {
  return proto.proto.GroupSetAction.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGroupSetAction}
 */
proto.proto.GroupSetAction.deserializeBinary = function(buffer) {
  return proto.proto.GroupSetAction.decode(buffer);
};

/**
 * Get GroupSetAction request.
 * @memberof ProtoGroupSetAction
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.GroupSetAction.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set GroupSetAction request.
 * @memberof ProtoGroupSetAction
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.GroupSetAction.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get GroupSetAction roomId.
 * @memberof ProtoGroupSetAction
 * @return {Long}
 */
proto.proto.GroupSetAction.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set GroupSetAction roomId.
 * @memberof ProtoGroupSetAction
 * @param {Long} value
 */
proto.proto.GroupSetAction.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get GroupSetAction action.
 * @memberof ProtoGroupSetAction
 * @return {ProtoClientAction}
 */
proto.proto.GroupSetAction.prototype.getAction = function() {
  return this.action;
};

/**
 * Set GroupSetAction action.
 * @memberof ProtoGroupSetAction
 * @param {ProtoClientAction} value
 */
proto.proto.GroupSetAction.prototype.setAction = function(value) {
  this.action = value;
};

/**
 * Get GroupSetAction actionId.
 * @memberof ProtoGroupSetAction
 * @return {number}
 */
proto.proto.GroupSetAction.prototype.getActionId = function() {
  return this.actionId;
};

/**
 * Set GroupSetAction actionId.
 * @memberof ProtoGroupSetAction
 * @param {number} value
 */
proto.proto.GroupSetAction.prototype.setActionId = function(value) {
  this.actionId = value;
};

/**
 * @interface ProtoGroupSetActionResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GroupSetActionResponse.prototype.serializeBinary = function() {
  return proto.proto.GroupSetActionResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGroupSetActionResponse}
 */
proto.proto.GroupSetActionResponse.deserializeBinary = function(buffer) {
  return proto.proto.GroupSetActionResponse.decode(buffer);
};

/**
 * Get GroupSetActionResponse response.
 * @memberof ProtoGroupSetActionResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.GroupSetActionResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set GroupSetActionResponse response.
 * @memberof ProtoGroupSetActionResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.GroupSetActionResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get GroupSetActionResponse roomId.
 * @memberof ProtoGroupSetActionResponse
 * @return {Long}
 */
proto.proto.GroupSetActionResponse.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set GroupSetActionResponse roomId.
 * @memberof ProtoGroupSetActionResponse
 * @param {Long} value
 */
proto.proto.GroupSetActionResponse.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get GroupSetActionResponse action.
 * @memberof ProtoGroupSetActionResponse
 * @return {ProtoClientAction}
 */
proto.proto.GroupSetActionResponse.prototype.getAction = function() {
  return this.action;
};

/**
 * Set GroupSetActionResponse action.
 * @memberof ProtoGroupSetActionResponse
 * @param {ProtoClientAction} value
 */
proto.proto.GroupSetActionResponse.prototype.setAction = function(value) {
  this.action = value;
};

/**
 * Get GroupSetActionResponse userId.
 * @memberof ProtoGroupSetActionResponse
 * @return {Long}
 */
proto.proto.GroupSetActionResponse.prototype.getUserId = function() {
  return this.userId;
};

/**
 * Set GroupSetActionResponse userId.
 * @memberof ProtoGroupSetActionResponse
 * @param {Long} value
 */
proto.proto.GroupSetActionResponse.prototype.setUserId = function(value) {
  this.userId = value;
};

/**
 * @interface ProtoGroupUpdateDraft
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GroupUpdateDraft.prototype.serializeBinary = function() {
  return proto.proto.GroupUpdateDraft.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGroupUpdateDraft}
 */
proto.proto.GroupUpdateDraft.deserializeBinary = function(buffer) {
  return proto.proto.GroupUpdateDraft.decode(buffer);
};

/**
 * Get GroupUpdateDraft request.
 * @memberof ProtoGroupUpdateDraft
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.GroupUpdateDraft.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set GroupUpdateDraft request.
 * @memberof ProtoGroupUpdateDraft
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.GroupUpdateDraft.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get GroupUpdateDraft roomId.
 * @memberof ProtoGroupUpdateDraft
 * @return {Long}
 */
proto.proto.GroupUpdateDraft.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set GroupUpdateDraft roomId.
 * @memberof ProtoGroupUpdateDraft
 * @param {Long} value
 */
proto.proto.GroupUpdateDraft.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get GroupUpdateDraft draft.
 * @memberof ProtoGroupUpdateDraft
 * @return {(ProtoRoomDraft|null|undefined)}
 */
proto.proto.GroupUpdateDraft.prototype.getDraft = function() {
  return this.draft;
};

/**
 * Set GroupUpdateDraft draft.
 * @memberof ProtoGroupUpdateDraft
 * @param {(ProtoRoomDraft|null|undefined)} value
 */
proto.proto.GroupUpdateDraft.prototype.setDraft = function(value) {
  this.draft = value;
};

/**
 * @interface ProtoGroupUpdateDraftResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GroupUpdateDraftResponse.prototype.serializeBinary = function() {
  return proto.proto.GroupUpdateDraftResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGroupUpdateDraftResponse}
 */
proto.proto.GroupUpdateDraftResponse.deserializeBinary = function(buffer) {
  return proto.proto.GroupUpdateDraftResponse.decode(buffer);
};

/**
 * Get GroupUpdateDraftResponse response.
 * @memberof ProtoGroupUpdateDraftResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.GroupUpdateDraftResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set GroupUpdateDraftResponse response.
 * @memberof ProtoGroupUpdateDraftResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.GroupUpdateDraftResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get GroupUpdateDraftResponse roomId.
 * @memberof ProtoGroupUpdateDraftResponse
 * @return {Long}
 */
proto.proto.GroupUpdateDraftResponse.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set GroupUpdateDraftResponse roomId.
 * @memberof ProtoGroupUpdateDraftResponse
 * @param {Long} value
 */
proto.proto.GroupUpdateDraftResponse.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get GroupUpdateDraftResponse draft.
 * @memberof ProtoGroupUpdateDraftResponse
 * @return {(ProtoRoomDraft|null|undefined)}
 */
proto.proto.GroupUpdateDraftResponse.prototype.getDraft = function() {
  return this.draft;
};

/**
 * Set GroupUpdateDraftResponse draft.
 * @memberof ProtoGroupUpdateDraftResponse
 * @param {(ProtoRoomDraft|null|undefined)} value
 */
proto.proto.GroupUpdateDraftResponse.prototype.setDraft = function(value) {
  this.draft = value;
};

/**
 * @interface ProtoGroupUpdateStatus
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GroupUpdateStatus.prototype.serializeBinary = function() {
  return proto.proto.GroupUpdateStatus.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGroupUpdateStatus}
 */
proto.proto.GroupUpdateStatus.deserializeBinary = function(buffer) {
  return proto.proto.GroupUpdateStatus.decode(buffer);
};

/**
 * Get GroupUpdateStatus request.
 * @memberof ProtoGroupUpdateStatus
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.GroupUpdateStatus.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set GroupUpdateStatus request.
 * @memberof ProtoGroupUpdateStatus
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.GroupUpdateStatus.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get GroupUpdateStatus roomId.
 * @memberof ProtoGroupUpdateStatus
 * @return {Long}
 */
proto.proto.GroupUpdateStatus.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set GroupUpdateStatus roomId.
 * @memberof ProtoGroupUpdateStatus
 * @param {Long} value
 */
proto.proto.GroupUpdateStatus.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get GroupUpdateStatus messageId.
 * @memberof ProtoGroupUpdateStatus
 * @return {Long}
 */
proto.proto.GroupUpdateStatus.prototype.getMessageId = function() {
  return this.messageId;
};

/**
 * Set GroupUpdateStatus messageId.
 * @memberof ProtoGroupUpdateStatus
 * @param {Long} value
 */
proto.proto.GroupUpdateStatus.prototype.setMessageId = function(value) {
  this.messageId = value;
};

/**
 * Get GroupUpdateStatus status.
 * @memberof ProtoGroupUpdateStatus
 * @return {ProtoRoomMessageStatus}
 */
proto.proto.GroupUpdateStatus.prototype.getStatus = function() {
  return this.status;
};

/**
 * Set GroupUpdateStatus status.
 * @memberof ProtoGroupUpdateStatus
 * @param {ProtoRoomMessageStatus} value
 */
proto.proto.GroupUpdateStatus.prototype.setStatus = function(value) {
  this.status = value;
};

/**
 * @interface ProtoGroupUpdateStatusResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GroupUpdateStatusResponse.prototype.serializeBinary = function() {
  return proto.proto.GroupUpdateStatusResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGroupUpdateStatusResponse}
 */
proto.proto.GroupUpdateStatusResponse.deserializeBinary = function(buffer) {
  return proto.proto.GroupUpdateStatusResponse.decode(buffer);
};

/**
 * Get GroupUpdateStatusResponse response.
 * @memberof ProtoGroupUpdateStatusResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.GroupUpdateStatusResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set GroupUpdateStatusResponse response.
 * @memberof ProtoGroupUpdateStatusResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.GroupUpdateStatusResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get GroupUpdateStatusResponse roomId.
 * @memberof ProtoGroupUpdateStatusResponse
 * @return {Long}
 */
proto.proto.GroupUpdateStatusResponse.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set GroupUpdateStatusResponse roomId.
 * @memberof ProtoGroupUpdateStatusResponse
 * @param {Long} value
 */
proto.proto.GroupUpdateStatusResponse.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * Get GroupUpdateStatusResponse messageId.
 * @memberof ProtoGroupUpdateStatusResponse
 * @return {Long}
 */
proto.proto.GroupUpdateStatusResponse.prototype.getMessageId = function() {
  return this.messageId;
};

/**
 * Set GroupUpdateStatusResponse messageId.
 * @memberof ProtoGroupUpdateStatusResponse
 * @param {Long} value
 */
proto.proto.GroupUpdateStatusResponse.prototype.setMessageId = function(value) {
  this.messageId = value;
};

/**
 * Get GroupUpdateStatusResponse status.
 * @memberof ProtoGroupUpdateStatusResponse
 * @return {ProtoRoomMessageStatus}
 */
proto.proto.GroupUpdateStatusResponse.prototype.getStatus = function() {
  return this.status;
};

/**
 * Set GroupUpdateStatusResponse status.
 * @memberof ProtoGroupUpdateStatusResponse
 * @param {ProtoRoomMessageStatus} value
 */
proto.proto.GroupUpdateStatusResponse.prototype.setStatus = function(value) {
  this.status = value;
};

/**
 * Get GroupUpdateStatusResponse statusVersion.
 * @memberof ProtoGroupUpdateStatusResponse
 * @return {Long}
 */
proto.proto.GroupUpdateStatusResponse.prototype.getStatusVersion = function() {
  return this.statusVersion;
};

/**
 * Set GroupUpdateStatusResponse statusVersion.
 * @memberof ProtoGroupUpdateStatusResponse
 * @param {Long} value
 */
proto.proto.GroupUpdateStatusResponse.prototype.setStatusVersion = function(value) {
  this.statusVersion = value;
};

/**
 * Get GroupUpdateStatusResponse updaterAuthorHash.
 * @memberof ProtoGroupUpdateStatusResponse
 * @return {string}
 */
proto.proto.GroupUpdateStatusResponse.prototype.getUpdaterAuthorHash = function() {
  return this.updaterAuthorHash;
};

/**
 * Set GroupUpdateStatusResponse updaterAuthorHash.
 * @memberof ProtoGroupUpdateStatusResponse
 * @param {string} value
 */
proto.proto.GroupUpdateStatusResponse.prototype.setUpdaterAuthorHash = function(value) {
  this.updaterAuthorHash = value;
};

/**
 * @interface ProtoGroupUpdateUsername
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GroupUpdateUsername.prototype.serializeBinary = function() {
  return proto.proto.GroupUpdateUsername.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGroupUpdateUsername}
 */
proto.proto.GroupUpdateUsername.deserializeBinary = function(buffer) {
  return proto.proto.GroupUpdateUsername.decode(buffer);
};

/**
 * Get GroupUpdateUsername request.
 * @memberof ProtoGroupUpdateUsername
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.GroupUpdateUsername.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set GroupUpdateUsername request.
 * @memberof ProtoGroupUpdateUsername
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.GroupUpdateUsername.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get GroupUpdateUsername username.
 * @memberof ProtoGroupUpdateUsername
 * @return {string}
 */
proto.proto.GroupUpdateUsername.prototype.getUsername = function() {
  return this.username;
};

/**
 * Set GroupUpdateUsername username.
 * @memberof ProtoGroupUpdateUsername
 * @param {string} value
 */
proto.proto.GroupUpdateUsername.prototype.setUsername = function(value) {
  this.username = value;
};

/**
 * Get GroupUpdateUsername roomId.
 * @memberof ProtoGroupUpdateUsername
 * @return {Long}
 */
proto.proto.GroupUpdateUsername.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set GroupUpdateUsername roomId.
 * @memberof ProtoGroupUpdateUsername
 * @param {Long} value
 */
proto.proto.GroupUpdateUsername.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * @interface ProtoGroupUpdateUsernameResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.GroupUpdateUsernameResponse.prototype.serializeBinary = function() {
  return proto.proto.GroupUpdateUsernameResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoGroupUpdateUsernameResponse}
 */
proto.proto.GroupUpdateUsernameResponse.deserializeBinary = function(buffer) {
  return proto.proto.GroupUpdateUsernameResponse.decode(buffer);
};

/**
 * Get GroupUpdateUsernameResponse response.
 * @memberof ProtoGroupUpdateUsernameResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.GroupUpdateUsernameResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set GroupUpdateUsernameResponse response.
 * @memberof ProtoGroupUpdateUsernameResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.GroupUpdateUsernameResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get GroupUpdateUsernameResponse username.
 * @memberof ProtoGroupUpdateUsernameResponse
 * @return {string}
 */
proto.proto.GroupUpdateUsernameResponse.prototype.getUsername = function() {
  return this.username;
};

/**
 * Set GroupUpdateUsernameResponse username.
 * @memberof ProtoGroupUpdateUsernameResponse
 * @param {string} value
 */
proto.proto.GroupUpdateUsernameResponse.prototype.setUsername = function(value) {
  this.username = value;
};

/**
 * Get GroupUpdateUsernameResponse roomId.
 * @memberof ProtoGroupUpdateUsernameResponse
 * @return {Long}
 */
proto.proto.GroupUpdateUsernameResponse.prototype.getRoomId = function() {
  return this.roomId;
};

/**
 * Set GroupUpdateUsernameResponse roomId.
 * @memberof ProtoGroupUpdateUsernameResponse
 * @param {Long} value
 */
proto.proto.GroupUpdateUsernameResponse.prototype.setRoomId = function(value) {
  this.roomId = value;
};

/**
 * @interface ProtoHeartbeat
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.Heartbeat.prototype.serializeBinary = function() {
  return proto.proto.Heartbeat.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoHeartbeat}
 */
proto.proto.Heartbeat.deserializeBinary = function(buffer) {
  return proto.proto.Heartbeat.decode(buffer);
};

/**
 * Get Heartbeat request.
 * @memberof ProtoHeartbeat
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.Heartbeat.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set Heartbeat request.
 * @memberof ProtoHeartbeat
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.Heartbeat.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * @interface ProtoHeartbeatResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.HeartbeatResponse.prototype.serializeBinary = function() {
  return proto.proto.HeartbeatResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoHeartbeatResponse}
 */
proto.proto.HeartbeatResponse.deserializeBinary = function(buffer) {
  return proto.proto.HeartbeatResponse.decode(buffer);
};

/**
 * Get HeartbeatResponse response.
 * @memberof ProtoHeartbeatResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.HeartbeatResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set HeartbeatResponse response.
 * @memberof ProtoHeartbeatResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.HeartbeatResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * @interface ProtoInfoCountry
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.InfoCountry.prototype.serializeBinary = function() {
  return proto.proto.InfoCountry.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoInfoCountry}
 */
proto.proto.InfoCountry.deserializeBinary = function(buffer) {
  return proto.proto.InfoCountry.decode(buffer);
};

/**
 * Get InfoCountry request.
 * @memberof ProtoInfoCountry
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.InfoCountry.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set InfoCountry request.
 * @memberof ProtoInfoCountry
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.InfoCountry.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get InfoCountry isoCode.
 * @memberof ProtoInfoCountry
 * @return {string}
 */
proto.proto.InfoCountry.prototype.getIsoCode = function() {
  return this.isoCode;
};

/**
 * Set InfoCountry isoCode.
 * @memberof ProtoInfoCountry
 * @param {string} value
 */
proto.proto.InfoCountry.prototype.setIsoCode = function(value) {
  this.isoCode = value;
};

/**
 * @interface ProtoInfoCountryResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.InfoCountryResponse.prototype.serializeBinary = function() {
  return proto.proto.InfoCountryResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoInfoCountryResponse}
 */
proto.proto.InfoCountryResponse.deserializeBinary = function(buffer) {
  return proto.proto.InfoCountryResponse.decode(buffer);
};

/**
 * Get InfoCountryResponse response.
 * @memberof ProtoInfoCountryResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.InfoCountryResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set InfoCountryResponse response.
 * @memberof ProtoInfoCountryResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.InfoCountryResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get InfoCountryResponse callingCode.
 * @memberof ProtoInfoCountryResponse
 * @return {number}
 */
proto.proto.InfoCountryResponse.prototype.getCallingCode = function() {
  return this.callingCode;
};

/**
 * Set InfoCountryResponse callingCode.
 * @memberof ProtoInfoCountryResponse
 * @param {number} value
 */
proto.proto.InfoCountryResponse.prototype.setCallingCode = function(value) {
  this.callingCode = value;
};

/**
 * Get InfoCountryResponse name.
 * @memberof ProtoInfoCountryResponse
 * @return {string}
 */
proto.proto.InfoCountryResponse.prototype.getName = function() {
  return this.name;
};

/**
 * Set InfoCountryResponse name.
 * @memberof ProtoInfoCountryResponse
 * @param {string} value
 */
proto.proto.InfoCountryResponse.prototype.setName = function(value) {
  this.name = value;
};

/**
 * Get InfoCountryResponse pattern.
 * @memberof ProtoInfoCountryResponse
 * @return {string}
 */
proto.proto.InfoCountryResponse.prototype.getPattern = function() {
  return this.pattern;
};

/**
 * Set InfoCountryResponse pattern.
 * @memberof ProtoInfoCountryResponse
 * @param {string} value
 */
proto.proto.InfoCountryResponse.prototype.setPattern = function(value) {
  this.pattern = value;
};

/**
 * Get InfoCountryResponse regex.
 * @memberof ProtoInfoCountryResponse
 * @return {string}
 */
proto.proto.InfoCountryResponse.prototype.getRegex = function() {
  return this.regex;
};

/**
 * Set InfoCountryResponse regex.
 * @memberof ProtoInfoCountryResponse
 * @param {string} value
 */
proto.proto.InfoCountryResponse.prototype.setRegex = function(value) {
  this.regex = value;
};

/**
 * @interface ProtoInfoLocation
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.InfoLocation.prototype.serializeBinary = function() {
  return proto.proto.InfoLocation.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoInfoLocation}
 */
proto.proto.InfoLocation.deserializeBinary = function(buffer) {
  return proto.proto.InfoLocation.decode(buffer);
};

/**
 * Get InfoLocation request.
 * @memberof ProtoInfoLocation
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.InfoLocation.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set InfoLocation request.
 * @memberof ProtoInfoLocation
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.InfoLocation.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * @interface ProtoInfoLocationResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.InfoLocationResponse.prototype.serializeBinary = function() {
  return proto.proto.InfoLocationResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoInfoLocationResponse}
 */
proto.proto.InfoLocationResponse.deserializeBinary = function(buffer) {
  return proto.proto.InfoLocationResponse.decode(buffer);
};

/**
 * Get InfoLocationResponse response.
 * @memberof ProtoInfoLocationResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.InfoLocationResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set InfoLocationResponse response.
 * @memberof ProtoInfoLocationResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.InfoLocationResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get InfoLocationResponse isoCode.
 * @memberof ProtoInfoLocationResponse
 * @return {string}
 */
proto.proto.InfoLocationResponse.prototype.getIsoCode = function() {
  return this.isoCode;
};

/**
 * Set InfoLocationResponse isoCode.
 * @memberof ProtoInfoLocationResponse
 * @param {string} value
 */
proto.proto.InfoLocationResponse.prototype.setIsoCode = function(value) {
  this.isoCode = value;
};

/**
 * Get InfoLocationResponse callingCode.
 * @memberof ProtoInfoLocationResponse
 * @return {number}
 */
proto.proto.InfoLocationResponse.prototype.getCallingCode = function() {
  return this.callingCode;
};

/**
 * Set InfoLocationResponse callingCode.
 * @memberof ProtoInfoLocationResponse
 * @param {number} value
 */
proto.proto.InfoLocationResponse.prototype.setCallingCode = function(value) {
  this.callingCode = value;
};

/**
 * Get InfoLocationResponse name.
 * @memberof ProtoInfoLocationResponse
 * @return {string}
 */
proto.proto.InfoLocationResponse.prototype.getName = function() {
  return this.name;
};

/**
 * Set InfoLocationResponse name.
 * @memberof ProtoInfoLocationResponse
 * @param {string} value
 */
proto.proto.InfoLocationResponse.prototype.setName = function(value) {
  this.name = value;
};

/**
 * Get InfoLocationResponse pattern.
 * @memberof ProtoInfoLocationResponse
 * @return {string}
 */
proto.proto.InfoLocationResponse.prototype.getPattern = function() {
  return this.pattern;
};

/**
 * Set InfoLocationResponse pattern.
 * @memberof ProtoInfoLocationResponse
 * @param {string} value
 */
proto.proto.InfoLocationResponse.prototype.setPattern = function(value) {
  this.pattern = value;
};

/**
 * Get InfoLocationResponse regex.
 * @memberof ProtoInfoLocationResponse
 * @return {string}
 */
proto.proto.InfoLocationResponse.prototype.getRegex = function() {
  return this.regex;
};

/**
 * Set InfoLocationResponse regex.
 * @memberof ProtoInfoLocationResponse
 * @param {string} value
 */
proto.proto.InfoLocationResponse.prototype.setRegex = function(value) {
  this.regex = value;
};

/**
 * @interface ProtoInfoPage
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.InfoPage.prototype.serializeBinary = function() {
  return proto.proto.InfoPage.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoInfoPage}
 */
proto.proto.InfoPage.deserializeBinary = function(buffer) {
  return proto.proto.InfoPage.decode(buffer);
};

/**
 * Get InfoPage request.
 * @memberof ProtoInfoPage
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.InfoPage.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set InfoPage request.
 * @memberof ProtoInfoPage
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.InfoPage.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get InfoPage id.
 * @memberof ProtoInfoPage
 * @return {string}
 */
proto.proto.InfoPage.prototype.getId = function() {
  return this.id;
};

/**
 * Set InfoPage id.
 * @memberof ProtoInfoPage
 * @param {string} value
 */
proto.proto.InfoPage.prototype.setId = function(value) {
  this.id = value;
};

/**
 * @interface ProtoInfoPageResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.InfoPageResponse.prototype.serializeBinary = function() {
  return proto.proto.InfoPageResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoInfoPageResponse}
 */
proto.proto.InfoPageResponse.deserializeBinary = function(buffer) {
  return proto.proto.InfoPageResponse.decode(buffer);
};

/**
 * Get InfoPageResponse response.
 * @memberof ProtoInfoPageResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.InfoPageResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set InfoPageResponse response.
 * @memberof ProtoInfoPageResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.InfoPageResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get InfoPageResponse body.
 * @memberof ProtoInfoPageResponse
 * @return {string}
 */
proto.proto.InfoPageResponse.prototype.getBody = function() {
  return this.body;
};

/**
 * Set InfoPageResponse body.
 * @memberof ProtoInfoPageResponse
 * @param {string} value
 */
proto.proto.InfoPageResponse.prototype.setBody = function(value) {
  this.body = value;
};

/**
 * @interface ProtoInfoTime
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.InfoTime.prototype.serializeBinary = function() {
  return proto.proto.InfoTime.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoInfoTime}
 */
proto.proto.InfoTime.deserializeBinary = function(buffer) {
  return proto.proto.InfoTime.decode(buffer);
};

/**
 * Get InfoTime request.
 * @memberof ProtoInfoTime
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.InfoTime.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set InfoTime request.
 * @memberof ProtoInfoTime
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.InfoTime.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * @interface ProtoInfoTimeResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.InfoTimeResponse.prototype.serializeBinary = function() {
  return proto.proto.InfoTimeResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoInfoTimeResponse}
 */
proto.proto.InfoTimeResponse.deserializeBinary = function(buffer) {
  return proto.proto.InfoTimeResponse.decode(buffer);
};

/**
 * Get InfoTimeResponse response.
 * @memberof ProtoInfoTimeResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.InfoTimeResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set InfoTimeResponse response.
 * @memberof ProtoInfoTimeResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.InfoTimeResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get InfoTimeResponse timestamp.
 * @memberof ProtoInfoTimeResponse
 * @return {number}
 */
proto.proto.InfoTimeResponse.prototype.getTimestamp = function() {
  return this.timestamp;
};

/**
 * Set InfoTimeResponse timestamp.
 * @memberof ProtoInfoTimeResponse
 * @param {number} value
 */
proto.proto.InfoTimeResponse.prototype.setTimestamp = function(value) {
  this.timestamp = value;
};

/**
 * @interface ProtoInfoWallpaper
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.InfoWallpaper.prototype.serializeBinary = function() {
  return proto.proto.InfoWallpaper.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoInfoWallpaper}
 */
proto.proto.InfoWallpaper.deserializeBinary = function(buffer) {
  return proto.proto.InfoWallpaper.decode(buffer);
};

/**
 * Get InfoWallpaper request.
 * @memberof ProtoInfoWallpaper
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.InfoWallpaper.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set InfoWallpaper request.
 * @memberof ProtoInfoWallpaper
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.InfoWallpaper.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get InfoWallpaper fit.
 * @memberof ProtoInfoWallpaper
 * @return {ProtoInfoWallpaper_Fit}
 */
proto.proto.InfoWallpaper.prototype.getFit = function() {
  return this.fit;
};

/**
 * Set InfoWallpaper fit.
 * @memberof ProtoInfoWallpaper
 * @param {ProtoInfoWallpaper_Fit} value
 */
proto.proto.InfoWallpaper.prototype.setFit = function(value) {
  this.fit = value;
};

/**
 * @typedef {number} ProtoInfoWallpaper_Fit
 */

/**
 * Fit enum.
 * @enum {ProtoInfoWallpaper_Fit}
 * @memberof ProtoInfoWallpaper
 */
proto.proto.InfoWallpaper.Fit = proto.proto.InfoWallpaper.prototype.Fit = {
  PHONE : 0,
  TABLET : 1,
  DESKTOP : 2,
};

/**
 * @interface ProtoInfoWallpaperResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.InfoWallpaperResponse.prototype.serializeBinary = function() {
  return proto.proto.InfoWallpaperResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoInfoWallpaperResponse}
 */
proto.proto.InfoWallpaperResponse.deserializeBinary = function(buffer) {
  return proto.proto.InfoWallpaperResponse.decode(buffer);
};

/**
 * Get InfoWallpaperResponse response.
 * @memberof ProtoInfoWallpaperResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.InfoWallpaperResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set InfoWallpaperResponse response.
 * @memberof ProtoInfoWallpaperResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.InfoWallpaperResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get InfoWallpaperResponse wallpaper.
 * @memberof ProtoInfoWallpaperResponse
 * @return {Array.<ProtoWallpaper>}
 */
proto.proto.InfoWallpaperResponse.prototype.getWallpaperList = function() {
  return this.wallpaper;
};

/**
 * Set InfoWallpaperResponse wallpaper.
 * @memberof ProtoInfoWallpaperResponse
 * @param {Array.<ProtoWallpaper>} value
 */
proto.proto.InfoWallpaperResponse.prototype.setWallpaperList = function(value) {
  this.wallpaper = value;
};

/**
 * @interface ProtoMplGetBillToken
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.MplGetBillToken.prototype.serializeBinary = function() {
  return proto.proto.MplGetBillToken.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoMplGetBillToken}
 */
proto.proto.MplGetBillToken.deserializeBinary = function(buffer) {
  return proto.proto.MplGetBillToken.decode(buffer);
};

/**
 * Get MplGetBillToken request.
 * @memberof ProtoMplGetBillToken
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.MplGetBillToken.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set MplGetBillToken request.
 * @memberof ProtoMplGetBillToken
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.MplGetBillToken.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get MplGetBillToken billId.
 * @memberof ProtoMplGetBillToken
 * @return {Long}
 */
proto.proto.MplGetBillToken.prototype.getBillId = function() {
  return this.billId;
};

/**
 * Set MplGetBillToken billId.
 * @memberof ProtoMplGetBillToken
 * @param {Long} value
 */
proto.proto.MplGetBillToken.prototype.setBillId = function(value) {
  this.billId = value;
};

/**
 * Get MplGetBillToken payId.
 * @memberof ProtoMplGetBillToken
 * @return {Long}
 */
proto.proto.MplGetBillToken.prototype.getPayId = function() {
  return this.payId;
};

/**
 * Set MplGetBillToken payId.
 * @memberof ProtoMplGetBillToken
 * @param {Long} value
 */
proto.proto.MplGetBillToken.prototype.setPayId = function(value) {
  this.payId = value;
};

/**
 * @interface ProtoMplGetBillTokenResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.MplGetBillTokenResponse.prototype.serializeBinary = function() {
  return proto.proto.MplGetBillTokenResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoMplGetBillTokenResponse}
 */
proto.proto.MplGetBillTokenResponse.deserializeBinary = function(buffer) {
  return proto.proto.MplGetBillTokenResponse.decode(buffer);
};

/**
 * Get MplGetBillTokenResponse response.
 * @memberof ProtoMplGetBillTokenResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.MplGetBillTokenResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set MplGetBillTokenResponse response.
 * @memberof ProtoMplGetBillTokenResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.MplGetBillTokenResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get MplGetBillTokenResponse status.
 * @memberof ProtoMplGetBillTokenResponse
 * @return {number}
 */
proto.proto.MplGetBillTokenResponse.prototype.getStatus = function() {
  return this.status;
};

/**
 * Set MplGetBillTokenResponse status.
 * @memberof ProtoMplGetBillTokenResponse
 * @param {number} value
 */
proto.proto.MplGetBillTokenResponse.prototype.setStatus = function(value) {
  this.status = value;
};

/**
 * Get MplGetBillTokenResponse token.
 * @memberof ProtoMplGetBillTokenResponse
 * @return {string}
 */
proto.proto.MplGetBillTokenResponse.prototype.getToken = function() {
  return this.token;
};

/**
 * Set MplGetBillTokenResponse token.
 * @memberof ProtoMplGetBillTokenResponse
 * @param {string} value
 */
proto.proto.MplGetBillTokenResponse.prototype.setToken = function(value) {
  this.token = value;
};

/**
 * Get MplGetBillTokenResponse expireTime.
 * @memberof ProtoMplGetBillTokenResponse
 * @return {number}
 */
proto.proto.MplGetBillTokenResponse.prototype.getExpireTime = function() {
  return this.expireTime;
};

/**
 * Set MplGetBillTokenResponse expireTime.
 * @memberof ProtoMplGetBillTokenResponse
 * @param {number} value
 */
proto.proto.MplGetBillTokenResponse.prototype.setExpireTime = function(value) {
  this.expireTime = value;
};

/**
 * @interface ProtoMplGetTopupToken
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.MplGetTopupToken.prototype.serializeBinary = function() {
  return proto.proto.MplGetTopupToken.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoMplGetTopupToken}
 */
proto.proto.MplGetTopupToken.deserializeBinary = function(buffer) {
  return proto.proto.MplGetTopupToken.decode(buffer);
};

/**
 * Get MplGetTopupToken request.
 * @memberof ProtoMplGetTopupToken
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.MplGetTopupToken.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set MplGetTopupToken request.
 * @memberof ProtoMplGetTopupToken
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.MplGetTopupToken.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get MplGetTopupToken chargeMobileNumber.
 * @memberof ProtoMplGetTopupToken
 * @return {Long}
 */
proto.proto.MplGetTopupToken.prototype.getChargeMobileNumber = function() {
  return this.chargeMobileNumber;
};

/**
 * Set MplGetTopupToken chargeMobileNumber.
 * @memberof ProtoMplGetTopupToken
 * @param {Long} value
 */
proto.proto.MplGetTopupToken.prototype.setChargeMobileNumber = function(value) {
  this.chargeMobileNumber = value;
};

/**
 * Get MplGetTopupToken amount.
 * @memberof ProtoMplGetTopupToken
 * @return {Long}
 */
proto.proto.MplGetTopupToken.prototype.getAmount = function() {
  return this.amount;
};

/**
 * Set MplGetTopupToken amount.
 * @memberof ProtoMplGetTopupToken
 * @param {Long} value
 */
proto.proto.MplGetTopupToken.prototype.setAmount = function(value) {
  this.amount = value;
};

/**
 * Get MplGetTopupToken type.
 * @memberof ProtoMplGetTopupToken
 * @return {ProtoMplGetTopupToken_Type}
 */
proto.proto.MplGetTopupToken.prototype.getType = function() {
  return this.type;
};

/**
 * Set MplGetTopupToken type.
 * @memberof ProtoMplGetTopupToken
 * @param {ProtoMplGetTopupToken_Type} value
 */
proto.proto.MplGetTopupToken.prototype.setType = function(value) {
  this.type = value;
};

/**
 * @typedef {number} ProtoMplGetTopupToken_Type
 */

/**
 * Type enum.
 * @enum {ProtoMplGetTopupToken_Type}
 * @memberof ProtoMplGetTopupToken
 */
proto.proto.MplGetTopupToken.Type = proto.proto.MplGetTopupToken.prototype.Type = {
  IRANCELL_PREPAID : 0,
  IRANCELL_WOW : 1,
  IRANCELL_WIMAX : 2,
  IRANCELL_POSTPAID : 3,
  MCI : 4,
  RIGHTEL : 5,
};

/**
 * @interface ProtoMplGetTopupTokenResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.MplGetTopupTokenResponse.prototype.serializeBinary = function() {
  return proto.proto.MplGetTopupTokenResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoMplGetTopupTokenResponse}
 */
proto.proto.MplGetTopupTokenResponse.deserializeBinary = function(buffer) {
  return proto.proto.MplGetTopupTokenResponse.decode(buffer);
};

/**
 * Get MplGetTopupTokenResponse response.
 * @memberof ProtoMplGetTopupTokenResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.MplGetTopupTokenResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set MplGetTopupTokenResponse response.
 * @memberof ProtoMplGetTopupTokenResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.MplGetTopupTokenResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get MplGetTopupTokenResponse status.
 * @memberof ProtoMplGetTopupTokenResponse
 * @return {number}
 */
proto.proto.MplGetTopupTokenResponse.prototype.getStatus = function() {
  return this.status;
};

/**
 * Set MplGetTopupTokenResponse status.
 * @memberof ProtoMplGetTopupTokenResponse
 * @param {number} value
 */
proto.proto.MplGetTopupTokenResponse.prototype.setStatus = function(value) {
  this.status = value;
};

/**
 * Get MplGetTopupTokenResponse token.
 * @memberof ProtoMplGetTopupTokenResponse
 * @return {string}
 */
proto.proto.MplGetTopupTokenResponse.prototype.getToken = function() {
  return this.token;
};

/**
 * Set MplGetTopupTokenResponse token.
 * @memberof ProtoMplGetTopupTokenResponse
 * @param {string} value
 */
proto.proto.MplGetTopupTokenResponse.prototype.setToken = function(value) {
  this.token = value;
};

/**
 * Get MplGetTopupTokenResponse expireTime.
 * @memberof ProtoMplGetTopupTokenResponse
 * @return {number}
 */
proto.proto.MplGetTopupTokenResponse.prototype.getExpireTime = function() {
  return this.expireTime;
};

/**
 * Set MplGetTopupTokenResponse expireTime.
 * @memberof ProtoMplGetTopupTokenResponse
 * @param {number} value
 */
proto.proto.MplGetTopupTokenResponse.prototype.setExpireTime = function(value) {
  this.expireTime = value;
};

/**
 * @interface ProtoPushLoginTokenResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.PushLoginTokenResponse.prototype.serializeBinary = function() {
  return proto.proto.PushLoginTokenResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoPushLoginTokenResponse}
 */
proto.proto.PushLoginTokenResponse.deserializeBinary = function(buffer) {
  return proto.proto.PushLoginTokenResponse.decode(buffer);
};

/**
 * Get PushLoginTokenResponse response.
 * @memberof ProtoPushLoginTokenResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.PushLoginTokenResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set PushLoginTokenResponse response.
 * @memberof ProtoPushLoginTokenResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.PushLoginTokenResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get PushLoginTokenResponse username.
 * @memberof ProtoPushLoginTokenResponse
 * @return {string}
 */
proto.proto.PushLoginTokenResponse.prototype.getUsername = function() {
  return this.username;
};

/**
 * Set PushLoginTokenResponse username.
 * @memberof ProtoPushLoginTokenResponse
 * @param {string} value
 */
proto.proto.PushLoginTokenResponse.prototype.setUsername = function(value) {
  this.username = value;
};

/**
 * Get PushLoginTokenResponse userId.
 * @memberof ProtoPushLoginTokenResponse
 * @return {Long}
 */
proto.proto.PushLoginTokenResponse.prototype.getUserId = function() {
  return this.userId;
};

/**
 * Set PushLoginTokenResponse userId.
 * @memberof ProtoPushLoginTokenResponse
 * @param {Long} value
 */
proto.proto.PushLoginTokenResponse.prototype.setUserId = function(value) {
  this.userId = value;
};

/**
 * Get PushLoginTokenResponse authorHash.
 * @memberof ProtoPushLoginTokenResponse
 * @return {string}
 */
proto.proto.PushLoginTokenResponse.prototype.getAuthorHash = function() {
  return this.authorHash;
};

/**
 * Set PushLoginTokenResponse authorHash.
 * @memberof ProtoPushLoginTokenResponse
 * @param {string} value
 */
proto.proto.PushLoginTokenResponse.prototype.setAuthorHash = function(value) {
  this.authorHash = value;
};

/**
 * Get PushLoginTokenResponse token.
 * @memberof ProtoPushLoginTokenResponse
 * @return {string}
 */
proto.proto.PushLoginTokenResponse.prototype.getToken = function() {
  return this.token;
};

/**
 * Set PushLoginTokenResponse token.
 * @memberof ProtoPushLoginTokenResponse
 * @param {string} value
 */
proto.proto.PushLoginTokenResponse.prototype.setToken = function(value) {
  this.token = value;
};

/**
 * @interface ProtoPushRateSignalingResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.PushRateSignalingResponse.prototype.serializeBinary = function() {
  return proto.proto.PushRateSignalingResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoPushRateSignalingResponse}
 */
proto.proto.PushRateSignalingResponse.deserializeBinary = function(buffer) {
  return proto.proto.PushRateSignalingResponse.decode(buffer);
};

/**
 * Get PushRateSignalingResponse response.
 * @memberof ProtoPushRateSignalingResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.PushRateSignalingResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set PushRateSignalingResponse response.
 * @memberof ProtoPushRateSignalingResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.PushRateSignalingResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get PushRateSignalingResponse id.
 * @memberof ProtoPushRateSignalingResponse
 * @return {Long}
 */
proto.proto.PushRateSignalingResponse.prototype.getId = function() {
  return this.id;
};

/**
 * Set PushRateSignalingResponse id.
 * @memberof ProtoPushRateSignalingResponse
 * @param {Long} value
 */
proto.proto.PushRateSignalingResponse.prototype.setId = function(value) {
  this.id = value;
};

/**
 * @interface ProtoPushTwoStepVerificationResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.PushTwoStepVerificationResponse.prototype.serializeBinary = function() {
  return proto.proto.PushTwoStepVerificationResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoPushTwoStepVerificationResponse}
 */
proto.proto.PushTwoStepVerificationResponse.deserializeBinary = function(buffer) {
  return proto.proto.PushTwoStepVerificationResponse.decode(buffer);
};

/**
 * Get PushTwoStepVerificationResponse response.
 * @memberof ProtoPushTwoStepVerificationResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.PushTwoStepVerificationResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set PushTwoStepVerificationResponse response.
 * @memberof ProtoPushTwoStepVerificationResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.PushTwoStepVerificationResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get PushTwoStepVerificationResponse username.
 * @memberof ProtoPushTwoStepVerificationResponse
 * @return {string}
 */
proto.proto.PushTwoStepVerificationResponse.prototype.getUsername = function() {
  return this.username;
};

/**
 * Set PushTwoStepVerificationResponse username.
 * @memberof ProtoPushTwoStepVerificationResponse
 * @param {string} value
 */
proto.proto.PushTwoStepVerificationResponse.prototype.setUsername = function(value) {
  this.username = value;
};

/**
 * Get PushTwoStepVerificationResponse userId.
 * @memberof ProtoPushTwoStepVerificationResponse
 * @return {Long}
 */
proto.proto.PushTwoStepVerificationResponse.prototype.getUserId = function() {
  return this.userId;
};

/**
 * Set PushTwoStepVerificationResponse userId.
 * @memberof ProtoPushTwoStepVerificationResponse
 * @param {Long} value
 */
proto.proto.PushTwoStepVerificationResponse.prototype.setUserId = function(value) {
  this.userId = value;
};

/**
 * Get PushTwoStepVerificationResponse authorHash.
 * @memberof ProtoPushTwoStepVerificationResponse
 * @return {string}
 */
proto.proto.PushTwoStepVerificationResponse.prototype.getAuthorHash = function() {
  return this.authorHash;
};

/**
 * Set PushTwoStepVerificationResponse authorHash.
 * @memberof ProtoPushTwoStepVerificationResponse
 * @param {string} value
 */
proto.proto.PushTwoStepVerificationResponse.prototype.setAuthorHash = function(value) {
  this.authorHash = value;
};

/**
 * @interface ProtoPushUserInfoExpiredResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.PushUserInfoExpiredResponse.prototype.serializeBinary = function() {
  return proto.proto.PushUserInfoExpiredResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoPushUserInfoExpiredResponse}
 */
proto.proto.PushUserInfoExpiredResponse.deserializeBinary = function(buffer) {
  return proto.proto.PushUserInfoExpiredResponse.decode(buffer);
};

/**
 * Get PushUserInfoExpiredResponse response.
 * @memberof ProtoPushUserInfoExpiredResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.PushUserInfoExpiredResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set PushUserInfoExpiredResponse response.
 * @memberof ProtoPushUserInfoExpiredResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.PushUserInfoExpiredResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get PushUserInfoExpiredResponse userId.
 * @memberof ProtoPushUserInfoExpiredResponse
 * @return {Long}
 */
proto.proto.PushUserInfoExpiredResponse.prototype.getUserId = function() {
  return this.userId;
};

/**
 * Set PushUserInfoExpiredResponse userId.
 * @memberof ProtoPushUserInfoExpiredResponse
 * @param {Long} value
 */
proto.proto.PushUserInfoExpiredResponse.prototype.setUserId = function(value) {
  this.userId = value;
};

/**
 * @interface ProtoQrCodeAddContact
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.QrCodeAddContact.prototype.serializeBinary = function() {
  return proto.proto.QrCodeAddContact.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoQrCodeAddContact}
 */
proto.proto.QrCodeAddContact.deserializeBinary = function(buffer) {
  return proto.proto.QrCodeAddContact.decode(buffer);
};

/**
 * Get QrCodeAddContact request.
 * @memberof ProtoQrCodeAddContact
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.QrCodeAddContact.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set QrCodeAddContact request.
 * @memberof ProtoQrCodeAddContact
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.QrCodeAddContact.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get QrCodeAddContact phone.
 * @memberof ProtoQrCodeAddContact
 * @return {string}
 */
proto.proto.QrCodeAddContact.prototype.getPhone = function() {
  return this.phone;
};

/**
 * Set QrCodeAddContact phone.
 * @memberof ProtoQrCodeAddContact
 * @param {string} value
 */
proto.proto.QrCodeAddContact.prototype.setPhone = function(value) {
  this.phone = value;
};

/**
 * Get QrCodeAddContact firstName.
 * @memberof ProtoQrCodeAddContact
 * @return {string}
 */
proto.proto.QrCodeAddContact.prototype.getFirstName = function() {
  return this.firstName;
};

/**
 * Set QrCodeAddContact firstName.
 * @memberof ProtoQrCodeAddContact
 * @param {string} value
 */
proto.proto.QrCodeAddContact.prototype.setFirstName = function(value) {
  this.firstName = value;
};

/**
 * Get QrCodeAddContact lastName.
 * @memberof ProtoQrCodeAddContact
 * @return {string}
 */
proto.proto.QrCodeAddContact.prototype.getLastName = function() {
  return this.lastName;
};

/**
 * Set QrCodeAddContact lastName.
 * @memberof ProtoQrCodeAddContact
 * @param {string} value
 */
proto.proto.QrCodeAddContact.prototype.setLastName = function(value) {
  this.lastName = value;
};

/**
 * @interface ProtoQrCodeAddContactResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.QrCodeAddContactResponse.prototype.serializeBinary = function() {
  return proto.proto.QrCodeAddContactResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoQrCodeAddContactResponse}
 */
proto.proto.QrCodeAddContactResponse.deserializeBinary = function(buffer) {
  return proto.proto.QrCodeAddContactResponse.decode(buffer);
};

/**
 * Get QrCodeAddContactResponse response.
 * @memberof ProtoQrCodeAddContactResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.QrCodeAddContactResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set QrCodeAddContactResponse response.
 * @memberof ProtoQrCodeAddContactResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.QrCodeAddContactResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get QrCodeAddContactResponse qrCodeImage.
 * @memberof ProtoQrCodeAddContactResponse
 * @return {Uint8Array}
 */
proto.proto.QrCodeAddContactResponse.prototype.getQrCodeImage = function() {
  return this.qrCodeImage;
};

/**
 * Set QrCodeAddContactResponse qrCodeImage.
 * @memberof ProtoQrCodeAddContactResponse
 * @param {Uint8Array} value
 */
proto.proto.QrCodeAddContactResponse.prototype.setQrCodeImage = function(value) {
  this.qrCodeImage = value;
};

/**
 * @interface ProtoQrCodeAddMe
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.QrCodeAddMe.prototype.serializeBinary = function() {
  return proto.proto.QrCodeAddMe.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoQrCodeAddMe}
 */
proto.proto.QrCodeAddMe.deserializeBinary = function(buffer) {
  return proto.proto.QrCodeAddMe.decode(buffer);
};

/**
 * Get QrCodeAddMe request.
 * @memberof ProtoQrCodeAddMe
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.QrCodeAddMe.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set QrCodeAddMe request.
 * @memberof ProtoQrCodeAddMe
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.QrCodeAddMe.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * @interface ProtoQrCodeAddMeResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.QrCodeAddMeResponse.prototype.serializeBinary = function() {
  return proto.proto.QrCodeAddMeResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoQrCodeAddMeResponse}
 */
proto.proto.QrCodeAddMeResponse.deserializeBinary = function(buffer) {
  return proto.proto.QrCodeAddMeResponse.decode(buffer);
};

/**
 * Get QrCodeAddMeResponse response.
 * @memberof ProtoQrCodeAddMeResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.QrCodeAddMeResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set QrCodeAddMeResponse response.
 * @memberof ProtoQrCodeAddMeResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.QrCodeAddMeResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get QrCodeAddMeResponse qrCodeImage.
 * @memberof ProtoQrCodeAddMeResponse
 * @return {Uint8Array}
 */
proto.proto.QrCodeAddMeResponse.prototype.getQrCodeImage = function() {
  return this.qrCodeImage;
};

/**
 * Set QrCodeAddMeResponse qrCodeImage.
 * @memberof ProtoQrCodeAddMeResponse
 * @param {Uint8Array} value
 */
proto.proto.QrCodeAddMeResponse.prototype.setQrCodeImage = function(value) {
  this.qrCodeImage = value;
};

/**
 * @interface ProtoQrCodeJoin
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.QrCodeJoin.prototype.serializeBinary = function() {
  return proto.proto.QrCodeJoin.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoQrCodeJoin}
 */
proto.proto.QrCodeJoin.deserializeBinary = function(buffer) {
  return proto.proto.QrCodeJoin.decode(buffer);
};

/**
 * Get QrCodeJoin request.
 * @memberof ProtoQrCodeJoin
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.QrCodeJoin.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set QrCodeJoin request.
 * @memberof ProtoQrCodeJoin
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.QrCodeJoin.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get QrCodeJoin inviteToken.
 * @memberof ProtoQrCodeJoin
 * @return {string}
 */
proto.proto.QrCodeJoin.prototype.getInviteToken = function() {
  return this.inviteToken;
};

/**
 * Set QrCodeJoin inviteToken.
 * @memberof ProtoQrCodeJoin
 * @param {string} value
 */
proto.proto.QrCodeJoin.prototype.setInviteToken = function(value) {
  this.inviteToken = value;
};

/**
 * @interface ProtoQrCodeJoinResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.QrCodeJoinResponse.prototype.serializeBinary = function() {
  return proto.proto.QrCodeJoinResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoQrCodeJoinResponse}
 */
proto.proto.QrCodeJoinResponse.deserializeBinary = function(buffer) {
  return proto.proto.QrCodeJoinResponse.decode(buffer);
};

/**
 * Get QrCodeJoinResponse response.
 * @memberof ProtoQrCodeJoinResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.QrCodeJoinResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set QrCodeJoinResponse response.
 * @memberof ProtoQrCodeJoinResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.QrCodeJoinResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get QrCodeJoinResponse qrCodeImage.
 * @memberof ProtoQrCodeJoinResponse
 * @return {Uint8Array}
 */
proto.proto.QrCodeJoinResponse.prototype.getQrCodeImage = function() {
  return this.qrCodeImage;
};

/**
 * Set QrCodeJoinResponse qrCodeImage.
 * @memberof ProtoQrCodeJoinResponse
 * @param {Uint8Array} value
 */
proto.proto.QrCodeJoinResponse.prototype.setQrCodeImage = function(value) {
  this.qrCodeImage = value;
};

/**
 * @interface ProtoQrCodeNewDevice
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.QrCodeNewDevice.prototype.serializeBinary = function() {
  return proto.proto.QrCodeNewDevice.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoQrCodeNewDevice}
 */
proto.proto.QrCodeNewDevice.deserializeBinary = function(buffer) {
  return proto.proto.QrCodeNewDevice.decode(buffer);
};

/**
 * Get QrCodeNewDevice request.
 * @memberof ProtoQrCodeNewDevice
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.QrCodeNewDevice.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set QrCodeNewDevice request.
 * @memberof ProtoQrCodeNewDevice
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.QrCodeNewDevice.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get QrCodeNewDevice appName.
 * @memberof ProtoQrCodeNewDevice
 * @return {string}
 */
proto.proto.QrCodeNewDevice.prototype.getAppName = function() {
  return this.appName;
};

/**
 * Set QrCodeNewDevice appName.
 * @memberof ProtoQrCodeNewDevice
 * @param {string} value
 */
proto.proto.QrCodeNewDevice.prototype.setAppName = function(value) {
  this.appName = value;
};

/**
 * Get QrCodeNewDevice appId.
 * @memberof ProtoQrCodeNewDevice
 * @return {number}
 */
proto.proto.QrCodeNewDevice.prototype.getAppId = function() {
  return this.appId;
};

/**
 * Set QrCodeNewDevice appId.
 * @memberof ProtoQrCodeNewDevice
 * @param {number} value
 */
proto.proto.QrCodeNewDevice.prototype.setAppId = function(value) {
  this.appId = value;
};

/**
 * Get QrCodeNewDevice appBuildVersion.
 * @memberof ProtoQrCodeNewDevice
 * @return {number}
 */
proto.proto.QrCodeNewDevice.prototype.getAppBuildVersion = function() {
  return this.appBuildVersion;
};

/**
 * Set QrCodeNewDevice appBuildVersion.
 * @memberof ProtoQrCodeNewDevice
 * @param {number} value
 */
proto.proto.QrCodeNewDevice.prototype.setAppBuildVersion = function(value) {
  this.appBuildVersion = value;
};

/**
 * Get QrCodeNewDevice appVersion.
 * @memberof ProtoQrCodeNewDevice
 * @return {string}
 */
proto.proto.QrCodeNewDevice.prototype.getAppVersion = function() {
  return this.appVersion;
};

/**
 * Set QrCodeNewDevice appVersion.
 * @memberof ProtoQrCodeNewDevice
 * @param {string} value
 */
proto.proto.QrCodeNewDevice.prototype.setAppVersion = function(value) {
  this.appVersion = value;
};

/**
 * Get QrCodeNewDevice platform.
 * @memberof ProtoQrCodeNewDevice
 * @return {ProtoPlatform}
 */
proto.proto.QrCodeNewDevice.prototype.getPlatform = function() {
  return this.platform;
};

/**
 * Set QrCodeNewDevice platform.
 * @memberof ProtoQrCodeNewDevice
 * @param {ProtoPlatform} value
 */
proto.proto.QrCodeNewDevice.prototype.setPlatform = function(value) {
  this.platform = value;
};

/**
 * Get QrCodeNewDevice platformVersion.
 * @memberof ProtoQrCodeNewDevice
 * @return {string}
 */
proto.proto.QrCodeNewDevice.prototype.getPlatformVersion = function() {
  return this.platformVersion;
};

/**
 * Set QrCodeNewDevice platformVersion.
 * @memberof ProtoQrCodeNewDevice
 * @param {string} value
 */
proto.proto.QrCodeNewDevice.prototype.setPlatformVersion = function(value) {
  this.platformVersion = value;
};

/**
 * Get QrCodeNewDevice device.
 * @memberof ProtoQrCodeNewDevice
 * @return {ProtoDevice}
 */
proto.proto.QrCodeNewDevice.prototype.getDevice = function() {
  return this.device;
};

/**
 * Set QrCodeNewDevice device.
 * @memberof ProtoQrCodeNewDevice
 * @param {ProtoDevice} value
 */
proto.proto.QrCodeNewDevice.prototype.setDevice = function(value) {
  this.device = value;
};

/**
 * Get QrCodeNewDevice deviceName.
 * @memberof ProtoQrCodeNewDevice
 * @return {string}
 */
proto.proto.QrCodeNewDevice.prototype.getDeviceName = function() {
  return this.deviceName;
};

/**
 * Set QrCodeNewDevice deviceName.
 * @memberof ProtoQrCodeNewDevice
 * @param {string} value
 */
proto.proto.QrCodeNewDevice.prototype.setDeviceName = function(value) {
  this.deviceName = value;
};

/**
 * @interface ProtoQrCodeNewDeviceResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.QrCodeNewDeviceResponse.prototype.serializeBinary = function() {
  return proto.proto.QrCodeNewDeviceResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoQrCodeNewDeviceResponse}
 */
proto.proto.QrCodeNewDeviceResponse.deserializeBinary = function(buffer) {
  return proto.proto.QrCodeNewDeviceResponse.decode(buffer);
};

/**
 * Get QrCodeNewDeviceResponse response.
 * @memberof ProtoQrCodeNewDeviceResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.QrCodeNewDeviceResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set QrCodeNewDeviceResponse response.
 * @memberof ProtoQrCodeNewDeviceResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.QrCodeNewDeviceResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get QrCodeNewDeviceResponse qrCodeImage.
 * @memberof ProtoQrCodeNewDeviceResponse
 * @return {Uint8Array}
 */
proto.proto.QrCodeNewDeviceResponse.prototype.getQrCodeImage = function() {
  return this.qrCodeImage;
};

/**
 * Set QrCodeNewDeviceResponse qrCodeImage.
 * @memberof ProtoQrCodeNewDeviceResponse
 * @param {Uint8Array} value
 */
proto.proto.QrCodeNewDeviceResponse.prototype.setQrCodeImage = function(value) {
  this.qrCodeImage = value;
};

/**
 * Get QrCodeNewDeviceResponse expireTime.
 * @memberof ProtoQrCodeNewDeviceResponse
 * @return {number}
 */
proto.proto.QrCodeNewDeviceResponse.prototype.getExpireTime = function() {
  return this.expireTime;
};

/**
 * Set QrCodeNewDeviceResponse expireTime.
 * @memberof ProtoQrCodeNewDeviceResponse
 * @param {number} value
 */
proto.proto.QrCodeNewDeviceResponse.prototype.setExpireTime = function(value) {
  this.expireTime = value;
};

/**
 * @interface ProtoQrCodeResolve
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.QrCodeResolve.prototype.serializeBinary = function() {
  return proto.proto.QrCodeResolve.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoQrCodeResolve}
 */
proto.proto.QrCodeResolve.deserializeBinary = function(buffer) {
  return proto.proto.QrCodeResolve.decode(buffer);
};

/**
 * Get QrCodeResolve request.
 * @memberof ProtoQrCodeResolve
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.QrCodeResolve.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set QrCodeResolve request.
 * @memberof ProtoQrCodeResolve
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.QrCodeResolve.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get QrCodeResolve username.
 * @memberof ProtoQrCodeResolve
 * @return {string}
 */
proto.proto.QrCodeResolve.prototype.getUsername = function() {
  return this.username;
};

/**
 * Set QrCodeResolve username.
 * @memberof ProtoQrCodeResolve
 * @param {string} value
 */
proto.proto.QrCodeResolve.prototype.setUsername = function(value) {
  this.username = value;
};

/**
 * Get QrCodeResolve messageId.
 * @memberof ProtoQrCodeResolve
 * @return {Long}
 */
proto.proto.QrCodeResolve.prototype.getMessageId = function() {
  return this.messageId;
};

/**
 * Set QrCodeResolve messageId.
 * @memberof ProtoQrCodeResolve
 * @param {Long} value
 */
proto.proto.QrCodeResolve.prototype.setMessageId = function(value) {
  this.messageId = value;
};

/**
 * @interface ProtoQrCodeResolveResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.QrCodeResolveResponse.prototype.serializeBinary = function() {
  return proto.proto.QrCodeResolveResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoQrCodeResolveResponse}
 */
proto.proto.QrCodeResolveResponse.deserializeBinary = function(buffer) {
  return proto.proto.QrCodeResolveResponse.decode(buffer);
};

/**
 * Get QrCodeResolveResponse response.
 * @memberof ProtoQrCodeResolveResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.QrCodeResolveResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set QrCodeResolveResponse response.
 * @memberof ProtoQrCodeResolveResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.QrCodeResolveResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get QrCodeResolveResponse qrCodeImage.
 * @memberof ProtoQrCodeResolveResponse
 * @return {Uint8Array}
 */
proto.proto.QrCodeResolveResponse.prototype.getQrCodeImage = function() {
  return this.qrCodeImage;
};

/**
 * Set QrCodeResolveResponse qrCodeImage.
 * @memberof ProtoQrCodeResolveResponse
 * @param {Uint8Array} value
 */
proto.proto.QrCodeResolveResponse.prototype.setQrCodeImage = function(value) {
  this.qrCodeImage = value;
};

/**
 * @interface ProtoSignalingAccept
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.SignalingAccept.prototype.serializeBinary = function() {
  return proto.proto.SignalingAccept.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoSignalingAccept}
 */
proto.proto.SignalingAccept.deserializeBinary = function(buffer) {
  return proto.proto.SignalingAccept.decode(buffer);
};

/**
 * Get SignalingAccept request.
 * @memberof ProtoSignalingAccept
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.SignalingAccept.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set SignalingAccept request.
 * @memberof ProtoSignalingAccept
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.SignalingAccept.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get SignalingAccept calledSdp.
 * @memberof ProtoSignalingAccept
 * @return {string}
 */
proto.proto.SignalingAccept.prototype.getCalledSdp = function() {
  return this.calledSdp;
};

/**
 * Set SignalingAccept calledSdp.
 * @memberof ProtoSignalingAccept
 * @param {string} value
 */
proto.proto.SignalingAccept.prototype.setCalledSdp = function(value) {
  this.calledSdp = value;
};

/**
 * @interface ProtoSignalingAcceptResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.SignalingAcceptResponse.prototype.serializeBinary = function() {
  return proto.proto.SignalingAcceptResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoSignalingAcceptResponse}
 */
proto.proto.SignalingAcceptResponse.deserializeBinary = function(buffer) {
  return proto.proto.SignalingAcceptResponse.decode(buffer);
};

/**
 * Get SignalingAcceptResponse response.
 * @memberof ProtoSignalingAcceptResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.SignalingAcceptResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set SignalingAcceptResponse response.
 * @memberof ProtoSignalingAcceptResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.SignalingAcceptResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get SignalingAcceptResponse calledSdp.
 * @memberof ProtoSignalingAcceptResponse
 * @return {string}
 */
proto.proto.SignalingAcceptResponse.prototype.getCalledSdp = function() {
  return this.calledSdp;
};

/**
 * Set SignalingAcceptResponse calledSdp.
 * @memberof ProtoSignalingAcceptResponse
 * @param {string} value
 */
proto.proto.SignalingAcceptResponse.prototype.setCalledSdp = function(value) {
  this.calledSdp = value;
};

/**
 * @interface ProtoSignalingCandidate
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.SignalingCandidate.prototype.serializeBinary = function() {
  return proto.proto.SignalingCandidate.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoSignalingCandidate}
 */
proto.proto.SignalingCandidate.deserializeBinary = function(buffer) {
  return proto.proto.SignalingCandidate.decode(buffer);
};

/**
 * Get SignalingCandidate request.
 * @memberof ProtoSignalingCandidate
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.SignalingCandidate.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set SignalingCandidate request.
 * @memberof ProtoSignalingCandidate
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.SignalingCandidate.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get SignalingCandidate candidate.
 * @memberof ProtoSignalingCandidate
 * @return {string}
 */
proto.proto.SignalingCandidate.prototype.getCandidate = function() {
  return this.candidate;
};

/**
 * Set SignalingCandidate candidate.
 * @memberof ProtoSignalingCandidate
 * @param {string} value
 */
proto.proto.SignalingCandidate.prototype.setCandidate = function(value) {
  this.candidate = value;
};

/**
 * Get SignalingCandidate sdpMId.
 * @memberof ProtoSignalingCandidate
 * @return {string}
 */
proto.proto.SignalingCandidate.prototype.getSdpMId = function() {
  return this.sdpMId;
};

/**
 * Set SignalingCandidate sdpMId.
 * @memberof ProtoSignalingCandidate
 * @param {string} value
 */
proto.proto.SignalingCandidate.prototype.setSdpMId = function(value) {
  this.sdpMId = value;
};

/**
 * Get SignalingCandidate sdpMLineIndex.
 * @memberof ProtoSignalingCandidate
 * @return {number}
 */
proto.proto.SignalingCandidate.prototype.getSdpMLineIndex = function() {
  return this.sdpMLineIndex;
};

/**
 * Set SignalingCandidate sdpMLineIndex.
 * @memberof ProtoSignalingCandidate
 * @param {number} value
 */
proto.proto.SignalingCandidate.prototype.setSdpMLineIndex = function(value) {
  this.sdpMLineIndex = value;
};

/**
 * @interface ProtoSignalingCandidateResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.SignalingCandidateResponse.prototype.serializeBinary = function() {
  return proto.proto.SignalingCandidateResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoSignalingCandidateResponse}
 */
proto.proto.SignalingCandidateResponse.deserializeBinary = function(buffer) {
  return proto.proto.SignalingCandidateResponse.decode(buffer);
};

/**
 * Get SignalingCandidateResponse response.
 * @memberof ProtoSignalingCandidateResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.SignalingCandidateResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set SignalingCandidateResponse response.
 * @memberof ProtoSignalingCandidateResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.SignalingCandidateResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get SignalingCandidateResponse peerCandidate.
 * @memberof ProtoSignalingCandidateResponse
 * @return {string}
 */
proto.proto.SignalingCandidateResponse.prototype.getPeerCandidate = function() {
  return this.peerCandidate;
};

/**
 * Set SignalingCandidateResponse peerCandidate.
 * @memberof ProtoSignalingCandidateResponse
 * @param {string} value
 */
proto.proto.SignalingCandidateResponse.prototype.setPeerCandidate = function(value) {
  this.peerCandidate = value;
};

/**
 * Get SignalingCandidateResponse peerSdpMId.
 * @memberof ProtoSignalingCandidateResponse
 * @return {string}
 */
proto.proto.SignalingCandidateResponse.prototype.getPeerSdpMId = function() {
  return this.peerSdpMId;
};

/**
 * Set SignalingCandidateResponse peerSdpMId.
 * @memberof ProtoSignalingCandidateResponse
 * @param {string} value
 */
proto.proto.SignalingCandidateResponse.prototype.setPeerSdpMId = function(value) {
  this.peerSdpMId = value;
};

/**
 * Get SignalingCandidateResponse peerSdpMLineIndex.
 * @memberof ProtoSignalingCandidateResponse
 * @return {number}
 */
proto.proto.SignalingCandidateResponse.prototype.getPeerSdpMLineIndex = function() {
  return this.peerSdpMLineIndex;
};

/**
 * Set SignalingCandidateResponse peerSdpMLineIndex.
 * @memberof ProtoSignalingCandidateResponse
 * @param {number} value
 */
proto.proto.SignalingCandidateResponse.prototype.setPeerSdpMLineIndex = function(value) {
  this.peerSdpMLineIndex = value;
};

/**
 * @interface ProtoSignalingClearLog
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.SignalingClearLog.prototype.serializeBinary = function() {
  return proto.proto.SignalingClearLog.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoSignalingClearLog}
 */
proto.proto.SignalingClearLog.deserializeBinary = function(buffer) {
  return proto.proto.SignalingClearLog.decode(buffer);
};

/**
 * Get SignalingClearLog request.
 * @memberof ProtoSignalingClearLog
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.SignalingClearLog.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set SignalingClearLog request.
 * @memberof ProtoSignalingClearLog
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.SignalingClearLog.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get SignalingClearLog clearId.
 * @memberof ProtoSignalingClearLog
 * @return {Long}
 */
proto.proto.SignalingClearLog.prototype.getClearId = function() {
  return this.clearId;
};

/**
 * Set SignalingClearLog clearId.
 * @memberof ProtoSignalingClearLog
 * @param {Long} value
 */
proto.proto.SignalingClearLog.prototype.setClearId = function(value) {
  this.clearId = value;
};

/**
 * @interface ProtoSignalingClearLogResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.SignalingClearLogResponse.prototype.serializeBinary = function() {
  return proto.proto.SignalingClearLogResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoSignalingClearLogResponse}
 */
proto.proto.SignalingClearLogResponse.deserializeBinary = function(buffer) {
  return proto.proto.SignalingClearLogResponse.decode(buffer);
};

/**
 * Get SignalingClearLogResponse response.
 * @memberof ProtoSignalingClearLogResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.SignalingClearLogResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set SignalingClearLogResponse response.
 * @memberof ProtoSignalingClearLogResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.SignalingClearLogResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get SignalingClearLogResponse clearId.
 * @memberof ProtoSignalingClearLogResponse
 * @return {Long}
 */
proto.proto.SignalingClearLogResponse.prototype.getClearId = function() {
  return this.clearId;
};

/**
 * Set SignalingClearLogResponse clearId.
 * @memberof ProtoSignalingClearLogResponse
 * @param {Long} value
 */
proto.proto.SignalingClearLogResponse.prototype.setClearId = function(value) {
  this.clearId = value;
};

/**
 * @interface ProtoSignalingGetConfiguration
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.SignalingGetConfiguration.prototype.serializeBinary = function() {
  return proto.proto.SignalingGetConfiguration.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoSignalingGetConfiguration}
 */
proto.proto.SignalingGetConfiguration.deserializeBinary = function(buffer) {
  return proto.proto.SignalingGetConfiguration.decode(buffer);
};

/**
 * Get SignalingGetConfiguration request.
 * @memberof ProtoSignalingGetConfiguration
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.SignalingGetConfiguration.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set SignalingGetConfiguration request.
 * @memberof ProtoSignalingGetConfiguration
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.SignalingGetConfiguration.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * @interface ProtoSignalingGetConfigurationResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.SignalingGetConfigurationResponse.prototype.serializeBinary = function() {
  return proto.proto.SignalingGetConfigurationResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoSignalingGetConfigurationResponse}
 */
proto.proto.SignalingGetConfigurationResponse.deserializeBinary = function(buffer) {
  return proto.proto.SignalingGetConfigurationResponse.decode(buffer);
};

/**
 * Get SignalingGetConfigurationResponse response.
 * @memberof ProtoSignalingGetConfigurationResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.SignalingGetConfigurationResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set SignalingGetConfigurationResponse response.
 * @memberof ProtoSignalingGetConfigurationResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.SignalingGetConfigurationResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get SignalingGetConfigurationResponse iceServer.
 * @memberof ProtoSignalingGetConfigurationResponse
 * @return {Array.<ProtoSignalingGetConfigurationResponse_IceServer>}
 */
proto.proto.SignalingGetConfigurationResponse.prototype.getIceServerList = function() {
  return this.iceServer;
};

/**
 * Set SignalingGetConfigurationResponse iceServer.
 * @memberof ProtoSignalingGetConfigurationResponse
 * @param {Array.<ProtoSignalingGetConfigurationResponse_IceServer>} value
 */
proto.proto.SignalingGetConfigurationResponse.prototype.setIceServerList = function(value) {
  this.iceServer = value;
};

/**
 * Get SignalingGetConfigurationResponse voiceCalling.
 * @memberof ProtoSignalingGetConfigurationResponse
 * @return {boolean}
 */
proto.proto.SignalingGetConfigurationResponse.prototype.getVoiceCalling = function() {
  return this.voiceCalling;
};

/**
 * Set SignalingGetConfigurationResponse voiceCalling.
 * @memberof ProtoSignalingGetConfigurationResponse
 * @param {boolean} value
 */
proto.proto.SignalingGetConfigurationResponse.prototype.setVoiceCalling = function(value) {
  this.voiceCalling = value;
};

/**
 * Get SignalingGetConfigurationResponse videoCalling.
 * @memberof ProtoSignalingGetConfigurationResponse
 * @return {boolean}
 */
proto.proto.SignalingGetConfigurationResponse.prototype.getVideoCalling = function() {
  return this.videoCalling;
};

/**
 * Set SignalingGetConfigurationResponse videoCalling.
 * @memberof ProtoSignalingGetConfigurationResponse
 * @param {boolean} value
 */
proto.proto.SignalingGetConfigurationResponse.prototype.setVideoCalling = function(value) {
  this.videoCalling = value;
};

/**
 * Get SignalingGetConfigurationResponse screenSharing.
 * @memberof ProtoSignalingGetConfigurationResponse
 * @return {boolean}
 */
proto.proto.SignalingGetConfigurationResponse.prototype.getScreenSharing = function() {
  return this.screenSharing;
};

/**
 * Set SignalingGetConfigurationResponse screenSharing.
 * @memberof ProtoSignalingGetConfigurationResponse
 * @param {boolean} value
 */
proto.proto.SignalingGetConfigurationResponse.prototype.setScreenSharing = function(value) {
  this.screenSharing = value;
};

/**
 * Get SignalingGetConfigurationResponse secretChat.
 * @memberof ProtoSignalingGetConfigurationResponse
 * @return {boolean}
 */
proto.proto.SignalingGetConfigurationResponse.prototype.getSecretChat = function() {
  return this.secretChat;
};

/**
 * Set SignalingGetConfigurationResponse secretChat.
 * @memberof ProtoSignalingGetConfigurationResponse
 * @param {boolean} value
 */
proto.proto.SignalingGetConfigurationResponse.prototype.setSecretChat = function(value) {
  this.secretChat = value;
};

/**
 * @interface ProtoSignalingGetConfigurationResponse_IceServer
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.SignalingGetConfigurationResponse.IceServer.prototype.serializeBinary = function() {
  return proto.proto.SignalingGetConfigurationResponse.IceServer.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoSignalingGetConfigurationResponse_IceServer}
 */
proto.proto.SignalingGetConfigurationResponse.IceServer.deserializeBinary = function(buffer) {
  return proto.proto.SignalingGetConfigurationResponse.IceServer.decode(buffer);
};

/**
 * Get IceServer url.
 * @memberof ProtoSignalingGetConfigurationResponse_IceServer
 * @return {string}
 */
proto.proto.SignalingGetConfigurationResponse.IceServer.prototype.getUrl = function() {
  return this.url;
};

/**
 * Set IceServer url.
 * @memberof ProtoSignalingGetConfigurationResponse_IceServer
 * @param {string} value
 */
proto.proto.SignalingGetConfigurationResponse.IceServer.prototype.setUrl = function(value) {
  this.url = value;
};

/**
 * Get IceServer credential.
 * @memberof ProtoSignalingGetConfigurationResponse_IceServer
 * @return {string}
 */
proto.proto.SignalingGetConfigurationResponse.IceServer.prototype.getCredential = function() {
  return this.credential;
};

/**
 * Set IceServer credential.
 * @memberof ProtoSignalingGetConfigurationResponse_IceServer
 * @param {string} value
 */
proto.proto.SignalingGetConfigurationResponse.IceServer.prototype.setCredential = function(value) {
  this.credential = value;
};

/**
 * Get IceServer username.
 * @memberof ProtoSignalingGetConfigurationResponse_IceServer
 * @return {string}
 */
proto.proto.SignalingGetConfigurationResponse.IceServer.prototype.getUsername = function() {
  return this.username;
};

/**
 * Set IceServer username.
 * @memberof ProtoSignalingGetConfigurationResponse_IceServer
 * @param {string} value
 */
proto.proto.SignalingGetConfigurationResponse.IceServer.prototype.setUsername = function(value) {
  this.username = value;
};

/**
 * @interface ProtoSignalingGetLog
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.SignalingGetLog.prototype.serializeBinary = function() {
  return proto.proto.SignalingGetLog.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoSignalingGetLog}
 */
proto.proto.SignalingGetLog.deserializeBinary = function(buffer) {
  return proto.proto.SignalingGetLog.decode(buffer);
};

/**
 * Get SignalingGetLog request.
 * @memberof ProtoSignalingGetLog
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.SignalingGetLog.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set SignalingGetLog request.
 * @memberof ProtoSignalingGetLog
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.SignalingGetLog.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get SignalingGetLog pagination.
 * @memberof ProtoSignalingGetLog
 * @return {(ProtoPagination|null|undefined)}
 */
proto.proto.SignalingGetLog.prototype.getPagination = function() {
  return this.pagination;
};

/**
 * Set SignalingGetLog pagination.
 * @memberof ProtoSignalingGetLog
 * @param {(ProtoPagination|null|undefined)} value
 */
proto.proto.SignalingGetLog.prototype.setPagination = function(value) {
  this.pagination = value;
};

/**
 * @interface ProtoSignalingGetLogResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.SignalingGetLogResponse.prototype.serializeBinary = function() {
  return proto.proto.SignalingGetLogResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoSignalingGetLogResponse}
 */
proto.proto.SignalingGetLogResponse.deserializeBinary = function(buffer) {
  return proto.proto.SignalingGetLogResponse.decode(buffer);
};

/**
 * Get SignalingGetLogResponse response.
 * @memberof ProtoSignalingGetLogResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.SignalingGetLogResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set SignalingGetLogResponse response.
 * @memberof ProtoSignalingGetLogResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.SignalingGetLogResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get SignalingGetLogResponse signalingLog.
 * @memberof ProtoSignalingGetLogResponse
 * @return {Array.<ProtoSignalingGetLogResponse_SignalingLog>}
 */
proto.proto.SignalingGetLogResponse.prototype.getSignalingLogList = function() {
  return this.signalingLog;
};

/**
 * Set SignalingGetLogResponse signalingLog.
 * @memberof ProtoSignalingGetLogResponse
 * @param {Array.<ProtoSignalingGetLogResponse_SignalingLog>} value
 */
proto.proto.SignalingGetLogResponse.prototype.setSignalingLogList = function(value) {
  this.signalingLog = value;
};

/**
 * @interface ProtoSignalingGetLogResponse_SignalingLog
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.SignalingGetLogResponse.SignalingLog.prototype.serializeBinary = function() {
  return proto.proto.SignalingGetLogResponse.SignalingLog.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoSignalingGetLogResponse_SignalingLog}
 */
proto.proto.SignalingGetLogResponse.SignalingLog.deserializeBinary = function(buffer) {
  return proto.proto.SignalingGetLogResponse.SignalingLog.decode(buffer);
};

/**
 * Get SignalingLog id.
 * @memberof ProtoSignalingGetLogResponse_SignalingLog
 * @return {Long}
 */
proto.proto.SignalingGetLogResponse.SignalingLog.prototype.getId = function() {
  return this.id;
};

/**
 * Set SignalingLog id.
 * @memberof ProtoSignalingGetLogResponse_SignalingLog
 * @param {Long} value
 */
proto.proto.SignalingGetLogResponse.SignalingLog.prototype.setId = function(value) {
  this.id = value;
};

/**
 * Get SignalingLog type.
 * @memberof ProtoSignalingGetLogResponse_SignalingLog
 * @return {ProtoSignalingOffer_Type}
 */
proto.proto.SignalingGetLogResponse.SignalingLog.prototype.getType = function() {
  return this.type;
};

/**
 * Set SignalingLog type.
 * @memberof ProtoSignalingGetLogResponse_SignalingLog
 * @param {ProtoSignalingOffer_Type} value
 */
proto.proto.SignalingGetLogResponse.SignalingLog.prototype.setType = function(value) {
  this.type = value;
};

/**
 * Get SignalingLog status.
 * @memberof ProtoSignalingGetLogResponse_SignalingLog
 * @return {ProtoSignalingGetLogResponse_SignalingLog_Status}
 */
proto.proto.SignalingGetLogResponse.SignalingLog.prototype.getStatus = function() {
  return this.status;
};

/**
 * Set SignalingLog status.
 * @memberof ProtoSignalingGetLogResponse_SignalingLog
 * @param {ProtoSignalingGetLogResponse_SignalingLog_Status} value
 */
proto.proto.SignalingGetLogResponse.SignalingLog.prototype.setStatus = function(value) {
  this.status = value;
};

/**
 * Get SignalingLog peer.
 * @memberof ProtoSignalingGetLogResponse_SignalingLog
 * @return {(ProtoRegisteredUser|null|undefined)}
 */
proto.proto.SignalingGetLogResponse.SignalingLog.prototype.getPeer = function() {
  return this.peer;
};

/**
 * Set SignalingLog peer.
 * @memberof ProtoSignalingGetLogResponse_SignalingLog
 * @param {(ProtoRegisteredUser|null|undefined)} value
 */
proto.proto.SignalingGetLogResponse.SignalingLog.prototype.setPeer = function(value) {
  this.peer = value;
};

/**
 * Get SignalingLog offerTime.
 * @memberof ProtoSignalingGetLogResponse_SignalingLog
 * @return {number}
 */
proto.proto.SignalingGetLogResponse.SignalingLog.prototype.getOfferTime = function() {
  return this.offerTime;
};

/**
 * Set SignalingLog offerTime.
 * @memberof ProtoSignalingGetLogResponse_SignalingLog
 * @param {number} value
 */
proto.proto.SignalingGetLogResponse.SignalingLog.prototype.setOfferTime = function(value) {
  this.offerTime = value;
};

/**
 * Get SignalingLog duration.
 * @memberof ProtoSignalingGetLogResponse_SignalingLog
 * @return {number}
 */
proto.proto.SignalingGetLogResponse.SignalingLog.prototype.getDuration = function() {
  return this.duration;
};

/**
 * Set SignalingLog duration.
 * @memberof ProtoSignalingGetLogResponse_SignalingLog
 * @param {number} value
 */
proto.proto.SignalingGetLogResponse.SignalingLog.prototype.setDuration = function(value) {
  this.duration = value;
};

/**
 * @typedef {number} ProtoSignalingGetLogResponse_SignalingLog_Status
 */

/**
 * Status enum.
 * @enum {ProtoSignalingGetLogResponse_SignalingLog_Status}
 * @memberof ProtoSignalingGetLogResponse_SignalingLog
 */
proto.proto.SignalingGetLogResponse.SignalingLog.Status = proto.proto.SignalingGetLogResponse.SignalingLog.prototype.Status = {
  MISSED : 0,
  CANCELED : 1,
  INCOMING : 2,
  OUTGOING : 3,
};

/**
 * @interface ProtoSignalingOffer
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.SignalingOffer.prototype.serializeBinary = function() {
  return proto.proto.SignalingOffer.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoSignalingOffer}
 */
proto.proto.SignalingOffer.deserializeBinary = function(buffer) {
  return proto.proto.SignalingOffer.decode(buffer);
};

/**
 * Get SignalingOffer request.
 * @memberof ProtoSignalingOffer
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.SignalingOffer.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set SignalingOffer request.
 * @memberof ProtoSignalingOffer
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.SignalingOffer.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get SignalingOffer calledUserId.
 * @memberof ProtoSignalingOffer
 * @return {Long}
 */
proto.proto.SignalingOffer.prototype.getCalledUserId = function() {
  return this.calledUserId;
};

/**
 * Set SignalingOffer calledUserId.
 * @memberof ProtoSignalingOffer
 * @param {Long} value
 */
proto.proto.SignalingOffer.prototype.setCalledUserId = function(value) {
  this.calledUserId = value;
};

/**
 * Get SignalingOffer type.
 * @memberof ProtoSignalingOffer
 * @return {ProtoSignalingOffer_Type}
 */
proto.proto.SignalingOffer.prototype.getType = function() {
  return this.type;
};

/**
 * Set SignalingOffer type.
 * @memberof ProtoSignalingOffer
 * @param {ProtoSignalingOffer_Type} value
 */
proto.proto.SignalingOffer.prototype.setType = function(value) {
  this.type = value;
};

/**
 * Get SignalingOffer callerSdp.
 * @memberof ProtoSignalingOffer
 * @return {string}
 */
proto.proto.SignalingOffer.prototype.getCallerSdp = function() {
  return this.callerSdp;
};

/**
 * Set SignalingOffer callerSdp.
 * @memberof ProtoSignalingOffer
 * @param {string} value
 */
proto.proto.SignalingOffer.prototype.setCallerSdp = function(value) {
  this.callerSdp = value;
};

/**
 * @typedef {number} ProtoSignalingOffer_Type
 */

/**
 * Type enum.
 * @enum {ProtoSignalingOffer_Type}
 * @memberof ProtoSignalingOffer
 */
proto.proto.SignalingOffer.Type = proto.proto.SignalingOffer.prototype.Type = {
  VOICE_CALLING : 0,
  VIDEO_CALLING : 1,
  SCREEN_SHARING : 2,
  SECRET_CHAT : 3,
};

/**
 * @interface ProtoSignalingOfferResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.SignalingOfferResponse.prototype.serializeBinary = function() {
  return proto.proto.SignalingOfferResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoSignalingOfferResponse}
 */
proto.proto.SignalingOfferResponse.deserializeBinary = function(buffer) {
  return proto.proto.SignalingOfferResponse.decode(buffer);
};

/**
 * Get SignalingOfferResponse response.
 * @memberof ProtoSignalingOfferResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.SignalingOfferResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set SignalingOfferResponse response.
 * @memberof ProtoSignalingOfferResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.SignalingOfferResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get SignalingOfferResponse callerUserId.
 * @memberof ProtoSignalingOfferResponse
 * @return {Long}
 */
proto.proto.SignalingOfferResponse.prototype.getCallerUserId = function() {
  return this.callerUserId;
};

/**
 * Set SignalingOfferResponse callerUserId.
 * @memberof ProtoSignalingOfferResponse
 * @param {Long} value
 */
proto.proto.SignalingOfferResponse.prototype.setCallerUserId = function(value) {
  this.callerUserId = value;
};

/**
 * Get SignalingOfferResponse type.
 * @memberof ProtoSignalingOfferResponse
 * @return {ProtoSignalingOffer_Type}
 */
proto.proto.SignalingOfferResponse.prototype.getType = function() {
  return this.type;
};

/**
 * Set SignalingOfferResponse type.
 * @memberof ProtoSignalingOfferResponse
 * @param {ProtoSignalingOffer_Type} value
 */
proto.proto.SignalingOfferResponse.prototype.setType = function(value) {
  this.type = value;
};

/**
 * Get SignalingOfferResponse callerSdp.
 * @memberof ProtoSignalingOfferResponse
 * @return {string}
 */
proto.proto.SignalingOfferResponse.prototype.getCallerSdp = function() {
  return this.callerSdp;
};

/**
 * Set SignalingOfferResponse callerSdp.
 * @memberof ProtoSignalingOfferResponse
 * @param {string} value
 */
proto.proto.SignalingOfferResponse.prototype.setCallerSdp = function(value) {
  this.callerSdp = value;
};

/**
 * @interface ProtoSignalingLeave
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.SignalingLeave.prototype.serializeBinary = function() {
  return proto.proto.SignalingLeave.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoSignalingLeave}
 */
proto.proto.SignalingLeave.deserializeBinary = function(buffer) {
  return proto.proto.SignalingLeave.decode(buffer);
};

/**
 * Get SignalingLeave request.
 * @memberof ProtoSignalingLeave
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.SignalingLeave.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set SignalingLeave request.
 * @memberof ProtoSignalingLeave
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.SignalingLeave.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * @interface ProtoSignalingLeaveResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.SignalingLeaveResponse.prototype.serializeBinary = function() {
  return proto.proto.SignalingLeaveResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoSignalingLeaveResponse}
 */
proto.proto.SignalingLeaveResponse.deserializeBinary = function(buffer) {
  return proto.proto.SignalingLeaveResponse.decode(buffer);
};

/**
 * Get SignalingLeaveResponse response.
 * @memberof ProtoSignalingLeaveResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.SignalingLeaveResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set SignalingLeaveResponse response.
 * @memberof ProtoSignalingLeaveResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.SignalingLeaveResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get SignalingLeaveResponse type.
 * @memberof ProtoSignalingLeaveResponse
 * @return {ProtoSignalingLeaveResponse_Type}
 */
proto.proto.SignalingLeaveResponse.prototype.getType = function() {
  return this.type;
};

/**
 * Set SignalingLeaveResponse type.
 * @memberof ProtoSignalingLeaveResponse
 * @param {ProtoSignalingLeaveResponse_Type} value
 */
proto.proto.SignalingLeaveResponse.prototype.setType = function(value) {
  this.type = value;
};

/**
 * @typedef {number} ProtoSignalingLeaveResponse_Type
 */

/**
 * Type enum.
 * @enum {ProtoSignalingLeaveResponse_Type}
 * @memberof ProtoSignalingLeaveResponse
 */
proto.proto.SignalingLeaveResponse.Type = proto.proto.SignalingLeaveResponse.prototype.Type = {
  MISSED : 0,
  REJECTED : 1,
  ACCEPTED : 2,
  NOT_ANSWERED : 3,
  UNAVAILABLE : 4,
  DISCONNECTED : 5,
  FINISHED : 6,
  TOO_LONG : 7,
};

/**
 * @interface ProtoSignalingRate
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.SignalingRate.prototype.serializeBinary = function() {
  return proto.proto.SignalingRate.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoSignalingRate}
 */
proto.proto.SignalingRate.deserializeBinary = function(buffer) {
  return proto.proto.SignalingRate.decode(buffer);
};

/**
 * Get SignalingRate request.
 * @memberof ProtoSignalingRate
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.SignalingRate.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set SignalingRate request.
 * @memberof ProtoSignalingRate
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.SignalingRate.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get SignalingRate id.
 * @memberof ProtoSignalingRate
 * @return {Long}
 */
proto.proto.SignalingRate.prototype.getId = function() {
  return this.id;
};

/**
 * Set SignalingRate id.
 * @memberof ProtoSignalingRate
 * @param {Long} value
 */
proto.proto.SignalingRate.prototype.setId = function(value) {
  this.id = value;
};

/**
 * Get SignalingRate rate.
 * @memberof ProtoSignalingRate
 * @return {number}
 */
proto.proto.SignalingRate.prototype.getRate = function() {
  return this.rate;
};

/**
 * Set SignalingRate rate.
 * @memberof ProtoSignalingRate
 * @param {number} value
 */
proto.proto.SignalingRate.prototype.setRate = function(value) {
  this.rate = value;
};

/**
 * Get SignalingRate reason.
 * @memberof ProtoSignalingRate
 * @return {string}
 */
proto.proto.SignalingRate.prototype.getReason = function() {
  return this.reason;
};

/**
 * Set SignalingRate reason.
 * @memberof ProtoSignalingRate
 * @param {string} value
 */
proto.proto.SignalingRate.prototype.setReason = function(value) {
  this.reason = value;
};

/**
 * @interface ProtoSignalingRateResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.SignalingRateResponse.prototype.serializeBinary = function() {
  return proto.proto.SignalingRateResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoSignalingRateResponse}
 */
proto.proto.SignalingRateResponse.deserializeBinary = function(buffer) {
  return proto.proto.SignalingRateResponse.decode(buffer);
};

/**
 * Get SignalingRateResponse response.
 * @memberof ProtoSignalingRateResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.SignalingRateResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set SignalingRateResponse response.
 * @memberof ProtoSignalingRateResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.SignalingRateResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * @interface ProtoSignalingRinging
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.SignalingRinging.prototype.serializeBinary = function() {
  return proto.proto.SignalingRinging.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoSignalingRinging}
 */
proto.proto.SignalingRinging.deserializeBinary = function(buffer) {
  return proto.proto.SignalingRinging.decode(buffer);
};

/**
 * Get SignalingRinging request.
 * @memberof ProtoSignalingRinging
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.SignalingRinging.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set SignalingRinging request.
 * @memberof ProtoSignalingRinging
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.SignalingRinging.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * @interface ProtoSignalingRingingResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.SignalingRingingResponse.prototype.serializeBinary = function() {
  return proto.proto.SignalingRingingResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoSignalingRingingResponse}
 */
proto.proto.SignalingRingingResponse.deserializeBinary = function(buffer) {
  return proto.proto.SignalingRingingResponse.decode(buffer);
};

/**
 * Get SignalingRingingResponse response.
 * @memberof ProtoSignalingRingingResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.SignalingRingingResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set SignalingRingingResponse response.
 * @memberof ProtoSignalingRingingResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.SignalingRingingResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * @interface ProtoSignalingSessionHold
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.SignalingSessionHold.prototype.serializeBinary = function() {
  return proto.proto.SignalingSessionHold.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoSignalingSessionHold}
 */
proto.proto.SignalingSessionHold.deserializeBinary = function(buffer) {
  return proto.proto.SignalingSessionHold.decode(buffer);
};

/**
 * Get SignalingSessionHold request.
 * @memberof ProtoSignalingSessionHold
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.SignalingSessionHold.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set SignalingSessionHold request.
 * @memberof ProtoSignalingSessionHold
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.SignalingSessionHold.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get SignalingSessionHold hold.
 * @memberof ProtoSignalingSessionHold
 * @return {boolean}
 */
proto.proto.SignalingSessionHold.prototype.getHold = function() {
  return this.hold;
};

/**
 * Set SignalingSessionHold hold.
 * @memberof ProtoSignalingSessionHold
 * @param {boolean} value
 */
proto.proto.SignalingSessionHold.prototype.setHold = function(value) {
  this.hold = value;
};

/**
 * @interface ProtoSignalingSessionHoldResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.SignalingSessionHoldResponse.prototype.serializeBinary = function() {
  return proto.proto.SignalingSessionHoldResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoSignalingSessionHoldResponse}
 */
proto.proto.SignalingSessionHoldResponse.deserializeBinary = function(buffer) {
  return proto.proto.SignalingSessionHoldResponse.decode(buffer);
};

/**
 * Get SignalingSessionHoldResponse response.
 * @memberof ProtoSignalingSessionHoldResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.SignalingSessionHoldResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set SignalingSessionHoldResponse response.
 * @memberof ProtoSignalingSessionHoldResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.SignalingSessionHoldResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get SignalingSessionHoldResponse hold.
 * @memberof ProtoSignalingSessionHoldResponse
 * @return {boolean}
 */
proto.proto.SignalingSessionHoldResponse.prototype.getHold = function() {
  return this.hold;
};

/**
 * Set SignalingSessionHoldResponse hold.
 * @memberof ProtoSignalingSessionHoldResponse
 * @param {boolean} value
 */
proto.proto.SignalingSessionHoldResponse.prototype.setHold = function(value) {
  this.hold = value;
};

/**
 * @interface ProtoUserAvatarAdd
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserAvatarAdd.prototype.serializeBinary = function() {
  return proto.proto.UserAvatarAdd.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserAvatarAdd}
 */
proto.proto.UserAvatarAdd.deserializeBinary = function(buffer) {
  return proto.proto.UserAvatarAdd.decode(buffer);
};

/**
 * Get UserAvatarAdd request.
 * @memberof ProtoUserAvatarAdd
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.UserAvatarAdd.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set UserAvatarAdd request.
 * @memberof ProtoUserAvatarAdd
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.UserAvatarAdd.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get UserAvatarAdd attachment.
 * @memberof ProtoUserAvatarAdd
 * @return {string}
 */
proto.proto.UserAvatarAdd.prototype.getAttachment = function() {
  return this.attachment;
};

/**
 * Set UserAvatarAdd attachment.
 * @memberof ProtoUserAvatarAdd
 * @param {string} value
 */
proto.proto.UserAvatarAdd.prototype.setAttachment = function(value) {
  this.attachment = value;
};

/**
 * @interface ProtoUserAvatarAddResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserAvatarAddResponse.prototype.serializeBinary = function() {
  return proto.proto.UserAvatarAddResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserAvatarAddResponse}
 */
proto.proto.UserAvatarAddResponse.deserializeBinary = function(buffer) {
  return proto.proto.UserAvatarAddResponse.decode(buffer);
};

/**
 * Get UserAvatarAddResponse response.
 * @memberof ProtoUserAvatarAddResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.UserAvatarAddResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set UserAvatarAddResponse response.
 * @memberof ProtoUserAvatarAddResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.UserAvatarAddResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get UserAvatarAddResponse avatar.
 * @memberof ProtoUserAvatarAddResponse
 * @return {(ProtoAvatar|null|undefined)}
 */
proto.proto.UserAvatarAddResponse.prototype.getAvatar = function() {
  return this.avatar;
};

/**
 * Set UserAvatarAddResponse avatar.
 * @memberof ProtoUserAvatarAddResponse
 * @param {(ProtoAvatar|null|undefined)} value
 */
proto.proto.UserAvatarAddResponse.prototype.setAvatar = function(value) {
  this.avatar = value;
};

/**
 * @interface ProtoUserAvatarDelete
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserAvatarDelete.prototype.serializeBinary = function() {
  return proto.proto.UserAvatarDelete.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserAvatarDelete}
 */
proto.proto.UserAvatarDelete.deserializeBinary = function(buffer) {
  return proto.proto.UserAvatarDelete.decode(buffer);
};

/**
 * Get UserAvatarDelete request.
 * @memberof ProtoUserAvatarDelete
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.UserAvatarDelete.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set UserAvatarDelete request.
 * @memberof ProtoUserAvatarDelete
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.UserAvatarDelete.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get UserAvatarDelete id.
 * @memberof ProtoUserAvatarDelete
 * @return {Long}
 */
proto.proto.UserAvatarDelete.prototype.getId = function() {
  return this.id;
};

/**
 * Set UserAvatarDelete id.
 * @memberof ProtoUserAvatarDelete
 * @param {Long} value
 */
proto.proto.UserAvatarDelete.prototype.setId = function(value) {
  this.id = value;
};

/**
 * @interface ProtoUserAvatarDeleteResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserAvatarDeleteResponse.prototype.serializeBinary = function() {
  return proto.proto.UserAvatarDeleteResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserAvatarDeleteResponse}
 */
proto.proto.UserAvatarDeleteResponse.deserializeBinary = function(buffer) {
  return proto.proto.UserAvatarDeleteResponse.decode(buffer);
};

/**
 * Get UserAvatarDeleteResponse response.
 * @memberof ProtoUserAvatarDeleteResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.UserAvatarDeleteResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set UserAvatarDeleteResponse response.
 * @memberof ProtoUserAvatarDeleteResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.UserAvatarDeleteResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get UserAvatarDeleteResponse id.
 * @memberof ProtoUserAvatarDeleteResponse
 * @return {Long}
 */
proto.proto.UserAvatarDeleteResponse.prototype.getId = function() {
  return this.id;
};

/**
 * Set UserAvatarDeleteResponse id.
 * @memberof ProtoUserAvatarDeleteResponse
 * @param {Long} value
 */
proto.proto.UserAvatarDeleteResponse.prototype.setId = function(value) {
  this.id = value;
};

/**
 * @interface ProtoUserAvatarGetList
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserAvatarGetList.prototype.serializeBinary = function() {
  return proto.proto.UserAvatarGetList.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserAvatarGetList}
 */
proto.proto.UserAvatarGetList.deserializeBinary = function(buffer) {
  return proto.proto.UserAvatarGetList.decode(buffer);
};

/**
 * Get UserAvatarGetList request.
 * @memberof ProtoUserAvatarGetList
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.UserAvatarGetList.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set UserAvatarGetList request.
 * @memberof ProtoUserAvatarGetList
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.UserAvatarGetList.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get UserAvatarGetList userId.
 * @memberof ProtoUserAvatarGetList
 * @return {Long}
 */
proto.proto.UserAvatarGetList.prototype.getUserId = function() {
  return this.userId;
};

/**
 * Set UserAvatarGetList userId.
 * @memberof ProtoUserAvatarGetList
 * @param {Long} value
 */
proto.proto.UserAvatarGetList.prototype.setUserId = function(value) {
  this.userId = value;
};

/**
 * @interface ProtoUserAvatarGetListResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserAvatarGetListResponse.prototype.serializeBinary = function() {
  return proto.proto.UserAvatarGetListResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserAvatarGetListResponse}
 */
proto.proto.UserAvatarGetListResponse.deserializeBinary = function(buffer) {
  return proto.proto.UserAvatarGetListResponse.decode(buffer);
};

/**
 * Get UserAvatarGetListResponse response.
 * @memberof ProtoUserAvatarGetListResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.UserAvatarGetListResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set UserAvatarGetListResponse response.
 * @memberof ProtoUserAvatarGetListResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.UserAvatarGetListResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get UserAvatarGetListResponse avatar.
 * @memberof ProtoUserAvatarGetListResponse
 * @return {Array.<ProtoAvatar>}
 */
proto.proto.UserAvatarGetListResponse.prototype.getAvatarList = function() {
  return this.avatar;
};

/**
 * Set UserAvatarGetListResponse avatar.
 * @memberof ProtoUserAvatarGetListResponse
 * @param {Array.<ProtoAvatar>} value
 */
proto.proto.UserAvatarGetListResponse.prototype.setAvatarList = function(value) {
  this.avatar = value;
};

/**
 * @interface ProtoUserContactsBlock
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserContactsBlock.prototype.serializeBinary = function() {
  return proto.proto.UserContactsBlock.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserContactsBlock}
 */
proto.proto.UserContactsBlock.deserializeBinary = function(buffer) {
  return proto.proto.UserContactsBlock.decode(buffer);
};

/**
 * Get UserContactsBlock request.
 * @memberof ProtoUserContactsBlock
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.UserContactsBlock.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set UserContactsBlock request.
 * @memberof ProtoUserContactsBlock
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.UserContactsBlock.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get UserContactsBlock userId.
 * @memberof ProtoUserContactsBlock
 * @return {Long}
 */
proto.proto.UserContactsBlock.prototype.getUserId = function() {
  return this.userId;
};

/**
 * Set UserContactsBlock userId.
 * @memberof ProtoUserContactsBlock
 * @param {Long} value
 */
proto.proto.UserContactsBlock.prototype.setUserId = function(value) {
  this.userId = value;
};

/**
 * @interface ProtoUserContactsBlockResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserContactsBlockResponse.prototype.serializeBinary = function() {
  return proto.proto.UserContactsBlockResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserContactsBlockResponse}
 */
proto.proto.UserContactsBlockResponse.deserializeBinary = function(buffer) {
  return proto.proto.UserContactsBlockResponse.decode(buffer);
};

/**
 * Get UserContactsBlockResponse response.
 * @memberof ProtoUserContactsBlockResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.UserContactsBlockResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set UserContactsBlockResponse response.
 * @memberof ProtoUserContactsBlockResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.UserContactsBlockResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get UserContactsBlockResponse userId.
 * @memberof ProtoUserContactsBlockResponse
 * @return {Long}
 */
proto.proto.UserContactsBlockResponse.prototype.getUserId = function() {
  return this.userId;
};

/**
 * Set UserContactsBlockResponse userId.
 * @memberof ProtoUserContactsBlockResponse
 * @param {Long} value
 */
proto.proto.UserContactsBlockResponse.prototype.setUserId = function(value) {
  this.userId = value;
};

/**
 * @interface ProtoUserContactsDelete
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserContactsDelete.prototype.serializeBinary = function() {
  return proto.proto.UserContactsDelete.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserContactsDelete}
 */
proto.proto.UserContactsDelete.deserializeBinary = function(buffer) {
  return proto.proto.UserContactsDelete.decode(buffer);
};

/**
 * Get UserContactsDelete request.
 * @memberof ProtoUserContactsDelete
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.UserContactsDelete.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set UserContactsDelete request.
 * @memberof ProtoUserContactsDelete
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.UserContactsDelete.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get UserContactsDelete phone.
 * @memberof ProtoUserContactsDelete
 * @return {Long}
 */
proto.proto.UserContactsDelete.prototype.getPhone = function() {
  return this.phone;
};

/**
 * Set UserContactsDelete phone.
 * @memberof ProtoUserContactsDelete
 * @param {Long} value
 */
proto.proto.UserContactsDelete.prototype.setPhone = function(value) {
  this.phone = value;
};

/**
 * @interface ProtoUserContactsDeleteResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserContactsDeleteResponse.prototype.serializeBinary = function() {
  return proto.proto.UserContactsDeleteResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserContactsDeleteResponse}
 */
proto.proto.UserContactsDeleteResponse.deserializeBinary = function(buffer) {
  return proto.proto.UserContactsDeleteResponse.decode(buffer);
};

/**
 * Get UserContactsDeleteResponse response.
 * @memberof ProtoUserContactsDeleteResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.UserContactsDeleteResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set UserContactsDeleteResponse response.
 * @memberof ProtoUserContactsDeleteResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.UserContactsDeleteResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get UserContactsDeleteResponse phone.
 * @memberof ProtoUserContactsDeleteResponse
 * @return {Long}
 */
proto.proto.UserContactsDeleteResponse.prototype.getPhone = function() {
  return this.phone;
};

/**
 * Set UserContactsDeleteResponse phone.
 * @memberof ProtoUserContactsDeleteResponse
 * @param {Long} value
 */
proto.proto.UserContactsDeleteResponse.prototype.setPhone = function(value) {
  this.phone = value;
};

/**
 * @interface ProtoUserContactsEdit
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserContactsEdit.prototype.serializeBinary = function() {
  return proto.proto.UserContactsEdit.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserContactsEdit}
 */
proto.proto.UserContactsEdit.deserializeBinary = function(buffer) {
  return proto.proto.UserContactsEdit.decode(buffer);
};

/**
 * Get UserContactsEdit request.
 * @memberof ProtoUserContactsEdit
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.UserContactsEdit.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set UserContactsEdit request.
 * @memberof ProtoUserContactsEdit
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.UserContactsEdit.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get UserContactsEdit phone.
 * @memberof ProtoUserContactsEdit
 * @return {Long}
 */
proto.proto.UserContactsEdit.prototype.getPhone = function() {
  return this.phone;
};

/**
 * Set UserContactsEdit phone.
 * @memberof ProtoUserContactsEdit
 * @param {Long} value
 */
proto.proto.UserContactsEdit.prototype.setPhone = function(value) {
  this.phone = value;
};

/**
 * Get UserContactsEdit firstName.
 * @memberof ProtoUserContactsEdit
 * @return {string}
 */
proto.proto.UserContactsEdit.prototype.getFirstName = function() {
  return this.firstName;
};

/**
 * Set UserContactsEdit firstName.
 * @memberof ProtoUserContactsEdit
 * @param {string} value
 */
proto.proto.UserContactsEdit.prototype.setFirstName = function(value) {
  this.firstName = value;
};

/**
 * Get UserContactsEdit lastName.
 * @memberof ProtoUserContactsEdit
 * @return {string}
 */
proto.proto.UserContactsEdit.prototype.getLastName = function() {
  return this.lastName;
};

/**
 * Set UserContactsEdit lastName.
 * @memberof ProtoUserContactsEdit
 * @param {string} value
 */
proto.proto.UserContactsEdit.prototype.setLastName = function(value) {
  this.lastName = value;
};

/**
 * @interface ProtoUserContactsEditResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserContactsEditResponse.prototype.serializeBinary = function() {
  return proto.proto.UserContactsEditResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserContactsEditResponse}
 */
proto.proto.UserContactsEditResponse.deserializeBinary = function(buffer) {
  return proto.proto.UserContactsEditResponse.decode(buffer);
};

/**
 * Get UserContactsEditResponse response.
 * @memberof ProtoUserContactsEditResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.UserContactsEditResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set UserContactsEditResponse response.
 * @memberof ProtoUserContactsEditResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.UserContactsEditResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get UserContactsEditResponse phone.
 * @memberof ProtoUserContactsEditResponse
 * @return {Long}
 */
proto.proto.UserContactsEditResponse.prototype.getPhone = function() {
  return this.phone;
};

/**
 * Set UserContactsEditResponse phone.
 * @memberof ProtoUserContactsEditResponse
 * @param {Long} value
 */
proto.proto.UserContactsEditResponse.prototype.setPhone = function(value) {
  this.phone = value;
};

/**
 * Get UserContactsEditResponse firstName.
 * @memberof ProtoUserContactsEditResponse
 * @return {string}
 */
proto.proto.UserContactsEditResponse.prototype.getFirstName = function() {
  return this.firstName;
};

/**
 * Set UserContactsEditResponse firstName.
 * @memberof ProtoUserContactsEditResponse
 * @param {string} value
 */
proto.proto.UserContactsEditResponse.prototype.setFirstName = function(value) {
  this.firstName = value;
};

/**
 * Get UserContactsEditResponse lastName.
 * @memberof ProtoUserContactsEditResponse
 * @return {string}
 */
proto.proto.UserContactsEditResponse.prototype.getLastName = function() {
  return this.lastName;
};

/**
 * Set UserContactsEditResponse lastName.
 * @memberof ProtoUserContactsEditResponse
 * @param {string} value
 */
proto.proto.UserContactsEditResponse.prototype.setLastName = function(value) {
  this.lastName = value;
};

/**
 * Get UserContactsEditResponse initials.
 * @memberof ProtoUserContactsEditResponse
 * @return {string}
 */
proto.proto.UserContactsEditResponse.prototype.getInitials = function() {
  return this.initials;
};

/**
 * Set UserContactsEditResponse initials.
 * @memberof ProtoUserContactsEditResponse
 * @param {string} value
 */
proto.proto.UserContactsEditResponse.prototype.setInitials = function(value) {
  this.initials = value;
};

/**
 * @interface ProtoUserContactsGetBlockedList
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserContactsGetBlockedList.prototype.serializeBinary = function() {
  return proto.proto.UserContactsGetBlockedList.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserContactsGetBlockedList}
 */
proto.proto.UserContactsGetBlockedList.deserializeBinary = function(buffer) {
  return proto.proto.UserContactsGetBlockedList.decode(buffer);
};

/**
 * Get UserContactsGetBlockedList request.
 * @memberof ProtoUserContactsGetBlockedList
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.UserContactsGetBlockedList.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set UserContactsGetBlockedList request.
 * @memberof ProtoUserContactsGetBlockedList
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.UserContactsGetBlockedList.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * @interface ProtoUserContactsGetBlockedListResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserContactsGetBlockedListResponse.prototype.serializeBinary = function() {
  return proto.proto.UserContactsGetBlockedListResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserContactsGetBlockedListResponse}
 */
proto.proto.UserContactsGetBlockedListResponse.deserializeBinary = function(buffer) {
  return proto.proto.UserContactsGetBlockedListResponse.decode(buffer);
};

/**
 * Get UserContactsGetBlockedListResponse response.
 * @memberof ProtoUserContactsGetBlockedListResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.UserContactsGetBlockedListResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set UserContactsGetBlockedListResponse response.
 * @memberof ProtoUserContactsGetBlockedListResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.UserContactsGetBlockedListResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get UserContactsGetBlockedListResponse user.
 * @memberof ProtoUserContactsGetBlockedListResponse
 * @return {Array.<ProtoUserContactsGetBlockedListResponse_User>}
 */
proto.proto.UserContactsGetBlockedListResponse.prototype.getUserList = function() {
  return this.user;
};

/**
 * Set UserContactsGetBlockedListResponse user.
 * @memberof ProtoUserContactsGetBlockedListResponse
 * @param {Array.<ProtoUserContactsGetBlockedListResponse_User>} value
 */
proto.proto.UserContactsGetBlockedListResponse.prototype.setUserList = function(value) {
  this.user = value;
};

/**
 * @interface ProtoUserContactsGetBlockedListResponse_User
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserContactsGetBlockedListResponse.User.prototype.serializeBinary = function() {
  return proto.proto.UserContactsGetBlockedListResponse.User.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserContactsGetBlockedListResponse_User}
 */
proto.proto.UserContactsGetBlockedListResponse.User.deserializeBinary = function(buffer) {
  return proto.proto.UserContactsGetBlockedListResponse.User.decode(buffer);
};

/**
 * Get User userId.
 * @memberof ProtoUserContactsGetBlockedListResponse_User
 * @return {Long}
 */
proto.proto.UserContactsGetBlockedListResponse.User.prototype.getUserId = function() {
  return this.userId;
};

/**
 * Set User userId.
 * @memberof ProtoUserContactsGetBlockedListResponse_User
 * @param {Long} value
 */
proto.proto.UserContactsGetBlockedListResponse.User.prototype.setUserId = function(value) {
  this.userId = value;
};

/**
 * Get User cacheId.
 * @memberof ProtoUserContactsGetBlockedListResponse_User
 * @return {string}
 */
proto.proto.UserContactsGetBlockedListResponse.User.prototype.getCacheId = function() {
  return this.cacheId;
};

/**
 * Set User cacheId.
 * @memberof ProtoUserContactsGetBlockedListResponse_User
 * @param {string} value
 */
proto.proto.UserContactsGetBlockedListResponse.User.prototype.setCacheId = function(value) {
  this.cacheId = value;
};

/**
 * @interface ProtoUserContactsGetList
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserContactsGetList.prototype.serializeBinary = function() {
  return proto.proto.UserContactsGetList.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserContactsGetList}
 */
proto.proto.UserContactsGetList.deserializeBinary = function(buffer) {
  return proto.proto.UserContactsGetList.decode(buffer);
};

/**
 * Get UserContactsGetList request.
 * @memberof ProtoUserContactsGetList
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.UserContactsGetList.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set UserContactsGetList request.
 * @memberof ProtoUserContactsGetList
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.UserContactsGetList.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * @interface ProtoUserContactsGetListResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserContactsGetListResponse.prototype.serializeBinary = function() {
  return proto.proto.UserContactsGetListResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserContactsGetListResponse}
 */
proto.proto.UserContactsGetListResponse.deserializeBinary = function(buffer) {
  return proto.proto.UserContactsGetListResponse.decode(buffer);
};

/**
 * Get UserContactsGetListResponse response.
 * @memberof ProtoUserContactsGetListResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.UserContactsGetListResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set UserContactsGetListResponse response.
 * @memberof ProtoUserContactsGetListResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.UserContactsGetListResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get UserContactsGetListResponse registeredUser.
 * @memberof ProtoUserContactsGetListResponse
 * @return {Array.<ProtoRegisteredUser>}
 */
proto.proto.UserContactsGetListResponse.prototype.getRegisteredUserList = function() {
  return this.registeredUser;
};

/**
 * Set UserContactsGetListResponse registeredUser.
 * @memberof ProtoUserContactsGetListResponse
 * @param {Array.<ProtoRegisteredUser>} value
 */
proto.proto.UserContactsGetListResponse.prototype.setRegisteredUserList = function(value) {
  this.registeredUser = value;
};

/**
 * @interface ProtoUserContactsImport
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserContactsImport.prototype.serializeBinary = function() {
  return proto.proto.UserContactsImport.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserContactsImport}
 */
proto.proto.UserContactsImport.deserializeBinary = function(buffer) {
  return proto.proto.UserContactsImport.decode(buffer);
};

/**
 * Get UserContactsImport request.
 * @memberof ProtoUserContactsImport
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.UserContactsImport.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set UserContactsImport request.
 * @memberof ProtoUserContactsImport
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.UserContactsImport.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get UserContactsImport contacts.
 * @memberof ProtoUserContactsImport
 * @return {Array.<ProtoUserContactsImport_Contact>}
 */
proto.proto.UserContactsImport.prototype.getContactsList = function() {
  return this.contacts;
};

/**
 * Set UserContactsImport contacts.
 * @memberof ProtoUserContactsImport
 * @param {Array.<ProtoUserContactsImport_Contact>} value
 */
proto.proto.UserContactsImport.prototype.setContactsList = function(value) {
  this.contacts = value;
};

/**
 * Get UserContactsImport force.
 * @memberof ProtoUserContactsImport
 * @return {boolean}
 */
proto.proto.UserContactsImport.prototype.getForce = function() {
  return this.force;
};

/**
 * Set UserContactsImport force.
 * @memberof ProtoUserContactsImport
 * @param {boolean} value
 */
proto.proto.UserContactsImport.prototype.setForce = function(value) {
  this.force = value;
};

/**
 * @interface ProtoUserContactsImport_Contact
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserContactsImport.Contact.prototype.serializeBinary = function() {
  return proto.proto.UserContactsImport.Contact.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserContactsImport_Contact}
 */
proto.proto.UserContactsImport.Contact.deserializeBinary = function(buffer) {
  return proto.proto.UserContactsImport.Contact.decode(buffer);
};

/**
 * Get Contact phone.
 * @memberof ProtoUserContactsImport_Contact
 * @return {string}
 */
proto.proto.UserContactsImport.Contact.prototype.getPhone = function() {
  return this.phone;
};

/**
 * Set Contact phone.
 * @memberof ProtoUserContactsImport_Contact
 * @param {string} value
 */
proto.proto.UserContactsImport.Contact.prototype.setPhone = function(value) {
  this.phone = value;
};

/**
 * Get Contact firstName.
 * @memberof ProtoUserContactsImport_Contact
 * @return {string}
 */
proto.proto.UserContactsImport.Contact.prototype.getFirstName = function() {
  return this.firstName;
};

/**
 * Set Contact firstName.
 * @memberof ProtoUserContactsImport_Contact
 * @param {string} value
 */
proto.proto.UserContactsImport.Contact.prototype.setFirstName = function(value) {
  this.firstName = value;
};

/**
 * Get Contact lastName.
 * @memberof ProtoUserContactsImport_Contact
 * @return {string}
 */
proto.proto.UserContactsImport.Contact.prototype.getLastName = function() {
  return this.lastName;
};

/**
 * Set Contact lastName.
 * @memberof ProtoUserContactsImport_Contact
 * @param {string} value
 */
proto.proto.UserContactsImport.Contact.prototype.setLastName = function(value) {
  this.lastName = value;
};

/**
 * Get Contact clientId.
 * @memberof ProtoUserContactsImport_Contact
 * @return {string}
 */
proto.proto.UserContactsImport.Contact.prototype.getClientId = function() {
  return this.clientId;
};

/**
 * Set Contact clientId.
 * @memberof ProtoUserContactsImport_Contact
 * @param {string} value
 */
proto.proto.UserContactsImport.Contact.prototype.setClientId = function(value) {
  this.clientId = value;
};

/**
 * @interface ProtoUserContactsImportResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserContactsImportResponse.prototype.serializeBinary = function() {
  return proto.proto.UserContactsImportResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserContactsImportResponse}
 */
proto.proto.UserContactsImportResponse.deserializeBinary = function(buffer) {
  return proto.proto.UserContactsImportResponse.decode(buffer);
};

/**
 * Get UserContactsImportResponse response.
 * @memberof ProtoUserContactsImportResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.UserContactsImportResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set UserContactsImportResponse response.
 * @memberof ProtoUserContactsImportResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.UserContactsImportResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get UserContactsImportResponse registeredContacts.
 * @memberof ProtoUserContactsImportResponse
 * @return {Array.<ProtoUserContactsImportResponse_Contact>}
 */
proto.proto.UserContactsImportResponse.prototype.getRegisteredContactsList = function() {
  return this.registeredContacts;
};

/**
 * Set UserContactsImportResponse registeredContacts.
 * @memberof ProtoUserContactsImportResponse
 * @param {Array.<ProtoUserContactsImportResponse_Contact>} value
 */
proto.proto.UserContactsImportResponse.prototype.setRegisteredContactsList = function(value) {
  this.registeredContacts = value;
};

/**
 * @interface ProtoUserContactsImportResponse_Contact
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserContactsImportResponse.Contact.prototype.serializeBinary = function() {
  return proto.proto.UserContactsImportResponse.Contact.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserContactsImportResponse_Contact}
 */
proto.proto.UserContactsImportResponse.Contact.deserializeBinary = function(buffer) {
  return proto.proto.UserContactsImportResponse.Contact.decode(buffer);
};

/**
 * Get Contact clientId.
 * @memberof ProtoUserContactsImportResponse_Contact
 * @return {string}
 */
proto.proto.UserContactsImportResponse.Contact.prototype.getClientId = function() {
  return this.clientId;
};

/**
 * Set Contact clientId.
 * @memberof ProtoUserContactsImportResponse_Contact
 * @param {string} value
 */
proto.proto.UserContactsImportResponse.Contact.prototype.setClientId = function(value) {
  this.clientId = value;
};

/**
 * Get Contact userId.
 * @memberof ProtoUserContactsImportResponse_Contact
 * @return {Long}
 */
proto.proto.UserContactsImportResponse.Contact.prototype.getUserId = function() {
  return this.userId;
};

/**
 * Set Contact userId.
 * @memberof ProtoUserContactsImportResponse_Contact
 * @param {Long} value
 */
proto.proto.UserContactsImportResponse.Contact.prototype.setUserId = function(value) {
  this.userId = value;
};

/**
 * @interface ProtoUserContactsUnblock
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserContactsUnblock.prototype.serializeBinary = function() {
  return proto.proto.UserContactsUnblock.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserContactsUnblock}
 */
proto.proto.UserContactsUnblock.deserializeBinary = function(buffer) {
  return proto.proto.UserContactsUnblock.decode(buffer);
};

/**
 * Get UserContactsUnblock request.
 * @memberof ProtoUserContactsUnblock
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.UserContactsUnblock.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set UserContactsUnblock request.
 * @memberof ProtoUserContactsUnblock
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.UserContactsUnblock.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get UserContactsUnblock userId.
 * @memberof ProtoUserContactsUnblock
 * @return {Long}
 */
proto.proto.UserContactsUnblock.prototype.getUserId = function() {
  return this.userId;
};

/**
 * Set UserContactsUnblock userId.
 * @memberof ProtoUserContactsUnblock
 * @param {Long} value
 */
proto.proto.UserContactsUnblock.prototype.setUserId = function(value) {
  this.userId = value;
};

/**
 * @interface ProtoUserContactsUnblockResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserContactsUnblockResponse.prototype.serializeBinary = function() {
  return proto.proto.UserContactsUnblockResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserContactsUnblockResponse}
 */
proto.proto.UserContactsUnblockResponse.deserializeBinary = function(buffer) {
  return proto.proto.UserContactsUnblockResponse.decode(buffer);
};

/**
 * Get UserContactsUnblockResponse response.
 * @memberof ProtoUserContactsUnblockResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.UserContactsUnblockResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set UserContactsUnblockResponse response.
 * @memberof ProtoUserContactsUnblockResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.UserContactsUnblockResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get UserContactsUnblockResponse userId.
 * @memberof ProtoUserContactsUnblockResponse
 * @return {Long}
 */
proto.proto.UserContactsUnblockResponse.prototype.getUserId = function() {
  return this.userId;
};

/**
 * Set UserContactsUnblockResponse userId.
 * @memberof ProtoUserContactsUnblockResponse
 * @param {Long} value
 */
proto.proto.UserContactsUnblockResponse.prototype.setUserId = function(value) {
  this.userId = value;
};

/**
 * @interface ProtoUserDelete
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserDelete.prototype.serializeBinary = function() {
  return proto.proto.UserDelete.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserDelete}
 */
proto.proto.UserDelete.deserializeBinary = function(buffer) {
  return proto.proto.UserDelete.decode(buffer);
};

/**
 * Get UserDelete request.
 * @memberof ProtoUserDelete
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.UserDelete.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set UserDelete request.
 * @memberof ProtoUserDelete
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.UserDelete.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get UserDelete token.
 * @memberof ProtoUserDelete
 * @return {string}
 */
proto.proto.UserDelete.prototype.getToken = function() {
  return this.token;
};

/**
 * Set UserDelete token.
 * @memberof ProtoUserDelete
 * @param {string} value
 */
proto.proto.UserDelete.prototype.setToken = function(value) {
  this.token = value;
};

/**
 * Get UserDelete reason.
 * @memberof ProtoUserDelete
 * @return {ProtoUserDelete_Reason}
 */
proto.proto.UserDelete.prototype.getReason = function() {
  return this.reason;
};

/**
 * Set UserDelete reason.
 * @memberof ProtoUserDelete
 * @param {ProtoUserDelete_Reason} value
 */
proto.proto.UserDelete.prototype.setReason = function(value) {
  this.reason = value;
};

/**
 * @typedef {number} ProtoUserDelete_Reason
 */

/**
 * Reason enum.
 * @enum {ProtoUserDelete_Reason}
 * @memberof ProtoUserDelete
 */
proto.proto.UserDelete.Reason = proto.proto.UserDelete.prototype.Reason = {
  OTHER : 0,
};

/**
 * @interface ProtoUserDeleteResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserDeleteResponse.prototype.serializeBinary = function() {
  return proto.proto.UserDeleteResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserDeleteResponse}
 */
proto.proto.UserDeleteResponse.deserializeBinary = function(buffer) {
  return proto.proto.UserDeleteResponse.decode(buffer);
};

/**
 * Get UserDeleteResponse response.
 * @memberof ProtoUserDeleteResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.UserDeleteResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set UserDeleteResponse response.
 * @memberof ProtoUserDeleteResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.UserDeleteResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * @interface ProtoUserGetDeleteToken
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserGetDeleteToken.prototype.serializeBinary = function() {
  return proto.proto.UserGetDeleteToken.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserGetDeleteToken}
 */
proto.proto.UserGetDeleteToken.deserializeBinary = function(buffer) {
  return proto.proto.UserGetDeleteToken.decode(buffer);
};

/**
 * Get UserGetDeleteToken request.
 * @memberof ProtoUserGetDeleteToken
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.UserGetDeleteToken.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set UserGetDeleteToken request.
 * @memberof ProtoUserGetDeleteToken
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.UserGetDeleteToken.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * @interface ProtoUserGetDeleteTokenResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserGetDeleteTokenResponse.prototype.serializeBinary = function() {
  return proto.proto.UserGetDeleteTokenResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserGetDeleteTokenResponse}
 */
proto.proto.UserGetDeleteTokenResponse.deserializeBinary = function(buffer) {
  return proto.proto.UserGetDeleteTokenResponse.decode(buffer);
};

/**
 * Get UserGetDeleteTokenResponse response.
 * @memberof ProtoUserGetDeleteTokenResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.UserGetDeleteTokenResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set UserGetDeleteTokenResponse response.
 * @memberof ProtoUserGetDeleteTokenResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.UserGetDeleteTokenResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get UserGetDeleteTokenResponse resendDelay.
 * @memberof ProtoUserGetDeleteTokenResponse
 * @return {number}
 */
proto.proto.UserGetDeleteTokenResponse.prototype.getResendDelay = function() {
  return this.resendDelay;
};

/**
 * Set UserGetDeleteTokenResponse resendDelay.
 * @memberof ProtoUserGetDeleteTokenResponse
 * @param {number} value
 */
proto.proto.UserGetDeleteTokenResponse.prototype.setResendDelay = function(value) {
  this.resendDelay = value;
};

/**
 * Get UserGetDeleteTokenResponse smsNumber.
 * @memberof ProtoUserGetDeleteTokenResponse
 * @return {Array.<Long>}
 */
proto.proto.UserGetDeleteTokenResponse.prototype.getSmsNumberList = function() {
  return this.smsNumber;
};

/**
 * Set UserGetDeleteTokenResponse smsNumber.
 * @memberof ProtoUserGetDeleteTokenResponse
 * @param {Array.<Long>} value
 */
proto.proto.UserGetDeleteTokenResponse.prototype.setSmsNumberList = function(value) {
  this.smsNumber = value;
};

/**
 * Get UserGetDeleteTokenResponse tokenRegex.
 * @memberof ProtoUserGetDeleteTokenResponse
 * @return {string}
 */
proto.proto.UserGetDeleteTokenResponse.prototype.getTokenRegex = function() {
  return this.tokenRegex;
};

/**
 * Set UserGetDeleteTokenResponse tokenRegex.
 * @memberof ProtoUserGetDeleteTokenResponse
 * @param {string} value
 */
proto.proto.UserGetDeleteTokenResponse.prototype.setTokenRegex = function(value) {
  this.tokenRegex = value;
};

/**
 * Get UserGetDeleteTokenResponse tokenLength.
 * @memberof ProtoUserGetDeleteTokenResponse
 * @return {string}
 */
proto.proto.UserGetDeleteTokenResponse.prototype.getTokenLength = function() {
  return this.tokenLength;
};

/**
 * Set UserGetDeleteTokenResponse tokenLength.
 * @memberof ProtoUserGetDeleteTokenResponse
 * @param {string} value
 */
proto.proto.UserGetDeleteTokenResponse.prototype.setTokenLength = function(value) {
  this.tokenLength = value;
};

/**
 * @interface ProtoUserInfo
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserInfo.prototype.serializeBinary = function() {
  return proto.proto.UserInfo.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserInfo}
 */
proto.proto.UserInfo.deserializeBinary = function(buffer) {
  return proto.proto.UserInfo.decode(buffer);
};

/**
 * Get UserInfo request.
 * @memberof ProtoUserInfo
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.UserInfo.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set UserInfo request.
 * @memberof ProtoUserInfo
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.UserInfo.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get UserInfo userId.
 * @memberof ProtoUserInfo
 * @return {Long}
 */
proto.proto.UserInfo.prototype.getUserId = function() {
  return this.userId;
};

/**
 * Set UserInfo userId.
 * @memberof ProtoUserInfo
 * @param {Long} value
 */
proto.proto.UserInfo.prototype.setUserId = function(value) {
  this.userId = value;
};

/**
 * @interface ProtoUserInfoResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserInfoResponse.prototype.serializeBinary = function() {
  return proto.proto.UserInfoResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserInfoResponse}
 */
proto.proto.UserInfoResponse.deserializeBinary = function(buffer) {
  return proto.proto.UserInfoResponse.decode(buffer);
};

/**
 * Get UserInfoResponse response.
 * @memberof ProtoUserInfoResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.UserInfoResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set UserInfoResponse response.
 * @memberof ProtoUserInfoResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.UserInfoResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get UserInfoResponse user.
 * @memberof ProtoUserInfoResponse
 * @return {(ProtoRegisteredUser|null|undefined)}
 */
proto.proto.UserInfoResponse.prototype.getUser = function() {
  return this.user;
};

/**
 * Set UserInfoResponse user.
 * @memberof ProtoUserInfoResponse
 * @param {(ProtoRegisteredUser|null|undefined)} value
 */
proto.proto.UserInfoResponse.prototype.setUser = function(value) {
  this.user = value;
};

/**
 * @interface ProtoUserLogin
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserLogin.prototype.serializeBinary = function() {
  return proto.proto.UserLogin.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserLogin}
 */
proto.proto.UserLogin.deserializeBinary = function(buffer) {
  return proto.proto.UserLogin.decode(buffer);
};

/**
 * Get UserLogin request.
 * @memberof ProtoUserLogin
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.UserLogin.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set UserLogin request.
 * @memberof ProtoUserLogin
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.UserLogin.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get UserLogin token.
 * @memberof ProtoUserLogin
 * @return {string}
 */
proto.proto.UserLogin.prototype.getToken = function() {
  return this.token;
};

/**
 * Set UserLogin token.
 * @memberof ProtoUserLogin
 * @param {string} value
 */
proto.proto.UserLogin.prototype.setToken = function(value) {
  this.token = value;
};

/**
 * Get UserLogin appName.
 * @memberof ProtoUserLogin
 * @return {string}
 */
proto.proto.UserLogin.prototype.getAppName = function() {
  return this.appName;
};

/**
 * Set UserLogin appName.
 * @memberof ProtoUserLogin
 * @param {string} value
 */
proto.proto.UserLogin.prototype.setAppName = function(value) {
  this.appName = value;
};

/**
 * Get UserLogin appId.
 * @memberof ProtoUserLogin
 * @return {number}
 */
proto.proto.UserLogin.prototype.getAppId = function() {
  return this.appId;
};

/**
 * Set UserLogin appId.
 * @memberof ProtoUserLogin
 * @param {number} value
 */
proto.proto.UserLogin.prototype.setAppId = function(value) {
  this.appId = value;
};

/**
 * Get UserLogin appBuildVersion.
 * @memberof ProtoUserLogin
 * @return {number}
 */
proto.proto.UserLogin.prototype.getAppBuildVersion = function() {
  return this.appBuildVersion;
};

/**
 * Set UserLogin appBuildVersion.
 * @memberof ProtoUserLogin
 * @param {number} value
 */
proto.proto.UserLogin.prototype.setAppBuildVersion = function(value) {
  this.appBuildVersion = value;
};

/**
 * Get UserLogin appVersion.
 * @memberof ProtoUserLogin
 * @return {string}
 */
proto.proto.UserLogin.prototype.getAppVersion = function() {
  return this.appVersion;
};

/**
 * Set UserLogin appVersion.
 * @memberof ProtoUserLogin
 * @param {string} value
 */
proto.proto.UserLogin.prototype.setAppVersion = function(value) {
  this.appVersion = value;
};

/**
 * Get UserLogin platform.
 * @memberof ProtoUserLogin
 * @return {ProtoPlatform}
 */
proto.proto.UserLogin.prototype.getPlatform = function() {
  return this.platform;
};

/**
 * Set UserLogin platform.
 * @memberof ProtoUserLogin
 * @param {ProtoPlatform} value
 */
proto.proto.UserLogin.prototype.setPlatform = function(value) {
  this.platform = value;
};

/**
 * Get UserLogin platformVersion.
 * @memberof ProtoUserLogin
 * @return {string}
 */
proto.proto.UserLogin.prototype.getPlatformVersion = function() {
  return this.platformVersion;
};

/**
 * Set UserLogin platformVersion.
 * @memberof ProtoUserLogin
 * @param {string} value
 */
proto.proto.UserLogin.prototype.setPlatformVersion = function(value) {
  this.platformVersion = value;
};

/**
 * Get UserLogin device.
 * @memberof ProtoUserLogin
 * @return {ProtoDevice}
 */
proto.proto.UserLogin.prototype.getDevice = function() {
  return this.device;
};

/**
 * Set UserLogin device.
 * @memberof ProtoUserLogin
 * @param {ProtoDevice} value
 */
proto.proto.UserLogin.prototype.setDevice = function(value) {
  this.device = value;
};

/**
 * Get UserLogin deviceName.
 * @memberof ProtoUserLogin
 * @return {string}
 */
proto.proto.UserLogin.prototype.getDeviceName = function() {
  return this.deviceName;
};

/**
 * Set UserLogin deviceName.
 * @memberof ProtoUserLogin
 * @param {string} value
 */
proto.proto.UserLogin.prototype.setDeviceName = function(value) {
  this.deviceName = value;
};

/**
 * Get UserLogin language.
 * @memberof ProtoUserLogin
 * @return {ProtoLanguage}
 */
proto.proto.UserLogin.prototype.getLanguage = function() {
  return this.language;
};

/**
 * Set UserLogin language.
 * @memberof ProtoUserLogin
 * @param {ProtoLanguage} value
 */
proto.proto.UserLogin.prototype.setLanguage = function(value) {
  this.language = value;
};

/**
 * @interface ProtoUserLoginResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserLoginResponse.prototype.serializeBinary = function() {
  return proto.proto.UserLoginResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserLoginResponse}
 */
proto.proto.UserLoginResponse.deserializeBinary = function(buffer) {
  return proto.proto.UserLoginResponse.decode(buffer);
};

/**
 * Get UserLoginResponse response.
 * @memberof ProtoUserLoginResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.UserLoginResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set UserLoginResponse response.
 * @memberof ProtoUserLoginResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.UserLoginResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get UserLoginResponse deprecatedClient.
 * @memberof ProtoUserLoginResponse
 * @return {boolean}
 */
proto.proto.UserLoginResponse.prototype.getDeprecatedClient = function() {
  return this.deprecatedClient;
};

/**
 * Set UserLoginResponse deprecatedClient.
 * @memberof ProtoUserLoginResponse
 * @param {boolean} value
 */
proto.proto.UserLoginResponse.prototype.setDeprecatedClient = function(value) {
  this.deprecatedClient = value;
};

/**
 * Get UserLoginResponse secondaryNodeName.
 * @memberof ProtoUserLoginResponse
 * @return {string}
 */
proto.proto.UserLoginResponse.prototype.getSecondaryNodeName = function() {
  return this.secondaryNodeName;
};

/**
 * Set UserLoginResponse secondaryNodeName.
 * @memberof ProtoUserLoginResponse
 * @param {string} value
 */
proto.proto.UserLoginResponse.prototype.setSecondaryNodeName = function(value) {
  this.secondaryNodeName = value;
};

/**
 * Get UserLoginResponse updateAvailable.
 * @memberof ProtoUserLoginResponse
 * @return {boolean}
 */
proto.proto.UserLoginResponse.prototype.getUpdateAvailable = function() {
  return this.updateAvailable;
};

/**
 * Set UserLoginResponse updateAvailable.
 * @memberof ProtoUserLoginResponse
 * @param {boolean} value
 */
proto.proto.UserLoginResponse.prototype.setUpdateAvailable = function(value) {
  this.updateAvailable = value;
};

/**
 * Get UserLoginResponse chatDeleteMessageForBothPeriod.
 * @memberof ProtoUserLoginResponse
 * @return {number}
 */
proto.proto.UserLoginResponse.prototype.getChatDeleteMessageForBothPeriod = function() {
  return this.chatDeleteMessageForBothPeriod;
};

/**
 * Set UserLoginResponse chatDeleteMessageForBothPeriod.
 * @memberof ProtoUserLoginResponse
 * @param {number} value
 */
proto.proto.UserLoginResponse.prototype.setChatDeleteMessageForBothPeriod = function(value) {
  this.chatDeleteMessageForBothPeriod = value;
};

/**
 * @interface ProtoUserPrivacyGetRule
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserPrivacyGetRule.prototype.serializeBinary = function() {
  return proto.proto.UserPrivacyGetRule.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserPrivacyGetRule}
 */
proto.proto.UserPrivacyGetRule.deserializeBinary = function(buffer) {
  return proto.proto.UserPrivacyGetRule.decode(buffer);
};

/**
 * Get UserPrivacyGetRule request.
 * @memberof ProtoUserPrivacyGetRule
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.UserPrivacyGetRule.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set UserPrivacyGetRule request.
 * @memberof ProtoUserPrivacyGetRule
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.UserPrivacyGetRule.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get UserPrivacyGetRule type.
 * @memberof ProtoUserPrivacyGetRule
 * @return {ProtoPrivacyType}
 */
proto.proto.UserPrivacyGetRule.prototype.getType = function() {
  return this.type;
};

/**
 * Set UserPrivacyGetRule type.
 * @memberof ProtoUserPrivacyGetRule
 * @param {ProtoPrivacyType} value
 */
proto.proto.UserPrivacyGetRule.prototype.setType = function(value) {
  this.type = value;
};

/**
 * @interface ProtoUserPrivacyGetRuleResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserPrivacyGetRuleResponse.prototype.serializeBinary = function() {
  return proto.proto.UserPrivacyGetRuleResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserPrivacyGetRuleResponse}
 */
proto.proto.UserPrivacyGetRuleResponse.deserializeBinary = function(buffer) {
  return proto.proto.UserPrivacyGetRuleResponse.decode(buffer);
};

/**
 * Get UserPrivacyGetRuleResponse response.
 * @memberof ProtoUserPrivacyGetRuleResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.UserPrivacyGetRuleResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set UserPrivacyGetRuleResponse response.
 * @memberof ProtoUserPrivacyGetRuleResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.UserPrivacyGetRuleResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get UserPrivacyGetRuleResponse level.
 * @memberof ProtoUserPrivacyGetRuleResponse
 * @return {ProtoPrivacyLevel}
 */
proto.proto.UserPrivacyGetRuleResponse.prototype.getLevel = function() {
  return this.level;
};

/**
 * Set UserPrivacyGetRuleResponse level.
 * @memberof ProtoUserPrivacyGetRuleResponse
 * @param {ProtoPrivacyLevel} value
 */
proto.proto.UserPrivacyGetRuleResponse.prototype.setLevel = function(value) {
  this.level = value;
};

/**
 * @interface ProtoUserPrivacySetRule
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserPrivacySetRule.prototype.serializeBinary = function() {
  return proto.proto.UserPrivacySetRule.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserPrivacySetRule}
 */
proto.proto.UserPrivacySetRule.deserializeBinary = function(buffer) {
  return proto.proto.UserPrivacySetRule.decode(buffer);
};

/**
 * Get UserPrivacySetRule request.
 * @memberof ProtoUserPrivacySetRule
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.UserPrivacySetRule.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set UserPrivacySetRule request.
 * @memberof ProtoUserPrivacySetRule
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.UserPrivacySetRule.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get UserPrivacySetRule type.
 * @memberof ProtoUserPrivacySetRule
 * @return {ProtoPrivacyType}
 */
proto.proto.UserPrivacySetRule.prototype.getType = function() {
  return this.type;
};

/**
 * Set UserPrivacySetRule type.
 * @memberof ProtoUserPrivacySetRule
 * @param {ProtoPrivacyType} value
 */
proto.proto.UserPrivacySetRule.prototype.setType = function(value) {
  this.type = value;
};

/**
 * Get UserPrivacySetRule level.
 * @memberof ProtoUserPrivacySetRule
 * @return {ProtoPrivacyLevel}
 */
proto.proto.UserPrivacySetRule.prototype.getLevel = function() {
  return this.level;
};

/**
 * Set UserPrivacySetRule level.
 * @memberof ProtoUserPrivacySetRule
 * @param {ProtoPrivacyLevel} value
 */
proto.proto.UserPrivacySetRule.prototype.setLevel = function(value) {
  this.level = value;
};

/**
 * @interface ProtoUserPrivacySetRuleResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserPrivacySetRuleResponse.prototype.serializeBinary = function() {
  return proto.proto.UserPrivacySetRuleResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserPrivacySetRuleResponse}
 */
proto.proto.UserPrivacySetRuleResponse.deserializeBinary = function(buffer) {
  return proto.proto.UserPrivacySetRuleResponse.decode(buffer);
};

/**
 * Get UserPrivacySetRuleResponse response.
 * @memberof ProtoUserPrivacySetRuleResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.UserPrivacySetRuleResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set UserPrivacySetRuleResponse response.
 * @memberof ProtoUserPrivacySetRuleResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.UserPrivacySetRuleResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get UserPrivacySetRuleResponse type.
 * @memberof ProtoUserPrivacySetRuleResponse
 * @return {ProtoPrivacyType}
 */
proto.proto.UserPrivacySetRuleResponse.prototype.getType = function() {
  return this.type;
};

/**
 * Set UserPrivacySetRuleResponse type.
 * @memberof ProtoUserPrivacySetRuleResponse
 * @param {ProtoPrivacyType} value
 */
proto.proto.UserPrivacySetRuleResponse.prototype.setType = function(value) {
  this.type = value;
};

/**
 * Get UserPrivacySetRuleResponse level.
 * @memberof ProtoUserPrivacySetRuleResponse
 * @return {ProtoPrivacyLevel}
 */
proto.proto.UserPrivacySetRuleResponse.prototype.getLevel = function() {
  return this.level;
};

/**
 * Set UserPrivacySetRuleResponse level.
 * @memberof ProtoUserPrivacySetRuleResponse
 * @param {ProtoPrivacyLevel} value
 */
proto.proto.UserPrivacySetRuleResponse.prototype.setLevel = function(value) {
  this.level = value;
};

/**
 * @interface ProtoUserProfileCheckUsername
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserProfileCheckUsername.prototype.serializeBinary = function() {
  return proto.proto.UserProfileCheckUsername.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserProfileCheckUsername}
 */
proto.proto.UserProfileCheckUsername.deserializeBinary = function(buffer) {
  return proto.proto.UserProfileCheckUsername.decode(buffer);
};

/**
 * Get UserProfileCheckUsername request.
 * @memberof ProtoUserProfileCheckUsername
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.UserProfileCheckUsername.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set UserProfileCheckUsername request.
 * @memberof ProtoUserProfileCheckUsername
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.UserProfileCheckUsername.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get UserProfileCheckUsername username.
 * @memberof ProtoUserProfileCheckUsername
 * @return {string}
 */
proto.proto.UserProfileCheckUsername.prototype.getUsername = function() {
  return this.username;
};

/**
 * Set UserProfileCheckUsername username.
 * @memberof ProtoUserProfileCheckUsername
 * @param {string} value
 */
proto.proto.UserProfileCheckUsername.prototype.setUsername = function(value) {
  this.username = value;
};

/**
 * @interface ProtoUserProfileCheckUsernameResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserProfileCheckUsernameResponse.prototype.serializeBinary = function() {
  return proto.proto.UserProfileCheckUsernameResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserProfileCheckUsernameResponse}
 */
proto.proto.UserProfileCheckUsernameResponse.deserializeBinary = function(buffer) {
  return proto.proto.UserProfileCheckUsernameResponse.decode(buffer);
};

/**
 * Get UserProfileCheckUsernameResponse response.
 * @memberof ProtoUserProfileCheckUsernameResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.UserProfileCheckUsernameResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set UserProfileCheckUsernameResponse response.
 * @memberof ProtoUserProfileCheckUsernameResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.UserProfileCheckUsernameResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get UserProfileCheckUsernameResponse status.
 * @memberof ProtoUserProfileCheckUsernameResponse
 * @return {ProtoUserProfileCheckUsernameResponse_Status}
 */
proto.proto.UserProfileCheckUsernameResponse.prototype.getStatus = function() {
  return this.status;
};

/**
 * Set UserProfileCheckUsernameResponse status.
 * @memberof ProtoUserProfileCheckUsernameResponse
 * @param {ProtoUserProfileCheckUsernameResponse_Status} value
 */
proto.proto.UserProfileCheckUsernameResponse.prototype.setStatus = function(value) {
  this.status = value;
};

/**
 * @typedef {number} ProtoUserProfileCheckUsernameResponse_Status
 */

/**
 * Status enum.
 * @enum {ProtoUserProfileCheckUsernameResponse_Status}
 * @memberof ProtoUserProfileCheckUsernameResponse
 */
proto.proto.UserProfileCheckUsernameResponse.Status = proto.proto.UserProfileCheckUsernameResponse.prototype.Status = {
  INVALID : 0,
  TAKEN : 1,
  AVAILABLE : 2,
};

/**
 * @interface ProtoUserProfileGetBio
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserProfileGetBio.prototype.serializeBinary = function() {
  return proto.proto.UserProfileGetBio.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserProfileGetBio}
 */
proto.proto.UserProfileGetBio.deserializeBinary = function(buffer) {
  return proto.proto.UserProfileGetBio.decode(buffer);
};

/**
 * Get UserProfileGetBio request.
 * @memberof ProtoUserProfileGetBio
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.UserProfileGetBio.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set UserProfileGetBio request.
 * @memberof ProtoUserProfileGetBio
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.UserProfileGetBio.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * @interface ProtoUserProfileGetBioResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserProfileGetBioResponse.prototype.serializeBinary = function() {
  return proto.proto.UserProfileGetBioResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserProfileGetBioResponse}
 */
proto.proto.UserProfileGetBioResponse.deserializeBinary = function(buffer) {
  return proto.proto.UserProfileGetBioResponse.decode(buffer);
};

/**
 * Get UserProfileGetBioResponse response.
 * @memberof ProtoUserProfileGetBioResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.UserProfileGetBioResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set UserProfileGetBioResponse response.
 * @memberof ProtoUserProfileGetBioResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.UserProfileGetBioResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get UserProfileGetBioResponse bio.
 * @memberof ProtoUserProfileGetBioResponse
 * @return {string}
 */
proto.proto.UserProfileGetBioResponse.prototype.getBio = function() {
  return this.bio;
};

/**
 * Set UserProfileGetBioResponse bio.
 * @memberof ProtoUserProfileGetBioResponse
 * @param {string} value
 */
proto.proto.UserProfileGetBioResponse.prototype.setBio = function(value) {
  this.bio = value;
};

/**
 * @interface ProtoUserProfileGetEmail
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserProfileGetEmail.prototype.serializeBinary = function() {
  return proto.proto.UserProfileGetEmail.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserProfileGetEmail}
 */
proto.proto.UserProfileGetEmail.deserializeBinary = function(buffer) {
  return proto.proto.UserProfileGetEmail.decode(buffer);
};

/**
 * Get UserProfileGetEmail request.
 * @memberof ProtoUserProfileGetEmail
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.UserProfileGetEmail.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set UserProfileGetEmail request.
 * @memberof ProtoUserProfileGetEmail
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.UserProfileGetEmail.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * @interface ProtoUserProfileGetEmailResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserProfileGetEmailResponse.prototype.serializeBinary = function() {
  return proto.proto.UserProfileGetEmailResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserProfileGetEmailResponse}
 */
proto.proto.UserProfileGetEmailResponse.deserializeBinary = function(buffer) {
  return proto.proto.UserProfileGetEmailResponse.decode(buffer);
};

/**
 * Get UserProfileGetEmailResponse response.
 * @memberof ProtoUserProfileGetEmailResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.UserProfileGetEmailResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set UserProfileGetEmailResponse response.
 * @memberof ProtoUserProfileGetEmailResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.UserProfileGetEmailResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get UserProfileGetEmailResponse email.
 * @memberof ProtoUserProfileGetEmailResponse
 * @return {string}
 */
proto.proto.UserProfileGetEmailResponse.prototype.getEmail = function() {
  return this.email;
};

/**
 * Set UserProfileGetEmailResponse email.
 * @memberof ProtoUserProfileGetEmailResponse
 * @param {string} value
 */
proto.proto.UserProfileGetEmailResponse.prototype.setEmail = function(value) {
  this.email = value;
};

/**
 * @interface ProtoUserProfileGetGender
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserProfileGetGender.prototype.serializeBinary = function() {
  return proto.proto.UserProfileGetGender.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserProfileGetGender}
 */
proto.proto.UserProfileGetGender.deserializeBinary = function(buffer) {
  return proto.proto.UserProfileGetGender.decode(buffer);
};

/**
 * Get UserProfileGetGender request.
 * @memberof ProtoUserProfileGetGender
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.UserProfileGetGender.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set UserProfileGetGender request.
 * @memberof ProtoUserProfileGetGender
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.UserProfileGetGender.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * @interface ProtoUserProfileGetGenderResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserProfileGetGenderResponse.prototype.serializeBinary = function() {
  return proto.proto.UserProfileGetGenderResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserProfileGetGenderResponse}
 */
proto.proto.UserProfileGetGenderResponse.deserializeBinary = function(buffer) {
  return proto.proto.UserProfileGetGenderResponse.decode(buffer);
};

/**
 * Get UserProfileGetGenderResponse response.
 * @memberof ProtoUserProfileGetGenderResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.UserProfileGetGenderResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set UserProfileGetGenderResponse response.
 * @memberof ProtoUserProfileGetGenderResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.UserProfileGetGenderResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get UserProfileGetGenderResponse gender.
 * @memberof ProtoUserProfileGetGenderResponse
 * @return {ProtoGender}
 */
proto.proto.UserProfileGetGenderResponse.prototype.getGender = function() {
  return this.gender;
};

/**
 * Set UserProfileGetGenderResponse gender.
 * @memberof ProtoUserProfileGetGenderResponse
 * @param {ProtoGender} value
 */
proto.proto.UserProfileGetGenderResponse.prototype.setGender = function(value) {
  this.gender = value;
};

/**
 * @interface ProtoUserProfileGetNickname
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserProfileGetNickname.prototype.serializeBinary = function() {
  return proto.proto.UserProfileGetNickname.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserProfileGetNickname}
 */
proto.proto.UserProfileGetNickname.deserializeBinary = function(buffer) {
  return proto.proto.UserProfileGetNickname.decode(buffer);
};

/**
 * Get UserProfileGetNickname request.
 * @memberof ProtoUserProfileGetNickname
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.UserProfileGetNickname.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set UserProfileGetNickname request.
 * @memberof ProtoUserProfileGetNickname
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.UserProfileGetNickname.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * @interface ProtoUserProfileGetNicknameResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserProfileGetNicknameResponse.prototype.serializeBinary = function() {
  return proto.proto.UserProfileGetNicknameResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserProfileGetNicknameResponse}
 */
proto.proto.UserProfileGetNicknameResponse.deserializeBinary = function(buffer) {
  return proto.proto.UserProfileGetNicknameResponse.decode(buffer);
};

/**
 * Get UserProfileGetNicknameResponse response.
 * @memberof ProtoUserProfileGetNicknameResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.UserProfileGetNicknameResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set UserProfileGetNicknameResponse response.
 * @memberof ProtoUserProfileGetNicknameResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.UserProfileGetNicknameResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get UserProfileGetNicknameResponse nickname.
 * @memberof ProtoUserProfileGetNicknameResponse
 * @return {string}
 */
proto.proto.UserProfileGetNicknameResponse.prototype.getNickname = function() {
  return this.nickname;
};

/**
 * Set UserProfileGetNicknameResponse nickname.
 * @memberof ProtoUserProfileGetNicknameResponse
 * @param {string} value
 */
proto.proto.UserProfileGetNicknameResponse.prototype.setNickname = function(value) {
  this.nickname = value;
};

/**
 * @interface ProtoUserProfileGetSelfRemove
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserProfileGetSelfRemove.prototype.serializeBinary = function() {
  return proto.proto.UserProfileGetSelfRemove.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserProfileGetSelfRemove}
 */
proto.proto.UserProfileGetSelfRemove.deserializeBinary = function(buffer) {
  return proto.proto.UserProfileGetSelfRemove.decode(buffer);
};

/**
 * Get UserProfileGetSelfRemove request.
 * @memberof ProtoUserProfileGetSelfRemove
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.UserProfileGetSelfRemove.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set UserProfileGetSelfRemove request.
 * @memberof ProtoUserProfileGetSelfRemove
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.UserProfileGetSelfRemove.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * @interface ProtoUserProfileGetSelfRemoveResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserProfileGetSelfRemoveResponse.prototype.serializeBinary = function() {
  return proto.proto.UserProfileGetSelfRemoveResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserProfileGetSelfRemoveResponse}
 */
proto.proto.UserProfileGetSelfRemoveResponse.deserializeBinary = function(buffer) {
  return proto.proto.UserProfileGetSelfRemoveResponse.decode(buffer);
};

/**
 * Get UserProfileGetSelfRemoveResponse response.
 * @memberof ProtoUserProfileGetSelfRemoveResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.UserProfileGetSelfRemoveResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set UserProfileGetSelfRemoveResponse response.
 * @memberof ProtoUserProfileGetSelfRemoveResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.UserProfileGetSelfRemoveResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get UserProfileGetSelfRemoveResponse selfRemove.
 * @memberof ProtoUserProfileGetSelfRemoveResponse
 * @return {number}
 */
proto.proto.UserProfileGetSelfRemoveResponse.prototype.getSelfRemove = function() {
  return this.selfRemove;
};

/**
 * Set UserProfileGetSelfRemoveResponse selfRemove.
 * @memberof ProtoUserProfileGetSelfRemoveResponse
 * @param {number} value
 */
proto.proto.UserProfileGetSelfRemoveResponse.prototype.setSelfRemove = function(value) {
  this.selfRemove = value;
};

/**
 * @interface ProtoUserProfileSetBio
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserProfileSetBio.prototype.serializeBinary = function() {
  return proto.proto.UserProfileSetBio.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserProfileSetBio}
 */
proto.proto.UserProfileSetBio.deserializeBinary = function(buffer) {
  return proto.proto.UserProfileSetBio.decode(buffer);
};

/**
 * Get UserProfileSetBio request.
 * @memberof ProtoUserProfileSetBio
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.UserProfileSetBio.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set UserProfileSetBio request.
 * @memberof ProtoUserProfileSetBio
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.UserProfileSetBio.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get UserProfileSetBio bio.
 * @memberof ProtoUserProfileSetBio
 * @return {string}
 */
proto.proto.UserProfileSetBio.prototype.getBio = function() {
  return this.bio;
};

/**
 * Set UserProfileSetBio bio.
 * @memberof ProtoUserProfileSetBio
 * @param {string} value
 */
proto.proto.UserProfileSetBio.prototype.setBio = function(value) {
  this.bio = value;
};

/**
 * @interface ProtoUserProfileSetBioResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserProfileSetBioResponse.prototype.serializeBinary = function() {
  return proto.proto.UserProfileSetBioResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserProfileSetBioResponse}
 */
proto.proto.UserProfileSetBioResponse.deserializeBinary = function(buffer) {
  return proto.proto.UserProfileSetBioResponse.decode(buffer);
};

/**
 * Get UserProfileSetBioResponse response.
 * @memberof ProtoUserProfileSetBioResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.UserProfileSetBioResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set UserProfileSetBioResponse response.
 * @memberof ProtoUserProfileSetBioResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.UserProfileSetBioResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get UserProfileSetBioResponse bio.
 * @memberof ProtoUserProfileSetBioResponse
 * @return {string}
 */
proto.proto.UserProfileSetBioResponse.prototype.getBio = function() {
  return this.bio;
};

/**
 * Set UserProfileSetBioResponse bio.
 * @memberof ProtoUserProfileSetBioResponse
 * @param {string} value
 */
proto.proto.UserProfileSetBioResponse.prototype.setBio = function(value) {
  this.bio = value;
};

/**
 * @interface ProtoUserProfileSetEmail
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserProfileSetEmail.prototype.serializeBinary = function() {
  return proto.proto.UserProfileSetEmail.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserProfileSetEmail}
 */
proto.proto.UserProfileSetEmail.deserializeBinary = function(buffer) {
  return proto.proto.UserProfileSetEmail.decode(buffer);
};

/**
 * Get UserProfileSetEmail request.
 * @memberof ProtoUserProfileSetEmail
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.UserProfileSetEmail.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set UserProfileSetEmail request.
 * @memberof ProtoUserProfileSetEmail
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.UserProfileSetEmail.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get UserProfileSetEmail email.
 * @memberof ProtoUserProfileSetEmail
 * @return {string}
 */
proto.proto.UserProfileSetEmail.prototype.getEmail = function() {
  return this.email;
};

/**
 * Set UserProfileSetEmail email.
 * @memberof ProtoUserProfileSetEmail
 * @param {string} value
 */
proto.proto.UserProfileSetEmail.prototype.setEmail = function(value) {
  this.email = value;
};

/**
 * @interface ProtoUserProfileSetEmailResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserProfileSetEmailResponse.prototype.serializeBinary = function() {
  return proto.proto.UserProfileSetEmailResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserProfileSetEmailResponse}
 */
proto.proto.UserProfileSetEmailResponse.deserializeBinary = function(buffer) {
  return proto.proto.UserProfileSetEmailResponse.decode(buffer);
};

/**
 * Get UserProfileSetEmailResponse response.
 * @memberof ProtoUserProfileSetEmailResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.UserProfileSetEmailResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set UserProfileSetEmailResponse response.
 * @memberof ProtoUserProfileSetEmailResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.UserProfileSetEmailResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get UserProfileSetEmailResponse email.
 * @memberof ProtoUserProfileSetEmailResponse
 * @return {string}
 */
proto.proto.UserProfileSetEmailResponse.prototype.getEmail = function() {
  return this.email;
};

/**
 * Set UserProfileSetEmailResponse email.
 * @memberof ProtoUserProfileSetEmailResponse
 * @param {string} value
 */
proto.proto.UserProfileSetEmailResponse.prototype.setEmail = function(value) {
  this.email = value;
};

/**
 * @interface ProtoUserProfileSetGender
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserProfileSetGender.prototype.serializeBinary = function() {
  return proto.proto.UserProfileSetGender.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserProfileSetGender}
 */
proto.proto.UserProfileSetGender.deserializeBinary = function(buffer) {
  return proto.proto.UserProfileSetGender.decode(buffer);
};

/**
 * Get UserProfileSetGender request.
 * @memberof ProtoUserProfileSetGender
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.UserProfileSetGender.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set UserProfileSetGender request.
 * @memberof ProtoUserProfileSetGender
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.UserProfileSetGender.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get UserProfileSetGender gender.
 * @memberof ProtoUserProfileSetGender
 * @return {ProtoGender}
 */
proto.proto.UserProfileSetGender.prototype.getGender = function() {
  return this.gender;
};

/**
 * Set UserProfileSetGender gender.
 * @memberof ProtoUserProfileSetGender
 * @param {ProtoGender} value
 */
proto.proto.UserProfileSetGender.prototype.setGender = function(value) {
  this.gender = value;
};

/**
 * @interface ProtoUserProfileSetGenderResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserProfileSetGenderResponse.prototype.serializeBinary = function() {
  return proto.proto.UserProfileSetGenderResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserProfileSetGenderResponse}
 */
proto.proto.UserProfileSetGenderResponse.deserializeBinary = function(buffer) {
  return proto.proto.UserProfileSetGenderResponse.decode(buffer);
};

/**
 * Get UserProfileSetGenderResponse response.
 * @memberof ProtoUserProfileSetGenderResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.UserProfileSetGenderResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set UserProfileSetGenderResponse response.
 * @memberof ProtoUserProfileSetGenderResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.UserProfileSetGenderResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get UserProfileSetGenderResponse gender.
 * @memberof ProtoUserProfileSetGenderResponse
 * @return {ProtoGender}
 */
proto.proto.UserProfileSetGenderResponse.prototype.getGender = function() {
  return this.gender;
};

/**
 * Set UserProfileSetGenderResponse gender.
 * @memberof ProtoUserProfileSetGenderResponse
 * @param {ProtoGender} value
 */
proto.proto.UserProfileSetGenderResponse.prototype.setGender = function(value) {
  this.gender = value;
};

/**
 * @interface ProtoUserProfileSetNickname
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserProfileSetNickname.prototype.serializeBinary = function() {
  return proto.proto.UserProfileSetNickname.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserProfileSetNickname}
 */
proto.proto.UserProfileSetNickname.deserializeBinary = function(buffer) {
  return proto.proto.UserProfileSetNickname.decode(buffer);
};

/**
 * Get UserProfileSetNickname request.
 * @memberof ProtoUserProfileSetNickname
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.UserProfileSetNickname.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set UserProfileSetNickname request.
 * @memberof ProtoUserProfileSetNickname
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.UserProfileSetNickname.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get UserProfileSetNickname nickname.
 * @memberof ProtoUserProfileSetNickname
 * @return {string}
 */
proto.proto.UserProfileSetNickname.prototype.getNickname = function() {
  return this.nickname;
};

/**
 * Set UserProfileSetNickname nickname.
 * @memberof ProtoUserProfileSetNickname
 * @param {string} value
 */
proto.proto.UserProfileSetNickname.prototype.setNickname = function(value) {
  this.nickname = value;
};

/**
 * @interface ProtoUserProfileSetNicknameResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserProfileSetNicknameResponse.prototype.serializeBinary = function() {
  return proto.proto.UserProfileSetNicknameResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserProfileSetNicknameResponse}
 */
proto.proto.UserProfileSetNicknameResponse.deserializeBinary = function(buffer) {
  return proto.proto.UserProfileSetNicknameResponse.decode(buffer);
};

/**
 * Get UserProfileSetNicknameResponse response.
 * @memberof ProtoUserProfileSetNicknameResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.UserProfileSetNicknameResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set UserProfileSetNicknameResponse response.
 * @memberof ProtoUserProfileSetNicknameResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.UserProfileSetNicknameResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get UserProfileSetNicknameResponse nickname.
 * @memberof ProtoUserProfileSetNicknameResponse
 * @return {string}
 */
proto.proto.UserProfileSetNicknameResponse.prototype.getNickname = function() {
  return this.nickname;
};

/**
 * Set UserProfileSetNicknameResponse nickname.
 * @memberof ProtoUserProfileSetNicknameResponse
 * @param {string} value
 */
proto.proto.UserProfileSetNicknameResponse.prototype.setNickname = function(value) {
  this.nickname = value;
};

/**
 * Get UserProfileSetNicknameResponse initials.
 * @memberof ProtoUserProfileSetNicknameResponse
 * @return {string}
 */
proto.proto.UserProfileSetNicknameResponse.prototype.getInitials = function() {
  return this.initials;
};

/**
 * Set UserProfileSetNicknameResponse initials.
 * @memberof ProtoUserProfileSetNicknameResponse
 * @param {string} value
 */
proto.proto.UserProfileSetNicknameResponse.prototype.setInitials = function(value) {
  this.initials = value;
};

/**
 * @interface ProtoUserProfileSetSelfRemove
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserProfileSetSelfRemove.prototype.serializeBinary = function() {
  return proto.proto.UserProfileSetSelfRemove.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserProfileSetSelfRemove}
 */
proto.proto.UserProfileSetSelfRemove.deserializeBinary = function(buffer) {
  return proto.proto.UserProfileSetSelfRemove.decode(buffer);
};

/**
 * Get UserProfileSetSelfRemove request.
 * @memberof ProtoUserProfileSetSelfRemove
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.UserProfileSetSelfRemove.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set UserProfileSetSelfRemove request.
 * @memberof ProtoUserProfileSetSelfRemove
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.UserProfileSetSelfRemove.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get UserProfileSetSelfRemove selfRemove.
 * @memberof ProtoUserProfileSetSelfRemove
 * @return {number}
 */
proto.proto.UserProfileSetSelfRemove.prototype.getSelfRemove = function() {
  return this.selfRemove;
};

/**
 * Set UserProfileSetSelfRemove selfRemove.
 * @memberof ProtoUserProfileSetSelfRemove
 * @param {number} value
 */
proto.proto.UserProfileSetSelfRemove.prototype.setSelfRemove = function(value) {
  this.selfRemove = value;
};

/**
 * @interface ProtoUserProfileSetSelfRemoveResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserProfileSetSelfRemoveResponse.prototype.serializeBinary = function() {
  return proto.proto.UserProfileSetSelfRemoveResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserProfileSetSelfRemoveResponse}
 */
proto.proto.UserProfileSetSelfRemoveResponse.deserializeBinary = function(buffer) {
  return proto.proto.UserProfileSetSelfRemoveResponse.decode(buffer);
};

/**
 * Get UserProfileSetSelfRemoveResponse response.
 * @memberof ProtoUserProfileSetSelfRemoveResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.UserProfileSetSelfRemoveResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set UserProfileSetSelfRemoveResponse response.
 * @memberof ProtoUserProfileSetSelfRemoveResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.UserProfileSetSelfRemoveResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get UserProfileSetSelfRemoveResponse selfRemove.
 * @memberof ProtoUserProfileSetSelfRemoveResponse
 * @return {number}
 */
proto.proto.UserProfileSetSelfRemoveResponse.prototype.getSelfRemove = function() {
  return this.selfRemove;
};

/**
 * Set UserProfileSetSelfRemoveResponse selfRemove.
 * @memberof ProtoUserProfileSetSelfRemoveResponse
 * @param {number} value
 */
proto.proto.UserProfileSetSelfRemoveResponse.prototype.setSelfRemove = function(value) {
  this.selfRemove = value;
};

/**
 * @interface ProtoUserProfileUpdateUsername
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserProfileUpdateUsername.prototype.serializeBinary = function() {
  return proto.proto.UserProfileUpdateUsername.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserProfileUpdateUsername}
 */
proto.proto.UserProfileUpdateUsername.deserializeBinary = function(buffer) {
  return proto.proto.UserProfileUpdateUsername.decode(buffer);
};

/**
 * Get UserProfileUpdateUsername request.
 * @memberof ProtoUserProfileUpdateUsername
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.UserProfileUpdateUsername.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set UserProfileUpdateUsername request.
 * @memberof ProtoUserProfileUpdateUsername
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.UserProfileUpdateUsername.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get UserProfileUpdateUsername username.
 * @memberof ProtoUserProfileUpdateUsername
 * @return {string}
 */
proto.proto.UserProfileUpdateUsername.prototype.getUsername = function() {
  return this.username;
};

/**
 * Set UserProfileUpdateUsername username.
 * @memberof ProtoUserProfileUpdateUsername
 * @param {string} value
 */
proto.proto.UserProfileUpdateUsername.prototype.setUsername = function(value) {
  this.username = value;
};

/**
 * @interface ProtoUserProfileUpdateUsernameResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserProfileUpdateUsernameResponse.prototype.serializeBinary = function() {
  return proto.proto.UserProfileUpdateUsernameResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserProfileUpdateUsernameResponse}
 */
proto.proto.UserProfileUpdateUsernameResponse.deserializeBinary = function(buffer) {
  return proto.proto.UserProfileUpdateUsernameResponse.decode(buffer);
};

/**
 * Get UserProfileUpdateUsernameResponse response.
 * @memberof ProtoUserProfileUpdateUsernameResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.UserProfileUpdateUsernameResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set UserProfileUpdateUsernameResponse response.
 * @memberof ProtoUserProfileUpdateUsernameResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.UserProfileUpdateUsernameResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get UserProfileUpdateUsernameResponse username.
 * @memberof ProtoUserProfileUpdateUsernameResponse
 * @return {string}
 */
proto.proto.UserProfileUpdateUsernameResponse.prototype.getUsername = function() {
  return this.username;
};

/**
 * Set UserProfileUpdateUsernameResponse username.
 * @memberof ProtoUserProfileUpdateUsernameResponse
 * @param {string} value
 */
proto.proto.UserProfileUpdateUsernameResponse.prototype.setUsername = function(value) {
  this.username = value;
};

/**
 * @interface ProtoUserRegister
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserRegister.prototype.serializeBinary = function() {
  return proto.proto.UserRegister.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserRegister}
 */
proto.proto.UserRegister.deserializeBinary = function(buffer) {
  return proto.proto.UserRegister.decode(buffer);
};

/**
 * Get UserRegister request.
 * @memberof ProtoUserRegister
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.UserRegister.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set UserRegister request.
 * @memberof ProtoUserRegister
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.UserRegister.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get UserRegister phoneNumber.
 * @memberof ProtoUserRegister
 * @return {Long}
 */
proto.proto.UserRegister.prototype.getPhoneNumber = function() {
  return this.phoneNumber;
};

/**
 * Set UserRegister phoneNumber.
 * @memberof ProtoUserRegister
 * @param {Long} value
 */
proto.proto.UserRegister.prototype.setPhoneNumber = function(value) {
  this.phoneNumber = value;
};

/**
 * Get UserRegister countryCode.
 * @memberof ProtoUserRegister
 * @return {string}
 */
proto.proto.UserRegister.prototype.getCountryCode = function() {
  return this.countryCode;
};

/**
 * Set UserRegister countryCode.
 * @memberof ProtoUserRegister
 * @param {string} value
 */
proto.proto.UserRegister.prototype.setCountryCode = function(value) {
  this.countryCode = value;
};

/**
 * @interface ProtoUserRegisterResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserRegisterResponse.prototype.serializeBinary = function() {
  return proto.proto.UserRegisterResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserRegisterResponse}
 */
proto.proto.UserRegisterResponse.deserializeBinary = function(buffer) {
  return proto.proto.UserRegisterResponse.decode(buffer);
};

/**
 * Get UserRegisterResponse response.
 * @memberof ProtoUserRegisterResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.UserRegisterResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set UserRegisterResponse response.
 * @memberof ProtoUserRegisterResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.UserRegisterResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get UserRegisterResponse username.
 * @memberof ProtoUserRegisterResponse
 * @return {string}
 */
proto.proto.UserRegisterResponse.prototype.getUsername = function() {
  return this.username;
};

/**
 * Set UserRegisterResponse username.
 * @memberof ProtoUserRegisterResponse
 * @param {string} value
 */
proto.proto.UserRegisterResponse.prototype.setUsername = function(value) {
  this.username = value;
};

/**
 * Get UserRegisterResponse userId.
 * @memberof ProtoUserRegisterResponse
 * @return {Long}
 */
proto.proto.UserRegisterResponse.prototype.getUserId = function() {
  return this.userId;
};

/**
 * Set UserRegisterResponse userId.
 * @memberof ProtoUserRegisterResponse
 * @param {Long} value
 */
proto.proto.UserRegisterResponse.prototype.setUserId = function(value) {
  this.userId = value;
};

/**
 * Get UserRegisterResponse authorHash.
 * @memberof ProtoUserRegisterResponse
 * @return {string}
 */
proto.proto.UserRegisterResponse.prototype.getAuthorHash = function() {
  return this.authorHash;
};

/**
 * Set UserRegisterResponse authorHash.
 * @memberof ProtoUserRegisterResponse
 * @param {string} value
 */
proto.proto.UserRegisterResponse.prototype.setAuthorHash = function(value) {
  this.authorHash = value;
};

/**
 * Get UserRegisterResponse method.
 * @memberof ProtoUserRegisterResponse
 * @return {ProtoUserRegisterResponse_Method}
 */
proto.proto.UserRegisterResponse.prototype.getMethod = function() {
  return this.method;
};

/**
 * Set UserRegisterResponse method.
 * @memberof ProtoUserRegisterResponse
 * @param {ProtoUserRegisterResponse_Method} value
 */
proto.proto.UserRegisterResponse.prototype.setMethod = function(value) {
  this.method = value;
};

/**
 * Get UserRegisterResponse resendDelay.
 * @memberof ProtoUserRegisterResponse
 * @return {number}
 */
proto.proto.UserRegisterResponse.prototype.getResendDelay = function() {
  return this.resendDelay;
};

/**
 * Set UserRegisterResponse resendDelay.
 * @memberof ProtoUserRegisterResponse
 * @param {number} value
 */
proto.proto.UserRegisterResponse.prototype.setResendDelay = function(value) {
  this.resendDelay = value;
};

/**
 * Get UserRegisterResponse smsNumber.
 * @memberof ProtoUserRegisterResponse
 * @return {Array.<Long>}
 */
proto.proto.UserRegisterResponse.prototype.getSmsNumberList = function() {
  return this.smsNumber;
};

/**
 * Set UserRegisterResponse smsNumber.
 * @memberof ProtoUserRegisterResponse
 * @param {Array.<Long>} value
 */
proto.proto.UserRegisterResponse.prototype.setSmsNumberList = function(value) {
  this.smsNumber = value;
};

/**
 * Get UserRegisterResponse verifyCodeRegex.
 * @memberof ProtoUserRegisterResponse
 * @return {string}
 */
proto.proto.UserRegisterResponse.prototype.getVerifyCodeRegex = function() {
  return this.verifyCodeRegex;
};

/**
 * Set UserRegisterResponse verifyCodeRegex.
 * @memberof ProtoUserRegisterResponse
 * @param {string} value
 */
proto.proto.UserRegisterResponse.prototype.setVerifyCodeRegex = function(value) {
  this.verifyCodeRegex = value;
};

/**
 * Get UserRegisterResponse verifyCodeDigitCount.
 * @memberof ProtoUserRegisterResponse
 * @return {number}
 */
proto.proto.UserRegisterResponse.prototype.getVerifyCodeDigitCount = function() {
  return this.verifyCodeDigitCount;
};

/**
 * Set UserRegisterResponse verifyCodeDigitCount.
 * @memberof ProtoUserRegisterResponse
 * @param {number} value
 */
proto.proto.UserRegisterResponse.prototype.setVerifyCodeDigitCount = function(value) {
  this.verifyCodeDigitCount = value;
};

/**
 * @typedef {number} ProtoUserRegisterResponse_Method
 */

/**
 * Method enum.
 * @enum {ProtoUserRegisterResponse_Method}
 * @memberof ProtoUserRegisterResponse
 */
proto.proto.UserRegisterResponse.Method = proto.proto.UserRegisterResponse.prototype.Method = {
  VERIFY_CODE_SMS : 0,
  VERIFY_CODE_SOCKET : 1,
  VERIFY_CODE_SMS_SOCKET : 2,
};

/**
 * @interface ProtoUserReport
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserReport.prototype.serializeBinary = function() {
  return proto.proto.UserReport.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserReport}
 */
proto.proto.UserReport.deserializeBinary = function(buffer) {
  return proto.proto.UserReport.decode(buffer);
};

/**
 * Get UserReport request.
 * @memberof ProtoUserReport
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.UserReport.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set UserReport request.
 * @memberof ProtoUserReport
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.UserReport.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get UserReport userId.
 * @memberof ProtoUserReport
 * @return {Long}
 */
proto.proto.UserReport.prototype.getUserId = function() {
  return this.userId;
};

/**
 * Set UserReport userId.
 * @memberof ProtoUserReport
 * @param {Long} value
 */
proto.proto.UserReport.prototype.setUserId = function(value) {
  this.userId = value;
};

/**
 * Get UserReport reason.
 * @memberof ProtoUserReport
 * @return {ProtoUserReport_Reason}
 */
proto.proto.UserReport.prototype.getReason = function() {
  return this.reason;
};

/**
 * Set UserReport reason.
 * @memberof ProtoUserReport
 * @param {ProtoUserReport_Reason} value
 */
proto.proto.UserReport.prototype.setReason = function(value) {
  this.reason = value;
};

/**
 * Get UserReport description.
 * @memberof ProtoUserReport
 * @return {string}
 */
proto.proto.UserReport.prototype.getDescription = function() {
  return this.description;
};

/**
 * Set UserReport description.
 * @memberof ProtoUserReport
 * @param {string} value
 */
proto.proto.UserReport.prototype.setDescription = function(value) {
  this.description = value;
};

/**
 * @typedef {number} ProtoUserReport_Reason
 */

/**
 * Reason enum.
 * @enum {ProtoUserReport_Reason}
 * @memberof ProtoUserReport
 */
proto.proto.UserReport.Reason = proto.proto.UserReport.prototype.Reason = {
  OTHER : 0,
  SPAM : 1,
  ABUSE : 2,
  FAKE_ACCOUNT : 3,
};

/**
 * @interface ProtoUserReportResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserReportResponse.prototype.serializeBinary = function() {
  return proto.proto.UserReportResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserReportResponse}
 */
proto.proto.UserReportResponse.deserializeBinary = function(buffer) {
  return proto.proto.UserReportResponse.decode(buffer);
};

/**
 * Get UserReportResponse response.
 * @memberof ProtoUserReportResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.UserReportResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set UserReportResponse response.
 * @memberof ProtoUserReportResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.UserReportResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * @interface ProtoUserSessionGetActiveList
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserSessionGetActiveList.prototype.serializeBinary = function() {
  return proto.proto.UserSessionGetActiveList.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserSessionGetActiveList}
 */
proto.proto.UserSessionGetActiveList.deserializeBinary = function(buffer) {
  return proto.proto.UserSessionGetActiveList.decode(buffer);
};

/**
 * Get UserSessionGetActiveList request.
 * @memberof ProtoUserSessionGetActiveList
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.UserSessionGetActiveList.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set UserSessionGetActiveList request.
 * @memberof ProtoUserSessionGetActiveList
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.UserSessionGetActiveList.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * @interface ProtoUserSessionGetActiveListResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserSessionGetActiveListResponse.prototype.serializeBinary = function() {
  return proto.proto.UserSessionGetActiveListResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserSessionGetActiveListResponse}
 */
proto.proto.UserSessionGetActiveListResponse.deserializeBinary = function(buffer) {
  return proto.proto.UserSessionGetActiveListResponse.decode(buffer);
};

/**
 * Get UserSessionGetActiveListResponse response.
 * @memberof ProtoUserSessionGetActiveListResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.UserSessionGetActiveListResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set UserSessionGetActiveListResponse response.
 * @memberof ProtoUserSessionGetActiveListResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.UserSessionGetActiveListResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get UserSessionGetActiveListResponse session.
 * @memberof ProtoUserSessionGetActiveListResponse
 * @return {Array.<ProtoUserSessionGetActiveListResponse_Session>}
 */
proto.proto.UserSessionGetActiveListResponse.prototype.getSessionList = function() {
  return this.session;
};

/**
 * Set UserSessionGetActiveListResponse session.
 * @memberof ProtoUserSessionGetActiveListResponse
 * @param {Array.<ProtoUserSessionGetActiveListResponse_Session>} value
 */
proto.proto.UserSessionGetActiveListResponse.prototype.setSessionList = function(value) {
  this.session = value;
};

/**
 * @interface ProtoUserSessionGetActiveListResponse_Session
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserSessionGetActiveListResponse.Session.prototype.serializeBinary = function() {
  return proto.proto.UserSessionGetActiveListResponse.Session.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserSessionGetActiveListResponse_Session}
 */
proto.proto.UserSessionGetActiveListResponse.Session.deserializeBinary = function(buffer) {
  return proto.proto.UserSessionGetActiveListResponse.Session.decode(buffer);
};

/**
 * Get Session sessionId.
 * @memberof ProtoUserSessionGetActiveListResponse_Session
 * @return {Long}
 */
proto.proto.UserSessionGetActiveListResponse.Session.prototype.getSessionId = function() {
  return this.sessionId;
};

/**
 * Set Session sessionId.
 * @memberof ProtoUserSessionGetActiveListResponse_Session
 * @param {Long} value
 */
proto.proto.UserSessionGetActiveListResponse.Session.prototype.setSessionId = function(value) {
  this.sessionId = value;
};

/**
 * Get Session appName.
 * @memberof ProtoUserSessionGetActiveListResponse_Session
 * @return {string}
 */
proto.proto.UserSessionGetActiveListResponse.Session.prototype.getAppName = function() {
  return this.appName;
};

/**
 * Set Session appName.
 * @memberof ProtoUserSessionGetActiveListResponse_Session
 * @param {string} value
 */
proto.proto.UserSessionGetActiveListResponse.Session.prototype.setAppName = function(value) {
  this.appName = value;
};

/**
 * Get Session appId.
 * @memberof ProtoUserSessionGetActiveListResponse_Session
 * @return {number}
 */
proto.proto.UserSessionGetActiveListResponse.Session.prototype.getAppId = function() {
  return this.appId;
};

/**
 * Set Session appId.
 * @memberof ProtoUserSessionGetActiveListResponse_Session
 * @param {number} value
 */
proto.proto.UserSessionGetActiveListResponse.Session.prototype.setAppId = function(value) {
  this.appId = value;
};

/**
 * Get Session appBuildVersion.
 * @memberof ProtoUserSessionGetActiveListResponse_Session
 * @return {number}
 */
proto.proto.UserSessionGetActiveListResponse.Session.prototype.getAppBuildVersion = function() {
  return this.appBuildVersion;
};

/**
 * Set Session appBuildVersion.
 * @memberof ProtoUserSessionGetActiveListResponse_Session
 * @param {number} value
 */
proto.proto.UserSessionGetActiveListResponse.Session.prototype.setAppBuildVersion = function(value) {
  this.appBuildVersion = value;
};

/**
 * Get Session appVersion.
 * @memberof ProtoUserSessionGetActiveListResponse_Session
 * @return {string}
 */
proto.proto.UserSessionGetActiveListResponse.Session.prototype.getAppVersion = function() {
  return this.appVersion;
};

/**
 * Set Session appVersion.
 * @memberof ProtoUserSessionGetActiveListResponse_Session
 * @param {string} value
 */
proto.proto.UserSessionGetActiveListResponse.Session.prototype.setAppVersion = function(value) {
  this.appVersion = value;
};

/**
 * Get Session platform.
 * @memberof ProtoUserSessionGetActiveListResponse_Session
 * @return {ProtoPlatform}
 */
proto.proto.UserSessionGetActiveListResponse.Session.prototype.getPlatform = function() {
  return this.platform;
};

/**
 * Set Session platform.
 * @memberof ProtoUserSessionGetActiveListResponse_Session
 * @param {ProtoPlatform} value
 */
proto.proto.UserSessionGetActiveListResponse.Session.prototype.setPlatform = function(value) {
  this.platform = value;
};

/**
 * Get Session platformVersion.
 * @memberof ProtoUserSessionGetActiveListResponse_Session
 * @return {string}
 */
proto.proto.UserSessionGetActiveListResponse.Session.prototype.getPlatformVersion = function() {
  return this.platformVersion;
};

/**
 * Set Session platformVersion.
 * @memberof ProtoUserSessionGetActiveListResponse_Session
 * @param {string} value
 */
proto.proto.UserSessionGetActiveListResponse.Session.prototype.setPlatformVersion = function(value) {
  this.platformVersion = value;
};

/**
 * Get Session device.
 * @memberof ProtoUserSessionGetActiveListResponse_Session
 * @return {ProtoDevice}
 */
proto.proto.UserSessionGetActiveListResponse.Session.prototype.getDevice = function() {
  return this.device;
};

/**
 * Set Session device.
 * @memberof ProtoUserSessionGetActiveListResponse_Session
 * @param {ProtoDevice} value
 */
proto.proto.UserSessionGetActiveListResponse.Session.prototype.setDevice = function(value) {
  this.device = value;
};

/**
 * Get Session deviceName.
 * @memberof ProtoUserSessionGetActiveListResponse_Session
 * @return {string}
 */
proto.proto.UserSessionGetActiveListResponse.Session.prototype.getDeviceName = function() {
  return this.deviceName;
};

/**
 * Set Session deviceName.
 * @memberof ProtoUserSessionGetActiveListResponse_Session
 * @param {string} value
 */
proto.proto.UserSessionGetActiveListResponse.Session.prototype.setDeviceName = function(value) {
  this.deviceName = value;
};

/**
 * Get Session language.
 * @memberof ProtoUserSessionGetActiveListResponse_Session
 * @return {ProtoLanguage}
 */
proto.proto.UserSessionGetActiveListResponse.Session.prototype.getLanguage = function() {
  return this.language;
};

/**
 * Set Session language.
 * @memberof ProtoUserSessionGetActiveListResponse_Session
 * @param {ProtoLanguage} value
 */
proto.proto.UserSessionGetActiveListResponse.Session.prototype.setLanguage = function(value) {
  this.language = value;
};

/**
 * Get Session country.
 * @memberof ProtoUserSessionGetActiveListResponse_Session
 * @return {string}
 */
proto.proto.UserSessionGetActiveListResponse.Session.prototype.getCountry = function() {
  return this.country;
};

/**
 * Set Session country.
 * @memberof ProtoUserSessionGetActiveListResponse_Session
 * @param {string} value
 */
proto.proto.UserSessionGetActiveListResponse.Session.prototype.setCountry = function(value) {
  this.country = value;
};

/**
 * Get Session current.
 * @memberof ProtoUserSessionGetActiveListResponse_Session
 * @return {boolean}
 */
proto.proto.UserSessionGetActiveListResponse.Session.prototype.getCurrent = function() {
  return this.current;
};

/**
 * Set Session current.
 * @memberof ProtoUserSessionGetActiveListResponse_Session
 * @param {boolean} value
 */
proto.proto.UserSessionGetActiveListResponse.Session.prototype.setCurrent = function(value) {
  this.current = value;
};

/**
 * Get Session createTime.
 * @memberof ProtoUserSessionGetActiveListResponse_Session
 * @return {number}
 */
proto.proto.UserSessionGetActiveListResponse.Session.prototype.getCreateTime = function() {
  return this.createTime;
};

/**
 * Set Session createTime.
 * @memberof ProtoUserSessionGetActiveListResponse_Session
 * @param {number} value
 */
proto.proto.UserSessionGetActiveListResponse.Session.prototype.setCreateTime = function(value) {
  this.createTime = value;
};

/**
 * Get Session activeTime.
 * @memberof ProtoUserSessionGetActiveListResponse_Session
 * @return {number}
 */
proto.proto.UserSessionGetActiveListResponse.Session.prototype.getActiveTime = function() {
  return this.activeTime;
};

/**
 * Set Session activeTime.
 * @memberof ProtoUserSessionGetActiveListResponse_Session
 * @param {number} value
 */
proto.proto.UserSessionGetActiveListResponse.Session.prototype.setActiveTime = function(value) {
  this.activeTime = value;
};

/**
 * Get Session ip.
 * @memberof ProtoUserSessionGetActiveListResponse_Session
 * @return {string}
 */
proto.proto.UserSessionGetActiveListResponse.Session.prototype.getIp = function() {
  return this.ip;
};

/**
 * Set Session ip.
 * @memberof ProtoUserSessionGetActiveListResponse_Session
 * @param {string} value
 */
proto.proto.UserSessionGetActiveListResponse.Session.prototype.setIp = function(value) {
  this.ip = value;
};

/**
 * @interface ProtoUserSessionLogout
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserSessionLogout.prototype.serializeBinary = function() {
  return proto.proto.UserSessionLogout.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserSessionLogout}
 */
proto.proto.UserSessionLogout.deserializeBinary = function(buffer) {
  return proto.proto.UserSessionLogout.decode(buffer);
};

/**
 * Get UserSessionLogout request.
 * @memberof ProtoUserSessionLogout
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.UserSessionLogout.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set UserSessionLogout request.
 * @memberof ProtoUserSessionLogout
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.UserSessionLogout.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * @interface ProtoUserSessionLogoutResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserSessionLogoutResponse.prototype.serializeBinary = function() {
  return proto.proto.UserSessionLogoutResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserSessionLogoutResponse}
 */
proto.proto.UserSessionLogoutResponse.deserializeBinary = function(buffer) {
  return proto.proto.UserSessionLogoutResponse.decode(buffer);
};

/**
 * Get UserSessionLogoutResponse response.
 * @memberof ProtoUserSessionLogoutResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.UserSessionLogoutResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set UserSessionLogoutResponse response.
 * @memberof ProtoUserSessionLogoutResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.UserSessionLogoutResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * @interface ProtoUserSessionTerminate
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserSessionTerminate.prototype.serializeBinary = function() {
  return proto.proto.UserSessionTerminate.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserSessionTerminate}
 */
proto.proto.UserSessionTerminate.deserializeBinary = function(buffer) {
  return proto.proto.UserSessionTerminate.decode(buffer);
};

/**
 * Get UserSessionTerminate request.
 * @memberof ProtoUserSessionTerminate
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.UserSessionTerminate.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set UserSessionTerminate request.
 * @memberof ProtoUserSessionTerminate
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.UserSessionTerminate.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get UserSessionTerminate sessionId.
 * @memberof ProtoUserSessionTerminate
 * @return {Long}
 */
proto.proto.UserSessionTerminate.prototype.getSessionId = function() {
  return this.sessionId;
};

/**
 * Set UserSessionTerminate sessionId.
 * @memberof ProtoUserSessionTerminate
 * @param {Long} value
 */
proto.proto.UserSessionTerminate.prototype.setSessionId = function(value) {
  this.sessionId = value;
};

/**
 * @interface ProtoUserSessionTerminateResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserSessionTerminateResponse.prototype.serializeBinary = function() {
  return proto.proto.UserSessionTerminateResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserSessionTerminateResponse}
 */
proto.proto.UserSessionTerminateResponse.deserializeBinary = function(buffer) {
  return proto.proto.UserSessionTerminateResponse.decode(buffer);
};

/**
 * Get UserSessionTerminateResponse response.
 * @memberof ProtoUserSessionTerminateResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.UserSessionTerminateResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set UserSessionTerminateResponse response.
 * @memberof ProtoUserSessionTerminateResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.UserSessionTerminateResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * @interface ProtoUserTwoStepVerificationChangeHint
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserTwoStepVerificationChangeHint.prototype.serializeBinary = function() {
  return proto.proto.UserTwoStepVerificationChangeHint.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserTwoStepVerificationChangeHint}
 */
proto.proto.UserTwoStepVerificationChangeHint.deserializeBinary = function(buffer) {
  return proto.proto.UserTwoStepVerificationChangeHint.decode(buffer);
};

/**
 * Get UserTwoStepVerificationChangeHint request.
 * @memberof ProtoUserTwoStepVerificationChangeHint
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.UserTwoStepVerificationChangeHint.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set UserTwoStepVerificationChangeHint request.
 * @memberof ProtoUserTwoStepVerificationChangeHint
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.UserTwoStepVerificationChangeHint.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get UserTwoStepVerificationChangeHint password.
 * @memberof ProtoUserTwoStepVerificationChangeHint
 * @return {string}
 */
proto.proto.UserTwoStepVerificationChangeHint.prototype.getPassword = function() {
  return this.password;
};

/**
 * Set UserTwoStepVerificationChangeHint password.
 * @memberof ProtoUserTwoStepVerificationChangeHint
 * @param {string} value
 */
proto.proto.UserTwoStepVerificationChangeHint.prototype.setPassword = function(value) {
  this.password = value;
};

/**
 * Get UserTwoStepVerificationChangeHint hint.
 * @memberof ProtoUserTwoStepVerificationChangeHint
 * @return {string}
 */
proto.proto.UserTwoStepVerificationChangeHint.prototype.getHint = function() {
  return this.hint;
};

/**
 * Set UserTwoStepVerificationChangeHint hint.
 * @memberof ProtoUserTwoStepVerificationChangeHint
 * @param {string} value
 */
proto.proto.UserTwoStepVerificationChangeHint.prototype.setHint = function(value) {
  this.hint = value;
};

/**
 * @interface ProtoUserTwoStepVerificationChangeHintResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserTwoStepVerificationChangeHintResponse.prototype.serializeBinary = function() {
  return proto.proto.UserTwoStepVerificationChangeHintResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserTwoStepVerificationChangeHintResponse}
 */
proto.proto.UserTwoStepVerificationChangeHintResponse.deserializeBinary = function(buffer) {
  return proto.proto.UserTwoStepVerificationChangeHintResponse.decode(buffer);
};

/**
 * Get UserTwoStepVerificationChangeHintResponse response.
 * @memberof ProtoUserTwoStepVerificationChangeHintResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.UserTwoStepVerificationChangeHintResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set UserTwoStepVerificationChangeHintResponse response.
 * @memberof ProtoUserTwoStepVerificationChangeHintResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.UserTwoStepVerificationChangeHintResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * @interface ProtoUserTwoStepVerificationChangeRecoveryEmail
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserTwoStepVerificationChangeRecoveryEmail.prototype.serializeBinary = function() {
  return proto.proto.UserTwoStepVerificationChangeRecoveryEmail.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserTwoStepVerificationChangeRecoveryEmail}
 */
proto.proto.UserTwoStepVerificationChangeRecoveryEmail.deserializeBinary = function(buffer) {
  return proto.proto.UserTwoStepVerificationChangeRecoveryEmail.decode(buffer);
};

/**
 * Get UserTwoStepVerificationChangeRecoveryEmail request.
 * @memberof ProtoUserTwoStepVerificationChangeRecoveryEmail
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.UserTwoStepVerificationChangeRecoveryEmail.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set UserTwoStepVerificationChangeRecoveryEmail request.
 * @memberof ProtoUserTwoStepVerificationChangeRecoveryEmail
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.UserTwoStepVerificationChangeRecoveryEmail.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get UserTwoStepVerificationChangeRecoveryEmail password.
 * @memberof ProtoUserTwoStepVerificationChangeRecoveryEmail
 * @return {string}
 */
proto.proto.UserTwoStepVerificationChangeRecoveryEmail.prototype.getPassword = function() {
  return this.password;
};

/**
 * Set UserTwoStepVerificationChangeRecoveryEmail password.
 * @memberof ProtoUserTwoStepVerificationChangeRecoveryEmail
 * @param {string} value
 */
proto.proto.UserTwoStepVerificationChangeRecoveryEmail.prototype.setPassword = function(value) {
  this.password = value;
};

/**
 * Get UserTwoStepVerificationChangeRecoveryEmail email.
 * @memberof ProtoUserTwoStepVerificationChangeRecoveryEmail
 * @return {string}
 */
proto.proto.UserTwoStepVerificationChangeRecoveryEmail.prototype.getEmail = function() {
  return this.email;
};

/**
 * Set UserTwoStepVerificationChangeRecoveryEmail email.
 * @memberof ProtoUserTwoStepVerificationChangeRecoveryEmail
 * @param {string} value
 */
proto.proto.UserTwoStepVerificationChangeRecoveryEmail.prototype.setEmail = function(value) {
  this.email = value;
};

/**
 * @interface ProtoUserTwoStepVerificationChangeRecoveryEmailResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserTwoStepVerificationChangeRecoveryEmailResponse.prototype.serializeBinary = function() {
  return proto.proto.UserTwoStepVerificationChangeRecoveryEmailResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserTwoStepVerificationChangeRecoveryEmailResponse}
 */
proto.proto.UserTwoStepVerificationChangeRecoveryEmailResponse.deserializeBinary = function(buffer) {
  return proto.proto.UserTwoStepVerificationChangeRecoveryEmailResponse.decode(buffer);
};

/**
 * Get UserTwoStepVerificationChangeRecoveryEmailResponse response.
 * @memberof ProtoUserTwoStepVerificationChangeRecoveryEmailResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.UserTwoStepVerificationChangeRecoveryEmailResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set UserTwoStepVerificationChangeRecoveryEmailResponse response.
 * @memberof ProtoUserTwoStepVerificationChangeRecoveryEmailResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.UserTwoStepVerificationChangeRecoveryEmailResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get UserTwoStepVerificationChangeRecoveryEmailResponse unconfirmedEmailPattern.
 * @memberof ProtoUserTwoStepVerificationChangeRecoveryEmailResponse
 * @return {string}
 */
proto.proto.UserTwoStepVerificationChangeRecoveryEmailResponse.prototype.getUnconfirmedEmailPattern = function() {
  return this.unconfirmedEmailPattern;
};

/**
 * Set UserTwoStepVerificationChangeRecoveryEmailResponse unconfirmedEmailPattern.
 * @memberof ProtoUserTwoStepVerificationChangeRecoveryEmailResponse
 * @param {string} value
 */
proto.proto.UserTwoStepVerificationChangeRecoveryEmailResponse.prototype.setUnconfirmedEmailPattern = function(value) {
  this.unconfirmedEmailPattern = value;
};

/**
 * @interface ProtoUserTwoStepVerificationChangeRecoveryQuestion
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserTwoStepVerificationChangeRecoveryQuestion.prototype.serializeBinary = function() {
  return proto.proto.UserTwoStepVerificationChangeRecoveryQuestion.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserTwoStepVerificationChangeRecoveryQuestion}
 */
proto.proto.UserTwoStepVerificationChangeRecoveryQuestion.deserializeBinary = function(buffer) {
  return proto.proto.UserTwoStepVerificationChangeRecoveryQuestion.decode(buffer);
};

/**
 * Get UserTwoStepVerificationChangeRecoveryQuestion request.
 * @memberof ProtoUserTwoStepVerificationChangeRecoveryQuestion
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.UserTwoStepVerificationChangeRecoveryQuestion.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set UserTwoStepVerificationChangeRecoveryQuestion request.
 * @memberof ProtoUserTwoStepVerificationChangeRecoveryQuestion
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.UserTwoStepVerificationChangeRecoveryQuestion.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get UserTwoStepVerificationChangeRecoveryQuestion password.
 * @memberof ProtoUserTwoStepVerificationChangeRecoveryQuestion
 * @return {string}
 */
proto.proto.UserTwoStepVerificationChangeRecoveryQuestion.prototype.getPassword = function() {
  return this.password;
};

/**
 * Set UserTwoStepVerificationChangeRecoveryQuestion password.
 * @memberof ProtoUserTwoStepVerificationChangeRecoveryQuestion
 * @param {string} value
 */
proto.proto.UserTwoStepVerificationChangeRecoveryQuestion.prototype.setPassword = function(value) {
  this.password = value;
};

/**
 * Get UserTwoStepVerificationChangeRecoveryQuestion questionOne.
 * @memberof ProtoUserTwoStepVerificationChangeRecoveryQuestion
 * @return {string}
 */
proto.proto.UserTwoStepVerificationChangeRecoveryQuestion.prototype.getQuestionOne = function() {
  return this.questionOne;
};

/**
 * Set UserTwoStepVerificationChangeRecoveryQuestion questionOne.
 * @memberof ProtoUserTwoStepVerificationChangeRecoveryQuestion
 * @param {string} value
 */
proto.proto.UserTwoStepVerificationChangeRecoveryQuestion.prototype.setQuestionOne = function(value) {
  this.questionOne = value;
};

/**
 * Get UserTwoStepVerificationChangeRecoveryQuestion answerOne.
 * @memberof ProtoUserTwoStepVerificationChangeRecoveryQuestion
 * @return {string}
 */
proto.proto.UserTwoStepVerificationChangeRecoveryQuestion.prototype.getAnswerOne = function() {
  return this.answerOne;
};

/**
 * Set UserTwoStepVerificationChangeRecoveryQuestion answerOne.
 * @memberof ProtoUserTwoStepVerificationChangeRecoveryQuestion
 * @param {string} value
 */
proto.proto.UserTwoStepVerificationChangeRecoveryQuestion.prototype.setAnswerOne = function(value) {
  this.answerOne = value;
};

/**
 * Get UserTwoStepVerificationChangeRecoveryQuestion questionTwo.
 * @memberof ProtoUserTwoStepVerificationChangeRecoveryQuestion
 * @return {string}
 */
proto.proto.UserTwoStepVerificationChangeRecoveryQuestion.prototype.getQuestionTwo = function() {
  return this.questionTwo;
};

/**
 * Set UserTwoStepVerificationChangeRecoveryQuestion questionTwo.
 * @memberof ProtoUserTwoStepVerificationChangeRecoveryQuestion
 * @param {string} value
 */
proto.proto.UserTwoStepVerificationChangeRecoveryQuestion.prototype.setQuestionTwo = function(value) {
  this.questionTwo = value;
};

/**
 * Get UserTwoStepVerificationChangeRecoveryQuestion answerTwo.
 * @memberof ProtoUserTwoStepVerificationChangeRecoveryQuestion
 * @return {string}
 */
proto.proto.UserTwoStepVerificationChangeRecoveryQuestion.prototype.getAnswerTwo = function() {
  return this.answerTwo;
};

/**
 * Set UserTwoStepVerificationChangeRecoveryQuestion answerTwo.
 * @memberof ProtoUserTwoStepVerificationChangeRecoveryQuestion
 * @param {string} value
 */
proto.proto.UserTwoStepVerificationChangeRecoveryQuestion.prototype.setAnswerTwo = function(value) {
  this.answerTwo = value;
};

/**
 * @interface ProtoUserTwoStepVerificationChangeRecoveryQuestionResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserTwoStepVerificationChangeRecoveryQuestionResponse.prototype.serializeBinary = function() {
  return proto.proto.UserTwoStepVerificationChangeRecoveryQuestionResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserTwoStepVerificationChangeRecoveryQuestionResponse}
 */
proto.proto.UserTwoStepVerificationChangeRecoveryQuestionResponse.deserializeBinary = function(buffer) {
  return proto.proto.UserTwoStepVerificationChangeRecoveryQuestionResponse.decode(buffer);
};

/**
 * Get UserTwoStepVerificationChangeRecoveryQuestionResponse response.
 * @memberof ProtoUserTwoStepVerificationChangeRecoveryQuestionResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.UserTwoStepVerificationChangeRecoveryQuestionResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set UserTwoStepVerificationChangeRecoveryQuestionResponse response.
 * @memberof ProtoUserTwoStepVerificationChangeRecoveryQuestionResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.UserTwoStepVerificationChangeRecoveryQuestionResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * @interface ProtoUserTwoStepVerificationCheckPassword
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserTwoStepVerificationCheckPassword.prototype.serializeBinary = function() {
  return proto.proto.UserTwoStepVerificationCheckPassword.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserTwoStepVerificationCheckPassword}
 */
proto.proto.UserTwoStepVerificationCheckPassword.deserializeBinary = function(buffer) {
  return proto.proto.UserTwoStepVerificationCheckPassword.decode(buffer);
};

/**
 * Get UserTwoStepVerificationCheckPassword request.
 * @memberof ProtoUserTwoStepVerificationCheckPassword
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.UserTwoStepVerificationCheckPassword.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set UserTwoStepVerificationCheckPassword request.
 * @memberof ProtoUserTwoStepVerificationCheckPassword
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.UserTwoStepVerificationCheckPassword.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get UserTwoStepVerificationCheckPassword password.
 * @memberof ProtoUserTwoStepVerificationCheckPassword
 * @return {string}
 */
proto.proto.UserTwoStepVerificationCheckPassword.prototype.getPassword = function() {
  return this.password;
};

/**
 * Set UserTwoStepVerificationCheckPassword password.
 * @memberof ProtoUserTwoStepVerificationCheckPassword
 * @param {string} value
 */
proto.proto.UserTwoStepVerificationCheckPassword.prototype.setPassword = function(value) {
  this.password = value;
};

/**
 * @interface ProtoUserTwoStepVerificationCheckPasswordResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserTwoStepVerificationCheckPasswordResponse.prototype.serializeBinary = function() {
  return proto.proto.UserTwoStepVerificationCheckPasswordResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserTwoStepVerificationCheckPasswordResponse}
 */
proto.proto.UserTwoStepVerificationCheckPasswordResponse.deserializeBinary = function(buffer) {
  return proto.proto.UserTwoStepVerificationCheckPasswordResponse.decode(buffer);
};

/**
 * Get UserTwoStepVerificationCheckPasswordResponse response.
 * @memberof ProtoUserTwoStepVerificationCheckPasswordResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.UserTwoStepVerificationCheckPasswordResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set UserTwoStepVerificationCheckPasswordResponse response.
 * @memberof ProtoUserTwoStepVerificationCheckPasswordResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.UserTwoStepVerificationCheckPasswordResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * @interface ProtoUserTwoStepVerificationGetPasswordDetail
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserTwoStepVerificationGetPasswordDetail.prototype.serializeBinary = function() {
  return proto.proto.UserTwoStepVerificationGetPasswordDetail.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserTwoStepVerificationGetPasswordDetail}
 */
proto.proto.UserTwoStepVerificationGetPasswordDetail.deserializeBinary = function(buffer) {
  return proto.proto.UserTwoStepVerificationGetPasswordDetail.decode(buffer);
};

/**
 * Get UserTwoStepVerificationGetPasswordDetail request.
 * @memberof ProtoUserTwoStepVerificationGetPasswordDetail
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.UserTwoStepVerificationGetPasswordDetail.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set UserTwoStepVerificationGetPasswordDetail request.
 * @memberof ProtoUserTwoStepVerificationGetPasswordDetail
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.UserTwoStepVerificationGetPasswordDetail.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * @interface ProtoUserTwoStepVerificationGetPasswordDetailResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserTwoStepVerificationGetPasswordDetailResponse.prototype.serializeBinary = function() {
  return proto.proto.UserTwoStepVerificationGetPasswordDetailResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserTwoStepVerificationGetPasswordDetailResponse}
 */
proto.proto.UserTwoStepVerificationGetPasswordDetailResponse.deserializeBinary = function(buffer) {
  return proto.proto.UserTwoStepVerificationGetPasswordDetailResponse.decode(buffer);
};

/**
 * Get UserTwoStepVerificationGetPasswordDetailResponse response.
 * @memberof ProtoUserTwoStepVerificationGetPasswordDetailResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.UserTwoStepVerificationGetPasswordDetailResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set UserTwoStepVerificationGetPasswordDetailResponse response.
 * @memberof ProtoUserTwoStepVerificationGetPasswordDetailResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.UserTwoStepVerificationGetPasswordDetailResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get UserTwoStepVerificationGetPasswordDetailResponse questionOne.
 * @memberof ProtoUserTwoStepVerificationGetPasswordDetailResponse
 * @return {string}
 */
proto.proto.UserTwoStepVerificationGetPasswordDetailResponse.prototype.getQuestionOne = function() {
  return this.questionOne;
};

/**
 * Set UserTwoStepVerificationGetPasswordDetailResponse questionOne.
 * @memberof ProtoUserTwoStepVerificationGetPasswordDetailResponse
 * @param {string} value
 */
proto.proto.UserTwoStepVerificationGetPasswordDetailResponse.prototype.setQuestionOne = function(value) {
  this.questionOne = value;
};

/**
 * Get UserTwoStepVerificationGetPasswordDetailResponse questionTwo.
 * @memberof ProtoUserTwoStepVerificationGetPasswordDetailResponse
 * @return {string}
 */
proto.proto.UserTwoStepVerificationGetPasswordDetailResponse.prototype.getQuestionTwo = function() {
  return this.questionTwo;
};

/**
 * Set UserTwoStepVerificationGetPasswordDetailResponse questionTwo.
 * @memberof ProtoUserTwoStepVerificationGetPasswordDetailResponse
 * @param {string} value
 */
proto.proto.UserTwoStepVerificationGetPasswordDetailResponse.prototype.setQuestionTwo = function(value) {
  this.questionTwo = value;
};

/**
 * Get UserTwoStepVerificationGetPasswordDetailResponse hint.
 * @memberof ProtoUserTwoStepVerificationGetPasswordDetailResponse
 * @return {string}
 */
proto.proto.UserTwoStepVerificationGetPasswordDetailResponse.prototype.getHint = function() {
  return this.hint;
};

/**
 * Set UserTwoStepVerificationGetPasswordDetailResponse hint.
 * @memberof ProtoUserTwoStepVerificationGetPasswordDetailResponse
 * @param {string} value
 */
proto.proto.UserTwoStepVerificationGetPasswordDetailResponse.prototype.setHint = function(value) {
  this.hint = value;
};

/**
 * Get UserTwoStepVerificationGetPasswordDetailResponse hasConfirmedRecoveryEmail.
 * @memberof ProtoUserTwoStepVerificationGetPasswordDetailResponse
 * @return {boolean}
 */
proto.proto.UserTwoStepVerificationGetPasswordDetailResponse.prototype.getHasConfirmedRecoveryEmail = function() {
  return this.hasConfirmedRecoveryEmail;
};

/**
 * Set UserTwoStepVerificationGetPasswordDetailResponse hasConfirmedRecoveryEmail.
 * @memberof ProtoUserTwoStepVerificationGetPasswordDetailResponse
 * @param {boolean} value
 */
proto.proto.UserTwoStepVerificationGetPasswordDetailResponse.prototype.setHasConfirmedRecoveryEmail = function(value) {
  this.hasConfirmedRecoveryEmail = value;
};

/**
 * Get UserTwoStepVerificationGetPasswordDetailResponse unconfirmedEmailPattern.
 * @memberof ProtoUserTwoStepVerificationGetPasswordDetailResponse
 * @return {string}
 */
proto.proto.UserTwoStepVerificationGetPasswordDetailResponse.prototype.getUnconfirmedEmailPattern = function() {
  return this.unconfirmedEmailPattern;
};

/**
 * Set UserTwoStepVerificationGetPasswordDetailResponse unconfirmedEmailPattern.
 * @memberof ProtoUserTwoStepVerificationGetPasswordDetailResponse
 * @param {string} value
 */
proto.proto.UserTwoStepVerificationGetPasswordDetailResponse.prototype.setUnconfirmedEmailPattern = function(value) {
  this.unconfirmedEmailPattern = value;
};

/**
 * @interface ProtoUserTwoStepVerificationRecoverPasswordByAnswers
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserTwoStepVerificationRecoverPasswordByAnswers.prototype.serializeBinary = function() {
  return proto.proto.UserTwoStepVerificationRecoverPasswordByAnswers.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserTwoStepVerificationRecoverPasswordByAnswers}
 */
proto.proto.UserTwoStepVerificationRecoverPasswordByAnswers.deserializeBinary = function(buffer) {
  return proto.proto.UserTwoStepVerificationRecoverPasswordByAnswers.decode(buffer);
};

/**
 * Get UserTwoStepVerificationRecoverPasswordByAnswers request.
 * @memberof ProtoUserTwoStepVerificationRecoverPasswordByAnswers
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.UserTwoStepVerificationRecoverPasswordByAnswers.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set UserTwoStepVerificationRecoverPasswordByAnswers request.
 * @memberof ProtoUserTwoStepVerificationRecoverPasswordByAnswers
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.UserTwoStepVerificationRecoverPasswordByAnswers.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get UserTwoStepVerificationRecoverPasswordByAnswers answerOne.
 * @memberof ProtoUserTwoStepVerificationRecoverPasswordByAnswers
 * @return {string}
 */
proto.proto.UserTwoStepVerificationRecoverPasswordByAnswers.prototype.getAnswerOne = function() {
  return this.answerOne;
};

/**
 * Set UserTwoStepVerificationRecoverPasswordByAnswers answerOne.
 * @memberof ProtoUserTwoStepVerificationRecoverPasswordByAnswers
 * @param {string} value
 */
proto.proto.UserTwoStepVerificationRecoverPasswordByAnswers.prototype.setAnswerOne = function(value) {
  this.answerOne = value;
};

/**
 * Get UserTwoStepVerificationRecoverPasswordByAnswers answerTwo.
 * @memberof ProtoUserTwoStepVerificationRecoverPasswordByAnswers
 * @return {string}
 */
proto.proto.UserTwoStepVerificationRecoverPasswordByAnswers.prototype.getAnswerTwo = function() {
  return this.answerTwo;
};

/**
 * Set UserTwoStepVerificationRecoverPasswordByAnswers answerTwo.
 * @memberof ProtoUserTwoStepVerificationRecoverPasswordByAnswers
 * @param {string} value
 */
proto.proto.UserTwoStepVerificationRecoverPasswordByAnswers.prototype.setAnswerTwo = function(value) {
  this.answerTwo = value;
};

/**
 * @interface ProtoUserTwoStepVerificationRecoverPasswordByAnswersResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserTwoStepVerificationRecoverPasswordByAnswersResponse.prototype.serializeBinary = function() {
  return proto.proto.UserTwoStepVerificationRecoverPasswordByAnswersResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserTwoStepVerificationRecoverPasswordByAnswersResponse}
 */
proto.proto.UserTwoStepVerificationRecoverPasswordByAnswersResponse.deserializeBinary = function(buffer) {
  return proto.proto.UserTwoStepVerificationRecoverPasswordByAnswersResponse.decode(buffer);
};

/**
 * Get UserTwoStepVerificationRecoverPasswordByAnswersResponse response.
 * @memberof ProtoUserTwoStepVerificationRecoverPasswordByAnswersResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.UserTwoStepVerificationRecoverPasswordByAnswersResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set UserTwoStepVerificationRecoverPasswordByAnswersResponse response.
 * @memberof ProtoUserTwoStepVerificationRecoverPasswordByAnswersResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.UserTwoStepVerificationRecoverPasswordByAnswersResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get UserTwoStepVerificationRecoverPasswordByAnswersResponse token.
 * @memberof ProtoUserTwoStepVerificationRecoverPasswordByAnswersResponse
 * @return {string}
 */
proto.proto.UserTwoStepVerificationRecoverPasswordByAnswersResponse.prototype.getToken = function() {
  return this.token;
};

/**
 * Set UserTwoStepVerificationRecoverPasswordByAnswersResponse token.
 * @memberof ProtoUserTwoStepVerificationRecoverPasswordByAnswersResponse
 * @param {string} value
 */
proto.proto.UserTwoStepVerificationRecoverPasswordByAnswersResponse.prototype.setToken = function(value) {
  this.token = value;
};

/**
 * @interface ProtoUserTwoStepVerificationRecoverPasswordByToken
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserTwoStepVerificationRecoverPasswordByToken.prototype.serializeBinary = function() {
  return proto.proto.UserTwoStepVerificationRecoverPasswordByToken.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserTwoStepVerificationRecoverPasswordByToken}
 */
proto.proto.UserTwoStepVerificationRecoverPasswordByToken.deserializeBinary = function(buffer) {
  return proto.proto.UserTwoStepVerificationRecoverPasswordByToken.decode(buffer);
};

/**
 * Get UserTwoStepVerificationRecoverPasswordByToken request.
 * @memberof ProtoUserTwoStepVerificationRecoverPasswordByToken
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.UserTwoStepVerificationRecoverPasswordByToken.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set UserTwoStepVerificationRecoverPasswordByToken request.
 * @memberof ProtoUserTwoStepVerificationRecoverPasswordByToken
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.UserTwoStepVerificationRecoverPasswordByToken.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get UserTwoStepVerificationRecoverPasswordByToken token.
 * @memberof ProtoUserTwoStepVerificationRecoverPasswordByToken
 * @return {string}
 */
proto.proto.UserTwoStepVerificationRecoverPasswordByToken.prototype.getToken = function() {
  return this.token;
};

/**
 * Set UserTwoStepVerificationRecoverPasswordByToken token.
 * @memberof ProtoUserTwoStepVerificationRecoverPasswordByToken
 * @param {string} value
 */
proto.proto.UserTwoStepVerificationRecoverPasswordByToken.prototype.setToken = function(value) {
  this.token = value;
};

/**
 * @interface ProtoUserTwoStepVerificationRecoverPasswordByTokenResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserTwoStepVerificationRecoverPasswordByTokenResponse.prototype.serializeBinary = function() {
  return proto.proto.UserTwoStepVerificationRecoverPasswordByTokenResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserTwoStepVerificationRecoverPasswordByTokenResponse}
 */
proto.proto.UserTwoStepVerificationRecoverPasswordByTokenResponse.deserializeBinary = function(buffer) {
  return proto.proto.UserTwoStepVerificationRecoverPasswordByTokenResponse.decode(buffer);
};

/**
 * Get UserTwoStepVerificationRecoverPasswordByTokenResponse response.
 * @memberof ProtoUserTwoStepVerificationRecoverPasswordByTokenResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.UserTwoStepVerificationRecoverPasswordByTokenResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set UserTwoStepVerificationRecoverPasswordByTokenResponse response.
 * @memberof ProtoUserTwoStepVerificationRecoverPasswordByTokenResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.UserTwoStepVerificationRecoverPasswordByTokenResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get UserTwoStepVerificationRecoverPasswordByTokenResponse token.
 * @memberof ProtoUserTwoStepVerificationRecoverPasswordByTokenResponse
 * @return {string}
 */
proto.proto.UserTwoStepVerificationRecoverPasswordByTokenResponse.prototype.getToken = function() {
  return this.token;
};

/**
 * Set UserTwoStepVerificationRecoverPasswordByTokenResponse token.
 * @memberof ProtoUserTwoStepVerificationRecoverPasswordByTokenResponse
 * @param {string} value
 */
proto.proto.UserTwoStepVerificationRecoverPasswordByTokenResponse.prototype.setToken = function(value) {
  this.token = value;
};

/**
 * @interface ProtoUserTwoStepVerificationRequestRecoveryToken
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserTwoStepVerificationRequestRecoveryToken.prototype.serializeBinary = function() {
  return proto.proto.UserTwoStepVerificationRequestRecoveryToken.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserTwoStepVerificationRequestRecoveryToken}
 */
proto.proto.UserTwoStepVerificationRequestRecoveryToken.deserializeBinary = function(buffer) {
  return proto.proto.UserTwoStepVerificationRequestRecoveryToken.decode(buffer);
};

/**
 * Get UserTwoStepVerificationRequestRecoveryToken request.
 * @memberof ProtoUserTwoStepVerificationRequestRecoveryToken
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.UserTwoStepVerificationRequestRecoveryToken.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set UserTwoStepVerificationRequestRecoveryToken request.
 * @memberof ProtoUserTwoStepVerificationRequestRecoveryToken
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.UserTwoStepVerificationRequestRecoveryToken.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * @interface ProtoUserTwoStepVerificationRequestRecoveryTokenResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserTwoStepVerificationRequestRecoveryTokenResponse.prototype.serializeBinary = function() {
  return proto.proto.UserTwoStepVerificationRequestRecoveryTokenResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserTwoStepVerificationRequestRecoveryTokenResponse}
 */
proto.proto.UserTwoStepVerificationRequestRecoveryTokenResponse.deserializeBinary = function(buffer) {
  return proto.proto.UserTwoStepVerificationRequestRecoveryTokenResponse.decode(buffer);
};

/**
 * Get UserTwoStepVerificationRequestRecoveryTokenResponse response.
 * @memberof ProtoUserTwoStepVerificationRequestRecoveryTokenResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.UserTwoStepVerificationRequestRecoveryTokenResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set UserTwoStepVerificationRequestRecoveryTokenResponse response.
 * @memberof ProtoUserTwoStepVerificationRequestRecoveryTokenResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.UserTwoStepVerificationRequestRecoveryTokenResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get UserTwoStepVerificationRequestRecoveryTokenResponse emailPattern.
 * @memberof ProtoUserTwoStepVerificationRequestRecoveryTokenResponse
 * @return {string}
 */
proto.proto.UserTwoStepVerificationRequestRecoveryTokenResponse.prototype.getEmailPattern = function() {
  return this.emailPattern;
};

/**
 * Set UserTwoStepVerificationRequestRecoveryTokenResponse emailPattern.
 * @memberof ProtoUserTwoStepVerificationRequestRecoveryTokenResponse
 * @param {string} value
 */
proto.proto.UserTwoStepVerificationRequestRecoveryTokenResponse.prototype.setEmailPattern = function(value) {
  this.emailPattern = value;
};

/**
 * @interface ProtoUserTwoStepVerificationResendVerifyEmail
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserTwoStepVerificationResendVerifyEmail.prototype.serializeBinary = function() {
  return proto.proto.UserTwoStepVerificationResendVerifyEmail.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserTwoStepVerificationResendVerifyEmail}
 */
proto.proto.UserTwoStepVerificationResendVerifyEmail.deserializeBinary = function(buffer) {
  return proto.proto.UserTwoStepVerificationResendVerifyEmail.decode(buffer);
};

/**
 * Get UserTwoStepVerificationResendVerifyEmail request.
 * @memberof ProtoUserTwoStepVerificationResendVerifyEmail
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.UserTwoStepVerificationResendVerifyEmail.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set UserTwoStepVerificationResendVerifyEmail request.
 * @memberof ProtoUserTwoStepVerificationResendVerifyEmail
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.UserTwoStepVerificationResendVerifyEmail.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * @interface ProtoUserTwoStepVerificationResendVerifyEmailResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserTwoStepVerificationResendVerifyEmailResponse.prototype.serializeBinary = function() {
  return proto.proto.UserTwoStepVerificationResendVerifyEmailResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserTwoStepVerificationResendVerifyEmailResponse}
 */
proto.proto.UserTwoStepVerificationResendVerifyEmailResponse.deserializeBinary = function(buffer) {
  return proto.proto.UserTwoStepVerificationResendVerifyEmailResponse.decode(buffer);
};

/**
 * Get UserTwoStepVerificationResendVerifyEmailResponse response.
 * @memberof ProtoUserTwoStepVerificationResendVerifyEmailResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.UserTwoStepVerificationResendVerifyEmailResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set UserTwoStepVerificationResendVerifyEmailResponse response.
 * @memberof ProtoUserTwoStepVerificationResendVerifyEmailResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.UserTwoStepVerificationResendVerifyEmailResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get UserTwoStepVerificationResendVerifyEmailResponse unconfirmedEmailPattern.
 * @memberof ProtoUserTwoStepVerificationResendVerifyEmailResponse
 * @return {string}
 */
proto.proto.UserTwoStepVerificationResendVerifyEmailResponse.prototype.getUnconfirmedEmailPattern = function() {
  return this.unconfirmedEmailPattern;
};

/**
 * Set UserTwoStepVerificationResendVerifyEmailResponse unconfirmedEmailPattern.
 * @memberof ProtoUserTwoStepVerificationResendVerifyEmailResponse
 * @param {string} value
 */
proto.proto.UserTwoStepVerificationResendVerifyEmailResponse.prototype.setUnconfirmedEmailPattern = function(value) {
  this.unconfirmedEmailPattern = value;
};

/**
 * @interface ProtoUserTwoStepVerificationSetPassword
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserTwoStepVerificationSetPassword.prototype.serializeBinary = function() {
  return proto.proto.UserTwoStepVerificationSetPassword.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserTwoStepVerificationSetPassword}
 */
proto.proto.UserTwoStepVerificationSetPassword.deserializeBinary = function(buffer) {
  return proto.proto.UserTwoStepVerificationSetPassword.decode(buffer);
};

/**
 * Get UserTwoStepVerificationSetPassword request.
 * @memberof ProtoUserTwoStepVerificationSetPassword
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.UserTwoStepVerificationSetPassword.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set UserTwoStepVerificationSetPassword request.
 * @memberof ProtoUserTwoStepVerificationSetPassword
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.UserTwoStepVerificationSetPassword.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get UserTwoStepVerificationSetPassword oldPassword.
 * @memberof ProtoUserTwoStepVerificationSetPassword
 * @return {string}
 */
proto.proto.UserTwoStepVerificationSetPassword.prototype.getOldPassword = function() {
  return this.oldPassword;
};

/**
 * Set UserTwoStepVerificationSetPassword oldPassword.
 * @memberof ProtoUserTwoStepVerificationSetPassword
 * @param {string} value
 */
proto.proto.UserTwoStepVerificationSetPassword.prototype.setOldPassword = function(value) {
  this.oldPassword = value;
};

/**
 * Get UserTwoStepVerificationSetPassword newPassword.
 * @memberof ProtoUserTwoStepVerificationSetPassword
 * @return {string}
 */
proto.proto.UserTwoStepVerificationSetPassword.prototype.getNewPassword = function() {
  return this.newPassword;
};

/**
 * Set UserTwoStepVerificationSetPassword newPassword.
 * @memberof ProtoUserTwoStepVerificationSetPassword
 * @param {string} value
 */
proto.proto.UserTwoStepVerificationSetPassword.prototype.setNewPassword = function(value) {
  this.newPassword = value;
};

/**
 * Get UserTwoStepVerificationSetPassword recoveryEmail.
 * @memberof ProtoUserTwoStepVerificationSetPassword
 * @return {string}
 */
proto.proto.UserTwoStepVerificationSetPassword.prototype.getRecoveryEmail = function() {
  return this.recoveryEmail;
};

/**
 * Set UserTwoStepVerificationSetPassword recoveryEmail.
 * @memberof ProtoUserTwoStepVerificationSetPassword
 * @param {string} value
 */
proto.proto.UserTwoStepVerificationSetPassword.prototype.setRecoveryEmail = function(value) {
  this.recoveryEmail = value;
};

/**
 * Get UserTwoStepVerificationSetPassword questionOne.
 * @memberof ProtoUserTwoStepVerificationSetPassword
 * @return {string}
 */
proto.proto.UserTwoStepVerificationSetPassword.prototype.getQuestionOne = function() {
  return this.questionOne;
};

/**
 * Set UserTwoStepVerificationSetPassword questionOne.
 * @memberof ProtoUserTwoStepVerificationSetPassword
 * @param {string} value
 */
proto.proto.UserTwoStepVerificationSetPassword.prototype.setQuestionOne = function(value) {
  this.questionOne = value;
};

/**
 * Get UserTwoStepVerificationSetPassword answerOne.
 * @memberof ProtoUserTwoStepVerificationSetPassword
 * @return {string}
 */
proto.proto.UserTwoStepVerificationSetPassword.prototype.getAnswerOne = function() {
  return this.answerOne;
};

/**
 * Set UserTwoStepVerificationSetPassword answerOne.
 * @memberof ProtoUserTwoStepVerificationSetPassword
 * @param {string} value
 */
proto.proto.UserTwoStepVerificationSetPassword.prototype.setAnswerOne = function(value) {
  this.answerOne = value;
};

/**
 * Get UserTwoStepVerificationSetPassword questionTwo.
 * @memberof ProtoUserTwoStepVerificationSetPassword
 * @return {string}
 */
proto.proto.UserTwoStepVerificationSetPassword.prototype.getQuestionTwo = function() {
  return this.questionTwo;
};

/**
 * Set UserTwoStepVerificationSetPassword questionTwo.
 * @memberof ProtoUserTwoStepVerificationSetPassword
 * @param {string} value
 */
proto.proto.UserTwoStepVerificationSetPassword.prototype.setQuestionTwo = function(value) {
  this.questionTwo = value;
};

/**
 * Get UserTwoStepVerificationSetPassword answerTwo.
 * @memberof ProtoUserTwoStepVerificationSetPassword
 * @return {string}
 */
proto.proto.UserTwoStepVerificationSetPassword.prototype.getAnswerTwo = function() {
  return this.answerTwo;
};

/**
 * Set UserTwoStepVerificationSetPassword answerTwo.
 * @memberof ProtoUserTwoStepVerificationSetPassword
 * @param {string} value
 */
proto.proto.UserTwoStepVerificationSetPassword.prototype.setAnswerTwo = function(value) {
  this.answerTwo = value;
};

/**
 * Get UserTwoStepVerificationSetPassword hint.
 * @memberof ProtoUserTwoStepVerificationSetPassword
 * @return {string}
 */
proto.proto.UserTwoStepVerificationSetPassword.prototype.getHint = function() {
  return this.hint;
};

/**
 * Set UserTwoStepVerificationSetPassword hint.
 * @memberof ProtoUserTwoStepVerificationSetPassword
 * @param {string} value
 */
proto.proto.UserTwoStepVerificationSetPassword.prototype.setHint = function(value) {
  this.hint = value;
};

/**
 * @interface ProtoUserTwoStepVerificationSetPasswordResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserTwoStepVerificationSetPasswordResponse.prototype.serializeBinary = function() {
  return proto.proto.UserTwoStepVerificationSetPasswordResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserTwoStepVerificationSetPasswordResponse}
 */
proto.proto.UserTwoStepVerificationSetPasswordResponse.deserializeBinary = function(buffer) {
  return proto.proto.UserTwoStepVerificationSetPasswordResponse.decode(buffer);
};

/**
 * Get UserTwoStepVerificationSetPasswordResponse response.
 * @memberof ProtoUserTwoStepVerificationSetPasswordResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.UserTwoStepVerificationSetPasswordResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set UserTwoStepVerificationSetPasswordResponse response.
 * @memberof ProtoUserTwoStepVerificationSetPasswordResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.UserTwoStepVerificationSetPasswordResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get UserTwoStepVerificationSetPasswordResponse unconfirmedEmailPattern.
 * @memberof ProtoUserTwoStepVerificationSetPasswordResponse
 * @return {string}
 */
proto.proto.UserTwoStepVerificationSetPasswordResponse.prototype.getUnconfirmedEmailPattern = function() {
  return this.unconfirmedEmailPattern;
};

/**
 * Set UserTwoStepVerificationSetPasswordResponse unconfirmedEmailPattern.
 * @memberof ProtoUserTwoStepVerificationSetPasswordResponse
 * @param {string} value
 */
proto.proto.UserTwoStepVerificationSetPasswordResponse.prototype.setUnconfirmedEmailPattern = function(value) {
  this.unconfirmedEmailPattern = value;
};

/**
 * @interface ProtoUserTwoStepVerificationUnsetPassword
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserTwoStepVerificationUnsetPassword.prototype.serializeBinary = function() {
  return proto.proto.UserTwoStepVerificationUnsetPassword.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserTwoStepVerificationUnsetPassword}
 */
proto.proto.UserTwoStepVerificationUnsetPassword.deserializeBinary = function(buffer) {
  return proto.proto.UserTwoStepVerificationUnsetPassword.decode(buffer);
};

/**
 * Get UserTwoStepVerificationUnsetPassword request.
 * @memberof ProtoUserTwoStepVerificationUnsetPassword
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.UserTwoStepVerificationUnsetPassword.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set UserTwoStepVerificationUnsetPassword request.
 * @memberof ProtoUserTwoStepVerificationUnsetPassword
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.UserTwoStepVerificationUnsetPassword.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get UserTwoStepVerificationUnsetPassword password.
 * @memberof ProtoUserTwoStepVerificationUnsetPassword
 * @return {string}
 */
proto.proto.UserTwoStepVerificationUnsetPassword.prototype.getPassword = function() {
  return this.password;
};

/**
 * Set UserTwoStepVerificationUnsetPassword password.
 * @memberof ProtoUserTwoStepVerificationUnsetPassword
 * @param {string} value
 */
proto.proto.UserTwoStepVerificationUnsetPassword.prototype.setPassword = function(value) {
  this.password = value;
};

/**
 * @interface ProtoUserTwoStepVerificationUnsetPasswordResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserTwoStepVerificationUnsetPasswordResponse.prototype.serializeBinary = function() {
  return proto.proto.UserTwoStepVerificationUnsetPasswordResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserTwoStepVerificationUnsetPasswordResponse}
 */
proto.proto.UserTwoStepVerificationUnsetPasswordResponse.deserializeBinary = function(buffer) {
  return proto.proto.UserTwoStepVerificationUnsetPasswordResponse.decode(buffer);
};

/**
 * Get UserTwoStepVerificationUnsetPasswordResponse response.
 * @memberof ProtoUserTwoStepVerificationUnsetPasswordResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.UserTwoStepVerificationUnsetPasswordResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set UserTwoStepVerificationUnsetPasswordResponse response.
 * @memberof ProtoUserTwoStepVerificationUnsetPasswordResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.UserTwoStepVerificationUnsetPasswordResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * @interface ProtoUserTwoStepVerificationVerifyPassword
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserTwoStepVerificationVerifyPassword.prototype.serializeBinary = function() {
  return proto.proto.UserTwoStepVerificationVerifyPassword.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserTwoStepVerificationVerifyPassword}
 */
proto.proto.UserTwoStepVerificationVerifyPassword.deserializeBinary = function(buffer) {
  return proto.proto.UserTwoStepVerificationVerifyPassword.decode(buffer);
};

/**
 * Get UserTwoStepVerificationVerifyPassword request.
 * @memberof ProtoUserTwoStepVerificationVerifyPassword
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.UserTwoStepVerificationVerifyPassword.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set UserTwoStepVerificationVerifyPassword request.
 * @memberof ProtoUserTwoStepVerificationVerifyPassword
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.UserTwoStepVerificationVerifyPassword.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get UserTwoStepVerificationVerifyPassword password.
 * @memberof ProtoUserTwoStepVerificationVerifyPassword
 * @return {string}
 */
proto.proto.UserTwoStepVerificationVerifyPassword.prototype.getPassword = function() {
  return this.password;
};

/**
 * Set UserTwoStepVerificationVerifyPassword password.
 * @memberof ProtoUserTwoStepVerificationVerifyPassword
 * @param {string} value
 */
proto.proto.UserTwoStepVerificationVerifyPassword.prototype.setPassword = function(value) {
  this.password = value;
};

/**
 * @interface ProtoUserTwoStepVerificationVerifyPasswordResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserTwoStepVerificationVerifyPasswordResponse.prototype.serializeBinary = function() {
  return proto.proto.UserTwoStepVerificationVerifyPasswordResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserTwoStepVerificationVerifyPasswordResponse}
 */
proto.proto.UserTwoStepVerificationVerifyPasswordResponse.deserializeBinary = function(buffer) {
  return proto.proto.UserTwoStepVerificationVerifyPasswordResponse.decode(buffer);
};

/**
 * Get UserTwoStepVerificationVerifyPasswordResponse response.
 * @memberof ProtoUserTwoStepVerificationVerifyPasswordResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.UserTwoStepVerificationVerifyPasswordResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set UserTwoStepVerificationVerifyPasswordResponse response.
 * @memberof ProtoUserTwoStepVerificationVerifyPasswordResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.UserTwoStepVerificationVerifyPasswordResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get UserTwoStepVerificationVerifyPasswordResponse token.
 * @memberof ProtoUserTwoStepVerificationVerifyPasswordResponse
 * @return {string}
 */
proto.proto.UserTwoStepVerificationVerifyPasswordResponse.prototype.getToken = function() {
  return this.token;
};

/**
 * Set UserTwoStepVerificationVerifyPasswordResponse token.
 * @memberof ProtoUserTwoStepVerificationVerifyPasswordResponse
 * @param {string} value
 */
proto.proto.UserTwoStepVerificationVerifyPasswordResponse.prototype.setToken = function(value) {
  this.token = value;
};

/**
 * @interface ProtoUserTwoStepVerificationVerifyRecoveryEmail
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserTwoStepVerificationVerifyRecoveryEmail.prototype.serializeBinary = function() {
  return proto.proto.UserTwoStepVerificationVerifyRecoveryEmail.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserTwoStepVerificationVerifyRecoveryEmail}
 */
proto.proto.UserTwoStepVerificationVerifyRecoveryEmail.deserializeBinary = function(buffer) {
  return proto.proto.UserTwoStepVerificationVerifyRecoveryEmail.decode(buffer);
};

/**
 * Get UserTwoStepVerificationVerifyRecoveryEmail request.
 * @memberof ProtoUserTwoStepVerificationVerifyRecoveryEmail
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.UserTwoStepVerificationVerifyRecoveryEmail.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set UserTwoStepVerificationVerifyRecoveryEmail request.
 * @memberof ProtoUserTwoStepVerificationVerifyRecoveryEmail
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.UserTwoStepVerificationVerifyRecoveryEmail.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get UserTwoStepVerificationVerifyRecoveryEmail token.
 * @memberof ProtoUserTwoStepVerificationVerifyRecoveryEmail
 * @return {string}
 */
proto.proto.UserTwoStepVerificationVerifyRecoveryEmail.prototype.getToken = function() {
  return this.token;
};

/**
 * Set UserTwoStepVerificationVerifyRecoveryEmail token.
 * @memberof ProtoUserTwoStepVerificationVerifyRecoveryEmail
 * @param {string} value
 */
proto.proto.UserTwoStepVerificationVerifyRecoveryEmail.prototype.setToken = function(value) {
  this.token = value;
};

/**
 * @interface ProtoUserTwoStepVerificationVerifyRecoveryEmailResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserTwoStepVerificationVerifyRecoveryEmailResponse.prototype.serializeBinary = function() {
  return proto.proto.UserTwoStepVerificationVerifyRecoveryEmailResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserTwoStepVerificationVerifyRecoveryEmailResponse}
 */
proto.proto.UserTwoStepVerificationVerifyRecoveryEmailResponse.deserializeBinary = function(buffer) {
  return proto.proto.UserTwoStepVerificationVerifyRecoveryEmailResponse.decode(buffer);
};

/**
 * Get UserTwoStepVerificationVerifyRecoveryEmailResponse response.
 * @memberof ProtoUserTwoStepVerificationVerifyRecoveryEmailResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.UserTwoStepVerificationVerifyRecoveryEmailResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set UserTwoStepVerificationVerifyRecoveryEmailResponse response.
 * @memberof ProtoUserTwoStepVerificationVerifyRecoveryEmailResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.UserTwoStepVerificationVerifyRecoveryEmailResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * @interface ProtoUserUpdateStatus
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserUpdateStatus.prototype.serializeBinary = function() {
  return proto.proto.UserUpdateStatus.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserUpdateStatus}
 */
proto.proto.UserUpdateStatus.deserializeBinary = function(buffer) {
  return proto.proto.UserUpdateStatus.decode(buffer);
};

/**
 * Get UserUpdateStatus request.
 * @memberof ProtoUserUpdateStatus
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.UserUpdateStatus.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set UserUpdateStatus request.
 * @memberof ProtoUserUpdateStatus
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.UserUpdateStatus.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get UserUpdateStatus status.
 * @memberof ProtoUserUpdateStatus
 * @return {ProtoUserUpdateStatus_Status}
 */
proto.proto.UserUpdateStatus.prototype.getStatus = function() {
  return this.status;
};

/**
 * Set UserUpdateStatus status.
 * @memberof ProtoUserUpdateStatus
 * @param {ProtoUserUpdateStatus_Status} value
 */
proto.proto.UserUpdateStatus.prototype.setStatus = function(value) {
  this.status = value;
};

/**
 * @typedef {number} ProtoUserUpdateStatus_Status
 */

/**
 * Status enum.
 * @enum {ProtoUserUpdateStatus_Status}
 * @memberof ProtoUserUpdateStatus
 */
proto.proto.UserUpdateStatus.Status = proto.proto.UserUpdateStatus.prototype.Status = {
  ONLINE : 0,
  OFFLINE : 1,
};

/**
 * @interface ProtoUserUpdateStatusResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserUpdateStatusResponse.prototype.serializeBinary = function() {
  return proto.proto.UserUpdateStatusResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserUpdateStatusResponse}
 */
proto.proto.UserUpdateStatusResponse.deserializeBinary = function(buffer) {
  return proto.proto.UserUpdateStatusResponse.decode(buffer);
};

/**
 * Get UserUpdateStatusResponse response.
 * @memberof ProtoUserUpdateStatusResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.UserUpdateStatusResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set UserUpdateStatusResponse response.
 * @memberof ProtoUserUpdateStatusResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.UserUpdateStatusResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get UserUpdateStatusResponse status.
 * @memberof ProtoUserUpdateStatusResponse
 * @return {ProtoUserUpdateStatus_Status}
 */
proto.proto.UserUpdateStatusResponse.prototype.getStatus = function() {
  return this.status;
};

/**
 * Set UserUpdateStatusResponse status.
 * @memberof ProtoUserUpdateStatusResponse
 * @param {ProtoUserUpdateStatus_Status} value
 */
proto.proto.UserUpdateStatusResponse.prototype.setStatus = function(value) {
  this.status = value;
};

/**
 * Get UserUpdateStatusResponse userId.
 * @memberof ProtoUserUpdateStatusResponse
 * @return {Long}
 */
proto.proto.UserUpdateStatusResponse.prototype.getUserId = function() {
  return this.userId;
};

/**
 * Set UserUpdateStatusResponse userId.
 * @memberof ProtoUserUpdateStatusResponse
 * @param {Long} value
 */
proto.proto.UserUpdateStatusResponse.prototype.setUserId = function(value) {
  this.userId = value;
};

/**
 * @interface ProtoUserUsernameToId
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserUsernameToId.prototype.serializeBinary = function() {
  return proto.proto.UserUsernameToId.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserUsernameToId}
 */
proto.proto.UserUsernameToId.deserializeBinary = function(buffer) {
  return proto.proto.UserUsernameToId.decode(buffer);
};

/**
 * Get UserUsernameToId request.
 * @memberof ProtoUserUsernameToId
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.UserUsernameToId.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set UserUsernameToId request.
 * @memberof ProtoUserUsernameToId
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.UserUsernameToId.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get UserUsernameToId username.
 * @memberof ProtoUserUsernameToId
 * @return {string}
 */
proto.proto.UserUsernameToId.prototype.getUsername = function() {
  return this.username;
};

/**
 * Set UserUsernameToId username.
 * @memberof ProtoUserUsernameToId
 * @param {string} value
 */
proto.proto.UserUsernameToId.prototype.setUsername = function(value) {
  this.username = value;
};

/**
 * @interface ProtoUserUsernameToIdResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserUsernameToIdResponse.prototype.serializeBinary = function() {
  return proto.proto.UserUsernameToIdResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserUsernameToIdResponse}
 */
proto.proto.UserUsernameToIdResponse.deserializeBinary = function(buffer) {
  return proto.proto.UserUsernameToIdResponse.decode(buffer);
};

/**
 * Get UserUsernameToIdResponse response.
 * @memberof ProtoUserUsernameToIdResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.UserUsernameToIdResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set UserUsernameToIdResponse response.
 * @memberof ProtoUserUsernameToIdResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.UserUsernameToIdResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get UserUsernameToIdResponse userId.
 * @memberof ProtoUserUsernameToIdResponse
 * @return {Long}
 */
proto.proto.UserUsernameToIdResponse.prototype.getUserId = function() {
  return this.userId;
};

/**
 * Set UserUsernameToIdResponse userId.
 * @memberof ProtoUserUsernameToIdResponse
 * @param {Long} value
 */
proto.proto.UserUsernameToIdResponse.prototype.setUserId = function(value) {
  this.userId = value;
};

/**
 * @interface ProtoUserVerify
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserVerify.prototype.serializeBinary = function() {
  return proto.proto.UserVerify.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserVerify}
 */
proto.proto.UserVerify.deserializeBinary = function(buffer) {
  return proto.proto.UserVerify.decode(buffer);
};

/**
 * Get UserVerify request.
 * @memberof ProtoUserVerify
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.UserVerify.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set UserVerify request.
 * @memberof ProtoUserVerify
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.UserVerify.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get UserVerify code.
 * @memberof ProtoUserVerify
 * @return {number}
 */
proto.proto.UserVerify.prototype.getCode = function() {
  return this.code;
};

/**
 * Set UserVerify code.
 * @memberof ProtoUserVerify
 * @param {number} value
 */
proto.proto.UserVerify.prototype.setCode = function(value) {
  this.code = value;
};

/**
 * Get UserVerify username.
 * @memberof ProtoUserVerify
 * @return {string}
 */
proto.proto.UserVerify.prototype.getUsername = function() {
  return this.username;
};

/**
 * Set UserVerify username.
 * @memberof ProtoUserVerify
 * @param {string} value
 */
proto.proto.UserVerify.prototype.setUsername = function(value) {
  this.username = value;
};

/**
 * @interface ProtoUserVerifyResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserVerifyResponse.prototype.serializeBinary = function() {
  return proto.proto.UserVerifyResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserVerifyResponse}
 */
proto.proto.UserVerifyResponse.deserializeBinary = function(buffer) {
  return proto.proto.UserVerifyResponse.decode(buffer);
};

/**
 * Get UserVerifyResponse response.
 * @memberof ProtoUserVerifyResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.UserVerifyResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set UserVerifyResponse response.
 * @memberof ProtoUserVerifyResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.UserVerifyResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get UserVerifyResponse token.
 * @memberof ProtoUserVerifyResponse
 * @return {string}
 */
proto.proto.UserVerifyResponse.prototype.getToken = function() {
  return this.token;
};

/**
 * Set UserVerifyResponse token.
 * @memberof ProtoUserVerifyResponse
 * @param {string} value
 */
proto.proto.UserVerifyResponse.prototype.setToken = function(value) {
  this.token = value;
};

/**
 * Get UserVerifyResponse newUser.
 * @memberof ProtoUserVerifyResponse
 * @return {boolean}
 */
proto.proto.UserVerifyResponse.prototype.getNewUser = function() {
  return this.newUser;
};

/**
 * Set UserVerifyResponse newUser.
 * @memberof ProtoUserVerifyResponse
 * @param {boolean} value
 */
proto.proto.UserVerifyResponse.prototype.setNewUser = function(value) {
  this.newUser = value;
};

/**
 * @interface ProtoUserVerifyNewDevice
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserVerifyNewDevice.prototype.serializeBinary = function() {
  return proto.proto.UserVerifyNewDevice.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserVerifyNewDevice}
 */
proto.proto.UserVerifyNewDevice.deserializeBinary = function(buffer) {
  return proto.proto.UserVerifyNewDevice.decode(buffer);
};

/**
 * Get UserVerifyNewDevice request.
 * @memberof ProtoUserVerifyNewDevice
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.UserVerifyNewDevice.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set UserVerifyNewDevice request.
 * @memberof ProtoUserVerifyNewDevice
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.UserVerifyNewDevice.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * Get UserVerifyNewDevice token.
 * @memberof ProtoUserVerifyNewDevice
 * @return {string}
 */
proto.proto.UserVerifyNewDevice.prototype.getToken = function() {
  return this.token;
};

/**
 * Set UserVerifyNewDevice token.
 * @memberof ProtoUserVerifyNewDevice
 * @param {string} value
 */
proto.proto.UserVerifyNewDevice.prototype.setToken = function(value) {
  this.token = value;
};

/**
 * @interface ProtoUserVerifyNewDeviceResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.UserVerifyNewDeviceResponse.prototype.serializeBinary = function() {
  return proto.proto.UserVerifyNewDeviceResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoUserVerifyNewDeviceResponse}
 */
proto.proto.UserVerifyNewDeviceResponse.deserializeBinary = function(buffer) {
  return proto.proto.UserVerifyNewDeviceResponse.decode(buffer);
};

/**
 * Get UserVerifyNewDeviceResponse response.
 * @memberof ProtoUserVerifyNewDeviceResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.UserVerifyNewDeviceResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set UserVerifyNewDeviceResponse response.
 * @memberof ProtoUserVerifyNewDeviceResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.UserVerifyNewDeviceResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get UserVerifyNewDeviceResponse appName.
 * @memberof ProtoUserVerifyNewDeviceResponse
 * @return {string}
 */
proto.proto.UserVerifyNewDeviceResponse.prototype.getAppName = function() {
  return this.appName;
};

/**
 * Set UserVerifyNewDeviceResponse appName.
 * @memberof ProtoUserVerifyNewDeviceResponse
 * @param {string} value
 */
proto.proto.UserVerifyNewDeviceResponse.prototype.setAppName = function(value) {
  this.appName = value;
};

/**
 * Get UserVerifyNewDeviceResponse appId.
 * @memberof ProtoUserVerifyNewDeviceResponse
 * @return {number}
 */
proto.proto.UserVerifyNewDeviceResponse.prototype.getAppId = function() {
  return this.appId;
};

/**
 * Set UserVerifyNewDeviceResponse appId.
 * @memberof ProtoUserVerifyNewDeviceResponse
 * @param {number} value
 */
proto.proto.UserVerifyNewDeviceResponse.prototype.setAppId = function(value) {
  this.appId = value;
};

/**
 * Get UserVerifyNewDeviceResponse appBuildVersion.
 * @memberof ProtoUserVerifyNewDeviceResponse
 * @return {number}
 */
proto.proto.UserVerifyNewDeviceResponse.prototype.getAppBuildVersion = function() {
  return this.appBuildVersion;
};

/**
 * Set UserVerifyNewDeviceResponse appBuildVersion.
 * @memberof ProtoUserVerifyNewDeviceResponse
 * @param {number} value
 */
proto.proto.UserVerifyNewDeviceResponse.prototype.setAppBuildVersion = function(value) {
  this.appBuildVersion = value;
};

/**
 * Get UserVerifyNewDeviceResponse appVersion.
 * @memberof ProtoUserVerifyNewDeviceResponse
 * @return {string}
 */
proto.proto.UserVerifyNewDeviceResponse.prototype.getAppVersion = function() {
  return this.appVersion;
};

/**
 * Set UserVerifyNewDeviceResponse appVersion.
 * @memberof ProtoUserVerifyNewDeviceResponse
 * @param {string} value
 */
proto.proto.UserVerifyNewDeviceResponse.prototype.setAppVersion = function(value) {
  this.appVersion = value;
};

/**
 * Get UserVerifyNewDeviceResponse platform.
 * @memberof ProtoUserVerifyNewDeviceResponse
 * @return {ProtoPlatform}
 */
proto.proto.UserVerifyNewDeviceResponse.prototype.getPlatform = function() {
  return this.platform;
};

/**
 * Set UserVerifyNewDeviceResponse platform.
 * @memberof ProtoUserVerifyNewDeviceResponse
 * @param {ProtoPlatform} value
 */
proto.proto.UserVerifyNewDeviceResponse.prototype.setPlatform = function(value) {
  this.platform = value;
};

/**
 * Get UserVerifyNewDeviceResponse platformVersion.
 * @memberof ProtoUserVerifyNewDeviceResponse
 * @return {string}
 */
proto.proto.UserVerifyNewDeviceResponse.prototype.getPlatformVersion = function() {
  return this.platformVersion;
};

/**
 * Set UserVerifyNewDeviceResponse platformVersion.
 * @memberof ProtoUserVerifyNewDeviceResponse
 * @param {string} value
 */
proto.proto.UserVerifyNewDeviceResponse.prototype.setPlatformVersion = function(value) {
  this.platformVersion = value;
};

/**
 * Get UserVerifyNewDeviceResponse device.
 * @memberof ProtoUserVerifyNewDeviceResponse
 * @return {ProtoDevice}
 */
proto.proto.UserVerifyNewDeviceResponse.prototype.getDevice = function() {
  return this.device;
};

/**
 * Set UserVerifyNewDeviceResponse device.
 * @memberof ProtoUserVerifyNewDeviceResponse
 * @param {ProtoDevice} value
 */
proto.proto.UserVerifyNewDeviceResponse.prototype.setDevice = function(value) {
  this.device = value;
};

/**
 * Get UserVerifyNewDeviceResponse deviceName.
 * @memberof ProtoUserVerifyNewDeviceResponse
 * @return {string}
 */
proto.proto.UserVerifyNewDeviceResponse.prototype.getDeviceName = function() {
  return this.deviceName;
};

/**
 * Set UserVerifyNewDeviceResponse deviceName.
 * @memberof ProtoUserVerifyNewDeviceResponse
 * @param {string} value
 */
proto.proto.UserVerifyNewDeviceResponse.prototype.setDeviceName = function(value) {
  this.deviceName = value;
};

/**
 * Get UserVerifyNewDeviceResponse twoStepVerification.
 * @memberof ProtoUserVerifyNewDeviceResponse
 * @return {boolean}
 */
proto.proto.UserVerifyNewDeviceResponse.prototype.getTwoStepVerification = function() {
  return this.twoStepVerification;
};

/**
 * Set UserVerifyNewDeviceResponse twoStepVerification.
 * @memberof ProtoUserVerifyNewDeviceResponse
 * @param {boolean} value
 */
proto.proto.UserVerifyNewDeviceResponse.prototype.setTwoStepVerification = function(value) {
  this.twoStepVerification = value;
};

/**
 * @interface ProtoWalletGetAccessToken
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.WalletGetAccessToken.prototype.serializeBinary = function() {
  return proto.proto.WalletGetAccessToken.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoWalletGetAccessToken}
 */
proto.proto.WalletGetAccessToken.deserializeBinary = function(buffer) {
  return proto.proto.WalletGetAccessToken.decode(buffer);
};

/**
 * Get WalletGetAccessToken request.
 * @memberof ProtoWalletGetAccessToken
 * @return {(ProtoRequest|null|undefined)}
 */
proto.proto.WalletGetAccessToken.prototype.getRequest = function() {
  return this.request;
};

/**
 * Set WalletGetAccessToken request.
 * @memberof ProtoWalletGetAccessToken
 * @param {(ProtoRequest|null|undefined)} value
 */
proto.proto.WalletGetAccessToken.prototype.setRequest = function(value) {
  this.request = value;
};

/**
 * @interface ProtoWalletGetAccessTokenResponse
 */

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {Uint8Array}
 */
proto.proto.WalletGetAccessTokenResponse.prototype.serializeBinary = function() {
  return proto.proto.WalletGetAccessTokenResponse.encode(this).finish();
};

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {Uint8Array} buffer
 * @return {ProtoWalletGetAccessTokenResponse}
 */
proto.proto.WalletGetAccessTokenResponse.deserializeBinary = function(buffer) {
  return proto.proto.WalletGetAccessTokenResponse.decode(buffer);
};

/**
 * Get WalletGetAccessTokenResponse response.
 * @memberof ProtoWalletGetAccessTokenResponse
 * @return {(ProtoResponse|null|undefined)}
 */
proto.proto.WalletGetAccessTokenResponse.prototype.getResponse = function() {
  return this.response;
};

/**
 * Set WalletGetAccessTokenResponse response.
 * @memberof ProtoWalletGetAccessTokenResponse
 * @param {(ProtoResponse|null|undefined)} value
 */
proto.proto.WalletGetAccessTokenResponse.prototype.setResponse = function(value) {
  this.response = value;
};

/**
 * Get WalletGetAccessTokenResponse tokenType.
 * @memberof ProtoWalletGetAccessTokenResponse
 * @return {ProtoWalletGetAccessTokenResponse_TokenType}
 */
proto.proto.WalletGetAccessTokenResponse.prototype.getTokenType = function() {
  return this.tokenType;
};

/**
 * Set WalletGetAccessTokenResponse tokenType.
 * @memberof ProtoWalletGetAccessTokenResponse
 * @param {ProtoWalletGetAccessTokenResponse_TokenType} value
 */
proto.proto.WalletGetAccessTokenResponse.prototype.setTokenType = function(value) {
  this.tokenType = value;
};

/**
 * Get WalletGetAccessTokenResponse accessToken.
 * @memberof ProtoWalletGetAccessTokenResponse
 * @return {string}
 */
proto.proto.WalletGetAccessTokenResponse.prototype.getAccessToken = function() {
  return this.accessToken;
};

/**
 * Set WalletGetAccessTokenResponse accessToken.
 * @memberof ProtoWalletGetAccessTokenResponse
 * @param {string} value
 */
proto.proto.WalletGetAccessTokenResponse.prototype.setAccessToken = function(value) {
  this.accessToken = value;
};

/**
 * Get WalletGetAccessTokenResponse expiresIn.
 * @memberof ProtoWalletGetAccessTokenResponse
 * @return {number}
 */
proto.proto.WalletGetAccessTokenResponse.prototype.getExpiresIn = function() {
  return this.expiresIn;
};

/**
 * Set WalletGetAccessTokenResponse expiresIn.
 * @memberof ProtoWalletGetAccessTokenResponse
 * @param {number} value
 */
proto.proto.WalletGetAccessTokenResponse.prototype.setExpiresIn = function(value) {
  this.expiresIn = value;
};

/**
 * @typedef {number} ProtoWalletGetAccessTokenResponse_TokenType
 */

/**
 * TokenType enum.
 * @enum {ProtoWalletGetAccessTokenResponse_TokenType}
 * @memberof ProtoWalletGetAccessTokenResponse
 */
proto.proto.WalletGetAccessTokenResponse.TokenType = proto.proto.WalletGetAccessTokenResponse.prototype.TokenType = {
  BEARER : 0,
};

export default proto;