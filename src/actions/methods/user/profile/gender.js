export const METHOD_USER_PROFILE_GENDER = 'METHOD_USER_PROFILE_GENDER';

export function setGender(gender) {
  return {
    type: METHOD_USER_PROFILE_GENDER,
    gender,
  };
}