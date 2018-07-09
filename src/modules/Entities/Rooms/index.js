import store from '../../../configureStore';
import Client from '../../Api/Client';
import Long from 'long';
import Api from '../../Api/index';
import {CLIENT_GET_ROOM} from '../../../constants/methods/index';
import {ClientGetRoom} from '../../Proto/index';
import Rooms from '../../../models/entities/Rooms';
import {entitiesRoomsAdd} from '../../../actions/entities/rooms';
import putRegisteredUserState from '../RegisteredUsers';
import {isEmpty} from 'lodash';
import Collector from '../../Collector';
import putRoomMessageState from '../RoomMessages';

const {collect} = Collector(
  (collected) => {
    const roomEntities = {};
    for (const normalizedRoom of collected.values()) {
      if (!store.getState().entities.rooms[normalizedRoom.id]) {
        roomEntities[normalizedRoom.id] = normalizedRoom;
      }
    }

    if (!isEmpty(roomEntities)) {
      store.dispatch(entitiesRoomsAdd(roomEntities, false));
    }
  },
  250
);

const _pendingRoom = new Map();

/**
 * @param {string} id
 * @param {boolean} offlineInvokeApi Whether to need invoke api in offline mode
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
        if (normalizedRoom.chatPeer) {
          putRegisteredUserState(normalizedRoom.chatPeer);
        }
        if (normalizedRoom.lastMessage) {
          putRoomMessageState(normalizedRoom.lastMessage);
        }
        if (normalizedRoom.firstUnreadMessage) {
          putRoomMessageState(normalizedRoom.firstUnreadMessage);
        }
        collect(normalizedRoom, normalizedRoom.id);
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
export function apiInvoke(id) {
  const clientGetRoom = new ClientGetRoom();
  clientGetRoom.setRoomId(Long.fromString(id));

  return Api.invoke(CLIENT_GET_ROOM, clientGetRoom);
}

/**
 * wait for room
 * @param id
 * @returns {Promise}
 */
export function waitForRoom(id) {
  let room = store.getState().entities.rooms[id];
  if (room) {
    return room;
  }
  if (!_pendingRoom.has(id)) {
    const data = {};
    data.promise = new Promise((resolve, reject) => {
      data.resolve = resolve;
      if (process.env.NODE_ENV !== 'development') {
        setTimeout(reject, 10 * 1000);
      }
    });
    _pendingRoom.set(id, data);
    return data.promise;
  } else {
    return _pendingRoom.get(id).promise;
  }
}

/**
 * @param {FlatRoom} room
 */
export function resolveRoom(room) {
  if (_pendingRoom.has(room.id)) {
    _pendingRoom.get(room.id).resolve(room);
    _pendingRoom.delete(room.id);
  }
}