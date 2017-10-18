import {nickName} from './user/profile/nickname';
import {contactsList} from './user/contacts/getList';
import {countRoomHistory} from './client/countRoomHistory';
import {combineReducers} from 'redux';

const methodsReducer = combineReducers({
  nickName,
  contactsList,
  countRoomHistory,
});
export default methodsReducer;
