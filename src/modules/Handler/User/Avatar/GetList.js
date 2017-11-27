import Base from '../../Base';
import {getAvatarList} from '../../../../actions/methods/rooms/getAvatarList';


/**
 * @property {ProtoUserAvatarGetList} _request
 * @property {ProtoUserAvatarGetListResponse} _response
 */
export default class GetList extends Base {
  handle() {
    if (this._request) {
      this.dispatch(getAvatarList('U' + this._request.getUserId().toString(), this._response.getAvatarList()));
    }
  }
}