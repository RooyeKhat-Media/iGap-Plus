import Base from '../../Base';
import {editPasswordDetail} from '../../../../actions/methods/user/twoStep/passwordDetail';

/**
 * @property {ProtoUserTwoStepVerificationChangeRecoveryQuestion} _request
 * @property {ProtoUserTwoStepVerificationChangeRecoveryQuestionResponse} _response
 */
export default class ChangeRecoveryQuestion extends Base {
  async handle() {
    this.dispatch(editPasswordDetail({
      question_one: this._request.getQuestionOne(),
      question_two: this._request.getQuestionTwo(),
    }));
  }
}