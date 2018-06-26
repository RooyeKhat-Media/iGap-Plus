import {CameraRoll, NativeModules} from 'react-native';

const {RNSaveTo} = NativeModules;

export const getType = (mimeType) => {
  let type = mimeType || 'application/octet-stream';
  type = type.toLowerCase().split('/');
  return type[0];

};

export default class SaveTo {

  /**
   * @param {string} mimeType
   * @return {boolean}
   */
  static gallerySupport(mimeType) {
    const type = getType(mimeType);
    return (type === 'image' || type === 'video');
  }

  /**
   * @param {string} mimeType
   * @return {boolean}
   */
  static musicSupport(mimeType) {
    return (getType(mimeType) === 'audio');
  }

  /**
   * @return {boolean}
   */
  static downloadsSupport() {
    return true;
  }


  /**
   * Save to gallery
   * @param {string} fileUri
   * @param {string} mimeType
   * @return {Promise}
   */
  static gallery(fileUri, mimeType) {
    if (!this.gallerySupport(mimeType)) {
      return Promise.reject('Save to gallery is not supported');
    }

    const type = (getType(mimeType) === 'video') ? 'video' : 'photo';

    return CameraRoll.saveToCameraRoll(fileUri, type);
  }

  /**
   * Save to music
   * @param {string} fileUri
   * @param {string} mimeType
   * @return {Promise}
   */
  static music(fileUri, mimeType) {
    if (!this.musicSupport(mimeType)) {
      return Promise.reject('Save to music is not supported');
    }

    return RNSaveTo.saveToMusic(fileUri.replace('file:///', ''));
  }

  /**
   * Save to downloads
   * @param {string} fileUri
   * @return {Promise}
   */
  static downloads(fileUri) {
    if (!this.downloadsSupport()) {
      return Promise.reject('Save to downloads is not supported');
    }

    return RNSaveTo.saveToDownloads(fileUri.replace('file:///', ''));
  }
}
