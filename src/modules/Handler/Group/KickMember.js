import Base from '../Base';
import {kickMember} from '../../../actions/methods/rooms/getMemberList';

/**
 * @property {ProtoGroupKickMember} _request
 * @property {ProtoGroupKickMemberResponse} _response
 */
export default class KickMember extends Base {
  handle() {
    this.dispatch(kickMember(this._response.getRoomId().toString(), this._response.getMemberId().toString()));
  }
}