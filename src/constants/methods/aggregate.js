/**
 * @flow
 */
import * as methods from '../../constants/methods';
import {getCacheId} from './cacheable';

/**
 * @param {string[]} params
 * @return {string}
 */
function createAggregateId(...params) {
  return params.join('_');
}

/**
 * @callback aggregateTableFunction
 * @param {RequestWrapper} requestWrapper
 * @return {string|null}
 */

/**
 * @type {Object.<number, aggregateTableFunction>}
 */
const aggregateTable = {
  //User 1xx
  [methods.USER_INFO]: function(requestWrapper) {
    /**
     * @type ProtoUserInfo
     */
    const request = requestWrapper.request;
    return createAggregateId(methods.USER_INFO, request.getUserId());
  },

  //Chat 2xx

  //Group chat 3xx

  //Channel 4xx

  //Info 5xx

  //Client 6xx
  [methods.CLIENT_GET_ROOM]: function(requestWrapper) {
    /**
     * @type ProtoClientGetRoom
     */
    const request = requestWrapper.request;
    return createAggregateId(methods.CLIENT_GET_ROOM, request.getRoomId());
  },

  //File 7xx

  //QrCode 8xx

  //Signaling 9xx

  //Geo 10xx
};

/**
 * @param {RequestWrapper} requestWrapper
 * @return {string|number|null}
 */
export function getAggregateId(requestWrapper) {
  const aggregateTableFunction = aggregateTable[requestWrapper.actionId];

  if (aggregateTableFunction) {
    return aggregateTableFunction(requestWrapper);
  }

  return getCacheId(requestWrapper);
}