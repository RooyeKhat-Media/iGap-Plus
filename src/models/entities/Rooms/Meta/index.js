/**
 * @flow
 */

import QueueDb from '../../../../modules/QueueDb/index';
import {persistCallback, retrieveCallback} from './backend';

const {save, remove} = QueueDb(
  persistCallback,
  retrieveCallback,
);

export default class RoomsMeta {

  /**
   * @param {string} roomId
   * @param {string} clearId
   */
  static saveToQueue(roomId, clearId) {
    save(roomId, {
      clearId,
    });
  }

  /**
   * @param roomId
   */
  static removeFromQueue(roomId) {
    return remove(roomId);
  }
}