import Base from '../../Base';
import {terminate} from '../../../../actions/methods/user/session';
import store from '../../../../configureStore';
import Collector from '../../../Collector';

const {collect} = Collector(
  (collected) => {
    store.dispatch(terminate(collected.values()));
  }
);

/**
 * @property {ProtoUserSessionTerminate} _request
 * @property {ProtoUserSessionTerminateResponse} _response
 */
export default class Terminate extends Base {
  handle() {
    if (this._request) {
      collect(this._request.getSessionId(), this._request.getSessionId());
    }
  }
}