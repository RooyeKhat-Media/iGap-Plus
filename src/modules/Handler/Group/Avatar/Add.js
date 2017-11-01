import Base from '../../Base';
import {entitiesRoomEdit} from '../../../../actions/entities/rooms';

/**
 * @property {ProtoGroupAvatarAdd} _request
 * @property {ProtoGroupAvatarAddResponse} _response
 */
export default class Add extends Base {
  handle() {
    this.dispatch(entitiesRoomEdit(this._request.getRoomId(), {groupAvatar: this._response.getAvatar()}));
  }
}