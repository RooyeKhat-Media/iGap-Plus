/**
 * @flow
 */

import Db from '../modules/Db';

const storage = new Db('modelMetaData');

export default class {

  /**
   * Get Storage
   * @returns {Db}
   */
  static getStorage() {
    return storage;
  }

  /**
   * Load meta data
   * @param {string} id
   * @returns {Promise.<any|null>}
   */
  static load(id) {
    return storage.get(id).then(function(doc) {
      return doc.metaData;
    }).catch(function(err) {
      return null;
    });
  }

  /**
   * Save meta data
   * @param {string} id
   * @param {any} data
   * @returns {Promise.<any>}
   */
  static save(id, data) {
    return storage.get(id).catch(function(err) {
      return {
        _id: id,
        metaData: data,
      };
    }).then(function(doc) {
      doc.metaData = data;
      return storage.put(doc);
    });
  }
}