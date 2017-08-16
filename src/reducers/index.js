/**
 * @flow
 */
import {combineReducers} from 'redux';
import {api} from './api';
import {nav} from './nav';
import {intlReducer} from 'react-intl-redux';


const rootReducer = combineReducers({
  api,
  nav,
  intl: intlReducer,
});

export default rootReducer;
