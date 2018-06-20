import {ENTITIES_ROOM_ADD} from '../actions/entities/rooms';
import {processUnresolvedMessageStatus} from '../utils/messenger';
import {forIn} from 'lodash';
import {resolveRoom} from '../modules/Entities/Rooms/index';

const middleware = ({dispatch, getState}) => next => action => {
  switch (action.type) {
    case ENTITIES_ROOM_ADD:
      setTimeout(function() {
        forIn(action.rooms, (room, roomId) => {
          processUnresolvedMessageStatus(roomId);
          resolveRoom(room);
        });
      });
      break;
  }
  return next(action);
};

export default middleware;