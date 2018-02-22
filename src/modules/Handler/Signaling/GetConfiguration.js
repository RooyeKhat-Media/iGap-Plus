import Base from '../Base';
import {setWebRtcPermission} from '../../../actions/methods/signaling/callAction';

/**
 * @property {ProtoSignalingGetConfiguration} _request
 * @property {ProtoSignalingGetConfigurationResponse} _response
 */
export default class GetConfiguration extends Base {
  handle() {
    this.dispatch(setWebRtcPermission(this._response.getVoiceCalling(), true, this._response.getScreenSharing(), this._response.getSecretChat()));
  }
}