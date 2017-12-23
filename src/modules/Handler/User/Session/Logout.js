import Base from '../../Base';
import cleanup from '../../../Cleanup';

/**
 * @property {ProtoUserSessionLogout} _request
 * @property {ProtoUserSessionLogoutResponse} _response
 */
export default class Logout extends Base {
  handle() {
    cleanup();
  }
}