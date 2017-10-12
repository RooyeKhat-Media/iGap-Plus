import {combineReducers} from 'redux';
import {rooms} from './rooms';
import {roomMessages} from './roomMessages';

const messengerReducer = combineReducers({
  rooms,
  roomMessages,
});
export default messengerReducer;
