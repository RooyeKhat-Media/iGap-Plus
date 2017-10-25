/**
 * @flow
 */

import QueueDb from '../../../modules/QueueDb';
import {persistCallback, retrieveCallback} from './backend';

const {save, load} = QueueDb(
  persistCallback,
  retrieveCallback,
);

export default class Rooms {

  /**
   * @param {FlatRoom} normalizedRoom
   */
  static saveToQueue(normalizedRoom) {
    save(normalizedRoom.id, normalizedRoom);
  }

  /**
   * @param {string} roomId
   * @return {Promise.<FlatRoom>}
   */
  static loadFromQueue(roomId) {
    return load(roomId);
  }
}