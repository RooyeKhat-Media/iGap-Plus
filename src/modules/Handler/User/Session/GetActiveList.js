import Base from '../../Base';
import {overrideList} from '../../../../actions/methods/user/session';

/**
 * @property {ProtoUserSessionGetActiveList} _request
 * @property {ProtoUserSessionGetActiveListResponse} _response
 */
export default class GetActiveList extends Base {
  handle() {
    this.dispatch(overrideList(this._response.getSessionList()));
  }
}