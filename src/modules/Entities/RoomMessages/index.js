import Collector from '../../Collector';
import store from '../../../configureStore';
import {isEmpty} from 'lodash';
import {entitiesRoomMessagesAdd} from '../../../actions/entities/roomMessages';
import RoomsMessage from '../../../models/entities/RoomMessages/index';

const {collect} = Collector(
  (collected) => {
    const messagesEntities = {};
    for (const normalizedMessage of collected.values()) {
      messagesEntities[normalizedMessage.id] = normalizedMessage;
    }
    if (!isEmpty(messagesEntities)) {
      store.dispatch(entitiesRoomMessagesAdd(messagesEntities, false));
    }
  },
  250
);

/**
 * @param {string} id
 * @return {Promise.<void>}
 */
export default async function putState(id) {
  const roomMessage = store.getState().entities.roomMessages[id];
  if (!roomMessage) {
    const normalizedRoomMessage = await RoomsMessage.loadFromQueue(id);
    collect(normalizedRoomMessage, normalizedRoomMessage.id);
  }
}