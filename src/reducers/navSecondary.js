/**
 * @flow
 */
import {NavigationActions} from 'react-navigation';
import SecondaryNavigator from '../navigators/SecondaryNavigator';
import {NAVIGATOR_GO, SECONDARY_NAVIGATOR_BACK, SECONDARY_NAVIGATOR_RESET} from '../actions/navigator';

export function navSecondary(state, action) {
  // Simply return the original `state` if `nextState` is null or undefined.
  let nextState;
  switch (action.type) {
    case SECONDARY_NAVIGATOR_BACK:
      nextState = SecondaryNavigator.router.getStateForAction(NavigationActions.back(action.params), state);
      break;
    case SECONDARY_NAVIGATOR_RESET:
      nextState = SecondaryNavigator.router.getStateForAction(NavigationActions.reset(action.params), state);
      break;
    case NAVIGATOR_GO:
      nextState = SecondaryNavigator.router.getStateForAction(
        NavigationActions.navigate({
          routeName: action.routeName,
          params: action.params,
          action: action.action,
        }),
        state
      );
      break;
    default:
      nextState = SecondaryNavigator.router.getStateForAction(action, state);
      break;
  }
  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}