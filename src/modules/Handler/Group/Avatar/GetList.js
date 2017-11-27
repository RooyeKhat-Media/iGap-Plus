import Base from '../../Base';
import {getAvatarList} from '../../../../actions/methods/rooms/getAvatarList';

/**
 * @property {ProtoGroupAvatarGetList} _request
 * @property {ProtoGroupAvatarGetListResponse} _response
 */
export default class GetList extends Base {
  handle() {
    if (this._request) {
      this.dispatch(getAvatarList('R' + this._request.getRoomId().toString(), this._response.getAvatarList()));
    }

  }
}