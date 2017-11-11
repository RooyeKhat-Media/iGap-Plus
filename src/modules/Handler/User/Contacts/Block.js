import Base from '../../Base';
import {setBlock} from '../../../../actions/methods/user/contacts/block';
import store from '../../../../configureStore';
import Collector from '../../../Collector';

const {collect} = Collector(
  (collected) => {
    store.dispatch(setBlock(collected.values()));
  }
);

/**
 * @property {ProtoUserContactsBlock} _request
 * @property {ProtoUserContactsBlockResponse} _response
 */
export default class Block extends Base {
  handle() {
    collect(this._response.getUserId(), this._response.getUserId());
  }
}