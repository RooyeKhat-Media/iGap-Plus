import {combineReducers} from 'redux';
import {room} from './room';

const messengerReducer = combineReducers({
  room,
});
export default messengerReducer;
