import Base from '../Base';
import Call from '../../Call/index';
import {reset, status} from '../../../actions/methods/signaling/callAction';
import {SIGNALING_STATUS} from '../../../constants/signaling';

/**
 * @property {ProtoSignalingLeave} _request
 * @property {ProtoSignalingLeaveResponse} _response
 */
export default class Leave extends Base {
  handle() {

    if (!this._request) {
      Call.instance.setSendLeave(true);

      switch (this._response.getType()) {
        case 'NOT_ANSWERED':
          this.dispatch(status(SIGNALING_STATUS.NOT_ANSWERED));
          break;
        case 'REJECTED':
          this.dispatch(status(SIGNALING_STATUS.REJECTED));
          break;
        case 'UNAVAILABLE':
          this.dispatch(status(SIGNALING_STATUS.UNAVAILABLE));
          break;
        default:
          this.dispatch(status(SIGNALING_STATUS.DISCONNECTED));
          break;
      }
      setTimeout(() => this.dispatch(reset()), 500);
    }
  }
}