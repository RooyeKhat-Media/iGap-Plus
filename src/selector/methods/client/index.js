import {createSelector} from 'reselect';
import {getRoomId} from '../../entities/room';

export const getCountRoomHistory = createSelector(
  getRoomId,
  (state) => state.methods.countRoomHistory,
  (roomId, countRoomHistories) => {
    return countRoomHistories[roomId];
  }
);