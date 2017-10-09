import {NativeModules} from 'react-native';
import FileUtil from './FileUtil';
import base64 from 'base64-js';
import binaryToBase64 from 'react-native/Libraries/Utilities/binaryToBase64';
import Long from 'long';

const {RNFileSystem} = NativeModules;

/**
 * @constant {number} Read mode constant
 */
export const OPEN_MODE_READ = RNFileSystem.read;

/**
 * @constant {number} Write mode constant
 */
export const OPEN_MODE_WRITE = RNFileSystem.write;

class FileSystem {
  /**
   * Open file picker
   * @param {string} fileType
   * @returns {Promise<{fileUri:string ,fileName:string ,fileSize:Long}>}
   */
  filePicker(fileType) {
    return RNFileSystem.filePicker(fileType).then(function({fileUri, fileName, fileSize}) {
      return {
        fileUri,
        fileName,
        fileSize: Long.fromString(fileSize),
      };
    });
  }

  /**
   * Open files picker
   * @param {string} fileType
   * @returns {Promise<{fileUri:string ,fileName:string ,fileSize:Long}[]>}
   */
  filesPicker(fileType) {
    return RNFileSystem.filesPicker(fileType).then(function(data) {
      const result = [];
      data.forEach(function(element) {
        const {fileUri, fileName, fileSize} = element;
        result.push({
          fileUri,
          fileName,
          fileSize: Long.fromString(fileSize),
        });
      });

      return result;
    });
  }

  /**
   * Open file picker
   * @param {string} fileUri
   * @returns {Promise<{fileUri:string ,fileName:string ,fileSize:Long}>}
   */
  fInfo(fileUri) {
    return RNFileSystem.fInfo(fileUri).then(function({fileUri, fileName, fileSize}) {
      return {
        fileUri,
        fileName,
        fileSize: Long.fromString(fileSize),
      };
    });
  }

  /**
   * Open file
   * @param {string} fileUri
   * @param {number} mode
   * @returns {Promise<number>}
   */
  fOpen(fileUri, mode) {
    return RNFileSystem.fOpen(fileUri, mode);
  }

  /**
   * Read chunk of file
   * @param {number} refId
   * @param {Long} offset
   * @param {number} limit
   * @returns {Promise.<Uint8Array>}
   */
  fRead(refId, offset, limit) {
    return RNFileSystem.fRead(refId, offset.toString(), limit).then(function(base64String) {
      return new Uint8Array(base64.toByteArray(base64String).buffer);
    });
  }

  /**
   * Calculate sha256
   * @param {number} refId
   * @returns {Promise.<Uint8Array>}
   */
  fSha256(refId) {
    return RNFileSystem.fSha256(refId).then(function(base64String) {
      return new Uint8Array(base64.toByteArray(base64String).buffer);
    });
  }

  /**
   * Append to file
   * @param {number} refId
   * @param {Uint8Array} data
   * @returns {Promise}
   */
  fAppend(refId, data) {
    return RNFileSystem.fAppend(refId, binaryToBase64(data));
  }

  /**
   * Close file
   * @param {number} refId
   * @returns {Promise}
   */
  fClose(refId) {
    return RNFileSystem.fClose(refId);
  }

  /**
   * Get files dir
   * @returns {Promise<string>}
   */
  getFilesDir() {
    return RNFileSystem.getFilesDir();
  }

}

const fileSystem = new FileSystem();
export default fileSystem;


export {FileUtil};