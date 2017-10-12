import {normalize} from 'normalizr';
import Long from 'long';
import {difference} from 'lodash';
import {ClientGetRoomList, Proto} from '../Proto/index';
import {CLIENT_GET_ROOM_LIST} from '../../constants/methods/index';
import Api from '../Api/index';
import {CLIENT_GET_ROOM_LIST_PAGINATION_LIMIT} from '../../constants/configs';
import store from '../../configureStore';
import {messengerRoomAddList, messengerRoomRemove} from '../../actions/messenger/rooms';
import {entitiesRoomsAddFull} from '../../actions/entities/rooms';
import room from '../../schemas/room';


export default async function loadRoomList() {

  let offset = 0;
  let order = Long.fromInt(10000000);

  const newRoomList = [];
  const oldRoomList = Object.keys(store.getState().messenger.rooms);

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
        order = order.sub(1);
        const roomId = roomProto.getId().toString();
        payload[roomId] = {
          id: roomId,
          order: order.toString(),
        };
        newRoomList.push(roomId);
      });

      store.dispatch(messengerRoomAddList(payload));

      offset += clientGetRoomListResponse.getRoomsList().length;

    } catch (e) {
      console.error('clientGetRoomListResponse', e);
    }
  } while (true);

  difference(oldRoomList, newRoomList).forEach(function(roomId) {
    store.dispatch(messengerRoomRemove(roomId));
  });

}