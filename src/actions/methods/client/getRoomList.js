export const METHOD_CLIENT_GET_ROOM_LIST = 'METHOD_CLIENT_GET_ROOM_LIST';

export function getRoomList(rooms) {
  return {
    type: METHOD_CLIENT_GET_ROOM_LIST,
    rooms,
  };
}