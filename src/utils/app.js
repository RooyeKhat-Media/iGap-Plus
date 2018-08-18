import React from 'react';
import MetaData from '../models/MetaData';
import store from '../configureStore';
import RNIGFileSystem from 'react-native-file-system';
import Share from '../modules/Share/index';
import i18n from '../i18n';
import {FormattedMessage} from 'react-intl';
import {
  ChatGetRoom,
  ClientRegisterDevice,
  SignalingGetConfiguration,
  UserContactsImport,
  UserLogin,
  UserSessionLogout,
  UserUpdateStatus,
} from '../modules/Proto/index';
import {Platform} from 'react-native';
import {Proto} from '../modules/Proto';
import {APP_BUILD_VERSION, APP_ID, APP_NAME, APP_VERSION, GOOGLE_API_KEY} from '../constants/configs';
import {
  CHAT_GET_ROOM,
  CLIENT_CONDITION,
  CLIENT_REGISTER_DEVICE,
  SIGNALING_GET_CONFIGURATION,
  USER_CONTACTS_IMPORT,
  USER_LOGIN,
  USER_SESSION_LOGOUT,
  USER_UPDATE_STATUS,
} from '../constants/methods/index';
import Api, {CLIENT_STATUS, HANDLER_PRECEDENCE} from '../modules/Api/index';
import ClientError from '../modules/Error/ClientError';
import {objectToLong, prependFileProtocol, sleep} from './core';
import {
  METADATA_AUTHOR_HASH,
  METADATA_USER_CONTACTS,
  METADATA_USER_ID,
  METADATA_USER_TOKEN,
} from '../models/MetaData/constant';
import {
  APP_STATE_ACTIVE,
  FILE_UPLOAD_ID_ROOM_AVATAR_PREFIX,
  FILE_UPLOAD_ID_ROOM_HISTORY_PREFIX,
} from '../constants/app';

import putStateRegisteredUser from '../modules/Entities/RegisteredUsers';
import putStateRoom from '../modules/Entities/Rooms';
import Long from 'long';
import Contacts from '../modules/Contacts/index';
import {deliverMessage, getFocusRoom, seenMessage} from './messenger';
import Condition from '../modules/Condition/index';
import Permission, {PERMISSION_STORAGE} from '../modules/Permission/index';
import SaveTo from '../../native/modules/SaveTo';
import Client from '../modules/Api/Client';
import {clientStatusChanged} from '../actions/api';
import {clientStatusUpdating} from '../actions/updating';
import {serverRoomsState} from '../modules/Messenger/Rooms/index';
import {waitForRoom} from '../modules/Entities/Rooms/index';
import {notifyMessage} from '../modules/Notification/index';
import {waitForUser} from '../modules/Entities/RegisteredUsers/index';
import {fileManagerDownload} from '../actions/fileManager';
import {FILE_MANAGER_DOWNLOAD_MANNER} from '../constants/fileManager';
import {appEnable} from '../actions/app';
import DeviceInfo from 'react-native-device-info';

let _userId;
let _userIdString;
let _isUserOnline = false;
let _authorHash;
let _fakeMessageId = Long.ZERO;
let _roomHistorySelectedMode = false;
let _appState;
let _chatDeleteMessageForBothPeriod = 2 * 3600;

/**
 * @returns {Long}
 */
export function getFakeMessageId() {
  _fakeMessageId = _fakeMessageId.add(1);
  return _fakeMessageId;
}

function setFakeMessageId(id) {
  if (_fakeMessageId.compare(id) === -1) {
    _fakeMessageId = id;
  }
}

export function getUserId(asString = false) {
  if (asString) {
    return _userIdString;
  }
  return _userId;
}

export function setUserId(userId) {
  _userId = userId;
  _userIdString = _userId ? _userId.toString() : null;
  return MetaData.save(METADATA_USER_ID, userId);
}

export async function loadUserId() {
  _userId = await MetaData.load(METADATA_USER_ID);
  _userId = _userId ? objectToLong(_userId) : null;
  _userIdString = _userId ? _userId.toString() : null;
  return _userId;
}


export function getAuthorHash() {
  return _authorHash;
}

export function setAuthorHash(authorHash) {
  _authorHash = authorHash;
  return MetaData.save(METADATA_AUTHOR_HASH, authorHash);
}

export async function loadAuthorHash() {
  _authorHash = await MetaData.load(METADATA_AUTHOR_HASH);
  return _authorHash;
}


export function setUserToken(userToken) {
  return MetaData.save(METADATA_USER_TOKEN, userToken);
}

export async function loadUserToken() {
  return await MetaData.load(METADATA_USER_TOKEN);
}

export function getPlatform() {
  switch (Platform.OS) {
    case 'android':
      return Proto.Platform.ANDROID;
    case 'ios':
      return Proto.Platform.IOS;
    case 'windows':
      return Proto.Platform.WINDOWS;
    default:
      return Proto.Platform.UNKNOWN_PLATFORM;
  }
}

export async function login(handlerPrecedence = HANDLER_PRECEDENCE.BEFORE) {

  const token = await loadUserToken();
  if (!token) {
    throw new ClientError('Login token is not found');
  }

  const userLogin = new UserLogin();
  userLogin.setToken(token);
  userLogin.setAppName(APP_NAME);
  userLogin.setAppId(APP_ID);
  userLogin.setAppBuildVersion(APP_BUILD_VERSION);
  userLogin.setAppVersion(APP_VERSION);
  userLogin.setPlatform(getPlatform());
  userLogin.setPlatformVersion(DeviceInfo.getSystemVersion());
  userLogin.setDevice(DeviceInfo.getDeviceName());
  userLogin.setDeviceName(DeviceInfo.getBrand());
  userLogin.setLanguage(Proto.Language.FA_IR);

  const response = await Api.invoke(USER_LOGIN, userLogin, null, handlerPrecedence);

  Client.instance.loggedIn = true;
  store.dispatch(clientStatusChanged(CLIENT_STATUS.LOGGED_IN));

  return response;
}

export async function logout() {
  const userLogout = new UserSessionLogout();
  return await Api.invoke(USER_SESSION_LOGOUT, userLogout);
}

export async function syncData() {
  Api.invoke(SIGNALING_GET_CONFIGURATION, new SignalingGetConfiguration());

  importContact();
  store.dispatch(clientStatusUpdating(true));
  const request = await Condition();
  await serverRoomsState();
  await Api.invoke(CLIENT_CONDITION, request);
  await sleep(3);
  store.dispatch(clientStatusUpdating(false));
}

/**
 * @param {string} id
 * @returns {string}
 */
export function getRoomAvatarUploadIdPrefix(id) {
  return FILE_UPLOAD_ID_ROOM_AVATAR_PREFIX + id;
}

/**
 * @param {string} roomId
 * @param {string} messageId
 * @returns {string} id
 */
export function getRoomHistoryUploadIdPrefix(roomId, messageId) {
  return FILE_UPLOAD_ID_ROOM_HISTORY_PREFIX + roomId + '_' + messageId;
}

/**
 * Fix and add missing property to room message
 * @param {FlatRoomMessage} normalizedRoomMessage
 * @param {string} roomId
 * @param {boolean} checkState
 */
export function prepareRoomMessage(normalizedRoomMessage, roomId, checkState) {
  if (!normalizedRoomMessage) {
    return;
  }
  normalizedRoomMessage.roomId = roomId;

  if (checkState) {
    putStateRoom(roomId);
  }

  if (normalizedRoomMessage.authorUser) {
    putStateRegisteredUser(
      normalizedRoomMessage.authorUser,
      normalizedRoomMessage.authorUserCacheId
    );
  }

  if (normalizedRoomMessage.forwardFrom) {
    if (normalizedRoomMessage.forwardFrom.authorUser) {
      putStateRegisteredUser(
        normalizedRoomMessage.forwardFrom.authorUser,
        normalizedRoomMessage.forwardFrom.authorUserCacheId
      );
    } else if (normalizedRoomMessage.forwardFrom.authorRoom) {
      normalizedRoomMessage.forwardFrom.roomId = normalizedRoomMessage.forwardFrom.authorRoom;
      putStateRoom(normalizedRoomMessage.forwardFrom.roomId);
    }
  }

  if (getFocusRoom() === roomId) {
    seenMessage(roomId, normalizedRoomMessage.id);
  } else if (normalizedRoomMessage.status === Proto.RoomMessageStatus.SENT) {
    deliverMessage(roomId, normalizedRoomMessage.id);
    prepareNotifyRoomMessage(normalizedRoomMessage);
  }

  setFakeMessageId(normalizedRoomMessage.longId);
}

/**
 * @param roomMessage
 * @returns {Promise.<void>}
 */
export async function prepareNotifyRoomMessage(roomMessage) {
  const room = await waitForRoom(roomMessage.roomId);
  const title = room.title;
  let avatar = room.avatar;
  let message = getMessageText(roomMessage);
  if (!roomMessage || roomMessage.deleted) {
    return;
  }
  if (room.roomMute === Proto.RoomMute.MUTE) {
    return;
  }
  if (roomMessage.authorHash === getAuthorHash()) {
    return;
  }
  if (room.type === Proto.Room.Type.GROUP && roomMessage.authorUser) {
    const authorUser = await waitForUser(roomMessage.authorUser);
    message = authorUser.displayName + ': ' + message;
  }
  if (avatar) {
    const cacheId = avatar.getFile().getSmallThumbnail().getCacheId();
    if (store.getState().fileManager.download[cacheId]) {
      avatar = store.getState().fileManager.download[cacheId];
    } else {
      avatar = await store.dispatch(fileManagerDownload(
        FILE_MANAGER_DOWNLOAD_MANNER.FORCE,
        avatar.getFile().getToken(),
        Proto.FileDownload.Selector.SMALL_THUMBNAIL,
        avatar.getFile().getSmallThumbnail().getSize(),
        avatar.getFile().getSmallThumbnail().getCacheId(),
        avatar.getFile().getSmallThumbnail().getName()
      ));
    }
    avatar = prependFileProtocol(avatar.uri);
  }
  notifyMessage(roomMessage.roomId, title, avatar, message, roomMessage.id);
}

/**
 * @param mode
 */
export function setRoomHistorySelectedMode(mode) {
  _roomHistorySelectedMode = mode;
}

export function getRoomHistorySelectedMode() {
  return _roomHistorySelectedMode;
}

export function getGoogleStaticMap(lat, lan, width = 300, height = 400) {
  return 'https://maps.googleapis.com/maps/api/staticmap?' +
    'zoom=15&' +
    'size=' + width + 'x' + height + '&' +
    'markers=color:red|' + lat + ',' + lan + '&' +
    'key=' + GOOGLE_API_KEY;
}

export async function importContact() {

  const contactListExport = [];
  let clientId = 0;

  function addToExportList(firstName = '', lastName = '', phone) {
    /**
     * @type ProtoUserContactsImport_Contact
     */
    const contact = new UserContactsImport.Contact();
    contact.setFirstName(firstName);
    contact.setLastName(lastName);
    contact.setPhone(phone);
    contact.setClientId(++clientId);
    contactListExport.push(contact);
  }

  const list = await Contacts.getAll();
  const contactList = {};

  list.map((item) => {
    if (item.phoneNumbers.length > 0) {
      contactList[item.recordID] = {
        firstName: item.givenName,
        lastName: item.familyName,
        phone: item.phoneNumbers,
        email: item.emailAddresses,
      };
    }
  });

  const internalList = (await MetaData.load(METADATA_USER_CONTACTS)) || {};

  for (const recordID  in contactList) {
    if (!internalList[recordID]) {
      contactList[recordID].phone.map((ph) => {
        addToExportList(contactList[recordID].firstName, contactList[recordID].lastName, ph.number);
      });
    } else {
      if (internalList[recordID].firstName !== contactList[recordID].firstName || internalList[recordID].lastName !== contactList[recordID].lastName) {
        contactList[recordID].phone.map((ph) => {
          addToExportList(contactList[recordID].firstName, contactList[recordID].lastName, ph.number);
        });
      } else {
        contactList[recordID].phone.map((ph) => {
          let canAdd = true;
          internalList[recordID].phone.map((iPh) => {
            if (iPh.number === ph.number) {
              canAdd = false;
            }
          });
          if (canAdd) {
            addToExportList(contactList[recordID].firstName, contactList[recordID].lastName, ph.number);
          }
        });
      }
    }
  }

  let offset = 0;
  while (offset < contactListExport.length) {
    const userContactImport = new UserContactsImport();
    userContactImport.setContactsList(contactListExport.slice(offset, offset + 100));
    userContactImport.setForce(false);
    await Api.invoke(USER_CONTACTS_IMPORT, userContactImport);
    offset += 100;
  }
  // todo USER_CONTACTS_IMPORT_FORBIDDEN error
  if (contactListExport.length > 0) {
    await MetaData.save(METADATA_USER_CONTACTS, contactList);
  }
}

export function setAppState(nextState) {
  _appState = nextState;
}

export function getAppState() {
  return _appState;
}

/**
 * @return {Promise.<*>}
 */
export function appStateChange() {
  if (getAppState() === APP_STATE_ACTIVE) {
    setUserOnline();
  } else {
    setUserOffline();
  }
}

export async function setUserOnline(force = false) {
  clearTimeout(_userOfflineTimeout);
  if (!force && _isUserOnline) {
    return;
  }
  _isUserOnline = true;
  await invokeUserStatus(UserUpdateStatus.Status.ONLINE);
}

let _userOfflineTimeout;

export async function setUserOffline(updateServer = true) {
  clearTimeout(_userOfflineTimeout);
  _userOfflineTimeout = setTimeout(async () => {
    _isUserOnline = false;
    if (updateServer) {
      await invokeUserStatus(UserUpdateStatus.Status.OFFLINE);
    }
  }, 30000);
}

async function invokeUserStatus(status) {
  const userUpdateStatus = new UserUpdateStatus();
  userUpdateStatus.setStatus(status);
  return await Api.invoke(USER_UPDATE_STATUS, userUpdateStatus);
}

export function getMessageDownloadFileUri(cacheId) {
  const downloadFile = store.getState().fileManager.download[cacheId];
  return downloadFile ? downloadFile.uri : null;
}

export async function filePicker(fileType) {
  if (Platform.OS === 'android') {
    await Permission.grant(PERMISSION_STORAGE, 'Storage Access', 'Storage permission is needed');
  }
  return RNIGFileSystem.filePicker(fileType);
}

export async function filesPicker(fileType) {
  if (Platform.OS === 'android') {
    await Permission.grant(PERMISSION_STORAGE, 'Storage Access', 'Storage permission is needed');
  }
  return RNIGFileSystem.filesPicker(fileType);
}

export async function saveToGallery(fileUri, mimeType) {
  if (Platform.OS === 'android') {
    await Permission.grant(PERMISSION_STORAGE, 'Storage Access', 'Storage permission is needed');
  }
  return SaveTo.gallery(fileUri, mimeType);
}

export async function saveToMusic(fileUri, mimeType) {
  if (Platform.OS === 'android') {
    await Permission.grant(PERMISSION_STORAGE, 'Storage Access', 'Storage permission is needed');
  }
  return SaveTo.music(fileUri, mimeType);
}

export async function saveToDownloads(fileUri) {
  if (Platform.OS === 'android') {
    await Permission.grant(PERMISSION_STORAGE, 'Storage Access', 'Storage permission is needed');
  }
  return SaveTo.downloads(fileUri);
}

export function shareMessage(roomMessage) {
  let uri = null;
  let message = null;
  let mimType = null;
  const forwardMessage = roomMessage.forwardFrom;

  if (forwardMessage) {
    message = forwardMessage.message;
    if (forwardMessage.attachment) {
      uri = getMessageDownloadFileUri(forwardMessage.attachment.getCacheId());
      mimType = forwardMessage.attachment.getMime();
    }
  }
  if (roomMessage.message) {
    message = roomMessage.message;
  }
  if (roomMessage.attachment) {
    uri = getMessageDownloadFileUri(roomMessage.attachment.getCacheId());
    mimType = roomMessage.attachment.getMime();
  }
  uri = prependFileProtocol(uri);
  Share.open(uri, uri ? mimType : null, message);
}

/**
 * @param peerId
 * @returns FlatRoom|null
 */
export function getPeerRoom(peerId) {
  for (const id in store.getState().entities.rooms) {
    const room = store.getState().entities.rooms[id];
    if (room.type === Proto.Room.Type.CHAT && peerId === room.chatPeer) {
      return room;
    }
  }
  return null;
}

export async function loadPeerRoom(peerId) {
  let tries = 0;
  let room = getPeerRoom(peerId);
  if (!room) {
    const chatGetRoom = new ChatGetRoom();
    chatGetRoom.setPeerId(Long.fromString(peerId));
    await Api.invoke(CHAT_GET_ROOM, chatGetRoom);
    do {
      await sleep(1);
      room = getPeerRoom(peerId);
    } while (!room && ++tries < 3);
  }
  return room;
}

/**
 * @returns {number}
 */
export function getChatDeleteMessageForBothPeriod() {
  return _chatDeleteMessageForBothPeriod;
}

/**
 * @param time
 */
export function setChatDeleteMessageForBothPeriod(time) {
  _chatDeleteMessageForBothPeriod = time;
}

/**
 * Client Register Device
 * @param token
 * @returns {Promise}
 */
export function registerDevice(token) {
  const registerDevice = new ClientRegisterDevice();
  registerDevice.setToken(token);
  registerDevice.setType(Platform.select({
    ios: Proto.ClientRegisterDevice.Type.IOS,
    android: Proto.ClientRegisterDevice.Type.ANDROID,
    default: Proto.ClientRegisterDevice.Type.GENERIC,
  }));
  return Api.invoke(CLIENT_REGISTER_DEVICE, registerDevice);
}

export function reloadApp() {
  store.dispatch(appEnable(false));
  store.dispatch(appEnable(true));
}

export function getMessageTitle(message) {
  if (!message || message.deleted) {
    return null;
  }
  if (message.message) {
    return message.message;
  }
  if (message.forwardFrom) {
    return getMessageTitle(message.forwardFrom);
  }
  return (<FormattedMessage {...i18n.roomListLastMessageTitle} values={{type: message.messageType}}/>);
}

export function getMessageText(message) {
  if (!message || message.deleted) {
    return null;
  }
  if (message.message) {
    return message.message;
  }
  if (message.forwardFrom) {
    return getMessageText(message.forwardFrom);
  }
  const types = {
    [Proto.RoomMessageType.IMAGE]: 'sent a photo',
    [Proto.RoomMessageType.VIDEO]: 'sent a video',
    [Proto.RoomMessageType.AUDIO]: 'sent a audio',
    [Proto.RoomMessageType.VOICE]: 'sent a voice message',
    [Proto.RoomMessageType.GIF]: 'sent a gif',
    [Proto.RoomMessageType.FILE]: 'sent a file',
    [Proto.RoomMessageType.LOCATION]: 'sent a location',
    [Proto.RoomMessageType.CONTACT]: 'sent a contact',
  };
  return types[message.messageType];
}

export function getRoomType(roomId) {
  const room = store.getState().entities.rooms[roomId];
  return room ? room.type : null;
}

export function getRoomMessageType(messageId) {
  const roomMessage = store.getState().entities.roomMessages[messageId];

  if (!roomMessage) {
    //todo Error Report
    console.warn('getRoomMessageType: Invalid MessageId', messageId);
    return -1;
  }

  if (roomMessage.deleted) {
    return -2;
  }

  return roomMessage.messageType;
}