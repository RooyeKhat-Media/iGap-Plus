import Base from '../Base';
import {entitiesRoomMessageEdit} from '../../../actions/entities/roomMessages';

/**
 * @property {ProtoChannelGetMessagesStats} _request
 * @property {ProtoChannelGetMessagesStatsResponse} _response
 */
export default class GetMessagesStats extends Base {
  handle() {
    this._response.getStatsList().forEach((stats) => {
      this.dispatch(entitiesRoomMessageEdit(stats.getMessageId().toString(), {
        channelViewsLabel: stats.getViewsLabel(),
        channelThumbsUpLabel: stats.getThumbsUpLabel(),
        channelThumbsDownLabel: stats.getThumbsDownLabel(),
      }));
    });
  }
}