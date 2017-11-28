/**
 * @flow
 */

import {FILE_MANAGER_DOWNLOAD_MANNER, FILE_MANAGER_DOWNLOAD_STATUS} from '../constants/fileManager';

import {download, downloadingPromise, upload} from '../modules/FileManager';
import {randomString} from '../utils/core';
import {Proto} from '../modules/Proto/index';

export const FILE_MANAGER_DOWNLOAD_PENDING = 'FILE_MANAGER_DOWNLOAD_PENDING';
export const FILE_MANAGER_DOWNLOAD_PROGRESS = 'FILE_MANAGER_DOWNLOAD_PROGRESS';
export const FILE_MANAGER_DOWNLOAD_COMPLETED = 'FILE_MANAGER_DOWNLOAD_COMPLETED';
export const FILE_MANAGER_DOWNLOAD_MANUALLY_PAUSED = 'FILE_MANAGER_DOWNLOAD_MANUALLY_PAUSED';
export const FILE_MANAGER_DOWNLOAD_AUTO_PAUSED = 'FILE_MANAGER_DOWNLOAD_AUTO_PAUSED';

export const FILE_MANAGER_UPLOAD_PENDING = 'FILE_MANAGER_UPLOAD_PENDING';
export const FILE_MANAGER_UPLOAD_UPLOADING = 'FILE_MANAGER_UPLOAD_UPLOADING';
export const FILE_MANAGER_UPLOAD_POST_PROCESSING = 'FILE_MANAGER_UPLOAD_POST_PROCESSING';
export const FILE_MANAGER_UPLOAD_COMPLETED = 'FILE_MANAGER_UPLOAD_COMPLETED';
export const FILE_MANAGER_UPLOAD_MANUALLY_PAUSED = 'FILE_MANAGER_UPLOAD_MANUALLY_PAUSED';
export const FILE_MANAGER_UPLOAD_DISPOSED = 'FILE_MANAGER_UPLOAD_DISPOSED';

export function fileManagerDownloadPending(cacheId, uid) {
  return {
    type: FILE_MANAGER_DOWNLOAD_PENDING,
    cacheId,
    uid,
  };
}

/**
 * @param payload
 * @returns {{type: string, payload: [{cacheId: progress}]}}
 */
export function fileManagerDownloadProgress(payload) {
  return {
    type: FILE_MANAGER_DOWNLOAD_PROGRESS,
    payload,
  };
}

/**
 * @param payload
 * @returns {{type: string, payload: [{cacheId: uri}]}}
 */
export function fileManagerDownloadCompleted(payload) {
  return {
    type: FILE_MANAGER_DOWNLOAD_COMPLETED,
    payload,
  };
}

export function fileManagerDownloadManuallyPaused(cacheId) {
  return {
    type: FILE_MANAGER_DOWNLOAD_MANUALLY_PAUSED,
    cacheId,
  };
}

export function fileManagerDownloadAutoPaused(cacheId) {
  return {
    type: FILE_MANAGER_DOWNLOAD_AUTO_PAUSED,
    cacheId,
  };
}

/**
 * Download file
 * @param {Symbol} manner
 * @param {string} token
 * @param {ProtoFileDownload_Selector} selector
 * @param {Long} size
 * @param {string} cacheId
 * @param {string} fileName
 * @param {number} priority
 * @return {Function}
 */
export function fileManagerDownload(manner, token, selector, size, cacheId, fileName, priority) {
  return (dispatch, getState) => {

    if (downloadingPromise.has(cacheId)) {
      return downloadingPromise.get(cacheId);
    }

    const file = getState().fileManager.download[cacheId];
    if (file) {
      switch (file.status) {
        case FILE_MANAGER_DOWNLOAD_STATUS.COMPLETED:
          return Promise.resolve();
        case FILE_MANAGER_DOWNLOAD_STATUS.MANUALLY_PAUSED:
          if (manner === FILE_MANAGER_DOWNLOAD_MANNER.AUTO) {
            return Promise.reject(new Error('Manually paused'));
          }
          break;
      }
    }

    const uid = randomString(8);
    const promise = download(uid, token, selector, size, cacheId, fileName, priority);
    if (selector === Proto.FileDownload.Selector.FILE) {
      dispatch(fileManagerDownloadPending(cacheId, uid));
    }
    downloadingPromise.set(cacheId, promise);

    return promise;
  };
}


export function fileManagerUploadPending(id) {
  return {
    type: FILE_MANAGER_UPLOAD_PENDING,
    id,
  };
}

export function fileManagerUploadUploading(id, progress) {
  return {
    type: FILE_MANAGER_UPLOAD_UPLOADING,
    id,
    progress,
  };
}

export function fileManagerUploadPostProcessing(id) {
  return {
    type: FILE_MANAGER_UPLOAD_POST_PROCESSING,
    id,
  };
}

export function fileManagerUploadCompleted(id) {
  return {
    type: FILE_MANAGER_UPLOAD_COMPLETED,
    id,
  };
}

export function fileManagerUploadManuallyPaused(id) {
  return {
    type: FILE_MANAGER_UPLOAD_MANUALLY_PAUSED,
    id,
  };
}

export function fileManagerUploadDisposed(id) {
  return {
    type: FILE_MANAGER_UPLOAD_DISPOSED,
    id,
  };
}

/**
 * Upload file
 * @param {string|number} id
 * @param {string} fileUri
 * @param {string} fileName
 * @param {Long} fileSize
 * @param {number} priority
 * @return {Function}
 */
export function fileManagerUpload(id, fileUri, fileName, fileSize, priority) {
  return (dispatch, getState) => {
    const file = getState().fileManager.upload[id];


    if (file) {
      return Promise.reject(new Error(`Upload id "${id}" is used before`));
    }

    dispatch(fileManagerUploadPending(id));
    return upload(id, fileUri, fileName, fileSize, priority);
  };
}