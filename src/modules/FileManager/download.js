/**
 * @flow
 */

import Long from 'long';
import RNIGFileSystem, {FileUtil, OPEN_MODE_WRITE} from 'react-native-file-system';
import Api from '../Api/index';
import store from '../../configureStore';
import {FILE_DOWNLOAD} from '../../constants/methods/index';
import {FileDownload, Proto} from '../Proto/index';
import {ERROR_TIMEOUT} from '../Api/errors/index';
import {FILE_MANAGER_DOWNLOAD_STATUS} from '../../constants/fileManager';
import {
  fileManagerDownloadAutoPaused,
} from '../../actions/fileManager';

import {getDownloadChunkSize, getRootDir, setDownloadChunkSize, collect} from './index';
import ServerError from '../Error/ServerError';
import {getExtension} from '../../utils/core';
import ClientError from '../Error/ClientError';

/**
 * Download file
 * @param {string} uid
 * @param {string} token
 * @param {!proto.proto.FileDownload.Selector} selector
 * @param {Long} size
 * @param {string} cacheId
 * @param {string} originalFileName
 * @returns {Promise.<void>}
 * @private
 */
export default async function(uid, token, selector, size, cacheId, originalFileName) {
  const rootUri = await getRootDir();

  const fileName = cacheId + getExtension(originalFileName, true);
  const fileUri = FileUtil.uriCombine(rootUri, fileName);

  let fileInfo;

  try {
    fileInfo = await RNIGFileSystem.fInfo(fileUri);
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
      fHandle = await RNIGFileSystem.fOpen(
        fileUri,
        OPEN_MODE_WRITE
      );
    }

    while (fileInfo.fileSize.lessThan(size)) {
      const storeFile = store.getState().fileManager.download[cacheId];
      if (storeFile) {
        if (storeFile.status === FILE_MANAGER_DOWNLOAD_STATUS.MANUALLY_PAUSED) {
          throw new ClientError('Manually paused');
        } else if (storeFile.status === FILE_MANAGER_DOWNLOAD_STATUS.AUTO_PAUSED) {
          throw new ClientError('Automatically paused');
        }
      }

      if (selector === Proto.FileDownload.Selector.FILE) {
        collect({progress: fileInfo.fileSize.multiply(100).divide(size).toInt()}, cacheId);
      }

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

        const storeSameFile = store.getState().fileManager.download[cacheId];
        if (storeSameFile && storeSameFile.uid && storeSameFile.uid !== uid) {
          throw new ClientError('Append conflict detected');
        }

        await RNIGFileSystem.fAppend(fHandle, fileDownloadResponse.getBytes());
        fileInfo.fileSize = fileInfo.fileSize.add(fileDownloadResponse.getBytes().byteLength);
      } catch (e) {
        if (e instanceof ServerError && e.errorResponse.getMajorCode() === ERROR_TIMEOUT) {
          setDownloadChunkSize(getDownloadChunkSize() * 0.8);
        }
        throw e;
      }
    }
    collect({uri: fileInfo.fileUri}, cacheId);
  } catch (e) {
    if (!(e instanceof ClientError)) {
      store.dispatch(fileManagerDownloadAutoPaused(cacheId));
    }
    throw e;
  } finally {
    if (fHandle !== undefined) {
      await RNIGFileSystem.fClose(fHandle);
    }
  }
}
