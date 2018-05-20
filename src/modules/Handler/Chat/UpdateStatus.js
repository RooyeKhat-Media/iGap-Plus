import Base from '../Base';
import Collector from '../../Collector';
import store from '../../../configureStore';
import {entitiesRoomMessageEdit} from '../../../actions/entities/roomMessages';
import {getAuthorHash} from '../../../utils/app';
import {entitiesRoomEdit} from '../../../actions/entities/rooms';
import {Proto} from '../../Proto/index';

const {collect} = Collector(
  (collected) => {
    let seenMessages = {};
    for (let [messageId, payload] of collected.entries()) {
      store.dispatch(entitiesRoomMessageEdit(messageId, {
        status: payload.status,
        statusVersion: payload.statusVersion,
      }));
      seenMessages[payload.roomId] = seenMessages[payload.roomId] || (
        payload.status === Proto.RoomMessageStatus.SEEN &&
        payload.updaterAuthorHash === getAuthorHash()
      );
    }
  },
  250
);
/**
 * @property {ProtoChatUpdateStatus} _request
 * @property {ProtoChatUpdateStatusResponse} _response
 */
export default class UpdateStatus extends Base {
  handle() {
    collect({
      status: this._response.getStatus(),
      statusVersion: this._response.getStatusVersion().toString(),
      roomId: this._response.getRoomId().toString(),
      updaterAuthorHash: this._response.getUpdaterAuthorHash(),
    }, this._response.getMessageId().toString());
  }
}