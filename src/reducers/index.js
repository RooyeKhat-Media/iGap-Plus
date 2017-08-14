/**
 * @flow
 */
import {combineReducers} from 'redux';
import {api} from './api';
import {intlReducer} from 'react-intl-redux';


const rootReducer = combineReducers({
  api,
  intl: intlReducer,
});

export default rootReducer;
