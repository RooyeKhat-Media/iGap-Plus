/**
 * @flow
 */
import {combineReducers} from 'redux';
import {api} from './api';
import {nav} from './nav';
import {intlReducer} from 'react-intl-redux';
import {modal} from './modal';
import {theme} from './theme';
import methodsReducer from './methods';

const rootReducer = combineReducers({
  api,
  nav,
  intl: intlReducer,
  modal,
  methods: methodsReducer,
  theme,
});

export default rootReducer;
