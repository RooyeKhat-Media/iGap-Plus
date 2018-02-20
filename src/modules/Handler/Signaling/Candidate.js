import Base from '../Base';
import Call from '../../Call/index';

/**
 * @property {ProtoSignalingCandidate} _request
 * @property {ProtoSignalingCandidateResponse} _response
 */
export default class Candidate extends Base {
  handle() {
    if (!this._request) {
      Call.instance.onCandidate(this._response.getPeerSdpMId(), this._response.getPeerSdpMLineIndex(), this._response.getPeerCandidate());
    }
  }
}