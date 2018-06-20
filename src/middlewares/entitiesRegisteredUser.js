import {forIn} from 'lodash';
import {ENTITIES_REGISTERED_USER_ADD} from '../actions/entities/registeredUser';
import {resolveUser} from '../modules/Entities/RegisteredUsers/index';

const middleware = ({dispatch, getState}) => next => action => {
  switch (action.type) {
    case ENTITIES_REGISTERED_USER_ADD:
      setTimeout(function() {
        forIn(action.registeredUsers, (user) => {
          resolveUser(user);
        });
      });
      break;
  }
  return next(action);
};

export default middleware;