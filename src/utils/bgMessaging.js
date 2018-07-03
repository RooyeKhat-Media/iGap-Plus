// Optional flow type
import '../configureStore';
import type {RemoteMessage} from 'react-native-firebase';
import {notifyMessage} from '../modules/Notification/index';

export default async (remoteMessage: RemoteMessage) => {
  // handle your message
  const {data} = remoteMessage;
  let title, message;
  const args = JSON.parse(data.loc_args);

  switch (data.loc_key) {
    case 'MESSAGE_TEXT':
      title = args[0];
      message = args[1];
      break;
    case 'MESSAGE_IMAGE':
      title = args[0];
      message = 'sent you a photo';
      break;
    case 'MESSAGE_VIDEO':
      title = args[0];
      message = 'sent you a video';
      break;
    case 'MESSAGE_AUDIO':
      title = args[0];
      message = 'sent you a audio';
      break;
    case 'MESSAGE_VOICE':
      title = args[0];
      message = 'sent you a voice message';
      break;
    case 'MESSAGE_GIF':
      title = args[0];
      message = 'sent you a gif';
      break;
    case 'MESSAGE_FILE':
      title = args[0];
      message = 'sent you a file';
      break;
    case 'MESSAGE_LOCATION':
      title = args[0];
      message = 'sent you a location';
      break;
    case 'MESSAGE_CONTACT':
      title = args[0];
      message = 'shared a contact with you';
      break;
    case 'GROUP_MESSAGE_TEXT':
      title = args[1];
      message = args[0] + ': ' + args[2];
      break;
    case 'GROUP_MESSAGE_IMAGE':
      title = args[1];
      message = args[0] + ': sent a photo';
      break;
    case 'GROUP_MESSAGE_VIDEO':
      title = args[1];
      message = args[0] + ': sent a video';
      break;
    case 'GROUP_MESSAGE_AUDIO':
      title = args[1];
      message = args[0] + ': sent a audio';
      break;
    case 'GROUP_MESSAGE_VOICE':
      title = args[1];
      message = args[0] + ': sent a voice message';
      break;
    case 'GROUP_MESSAGE_GIF':
      title = args[1];
      message = args[0] + ': sent a gif';
      break;
    case 'GROUP_MESSAGE_FILE':
      title = args[1];
      message = args[0] + ': sent a file';
      break;
    case 'GROUP_MESSAGE_LOCATION':
      title = args[1];
      message = args[0] + ': sent a location';
      break;
    case 'GROUP_MESSAGE_CONTACT':
      title = args[1];
      message = args[0] + ': shared a contact with you';
      break;
    case 'CHANNEL_MESSAGE_TEXT':
      title = args[0];
      message = args[1];
      break;
    case 'CHANNEL_MESSAGE_IMAGE':
      title = args[0];
      message = 'posted a photo';
      break;
    case 'CHANNEL_MESSAGE_VIDEO':
      title = args[0];
      message = 'posted a video';
      break;
    case 'CHANNEL_MESSAGE_AUDIO':
      title = args[0];
      message = 'posted a audio';
      break;
    case 'CHANNEL_MESSAGE_VOICE':
      title = args[0];
      message = 'posted a voice message';
      break;
    case 'CHANNEL_MESSAGE_GIF':
      title = args[0];
      message = 'posted a gif';
      break;
    case 'CHANNEL_MESSAGE_FILE':
      title = args[0];
      message = 'posted a file';
      break;
    case 'CHANNEL_MESSAGE_LOCATION':
      title = args[0];
      message = 'posted a location';
      break;
    case 'CHANNEL_MESSAGE_CONTACT':
      title = args[0];
      message = 'posted a contact';
      break;
  }
  notifyMessage(
    data.roomId,
    title,
    null,
    message,
    data.messageId);
  return Promise.resolve();
};