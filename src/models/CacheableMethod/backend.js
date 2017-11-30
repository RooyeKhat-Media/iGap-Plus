import Squel from '../../modules/Squel';
import {objectToUint8Array} from '../../utils/core';
import {storage} from '../MetaData/storage';

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
      createDocs.push({
        id,
        data: JSON.stringify(dataInPersist.doc),
        cacheTime,
      });
    }
  }

  storage.transaction((transaction) => {
    if (createDocs.length) {
      const params = Squel.insert().into('cacheable_method').setFieldsRows(createDocs).toParam();
      transaction.executeSql(params.text, params.values);
    }

    if (deleteDocs.length) {
      transaction.executeSql(Squel.delete().from('cacheable_method').where('id IN ?', deleteDocs).toString());
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
    const query = Squel.select().from('cacheable_method').field('id').field('data').where('id IN ?', [...retrieve.keys()]).toString();
    transaction.executeSql(query, [], (transaction, results) => {
      for (let i = 0; i < results.rows.length; i++) {
        const row = results.rows.item(i);
        const dbDoc = JSON.parse(row.data);

        const dataInRetrieve = retrieve.get(row.id);
        dataInRetrieve.resolve({
          ...dbDoc,
          data: objectToUint8Array(dbDoc.data),
        });

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