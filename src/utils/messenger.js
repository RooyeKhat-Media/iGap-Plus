import {
  CHANNEL_DELETE_MESSAGE,
  CHANNEL_EDIT_MESSAGE,
  CHANNEL_SEND_MESSAGE,
  CHAT_DELETE_MESSAGE,
  CHAT_EDIT_MESSAGE,
  CHAT_GET_ROOM,
  CHAT_SEND_MESSAGE,
  GROUP_DELETE_MESSAGE,
  GROUP_EDIT_MESSAGE,
  GROUP_SEND_MESSAGE,
} from '../constants/methods/index';
import {
  ChannelDeleteMessage,
  ChannelEditMessage,
  ChannelSendMessage,
  ChatDeleteMessage,
  ChatEditMessage,
  ChatGetRoom,
  ChatSendMessage,
  GroupDeleteMessage,
  GroupEditMessage,
  GroupSendMessage,
  Proto,
} from '../modules/Proto/index';
import putUserState from '../modules/Entities/RegisteredUsers';
import store from '../configureStore';
import Api from '../modules/Api/index';
import i18n from '../i18n';
import {getAuthorHash, getFakeMessageId, getRoomHistoryUploadIdPrefix, getUserId, prepareRoomMessage} from './app';
import {
  ROOM_MESSAGE_ATTACHMENT_TYPE_AUDIO,
  ROOM_MESSAGE_ATTACHMENT_TYPE_FILE,
  ROOM_MESSAGE_ATTACHMENT_TYPE_IMAGE,
  ROOM_MESSAGE_ATTACHMENT_TYPE_VIDEO,
} from '../constants/app';
import {tNow} from './core';
import {
  messengerRoomMessageConcat,
  messengerRoomMessageRemove,
  messengerRoomMessageReplace,
} from '../actions/messenger/roomMessages';

import {normalize} from 'normalizr';
import Long from 'long';
import roomMessageSchema from '../schemas/roomMessage';
import {entitiesRoomMessageRemove, entitiesRoomMessagesAdd} from '../actions/entities/roomMessages';
import {fileManagerUpload, fileManagerUploadDisposed} from '../actions/fileManager';

/**
 * @param {string} userId
 * @returns {Promise.<string>}
 */
export async function chatGetRoom(userId) {
  await putUserState(userId);
  const user = store.getState().entities.registeredUsers[userId];
  const chatGetRoom = new ChatGetRoom();
  chatGetRoom.setPeerId(user.longId);

  const chatGetRoomResponse = await Api.invoke(CHAT_GET_ROOM, chatGetRoom);
  return chatGetRoomResponse.getRoom().getId().toString();
}

/**
 * @param {string} userId
 * @returns {Promise.<*>}
 */
export async function getPeerRoomId(userId) {
  const state = store.getState();
  let peerRoomId = null;
  for (const roomId in state.entities.rooms) {
    if (state.entities.rooms.hasOwnProperty(roomId)) {
      const room = state.entities.rooms[roomId];
      if (room.chatPeer && room.chatPeer === userId) {
        peerRoomId = room.id;
        break;
      }
    }
  }
  if (!peerRoomId) {
    peerRoomId = await chatGetRoom(userId);
  }
  return peerRoomId;
}

/**
 * return normalized RoomMessage
 * @param {ProtoRoomMessage} roomMessage
 * @returns {FlatRoomMessage}
 */
export function normalizeRoomMessage(roomMessage) {
  const normalizedData = normalize(roomMessage, roomMessageSchema);
  return normalizedData.entities.roomMessages[normalizedData.result];
}

/**
 * @param {string} roomId
 * @param {string} text
 * @param {object} pickedFile
 * @param {string} attachmentType
 * @param {Long} replyTo
 * @param {FlatRoomMessage} forwardMessage
 * @returns {Promise.<void>}
 */
export async function sendMessage(roomId, text, pickedFile, attachmentType, replyTo, forwardMessage) {
  /**
   * @type {ProtoChatSendMessage || ProtoGroupSendMessage || ProtoChannelSendMessage} proto
   */
  let actionId, proto;
  const room = store.getState().entities.rooms[roomId];
  const fakeId = getFakeMessageId();
  const fakeIdToString = fakeId.toString();

  switch (room.type) {
    case Proto.Room.Type.CHAT:
      actionId = CHAT_SEND_MESSAGE;
      proto = new ChatSendMessage();
      break;

    case Proto.Room.Type.GROUP:
      actionId = GROUP_SEND_MESSAGE;
      proto = new GroupSendMessage();
      break;

    case Proto.Room.Type.CHANNEL:
      actionId = CHANNEL_SEND_MESSAGE;
      proto = new ChannelSendMessage();
      break;
    default:
      throw new Error('Invalid room type');
  }

  __sendFakeMessage();
  proto.setRoomId(room.longId);
  proto.setMessage(text);

  if (replyTo) {
    proto.setReplyTo(replyTo);
  }
  if (forwardMessage) {
    const forwardFrom = new Proto.RoomMessageForwardFrom();
    forwardFrom.setRoomId(Long.fromString(forwardMessage.roomId));
    forwardFrom.setMessageId(forwardMessage.longId);
    proto.setForwardFrom(forwardFrom);
  }

  try {
    if (pickedFile) {

      const token =
        await store.dispatch(
          fileManagerUpload(
            getRoomHistoryUploadIdPrefix(room.id, fakeIdToString),
            pickedFile.fileUri,
            pickedFile.fileName,
            pickedFile.fileSize));
      proto.setAttachment(token);

      switch (attachmentType) {
        case ROOM_MESSAGE_ATTACHMENT_TYPE_IMAGE:
          proto.setMessageType(text ? Proto.RoomMessageType.IMAGE_TEXT : Proto.RoomMessageType.IMAGE);
          break;
        case ROOM_MESSAGE_ATTACHMENT_TYPE_VIDEO:
          proto.setMessageType(text ? Proto.RoomMessageType.VIDEO_TEXT : Proto.RoomMessageType.VIDEO);
          break;
        case ROOM_MESSAGE_ATTACHMENT_TYPE_AUDIO:
          proto.setMessageType(text ? Proto.RoomMessageType.AUDIO_TEXT : Proto.RoomMessageType.AUDIO);
          break;
        case ROOM_MESSAGE_ATTACHMENT_TYPE_FILE:
          proto.setMessageType(text ? Proto.RoomMessageType.FILE_TEXT : Proto.RoomMessageType.FILE);
          break;
      }
    }

    const sendMessageResponse = await Api.invoke(actionId, proto);

    const normalizedRoomMessage = normalizeRoomMessage(sendMessageResponse.getRoomMessage());
    prepareRoomMessage(normalizedRoomMessage, room.id, false);
    normalizedRoomMessage.pickedFile = pickedFile;

    store.dispatch(entitiesRoomMessagesAdd({[normalizedRoomMessage.id]: normalizedRoomMessage}));
    store.dispatch(messengerRoomMessageReplace(room.id, normalizedRoomMessage.id, fakeIdToString));

  } catch (e) {
    store.dispatch(messengerRoomMessageRemove(room.id, fakeIdToString));
    store.dispatch(entitiesRoomMessageRemove(fakeIdToString));
    // todo if upload is auto_paused set message to failed
  } finally {
    store.dispatch(fileManagerUploadDisposed(getRoomHistoryUploadIdPrefix(room.id, fakeIdToString)));
  }

  function __sendFakeMessage() {

    const roomMessage = new Proto.RoomMessage();
    roomMessage.setMessageId(fakeId);
    roomMessage.setMessage(text);
    roomMessage.setCreateTime(tNow());
    roomMessage.setUpdateTime(tNow());
    roomMessage.setStatus(Proto.RoomMessageStatus.SENDING);

    /**
     * @type {proto.RoomMessage.Author}
     */
    const author = new Proto.RoomMessage.Author();
    author.setHash(getAuthorHash());

    if (room.type === Proto.Room.Type.CHANNEL) {
      const authorRoom = new Proto.RoomMessage.Author.Room();
      authorRoom.setRoomId(room.longId);
    } else {
      const authorUser = new Proto.RoomMessage.Author.User();
      authorUser.setUserId(getUserId());
    }
    roomMessage.setAuthor(author);

    switch (attachmentType) {
      case ROOM_MESSAGE_ATTACHMENT_TYPE_IMAGE:
        roomMessage.setMessageType(text ? Proto.RoomMessageType.IMAGE_TEXT : Proto.RoomMessageType.IMAGE);
        break;
      case ROOM_MESSAGE_ATTACHMENT_TYPE_VIDEO:
        roomMessage.setMessageType(text ? Proto.RoomMessageType.VIDEO_TEXT : Proto.RoomMessageType.VIDEO);
        break;
      case ROOM_MESSAGE_ATTACHMENT_TYPE_AUDIO:
        roomMessage.setMessageType(text ? Proto.RoomMessageType.AUDIO_TEXT : Proto.RoomMessageType.AUDIO);
        break;
      case ROOM_MESSAGE_ATTACHMENT_TYPE_FILE:
        roomMessage.setMessageType(text ? Proto.RoomMessageType.FILE_TEXT : Proto.RoomMessageType.FILE);
        break;
    }

    const normalizedRoomMessage = normalizeRoomMessage(roomMessage);
    if (forwardMessage) {
      normalizedRoomMessage.forwardFrom = forwardMessage;
    }
    prepareRoomMessage(normalizedRoomMessage, roomId, false);
    normalizedRoomMessage.pickedFile = pickedFile;

    store.dispatch(entitiesRoomMessagesAdd({[normalizedRoomMessage.id]: normalizedRoomMessage}));
    store.dispatch(messengerRoomMessageConcat(room.id, [normalizedRoomMessage.id], false));
  }
}

/**
 * send Multi Picker File Messages
 * @param roomId
 * @param {object[]} files
 * @param attachmentType
 * @returns {Promise.<void>}
 */
export async function sendMultiAttachMessages(roomId, files, attachmentType) {
  files.forEach(async (file) => {
    sendMessage(roomId, null, file, attachmentType);
  });
}

/**
 *
 * @param {object[]} forwardList
 * @param {FlatRoomMessage} message
 * @return {Promise.<void>}
 */
export async function forwardToList(forwardList, message) {
  const promiseList = [];
  forwardList.forEach((item) => {
    if (item.roomId) {
      promiseList.push(sendMessage(item.roomId, null, null, null, null, message));
    } else if (item.userId) {
      promiseList.push(
        getPeerRoomId(item.userId)
          .then((roomId) => {
            return promiseList.push(sendMessage(roomId, null, null, null, null, message));
          })
      );
    }
  });
  return Promise.all(promiseList);
}

/**
 * @param roomId
 * @param longMessageId
 * @param text
 * @returns {Promise.<*>}
 */
export async function editRoomMessage(roomId, longMessageId, text) {
  let actionId, proto;
  const room = store.getState().entities.rooms[roomId];
  switch (room.type) {
    case Proto.Room.Type.CHAT:
      actionId = CHAT_EDIT_MESSAGE;
      proto = new ChatEditMessage();
      break;

    case Proto.Room.Type.GROUP:
      actionId = GROUP_EDIT_MESSAGE;
      proto = new GroupEditMessage();
      break;

    case Proto.Room.Type.CHANNEL:
      actionId = CHANNEL_EDIT_MESSAGE;
      proto = new ChannelEditMessage();
      break;
    default:
      throw new Error('Invalid room type');
  }

  proto.setRoomId(room.longId);
  proto.setMessageId(longMessageId);
  proto.setMessage(text);

  return await Api.invoke(actionId, proto);
}

/**
 * delete Message List
 * @param roomId
 * @param {string[]} messages
 * @returns {Promise.<void>}
 */
export async function deleteMessages(roomId, messages) {
  const promiseList = [];
  let actionId, proto;
  const room = store.getState().entities.rooms[roomId];
  switch (room.type) {
    case Proto.Room.Type.CHAT:
      actionId = CHAT_DELETE_MESSAGE;
      proto = ChatDeleteMessage;
      break;

    case Proto.Room.Type.GROUP:
      actionId = GROUP_DELETE_MESSAGE;
      proto = GroupDeleteMessage;
      break;

    case Proto.Room.Type.CHANNEL:
      actionId = CHANNEL_DELETE_MESSAGE;
      proto = ChannelDeleteMessage;
      break;
    default:
      throw new Error('Invalid room type');
  }
  messages.forEach(function(messageId) {
    const deleteMessage = new proto();
    deleteMessage.setRoomId(room.longId);
    deleteMessage.setMessageId(Long.fromString(messageId));
    promiseList.push(Api.invoke(actionId, deleteMessage));
  });
  await Promise.all(promiseList);
}

/**
 * @param {FlatRoomMessage} message
 * @param {{roomType, roomTitle, author, targetUser}} details
 * @return {Promise.<void>}
 */
export function getLogMessageParams(message, details) {

  let params = {};
  const targetUserId = message.log.getTargetUser() ? message.log.getTargetUser().getId().toString() : null;

  const roomType = details.roomType;
  const roomTitle = details.roomTitle;
  const author = details.author;
  const ownerMessage = message.authorHash === getAuthorHash() ? 1 : 0;

  switch (message.log.getType()) {
    case message.log.Type.USER_JOINED:
      params = {
        ...i18n.logMessageTypeUserJoined,
        values: {
          author,
        },
      };
      break;
    case message.log.Type.USER_DELETED:
      params = {
        ...i18n.logMessageTypeUserDeleted,
        values: {
          author,
        },
      };
      break;
    case message.log.Type.ROOM_CREATED:
      params = {
        ...i18n.logMessageTypeRoomCreated,
        values: {
          roomType,
          roomTitle,
        },
      };
      break;
    case message.log.Type.MEMBER_ADDED:
      params = {
        ...i18n.logMessageTypeMemberAdded,
        values: {
          author,
          ownerMessage,
          roomType,
          roomTitle,
          targetUser: details.targetUser,
          targetUserOwner: targetUserId === getUserId(true) ? 1 : 0,
        },
      };
      break;
    case message.log.Type.MEMBER_KICKED:
      params = {
        ...i18n.logMessageTypeMemberKicked,
        values: {
          author,
          ownerMessage,
          roomType,
          roomTitle,
          targetUser: entities.registeredUsers[targetUserId] ? entities.registeredUsers[targetUserId].displayName : null,
          targetUserOwner: targetUserId === getUserId(true) ? 1 : 0,
        },
      };
      break;
    case message.log.Type.MEMBER_LEFT:
      params = {
        ...i18n.logMessageTypeMemberLeft,
        values: {
          author,
          ownerMessage,
          roomType,
          roomTitle,
        },
      };
      break;
    case message.log.Type.ROOM_CONVERTED_TO_PUBLIC:
      params = {
        ...i18n.logMessageTypeRoomConvertedToPublic,
        values: {
          author,
          ownerMessage,
          roomType,
          roomTitle,
        },
      };
      break;
    case message.log.Type.ROOM_CONVERTED_TO_PRIVATE:
      params = {
        ...i18n.logMessageTypeRoomConvertedToPrivate,
        values: {
          author,
          ownerMessage,
          roomType,
          roomTitle,
        },
      };
      break;
    case message.log.Type.MEMBER_JOINED_BY_INVITE_LINK:
      params = {
        ...i18n.logMessageTypeMemberJoinedByInviteLink,
        values: {
          author,
          ownerMessage,
          roomType,
          roomTitle,
        },
      };
      break;
    case message.log.Type.ROOM_DELETED:
      params = {
        ...i18n.logMessageTypeRoomDeleted,
        values: {
          roomType,
          roomTitle,
        },
      };
      break;
    case message.log.Type.MISSED_VOICE_CALL:
      params = {
        ...i18n.logMessageTypeMissedVoiceCall,
        values: {
          ownerMessage,
        },
      };
      break;
    case message.log.Type.MISSED_VIDEO_CALL:
      params = {
        ...i18n.logMessageTypeMissedVideoCall,
        values: {
          ownerMessage,
        },
      };
      break;
    case message.log.Type.MISSED_SCREEN_SHARE:
      params = {
        ...i18n.logMessageTypeMissedScreenShare,
        values: {
          ownerMessage,
        },
      };
      break;
    case message.log.Type.MISSED_SECRET_CHAT:
      params = {
        ...i18n.logMessageTypeMissedSecretChat,
        values: {
          ownerMessage,
        },
      };
      break;
  }
  return params;
}