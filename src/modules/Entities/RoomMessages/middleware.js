import {
  ENTITIES_ROOM_MESSAGE_ADD,
  ENTITIES_ROOM_MESSAGE_EDIT,
  ENTITIES_ROOM_MESSAGE_REMOVE,
} from '../../../actions/entities/roomMessages';
import RoomMessages from '../../../models/entities/RoomMessages';
import {
  MESSENGER_ROOM_MESSAGE_CLEAR_MESSAGES,
  MESSENGER_ROOM_MESSAGE_REPLACE_MESSAGE,
} from '../../../actions/messenger/roomMessages';

const middleware = ({dispatch, getState}) => next => action => {
  let message;
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
    case ENTITIES_ROOM_MESSAGE_REMOVE:
      RoomMessages.removeFromQueue(action.messageId);
      break;
    case MESSENGER_ROOM_MESSAGE_REPLACE_MESSAGE:
      RoomMessages.removeFromQueue(action.oldMessageId);
      break;
    case MESSENGER_ROOM_MESSAGE_CLEAR_MESSAGES:
      RoomMessages.removeFromQueue(action.roomId, action.clearId);
      break;
    case ENTITIES_ROOM_MESSAGE_EDIT:
      message = getState().entities.roomMessages[action.messageId];
      if (message && action.fromServer) {
        RoomMessages.saveToQueue({
          ...message,
          ...action.payload,
        });
      }
      break;
  }
  return next(action);
};

export default middleware;