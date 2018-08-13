import {normalize} from 'normalizr';
import Base from '../Base';
import {entitiesRegisteredUserAdd} from '../../../actions/entities/registeredUser';
import registeredUser from '../../../schemas/registeredUser';
import store from '../../../configureStore';
import Collector from '../../Collector';

export const {collect} = Collector(
  (collected) => {
    for (const registeredUser of collected.values()) {
      store.dispatch(entitiesRegisteredUserAdd(registeredUser));
    }
  },
  250
);

/**
 * @property {ProtoUserInfo} _request
 * @property {ProtoUserInfoResponse} _response
 */
export default class Info extends Base {
  handle() {
    const normalizedData = normalize(this._response.getUser(), registeredUser);
    collect(normalizedData.entities.registeredUsers, this._response.getUser().getId().toString());
  }
}