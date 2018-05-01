import Long from 'long';
import Squel from '../Squel';
import {storage} from '../../models/MetaData/storage';
import {ClientCondition} from '../Proto/index';

/**
 * @returns {Promise.<ProtoClientCondition>}
 * @constructor
 */
export default async function Condition() {
  const roomsVersion = await getRoomsVersion();
  const roomListCondition = [];
  roomsVersion.forEach(function(room) {
    const roomCondition = new ClientCondition.Room();
    roomCondition.setRoomId(Long.fromString(room.roomId));
    roomCondition.setClearId(Long.fromString(room.clearId || '0'));
    roomCondition.setCacheStartId(Long.fromString(room.cache_start_id || '0'));
    roomCondition.setCacheEndId(Long.fromString(room.cache_end_id || '0'));
    roomCondition.setMessageVersion(Long.fromString(room.messageVersion || '0'));
    roomCondition.setStatusVersion(Long.fromString(room.statusVersion || '0'));
    roomCondition.setDeleteVersion(Long.fromString(room.deleteVersion || '0'));
    roomListCondition.push(roomCondition);
  });
  const clientCondition = new ClientCondition();
  clientCondition.setRoomsList(roomListCondition);
  return clientCondition;
}

/**
 * @returns {Promise}
 */
function getRoomsVersion() {
  return new Promise((resolve, reject) => {
    storage.readTransaction((transaction) => {
      let selectQuery = Squel.select()
        .from('entities_rooms', 'r')
        .left_join('entities_room_messages', 'm', 'r.id = m.roomId')
        .left_join('entities_rooms_meta', 'rm', 'r.id = rm.roomId')
        .field('CAST(r.id AS TEXT) AS roomId')
        .field('CAST(rm.clearId AS TEXT) AS clearId')
        .field('CAST(MIN(m.id) AS TEXT) AS cache_start_id')
        .field('CAST(MAX(m.id) AS TEXT) AS cache_end_id')
        .field('CAST(MAX(m.messageVersion) AS TEXT) AS messageVersion')
        .field('CAST(MAX(m.statusVersion) AS TEXT) AS statusVersion')
        .field('CAST(MAX(m.deleteVersion) AS TEXT) AS deleteVersion')
        .group('r.id');

      const params = selectQuery.toParam();
      transaction.executeSql(params.text, params.values, (transaction, results) => {
        const rows = [];
        for (let i = 0; i < results.rows.length; i++) {
          rows.push(results.rows.item(i));
        }
        resolve(rows);
      });
    }, (error) => {
      reject(error);
    }, () => {
      reject();
    });
  });
}