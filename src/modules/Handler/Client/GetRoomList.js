import Base from '../Base';
import {normalize} from 'normalizr';
import room from '../../../schemas/room';
import {entitiesRoomsAddFull} from '../../../actions/entities/rooms';
import {messengerRoomOverrideList} from '../../../actions/messenger/room';

/**
 * @property {ProtoClientGetRoomList} _request
 * @property {ProtoClientGetRoomListResponse} _response
 */
export default class GetRoomList extends Base {
  handle() {
    let roomList = [];
    this._response.getRoomsList().forEach((roomProto) => {
      const normalizedData = normalize(roomProto, room);

      this.dispatch(entitiesRoomsAddFull(normalizedData));

      roomList.push(normalizedData.result);
    });

    this.dispatch(messengerRoomOverrideList(roomList));
  }
}