/**
 * @flow
 */

import QueueDb from '../../../modules/QueueDb';
import {persistCallback, retrieveCallback} from './backend';

const {save, load} = QueueDb(
  persistCallback,
  retrieveCallback,
);

export default class RegisteredUsers {

  /**
   * @param {FlatRegisteredUser} normalizedRegisteredUser
   */
  static saveToQueue(normalizedRegisteredUser) {
    save(normalizedRegisteredUser.id, normalizedRegisteredUser);
  }

  /**
   * @param {string} userId
   * @return {Promise.<FlatRegisteredUser>}
   */
  static loadFromQueue(userId) {
    return load(userId);
  }
}