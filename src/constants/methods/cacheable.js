/**
 * @flow
 */
import * as methods from '../../constants/methods';
import {getUserId} from '../../utils/app';

/**
 * @param {string[]} params
 * @return {string}
 */
function createCacheId(...params) {
  return params.join('_');
}

/**
 * @callback cacheTableFunction
 * @param {RequestWrapper} requestWrapper
 * @return {string|null}
 */

/**
 * @type {Object.<number, cacheTableFunction>}
 */
const cacheTable = {
  //User 1xx
  [methods.USER_CONTACTS_GET_LIST]: function(requestWrapper) {
    return createCacheId(methods.USER_CONTACTS_GET_LIST);
  },

  [methods.USER_PROFILE_GET_EMAIL]: function(requestWrapper) {
    return createCacheId(methods.USER_PROFILE_GET_EMAIL);
  },

  [methods.USER_PROFILE_GET_GENDER]: function(requestWrapper) {
    return createCacheId(methods.USER_PROFILE_GET_GENDER);
  },

  [methods.USER_PROFILE_GET_NICKNAME]: function(requestWrapper) {
    return createCacheId(methods.USER_PROFILE_GET_NICKNAME);
  },

  [methods.USER_AVATAR_GET_LIST]: function(requestWrapper) {
    /**
     * @type ProtoUserAvatarGetList
     */
    const request = requestWrapper.request;
    return createCacheId(methods.USER_AVATAR_GET_LIST, request.getUserId().toString());
  },

  [methods.USER_PROFILE_GET_SELF_REMOVE]: function(requestWrapper) {
    return createCacheId(methods.USER_PROFILE_GET_SELF_REMOVE);
  },

  [methods.USER_CONTACTS_GET_BLOCKED_LIST]: function(requestWrapper) {
    return createCacheId(methods.USER_CONTACTS_GET_BLOCKED_LIST);
  },

  [methods.USER_PRIVACY_GET_RULE]: function(requestWrapper) {
    /**
     * @type ProtoUserPrivacyGetRule
     */
    const request = requestWrapper.request;
    return createCacheId(methods.USER_PRIVACY_GET_RULE, request.getType());
  },

  //Chat 2xx

  //Group chat 3xx
  [methods.GROUP_AVATAR_GET_LIST]: function(requestWrapper) {
    /**
     * @type ProtoGroupAvatarGetList
     */
    const request = requestWrapper.request;
    return createCacheId(methods.GROUP_AVATAR_GET_LIST, request.getRoomId());
  },

  //Channel 4xx
  [methods.CHANNEL_AVATAR_GET_LIST]: function(requestWrapper) {
    /**
     * @type ProtoChannelAvatarGetList
     */
    const request = requestWrapper.request;
    return createCacheId(methods.CHANNEL_AVATAR_GET_LIST, request.getRoomId());
  },

  //Info 5xx
  [methods.INFO_LOCATION]: function(requestWrapper) {
    return createCacheId(methods.INFO_LOCATION);
  },

  [methods.INFO_COUNTRY]: function(requestWrapper) {
    /**
     * @type ProtoInfoCountry
     */
    const request = requestWrapper.request;
    return createCacheId(methods.INFO_COUNTRY, request.getIsoCode());
  },

  [methods.INFO_PAGE]: function(requestWrapper) {
    /**
     * @type ProtoInfoPage
     */
    const request = requestWrapper.request;
    return createCacheId(methods.INFO_PAGE, request.getId());
  },

  [methods.INFO_WALLPAPER]: function(requestWrapper) {
    /**
     * @type ProtoInfoWallpaper
     */
    const request = requestWrapper.request;
    return createCacheId(methods.INFO_WALLPAPER, request.getFit());
  },

  //Client 6xx

  //File 7xx

  //QrCode 8xx

  //Signaling 9xx
  [methods.SIGNALING_GET_CONFIGURATION]: function(requestWrapper) {
    return createCacheId(methods.SIGNALING_GET_CONFIGURATION);
  },

  //Geo 10xx
  [methods.GEO_GET_REGISTER_STATUS]: function(requestWrapper) {
    return createCacheId(methods.GEO_GET_REGISTER_STATUS);
  },
};

/**
 * @param {RequestWrapper} requestWrapper
 * @return {string|null}
 */
export function getCacheId(requestWrapper) {
  const cacheTableFunction = cacheTable[requestWrapper.actionId];

  if (cacheTableFunction) {
    return cacheTableFunction(requestWrapper);
  }
  return null;
}

/**
 * @callback cacheRevokeTableFunction
 * @param {RequestWrapper} requestWrapper
 * @return {string[]|null}
 */

/**
 * @type {Object.<number, cacheRevokeTableFunction>}
 */
const cacheRevokeTable = {
  //User 1xx
  [methods.USER_PROFILE_SET_EMAIL]: function(requestWrapper) {
    return [
      createCacheId(methods.USER_PROFILE_GET_EMAIL),
    ];
  },

  [methods.USER_PROFILE_SET_GENDER]: function(requestWrapper) {
    return [
      createCacheId(methods.USER_PROFILE_GET_GENDER),
    ];
  },

  [methods.USER_PROFILE_SET_NICKNAME]: function(requestWrapper) {
    return [
      createCacheId(methods.USER_PROFILE_GET_NICKNAME),
    ];
  },

  [methods.USER_CONTACTS_IMPORT]: function(requestWrapper) {
    return [
      createCacheId(methods.USER_CONTACTS_GET_LIST),
    ];
  },

  [methods.USER_CONTACTS_DELETE]: function(requestWrapper) {
    return [
      createCacheId(methods.USER_CONTACTS_GET_LIST),
    ];
  },

  [methods.USER_CONTACTS_EDIT]: function(requestWrapper) {
    return [
      createCacheId(methods.USER_CONTACTS_GET_LIST),
    ];
  },

  [methods.USER_AVATAR_ADD]: function(requestWrapper) {
    return [
      createCacheId(methods.USER_AVATAR_GET_LIST, getUserId().toString()),
    ];
  },

  [methods.USER_AVATAR_DELETE]: function(requestWrapper) {
    return [
      createCacheId(methods.USER_AVATAR_GET_LIST, getUserId().toString()),
    ];
  },

  [methods.USER_PROFILE_SET_SELF_REMOVE]: function(requestWrapper) {
    return [
      createCacheId(methods.USER_PROFILE_GET_SELF_REMOVE),
    ];
  },

  [methods.USER_CONTACTS_BLOCK]: function(requestWrapper) {
    return [
      createCacheId(methods.USER_CONTACTS_GET_BLOCKED_LIST),
    ];
  },

  [methods.USER_CONTACTS_UNBLOCK]: function(requestWrapper) {
    return [
      createCacheId(methods.USER_CONTACTS_GET_BLOCKED_LIST),
    ];
  },

  [methods.USER_PRIVACY_SET_RULE]: function(requestWrapper) {
    /**
     * @type ProtoUserPrivacySetRule
     */
    const request = requestWrapper.request;
    return [
      createCacheId(methods.USER_PRIVACY_GET_RULE, request.getType()),
    ];
  },

  //Chat 2xx

  //Group chat 3xx
  [methods.GROUP_AVATAR_ADD]: function(requestWrapper) {
    /**
     * @type ProtoGroupAvatarAdd
     */
    const request = requestWrapper.request;
    return [
      createCacheId(methods.GROUP_AVATAR_GET_LIST, request.getRoomId()),
    ];
  },

  [methods.GROUP_AVATAR_DELETE]: function(requestWrapper) {
    /**
     * @type ProtoGroupAvatarDelete
     */
    const request = requestWrapper.request;
    return [
      createCacheId(methods.GROUP_AVATAR_GET_LIST, request.getRoomId()),
    ];
  },

  //Channel 4xx
  [methods.CHANNEL_AVATAR_ADD]: function(requestWrapper) {
    /**
     * @type ProtoChannelAvatarAdd
     */
    const request = requestWrapper.request;
    return [
      createCacheId(methods.CHANNEL_AVATAR_GET_LIST, request.getRoomId()),
    ];
  },

  [methods.CHANNEL_AVATAR_DELETE]: function(requestWrapper) {
    /**
     * @type ProtoChannelAvatarDelete
     */
    const request = requestWrapper.request;
    return [
      createCacheId(methods.CHANNEL_AVATAR_GET_LIST, request.getRoomId()),
    ];
  },

  //Info 5xx

  //Client 6xx

  //File 7xx

  //QrCode 8xx

  //Signaling 9xx

  //Geo 10xx
  [methods.GEO_REGISTER]: function(requestWrapper) {
    return [
      createCacheId(methods.GEO_GET_REGISTER_STATUS),
    ];
  },
};

/**
 * @param {RequestWrapper} requestWrapper
 * @return {string[]|null}
 */
export function getCacheRevokeIds(requestWrapper) {
  const cacheRevokeTableFunction = cacheRevokeTable[requestWrapper.actionId];

  if (cacheRevokeTableFunction) {
    const ids = cacheRevokeTableFunction(requestWrapper);
    if (ids && ids.length) {
      return [...ids];
    }
  }
  return null;
}