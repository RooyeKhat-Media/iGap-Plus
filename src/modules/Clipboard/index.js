import {Clipboard as RNClipboard} from 'react-native';

export default class Clipboard {
  /**
   * @return {boolean}
   */
  static get isSetSupported() {
    return true;
  }

  /**
   * @param {string} content
   */
  static setString(content) {
    if (this.isSetSupported) {
      RNClipboard.setString(content);
    }
  }

  /**
   * @return {boolean}
   */
  static get isGetSupported() {
    return true;
  }

  /**
   * @param {string} content
   */
  static getString(content) {
    if (!this.isGetSupported()) {
      return Promise.reject('Getting content from Clipboard is not supported');
    }
    return RNClipboard.getString();
  }
}