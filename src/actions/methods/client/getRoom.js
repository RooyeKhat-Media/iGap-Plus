export const METHOD_CLIENT_GET_ROOM = 'METHOD_CLIENT_GET_ROOM';

export function getRoom(room) {
  return {
    type: METHOD_CLIENT_GET_ROOM,
    room,
  };
}