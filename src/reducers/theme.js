/**
 * @flow
 */
import {THEME_CHANGE} from '../actions/theme';
import {DEFAULT_THEME_NAME} from '../themes';

const defaultTheme = DEFAULT_THEME_NAME;

export function theme(state = defaultTheme, action) {
  switch (action.type) {
    case THEME_CHANGE:
      return action.theme;
    default:
      return state;
  }
}