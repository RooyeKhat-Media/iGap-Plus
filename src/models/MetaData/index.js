/**
 * @flow
 */

import {storage} from './storage';

export default class MetaData {
  /**
   * Load meta data
   * @param {string} id
   * @returns {Promise.<any|null>}
   */
  static load(id) {
    return new Promise((resolve, reject) => {
      storage.readTransaction((transaction) => {
        transaction.executeSql('SELECT data FROM metadata WHERE id=?', [id], (transaction, results) => {
          if (results.rows.length) {
            resolve(JSON.parse(results.rows.item(0).data));
          } else {
            resolve(null);
          }
        });
      }, (error) => {
        reject(error);
      });
    });
  }

  /**
   * Save meta data
   * @param {string} id
   * @param {any} data
   * @returns {Promise}
   */
  static save(id, data) {
    return new Promise((resolve, reject) => {
      storage.transaction((transaction) => {
        transaction.executeSql('INSERT INTO metadata (id,data) VALUES (?,?)', [id, JSON.stringify(data)]);
      }, (error) => {
        reject(error);
      }, () => {
        resolve();
      });
    });
  }
}