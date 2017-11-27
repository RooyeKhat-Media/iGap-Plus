import Base from '../../Base';
import {deleteAvatar} from '../../../../actions/methods/rooms/getAvatarList';
import {getUserId} from '../../../../utils/app';

/**
 * @property {ProtoUserAvatarDelete} _request
 * @property {ProtoUserAvatarDeleteResponse} _response
 */
export default class Delete extends Base {
  handle() {
    this.dispatch(deleteAvatar(getUserId(false), null, this._response.getId()));
  }
}