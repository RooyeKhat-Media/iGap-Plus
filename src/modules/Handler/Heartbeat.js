import Base from './Base';
import {HEARTBEAT} from '../../constants/methods/index';
import Api from '../Api/index';

export default class Heartbeat extends Base {
  handle() {
    const heartBeat = new Heartbeat();
    Api.invoke(HEARTBEAT).catch(() => {
    });
  }
}