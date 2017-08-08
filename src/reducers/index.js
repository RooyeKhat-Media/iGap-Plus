/**
 * @flow
 */

import { combineReducers } from 'redux';
import { intlReducer } from 'react-intl-redux';

const rootReducer = combineReducers({
  intl: intlReducer,
});

export default rootReducer;
