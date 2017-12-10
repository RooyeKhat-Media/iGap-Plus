import Base from '../../Base';
import {entitiesRoomEdit} from '../../../../actions/entities/rooms';
import store from '../../../../configureStore';
import {sleep} from '../../../../utils/core';

/**
 * @property {ProtoGroupAvatarAdd} _request
 * @property {ProtoGroupAvatarAddResponse} _response
 */
export default class Add extends Base {
  async handle() {
    const roomId = this._response.getRoomId().toString();
    let tries = 10;
    do {
      if (!store.getState().entities.rooms[roomId]) {
        await sleep(1);
      } else {
        this.dispatch(entitiesRoomEdit(roomId, {groupAvatar: this._response.getAvatar()}));
        break;
      }
    } while (--tries);
  }
}