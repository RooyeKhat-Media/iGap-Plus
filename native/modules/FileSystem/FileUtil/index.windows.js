import {rtrim} from '../../../../src/utils/core';

export default class FileUtil {

  static get DIRECTORY_SEPARATOR() {
    return '\\';
  }

  static allFiles() {
    return [
      '*',
    ];
  }

  static images() {
    return [
      '.jpg',
      '.jpeg',
      '.png',
    ];
  }

  static videos() {
    return [
      '.3g2',
      '.3gp',
      '.asf',
      '.avi',
      '.flv',
      '.m4v',
      '.mov',
      '.mp4',
      '.mpg',
      '.rm',
      '.wmv',
    ];
  }

  static audios() {
    return [
      '.mp3',
      '.wma',
      '.ra',
      '.ram',
      '.rm',
      '.ogg',
      '.aac',
    ];
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