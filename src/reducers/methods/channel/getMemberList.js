import {
  METHOD_CHANNEL_GET_MEMBER_LIST,
  METHOD_CHANNEL_GET_MEMBER_LIST_RESET_LIST,
} from '../../../actions/methods/channel/getMemberList';


const memberList = [];

export function getMemberList(state = memberList, action) {
  switch (action.type) {
    case METHOD_CHANNEL_GET_MEMBER_LIST:
      return [
        ...state,
        ...action.memberList,
      ];
    case METHOD_CHANNEL_GET_MEMBER_LIST_RESET_LIST:
      return [];
    default:
      return state;
  }
}