/**
 * @flow
 */

import store from '../configureStore';
import {
  NavigationParams,
  NavigationAction,
} from 'react-navigation/src/TypeDefinition';
import {navigatorGo} from '../actions/navigator';


export function navigate(routeName: string,
                         params?: NavigationParams,
                         action?: NavigationAction) {
  store.dispatch(navigatorGo(
    routeName,
    params,
    action
  ));
}
