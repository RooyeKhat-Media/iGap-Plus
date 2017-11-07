export const METHOD_USER_PRIVACY_SET_RULE = 'METHOD_USER_PRIVACY_SET_RULE';
export const METHOD_USER_PRIVACY_UNSET_RULE = 'METHOD_USER_PRIVACY_UNSET_RULE';

export function setRule(privateType, privateLevel) {
  return {
    type: METHOD_USER_PRIVACY_SET_RULE,
    privateType,
    privateLevel,
  };
}

export function unSetRule(privateType) {
  return {
    type: METHOD_USER_PRIVACY_UNSET_RULE,
    privateType,
  };
}