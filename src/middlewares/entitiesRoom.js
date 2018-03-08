import {ENTITIES_ROOM_ADD} from '../actions/entities/rooms';
import {processUnresolvedMessageStatus} from '../utils/messenger';

const middleware = ({dispatch, getState}) => next => action => {
  switch (action.type) {
    case ENTITIES_ROOM_ADD:
      setTimeout(function() {
        for (const roomId in action.rooms) {
          processUnresolvedMessageStatus(roomId);
        }
      });
      break;
  }
  return next(action);
};

export default middleware;