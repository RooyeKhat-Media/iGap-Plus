/**
 * @flow
 */

import MetaData from '../../models/MetaData';

import {DATABASE_SCHEMA_VERSION} from '../../constants/configs';
import {doMigration} from './doMigration';
import {METADATA_SCHEMA_VERSION} from '../../models/MetaData/constant';

export function saveSchemaVersion(newVersion) {
  return MetaData.save(METADATA_SCHEMA_VERSION, newVersion);
}

export async function migrate() {
  let schemaVersion = null;
  try {
    schemaVersion = await MetaData.load(METADATA_SCHEMA_VERSION);
  } catch (e) {
    console.warn('Migration ', e);
  }

  if (schemaVersion !== DATABASE_SCHEMA_VERSION) {
    await doMigration(schemaVersion);
  }
}