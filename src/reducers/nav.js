/**
 * @flow
 */
import AppNavigator from '../navigators/AppNavigator';
import {NavigationActions} from 'react-navigation';
import {INTRO} from '../constants/navigators';
import {NAVIGATOR_GO} from '../actions/navigator';

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams(INTRO));

export function nav(state = initialState, action) {
  let nextState;
  switch (action.type) {
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