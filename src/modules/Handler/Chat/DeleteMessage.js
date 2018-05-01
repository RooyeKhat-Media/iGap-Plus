import Base from '../Base';
import {entitiesRoomMessageEdit} from '../../../actions/entities/roomMessages';
import {messengerRoomMessageRemove} from '../../../actions/messenger/roomMessages';
import store from '../../../configureStore';

/**
 * @property {ProtoChatDeleteMessage} _request
 * @property {ProtoChatDeleteMessageResponse} _response
 */
export default class DeleteMessage extends Base {
  handle() {
    const roomId = this._response.getRoomId().toString();
    const messageId = this._response.getMessageId().toString();
    const prevMessage = store.getState().entities.roomMessages[messageId];

    this.dispatch(entitiesRoomMessageEdit(messageId, {
      status: null,
      messageType: null,
      message: null,
      attachment: null,
      authorHash: null,
      location: null,
      log: null,
      contact: null,
      edited: null,
      forwardFrom: null,
      replyTo: null,
      previousMessageId: null,
      authorUser: null,
      authorUserCacheId: null,
      authorRoom: null,
      channelSignature: null,
      channelViewsLabel: null,
      channelThumbsUpLabel: null,
      channelThumbsDownLabel: null,
      deleteVersion: this._response.getDeleteVersion().toString(),
      messageVersion: prevMessage && prevMessage.messageVersion > 0 ? prevMessage.messageVersion : 0,
      statusVersion: prevMessage && prevMessage.statusVersion > 0 ? prevMessage.statusVersion : 0,
      deleted: true,
    }));
    this.dispatch(messengerRoomMessageRemove(roomId, messageId));
  }
}