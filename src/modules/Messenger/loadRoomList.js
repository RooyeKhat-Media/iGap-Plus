import {normalize} from 'normalizr';
import Long from 'long';
import {isEmpty} from 'lodash';
import {ClientGetRoomList, Proto} from '../Proto/index';
import {CLIENT_GET_ROOM_LIST} from '../../constants/methods/index';
import Api from '../Api/index';
import {CLIENT_GET_ROOM_LIST_PAGINATION_LIMIT} from '../../constants/configs';
import store from '../../configureStore';
import {messengerRoomAdd, messengerRoomOverrideList} from '../../actions/messenger/room';
import {entitiesRoomsAddFull} from '../../actions/entities/rooms';
import room from '../../schemas/room';


export default async function loadRoomList() {

  const payload = {};
  let offset = 0;
  let order = Long.fromInt(10000000);
  const override = isEmpty(store.getState().messenger.room);
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

        order = order.sub(1);
        const roomPayload = {
          id: normalizedData.result,
          order: order.toString(),
        };
        if (override) {
          payload[roomPayload.id] = roomPayload;
        } else {
          store.dispatch(messengerRoomAdd(roomPayload));
        }
      });

      offset += clientGetRoomListResponse.getRoomsList().length;
    } catch (e) {
      console.error('clientGetRoomListResponse', e);
    }

    store.dispatch(messengerRoomOverrideList(payload));
  } while (true);
}