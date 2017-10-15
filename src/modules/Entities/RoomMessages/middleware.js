import {ENTITIES_ROOM_MESSAGE_ADD} from '../../../actions/entities/roomMessages';
import RoomMessages from '../../../models/entities/RoomMessages';

const middleware = ({dispatch, getState}) => next => action => {
  switch (action.type) {
    case ENTITIES_ROOM_MESSAGE_ADD:
      if (action.fromServer) {
        for (const messageId in action.roomMessages) {
          if (action.roomMessages.hasOwnProperty(messageId)) {
            RoomMessages.saveToQueue(action.roomMessages[messageId]);
          }
        }
      }
      break;
  }
  return next(action);
};

export default middleware;