import {createSelector} from 'reselect';
import {makeGetContactList} from '../methods/user/contacts/getList';
import {getRoomList} from '../messenger/room';
import {Proto} from '../../modules/Proto/index';

export const makeGetForwardList = () => {
  const contactList = makeGetContactList();
  return createSelector(
    (state) => state.entities,
    getRoomList,
    contactList,
    (entities, rooms, contacts) => {
      const list = [];
      const peerCache = {};
      rooms.forEach((room) => {
        if (entities.rooms[room.id] && !entities.rooms[room.id].readOnly) {
          list.push({
            key: 'R' + room.id,
            roomId: room.id,
            title: entities.rooms[room.id] ? entities.rooms[room.id].title : null,
          });
          if (entities.rooms[room.id] && entities.rooms[room.id].type === Proto.Room.Type.CHAT) {
            peerCache[entities.rooms[room.id].chatPeer] = true;
          }
        }
      });
      contacts.forEach((user) => {
        if (!peerCache[user.id]) {
          list.push({
            key: 'U' + user.id,
            userId: user.id,
            title: entities.registeredUsers[user.id] ? entities.registeredUsers[user.id].displayName : null,
          });
        }
      });
      return list;
    }
  );
};