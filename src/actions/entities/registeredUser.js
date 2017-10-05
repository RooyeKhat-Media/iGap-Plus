/**
 * @flow
 */

export const ENTITIES_REGISTERED_USER_ADD = 'ENTITIES_REGISTERED_USER_ADD';

/**
 * @param {NormalizedRegisteredUserEntities} registeredUser
 * @return {{type: string, userId: string, registeredUser: FlatRegisteredUser}}
 */
export function entitiesRegisteredUserAdd(registeredUser) {
  return {
    type: ENTITIES_REGISTERED_USER_ADD,
    registeredUser,
  };
}


