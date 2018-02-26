import Base from '../Base';
import {login, setAuthorHash, setUserId, setUserToken} from '../../../utils/app';
import {goMainScreen} from '../../../navigators/AppNavigator';

/**
 * @property {ProtoPushLoginTokenResponse} _response
 */
export default class LoginToken extends Base {
  async handle() {
    await setUserToken(this._response.getToken());
    await setUserId(this._response.getUserId());
    await setAuthorHash(this._response.getAuthorHash());
    await login();
    goMainScreen();
  }
}