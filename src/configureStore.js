/**
 * @flow
 */

import {applyMiddleware, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import apiMiddleware from './modules/Api/middleware';
import {middleware as FileManagerMiddleware} from './modules/FileManager';

function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      apiMiddleware,
      FileManagerMiddleware,
    )
  );
}

const initialState = {
  intl: {
    defaultLocale: 'en',
    locale: 'en',
    // messages: messagesEn,// todo un comment default messages
  },
};

const store = configureStore(initialState);
export default store;