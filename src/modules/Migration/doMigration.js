import {storage} from '../../models/MetaData/storage';
import {saveSchemaVersion} from './index';
import {DATABASE_SCHEMA_VERSION} from '../../constants/configs';

function init() {
  return new Promise((resolve, reject) => {
    storage.transaction((transaction) => {

      transaction.executeSql(`CREATE TABLE IF NOT EXISTS metadata (
        id   INTEGER NOT NULL PRIMARY KEY ON CONFLICT REPLACE,
        data TEXT    NOT NULL
      )`);

      transaction.executeSql(`CREATE TABLE IF NOT EXISTS cacheable_method (
        id        INTEGER NOT NULL PRIMARY KEY ON CONFLICT REPLACE,
        data      TEXT    NOT NULL,
        cacheTime INTEGER NOT NULL
      )`);

      /**
       * Entities
       */
      transaction.executeSql(`CREATE TABLE IF NOT EXISTS entities_rooms (
        id        INTEGER NOT NULL PRIMARY KEY ON CONFLICT REPLACE,
        type      INTEGER,
        title     TEXT,
        data      TEXT    NOT NULL,
        cacheTime INTEGER NOT NULL
      )`);

      transaction.executeSql(`CREATE TABLE IF NOT EXISTS entities_registered_users (
        id        INTEGER NOT NULL PRIMARY KEY ON CONFLICT REPLACE,
        data      TEXT    NOT NULL,
        cacheTime INTEGER NOT NULL
      )`);

      transaction.executeSql(`CREATE TABLE IF NOT EXISTS entities_room_messages (
        id             INTEGER NOT NULL PRIMARY KEY ON CONFLICT REPLACE,
        roomId         INTEGER NOT NULL,
        messageType    INTEGER,
        message        TEXT,
        messageVersion INTEGER NOT NULL,
        statusVersion  INTEGER NOT NULL,
        deleteVersion  INTEGER NOT NULL,
        data           TEXT    NOT NULL,
        fraction       INTEGER NOT NULL,
        cacheTime      INTEGER NOT NULL
      )`);
      transaction.executeSql(`CREATE INDEX IF NOT EXISTS entities_room_messages_roomId_index
        ON entities_room_messages (roomId);`);

      /**
       * Messenger
       */
      transaction.executeSql(`CREATE TABLE IF NOT EXISTS messenger_rooms (
        id    INTEGER NOT NULL PRIMARY KEY ON CONFLICT REPLACE,
        sort  INTEGER NOT NULL,
        pinId INTEGER NOT NULL
      )`);

    }, (error) => {
      reject(error);
    }, () => {
      resolve(saveSchemaVersion(DATABASE_SCHEMA_VERSION));
    });
  });
}

export async function doMigration(schemaVersion) {
  if (schemaVersion === null) {
    await init();
  } else {
    // if (schemaVersion === 1) {
    //   Migrate from 1 to 2
    //   schemaVersion = 2;
    // }
    //
    // if (schemaVersion === 2) {
    //   Migrate from 2 to 3
    //   schemaVersion = 3;
    // }
  }
}