import Base from '../Base';
import {entitiesRoomEdit} from '../../../actions/entities/rooms';

/**
 * @property {ProtoChannelEdit} _request
 * @property {ProtoChannelEditResponse} _response
 */
export default class Edit extends Base {
  handle() {
    this.dispatch(entitiesRoomEdit(this._response.getRoomId().toString(), {
      title: this._response.getName(),
      channelDescription: this._response.getDescription(),
    }));
  }
}