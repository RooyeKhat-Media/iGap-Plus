/**
 * @flow
 */

export const ENTITIES_REGISTERED_USER_ADD = 'ENTITIES_REGISTERED_USER_ADD';
export const ENTITIES_REGISTERED_USER_EDIT = 'ENTITIES_REGISTERED_USER_EDIT';

/**
 * @param {NormalizedRegisteredUserEntities} registeredUsers
 * @param {boolean} fromServer
 * @return {{type: string, userId: string, registeredUser: FlatRegisteredUser}}
 */
export function entitiesRegisteredUserAdd(registeredUsers, fromServer = true) {
  return {
    type: ENTITIES_REGISTERED_USER_ADD,
    registeredUsers,
    fromServer,
  };
}

/**
 * @param {string} id
 * @param {object} payload
 * @param {boolean} updateServer
 * @returns {{type: string, payload: object, fromServer: boolean}}
 */
export function entitiesRegisteredUserEdit(id, payload, updateServer = true) {
  return {
    type: ENTITIES_REGISTERED_USER_EDIT,
    id,
    payload,
    updateServer,
  };
}

