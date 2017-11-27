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

export const getAvatarList = createSelector(
  (state) => state.methods.getAvatarList,
  (state, props) => {
    const {userId, roomId} = props.navigation.state.params;
    return userId ? 'U' + userId : 'R' + roomId;
  },
  (avatarList, selectedId) => {
    if (selectedId) {
      const list = avatarList[selectedId];
      if (list) {
        let result = [];
        let index = 0;
        list.forEach((avatar) => {
          result.push({
            avatar: avatar, source: {uri: 'loading'},
            dimensions: {width: avatar.getFile().getWidth(), height: avatar.getFile().getHeight()},
            index: index++,
          });
        });
        return result;
      }
    }
    return null;
  });