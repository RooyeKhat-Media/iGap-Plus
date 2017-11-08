export const METHODS_ROOM_GET_MEMBER_LIST = 'METHODS_ROOM_GET_MEMBER_LIST';
export const METHODS_ROOM_GET_MEMBER_LIST_RESET_LIST = 'METHODS_ROOM_GET_MEMBER_LIST_RESET_LIST';
export const METHODS_ROOM_GET_MEMBER_LIST_KICK_MEMBER = 'METHODS_ROOM_GET_MEMBER_LIST_KICK_MEMBER';
export const METHODS_ROOM_GET_MEMBER_LIST_SET_ROLE = 'METHODS_ROOM_GET_MEMBER_LIST_SET_ROLE';

/**
 * @typedef {{userId:Long, role: ProtoChannelRoom.Role || ProtoGroupRoom.Role, sort: number}} RoomMember
 * @typedef {Object.<string,RoomMember>} RoomMemberList
 *
 * @param {string} roomId
 * @param {RoomMemberList} members
 * @returns {{type: string, roomId: string, memberList: RoomMemberList}}
 */
export function getMemberList(roomId, members) {
  return {
    type: METHODS_ROOM_GET_MEMBER_LIST,
    roomId,
    members,
  };
}

/**
 * @param {string} roomId
 * @returns {{type: string, roomId: string}}
 */
export function resetMemberList(roomId) {
  return {
    type: METHODS_ROOM_GET_MEMBER_LIST_RESET_LIST,
    roomId,
  };
}

/**
 * @param {string} roomId
 * @param {string} memberId
 * @returns {{type: string, roomId: string, memberId: string}}
 */
export function kickMember(roomId, memberId) {
  return {
    type: METHODS_ROOM_GET_MEMBER_LIST_KICK_MEMBER,
    roomId,
    memberId,
  };
}

/**
 * @param {string} roomId
 * @param {string} userId
 * @param {ProtoGroupRoom.Role} role
 * @returns {{type: string, roomId: string, memberId: string, role: ProtoChannelRoom.Role || ProtoGroupRoom.Role}}
 */
export function setMemberRole(roomId, userId, role) {
  return {
    type: METHODS_ROOM_GET_MEMBER_LIST_SET_ROLE,
    roomId,
    userId,
    role,
  };
}