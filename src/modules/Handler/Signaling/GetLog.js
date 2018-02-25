import Base from '../Base';
import {getLogList} from '../../../actions/methods/signaling/callLog';

/**
 * @property {ProtoSignalingGetLog} _request
 * @property {ProtoSignalingGetLogResponse} _response
 */
export default class GetLog extends Base {
  handle() {
    this.dispatch(getLogList(this._response.getSignalingLogList()));
  }
}