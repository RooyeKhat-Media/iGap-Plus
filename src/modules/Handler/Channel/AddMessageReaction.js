import Base from '../Base';
import {entitiesRoomMessageEdit} from '../../../actions/entities/roomMessages';
import {Proto} from '../../Proto/index';

/**
 * @property {ProtoChannelAddMessageReaction} _request
 * @property {ProtoChannelAddMessageReactionResponse} _response
 */
export default class AddMessageReaction extends Base {
  handle() {
    const editMessage = {};
    if (this._request.getReaction() === Proto.RoomMessageReaction.THUMBS_DOWN) {
      editMessage.channelThumbsDownLabel = this._response.getReactionCounterLabel();
    } else {
      editMessage.channelThumbsUpLabel = this._response.getReactionCounterLabel();
    }
    this.dispatch(entitiesRoomMessageEdit(this._request.getMessageId().toString(), editMessage));
  }
}