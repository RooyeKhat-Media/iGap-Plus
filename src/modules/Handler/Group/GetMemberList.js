import Base from '../Base';
import {getMemberList} from '../../../actions/methods/group/getMemberList';

/**
 * @property {ProtoGroupGetMemberList} _request
 * @property {ProtoGroupGetMemberListResponse} _response
 */
export default class GetMemberList extends Base {
  handle() {
    this.dispatch(getMemberList(this._response.getMemberList()));
  }
}