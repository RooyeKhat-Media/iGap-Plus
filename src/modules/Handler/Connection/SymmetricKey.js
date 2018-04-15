import Client from '../../Api/Client';
import {ConnectionSymmetricKeyResponse} from '../../Proto';
import {clientStatusChanged} from '../../../actions/api';
import store from '../../../configureStore';
import {CLIENT_STATUS} from '../../Api';
import Base from '../Base';
import {login} from '../../../utils/app';
import ClientError from '../../Error/ClientError';
import ServerError from '../../Error/ServerError';
import {ERROR_TIMEOUT} from '../../Api/errors/index';
import {getSessionUid} from '../../Api/index';
import {sleep} from '../../../utils/core';

/**
 * @property {ProtoConnectionSymmetricKey} _request
 * @property {ProtoConnectionSymmetricKeyResponse} _response
 */
export default class SymmetricKey extends Base {
  handle() {
    if (this._response.getStatus() === ConnectionSymmetricKeyResponse.Status.ACCEPTED) {
      Client.instance.symmetricMethod = this._response.getSymmetricMethod();
      Client.instance.symmetricIvSize = this._response.getSymmetricIvSize();
      Client.instance.secure = true;
      store.dispatch(clientStatusChanged(CLIENT_STATUS.SECURED));

      login().catch(async (e) => {
        if (e instanceof ClientError) {
          return;
        } else if (e instanceof ServerError && e.errorResponse.getMajorCode() === ERROR_TIMEOUT) {
          const sessionId = getSessionUid();
          await sleep(3);
          if (sessionId === getSessionUid()) {
            Client.instance.close();
          }
        }
        throw e;
      });

    } else {
      // TODO [Amerehie] - 7/24/2017 12:55 PM -REJECTED || SecurityIssue
    }
  }
}