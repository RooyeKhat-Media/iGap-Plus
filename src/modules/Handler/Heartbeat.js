import Base from './Base';
import {HEARTBEAT} from '../../constants/methods/index';
import Api from '../Api/index';
import {Heartbeat as ProtoHeartbeat} from '../Proto/index';
import ServerError from '../Error/ServerError';
import {ERROR_TIMEOUT} from '../Api/errors/index';

/**
 * @property {ProtoHeartbeat} _request
 * @property {ProtoHeartbeatResponse} _response
 */
export default class Heartbeat extends Base {
  handle() {
    const heartBeat = new ProtoHeartbeat();
    Api.invoke(HEARTBEAT, heartBeat).catch((e) => {
      if (e instanceof ServerError && e.errorResponse.getMajorCode() === ERROR_TIMEOUT) {
        return Promise.resolve();
      }
      return Promise.reject(e);
    });
  }
}