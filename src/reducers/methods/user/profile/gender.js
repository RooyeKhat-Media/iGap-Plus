/**
 * @flow
 */
import {METHOD_USER_PROFILE_GENDER} from '../../../../actions/methods/user/profile/gender';
import {Proto} from '../../../../modules/Proto/index';

const initialGender = Proto.Gender.UNKNOWN;

export function gender(state = initialGender, action) {
  switch (action.type) {
    case METHOD_USER_PROFILE_GENDER:
      return action.gender;
    default:
      return state;
  }
}