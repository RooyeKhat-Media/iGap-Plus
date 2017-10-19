import {CHAT_GET_ROOM} from '../constants/methods/index';
import {ChatGetRoom} from '../modules/Proto/index';
import putState from '../modules/Entities/RegisteredUsers';
import store from '../configureStore';
import Api from '../modules/Api/index';

/**
 * @param {string} userId
 * @returns {Promise.<string>}
 */
export async function chatGetRoom(userId) {
  await putState(userId);
  const user = store.getState().entities.registeredUsers[userId];
  const chatGetRoom = new ChatGetRoom();
  chatGetRoom.setPeerId(user.longId);

  const chatGetRoomResponse = await Api.invoke(CHAT_GET_ROOM, chatGetRoom);
  return chatGetRoomResponse.getRoom().getRoomId().toString();
}

export async function getPeerRoomId(userId) {
  const state = store.getState();
  let peerRoomId = null;
  for (const roomId in state.entities.rooms) {
    if (state.entities.rooms.hasOwnProperty(roomId)) {
      const room = state.entities.rooms[roomId];
      if (room.chatPeer && room.chatPeer === userId) {
        peerRoomId = room.id;
        break;
      }
    }
  }
  if (!peerRoomId) {
    peerRoomId = await chatGetRoom(userId);
  }
  return peerRoomId;
}