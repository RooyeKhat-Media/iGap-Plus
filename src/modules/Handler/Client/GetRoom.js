import Base from '../Base';
import {normalize} from 'normalizr';
import room from '../../../schemas/room';
import {entitiesRoomsAddFull} from '../../../actions/entities/rooms';
import store from '../../../configureStore';
import Collector from '../../Collector';

const {collect} = Collector(
  (collected) => {
    for (const normalizedData of collected.values()) {
      store.dispatch(entitiesRoomsAddFull(normalizedData));
    }
  },
  250
);

/**
 * @property {ProtoClientGetRoom} _request
 * @property {ProtoClientGetRoomResponse} _response
 */
export default class GetRoom extends Base {
  handle() {
    const normalizedData = normalize(this._response.getRoom(), room);
    collect(normalizedData, this._response.getRoom().getId().toString());
  }
}