import ReactNativeShare from 'react-native-share';

export default class Share {
  /**
   * @return {boolean}
   */
  static get isSupported() {
    return true;
  }

  /**
   * @param {string} url
   * @param {string} mimeType
   * @param {string} message
   * @return Promise
   */
  static open(url, mimeType, message = '') {
    if (!Share.isSupported) {
      return Promise.reject('Share is not supported on this platform');
    }

    if (!url) {
      url = '';
    }

    return ReactNativeShare.open({
      url,
      type : mimeType || 'application/octet-stream',
      message,
    });
  }
}