import RNContacts from 'react-native-contacts';

export default class Contacts {

  static requestPermissionIfNeeded() {
    return new Promise((resolve, reject) => {
      RNContacts.requestPermission((error, permission) => {
        if (error) {
          reject(error);
        } else if (permission === 'authorized') {
          resolve();
        } else {
          reject('Contact read permission is ' + permission);
          // TODO [Amerehie] - 11/22/2017 11:23 AM - iOS : Prompt the user with instructions for how to enable contacts
        }
      });
    });
  }

  static getAll() {
    return this.requestPermissionIfNeeded().then(() => {
      return new Promise((resolve, reject) => {
        RNContacts.getAllWithoutPhotos((error, contacts) => {
          if (error) {
            reject(error);
          } else {
            resolve(contacts);
          }
        });
      });
    });
  }
}
