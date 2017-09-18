/**
 * @flow
 */

import store from '../configureStore';
import {NavigationAction, NavigationParams} from 'react-navigation/src/TypeDefinition';
import {NavigationActions} from 'react-navigation';
import {navigatorGo, navigatorReset} from '../actions/navigator';


export function navigate(routeName: string,
  params?: NavigationParams,
  action?: NavigationAction) {
  store.dispatch(navigatorGo(
    routeName,
    params,
    action
  ));
}

export function resetNavigation(routeName: string) {
  store.dispatch(navigatorReset(
    {
      index: 0,
      actions: [NavigationActions.navigate({routeName})],
    }));
}