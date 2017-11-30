import Squel from '../../../modules/Squel';
import {storage} from '../../MetaData/storage';
import {
  normalizedRegisteredUserToSerializableRegisteredUser,
  serializableRegisteredUserToNormalizedRegisteredUser,
} from '../../../schemas/registeredUser';

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

      const serializableRegisteredUser = normalizedRegisteredUserToSerializableRegisteredUser(dataInPersist.doc);
      const data = {
        ...serializableRegisteredUser,
      };
      delete data.id;

      createDocs.push({
        id,
        data: JSON.stringify(data),
        cacheTime,
      });
    }
  }

  storage.transaction((transaction) => {
    if (createDocs.length) {
      const params = Squel.insert().into('entities_registered_users').setFieldsRows(createDocs).toParam();
      transaction.executeSql(params.text, params.values);
    }

    if (deleteDocs.length) {
      transaction.executeSql(Squel.delete().from('entities_registered_users').where('id IN ?', deleteDocs).toString());
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
    const query = Squel.select().from('entities_registered_users')
      .field('CAST(id AS TEXT) AS id')
      .field('data')
      .where('id IN ?', [...retrieve.keys()]).toString();
    transaction.executeSql(query, [], (transaction, results) => {
      for (let i = 0; i < results.rows.length; i++) {
        const row = results.rows.item(i);

        const dbDoc = {
          id: row.id,
          ...JSON.parse(row.data),
        };

        const dataInRetrieve = retrieve.get(row.id);
        dataInRetrieve.resolve(serializableRegisteredUserToNormalizedRegisteredUser(dbDoc));

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