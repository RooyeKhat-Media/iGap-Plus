import Base from '../../Base';
import {clearPasswordDetail} from '../../../../actions/methods/user/twoStep/passwordDetail';

/**
 * @property {ProtoUserTwoStepVerificationUnsetPassword} _request
 * @property {ProtoUserTwoStepVerificationUnsetPasswordResponse} _response
 */
export default class UnsetPassword extends Base {
  handle() {
    this.dispatch(clearPasswordDetail());
  }
}