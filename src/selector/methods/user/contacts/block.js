/**
 * @flow
 */
import {orderBy, values} from 'lodash';
import {createSelector} from 'reselect';

const getBlockListState = (state) =>
  state.methods.blockUser;
export const getBlockList = createSelector(
  getBlockListState,
  (blockListObject) => {
    return orderBy(values(blockListObject), ['sort'], ['asc']);
  }
);

export const getIsBlockFunc = createSelector(
  getBlockListState,
  (blockListObject) => (id) => !!blockListObject[id],
);