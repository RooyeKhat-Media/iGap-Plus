import {orderBy, values} from 'lodash';
import {createSelector} from 'reselect';

export const getMemberList = createSelector(
  (state) => state.methods.getMemberList,
  (memberList) => {
    if (!memberList || !memberList.members) {
      return [];
    }
    return orderBy(values(memberList.members), ['sort'], ['asc']);
  }
);