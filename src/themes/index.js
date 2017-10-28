import defaultTheme from './default';
import MetaData from '../models/MetaData';
import store from '../configureStore';
import {themeChange} from '../actions/theme';
import {METADATA_APP_THEME} from '../models/MetaData/constant';

export const DEFAULT_THEME_NAME = 'defaultTheme';

let _appTheme = DEFAULT_THEME_NAME;

export async function loadAppThemeName() {
  _appTheme = await MetaData.load(METADATA_APP_THEME);
  return _appTheme;
}

export function getAppTheme() {
  if (_appTheme === DEFAULT_THEME_NAME) {
    return defaultTheme;
  }
  return defaultTheme;
}

export async function setAppThemeName(newTheme) {
  _appTheme = newTheme;
  return MetaData.save(METADATA_APP_THEME, newTheme);
}

export function changeAppTheme(newTheme) {
  store.dispatch(themeChange(newTheme));
}