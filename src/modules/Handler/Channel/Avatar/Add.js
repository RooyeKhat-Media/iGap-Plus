import Base from '../../Base';
import {entitiesRoomEdit} from '../../../../actions/entities/rooms';
import store from '../../../../configureStore';
import {sleep} from '../../../../utils/core';

/**
 * @property {ProtoChannelAvatarAdd} _request
 * @property {ProtoChannelAvatarAddResponse} _response
 */
export default class Add extends Base {
  async handle() {
    const roomId = this._response.getRoomId().toString();
    let tries = 10;
    do {
      if (!store.getState().entities.rooms[roomId]) {
        await sleep(1);
      } else {
        const count = store.getState().entities.rooms[roomId].channelAvatarCount + 1;
        this.dispatch(entitiesRoomEdit(roomId, {channelAvatar: this._response.getAvatar(), channelAvatarCount: count}));
        break;
      }
    } while (--tries);
  }
}