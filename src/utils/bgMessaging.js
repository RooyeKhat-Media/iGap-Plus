// Optional flow type
import '../configureStore';
import Api from '../modules/Api/index';
import type {RemoteMessage} from 'react-native-firebase';
import {CLIENT_GET_ROOM_MESSAGE} from '../constants/methods/index';
import {ClientGetRoomMessage} from '../modules/Proto/index';
import {apiInvoke} from '../modules/Entities/Rooms/index';
import {notifyMessage} from '../modules/Notification/index';

export default async (message: RemoteMessage) => {
  // handle your message

  let {payload} = message.data;
  payload = JSON.parse(payload);
  await Api.instance;
  const clientGetMessage = new ClientGetRoomMessage();
  clientGetMessage.setRoomId(payload.roomId);
  clientGetMessage.setMessageId(payload.messageId);
  /**
   * @param {ProtoClientGetRoomMessageResponse} clientGetMessageResponse
   */
  try {

    const clientGetMessageResponse = await Api.invoke(CLIENT_GET_ROOM_MESSAGE, clientGetMessage);
    const clientGetRoom = await apiInvoke(payload.roomId);

    notifyMessage(
      payload.roomId,
      clientGetRoom.getRoom().getTitle(),
      null,
      clientGetMessageResponse.getMessage().getMessage(),
      clientGetMessageResponse.getMessage().getMessageId().toString());
  } catch (e) {
  }

  return Promise.resolve();
};