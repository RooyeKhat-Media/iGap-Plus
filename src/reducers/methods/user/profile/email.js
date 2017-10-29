/**
 * @flow
 */
import {METHOD_USER_PROFILE_EMAIL} from '../../../../actions/methods/user/profile/email';

const initialEmail = '';

export function email(state = initialEmail, action) {
  switch (action.type) {
    case METHOD_USER_PROFILE_EMAIL:
      return action.email;
    default:
      return state;
  }
}