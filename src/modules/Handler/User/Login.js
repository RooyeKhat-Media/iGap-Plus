import Base from '../Base';
import store from '../../../configureStore';
import Api, {CLIENT_STATUS} from '../../Api/index';
import {clientStatusChanged} from '../../../actions/api';
import Client from '../../Api/Client';
import {serverRoomsState} from '../../Messenger/Rooms';
import {clientCondition, importContact} from '../../../utils/app';
import {SIGNALING_GET_CONFIGURATION} from '../../../constants/methods/index';
import {SignalingGetConfiguration} from '../../Proto/index';
import {clientStatusUpdating} from "../../../actions/updating";
import {sleep} from "../../../utils/core";

/**
 * @property {ProtoUserLogin} _request
 * @property {ProtoUserLoginResponse} _response
 */
export default class Login extends Base {
  async handle() {
    // TODO [Amerehie] - 8/30/2017 11:26 AM - deprecated_client
    // TODO [Amerehie] - 8/30/2017 11:26 AM - update_available

    Client.instance.loggedIn = true;
    store.dispatch(clientStatusChanged(CLIENT_STATUS.LOGGED_IN));
    Api.invoke(SIGNALING_GET_CONFIGURATION, new SignalingGetConfiguration());

    importContact();
    this.dispatch(clientStatusUpdating(true));
    await clientCondition();
    await serverRoomsState();
    await sleep(3);
    this.dispatch(clientStatusUpdating(false));
  }
}