/**
 * @flow
 */

import Db from '../modules/Db';
import QueueDb from '../modules/QueueDb';
import {getSessionUid} from '../modules/Api';
import base64 from 'base64-js';
import binaryToBase64 from 'react-native/Libraries/Utilities/binaryToBase64';

const storage = new Db('modelCacheableMethod');
const {save, remove, load} = QueueDb(storage);

/**
 * @typedef {{data:Uint8Array,sessionUid:number}} CachedMethodResponse
 */


export default class CacheableMethod {

  /**
   * Get Storage
   * @returns {Db}
   */
  static getStorage() {
    return storage;
  }

  /**
   * @param {string} id
   * @param {Uint8Array} data
   */
  static saveToQueue(id, data) {
    save(id, {
      data: binaryToBase64(data),
      sessionUid: getSessionUid(),
    });
  }

  /**
   * @param {string} id
   */
  static revokeToQueue(id) {
    remove(id);
  }

  /**
   * @param {string} id
   * @return {Promise.<CachedMethodResponse>}
   */
  static loadFromQueue(id) {
    return load(id).then(function(value) {
      return {
        ...value,
        data: new Uint8Array(base64.toByteArray(value.data).buffer),
      };
    });
  }
}