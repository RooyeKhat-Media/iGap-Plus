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
  FILE_MANAGER_MAX_CONCURRENT_INFO,
  FILE_MANAGER_MAX_CONCURRENT_UPLOAD,
} from '../../constants/configs';
import {CLIENT_STATUS_CHANGED} from '../../actions/api';
import _download from './download';
import _upload from './upload';
import _info from './info';
import {
  FILE_MANAGER_DOWNLOAD_AUTO_PAUSED, FILE_MANAGER_DOWNLOAD_COMPLETED,
  FILE_MANAGER_DOWNLOAD_MANUALLY_PAUSED, fileManagerDownloadCompleted, fileManagerDownloadProgress,
} from '../../actions/fileManager';
import Collector from '../Collector';
import store from '../../configureStore';

let getRootDirCache;

let downloadChunkSize = FILE_MANAGER_DOWNLOAD_MAX_CHUNK_SIZE;

export const downloadingPromise = new Map();

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
      case FILE_MANAGER_DOWNLOAD_COMPLETED:
      case FILE_MANAGER_DOWNLOAD_MANUALLY_PAUSED:
      case FILE_MANAGER_DOWNLOAD_AUTO_PAUSED:
        downloadingPromise.delete(action.cacheId);
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
 * @param {string} uid
 * @param {string} token
 * @param {ProtoFileDownload_Selector} selector
 * @param {Long} size
 * @param {string} cacheId
 * @param {string} fileName
 * @param {number} priority
 * @returns {Promise.<void>}
 */
export function download(uid, token, selector, size, cacheId, fileName, priority) {
  return downloadLimiter(() => {
    return _download(uid, token, selector, size, cacheId, fileName);
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

const infoLimiter = PromiseLimiter(FILE_MANAGER_MAX_CONCURRENT_INFO);
let infoPriority = 0;

/**
 * Update file state
 * @param {Long} size
 * @param {string} cacheId
 * @param {string} fileName
 * @return {Promise.<void>}
 */
export function info(size, cacheId, fileName) {
  return infoLimiter(() => {
    return _info(size, cacheId, fileName);
  }, --infoPriority);
}


export const {collect} = Collector(
  (collected) => {
    const completedDownloadList = [];
    const processDownloadList = [];
    for (const [cacheId, data] of collected) {
      if (data.uri) {
        completedDownloadList.push({cacheId, uri: data.uri});
      } else if (data.progress) {
        processDownloadList.push({cacheId, progress: data.progress});
      }
    }

    if (completedDownloadList.length) {
      store.dispatch(fileManagerDownloadCompleted(completedDownloadList));
    }
    if (processDownloadList.length) {
      store.dispatch(fileManagerDownloadProgress(processDownloadList));
    }
  },
  250
);
