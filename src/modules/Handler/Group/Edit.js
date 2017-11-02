import Base from '../Base';
import {entitiesRoomEdit} from '../../../actions/entities/rooms';

/**
 * @property {ProtoGroupEdit} _request
 * @property {ProtoGroupEditResponse} _response
 */
export default class Edit extends Base {
  handle() {
    this.dispatch(entitiesRoomEdit(this._response.getRoomId().toString(), {
      title: this._response.getName(),
      groupDescription: this._response.getDescription(),
    }));
  }
}