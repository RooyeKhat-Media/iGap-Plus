/**
 * @flow
 */

import QueueDb from '../../../modules/QueueDb';
import {persistCallback, retrieveCallback, retrieveHistoryCallback, clearHistory} from './backend';
import {Proto} from '../../../modules/Proto';

const {save, load, remove} = QueueDb(
  persistCallback,
  retrieveCallback,
  500,
  500,
  50
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
    const message = await load(roomMessageId); // todo create LoadFractionFromDb
    if (message.status === Proto.RoomMessageStatus.SENDING) {
      message.status = Proto.RoomMessageStatus.FAILED;
    }
    return message;
  }

  static removeFromQueue(messageId) {
    return remove(messageId);
  }

  /**
   * @param {string} roomId
   * @param {string|null} firstMessageId
   * @param {boolean} upward
   * @param {number} limit
   * @return {Promise.<FlatRoomMessage[]>}
   */
  static async loadHistoryFromDb(roomId, firstMessageId, upward, limit) {
    const roomMessages = await retrieveHistoryCallback(roomId, firstMessageId, upward, limit);
    roomMessages.map(function(message) {
      if (message.status === Proto.RoomMessageStatus.SENDING) {
        message.status = Proto.RoomMessageStatus.FAILED;
      }
      return message;
    });
    return roomMessages;
  }

  static clearHistory(roomId, clearId) {
    return clearHistory(roomId, clearId);
  }
}