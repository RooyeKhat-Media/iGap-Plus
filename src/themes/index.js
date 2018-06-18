import MetaData from '../models/MetaData';
import {METADATA_APP_THEME} from '../models/MetaData/constant';
import {setAppTheme} from './default/index';
import {reloadApp} from '../utils/app';

import light from './light';
import dark from './dark';
import blueDark from './blue-dark';
import blue from './blue';
import red from './red';
import orange from './orange';
import green from './green';
import yellow from './yellow';
import pink from './pink';
import cyan from './cyan';
import purple from './purple';

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
  blueDark: {
    name: 'Blue Dark',
    theme: blueDark,
    colors: [blueDark.toolbar, blueDark.primary, blueDark.ownerBox],
  },
  blue: {
    name: 'Blue',
    theme: blue,
    colors: [blue.toolbar, blue.primary, blue.ownerBox],
  },
  red: {
    name: 'Red',
    theme: red,
    colors: [red.toolbar, red.primary, red.ownerBox],
  },
  orange: {
    name: 'orange',
    theme: orange,
    colors: [orange.toolbar, orange.primary, orange.ownerBox],
  },
  green: {
    name: 'green',
    theme: green,
    colors: [green.toolbar, green.primary, green.ownerBox],
  },
  yellow: {
    name: 'yellow',
    theme: yellow,
    colors: [yellow.toolbar, yellow.primary, yellow.ownerBox],
  },
  pink: {
    name: 'pink',
    theme: pink,
    colors: [pink.toolbar, pink.primary, pink.ownerBox],
  },
  cyan: {
    name: 'cyan',
    theme: cyan,
    colors: [cyan.toolbar, cyan.primary, cyan.ownerBox],
  },
  purple: {
    name: 'purple',
    theme: purple,
    colors: [purple.toolbar, purple.primary, purple.ownerBox],
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