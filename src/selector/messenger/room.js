/**
 * @flow
 */

import {createSelector} from 'reselect';

const getRooms = (state) =>
  state.messenger.room;

const makeGetRooms = () => {
  return createSelector(
    getRooms,
    (roomList) => {
      return roomList;
    }
  );
};

export default makeGetRooms;