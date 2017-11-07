import Base from '../../Base';
import {setRule} from '../../../../actions/methods/user/privacy/rule';

/**
 * @property {ProtoUserPrivacySetRule} _request
 * @property {ProtoUserPrivacySetRuleResponse} _response
 */
export default class SetRule extends Base {
  handle() {
    this.dispatch(setRule(this._response.getType(), this._response.getLevel()));
  }
}