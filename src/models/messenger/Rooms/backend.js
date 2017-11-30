import Squel from '../../../modules/Squel';
import {storage} from '../../MetaData/storage';

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
      createDocs.push(dataInPersist.doc);
    }
  }

  storage.transaction((transaction) => {
    if (createDocs.length) {
      const params = Squel.insert().into('messenger_rooms').setFieldsRows(createDocs).toParam();
      transaction.executeSql(params.text, params.values);
    }

    if (deleteDocs.length) {
      transaction.executeSql(Squel.delete().from('messenger_rooms').where('id IN ?', deleteDocs).toString());
    }
  }, (error) => {
    console.warn(error);
  });
}

/**
 *
 * @return {Promise.<MessengerRoomsPayload>}
 */
export function retrieveAllCallback() {
  return new Promise((resolve, reject) => {
    storage.readTransaction((transaction) => {
      const payload = {};
      const query = Squel.select().from('messenger_rooms')
        .field('CAST(id AS TEXT) AS id')
        .field('CAST(sort AS TEXT) AS sort')
        .toString();
      transaction.executeSql(query, [], (transaction, results) => {
        for (let i = 0; i < results.rows.length; i++) {
          const row = results.rows.item(i);
          payload[row.id] = row;
        }
        resolve(payload);
      });
    }, (error) => {
      reject(error);
    });
  });
}