/**
 * @flow
 */
import {METHOD_USER_PROFILE_NICKNAME} from '../../../../actions/methods/user/profile/nickname';

const initialNickname = '';

export function nickName(state = initialNickname, action) {
  switch (action.type) {
    case METHOD_USER_PROFILE_NICKNAME:
      return action.nickName;
    default:
      return state;
  }
}