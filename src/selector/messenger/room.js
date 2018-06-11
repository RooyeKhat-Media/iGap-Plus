/**
 * @flow
 */
import {orderBy, values} from 'lodash';

import {createSelector} from 'reselect';

const getRooms = (state) =>
  state.messenger.rooms;

export const getRoomList = createSelector(
  getRooms,
  (roomListObject) => {
    return orderBy(values(roomListObject), ['pinId', 'sort'], ['desc', 'desc']);
  }
);

export const getRoomType = createSelector(
  (state) => state.entities.rooms,
  (roomList) => roomId => roomList[roomId] ? roomList[roomId].type : null
);