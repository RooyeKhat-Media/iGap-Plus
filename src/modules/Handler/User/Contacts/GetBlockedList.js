import Base from '../../Base';
import {overrideList} from '../../../../actions/methods/user/contacts/block';
import putState from '../../../Entities/RegisteredUsers/index';

/**
 * @property {ProtoUserContactsGetBlockedList} _request
 * @property {ProtoUserContactsGetBlockedListResponse} _response
 */
export default class GetBlockedList extends Base {
  handle() {
    let sort = 0;
    let blockList = {};
    this._response.getUserList().forEach((element) => {
      putState(element.getUserId(), element.getCacheId());
      blockList[element.getUserId()] = {
        userId: element.getUserId(),
        sort,
      };
      sort++;
    });
    this.dispatch(overrideList(blockList));
  }
}