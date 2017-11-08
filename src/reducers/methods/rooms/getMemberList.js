import {
  METHODS_ROOM_GET_MEMBER_LIST,
  METHODS_ROOM_GET_MEMBER_LIST_KICK_MEMBER,
  METHODS_ROOM_GET_MEMBER_LIST_RESET_LIST,
  METHODS_ROOM_GET_MEMBER_LIST_SET_ROLE,
} from '../../../actions/methods/rooms/getMemberList';

const memberList = {};

export function getMemberList(state = memberList, action) {
  switch (action.type) {
    case METHODS_ROOM_GET_MEMBER_LIST:
      return {

        roomId: action.roomId,
        members: {
          ...state.member,
          ...action.members,
        },
      };
    case METHODS_ROOM_GET_MEMBER_LIST_RESET_LIST:
      return {};
    case METHODS_ROOM_GET_MEMBER_LIST_KICK_MEMBER:
      if (action.roomId !== state.roomId) {
        return state;
      }
      const newMemberList = {...state.members};
      delete newMemberList[action.memberId];
      return {
        ...state,
        members: newMemberList,
      };
    case METHODS_ROOM_GET_MEMBER_LIST_SET_ROLE:
      if (action.roomId !== state.roomId) {
        return state;
      }
      const memberList = {...state.members};
      if (memberList[action.userId]) {
        memberList[action.userId] = {
          ...memberList[action.userId],
          role: action.role,
        };
      }
      return {
        ...state,
        members: memberList,
      };
    default:
      return state;
  }
}