/**
 * @flow
 */

import Long from 'long';
import RNFileSystem, {FileUtil, OPEN_MODE_WRITE} from 'react-native-file-system';
import Api from '../Api/index';
import store from '../../configureStore';
import {FILE_DOWNLOAD} from '../../constants/methods/index';
import {FileDownload} from '../Proto/index';
import {ERROR_TIMEOUT} from '../Api/errors/index';
import {FILE_MANAGER_DOWNLOAD_STATUS} from '../../constants/fileManager';
import {fileManagerDownloadCompleted, fileManagerDownloadProgress} from '../../actions/fileManager';

import {getDownloadChunkSize, getRootDir, setDownloadChunkSize} from './index';
import ServerError from '../Error/ServerError';

/**
 * Download file
 * @param {string} token
 * @param {!proto.proto.FileDownload.Selector} selector
 * @param {Long} size
 * @param {string} cacheId
 * @returns {Promise.<void>}
 * @private
 */
export default async function(token, selector, size, cacheId) {
  const rootUri = await getRootDir();

  const fileName = cacheId;
  const fileUri = FileUtil.uriCombine(rootUri, fileName);

  let fileInfo;

  try {
    fileInfo = await RNFileSystem.fInfo(fileUri);
  } catch (e) {
    fileInfo = {
      fileUri,
      fileName,
      fileSize: Long.ZERO,
    };
  }

  let fHandle;
  try {
    if (fileInfo.fileSize.lessThan(size)) {
      fHandle = await RNFileSystem.fOpen(
        fileUri,
        OPEN_MODE_WRITE
      );
    }

    while (fileInfo.fileSize.lessThan(size)) {
      const storeFile = store.getState().fileManager.download[cacheId];
      if (storeFile && storeFile.status === FILE_MANAGER_DOWNLOAD_STATUS.MANUALLY_PAUSED) {
        throw new Error('Manually paused');
      }

      store.dispatch(fileManagerDownloadProgress(cacheId, fileInfo.fileSize.multiply(100).divide(size).toInt()));

      const fileDownload = new FileDownload();
      fileDownload.setToken(token);
      fileDownload.setOffset(fileInfo.fileSize);
      fileDownload.setMaxLimit(getDownloadChunkSize());
      fileDownload.setSelector(selector);
      try {
        /**
         * @type ProtoFileDownloadResponse
         */
        const fileDownloadResponse = await Api.invoke(FILE_DOWNLOAD, fileDownload);

        await RNFileSystem.fAppend(fHandle, fileDownloadResponse.getBytes());
        fileInfo.fileSize = fileInfo.fileSize.add(fileDownloadResponse.getBytes().byteLength);
      } catch (e) {
        if (e instanceof ServerError && e.errorResponse.getMajorCode() === ERROR_TIMEOUT) {
          setDownloadChunkSize(getDownloadChunkSize() * 0.8);
        }
        throw e;
      }
    }
    store.dispatch(fileManagerDownloadCompleted(cacheId, fileInfo.fileUri));
  } finally {
    if (fHandle !== undefined) {
      await RNFileSystem.fClose(fHandle);
    }
  }
}
