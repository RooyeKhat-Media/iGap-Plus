import {normalize} from 'normalizr';
import Long from 'long';
import {difference, isEmpty, keys, padStart} from 'lodash';
import Api from '../../Api/index';
import store from '../../../configureStore';
import {ClientGetRoomList, Proto} from '../../Proto/index';
import {CLIENT_GET_ROOM_LIST} from '../../../constants/methods/index';
import {CLIENT_GET_ROOM_LIST_PAGINATION_LIMIT} from '../../../constants/configs';

import {messengerRoomAddList, messengerRoomRemove} from '../../../actions/messenger/rooms';
import {entitiesRoomsAddFull} from '../../../actions/entities/rooms';
import room from '../../../schemas/room';
import Rooms from '../../../models/messenger/Rooms';
import putState from '../../Entities/Rooms/index';
import {sleep} from '../../../utils/core';
import Client from '../../Api/Client';


/**
 * @return {Promise.<void>}
 */
export async function initialRoomsState() {
  if (!Client.instance.isLoggedIn && isEmpty(store.getState().messenger.rooms)) {
    const promises = [];
    const rooms = await Rooms.loadAllFromDb();
    if (!Client.instance.isLoggedIn) {
      for (const roomId in rooms) {
        if (rooms.hasOwnProperty(roomId)) {
          promises.push(putState(roomId));
        }
      }

      await Promise.all(promises);

      if (isEmpty(store.getState().messenger.rooms)) {
        store.dispatch(messengerRoomAddList(rooms, false));
      }
    }
  }
}

/**
 * @return {Promise.<void>}
 */
export async function serverRoomsState() {
  let tries = 0;
  let offset = 0;
  let sort = Long.fromInt(10000000);
  let loadComplete = true;

  const newRoomList = [];

  do {
    const payload = {};
    const pagination = new Proto.Pagination();
    pagination.setLimit(CLIENT_GET_ROOM_LIST_PAGINATION_LIMIT);
    pagination.setOffset(offset);

    const clientGetRoomList = new ClientGetRoomList();
    clientGetRoomList.setPagination(pagination);

    try {
      /**
       * @type ProtoClientGetRoomListResponse
       */
      const clientGetRoomListResponse = await Api.invoke(CLIENT_GET_ROOM_LIST, clientGetRoomList);

      if (!clientGetRoomListResponse.getRoomsList().length) {
        break;
      }
      const normalizedData = normalize(clientGetRoomListResponse.getRoomsList(), [room]);
      store.dispatch(entitiesRoomsAddFull(normalizedData));

      clientGetRoomListResponse.getRoomsList().forEach((roomProto) => {
        sort = sort.sub(1);
        const roomId = roomProto.getId().toString();
        payload[roomId] = {
          id: roomId,
          sort: padStart(sort.toString(), 17, '0'),
          pinId: roomProto.getPinId().toString(),
        };
        newRoomList.push(roomId);
      });

      store.dispatch(messengerRoomAddList(payload));

      offset += clientGetRoomListResponse.getRoomsList().length;
      tries = 0;
      loadComplete = true;
    } catch (e) {
      loadComplete = false;
      await sleep(2);
      tries++;
      if (tries > 3) {
        break;
      }
      console.error('clientGetRoomListResponse', e);
      break;
    }
  } while (true);

  if (loadComplete) {
    const oldRoomList = keys(store.getState().messenger.rooms);
    difference(oldRoomList, newRoomList).forEach(function(roomId) {
      store.dispatch(messengerRoomRemove(roomId));
    });
  }
}