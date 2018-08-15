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
        const count = store.getState().entities.rooms[roomId].groupAvatarCount + 1;
        this.dispatch(entitiesRoomEdit(roomId, {groupAvatar: this._response.getAvatar(), groupAvatarCount: count}));
        break;
      }
    } while (--tries);
  }
}