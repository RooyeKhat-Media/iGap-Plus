/**
 * @flow
 */
import {createSelector} from 'reselect';
import {groupBy, sortBy} from 'lodash';

export const getContacts = (state) => state.methods.contactsList;

export const makeGetContactList = () => {
  return createSelector(
    getContacts,
    (state) => state.entities.registeredUsers,
    (contacts, registeredUsers) => {

      const groupedContactList = groupBy(sortBy(contacts, [
        item => registeredUsers[item] ? registeredUsers[item].displayName : '',
      ]), function(item) {
        const displayName = registeredUsers[item] ? registeredUsers[item].displayName : '';
        return displayName.charAt(0).toUpperCase();
      });

      const sortedContactList = [];
      for (let letter in groupedContactList) {
        if (groupedContactList.hasOwnProperty(letter)) {
          groupedContactList[letter].forEach(function(item, key) {
            sortedContactList.push({
              id: item,
              divider: !key ? letter : null,
            });
          });
        }
      }
      return sortedContactList;
    }
  );
};