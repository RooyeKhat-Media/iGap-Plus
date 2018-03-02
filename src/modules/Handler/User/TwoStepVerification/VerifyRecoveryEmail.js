import Base from '../../Base';
import {editPasswordDetail} from '../../../../actions/methods/user/twoStep/passwordDetail';

/**
 * @property {ProtoUserTwoStepVerificationVerifyRecoveryEmail} _request
 * @property {ProtoUserTwoStepVerificationVerifyRecoveryEmailResponse} _response
 */
export default class VerifyRecoveryEmail extends Base {
  handle() {
    this.dispatch(editPasswordDetail({
      unconfirmed_email_pattern: false,
    }));
  }
}