import {storage} from '../../models/MetaData/storage';
import {METADATA_SCHEMA_VERSION} from '../../models/MetaData/constant';

export default function truncate() {
  return new Promise((resolve, reject) => {
    storage.transaction((transaction) => {
      transaction.executeSql(`DELETE FROM metadata WHERE id!=` + METADATA_SCHEMA_VERSION + `;`);
      transaction.executeSql(`DELETE FROM cacheable_method;`);
      transaction.executeSql(`DELETE FROM entities_rooms;`);
      transaction.executeSql(`DELETE FROM entities_registered_users;`);
      transaction.executeSql(`DELETE FROM entities_room_messages;`);
      transaction.executeSql(`DELETE FROM messenger_rooms;`);
    }, (error) => {
      reject(error);
    }, () => {
      resolve();
    });
  });
}