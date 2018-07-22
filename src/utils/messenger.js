import {
  CHANNEL_DELETE_MESSAGE,
  CHANNEL_EDIT_MESSAGE,
  CHANNEL_GET_MESSAGES_STATS,
  CHANNEL_SEND_MESSAGE,
  CHAT_DELETE_MESSAGE,
  CHAT_EDIT_MESSAGE,
  CHAT_GET_ROOM,
  CHAT_SEND_MESSAGE,
  CHAT_SET_ACTION,
  CHAT_UPDATE_STATUS,
  GROUP_DELETE_MESSAGE,
  GROUP_EDIT_MESSAGE,
  GROUP_SEND_MESSAGE,
  GROUP_SET_ACTION,
  GROUP_UPDATE_STATUS,
} from '../constants/methods/index';
import {
  ChannelDeleteMessage,
  ChannelEditMessage,
  ChannelGetMessagesStats,
  ChannelSendMessage,
  ChatDeleteMessage,
  ChatEditMessage,
  ChatGetRoom,
  ChatSendMessage,
  ChatSetAction,
  ChatUpdateStatus,
  GroupDeleteMessage,
  GroupEditMessage,
  GroupSendMessage,
  GroupSetAction,
  GroupUpdateStatus,
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
  ROOM_MESSAGE_ATTACHMENT_TYPE_VOICE,
} from '../constants/app';
import {msSleep, prependFileProtocol, tNow} from './core';
import {messengerRoomMessageConcat, messengerRoomMessageReplace} from '../actions/messenger/roomMessages';

import {normalize} from 'normalizr';
import {forIn, groupBy, map, random} from 'lodash';
import Long from 'long';
import roomMessageSchema from '../schemas/roomMessage';
import {entitiesRoomMessageEdit, entitiesRoomMessagesAdd} from '../actions/entities/roomMessages';
import {fileManagerUpload, fileManagerUploadDisposed} from '../actions/fileManager';
import Collector from '../modules/Collector';
import {messengerRoomAddList} from '../actions/messenger/rooms';
import VideoCompress from '../modules/VideoCompress';
import {clearNotification} from '../modules/Notification/index';
import RNIGFileSystem from 'react-native-file-system';
import {Platform} from 'react-native';

/**
 * @type {string} current Focus Room
 */
let _focusRoom;
/**
 * @type {Object.<string,string[]>}
 * @private
 */
let _deliveredRoomMessages = {};
/**
 * @type {Object.<string,Object.<string,ProtoRoomMessageStatus>[]>}
 * @private
 */
let _unresolvedRoomMessageStatus = {};

let _viewedMessages = {};

/**
 * set focus room
 * @param roomId
 */
export function focusRoom(roomId) {
  _focusRoom = roomId;
  seenDeliveredMessages(roomId);
  clearNotification(roomId);
}

/**
 * set focus room to null
 */
export function blurRoom() {
  _focusRoom = null;
}

/**
 * return focus room
 * @returns {string}
 */
export function getFocusRoom() {
  return _focusRoom;
}

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
 * @param {Proto.RoomMessageContact} roomMessageContact
 * @param {Proto.RoomMessageLocation} roomMessageLocation
 * @returns {Promise.<void>}
 */
export async function sendMessage(roomId, text, pickedFile, attachmentType, replyTo, forwardMessage, roomMessageContact, roomMessageLocation) {
  /**
   * @type {ProtoChatSendMessage || ProtoGroupSendMessage || ProtoChannelSendMessage} proto
   */
  let actionId, proto;
  const room = store.getState().entities.rooms[roomId];
  const fakeId = getFakeMessageId();
  const fakeIdToString = fakeId.toString();
  let sendingAction = null;
  let sendingActionId = null;

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
  proto.setContact(roomMessageContact);
  proto.setLocation(roomMessageLocation);

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

    let sendMessageResponse;
    try {
      if (pickedFile) {
        switch (attachmentType) {
          case ROOM_MESSAGE_ATTACHMENT_TYPE_IMAGE:
            proto.setMessageType(text ? Proto.RoomMessageType.IMAGE_TEXT : Proto.RoomMessageType.IMAGE);
            sendingAction = Proto.ClientAction.SENDING_IMAGE;
            break;
          case ROOM_MESSAGE_ATTACHMENT_TYPE_VIDEO:
            proto.setMessageType(text ? Proto.RoomMessageType.VIDEO_TEXT : Proto.RoomMessageType.VIDEO);
            sendingAction = Proto.ClientAction.SENDING_VIDEO;
            await __compressVideo();
            break;
          case ROOM_MESSAGE_ATTACHMENT_TYPE_AUDIO:
            proto.setMessageType(text ? Proto.RoomMessageType.AUDIO_TEXT : Proto.RoomMessageType.AUDIO);
            sendingAction = Proto.ClientAction.SENDING_AUDIO;
            break;
          case ROOM_MESSAGE_ATTACHMENT_TYPE_VOICE:
            proto.setMessageType(Proto.RoomMessageType.VOICE);
            break;
          case ROOM_MESSAGE_ATTACHMENT_TYPE_FILE:
            proto.setMessageType(text ? Proto.RoomMessageType.FILE_TEXT : Proto.RoomMessageType.FILE);
            sendingAction = Proto.ClientAction.SENDING_FILE;
            break;
        }
        if (sendingAction !== null) {
          sendingActionId = sendActionRequest(room.id, sendingAction);
        }
        const token =
          await store.dispatch(
            fileManagerUpload(
              getRoomHistoryUploadIdPrefix(room.id, fakeIdToString),
              pickedFile.fileUri,
              pickedFile.fileName,
              pickedFile.fileSize));
        proto.setAttachment(token);
      }
      if (roomMessageContact) {
        proto.setMessageType(Proto.RoomMessageType.CONTACT);
      } else if (roomMessageLocation) {
        proto.setMessageType(Proto.RoomMessageType.LOCATION);
      }
      sendMessageResponse = await Api.invoke(actionId, proto);
    } finally {
      if (sendingActionId) {
        sendActionRequest(room.id, Proto.ClientAction.CANCEL, sendingActionId);
      }
    }

    const normalizedRoomMessage = normalizeRoomMessage(sendMessageResponse.getRoomMessage());
    prepareRoomMessage(normalizedRoomMessage, room.id, false);
    normalizedRoomMessage.pickedFile = pickedFile;

    store.dispatch(entitiesRoomMessagesAdd({[normalizedRoomMessage.id]: normalizedRoomMessage}));
    store.dispatch(messengerRoomMessageReplace(room.id, normalizedRoomMessage.id, fakeIdToString));

  } catch (e) {
    console.warn('sendMessageFiled', e);
    store.dispatch(entitiesRoomMessageEdit(fakeIdToString, {
      status: Proto.RoomMessageStatus.FAILED,
    }));
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
    roomMessage.setContact(roomMessageContact);
    roomMessage.setLocation(roomMessageLocation);

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
      case ROOM_MESSAGE_ATTACHMENT_TYPE_VOICE:
        roomMessage.setMessageType(Proto.RoomMessageType.VOICE);
        break;
      case ROOM_MESSAGE_ATTACHMENT_TYPE_FILE:
        roomMessage.setMessageType(text ? Proto.RoomMessageType.FILE_TEXT : Proto.RoomMessageType.FILE);
        break;
    }
    if (roomMessageContact) {
      proto.setMessageType(Proto.RoomMessageType.CONTACT);
    } else if (roomMessageLocation) {
      proto.setMessageType(Proto.RoomMessageType.LOCATION);
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

  async function __compressVideo() {
    const source = await VideoCompress.compress(prependFileProtocol(pickedFile.fileUri));
    pickedFile = await RNIGFileSystem.fInfo(Platform.OS === 'ios' ? source.replace('file://', '') : source);
    store.dispatch(entitiesRoomMessageEdit(fakeId.toString(), {pickedFile}));
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
 * @param {FlatRoomMessage} message
 * @return {Promise.<void>}
 */
export async function resendMessage(message) {
  /**
   * @type {ProtoChatSendMessage || ProtoGroupSendMessage || ProtoChannelSendMessage} proto
   */

  let actionId, proto;
  const room = store.getState().entities.rooms[message.roomId];

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


  proto.setRoomId(room.longId);
  proto.setMessage(message.message);
  proto.setReplyTo(message.replyTo);
  if (message.forwardFrom) {
    const forwardFrom = new Proto.RoomMessageForwardFrom();
    forwardFrom.setRoomId(Long.fromString(message.forwardFrom.roomId));
    forwardFrom.setMessageId(message.forwardFrom.longId);
    proto.setForwardFrom(forwardFrom);
  }
  try {

    if (message.pickedFile) {
      const token =
        await store.dispatch(
          fileManagerUpload(
            getRoomHistoryUploadIdPrefix(room.id, message.id),
            message.pickedFile.fileUri,
            message.pickedFile.fileName,
            Long.fromBits(message.pickedFile.fileSize.low, message.pickedFile.fileSize.high, message.pickedFile.fileSize.unsigned)));
      proto.setAttachment(token);
    }
    proto.setMessageType(message.messageType);

    store.dispatch(entitiesRoomMessageEdit(message.id, {
      status: Proto.RoomMessageStatus.SENDING,
    }));

    const sendMessageResponse = await Api.invoke(actionId, proto);

    const normalizedRoomMessage = normalizeRoomMessage(sendMessageResponse.getRoomMessage());
    prepareRoomMessage(normalizedRoomMessage, room.id, false);
    normalizedRoomMessage.pickedFile = message.pickedFile;

    store.dispatch(entitiesRoomMessagesAdd({[normalizedRoomMessage.id]: normalizedRoomMessage}));
    store.dispatch(messengerRoomMessageReplace(room.id, normalizedRoomMessage.id, message.id));

  } catch (e) {
    console.error('resendError', e);
    store.dispatch(entitiesRoomMessageEdit(message.id, {
      status: Proto.RoomMessageStatus.FAILED,
    }));
  } finally {
    store.dispatch(fileManagerUploadDisposed(getRoomHistoryUploadIdPrefix(room.id, message.id)));
  }
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
 * @param {boolean} both
 * @returns {Promise.<void>}
 */
export async function deleteMessages(roomId, messages, both) {
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
    if (both) {
      deleteMessage.setBoth(both);
    }
    promiseList.push(Api.invoke(actionId, deleteMessage));
  });
  await Promise.all(promiseList);
}

/**
 * @param {string} roomId
 * @param {ProtoClientAction} action
 * @param {number|null} actionId
 * @return {number}
 */
export function sendActionRequest(roomId, action, actionId = null) {

  let protoActionId, proto;
  const room = store.getState().entities.rooms[roomId];

  if (room.type === Proto.Room.Type.CHANNEL) {
    return;
  }

  if (action === Proto.ClientAction.CANCEL && !actionId) {
    throw new Error('ActionId is Null for Cancel');
  }
  if (action !== Proto.ClientAction.CANCEL) {
    actionId = random(10000000, 99999999);
  }

  switch (room.type) {
    case Proto.Room.Type.CHAT:
      protoActionId = CHAT_SET_ACTION;
      proto = new ChatSetAction();
      break;

    case Proto.Room.Type.GROUP:
      protoActionId = GROUP_SET_ACTION;
      proto = new GroupSetAction();
      break;

    default:
      throw new Error('Invalid room type');
  }
  proto.setRoomId(room.longId);
  proto.setAction(action);
  proto.setActionId(actionId);

  Api.invoke(protoActionId, proto);
  return actionId;
}


/**
 * @param {FlatRoomMessage} message
 * @param {{roomType, roomTitle, author, targetUser}} details
 * @return {Promise.<void>}
 */
export function getLogMessageParams(message, details) {

  let params = null;
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
          targetUser: details.targetUser,
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

/**
 * @param roomId
 * @param messageId
 */
export function deliverMessage(roomId, messageId) {
  if (!_deliveredRoomMessages[roomId]) {
    _deliveredRoomMessages[roomId] = [];
  }
  _deliveredRoomMessages[roomId].push(messageId);
  return updateMessageStatus(roomId, messageId, Proto.RoomMessageStatus.DELIVERED);
}

/**
 * @param roomId
 * @param messageId
 */
export function seenMessage(roomId, messageId) {
  return updateMessageStatus(roomId, messageId, Proto.RoomMessageStatus.SEEN);
}

/**
 * @param roomId
 */
export function seenDeliveredMessages(roomId) {
  if (_deliveredRoomMessages[roomId]) {
    _deliveredRoomMessages[roomId].map(function(messageId) {
      seenMessage(roomId, messageId);
    });
    _deliveredRoomMessages[roomId] = [];
  }
}

export function listenMessage(roomId, messageId) {
  updateMessageStatus(roomId, messageId, Proto.RoomMessageStatus.LISTENED);
}

/**
 * @param {string} roomId
 * @param {string} messageId
 * @param {ProtoRoomMessageStatus} status
 * @returns {Promise.<void>}
 */
export async function updateMessageStatus(roomId, messageId, status) {
  await msSleep(random(0, 300));

  /**
   * @type {FlatRoom} room
   */
  const room = store.getState().entities.rooms[roomId];
  /**
   * @type {FlatRoomMessage} roomMessage
   */
  const roomMessage = store.getState().entities.roomMessages[messageId];

  if (!room) {
    if (!_unresolvedRoomMessageStatus[roomId]) {
      _unresolvedRoomMessageStatus[roomId] = [];
    }
    _unresolvedRoomMessageStatus[roomId].push({messageId, status});
    return;
  }
  if (room.type !== Proto.Room.Type.GROUP && room.type !== Proto.Room.Type.CHAT) {
    return;
  }
  if (!roomMessage || roomMessage.deleted) {
    return;
  }
  if (roomMessage.authorHash === getAuthorHash()) {
    return;
  }
  if (status === Proto.RoomMessageStatus.DELIVERED
    &&
    roomMessage.status !== Proto.RoomMessageStatus.SENT
  ) {
    return;
  }
  if (status === Proto.RoomMessageStatus.SEEN
    &&
    (
      roomMessage.status !== Proto.RoomMessageStatus.SENT
      &&
      roomMessage.status !== Proto.RoomMessageStatus.DELIVERED
    )) {
    return;
  }
  if (status === Proto.RoomMessageStatus.LISTENED
    &&
    roomMessage.status !== Proto.RoomMessageStatus.SEEN
  ) {
    return;
  }

  const actionId = room.type === Proto.Room.Type.GROUP ? GROUP_UPDATE_STATUS : CHAT_UPDATE_STATUS;
  const proto = room.type === Proto.Room.Type.GROUP ? new GroupUpdateStatus() : new ChatUpdateStatus();
  proto.setRoomId(room.longId);
  proto.setMessageId(roomMessage.longId);
  proto.setStatus(status);


  Api.invoke(actionId, proto);
}

/**
 * send Unresolved Messages
 * @param {string} roomId
 * @returns {Promise.<void>}
 */
export async function processUnresolvedMessageStatus(roomId) {
  if (_unresolvedRoomMessageStatus[roomId]) {
    _unresolvedRoomMessageStatus[roomId].map(function(unhandle) {
      updateMessageStatus(roomId, unhandle.messageId, unhandle.status);
    });
    _unresolvedRoomMessageStatus[roomId] = [];
  }
}

export function getMessageStats(roomId, messageId) {
  if (!_viewedMessages[messageId.toString()]) {
    _viewedMessages[messageId.toString()] = true;
    collect({roomId, messageId});
  }
}

const {collect} = Collector(
  (collected) => {
    const groupedMessages = groupBy(collected, 'roomId');
    forIn(groupedMessages, (messages, roomId) => {
      const getMessageStats = new ChannelGetMessagesStats();
      getMessageStats.setRoomId(Long.fromString(roomId));
      getMessageStats.setMessageIdList(map(messages, 'messageId'));
      Api.invoke(CHANNEL_GET_MESSAGES_STATS, getMessageStats);
    });
  },
  10000,
  100,
  true
);

export function dispatchMessengerRoomAddList(roomId) {
  store.dispatch(messengerRoomAddList({
    [roomId]: {
      id: roomId,
      sort: getFakeMessageId().toString(),
      pinId: '0',
    },
  }));
}