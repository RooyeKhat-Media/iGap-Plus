import store from '../../../configureStore';
import Client from '../../Api/Client';
import Long from 'long';
import Api from '../../Api/index';
import {CLIENT_GET_ROOM} from '../../../constants/methods/index';
import {ClientGetRoom} from '../../Proto/index';
import Rooms from '../../../models/entities/Rooms';
import {entitiesRoomsAdd} from '../../../actions/entities/rooms';

/**
 * @param {string} id
 * @param {bool} offlineInvokeApi Whether to need invoke api in offline mode
 * @return {Promise.<void>}
 */
export default async function putState(id, offlineInvokeApi = false) {
  const room = store.getState().entities.rooms[id];
  if (!room) {
    if (Client.instance.isLoggedIn) {
      await apiInvoke(id);
    } else {
      try {
        const normalizedRoom = await Rooms.loadFromQueue(id);
        store.dispatch(entitiesRoomsAdd({
          [normalizedRoom.id]: normalizedRoom,
        }, false));
      } finally {
        if (offlineInvokeApi) {
          await apiInvoke(id);
        }
      }
    }
  }
}

/**
 * @param {string} id
 * @return {Promise.<ProtoClientGetRoomResponse>}
 */
function apiInvoke(id) {
  const clientGetRoom = new ClientGetRoom();
  clientGetRoom.setRoomId(Long.fromString(id));

  return Api.invoke(CLIENT_GET_ROOM, clientGetRoom);
}