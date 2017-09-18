/**
 * @flow
 */
import AppNavigator from '../navigators/AppNavigator';
import {NavigationActions} from 'react-navigation';
import {INITIAL_SCREEN} from '../constants/navigators';
import {NAVIGATOR_BACK, NAVIGATOR_GO, NAVIGATOR_RESET} from '../actions/navigator';

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams(INITIAL_SCREEN));

export function nav(state = initialState, action) {
  let nextState;
  switch (action.type) {
    case NAVIGATOR_BACK:
      nextState = AppNavigator.router.getStateForAction(NavigationActions.back(action.params), state);
      break;
    case NAVIGATOR_RESET:
      nextState = AppNavigator.router.getStateForAction(NavigationActions.reset(action.params), state);
      break;
    case NAVIGATOR_GO:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({
          routeName: action.routeName,
          params: action.params,
          action: action.action,
        }),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }
  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}