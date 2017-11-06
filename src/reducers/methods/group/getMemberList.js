import {
  METHOD_GROUP_GET_MEMBER_LIST,
  METHOD_GROUP_GET_MEMBER_LIST_RESET_LIST,
} from '../../../actions/methods/group/getMemberList';


const memberList = [];

export function getMemberList(state = memberList, action) {
  switch (action.type) {
    case METHOD_GROUP_GET_MEMBER_LIST:
      return [
        ...state,
        ...action.memberList,
      ];
    case METHOD_GROUP_GET_MEMBER_LIST_RESET_LIST:
      return [];
    default:
      return state;
  }
}