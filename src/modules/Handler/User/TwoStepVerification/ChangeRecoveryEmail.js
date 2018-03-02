import Base from '../../Base';
import {editPasswordDetail} from '../../../../actions/methods/user/twoStep/passwordDetail';

/**
 * @property {ProtoUserTwoStepVerificationChangeRecoveryEmail} _request
 * @property {ProtoUserTwoStepVerificationChangeRecoveryEmailResponse} _response
 */
export default class ChangeRecoveryEmail extends Base {
  async handle() {
    this.dispatch(editPasswordDetail({
      unconfirmed_email_pattern: this._response.getUnconfirmedEmailPattern(),
    }));
  }
}