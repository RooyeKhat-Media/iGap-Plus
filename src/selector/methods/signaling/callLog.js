/**
 * @flow
 */
import {orderBy, values} from 'lodash';
import {createSelector} from 'reselect';

const getCallLogListState = (state) =>
  state.methods.callLog;

export const getCallLogList = createSelector(
  getCallLogListState,
  (objectList) => {
    return orderBy(values(objectList), ['sort'], ['desc']);
  }
);