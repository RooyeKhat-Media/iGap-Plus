/**
 * @flow
 */

import {
  FILE_MANAGER_DOWNLOAD_AUTO_PAUSED,
  FILE_MANAGER_DOWNLOAD_COMPLETED,
  FILE_MANAGER_DOWNLOAD_MANUALLY_PAUSED,
  FILE_MANAGER_DOWNLOAD_PENDING,
  FILE_MANAGER_DOWNLOAD_PROGRESS,
} from '../../actions/fileManager';
import {FILE_MANAGER_DOWNLOAD_STATUS} from '../../constants/fileManager';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case FILE_MANAGER_DOWNLOAD_PENDING:
      return {
        ...state,
        [action.cacheId]: {
          status: FILE_MANAGER_DOWNLOAD_STATUS.PENDING,
        },
      };
    case FILE_MANAGER_DOWNLOAD_PROGRESS:
      return {
        ...state,
        [action.cacheId]: {
          status: FILE_MANAGER_DOWNLOAD_STATUS.PROCESSING,
          progress: action.progress,
        },
      };
    case FILE_MANAGER_DOWNLOAD_COMPLETED:
      return {
        ...state,
        [action.cacheId]: {
          status: FILE_MANAGER_DOWNLOAD_STATUS.COMPLETED,
          uri: action.uri,
        },
      };
    case FILE_MANAGER_DOWNLOAD_MANUALLY_PAUSED:
      if (state[action.cacheId] && state[action.cacheId].status === FILE_MANAGER_DOWNLOAD_STATUS.COMPLETED) {
        return state;
      }
      return {
        ...state,
        [action.cacheId]: {
          status: FILE_MANAGER_DOWNLOAD_STATUS.MANUALLY_PAUSED,
        },
      };
    case FILE_MANAGER_DOWNLOAD_AUTO_PAUSED:
      if (state[action.cacheId] && state[action.cacheId].status === FILE_MANAGER_DOWNLOAD_STATUS.COMPLETED) {
        return state;
      }
      return {
        ...state,
        [action.cacheId]: {
          status: FILE_MANAGER_DOWNLOAD_STATUS.AUTO_PAUSED,
          pauseDownload: action.pauseDownload,
        },
      };
    default:
      return state;
  }
}