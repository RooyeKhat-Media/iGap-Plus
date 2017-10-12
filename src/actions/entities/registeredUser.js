/**
 * @flow
 */

export const ENTITIES_REGISTERED_USER_ADD = 'ENTITIES_REGISTERED_USER_ADD';

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


