import {combineReducers} from 'redux';
import {rooms} from './rooms';
import {roomMessages} from './roomMessages';

const entitiesReducer = combineReducers({
  rooms,
  roomMessages,
});
export default entitiesReducer;
