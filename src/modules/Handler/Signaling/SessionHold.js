import Base from '../Base';
import Call from '../../Call/index';

/**
 * @property {ProtoSignalingSessionHold} _request
 * @property {ProtoSignalingSessionHoldResponse} _response
 */
export default class SessionHold extends Base {
  handle() {
    Call.instance.onHold(this._response.getHold());
  }
}