import Base from '../Base';
import {messengerRoomRemove} from '../../../actions/messenger/rooms';

/**
 * @property {ProtoGroupLeft} _request
 * @property {ProtoGroupLeftResponse} _response
 */
export default class Left extends Base {
  handle() {
    this.dispatch(messengerRoomRemove(this._response.getRoomId().toString()));
  }
}