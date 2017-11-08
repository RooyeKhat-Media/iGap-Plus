import {nickName} from './user/profile/nickname';
import {contactsList} from './user/contacts/getList';
import {countRoomHistory} from './client/countRoomHistory';
import {combineReducers} from 'redux';
import {gender} from './user/profile/gender';
import {email} from './user/profile/email';
import {bio} from './user/profile/bio';
import {getMemberList} from './rooms/getMemberList';

const methodsReducer = combineReducers({
  nickName,
  contactsList,
  gender,
  email,
  bio,
  countRoomHistory,
  getMemberList,
});
export default methodsReducer;
