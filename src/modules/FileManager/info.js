import RNIGFileSystem, {FileUtil} from 'react-native-file-system';
import {getExtension} from '../../utils/core';
import store from '../../configureStore';
import {fileManagerDownloadAutoPaused, fileManagerDownloadCompleted} from '../../actions/fileManager';
import {getRootDir} from './index';

/**
 * Update file state
 * @param {Long} size
 * @param {string} cacheId
 * @param {string} originalFileName
 * @return {Promise.<void>}
 */
export default async function(size, cacheId, originalFileName) {
  const storeFile = store.getState().fileManager.download[cacheId];

  if (!storeFile) {
    const rootUri = await getRootDir();

    const fileName = cacheId + getExtension(originalFileName, true);
    const fileUri = FileUtil.uriCombine(rootUri, fileName);

    try {
      let fileInfo = await RNIGFileSystem.fInfo(fileUri);

      if (fileInfo.fileSize.lessThan(size)) {
        throw new Error('Paused download');
      }
      store.dispatch(fileManagerDownloadCompleted(cacheId, fileInfo.fileUri));
    } catch (e) {
      store.dispatch(fileManagerDownloadAutoPaused(cacheId, false));
    }
  }
}