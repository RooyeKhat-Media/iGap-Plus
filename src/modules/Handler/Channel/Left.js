import Base from '../Base';
import {messengerRoomRemove} from '../../../actions/messenger/rooms';

/**
 * @property {ProtoChannelLeft} _request
 * @property {ProtoChannelLeftResponse} _response
 */
export default class Left extends Base {
  handle() {
    this.dispatch(messengerRoomRemove(this._response.getRoomId().toString()));
  }
}