/**
 * @flow
 */

import {applyMiddleware, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import apiMiddleware from './modules/Api/middleware';
import callMiddleware from './modules/Call/middleware';
import soundPlayerMiddleware from './middlewares/soundPlayer';
import {middleware as fileManagerMiddleware} from './modules/FileManager';
//import reduxLogger from 'redux-logger';
//Navigation
import {middleware as appNavigatorMiddleware} from './navigators/AppNavigator';
import {middleware as primaryNavigatorMiddleware} from './navigators/PrimaryNavigator';
import {middleware as secondaryNavigatorMiddleware} from './navigators/SecondaryNavigator';
//Entities
import entitiesRoomsMiddleware from './modules/Entities/Rooms/middleware';
import entitiesRegisteredUsersMiddleware from './modules/Entities/RegisteredUsers/middleware';
import entitiesRoomMessagesMiddleware from './modules/Entities/RoomMessages/middleware';
//Messenger
import messengerRoomsMiddleware from './modules/Messenger/Rooms/middleware';
import userUpdateStatusMiddleware from './middlewares/userUpdateStatus';
import entitiesRoomMiddleware from './middlewares/entitiesRoom';
//Optimization
//import collectorMiddleware from './middlewares/collector';

function configureStore(preloadedState) {
  const middlewares = [
    thunkMiddleware,
    apiMiddleware,
    callMiddleware,
    fileManagerMiddleware,
    soundPlayerMiddleware,
    //Navigation
    appNavigatorMiddleware,
    primaryNavigatorMiddleware,
    secondaryNavigatorMiddleware,
    //Entities
    entitiesRoomsMiddleware,
    entitiesRegisteredUsersMiddleware,
    entitiesRoomMessagesMiddleware,
    //Messenger
    messengerRoomsMiddleware,
    userUpdateStatusMiddleware,
    entitiesRoomMiddleware,
    //Optimization
    //collectorMiddleware,
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