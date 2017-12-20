import MetaData from '../models/MetaData';
import {UserLogin} from '../modules/Proto/index';
import {Proto} from '../modules/Proto';
import {APP_BUILD_VERSION, APP_ID, APP_NAME, APP_VERSION, GOOGLE_API_KEY} from '../constants/configs';
import {USER_LOGIN} from '../constants/methods/index';
import Api from '../modules/Api/index';
import ClientError from '../modules/Error/ClientError';
import {objectToLong} from './core';
import {METADATA_AUTHOR_HASH, METADATA_USER_ID, METADATA_USER_TOKEN} from '../models/MetaData/constant';
import {FILE_UPLOAD_ID_ROOM_AVATAR_PREFIX, FILE_UPLOAD_ID_ROOM_HISTORY_PREFIX} from '../constants/app';

import putStateRegisteredUser from '../modules/Entities/RegisteredUsers';
import putStateRoom from '../modules/Entities/Rooms';
import Long from 'long';

let _userId;
let _userIdString;
let _authorHash;
let _fakeMessageId = Long.ZERO;
let _roomHistorySelectedMode = false;

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
  _userIdString = _userId.toString();
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

  userLogin.setPlatform(Proto.Platform.UNKNOWN_PLATFORM);
  userLogin.setPlatformVersion('0');

  userLogin.setDevice(Proto.Device.UNKNOWN_DEVICE);
  userLogin.setDeviceName('UNKNOWN_DEVICE');
  userLogin.setLanguage(Proto.Language.FA_IR);
  // TODO [Amerehie] - 8/30/2017 2:05 PM - setPlatform , setPlatformVersion ...

  return Api.invoke(USER_LOGIN, userLogin);
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