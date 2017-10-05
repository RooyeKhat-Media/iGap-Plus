/**
 * @flow
 */
import {orderBy, values} from 'lodash';

import {createSelector} from 'reselect';

const getRooms = (state) =>
  state.messenger.room;

export const getRoomList = createSelector(
  getRooms,
  (roomListObject) => {
    return orderBy(values(roomListObject), ['order'], ['desc']);
  }
);