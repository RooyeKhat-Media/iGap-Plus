/**
 * @flow
 */

import {applyMiddleware, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import apiMiddleware from './modules/Api/middleware';
import {middleware as fileManagerMiddleware} from './modules/FileManager';
import reduxLogger from 'redux-logger';
//Entities
import entitiesRoomsMiddleware from './modules/Entities/Rooms/middleware';
import entitiesRegisteredUsersMiddleware from './modules/Entities/RegisteredUsers/middleware';
import entitiesRoomMessagesMiddleware from './modules/Entities/RoomMessages/middleware';
//Messenger
import messengerRoomsMiddleware from './modules/Messenger/Rooms/middleware';

function configureStore(preloadedState) {
  const middlewares = [
    thunkMiddleware,
    apiMiddleware,
    fileManagerMiddleware,
    //Entities
    entitiesRoomsMiddleware,
    entitiesRegisteredUsersMiddleware,
    entitiesRoomMessagesMiddleware,
    //Messenger
    messengerRoomsMiddleware,
  ];

  if (process.env.NODE_ENV === `development`) {
    //middlewares.push(reduxLogger);
  }

  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middlewares)
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