import Base from '../Base';
import {messengerRoomAddList} from '../../../actions/messenger/rooms';
import putState from '../../Entities/Rooms/index';

/**
 * @property {ProtoGroupSendMessage} _request
 * @property {ProtoGroupSendMessageResponse} _response
 */
export default class SendMessage extends Base {
  async handle() {
    const id = this._response.getRoomId().toString();
    await putState(id);
    this.dispatch(messengerRoomAddList({
      [id]: {
        id,
        sort: this._response.getRoomMessage().getMessageId().toString(),
      },
    }));
  }
}