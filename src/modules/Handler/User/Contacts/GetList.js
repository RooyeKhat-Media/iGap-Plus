import {normalize} from 'normalizr';
import Base from '../../Base';
import store from '../../../../configureStore';
import {getList} from '../../../../actions/methods/user/contacts/getList';
import registeredUser from '../../../../schemas/registeredUser';
import {entitiesRegisteredUserAdd} from '../../../../actions/entities/registeredUser';

/**
 * @property {ProtoUserContactsGetList} _request
 * @property {ProtoUserContactsGetListResponse} _response
 */
export default class GetList extends Base {
  handle() {
    const normalizedData = normalize(this._response.getRegisteredUserList(), [registeredUser]);
    if (normalizedData.entities.registeredUsers) {
      this.dispatch(entitiesRegisteredUserAdd(normalizedData.entities.registeredUsers));
    }
    store.dispatch(getList(normalizedData.result));
  }
}