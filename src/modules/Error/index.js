/**
 * @flow
 */

import i18n from '../../i18n/index';
import * as apiErrors from '../Api/errors/index';
import {login} from '../../utils/app';
import {goUserNewProfileScreen, goUserTwoStepVerificationScreen} from '../../navigators/AppNavigator';
import cleanup from '../Cleanup/index';

/**
 * Get i18n key for error
 * @param {number} majorCode
 * @param {number|null} minorCode
 * @return {string}
 */
export function errorI18nKey(majorCode, minorCode = null) {
  return 'e' + errorId(majorCode, minorCode);
}

/**
 * Get i18n id for error
 * @param {number} majorCode
 * @param {number|null} minorCode
 * @return {string}
 */
export function errorI18nId(majorCode, minorCode = null) {
  return 'e.' + errorId(majorCode, minorCode);
}

/**
 * Get id for error
 * @param {number} majorCode
 * @param {number|null} minorCode
 * @return {string}
 */
export function errorId(majorCode, minorCode = null) {
  if (minorCode) {
    return `${majorCode}_${minorCode}`;
  } else {
    return `${majorCode}`;
  }
}

/**
 * Get i18n message for error
 * @param {number} majorCode
 * @param {number|null} minorCode
 * @return {{id:string,defaultMessage:string,description:string}}
 */
export function getI18nMessage(majorCode, minorCode = null) {
  let i18nMessage;
  if (i18n.hasOwnProperty(errorI18nKey(majorCode, minorCode))) {
    i18nMessage = i18n[errorI18nKey(majorCode, minorCode)];
  } else if (minorCode && i18n.hasOwnProperty(errorI18nKey(majorCode))) {
    i18nMessage = i18n[errorI18nKey(majorCode)];
  } else {
    i18nMessage = i18n.eDefault;
  }
  return i18nMessage;
}

/**
 * @param {ProtoErrorResponse} errorResponse
 * @return {{majorCode:number, minorCode:number, wait:number, message:string}}
 * @constructor
 */
export function getI18nValues(errorResponse) {
  return {
    majorCode: errorResponse.getMajorCode(),
    minorCode: errorResponse.getMinorCode(),
    wait: errorResponse.getWait(),
    message: errorResponse.getMessage(),
  };
}

/**
 * @param {ProtoErrorResponse}  errorResponse
 * @return {{values: {majorCode: number, minorCode: number, wait: number, message: string}}}
 */
export function getFullI18nMessage(errorResponse) {
  return {
    ...getI18nMessage(errorResponse.getMajorCode(), errorResponse.getMinorCode()),
    values: getI18nValues(errorResponse),
  };
}

/**
 * React to error according to reactionTable
 * @param {ProtoErrorResponse} errorResponse
 * @param {RequestWrapper|null} requestWrapper
 */
export function autoReact(errorResponse, requestWrapper) {
  const majorCode = errorResponse.getMajorCode();
  const minorCode = errorResponse.getMinorCode();

  let reactionFunction = null;
  if (reactionTable.hasOwnProperty(errorId(majorCode, minorCode))) {
    reactionFunction = reactionTable[errorId(majorCode, minorCode)];
  } else if (minorCode && reactionTable.hasOwnProperty(errorId(majorCode))) {
    reactionFunction = reactionTable[errorId(majorCode)];
  }
  if (reactionFunction) {
    reactionFunction(errorResponse, requestWrapper);
  }
}

/**
 * @param {object.<string,number|string>} errorMapTable Table that map errorId to element id
 * @param {errorMapReactionCallback} errorMapReactionCallback
 * @return {errorReactionFunction}
 */
export function mapReact(errorMapTable, errorMapReactionCallback) {
  return (errorResponse, requestWrapper) => {
    const majorCode = errorResponse.getMajorCode();
    const minorCode = errorResponse.getMinorCode();

    let elementId = undefined;
    if (errorMapTable.hasOwnProperty(errorId(majorCode, minorCode))) {
      elementId = errorMapTable[errorId(majorCode, minorCode)];
    } else if (minorCode && errorMapTable.hasOwnProperty(errorId(majorCode))) {
      elementId = errorMapTable[errorId(majorCode)];
    }

    if (elementId !== undefined) {
      errorMapReactionCallback(
        elementId,
        getFullI18nMessage(errorResponse)
      );
    } else {
      autoReact(errorResponse, requestWrapper);
    }
  };
}

/**
 * @callback errorReactionFunction
 * @param {ProtoErrorResponse} errorResponse
 * @param {RequestWrapper} requestWrapper
 */

/**
 * @type {Object.<string, errorReactionFunction>}
 */
const reactionTable = {
  [errorId(apiErrors.ERROR_LOGIN_REQUIRED)]: () => {
    login();
  },
  [errorId(apiErrors.ERROR_SESSION_IS_TERMINATED)]: () => {
    cleanup();
  },
  [errorId(apiErrors.ERROR_NICKNAME_REQUIRED)]: () => {
    goUserNewProfileScreen();
  },

  //User 1xx

  [errorId(apiErrors.ERROR_USER_LOGIN_FAILED)]: () => {
    cleanup();
  },
  [errorId(apiErrors.ERROR_USER_VERIFY_TWO_STEP_VERIFICATION_ENABLED)]: () => {
    goUserTwoStepVerificationScreen();
  },

  //Chat 2xx

  //Group chat 3xx

  //Channel 4xx

  //Info 5xx

  //Client 6xx

  //File 7xx

  //QrCode 8xx

  //Signaling 9xx

  //Geo 10xx
};

export default reactionTable;