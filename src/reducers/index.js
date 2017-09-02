/**
 * @flow
 */
import {combineReducers} from 'redux';
import {api} from './api';
import {nav} from './nav';
import {intlReducer} from 'react-intl-redux';
import {modal} from './modal';
import methodsReducer from './methods';

const rootReducer = combineReducers({
  api,
  nav,
  intl: intlReducer,
  modal,
  methods: methodsReducer,
});

export default rootReducer;
