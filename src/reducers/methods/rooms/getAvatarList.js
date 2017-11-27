/**
 * @flow
 */
import {
  METHOD_DELETE_AVATAR,
  METHOD_DELETE_AVATAR_LIST,
  METHOD_GET_AVATAR_LIST,
} from '../../../actions/methods/rooms/getAvatarList';

export function getAvatarList(state = {}, action) {
  switch (action.type) {
    case METHOD_GET_AVATAR_LIST:
      return {
        ...state,
        [action.id]: action.avatarList,
      };
    case  METHOD_DELETE_AVATAR_LIST:
      const newList = {...state};
      delete newList[action.id];
      return newList;
    case METHOD_DELETE_AVATAR :
      const avatarListId = action.userId ? 'U' + action.userId : 'R' + action.roomId;
      const newListDelete = {...state};
      const selectedList = newListDelete[avatarListId];
      if (selectedList) {
        for (const key in selectedList) {
          if (!selectedList.hasOwnProperty(key)) {
            continue;
          }
          const avatar = selectedList[key];
          if (avatar.getId().toString() === action.deletedAvatarId.toString()) {
            delete selectedList[key];
            return newListDelete;
          }
        }
      }
      return state;
    default:
      return state;
  }
}

