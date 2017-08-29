/**
 * @flow
 */
import {combineReducers} from 'redux';
import {api} from './api';
import {nav} from './nav';
import {intlReducer} from 'react-intl-redux';
import {modal} from './modal';

const rootReducer = combineReducers({
  api,
  nav,
  intl: intlReducer,
  modal,
});

export default rootReducer;
