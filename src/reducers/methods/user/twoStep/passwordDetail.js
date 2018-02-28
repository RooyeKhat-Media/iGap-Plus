import {
  USER_TWO_STEP_PASSWORD_CLEAR_DETAIL,
  USER_TWO_STEP_PASSWORD_DETAIL,
} from '../../../../actions/methods/user/twoStep/passwordDetail';

const initialState = {
  hasPassword: false,
  question_one: null,
  question_two: null,
  hint: null,
  has_confirmed_recovery_email: null,
  unconfirmed_email_pattern: null,
};

export function passwordDetail(state = initialState, action) {
  switch (action.type) {
    case USER_TWO_STEP_PASSWORD_DETAIL:
      return {
        hasPassword: true,
        question_one: action.question_one,
        question_two: action.question_two,
        hint: action.hint,
        has_confirmed_recovery_email: action.has_confirmed_recovery_email,
        unconfirmed_email_pattern: action.unconfirmed_email_pattern,
      };
    case USER_TWO_STEP_PASSWORD_CLEAR_DETAIL:
      return initialState;
    default:
      return state;
  }
}