/**
 * @flow
 */

import Db from '../../modules/Db';
import QueueDb from '../../modules/QueueDb';

const storage = new Db('modelMessengerRooms');
const {save, remove} = QueueDb(storage, 1000);

export default class Rooms {

  /**
   * Get Storage
   * @returns {Db}
   */
  static getStorage() {
    return storage;
  }

  /**
   * @param {MessengerRoomPayload} room
   */
  static saveToQueue(room) {
    save(room.id, room);
  }

  /**
   * @param roomId
   */
  static removeFromQueue(roomId) {
    remove(roomId);
  }

  /**
   * @return {Promise.<MessengerRoomsPayload>}
   */
  static async loadAllFromDb() {

    const rooms = {};
    const allDocs = await storage.allDocs({
      include_docs: true,
    });

    allDocs.rows.forEach(function(element) {
      rooms[element.key] = element.doc;
    });

    return rooms;
  }
}