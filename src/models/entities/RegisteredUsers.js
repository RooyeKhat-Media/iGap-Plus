/**
 * @flow
 */

import Db from '../../modules/Db';
import QueueDb from '../../modules/QueueDb';
import {
  normalizedRegisteredUserToSerializableRegisteredUser,
  serializableRegisteredUserToNormalizedRegisteredUser,
} from '../../schemas/registeredUser';

const storage = new Db('modelEntitiesRegisteredUsers');
const {save, load} = QueueDb(storage, 1000);

export default class RegisteredUsers {

  /**
   * Get Storage
   * @returns {Db}
   */
  static getStorage() {
    return storage;
  }

  /**
   * @param {FlatRegisteredUser} normalizedRegisteredUser
   */
  static saveToQueue(normalizedRegisteredUser) {
    save(normalizedRegisteredUser.id, normalizedRegisteredUser, normalizedRegisteredUserToSerializableRegisteredUser);
  }

  /**
   * @param {string} userId
   * @return {Promise.<FlatRegisteredUser>}
   */
  static loadFromQueue(userId) {
    return load(userId).then(function(serializableRegisteredUser) {
      return serializableRegisteredUserToNormalizedRegisteredUser(serializableRegisteredUser);
    });
  }
}