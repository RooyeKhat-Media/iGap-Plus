/**
 * @flow
 */

import QueueDb from '../../../modules/QueueDb';
import {persistCallback, retrieveCallback, retrieveHistoryCallback} from './backend';

const {save, load} = QueueDb(
  persistCallback,
  retrieveCallback
);


export default class RoomMessages {

  /**
   * @param {FlatRoomMessage} normalizedRoomMessage
   */
  static saveToQueue(normalizedRoomMessage) {
    save(normalizedRoomMessage.id, normalizedRoomMessage);
  }

  /**
   * @returns {Promise.<void>}
   */
  static async loadFromQueue(roomMessageId) {
    return load(roomMessageId); // todo create LoadFractionFromDb
  }

  /**
   * @param {string} roomId
   * @param {string|null} firstMessageId
   * @param {boolean} upward
   * @param {number} limit
   * @return {Promise.<FlatRoomMessage[]>}
   */
  static async loadHistoryFromDb(roomId, firstMessageId, upward, limit) {
    return retrieveHistoryCallback(roomId, firstMessageId, upward, limit);
  }
}