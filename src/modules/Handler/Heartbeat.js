import Base from './Base';
import {HEARTBEAT} from '../../constants/methods/index';
import Api from '../Api/index';

/**
 * @property {ProtoHeartbeat} _request
 * @property {ProtoHeartbeatResponse} _response
 */
export default class Heartbeat extends Base {
  handle() {
    const heartBeat = new Heartbeat();
    Api.invoke(HEARTBEAT).catch(() => {
    });
  }
}