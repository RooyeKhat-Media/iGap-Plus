/**
 * @flow
 */

import {NavigationAction, NavigationParams} from 'react-navigation/src/TypeDefinition';

export const NAVIGATOR_GO = 'NAVIGATOR_GO';

export const NAVIGATOR_BACK = 'NAVIGATOR_BACK';
export const PRIMARY_NAVIGATOR_BACK = 'PRIMARY_NAVIGATOR_BACK';
export const SECONDARY_NAVIGATOR_BACK = 'SECONDARY_NAVIGATOR_BACK';

export const NAVIGATOR_RESET = 'NAVIGATOR_RESET';
export const PRIMARY_NAVIGATOR_RESET = 'PRIMARY_NAVIGATOR_RESET';
export const SECONDARY_NAVIGATOR_RESET = 'SECONDARY_NAVIGATOR_RESET';

export function navigatorGo(routeName: string,
  params?: NavigationParams,
  action?: NavigationAction) {
  return {
    type: NAVIGATOR_GO,
    routeName,
    params,
    action,
  };
}

export function navigatorBack(params = {}) {
  return {
    type: NAVIGATOR_BACK,
    params,
  };
}

export function primaryNavigatorBack(params = {}) {
  return {
    type: PRIMARY_NAVIGATOR_BACK,
    params,
  };
}

export function secondaryNavigatorBack(params = {}) {
  return {
    type: SECONDARY_NAVIGATOR_BACK,
    params,
  };
}

export function navigatorReset(params = {}) {
  return {
    type: NAVIGATOR_RESET,
    params,
  };
}

export function primaryNavigatorReset(params = {}) {
  return {
    type: PRIMARY_NAVIGATOR_RESET,
    params,
  };
}

export function secondaryNavigatorReset(params = {}) {
  return {
    type: SECONDARY_NAVIGATOR_RESET,
    params,
  };
}