import {normalize} from 'normalizr';
import Base from '../Base';
import {entitiesRegisteredUserAdd} from '../../../actions/entities/registeredUser';
import registeredUser from '../../../schemas/registeredUser';

/**
 * @property {ProtoUserInfo} _request
 * @property {ProtoUserInfoResponse} _response
 */
export default class Info extends Base {
  handle() {
    const normalizedData = normalize(this._response.user, registeredUser);
    this.dispatch(entitiesRegisteredUserAdd(normalizedData.entities.registeredUsers));
  }
}