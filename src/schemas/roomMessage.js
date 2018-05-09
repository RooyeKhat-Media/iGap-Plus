/**
 * @flow
 */

import {schema} from 'normalizr';
import {objectToLong, objectToUint8Array} from '../utils/core';
import {Proto} from '../modules/Proto/index';

/**
 * @typedef {{id:string, longId:Long, messageVersion: Long, status: (ProtoRegisteredUser_Status|ProtoRoomMessageStatus|ProtoChannelCheckUsernameResponse_Status|ProtoConnectionSymmetricKeyResponse_Status|ProtoFileUploadStatusResponse_Status|ProtoGroupCheckUsernameResponse_Status|*), statusVersion: Long, messageType: ProtoRoomMessageType, message: (string|ProtoRoomMessage|null|undefined|string|Object), attachment: (ProtoFile|null|undefined|string), authorHash: (string|null), location: (ProtoRoomMessageLocation|null|undefined), log: (ProtoRoomMessageLog|null|undefined), contact: (ProtoRoomMessageContact|null|undefined), edited: boolean, createTime: number, updateTime: number, deleted: boolean, forwardFrom: (ProtoRoomMessage|null|undefined|ProtoRoomMessageForwardFrom), replyTo: (ProtoRoomMessage|null|undefined|Long), previousMessageId: Long}} FlatRoomMessage
 */

/**
 * @param {ProtoRoomMessage} roomMessage
 * @return {FlatRoomMessage|null}
 */
export const flatProtoRoomMessage = (roomMessage) => {
  if (!roomMessage) {
    return null;
  }

  const author = roomMessage.getAuthor();
  const flat = {
    id: roomMessage.getMessageId().toString(),
    longId: roomMessage.getMessageId(),
    messageVersion: roomMessage.getMessageVersion().toString(),
    status: roomMessage.getStatus(),
    statusVersion: roomMessage.getStatusVersion().toString(),
    messageType: roomMessage.getMessageType(),
    message: roomMessage.getMessage(),
    attachment: roomMessage.getAttachment(),
    authorHash: author ? author.getHash() : null,
    location: roomMessage.getLocation(),
    log: roomMessage.getLog(),
    contact: roomMessage.getContact(),
    edited: roomMessage.getEdited(),
    createTime: roomMessage.getCreateTime(),
    updateTime: roomMessage.getUpdateTime(),
    deleted: roomMessage.getDeleted(),
    forwardFrom: flatProtoRoomMessage(roomMessage.getForwardFrom()),
    replyTo: roomMessage.getReplyTo(),
    previousMessageId: roomMessage.getPreviousMessageId().toString(),
    fraction: roomMessage.getPreviousMessageId().toString() !== '0',
  };

  if (author) {
    if (author.getUser()) {
      flat.authorUser = author.getUser().getUserId().toString();
      flat.authorUserCacheId = author.getUser().getCacheId();
    }

    if (author.getRoom()) {
      flat.authorRoom = author.getRoom().getRoomId().toString();
    }
  }

  const ce = roomMessage.getChannelExtra();
  if (ce) {
    flat.channelSignature = ce.getSignature();
    flat.channelViewsLabel = ce.getViewsLabel();
    flat.channelThumbsUpLabel = ce.getThumbsUpLabel();
    flat.channelThumbsDownLabel = ce.getThumbsDownLabel();
  }

  return flat;
};


/**
 * MUST BE PURE FUNCTION
 * Convert normalized roomMessage to serializable object
 * @param {FlatRoomMessage} normalizedRoomMessage
 * @return object
 */
export const normalizedRoomMessageToSerializableRoomMessage = (normalizedRoomMessage) => {
  return {
    ...normalizedRoomMessage,
    attachment: normalizedRoomMessage.attachment ? normalizedRoomMessage.attachment.serializeBinary() : null,
    location: normalizedRoomMessage.location ? normalizedRoomMessage.location.serializeBinary() : null,
    log: normalizedRoomMessage.log ? normalizedRoomMessage.log.serializeBinary() : null,
    contact: normalizedRoomMessage.contact ? normalizedRoomMessage.contact.serializeBinary() : null,
    forwardFrom: normalizedRoomMessage.forwardFrom ? normalizedRoomMessageToSerializableRoomMessage(normalizedRoomMessage.forwardFrom) : null,
  };
};

/**
 * Convert serializable object to normalized roomMessage
 * @param {object} serializableRoomMessage
 * @return {FlatRoomMessage}
 */
export const serializableRoomMessageToNormalizedRoomMessage = (serializableRoomMessage) => {
  return {
    ...serializableRoomMessage,
    longId: objectToLong(serializableRoomMessage.longId),

    attachment: serializableRoomMessage.attachment ? Proto.File.deserializeBinary(objectToUint8Array(serializableRoomMessage.attachment)) : null,
    location: serializableRoomMessage.location ? Proto.RoomMessageLocation.deserializeBinary(objectToUint8Array(serializableRoomMessage.location)) : null,
    log: serializableRoomMessage.log ? Proto.RoomMessageLog.deserializeBinary(objectToUint8Array(serializableRoomMessage.log)) : null,
    contact: serializableRoomMessage.contact ? Proto.RoomMessageContact.deserializeBinary(objectToUint8Array(serializableRoomMessage.contact)) : null,
    forwardFrom: serializableRoomMessage.forwardFrom ? serializableRoomMessageToNormalizedRoomMessage(serializableRoomMessage.forwardFrom) : null,
  };
};


/**
 * @param {ProtoRoomMessage} roomMessage
 * @param {object} parent
 * @param {string} key
 * @return {*}
 */
const roomMessageProcessStrategy = (roomMessage, parent, key) => flatProtoRoomMessage(roomMessage);

const roomMessage = new schema.Entity('roomMessages', {}, {
  processStrategy: roomMessageProcessStrategy,
  idAttribute: function(value) {
    return value.getMessageId().toString();
  },
});

/**
 * @typedef {Object.<string,FlatRoomMessage>} NormalizedRoomMessageEntities
 */

/**
 * @typedef {{entities:{roomMessages:NormalizedRoomMessageEntities}}} NormalizedRoomMessageFullEntities
 */

roomMessage.define({
  replyTo: roomMessage,
});

export default roomMessage;