/**
 * @flow
 */

import MetaData from '../../models/MetaData';

import {DATABASE_SCHEMA_VERSION} from '../../constants/configs';
import {doMigration} from './doMigration';

const SCHEMA_VERSION_ID = 'schemaVersion';

export function saveSchemaVersion(newVersion) {
  return MetaData.save(SCHEMA_VERSION_ID, newVersion);
}

export async function migrate() {
  let schemaVersion = null;
  try {
    schemaVersion = await MetaData.load(SCHEMA_VERSION_ID);
  } catch (e) {
    console.warn('Migration ', e);
  }

  if (schemaVersion !== DATABASE_SCHEMA_VERSION) {
    await doMigration(schemaVersion);
  }
}