import Base from '../Base';
import {apiInvoke} from '../../Entities/Rooms/index';
import {messengerRoomAddList} from '../../../actions/messenger/rooms';
import {getFakeMessageId} from '../../../utils/app';

/**
 * @property {ProtoChatConvertToGroup} _request
 * @property {ProtoChatConvertToGroupResponse} _response
 */
export default class ConvertToGroup extends Base {
  async handle() {
    const roomId = this._response.getRoomId().toString();
    await apiInvoke(roomId);
    this.dispatch(messengerRoomAddList({
      [roomId]: {
        id: roomId,
        sort: getFakeMessageId().toString(),
        pinId: '0',
      },
    }));
  }
}