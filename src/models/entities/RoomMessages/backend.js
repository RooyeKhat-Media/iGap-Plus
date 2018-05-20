import Squel from '../../../modules/Squel';
import {storage} from '../../MetaData/storage';
import {map} from 'lodash';
import {
  normalizedRoomMessageToSerializableRoomMessage,
  serializableRoomMessageToNormalizedRoomMessage,
} from '../../../schemas/roomMessage';
import LogReport from '../../../modules/LogReport';

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
      delete data.messageVersion;
      delete data.statusVersion;
      delete data.deleteVersion;

      if (!serializableRoomMessage.roomId) {
        console.error('serializableRoomMessage.roomId must be set', serializableRoomMessage);
      }

      createDocs.push({
        id,
        roomId: serializableRoomMessage.roomId,
        messageType: serializableRoomMessage.messageType,
        message: serializableRoomMessage.message,
        messageVersion: serializableRoomMessage.messageVersion,
        statusVersion: serializableRoomMessage.statusVersion || 0,
        deleteVersion: serializableRoomMessage.deleteVersion || 0,
        data: JSON.stringify(data),
        fraction: serializableRoomMessage.fraction || 0,
        cacheTime,
      });
    }
  }

  storage.transaction((transaction) => {
    if (createDocs.length) {
      try {
        const params = Squel.insert().into('entities_room_messages').setFieldsRows(createDocs).toParam();
        transaction.executeSql(params.text, params.values);
      } catch (e) {
        LogReport('EntitiesRoomMessages.insertException', {
          id: map(createDocs, ({id}) => typeof id),
          roomId: map(createDocs, ({roomId}) => typeof roomId),
          messageType: map(createDocs, ({messageType}) => typeof messageType),
          message: map(createDocs, ({message}) => typeof message),
          messageVersion: map(createDocs, ({messageVersion}) => typeof messageVersion),
          statusVersion: map(createDocs, ({statusVersion}) => typeof statusVersion),
          deleteVersion: map(createDocs, ({deleteVersion}) => typeof deleteVersion),
          data: map(createDocs, ({data}) => typeof data),
          fraction: map(createDocs, ({fraction}) => typeof fraction),
          cacheTime: map(createDocs, ({cacheTime}) => typeof cacheTime),
        });
      }
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
      .field('CAST(roomId AS TEXT) AS roomId')
      .field('message')
      .field('fraction')
      .field('messageType')
      .field('CAST(messageVersion AS TEXT) AS messageVersion')
      .field('CAST(statusVersion AS TEXT) AS statusVersion')
      .field('CAST(deleteVersion AS TEXT) AS deleteVersion')
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
          messageVersion: row.messageVersion,
          statusVersion: row.statusVersion,
          deleteVersion: row.deleteVersion,
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
 * @param {string} roomId
 * @param {string} firstMessageId
 * @param {boolean} upward
 * @param {number} limit
 * @returns {Promise}
 */
export function retrieveHistoryCallback(roomId, firstMessageId, upward, limit) {
  return new Promise((resolve, reject) => {
    const roomMessages = [];
    storage.readTransaction((transaction) => {
      let selectQuery = Squel.select().from('entities_room_messages')
        .field('CAST(id AS TEXT) AS id')
        .field('data')
        .field('CAST(roomId AS TEXT) AS roomId')
        .field('message')
        .field('fraction')
        .field('messageType')
        .field('CAST(messageVersion AS TEXT) AS messageVersion')
        .field('CAST(statusVersion AS TEXT) AS statusVersion')
        .field('CAST(deleteVersion AS TEXT) AS deleteVersion')
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
              messageVersion: row.messageVersion,
              statusVersion: row.statusVersion,
              deleteVersion: row.deleteVersion,
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

export function clearHistory(roomId, clearId) {
  return new Promise((resolve, reject) => {
    storage.transaction((transaction) => {
      const params = Squel.delete()
        .from('entities_room_messages')
        .where('roomId = ?', roomId)
        .where('id <= ?', clearId)
        .toParam();
      transaction.executeSql(params.text, params.values, (transaction, results) => {
        resolve();
      });
    }, (error) => {
      reject(error);
    });
  });
}