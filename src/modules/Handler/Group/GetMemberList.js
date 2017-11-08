import Base from '../Base';
import {getMemberList} from '../../../actions/methods/rooms/getMemberList';

/**
 * @property {ProtoGroupGetMemberList} _request
 * @property {ProtoGroupGetMemberListResponse} _response
 */
export default class GetMemberList extends Base {
  handle() {
    const members = {};
    let sort = this._request.getPagination() && this._request.getPagination().getOffset() ? this._request.getPagination().getOffset() : 0;
    this._response.getMemberList().forEach(function(member) {
      members[member.getUserId().toString()] = {
        userId: member.getUserId(),
        role: member.getRole(),
        sort: ++sort,
      };
    });
    this.dispatch(getMemberList(this._request.getRoomId().toString(), members));
  }
}