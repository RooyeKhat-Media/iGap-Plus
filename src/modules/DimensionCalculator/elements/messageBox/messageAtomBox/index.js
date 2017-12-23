import {Proto} from '../../../../../modules/Proto/index';
import textCalculator from './text';
import imageCalculator from './image';
import videoCalculator from './video';
import audioCalculator from './audio';
import voiceCalculator from './voice';
import gifCalculator from './gif';
import fileCalculator from './file';
import locationCalculator from './location';
import contactCalculator from './contact';

/**
 * @type dimensionCalculatorFunction
 */
const calculator = (maxWidth, outer, roomMessage, boxType, forwarded) => {
  switch (roomMessage.messageType) {
    case Proto.RoomMessageType.TEXT:
      return textCalculator(maxWidth, outer, roomMessage, boxType, forwarded);
    case Proto.RoomMessageType.IMAGE:
    case Proto.RoomMessageType.IMAGE_TEXT:
      return imageCalculator(maxWidth, outer, roomMessage, boxType, forwarded);
    case Proto.RoomMessageType.VIDEO:
    case Proto.RoomMessageType.VIDEO_TEXT:
      return videoCalculator(maxWidth, outer, roomMessage, boxType, forwarded);
    case Proto.RoomMessageType.AUDIO:
    case Proto.RoomMessageType.AUDIO_TEXT:
      return audioCalculator(maxWidth, outer, roomMessage, boxType, forwarded);
    case Proto.RoomMessageType.VOICE:
      return voiceCalculator(maxWidth, outer, roomMessage, boxType, forwarded);
    case Proto.RoomMessageType.GIF:
    case Proto.RoomMessageType.GIF_TEXT:
      return gifCalculator(maxWidth, outer, roomMessage, boxType, forwarded);
    case Proto.RoomMessageType.FILE:
    case Proto.RoomMessageType.FILE_TEXT:
      return fileCalculator(maxWidth, outer, roomMessage, boxType, forwarded);
    case Proto.RoomMessageType.LOCATION:
      return locationCalculator(maxWidth, outer, roomMessage, boxType, forwarded);
    case Proto.RoomMessageType.CONTACT:
      return contactCalculator(maxWidth, outer, roomMessage, boxType, forwarded);
    default:
      return 0;
  }
};

export default calculator;