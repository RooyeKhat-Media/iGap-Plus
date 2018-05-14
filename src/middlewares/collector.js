import Collector from '../modules/Collector';
import {startsWith} from 'lodash';
import {
  FILE_MANAGER_UPLOAD_DISPOSED,
  FILE_MANAGER_UPLOAD_PENDING,
} from '../actions/fileManager';
import {METHOD_USER_LOGOUT} from '../actions/methods/user/logout';
import {APP_ENABLE} from "../actions/app";


const {collect} = Collector(
  (collected) => {
    collected.forEach(({next, action}) => {
      next(action);
    });
  },
  300,
  100,
  true
);

export default store => next => action => {

  let immediate = (
    action._immediate
      ||
      startsWith(action.type, 'NAVIGATOR_')
      ||
      startsWith(action.type, 'PRIMARY_NAVIGATOR_')
      ||
      startsWith(action.type, 'SECONDARY_NAVIGATOR_')
      ||
      startsWith(action.type, 'Navigation/')
      ||
      startsWith(action.type, '@@intl/')
      ||
      action.type === APP_ENABLE
      ||
      action.type === FILE_MANAGER_UPLOAD_PENDING
      ||
      action.type === FILE_MANAGER_UPLOAD_DISPOSED
      ||
      action.type === METHOD_USER_LOGOUT
      ||
      false
  );


  if (immediate) {
    return next(action);
  }

  collect({
    next,
    action,
  });

  return action;
};