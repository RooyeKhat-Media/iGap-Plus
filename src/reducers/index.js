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
});

export default rootReducer;
