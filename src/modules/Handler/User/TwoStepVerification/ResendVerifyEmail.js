import Base from '../../Base';
import {editPasswordDetail} from '../../../../actions/methods/user/twoStep/passwordDetail';

/**
 * @property {ProtoUserTwoStepVerificationResendVerifyEmail} _request
 * @property {ProtoUserTwoStepVerificationResendVerifyEmailResponse} _response
 */
export default class ResendVerifyEmail extends Base {
  handle() {
    this.dispatch(editPasswordDetail({
      unconfirmed_email_pattern: this._response.getUnconfirmedEmailPattern(),
    }));
  }
}