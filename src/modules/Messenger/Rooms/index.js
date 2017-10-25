import {normalize} from 'normalizr';
import Long from 'long';
import {difference, isEmpty, keys} from 'lodash';
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


/**
 * @return {Promise.<void>}
 */
export async function initialRoomsState() {
  if (isEmpty(store.getState().messenger.rooms)) {
    const rooms = await Rooms.loadAllFromDb();
    for (const roomId in rooms) {
      if (rooms.hasOwnProperty(roomId)) {
        await putState(roomId);
      }
    }
    if (isEmpty(store.getState().messenger.rooms)) {
      store.dispatch(messengerRoomAddList(rooms, false));
    }
  }
}

/**
 * @return {Promise.<void>}
 */
export async function serverRoomsState() {

  let offset = 0;
  let sort = Long.fromInt(10000000);

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
          sort: sort.toString(),
        };
        newRoomList.push(roomId);
      });

      store.dispatch(messengerRoomAddList(payload));

      offset += clientGetRoomListResponse.getRoomsList().length;

    } catch (e) {
      console.error('clientGetRoomListResponse', e);
    }
  } while (true);

  const oldRoomList = keys(store.getState().messenger.rooms);
  difference(oldRoomList, newRoomList).forEach(function(roomId) {
    store.dispatch(messengerRoomRemove(roomId));
  });

}