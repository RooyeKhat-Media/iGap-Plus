/**
 * @flow
 */

import {
  NavigationParams,
  NavigationAction,
} from 'react-navigation/src/TypeDefinition';

export const NAVIGATOR_GO = 'NAVIGATOR_GO';

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
