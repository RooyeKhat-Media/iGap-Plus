import Base from '../../Base';
import {setRule} from '../../../../actions/methods/user/privacy/rule';

/**
 * @property {ProtoUserPrivacyGetRule} _request
 * @property {ProtoUserPrivacyGetRuleResponse} _response
 */
export default class GetRule extends Base {
  handle() {
    this.dispatch(setRule(this._request.getType(), this._response.getLevel()));
  }
}