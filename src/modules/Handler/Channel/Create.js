import Base from '../Base';
import putState from '../../Entities/Rooms/index';

/**
 * @property {ProtoChannelCreate} _request
 * @property {ProtoChannelCreateResponse} _response
 */
export default class Create extends Base {
  async handle() {
    await putState(this._response.getRoomId().toString());
  }
}