/**
 * @flow
 */
import {METHOD_USER_PROFILE_SELF_REMOVE} from '../../../../actions/methods/user/profile/selfRemove';

export function selfRemove(state = 0, action) {
  switch (action.type) {
    case METHOD_USER_PROFILE_SELF_REMOVE:
      return action.selfRemoveMonth;
    default:
      return state;
  }
}