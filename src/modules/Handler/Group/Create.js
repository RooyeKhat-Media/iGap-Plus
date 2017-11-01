import Base from '../Base';
import putState from '../../Entities/Rooms/index';

/**
 * @property {ProtoGroupCreate} _request
 * @property {ProtoGroupCreateResponse} _response
 */
export default class Create extends Base {
  async handle() {
    await putState(this._response.getRoomId().toString());
  }
}