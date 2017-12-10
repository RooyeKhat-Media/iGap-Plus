import Base from '../Base';
import putState from '../../Entities/Rooms/index';
import {messengerRoomAddList} from '../../../actions/messenger/rooms';
import {getFakeMessageId} from '../../../utils/app';

/**
 * @property {ProtoGroupCreate} _request
 * @property {ProtoGroupCreateResponse} _response
 */
export default class Create extends Base {
  async handle() {
    const roomId = this._response.getRoomId().toString();
    await putState(roomId);
    this.dispatch(messengerRoomAddList({
      [roomId]: {
        id: roomId,
        sort: getFakeMessageId().toString(),
        pinId: '0',
      },
    }));
  }
}