/**
 * @flow
 */

import RNFileSystem from 'react-native-file-system';
import {CLIENT_STATUS} from '../Api/index';
import PromiseLimiter from '../PromiseLimiter/index';
import {
  FILE_MANAGER_DOWNLOAD_MAX_CHUNK_SIZE,
  FILE_MANAGER_DOWNLOAD_MIN_CHUNK_SIZE,
  FILE_MANAGER_MAX_CONCURRENT_DOWNLOAD,
  FILE_MANAGER_MAX_CONCURRENT_UPLOAD,
} from '../../constants/configs';
import {CLIENT_STATUS_CHANGED} from '../../actions/api';
import _download from './download';
import _upload from './upload';

let getRootDirCache;

let downloadChunkSize = FILE_MANAGER_DOWNLOAD_MAX_CHUNK_SIZE;

export function getDownloadChunkSize() {
  return Math.min(
    FILE_MANAGER_DOWNLOAD_MAX_CHUNK_SIZE,
    Math.max(
      FILE_MANAGER_DOWNLOAD_MIN_CHUNK_SIZE,
      downloadChunkSize
    ),
  );
}

export function setDownloadChunkSize(value) {
  downloadChunkSize = value;
}

export const middleware = ({dispatch, getState}) => next => action => {
  if (action.type === CLIENT_STATUS_CHANGED) {
    switch (action.status) {
      case CLIENT_STATUS.CONNECTED:
        downloadChunkSize = FILE_MANAGER_DOWNLOAD_MAX_CHUNK_SIZE;
        break;
    }
  }
  return next(action);
};

/**
 * Get root dir
 * @returns {Promise.<string>}
 */
export function getRootDir() {
  return new Promise((resolve, reject) => {
    if (getRootDirCache) {
      resolve(getRootDirCache);
    } else {
      reject();
    }
  }).catch(() => {
    return RNFileSystem.getFilesDir().then(function(uri) {
      getRootDirCache = uri;
      return uri;
    });
  });
}

const downloadLimiter = PromiseLimiter(FILE_MANAGER_MAX_CONCURRENT_DOWNLOAD);

/**
 * Download file
 * @param {string} token
 * @param {ProtoFileDownload_Selector} selector
 * @param {Long} size
 * @param {string} cacheId
 * @param {string} fileName
 * @param {number} priority
 * @returns {Promise.<void>}
 */
export function download(token, selector, size, cacheId, fileName, priority) {
  return downloadLimiter(() => {
    return _download(token, selector, size, cacheId, fileName);
  }, priority);
}

const uploadLimiter = PromiseLimiter(FILE_MANAGER_MAX_CONCURRENT_UPLOAD);

/**
 * Upload file
 * @param {string|number} id
 * @param {string} fileUri
 * @param {string} fileName
 * @param {Long} fileSize
 * @param {number} priority
 * @returns {Promise.<string>}
 */
export function upload(id, fileUri, fileName, fileSize, priority) {
  return uploadLimiter(() => {
    return _upload(id, fileUri, fileName, fileSize);
  }, priority);
}