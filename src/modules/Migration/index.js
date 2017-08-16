/**
 * @flow
 */

import MetaData from '../../models/MetaData';
import {DATABASE_SCHEMA_VERSION} from '../../constants/configs';

const SCHEMA_VERSION_ID = 'schemaVersion';

function saveSchemaVersion(newVersion) {
  MetaData.save(SCHEMA_VERSION_ID, newVersion);
}

export async function migrate() {
  const schemaVersion = await MetaData.load(SCHEMA_VERSION_ID);
  if (schemaVersion === null) {
    saveSchemaVersion(DATABASE_SCHEMA_VERSION);
  } else {
    doMigration(schemaVersion);
  }
}

function doMigration(schemaVersion) {

}