/**
 * @flow
 */

import store from '../configureStore';
import {NavigationAction, NavigationParams} from 'react-navigation/src/TypeDefinition';
import {NavigationActions} from 'react-navigation';
import {navigatorGo, navigatorReset, primaryNavigatorReset} from '../actions/navigator';
import {PRIMARY_NAV_TAB} from '../constants/navigators';


export function navigate(routeName: string,
  params?: NavigationParams,
  action?: NavigationAction) {
  store.dispatch(navigatorGo(
    routeName,
    params,
    action
  ));
}

export function resetNavigation(routeName: string, index: number = 0) {
  store.dispatch(navigatorReset(
    {
      index,
      actions: [NavigationActions.navigate({routeName})],
    }));
}

export function resetPrimaryNavigation(routeName: string, params, index: number = 1) {
  store.dispatch(primaryNavigatorReset(
    {
      index,
      actions: [
        NavigationActions.navigate({routeName: PRIMARY_NAV_TAB}),
        NavigationActions.navigate({routeName, params}),
      ],
    }));
}