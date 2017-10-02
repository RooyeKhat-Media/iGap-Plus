import {combineReducers} from 'redux';
import {rooms} from './rooms';

const entitiesReducer = combineReducers({
  rooms,
});
export default entitiesReducer;
