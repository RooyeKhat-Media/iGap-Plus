import Base from '../../Base';
import {editPasswordDetail} from '../../../../actions/methods/user/twoStep/passwordDetail';

/**
 * @property {ProtoUserTwoStepVerificationChangeHint} _request
 * @property {ProtoUserTwoStepVerificationChangeHintResponse} _response
 */
export default class ChangeHint extends Base {
  async handle() {
    this.dispatch(editPasswordDetail({
      hint: this._request.getHint(),
    }));
  }
}