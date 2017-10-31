import Base from './index.js';

export default class SaveTo extends Base {
  /**
   * @param {string} mimeType
   * @return {boolean}
   */
  static musicSupport(mimeType) {
    return false;
  }

  /**
   * @return {boolean}
   */
  static downloadsSupport() {
    return false;
  }
}