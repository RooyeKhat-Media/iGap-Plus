export const METHOD_USER_PROFILE_BIO = 'METHOD_USER_PROFILE_BIO';

export function setBio(bio) {
  return {
    type: METHOD_USER_PROFILE_BIO,
    bio,
  };
}