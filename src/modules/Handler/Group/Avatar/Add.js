import Base from '../../Base';
import {entitiesRomEdit} from '../../../../actions/entities/rooms';

/**
 * @property {ProtoGroupAvatarAdd} _request
 * @property {ProtoGroupAvatarAddResponse} _response
 */
export default class Add extends Base {
  handle() {
    this.dispatch(entitiesRomEdit(this._request.getRoomId(), {groupAvatar: this._response.getAvatar()}));
  }
}