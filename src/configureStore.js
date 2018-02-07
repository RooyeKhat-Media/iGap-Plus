/**
 * @flow
 */

import {applyMiddleware, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import apiMiddleware from './modules/Api/middleware';
import soundPlayerMiddleware from './middlewares/soundPlayer';
import {middleware as fileManagerMiddleware} from './modules/FileManager';
import reduxLogger from 'redux-logger';
//Entities
import entitiesRoomsMiddleware from './modules/Entities/Rooms/middleware';
import entitiesRegisteredUsersMiddleware from './modules/Entities/RegisteredUsers/middleware';
import entitiesRoomMessagesMiddleware from './modules/Entities/RoomMessages/middleware';
//Messenger
import messengerRoomsMiddleware from './modules/Messenger/Rooms/middleware';
import userUpdateStatusMiddleware from './middlewares/userUpdateStatus';

function configureStore(preloadedState) {
  const middlewares = [
    thunkMiddleware,
    apiMiddleware,
    fileManagerMiddleware,
    soundPlayerMiddleware,
    //Entities
    entitiesRoomsMiddleware,
    entitiesRegisteredUsersMiddleware,
    entitiesRoomMessagesMiddleware,
    //Messenger
    messengerRoomsMiddleware,
    userUpdateStatusMiddleware,
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