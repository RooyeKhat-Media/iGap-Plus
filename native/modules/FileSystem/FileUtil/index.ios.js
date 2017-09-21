/**
 * @see https://developer.apple.com/library/ios/documentation/Miscellaneous/Reference/UTIRef/Articles/System-DeclaredUniformTypeIdentifiers.html
 */
import {rtrim} from '../../../../src/utils/core';

export default class FileUtil {

  static get DIRECTORY_SEPARATOR() {
    return '/';
  }

  static allFiles() {
    return 'public.content';
  }

  static images() {
    return 'public.image';
  }

  static videos() {
    return 'public.movie';
  }

  static audios() {
    return 'public.audio';
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