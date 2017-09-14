import Base from '../../Base';
import store from '../../../../configureStore';
import {getList} from '../../../../actions/methods/user/contacts/getList';

/**
 * @property {ProtoUserContactsGetList} _request
 * @property {ProtoUserContactsGetListResponse} _response
 */
export default class GetList extends Base {
  handle() {
    store.dispatch(getList(this._response.getRegisteredUserList()));
  }
}