import Base from '../Base';
import {getMemberList} from '../../../actions/methods/channel/getMemberList';

/**
 * @property {ProtoChannelGetMemberList} _request
 * @property {ProtoChannelGetMemberListResponse} _response
 */
export default class GetMemberList extends Base {
  handle() {
    this.dispatch(getMemberList(this._response.getMemberList()));
  }
}