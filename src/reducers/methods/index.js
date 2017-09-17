import {nickName} from './user/profile/nickname';
import {contactsList} from './user/contacts/getList';
import {roomList} from './client/getRoomList';
import {combineReducers} from 'redux';

const methodsReducer = combineReducers({
  nickName,
  contactsList,
  roomList,
});
export default methodsReducer;
