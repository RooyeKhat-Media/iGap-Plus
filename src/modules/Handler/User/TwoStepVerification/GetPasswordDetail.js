import Base from '../../Base';
import {passwordDetail} from '../../../../actions/methods/user/twoStep/passwordDetail';

/**
 * @property {ProtoUserTwoStepVerificationGetPasswordDetail} _request
 * @property {ProtoUserTwoStepVerificationGetPasswordDetailResponse} _response
 */
export default class GetPasswordDetail extends Base {
  handle() {
    this.dispatch(passwordDetail(
      this._response.getQuestionOne(),
      this._response.getQuestionTwo(),
      this._response.getHint(),
      this._response.getUnconfirmedEmailPattern(),
      this._response.getHasConfirmedRecoveryEmail()
    ));
  }
}