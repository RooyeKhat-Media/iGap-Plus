import Long from 'long';
import Api from '../../Api/index';
import {USER_INFO} from '../../../constants/methods/index';
import {UserInfo} from '../../Proto/index';
import RegisteredUsers from '../../../models/entities/RegisteredUsers';
import {entitiesRegisteredUserAdd} from '../../../actions/entities/registeredUser';
import store from '../../../configureStore';

/**
 * @param {string} id
 * @param {string} cacheId
 * @return {Promise.<void>}
 */
export default async function putState(id, cacheId = null) {
  const user = store.getState().entities.registeredUsers[id];
  if (!user || (cacheId && user.cacheId !== cacheId)) {
    try {
      // todo collector map
      const normalizedRegisteredUser = await RegisteredUsers.loadFromQueue(id);

      if (!store.getState().entities.registeredUsers[id]) {
        store.dispatch(entitiesRegisteredUserAdd({
          [normalizedRegisteredUser.id]: normalizedRegisteredUser,
        }, false));
      }

      if (cacheId && normalizedRegisteredUser.cacheId !== cacheId) {
        throw new Error('User cacheId is changed and local data is not valid');
      }
    } catch (e) {
      await apiInvoke(id);
    }
  }
}

/**
 * @param {string} id
 * @return {Promise.<ProtoUserInfoResponse>}
 */
function apiInvoke(id) {
  const userInfo = new UserInfo();
  userInfo.setUserId(Long.fromString(id));

  return Api.invoke(USER_INFO, userInfo);
}