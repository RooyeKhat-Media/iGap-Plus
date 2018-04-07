/**
 * @flow
 */

import store from '../configureStore';
import {NavigationActions} from 'react-navigation';
import {navigatorGo, navigatorReset, primaryNavigatorReset, secondaryNavigatorReset} from '../actions/navigator';
import {PRIMARY_NAV_TAB, SECONDARY_INITIAL_SCREEN} from '../constants/navigators';


export function navigate(routeName: string,
  params,
  action) {
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

export function resetSecondaryNavigation(routeName: string, params) {
  const actions = [NavigationActions.navigate({routeName: SECONDARY_INITIAL_SCREEN, params})];
  if (routeName) {
    actions.push(NavigationActions.navigate({routeName, params}));
  }
  store.dispatch(secondaryNavigatorReset(
    {
      index: actions.length - 1,
      actions,
    }));
}