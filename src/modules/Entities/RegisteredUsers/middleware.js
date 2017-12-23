import {ENTITIES_REGISTERED_USER_ADD, ENTITIES_REGISTERED_USER_EDIT} from '../../../actions/entities/registeredUser';
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
    case ENTITIES_REGISTERED_USER_EDIT:
      const user = getState().entities.registeredUsers[action.id];
      if (user && action.updateDb) {
        RegisteredUsers.saveToQueue({
          ...user,
          ...action.payload,
        });
      }
      break;
  }
  return next(action);
};

export default middleware;