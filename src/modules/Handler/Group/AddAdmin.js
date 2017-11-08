import Base from '../Base';
import {Proto} from '../../Proto/index';
import {setMemberRole} from '../../../actions/methods/rooms/getMemberList';

/**
 * @property {ProtoGroupAddAdmin} _request
 * @property {ProtoGroupAddAdminResponse} _response
 */
export default class AddAdmin extends Base {
  handle() {
    this.dispatch(setMemberRole(this._response.getRoomId().toString(), this._response.getMemberId().toString(), Proto.GroupRoom.Role.ADMIN));
  }
}