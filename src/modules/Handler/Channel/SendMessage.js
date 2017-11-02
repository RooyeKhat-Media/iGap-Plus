import Base from '../Base';
import putState from '../../Entities/Rooms/index';
import {messengerRoomAddList} from '../../../actions/messenger/rooms';

/**
 * @property {ProtoChannelSendMessage} _request
 * @property {ProtoChannelSendMessageResponse} _response
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