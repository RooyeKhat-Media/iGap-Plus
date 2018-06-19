import MetaData from '../models/MetaData';
import {METADATA_APP_THEME} from '../models/MetaData/constant';
import {setAppTheme} from './default/index';
import {reloadApp} from '../utils/app';

import light from './light';
import dark from './dark';
import blueDark from './blue-dark';
import red from './red';
import pink from './pink';
import purple from './purple';
import deepPurple from './deep-purple';
import indigo from './indigo';
import blue from './blue';
import lightBlue from './light-blue';
import cyan from './cyan';
import teal from './teal';
import green from './green';
import lightGreen from './light-green';
import lime from './lime';
import yellow from './yellow';
import amber from './amber';
import orange from './orange';
import deepOrange from './deep-orange';
import brown from './brown';
import grey from './grey';
import blueGrey from './blue-grey';


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
  red: {
    name: 'Red',
    theme: red,
    colors: [red.toolbar, red.primary, red.ownerBox],
  },
  pink: {
    name: 'Pink',
    theme: pink,
    colors: [pink.toolbar, pink.primary, pink.ownerBox],
  },
  purple: {
    name: 'Purple',
    theme: purple,
    colors: [purple.toolbar, purple.primary, purple.ownerBox],
  },
  deepPurple: {
    name: 'Deep Purple',
    theme: deepPurple,
    colors: [deepPurple.toolbar, deepPurple.primary, deepPurple.ownerBox],
  },
  indigo: {
    name: 'Indigo',
    theme: indigo,
    colors: [indigo.toolbar, indigo.primary, indigo.ownerBox],
  },
  blue: {
    name: 'Blue',
    theme: blue,
    colors: [blue.toolbar, blue.primary, blue.ownerBox],
  },
  lightBlue: {
    name: 'Light Blue',
    theme: lightBlue,
    colors: [lightBlue.toolbar, lightBlue.primary, lightBlue.ownerBox],
  },
  cyan: {
    name: 'Cyan',
    theme: cyan,
    colors: [cyan.toolbar, cyan.primary, cyan.ownerBox],
  },
  teal: {
    name: 'Teal',
    theme: teal,
    colors: [teal.toolbar, teal.primary, teal.ownerBox],
  },
  green: {
    name: 'Green',
    theme: green,
    colors: [green.toolbar, green.primary, green.ownerBox],
  },
  lightGreen: {
    name: 'LightGreen',
    theme: lightGreen,
    colors: [lightGreen.toolbar, lightGreen.primary, lightGreen.ownerBox],
  },
  lime: {
    name: 'Lime',
    theme: lime,
    colors: [lime.toolbar, lime.primary, lime.ownerBox],
  },
  yellow: {
    name: 'Yellow',
    theme: yellow,
    colors: [yellow.toolbar, yellow.primary, yellow.ownerBox],
  },
  amber: {
    name: 'Amber',
    theme: amber,
    colors: [amber.toolbar, amber.primary, amber.ownerBox],
  },
  orange: {
    name: 'Orange',
    theme: orange,
    colors: [orange.toolbar, orange.primary, orange.ownerBox],
  },
  deepOrange: {
    name: 'Deep Orange',
    theme: deepOrange,
    colors: [deepOrange.toolbar, deepOrange.primary, deepOrange.ownerBox],
  },
  brown: {
    name: 'Brown',
    theme: brown,
    colors: [brown.toolbar, brown.primary, brown.ownerBox],
  },
  grey: {
    name: 'Grey',
    theme: grey,
    colors: [grey.toolbar, grey.primary, grey.ownerBox],
  },
  blueGrey: {
    name: 'Blue Grey',
    theme: blueGrey,
    colors: [blueGrey.toolbar, blueGrey.primary, blueGrey.ownerBox],
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