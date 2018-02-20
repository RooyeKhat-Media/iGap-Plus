import Base from '../Base';
import Call from '../../Call/index';

/**
 * @property {ProtoSignalingAccept} _request
 * @property {ProtoSignalingAcceptResponse} _response
 */
export default class Accept extends Base {
  handle() {
    if (!this._request) {
      Call.instance.onAccept(this._response.getCalledSdp());
    }
  }
}