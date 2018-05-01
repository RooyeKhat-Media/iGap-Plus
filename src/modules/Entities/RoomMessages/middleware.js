import {
  ENTITIES_ROOM_MESSAGE_ADD,
  ENTITIES_ROOM_MESSAGE_EDIT,
} from '../../../actions/entities/roomMessages';
import RoomMessages from '../../../models/entities/RoomMessages';
import {
  MESSENGER_ROOM_MESSAGE_CLEAR_MESSAGES,
  MESSENGER_ROOM_MESSAGE_REPLACE_MESSAGE,
} from '../../../actions/messenger/roomMessages';

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
    case MESSENGER_ROOM_MESSAGE_REPLACE_MESSAGE:
      RoomMessages.removeFromQueue(action.oldMessageId);
      break;
    case MESSENGER_ROOM_MESSAGE_CLEAR_MESSAGES:
      RoomMessages.clearHistory(action.roomId, action.clearId);
      break;
    case ENTITIES_ROOM_MESSAGE_EDIT:
      editMessage(action, getState);
      break;
  }
  return next(action);
};

export default middleware;

/**
 * edit room message to db
 *
 * @param action
 * @param getState
 * @returns {Promise.<void>}
 */
async function editMessage(action, getState) {
  let message = getState().entities.roomMessages[action.messageId];
  try {
    if (!message) {
      message = await RoomMessages.loadFromQueue(action.messageId);
    }
    if (message) {
      RoomMessages.saveToQueue({
        ...message,
        ...action.payload,
      });
    }
  } catch (e) {}
}