import Base from '../Base';
import {entitiesRoomEdit} from '../../../actions/entities/rooms';
import {Proto} from '../../Proto/index';

/**
 * @property {ProtoGroupRemoveUsername} _request
 * @property {ProtoGroupRemoveUsernameResponse} _response
 */
export default class RemoveUsername extends Base {
  handle() {
    this.dispatch(entitiesRoomEdit(this._response.getRoomId().toString(), {
      groupPublicUsername: null,
      groupType: Proto.GroupRoom.Type.PRIVATE_ROOM,
      groupPrivateInviteToken: '', //todo set invite Token
      groupPrivateInviteLink: '', //todo set invite Link
    }));
  }
}