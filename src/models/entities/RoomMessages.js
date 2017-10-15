/**
 * @flow
 */

import Db from '../../modules/Db';
import QueueDb from '../../modules/QueueDb';
import {normalizedRoomMessageToSerializableRoomMessage} from '../../schemas/roomMessage';

const storage = new Db('modelEntitiesRoomMessages');
const {save} = QueueDb(storage, 1000);
storage.createIndex({
  index: {fields: ['roomId']},
});

export default class RoomMessages {

  /**
   * Get Storage
   * @returns {Db}
   */
  static getStorage() {
    return storage;
  }

  /**
   * @param {FlatRoomMessage} normalizedRoomMessage
   */
  static saveToQueue(normalizedRoomMessage) {
    save(normalizedRoomMessage.id, normalizedRoomMessage, normalizedRoomMessageToSerializableRoomMessage);
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