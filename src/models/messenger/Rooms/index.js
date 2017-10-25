/**
 * @flow
 */

import QueueDb from '../../../modules/QueueDb';
import {persistCallback, retrieveAllCallback} from './backend';

const {save, remove} = QueueDb(
  persistCallback,
  () => {
  },
);

export default class Rooms {

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
  static loadAllFromDb() {
    return retrieveAllCallback();
  }
}