import Squel from '../../../modules/Squel';
import {storage} from '../../MetaData/storage';
import {
  normalizedRoomMessageToSerializableRoomMessage,
  serializableRoomMessageToNormalizedRoomMessage,
} from '../../../schemas/roomMessage';

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

/**
 * @param {DbLoadQueueMap} retrieve
 */
export function retrieveCallback(retrieve) {
  storage.readTransaction((transaction) => {
    const params = Squel.select().from('entities_room_messages')
      .field('CAST(id AS TEXT) AS id')
      .field('data')
      .field('roomId')
      .field('message')
      .field('fraction')
      .field('messageType')
      .where('id IN ?', [...retrieve.keys()]).toParam();

    transaction.executeSql(params.text, params.values, (transaction, results) => {
      for (let i = 0; i < results.rows.length; i++) {
        const row = results.rows.item(i);
        const dbDoc = {
          id: row.id,
          roomId: row.roomId,
          message: row.message,
          fraction: row.fraction,
          messageType: row.messageType,
          ...JSON.parse(row.data),
        };
        const dataInRetrieve = retrieve.get(row.id);
        dataInRetrieve.resolve(serializableRoomMessageToNormalizedRoomMessage(dbDoc));
        retrieve.delete(row.id);
      }
    });
  }, (error) => {
    console.warn(error);
    for (const dataInRetrieve of retrieve.values()) {
      dataInRetrieve.reject(error);
    }
  }, () => {
    for (const dataInRetrieve of retrieve.values()) {
      dataInRetrieve.reject();
    }
  });
}

/**
 * retrieve History
 * @param roomId
 * @param firstMessageId
 * @param upward
 * @param limit
 * @returns {Promise}
 */
export function retrieveHistoryCallback(roomId, firstMessageId, upward, limit) {
  return new Promise((resolve, reject) => {
    const roomMessages = [];
    storage.readTransaction((transaction) => {
      let selectQuery = Squel.select().from('entities_room_messages')
        .field('CAST(id AS TEXT) AS id')
        .field('data')
        .field('roomId')
        .field('message')
        .field('fraction')
        .field('messageType')
        .where('roomId = ?', roomId)
        .order('id', !upward)
        .limit(limit);

      if (firstMessageId) {
        selectQuery = selectQuery.where('id ' + (upward ? '<' : '>') + ' ?', firstMessageId);
      }

      const params = selectQuery.toParam();

      transaction.executeSql(params.text, params.values, (transaction, results) => {
        if (results.rows.length) {
          for (let i = 0; i < results.rows.length; i++) {
            const row = results.rows.item(i);
            const dbDoc = serializableRoomMessageToNormalizedRoomMessage({
              id: row.id,
              roomId: row.roomId,
              message: row.message,
              fraction: row.fraction,
              messageType: row.messageType,
              ...JSON.parse(row.data),
            });
            roomMessages.push(dbDoc);
          }
          resolve(roomMessages);
        } else {
          reject('No room history is found in local database');
        }
      });
    }, (error) => {
      reject(error);
    }, () => {
      reject();
    });
  });
}