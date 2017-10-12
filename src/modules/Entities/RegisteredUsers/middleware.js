import {ENTITIES_REGISTERED_USER_ADD} from '../../../actions/entities/registeredUser';
import RegisteredUsers from '../../../models/entities/RegisteredUsers';

const middleware = ({dispatch, getState}) => next => action => {
  switch (action.type) {
    case ENTITIES_REGISTERED_USER_ADD:
      if (action.fromServer) {
        for (const userId in action.registeredUsers) {
          if (action.registeredUsers.hasOwnProperty(userId)) {
            RegisteredUsers.saveToQueue(action.registeredUsers[userId]);
          }
        }
      }
      break;
  }
  return next(action);
};

export default middleware;