import MetaData from '../models/MetaData';
import {METADATA_APP_THEME} from '../models/MetaData/constant';
import {setAppTheme} from './default/index';
import {reloadApp} from '../utils/app';

import light from './light';
import dark from './dark';

export const themes = {
  light: {
    name: 'Light',
    theme: light,
    colors: ['#ffffff', '#efefef', '#fafafa'],
  },
  dark: {
    name: 'Dark',
    theme: dark,
    colors: ['#000000', '#222222', '#232931'],
  },
};

export const DEFAULT_THEME_NAME = 'defaultTheme';

let _appThemeName = DEFAULT_THEME_NAME;

export async function loadAppThemeName() {
  _appThemeName = await MetaData.load(METADATA_APP_THEME) || DEFAULT_THEME_NAME;
  if (_appThemeName !== DEFAULT_THEME_NAME) {
    changeAppTheme(_appThemeName);
  }
  return _appThemeName;
}

export function getAppThemeName() {
  return _appThemeName;
}

export async function setAppThemeName(newTheme) {
  _appThemeName = newTheme;
  return MetaData.save(METADATA_APP_THEME, newTheme);
}

export function changeAppTheme(newTheme) {
  setAppTheme(themes[newTheme].theme);
  reloadApp();
}