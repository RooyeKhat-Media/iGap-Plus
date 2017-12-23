export const METHOD_USER_LOGOUT = 'METHOD_USER_LOGOUT';

export function logout() {
  return {
    type: METHOD_USER_LOGOUT,
  };
}