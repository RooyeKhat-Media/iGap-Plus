/**
 * @flow
 */
import PouchDB from 'pouchdb-react-native';
import PouchDBFind from 'pouchdb-find';

PouchDB.plugin(PouchDBFind);

export default PouchDB;