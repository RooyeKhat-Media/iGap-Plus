/**
 * @flow
 */

import Db from '../../modules/Db';
import QueueDb from '../../modules/QueueDb';
import {normalizedRoomToSerializableRoom, serializableRoomToNormalizedRoom} from '../../schemas/room';

const storage = new Db('modelEntitiesRooms');
const {save, load} = QueueDb(storage, 3000);

export default class Rooms {

  /**
   * Get Storage
   * @returns {Db}
   */
  static getStorage() {
    return storage;
  }

  /**
   * @param {FlatRoom} normalizedRoom
   */
  static saveToQueue(normalizedRoom) {
    save(normalizedRoom.id, normalizedRoom, normalizedRoomToSerializableRoom);
  }

  /**
   * @param {string} roomId
   * @return {Promise.<FlatRoom>}
   */
  static loadFromQueue(roomId) {
    return load(roomId).then(function(serializableRoom) {
      return serializableRoomToNormalizedRoom(serializableRoom);
    });
  }
}