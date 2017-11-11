/**
 * @flow
 */

import store from '../configureStore';
import {NavigationAction, NavigationParams} from 'react-navigation/src/TypeDefinition';
import {NavigationActions} from 'react-navigation';
import {navigatorGo, navigatorReset, primaryNavigatorReset, secondaryNavigatorReset} from '../actions/navigator';
import {PRIMARY_NAV_TAB, SECONDARY_INITIAL_SCREEN} from '../constants/navigators';


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

export function resetSecondaryNavigation(routeName: string = SECONDARY_INITIAL_SCREEN, params, index: number = 0) {
  store.dispatch(secondaryNavigatorReset(
    {
      index,
      actions: [
        NavigationActions.navigate({routeName, params}),
      ],
    }));
}