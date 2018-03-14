import Squel from '../../../../modules/Squel/index';
import {storage} from '../../../MetaData/storage';

/**
 * @param {DbSaveQueueMap} persist
 */
export function persistCallback(persist) {
  const createDocs = [];
  const deleteDocs = [];

  for (const [id, dataInPersist] of persist.entries()) {
    if (dataInPersist.deleted) {
      deleteDocs.push(id);
    } else {
      createDocs.push({
        roomId: id,
        ...dataInPersist.doc,
      });
    }
  }

  storage.transaction((transaction) => {
    if (createDocs.length) {
      const params = Squel.insert().into('entities_rooms_meta').setFieldsRows(createDocs).toParam();
      transaction.executeSql(params.text, params.values);
    }
    if (deleteDocs.length) {
      const params = Squel.delete().from('entities_rooms_meta').where('roomId IN ?', deleteDocs).toParam();
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
    const params = Squel.select().from('entities_rooms_meta')
      .field('CAST(roomId AS TEXT) AS roomId')
      .field('CAST(clearId AS TEXT) AS clearId')
      .where('roomId IN ?', [...retrieve.keys()]).toParam();
    transaction.executeSql(params.text, params.values, (transaction, results) => {
      for (let i = 0; i < results.rows.length; i++) {
        const row = results.rows.item(i);

        const dbDoc = {
          roomId: row.roomId,
          clearId: row.clearId,
        };

        const dataInRetrieve = retrieve.get(row.roomId);
        dataInRetrieve.resolve(dbDoc);

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