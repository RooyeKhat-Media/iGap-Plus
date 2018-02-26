import Base from '../Base';
import {setAuthorHash, setUserId} from '../../../utils/app';
import {goUserTwoStepVerificationScreen} from '../../../navigators/AppNavigator';

/**
 * @property {ProtoPushTwoStepVerificationResponse} _response
 */
export default class TwoStepVerification extends Base {
  async handle() {
    await setUserId(this._response.getUserId());
    await setAuthorHash(this._response.getAuthorHash());
    goUserTwoStepVerificationScreen();
  }
}