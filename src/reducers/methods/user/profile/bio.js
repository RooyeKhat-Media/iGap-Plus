/**
 * @flow
 */
import {METHOD_USER_PROFILE_BIO} from '../../../../actions/methods/user/profile/bio';

const initialBio = '';

export function bio(state = initialBio, action) {
  switch (action.type) {
    case METHOD_USER_PROFILE_BIO:
      return action.bio;
    default:
      return state;
  }
}