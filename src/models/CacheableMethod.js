/**
 * @flow
 */

import Db from '../modules/Db';
import QueueDb from '../modules/QueueDb';
import {getSessionUid} from '../modules/Api';
import {objectToUint8Array} from '../utils/core';

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
      data,
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
        data: objectToUint8Array(value.data),
      };
    });
  }
}