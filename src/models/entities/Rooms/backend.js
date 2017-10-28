import Squel from '../../../modules/Squel';
import {storage} from '../../MetaData/storage';
import {normalizedRoomToSerializableRoom, serializableRoomToNormalizedRoom} from '../../../schemas/room';

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

      const serializableRoom = normalizedRoomToSerializableRoom(dataInPersist.doc);
      const data = {
        ...serializableRoom,
      };
      delete data.id;
      delete data.type;
      delete data.title;

      createDocs.push({
        id,
        type: serializableRoom.type,
        title: serializableRoom.title,
        data: JSON.stringify(data),
        cacheTime,
      });
    }
  }

  storage.transaction((transaction) => {
    if (createDocs.length) {
      transaction.executeSql(Squel.insert().into('entities_rooms').setFieldsRows(createDocs).toString());
    }

    if (deleteDocs.length) {
      transaction.executeSql(Squel.delete().from('entities_rooms').where('id IN ?', deleteDocs).toString());
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
    const query = Squel.select().from('entities_rooms')
      .field('CAST(id AS TEXT) AS id')
      .field('type')
      .field('title')
      .field('data')
      .where('id IN ?', [...retrieve.keys()]).toString();
    transaction.executeSql(query, [], (transaction, results) => {
      for (let i = 0; i < results.rows.length; i++) {
        const row = results.rows.item(i);

        const dbDoc = {
          id: row.id,
          type: row.type,
          title: row.title,
          ...JSON.parse(row.data),
        };

        const dataInRetrieve = retrieve.get(row.id);
        dataInRetrieve.resolve(serializableRoomToNormalizedRoom(dbDoc));

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