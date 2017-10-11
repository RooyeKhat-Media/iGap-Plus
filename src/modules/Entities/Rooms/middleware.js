import {ENTITIES_ROOM_ADD} from '../../../actions/entities/rooms';
import Rooms from '../../../models/entities/Rooms';

const middleware = ({dispatch, getState}) => next => action => {
  switch (action.type) {
    case ENTITIES_ROOM_ADD:
      if (action.fromServer) {
        action.rooms.forEach(function(normalizedRoom) {
          Rooms.saveToQueue(normalizedRoom);
        });
      }
      break;
  }
  return next(action);
};

export default middleware;