import {nickName} from './user/profile/nickname';
import {contactsList} from './user/contacts/getList';
import {combineReducers} from 'redux';

const methodsReducer = combineReducers({
  nickName,
  contactsList,
});
export default methodsReducer;
