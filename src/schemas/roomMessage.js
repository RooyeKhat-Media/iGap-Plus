/**
 * @flow
 */

import {schema} from 'normalizr';

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
    messageVersion: roomMessage.getMessageVersion(),
    status: roomMessage.getStatus(),
    statusVersion: roomMessage.getStatusVersion(),
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
    forwardFrom: roomMessage.getForwardFrom(),
    replyTo: roomMessage.getReplyTo(),
    previousMessageId: roomMessage.getPreviousMessageId(),
  };

  if (author) {
    if (author.getUser()) {
      flat.authorUser = roomMessage.getAuthor().getUser().getUserId();
    }

    if (author.getRoom()) {
      flat.authorUser = roomMessage.getAuthor().getRoom().getRoomId();
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
 * @param {ProtoRoomMessage} roomMessage
 * @param {object} parent
 * @param {string} key
 * @return {*}
 */
const roomMessageProcessStrategy = (roomMessage, parent, key) => flatProtoRoomMessage(roomMessage);

const roomMessage = new schema.Entity('roomMessages', {}, {
  processStrategy: roomMessageProcessStrategy,
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