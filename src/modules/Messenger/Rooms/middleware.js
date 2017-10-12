import {MESSENGER_ROOM_ADD_LIST, MESSENGER_ROOM_REMOVE} from '../../../actions/messenger/rooms';
import Rooms from '../../../models/messenger/Rooms';

const middleware = ({dispatch, getState}) => next => action => {
  switch (action.type) {
    case MESSENGER_ROOM_ADD_LIST:
      if (action.fromServer) {
        for (const roomId in action.payload) {
          if (action.payload.hasOwnProperty(roomId)) {
            Rooms.saveToQueue(action.payload[roomId]);
          }
        }
      }
      break;
    case MESSENGER_ROOM_REMOVE:
      Rooms.removeFromQueue(action.roomId);
      break;
  }
  return next(action);
};

export default middleware;