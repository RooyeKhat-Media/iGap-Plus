import Base from '../Base';
import {entitiesRoomEdit} from '../../../actions/entities/rooms';
import {Proto} from '../../Proto/index';

/**
 * @property {ProtoGroupUpdateUsername} _request
 * @property {ProtoGroupUpdateUsernameResponse} _response
 */
export default class UpdateUsername extends Base {
  handle() {
    this.dispatch(entitiesRoomEdit(this._response.getRoomId().toString(), {
      groupPublicUsername: this._response.getUsername(),
      groupType: Proto.GroupRoom.Type.PUBLIC_ROOM,
      groupPrivateInviteToken: null,
      groupPrivateInviteLink: null,
    }));
  }
}