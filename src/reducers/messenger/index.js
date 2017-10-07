import {combineReducers} from 'redux';
import {room} from './room';
import {roomMessages} from './roomMessages';

const messengerReducer = combineReducers({
  room,
  roomMessages,
});
export default messengerReducer;
