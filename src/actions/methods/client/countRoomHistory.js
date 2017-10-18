export const METHOD_CLIENT_COUNT_ROOM_HISTORY = 'METHOD_CLIENT_COUNT_ROOM_HISTORY';

/**
 * @typedef {{media: number, image : number, video : number, audio : number, voice : number, gif : number, file : number, url : number}} TypeRoomHistoryCount
 * @param roomId
 * @param {TypeRoomHistoryCount} counts
 * @returns {{type: string, roomId: string, counts: TypeRoomHistoryCount}}
 */
export function clientCountRoomHistory(roomId, counts) {
  return {
    type: METHOD_CLIENT_COUNT_ROOM_HISTORY,
    roomId,
    counts,
  };
}