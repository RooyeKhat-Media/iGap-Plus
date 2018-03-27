import Permissions from 'react-native-permissions';
import {Alert, Platform} from 'react-native';

export const PERMISSION_LOCATION = 'location';
export const PERMISSION_CAMERA = 'camera';
export const PERMISSION_MICROPHONE = 'microphone';
export const PERMISSION_PHOTO = 'photo';
export const PERMISSION_CONTACTS = 'contacts';
export const PERMISSION_EVENT = 'event';
export const PERMISSION_REMINDER = 'reminder';
export const PERMISSION_BLUETOOTH = 'bluetooth';
export const PERMISSION_NOTIFICATION = 'notification';
export const PERMISSION_BACKGROUND_REFRESH = 'backgroundRefresh';
export const PERMISSION_SPEECH_RECOGNITION = 'speechRecognition';
export const PERMISSION_STORAGE = 'storage';
export const PERMISSION_RECEIVE_SMS = 'receiveSms';

export default class Permission {
  static async check(permissionType, option = {}) {
    const permission = await Permissions.check(permissionType, option);
    return permission === 'authorized';
  }

  static async grant(permissionType, title, message, option = {}) {
    const permission = await Permissions.check(permissionType, option);

    switch (permission) {
      case 'authorized':
        return Promise.resolve();
      case 'denied':
        if (Platform.OS === 'android') {
          return this._requestPermission(permissionType);
        } else if (Platform.OS === 'ios') {
          this._showDialog(title, message);
          return Promise.reject(`Dined ${permissionType} permission`);
        }
        break;
      case 'restricted':
        this._showDialog(title, message);
        return Promise.reject(`Restricted ${permissionType} permission`);
      case 'undetermined':
        return this._requestPermission(permissionType);
    }
    return Promise.reject(`Unknown permission response ${permission} for ${permissionType}`);
  }

  static async _requestPermission(permissionType) {
    const permission = await Permissions.request(permissionType);
    if (permission === 'authorized') {
      return Promise.resolve();
    }
    return Promise.reject('');
  }

  static _showDialog(title, message) {
    let canOpenSettings = false;
    if (Platform.OS === 'ios') {
      canOpenSettings = Permissions.canOpenSettings();
    }
    Alert.alert(
      title,
      message,
      [
        {
          text: 'No way',
          onPress: () => {
            // console.log('Permission denied')
          },
          style: 'cancel',
        },
        canOpenSettings && {text: 'Open Settings', onPress: Permissions.openSettings},
      ],
    );
  }
}