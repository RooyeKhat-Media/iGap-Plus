import Base from '../Base';
import {entitiesRoomMessageEdit} from '../../../actions/entities/roomMessages';

/**
 * @property {ProtoChatEditMessage} _request
 * @property {ProtoChatEditMessageResponse} _response
 */
export default class EditMessage extends Base {
  handle() {
    this.dispatch(entitiesRoomMessageEdit(this._response.messageId.toString(), {
      message: this._response.message,
      messageVersion: this._response.getMessageVersion().toString(),
    }));
  }
}