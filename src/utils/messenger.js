import {
  CHANNEL_EDIT_MESSAGE,
  CHANNEL_SEND_MESSAGE,
  CHAT_EDIT_MESSAGE,
  CHAT_GET_ROOM,
  CHAT_SEND_MESSAGE,
  GROUP_EDIT_MESSAGE,
  GROUP_SEND_MESSAGE,
} from '../constants/methods/index';
import {
  ChannelEditMessage,
  ChannelSendMessage,
  ChatEditMessage,
  ChatGetRoom,
  ChatSendMessage,
  GroupEditMessage,
  GroupSendMessage,
  Proto,
} from '../modules/Proto/index';
import putState from '../modules/Entities/RegisteredUsers';
import store from '../configureStore';
import Api from '../modules/Api/index';
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
import roomMessageSchema from '../schemas/roomMessage';
import {entitiesRoomMessageRemove, entitiesRoomMessagesAdd} from '../actions/entities/roomMessages';
import {fileManagerUpload, fileManagerUploadDisposed} from '../actions/fileManager';

/**
 * @param {string} userId
 * @returns {Promise.<string>}
 */
export async function chatGetRoom(userId) {
  await putState(userId);
  const user = store.getState().entities.registeredUsers[userId];
  const chatGetRoom = new ChatGetRoom();
  chatGetRoom.setPeerId(user.longId);

  const chatGetRoomResponse = await Api.invoke(CHAT_GET_ROOM, chatGetRoom);
  return chatGetRoomResponse.getRoom().getRoomId().toString();
}

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
 * @param roomId
 * @param text
 * @param pickedFile
 * @param attachmentType
 * @returns {Promise.<void>}
 */
export async function sendMessage(roomId, text, pickedFile, attachmentType) {
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
    prepareRoomMessage(normalizedRoomMessage, room.id);
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
    prepareRoomMessage(normalizedRoomMessage, roomId);
    normalizedRoomMessage.pickedFile = pickedFile;

    store.dispatch(entitiesRoomMessagesAdd({[normalizedRoomMessage.id]: normalizedRoomMessage}));
    store.dispatch(messengerRoomMessageConcat(room.id, [normalizedRoomMessage.id]));
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