import Base from '../Base';
import {setMemberRole} from '../../../actions/methods/rooms/getMemberList';
import {Proto} from '../../Proto/index';

/**
 * @property {ProtoGroupKickAdmin} _request
 * @property {ProtoGroupKickAdminResponse} _response
 */
export default class KickAdmin extends Base {
  handle() {
    this.dispatch(setMemberRole(this._response.getRoomId().toString(), this._response.getMemberId().toString(), Proto.GroupRoom.Role.MEMBER));
  }
}