import {storage} from '../../models/MetaData/storage';
import {saveSchemaVersion} from './index';

function init() {
  return new Promise((resolve, reject) => {
    storage.transaction((transaction) => {

      transaction.executeSql(`CREATE TABLE IF NOT EXISTS metadata (
        id   TEXT NOT NULL PRIMARY KEY ON CONFLICT REPLACE,
        data TEXT NOT NULL
      ) WITHOUT ROWID`);

      transaction.executeSql(`CREATE TABLE IF NOT EXISTS cacheable_method (
        id        TEXT    NOT NULL PRIMARY KEY ON CONFLICT REPLACE,
        data      TEXT    NOT NULL,
        cacheTime INTEGER NOT NULL
      ) WITHOUT ROWID`);

      /**
       * Entities
       */
      transaction.executeSql(`CREATE TABLE IF NOT EXISTS entities_rooms (
        id        TEXT    NOT NULL PRIMARY KEY ON CONFLICT REPLACE,
        type      INTEGER,
        title     TEXT,
        data      TEXT    NOT NULL,
        cacheTime INTEGER NOT NULL
      ) WITHOUT ROWID`);

      transaction.executeSql(`CREATE TABLE IF NOT EXISTS entities_registered_users (
        id        TEXT    NOT NULL PRIMARY KEY ON CONFLICT REPLACE,
        data      TEXT    NOT NULL,
        cacheTime INTEGER NOT NULL
      ) WITHOUT ROWID`);

      transaction.executeSql(`CREATE TABLE IF NOT EXISTS entities_room_messages (
        id          TEXT    NOT NULL PRIMARY KEY ON CONFLICT REPLACE,
        roomId      TEXT    NOT NULL,
        messageType INTEGER,
        message     TEXT,
        data        TEXT    NOT NULL,
        fraction    INTEGER NOT NULL,
        cacheTime   INTEGER NOT NULL
      ) WITHOUT ROWID`);
      transaction.executeSql(`CREATE INDEX entities_room_messages_roomId_index
        ON entities_room_messages (roomId);`);

      /**
       * Messenger
       */
      transaction.executeSql(`CREATE TABLE IF NOT EXISTS messenger_rooms (
        id   TEXT NOT NULL PRIMARY KEY ON CONFLICT REPLACE,
        sort TEXT NOT NULL
      ) WITHOUT ROWID`);

    }, (error) => {
      reject(error);
    }, () => {
      resolve(saveSchemaVersion(1));
    });
  });
}

export async function doMigration(schemaVersion) {
  if (schemaVersion === null) {
    await init();
    schemaVersion = 1;
  }

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