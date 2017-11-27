import Base from '../../Base';
import {deleteAvatar} from '../../../../actions/methods/rooms/getAvatarList';

/**
 * @property {ProtoGroupAvatarDelete} _request
 * @property {ProtoGroupAvatarDeleteResponse} _response
 */
export default class Delete extends Base {
  handle() {
    this.dispatch(deleteAvatar(null, this._response.getRoomId(), this._response.getId()));
  }
}