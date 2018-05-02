import {MESSENGER_ROOM_ADD_LIST, MESSENGER_ROOM_REMOVE} from '../../../actions/messenger/rooms';
import Rooms from '../../../models/messenger/Rooms';
import {assign, forIn} from 'lodash';

const middleware = ({dispatch, getState}) => next => action => {
  switch (action.type) {
    case MESSENGER_ROOM_ADD_LIST:
      if (action.fromServer) {
        const state = getState().messenger.rooms;
        const newStateList = {};
        forIn(action.payload, (value, key) => {
          newStateList[key] = assign(state[key] || {pinId: '0'}, value);
        });
        forIn(newStateList, (value, key) => {
          Rooms.saveToQueue(value);
        });
      }
      break;
    case MESSENGER_ROOM_REMOVE:
      Rooms.removeFromQueue(action.roomId);
      break;
  }
  return next(action);
};

export default middleware;