/**
 * @flow
 */
import {orderBy, values} from 'lodash';
import {createSelector} from 'reselect';

const getBlockListState = (state) =>
  state.methods.blockUser;
export const getBlockList = createSelector(
  getBlockListState,
  (roomListObject) => {
    return orderBy(values(roomListObject), ['sort'], ['asc']);
  }
);