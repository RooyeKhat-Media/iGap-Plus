import Base from '../Base';
import {normalize} from 'normalizr';
import room from '../../../schemas/room';
import {entitiesRoomsAddFull} from '../../../actions/entities/rooms';

/**
 * @property {ProtoClientGetRoom} _request
 * @property {ProtoClientGetRoomResponse} _response
 */
export default class GetRoom extends Base {
  handle() {
    const normalizedData = normalize(this._response.getRoom(), room);
    this.dispatch(entitiesRoomsAddFull(normalizedData));
  }
}