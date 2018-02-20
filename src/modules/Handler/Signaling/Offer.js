import Base from '../Base';
import Call from '../../Call/index';
import {Proto} from '../../../modules/Proto/index';

/**
 * @property {ProtoSignalingOffer} _request
 * @property {ProtoSignalingOfferResponse} _response
 */
export default class Offer extends Base {
  handle() {
    if (!this._request) {
      const type = this._response.getType();
      if (type === Proto.SignalingOffer.Type.VOICE_CALLING || type === Proto.SignalingOffer.Type.VIDEO_CALLING) {
        Call.instance.receiveOffer(this._response);
      }
    }
  }
}