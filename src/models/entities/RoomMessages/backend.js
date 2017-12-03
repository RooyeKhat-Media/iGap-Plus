import Squel from '../../../modules/Squel';
import {storage} from '../../MetaData/storage';
import {normalizedRoomMessageToSerializableRoomMessage} from '../../../schemas/roomMessage';

/**
 * @param {DbSaveQueueMap} persist
 */
export function persistCallback(persist) {
  const createDocs = [];
  const deleteDocs = [];
  const cacheTime = (new Date()).getTime() / 1000;

  for (const [id, dataInPersist] of persist.entries()) {
    if (dataInPersist.deleted) {
      deleteDocs.push(id);
    } else {

      const serializableRoomMessage = normalizedRoomMessageToSerializableRoomMessage(dataInPersist.doc);
      const data = {
        ...serializableRoomMessage,
      };
      delete data.id;
      delete data.roomId;
      delete data.messageType;
      delete data.message;

      if (!serializableRoomMessage.roomId) {
        console.error('serializableRoomMessage.roomId must be set', serializableRoomMessage);
      }

      createDocs.push({
        id,
        roomId: serializableRoomMessage.roomId,
        messageType: serializableRoomMessage.messageType,
        message: serializableRoomMessage.message,
        data: JSON.stringify(data),
        fraction: serializableRoomMessage.fraction || 0,
        cacheTime,
      });
    }
  }

  storage.transaction((transaction) => {
    if (createDocs.length) {
      const params = Squel.insert().into('entities_room_messages').setFieldsRows(createDocs).toParam();
      transaction.executeSql(params.text, params.values);
    }

    if (deleteDocs.length) {
      const params = Squel.delete().from('entities_room_messages').where('id IN ?', deleteDocs).toParam();
      transaction.executeSql(params.text, params.values);
    }
  }, (error) => {
    console.warn(error);
  });
}