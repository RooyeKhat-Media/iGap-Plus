/**
 * @flow
 */
import {CLIENT_STATUS_CHANGED} from '../../actions/api';
import {CLIENT_STATUS} from './index';
import Api from './index';

const middleware = ({dispatch, getState}) => next => action => {
  if (action.type === CLIENT_STATUS_CHANGED) {
    switch (action.status) {
      case CLIENT_STATUS.CONNECTING:
      case CLIENT_STATUS.CONNECTED:
      case CLIENT_STATUS.DISCONNECTED:
        Api.instance.__rejectRunning();
        Api.instance.__rejectWeakPending();
        break;
      case CLIENT_STATUS.SECURED:
        Api.instance.__pollPending();
        break;
    }
  }
  return next(action);
};

export default middleware;