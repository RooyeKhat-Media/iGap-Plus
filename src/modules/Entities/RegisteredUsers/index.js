import Long from 'long';
import Api from '../../Api/index';
import {USER_INFO} from '../../../constants/methods/index';
import {UserInfo} from '../../Proto/index';
import RegisteredUsers from '../../../models/entities/RegisteredUsers';
import {entitiesRegisteredUserAdd} from '../../../actions/entities/registeredUser';
import store from '../../../configureStore';
import {isEmpty} from 'lodash';
import Collector from '../../Collector';

const {collect} = Collector(
  (collected) => {
    const registeredUserEntities = {};
    for (const normalizedRegisteredUser of collected.values()) {
      if (!store.getState().entities.registeredUsers[normalizedRegisteredUser.id]) {
        registeredUserEntities[normalizedRegisteredUser.id] = normalizedRegisteredUser;
      }
    }

    if (!isEmpty(registeredUserEntities)) {
      store.dispatch(entitiesRegisteredUserAdd(registeredUserEntities, false));
    }
  },
  250
);

const _pendingUsers = new Map();

/**
 * @param {string} id
 * @param {string} cacheId
 * @return {Promise.<void>}
 */
export default async function putState(id, cacheId = null) {
  const user = store.getState().entities.registeredUsers[id];
  if (!user || (cacheId && user.cacheId !== cacheId)) {
    try {
      const normalizedRegisteredUser = await RegisteredUsers.loadFromQueue(id);

      collect(normalizedRegisteredUser, normalizedRegisteredUser.id);

      if (cacheId && normalizedRegisteredUser.cacheId !== cacheId) {
        throw new Error('User cacheId is changed and local data is not valid');
      }
    } catch (e) {
      await apiInvoke(Long.fromString(id));
    }
  }
}

/**
 * @param {Long} id
 * @return {Promise.<ProtoUserInfoResponse>}
 */
export function apiInvoke(id) {
  const userInfo = new UserInfo();
  userInfo.setUserId(id);

  return Api.invoke(USER_INFO, userInfo);
}

/**
 * wait for User
 * @param {string} id
 * @returns {Promise}
 */
export function waitForUser(id) {
  const user = store.getState().entities.registeredUsers[id];
  if (user) {
    return user;
  }
  if (!_pendingUsers.has(id)) {
    const data = {};
    data.promise = new Promise((resolve, reject) => {
      data.resolve = resolve;
      if (process.env.NODE_ENV !== 'development') {
        setTimeout(reject, 10 * 1000);
      }
    });
    _pendingUsers.set(id, data);
    return data.promise;
  } else {
    return _pendingUsers.get(id).promise;
  }
}
/**
 * @param {FlatRegisteredUser} user
 */
export function resolveUser(user) {
  if (_pendingUsers.has(user.id)) {
    _pendingUsers.get(user.id).resolve(user);
    _pendingUsers.delete(user.id);
  }
}