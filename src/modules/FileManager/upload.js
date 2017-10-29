/**
 * @flow
 */

import Long from 'long';
import RNFileSystem, {OPEN_MODE_READ} from 'react-native-file-system';
import {noMaskSupport} from 'react-native-web-socket';
import Api from '../Api/index';
import {
  ErrorResponse,
  FileUpload,
  FileUploadResponse,
  FileUploadInit,
  FileUploadOption,
  FileUploadStatus,
  FileUploadStatusResponse,
} from '../Proto';

import {FILE_UPLOAD, FILE_UPLOAD_INIT, FILE_UPLOAD_OPTION, FILE_UPLOAD_STATUS} from '../../constants/methods';
import {msSleep} from '../../utils/core';
import store from '../../configureStore';
import {FILE_MANAGER_UPLOAD_STATUS} from '../../constants/fileManager';
import {
  fileManagerUploadCompleted,
  fileManagerUploadPostProcessing,
  fileManagerUploadUploading,
} from '../../actions/fileManager';
import {NON_WEBSOCKET_UPLOAD_ENDPOINT} from '../../constants/configs';
import ServerError from '../Error/ServerError';

function pauseIfNeeded(id) {
  const storeFile = store.getState().fileManager.upload[id];
  if (!storeFile) {
    throw new Error('Disposed');
  }

  if (storeFile.status === FILE_MANAGER_UPLOAD_STATUS.MANUALLY_PAUSED) {
    throw new Error('Manually paused');
  }
}

/**
 * Upload file
 * @param {string|number} id
 * @param {string} fileUri
 * @param {string} fileName
 * @param {Long} fileSize
 * @returns {Promise.<string>}
 */
export default async function(id, fileUri, fileName, fileSize) {
  pauseIfNeeded(id);

  // Option
  const fileUploadOption = new FileUploadOption();
  fileUploadOption.setSize(fileSize);
  /**
   * @type ProtoFileUploadOptionResponse
   */
  const fileUploadOptionResponse = await Api.invoke(FILE_UPLOAD_OPTION, fileUploadOption);

  let fHandle;
  try { // Init
    fHandle = await RNFileSystem.fOpen(
      fileUri,
      OPEN_MODE_READ
    );

    const firstBytes = await RNFileSystem.fRead(
      fHandle,
      Long.ZERO,
      fileUploadOptionResponse.getFirstBytesLimit()
    );
    const lastBytes = await RNFileSystem.fRead(
      fHandle,
      fileSize.subtract(fileUploadOptionResponse.getLastBytesLimit()),
      fileUploadOptionResponse.getLastBytesLimit()
    );
    const fileHash = await RNFileSystem.fSha256(fHandle);

    pauseIfNeeded(id);

    const fileUploadInit = new FileUploadInit();
    fileUploadInit.setFirstBytes(firstBytes);
    fileUploadInit.setLastBytes(lastBytes);
    fileUploadInit.setSize(fileSize);
    fileUploadInit.setFileHash(fileHash);
    fileUploadInit.setFileName(fileName);

    /**
     * @type ProtoFileUploadInitResponse
     */
    const fileUploadInitResponse = await Api.invoke(FILE_UPLOAD_INIT, fileUploadInit);

    // Upload
    let token = fileUploadInitResponse.getToken();
    let progress = fileUploadInitResponse.getProgress();

    if (progress < 100) {
      if (progress) {
        store.dispatch(fileManagerUploadUploading(id, progress));
      }
      let offset = fileUploadInitResponse.getOffset();
      let limit = fileUploadInitResponse.getLimit();

      uploading:
      do {
        const uploadBytes = await RNFileSystem.fRead(fHandle, offset, limit);

        const fileUpload = new FileUpload();
        fileUpload.setToken(token);
        fileUpload.setOffset(offset);
        fileUpload.setBytes(uploadBytes);

        pauseIfNeeded(id);

        store.dispatch(fileManagerUploadUploading(id, progress));

        /**
         * @type ProtoFileUploadResponse
         */
        let fileUploadResponse;

        if (noMaskSupport()) {
          fileUploadResponse = await Api.invoke(FILE_UPLOAD, fileUpload);
        } else {
          const fetchResponse = await fetch(NON_WEBSOCKET_UPLOAD_ENDPOINT, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/octet-stream',
            },
            body: fileUpload.serializeBinary(),
          });

          const fetchResponseBody = await fetchResponse.arrayBuffer();

          if (!fetchResponse.ok) {
            const fetchErrorResponse = ErrorResponse.deserializeBinary(new Uint8Array(fetchResponseBody));
            throw new ServerError(fetchErrorResponse, FILE_UPLOAD);
          }
          fileUploadResponse = FileUploadResponse.deserializeBinary(new Uint8Array(fetchResponseBody));
        }

        progress = fileUploadResponse.getProgress();
        offset = fileUploadResponse.getNextOffset();
        limit = fileUploadResponse.getNextLimit();

        if (progress === 100) {
          // Status
          await msSleep(100);

          const fileUploadStatus = new FileUploadStatus();
          fileUploadStatus.setToken(token);

          processing:
          do {
            /**
             * @type ProtoFileUploadStatusResponse
             */
            const fileUploadStatusResponse = await Api.invoke(FILE_UPLOAD_STATUS, fileUploadStatus);
            progress = fileUploadStatusResponse.getProgress();

            switch (fileUploadStatusResponse.getStatus()) {
              case FileUploadStatusResponse.Status.UPLOADING:
                /**
                 * @type ProtoFileUploadInitResponse
                 */
                const fileUploadReInitResponse = await Api.invoke(FILE_UPLOAD_INIT, fileUploadInit);
                token = fileUploadReInitResponse.getToken();
                progress = fileUploadReInitResponse.getProgress();
                offset = fileUploadReInitResponse.getOffset();
                limit = fileUploadReInitResponse.getLimit();
                break processing;
              case FileUploadStatusResponse.Status.PROCESSING:
                store.dispatch(fileManagerUploadPostProcessing(id));
                break;
              case FileUploadStatusResponse.Status.PROCESSED:
                store.dispatch(fileManagerUploadCompleted(id));
                break uploading;
              case FileUploadStatusResponse.Status.CORRUPTED:
                throw new Error('Uploaded file is corrupted');
              default:
                throw new Error('Unknown file upload status ' + fileUploadStatusResponse.getStatus());
            }

            await msSleep(fileUploadStatusResponse.getRecheckDelayMs());
          } while (true);
        }

      } while (progress < 100);
    }

    return token;
  } finally {
    if (fHandle !== undefined) {
      await RNFileSystem.fClose(fHandle);
    }
  }
}