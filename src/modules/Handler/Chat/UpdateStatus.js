import Base from '../Base';
import Collector from '../../Collector';
import store from '../../../configureStore';
import {entitiesRoomMessageEdit} from '../../../actions/entities/roomMessages';

const {collect} = Collector(
  (collected) => {
    for (let [messageId, payload] of collected.entries()) {
      store.dispatch(entitiesRoomMessageEdit(messageId, payload));
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
      statusVersion: this._response.getStatusVersion(),
    }, this._response.getMessageId().toString());
  }
}