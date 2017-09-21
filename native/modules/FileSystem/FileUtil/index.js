import {rtrim} from '../../../../src/utils/core';

export default class FileUtil {

  static get DIRECTORY_SEPARATOR() {
    return '/';
  }

  static allFiles() {
    return 'all';
  }

  static images() {
    return 'image';
  }

  static videos() {
    return 'video';
  }

  static audios() {
    return 'audio';
  }

  /**
   * Combines strings into a path.
   * @param {string} path
   * @returns {string}
   */
  static uriCombine(...path) {
    return path.map((element) => rtrim(element, FileUtil.DIRECTORY_SEPARATOR)).join(FileUtil.DIRECTORY_SEPARATOR);
  }
}