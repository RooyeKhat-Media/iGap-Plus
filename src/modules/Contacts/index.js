import RNContacts from 'react-native-contacts';
import Permission, {PERMISSION_CONTACTS} from '../Permission/index';

export default class Contacts {

  static async requestPermissionIfNeeded() {
    //todo nejati get this string message from en  int1
    return Permission.grant(PERMISSION_CONTACTS, 'Contact Permission', 'iGap need Contact Permission');
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
