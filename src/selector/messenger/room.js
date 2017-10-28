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
    return orderBy(values(roomListObject), ['sort'], ['desc']);
  }
);