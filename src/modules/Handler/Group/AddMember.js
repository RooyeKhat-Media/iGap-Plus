import Base from '../Base';
import putState from '../../Entities/Rooms/index';
import {entitiesRoomEdit} from '../../../actions/entities/rooms';
import {getFakeMessageId, getUserId} from '../../../utils/app';
import {messengerRoomAddList} from '../../../actions/messenger/rooms';

/**
 * @property {ProtoGroupAddMember} _request
 * @property {ProtoGroupAddMemberResponse} _response
 */
export default class AddMember extends Base {
  role = 'groupRole';
  async handle() {
    const roomId = this._response.getRoomId().toString();
    await putState(roomId);
    if (this._response.getUserId().toString() === getUserId(true)) {
      this.dispatch(entitiesRoomEdit(roomId, {
        [this.role]: this._response.getRole(),
      }));
      this.dispatch(messengerRoomAddList({
        [roomId]: {
          id: roomId,
          sort: getFakeMessageId(),
          pinId: '0',
        },
      }));
    }
  }
}