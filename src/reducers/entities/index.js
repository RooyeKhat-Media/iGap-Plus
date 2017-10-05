import {combineReducers} from 'redux';
import {rooms} from './rooms';
import {roomMessages} from './roomMessages';
import {registeredUsers} from './registeredUsers';

const entitiesReducer = combineReducers({
  rooms,
  roomMessages,
  registeredUsers,
});
export default entitiesReducer;
