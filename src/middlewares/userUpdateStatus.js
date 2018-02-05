import {CLIENT_STATUS_CHANGED} from '../actions/api';
import {CLIENT_STATUS} from '../modules/Api/index';
import {setUserOffline, setUserOnline} from '../utils/app';

export default ({dispatch, getState}) => next => action => {
  if (action.type === CLIENT_STATUS_CHANGED) {
    switch (action.status) {
      case CLIENT_STATUS.DISCONNECTED:
        setUserOffline(false);
        break;
      case CLIENT_STATUS.LOGGED_IN:
        setUserOnline(true);
        break;
    }
  }
  return next(action);
};