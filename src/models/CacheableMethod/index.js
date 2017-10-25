/**
 * @flow
 */

import QueueDb from '../../modules/QueueDb';
import {getSessionUid} from '../../modules/Api';
import {persistCallback, retrieveCallback} from './backend';

const {save, remove, load} = QueueDb(
  persistCallback,
  retrieveCallback
);


/**
 * @typedef {{data:Uint8Array,sessionUid:number}} CachedMethodResponse
 */


export default class CacheableMethod {

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
    return load(id);
  }
}