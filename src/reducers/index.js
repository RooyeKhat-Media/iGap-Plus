/**
 * @flow
 */
import {combineReducers} from 'redux';
import {api} from './api';
import {nav} from './nav';
import {navSecondary} from './navSecondary';
import {navPrimary} from './navPrimary';
import {intlReducer} from 'react-intl-redux';
import {modal} from './modal';
import {fileManager} from './fileManager';
import {theme} from './theme';
import methodsReducer from './methods';
import entities from './entities';
import messenger from './messenger';

const rootReducer = combineReducers({
  api,
  nav,
  navSecondary,
  navPrimary,
  intl: intlReducer,
  modal,
  fileManager,
  methods: methodsReducer,
  theme,
  entities,
  messenger,
});

export default rootReducer;
