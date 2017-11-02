import Base from '../../Base';
import {entitiesRoomEdit} from '../../../../actions/entities/rooms';

/**
 * @property {ProtoChannelAvatarAdd} _request
 * @property {ProtoChannelAvatarAddResponse} _response
 */
export default class Add extends Base {
  handle() {
    this.dispatch(entitiesRoomEdit(this._request.getRoomId(), {groupAvatar: this._response.getAvatar()}));
  }
}