/**
 * @flow
 */
import {
  METHOD_USER_PRIVACY_SET_RULE,
  METHOD_USER_PRIVACY_UNSET_RULE,
} from '../../../../actions/methods/user/privacy/rule';

const rules = {};

export function rule(state = rules, action) {
  switch (action.type) {
    case METHOD_USER_PRIVACY_SET_RULE:
      return {
        ...state,
        [action.privateType]: action.privateLevel,
      };
    case METHOD_USER_PRIVACY_UNSET_RULE:
      const newState = {...state};
      delete newState[action.privateType];
      return newState;
    default:
      return state;
  }
}