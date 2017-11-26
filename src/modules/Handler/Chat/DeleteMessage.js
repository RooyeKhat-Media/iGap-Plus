import Base from '../Base';
import {entitiesRoomMessageRemove} from '../../../actions/entities/roomMessages';
import {messengerRoomMessageRemove} from '../../../actions/messenger/roomMessages';

/**
 * @property {ProtoChatDeleteMessage} _request
 * @property {ProtoChatDeleteMessageResponse} _response
 */
export default class DeleteMessage extends Base {
  handle() {
    const roomId = this._response.getRoomId().toString();
    const messageId = this._response.getMessageId().toString();
    this.dispatch(entitiesRoomMessageRemove(messageId));
    this.dispatch(messengerRoomMessageRemove(roomId, messageId));
  }
}