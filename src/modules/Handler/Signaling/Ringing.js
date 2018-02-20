import Base from '../Base';
import {status} from '../../../actions/methods/signaling/callAction';
import {SIGNALING_STATUS} from '../../../constants/signaling';

/**
 * @property {ProtoSignalingRinging} _request
 * @property {ProtoSignalingRingingResponse} _response
 */
export default class Ringing extends Base {
  handle() {
    if (!this._request) {
      this.dispatch(status(SIGNALING_STATUS.RINGING));
    }
  }
}