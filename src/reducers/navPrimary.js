/**
 * @flow
 */
import PrimaryNavigator from '../navigators/PrimaryNavigator';
import {NavigationActions} from 'react-navigation';
import {NAVIGATOR_GO, PRIMARY_NAVIGATOR_BACK, PRIMARY_NAVIGATOR_RESET} from '../actions/navigator';

export function navPrimary(state, action) {

  // Simply return the original `state` if `nextState` is null or undefined.
  let nextState;
  switch (action.type) {
    case PRIMARY_NAVIGATOR_BACK:
      nextState = PrimaryNavigator.router.getStateForAction(NavigationActions.back(action.params), state);
      break;
    case PRIMARY_NAVIGATOR_RESET:
      nextState = PrimaryNavigator.router.getStateForAction(NavigationActions.reset(action.params), state);
      break;
    case NAVIGATOR_GO:
      nextState = PrimaryNavigator.router.getStateForAction(
        NavigationActions.navigate({
          routeName: action.routeName,
          params: action.params,
          action: action.action,
        }),
        state
      );
      break;
    default:
      nextState = PrimaryNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}