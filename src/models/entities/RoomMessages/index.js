/**
 * @flow
 */

import QueueDb from '../../../modules/QueueDb';
import {persistCallback} from './backend';

const {save} = QueueDb(
  persistCallback,
  () => {
  }
);

export default class RoomMessages {

  /**
   * @param {FlatRoomMessage} normalizedRoomMessage
   */
  static saveToQueue(normalizedRoomMessage) {
    save(normalizedRoomMessage.id, normalizedRoomMessage);
  }

  /**
   * @param {string} fromMessageId
   * @param {string} roomId
   * @param {string} direction
   * @param {boolean} searchHistory
   * @return {Promise.<FlatRoomMessage>}
   */
  static async loadFromDb(roomId, fromMessageId, direction = 'up', searchHistory = false) {
    const roomMessages = {};

    return roomMessages;
  }
}