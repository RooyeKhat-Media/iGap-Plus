export const USER_TWO_STEP_PASSWORD_DETAIL = 'USER_TWO_STEP_PASSWORD_DETAIL';
export const USER_TWO_STEP_PASSWORD_CLEAR_DETAIL = 'USER_TWO_STEP_PASSWORD_CLEAR_DETAIL';

export function passwordDetail(question_one, question_two, hint, has_confirmed_recovery_email, unconfirmed_email_pattern) {
  return {
    type: USER_TWO_STEP_PASSWORD_DETAIL,
    question_one,
    question_two,
    hint,
    has_confirmed_recovery_email,
    unconfirmed_email_pattern,
  };
}

export function clearPasswordDetail() {
  return {
    type: USER_TWO_STEP_PASSWORD_CLEAR_DETAIL,
  };
}