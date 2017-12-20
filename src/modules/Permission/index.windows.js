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

export default class Permission {
  static async check(permissionType, option) {
    return true;
  }

  static async grant(permissionType, title, message, option) {
    return Promise.resolve();
  }
}