import Client from '../../Api/Client';
import {ConnectionSymmetricKeyResponse} from '../../Proto';
import {clientStatusChanged} from '../../../actions/api';
import store from '../../../configureStore';
import {CLIENT_STATUS} from '../../Api';
import Base from '../Base';
import {login} from '../../../utils/app';

export default class SymmetricKey extends Base {
  handle() {
    if (this._response.getStatus() === ConnectionSymmetricKeyResponse.Status.ACCEPTED) {
      Client.instance.symmetricMethod = this._response.getSymmetricMethod();
      Client.instance.symmetricIvSize = this._response.getSymmetricIvSize();
      Client.instance.secure = true;
      store.dispatch(clientStatusChanged(CLIENT_STATUS.SECURED));

      login().catch(() => {});
      
    } else {
      // TODO [Amerehie] - 7/24/2017 12:55 PM -REJECTED || SecurityIssue
    }
  }
}