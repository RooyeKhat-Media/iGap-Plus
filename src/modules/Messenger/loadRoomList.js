import {normalize} from 'normalizr';
import {ClientGetRoomList, Proto} from '../Proto/index';
import {CLIENT_GET_ROOM_LIST} from '../../constants/methods/index';
import Api from '../Api/index';
import {CLIENT_GET_ROOM_LIST_PAGINATION_LIMIT} from '../../constants/configs';
import store from '../../configureStore';
import {messengerRoomOverrideList} from '../../actions/messenger/room';
import {entitiesRoomsAddFull} from '../../actions/entities/rooms';
import room from '../../schemas/room';

export default async function loadRoomList() {

  const roomList = [];
  let offset = 0;
  do {
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

      clientGetRoomListResponse.getRoomsList().forEach((roomProto) => {
        const normalizedData = normalize(roomProto, room);
        store.dispatch(entitiesRoomsAddFull(normalizedData));
        roomList.push(normalizedData.result);
      });

      offset += clientGetRoomListResponse.getRoomsList().length;
    } catch (e) {
      console.error('clientGetRoomListResponse', e);
    }
  } while (true);

  let order = 100000;
  const payload = {};
  while (roomList.length) {
    const roomId = roomList.pop();
    payload[roomId] = {
      id: roomId,
      order: ++order,
    };
  }
  store.dispatch(messengerRoomOverrideList(payload));
}