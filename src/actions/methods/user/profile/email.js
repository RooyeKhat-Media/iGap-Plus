export const METHOD_USER_PROFILE_EMAIL = 'METHOD_USER_PROFILE_EMAIL';

export function setEmail(email) {
  return {
    type: METHOD_USER_PROFILE_EMAIL,
    email,
  };
}