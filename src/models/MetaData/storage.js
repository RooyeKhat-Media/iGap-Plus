import SQLite from '../../modules/Db';

export const storage = SQLite.openDatabase('app.db', '1.0', 'Main database', 1);