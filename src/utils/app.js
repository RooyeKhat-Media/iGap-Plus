import MetaData from '../models/MetaData';
import store from '../configureStore';
import {
  UserContactsImport,
  UserLogin,
  UserSessionLogout,
  UserUpdateStatus,
} from '../modules/Proto/index';
import {Platform} from 'react-native';
import {Proto} from '../modules/Proto';
import {APP_BUILD_VERSION, APP_ID, APP_NAME, APP_VERSION, GOOGLE_API_KEY} from '../constants/configs';
import {
  CLIENT_CONDITION,
  USER_CONTACTS_IMPORT,
  USER_LOGIN,
  USER_SESSION_LOGOUT,
  USER_UPDATE_STATUS,
} from '../constants/methods/index';
import Api from '../modules/Api/index';
import ClientError from '../modules/Error/ClientError';
import {objectToLong} from './core';
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

let _userId;
let _userIdString;
let _isUserOnline = false;
let _authorHash;
let _fakeMessageId = Long.ZERO;
let _roomHistorySelectedMode = false;
let _appState;

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

export async function clientCondition() {
  const request = await Condition();
  return Api.invoke(CLIENT_CONDITION, request);
}

export async function login() {

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
  userLogin.setPlatformVersion('0');

  userLogin.setDevice(Proto.Device.UNKNOWN_DEVICE);
  userLogin.setDeviceName('UNKNOWN_DEVICE');
  userLogin.setLanguage(Proto.Language.FA_IR);
  // TODO [Amerehie] - 8/30/2017 2:05 PM - setPlatform , setPlatformVersion ...

  return Api.invoke(USER_LOGIN, userLogin);
}

export async function logout() {
  const userLogout = new UserSessionLogout();
  return await Api.invoke(USER_SESSION_LOGOUT, userLogout);
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
  } else {
    deliverMessage(roomId, normalizedRoomMessage.id);
  }

  setFakeMessageId(normalizedRoomMessage.longId);
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
    'markers=color:red|label:G|' + lat + ',' + lan + '&' +
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