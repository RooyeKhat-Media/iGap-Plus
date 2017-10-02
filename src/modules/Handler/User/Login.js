import Base from '../Base';
import store from '../../../configureStore';
import {CLIENT_STATUS} from '../../Api/index';
import {clientStatusChanged} from '../../../actions/api';
import Client from '../../Api/Client';
import loadRoomList from '../../Messenger/loadRoomList';

/**
 * @property {ProtoUserLogin} _request
 * @property {ProtoUserLoginResponse} _response
 */
export default class Login extends Base {
  handle() {
    // TODO [Amerehie] - 8/30/2017 11:26 AM - deprecated_client
    // TODO [Amerehie] - 8/30/2017 11:26 AM - update_available

    Client.instance.loggedIn = true;
    store.dispatch(clientStatusChanged(CLIENT_STATUS.LOGGED_IN));

    loadRoomList();
  }
}