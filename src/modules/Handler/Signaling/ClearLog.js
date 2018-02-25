import Base from '../Base';
import {clearLogList} from '../../../actions/methods/signaling/callLog';

/**
 * @property {ProtoSignalingClearLog} _request
 * @property {ProtoSignalingClearLogResponse} _response
 */
export default class ClearLog extends Base {
  handle() {
    this.dispatch(clearLogList(this._response.getClearId()));
  }
}