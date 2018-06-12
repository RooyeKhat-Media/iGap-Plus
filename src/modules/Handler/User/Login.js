import Base from '../Base';
import {setChatDeleteMessageForBothPeriod, syncData} from '../../../utils/app';

/**
 * @property {ProtoUserLogin} _request
 * @property {ProtoUserLoginResponse} _response
 */
export default class Login extends Base {
  async handle() {
    // TODO [Amerehie] - 8/30/2017 11:26 AM - deprecated_client
    // TODO [Amerehie] - 8/30/2017 11:26 AM - update_available
    syncData();
    setChatDeleteMessageForBothPeriod(this._response.getChatDeleteMessageForBothPeriod());
  }
}