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
  let newList = {};
  switch (action.type) {
    case FILE_MANAGER_DOWNLOAD_PENDING:
      return {
        ...state,
        [action.cacheId]: {
          status: FILE_MANAGER_DOWNLOAD_STATUS.PENDING,
          uid: action.uid,
        },
      };
    case FILE_MANAGER_DOWNLOAD_PROGRESS:
      if (action.payload && action.payload.length) {
        action.payload.forEach(function(data) {
          newList[data.cacheId] = {
            status: FILE_MANAGER_DOWNLOAD_STATUS.PROCESSING,
            progress: data.progress,
          };
        });
      }
      return {
        ...state,
        ...newList,
      };
    case FILE_MANAGER_DOWNLOAD_COMPLETED:
      if (action.payload && action.payload.length) {
        action.payload.forEach(function(data) {
          newList[data.cacheId] = {
            status: FILE_MANAGER_DOWNLOAD_STATUS.COMPLETED,
            uri: data.uri,
          };
        });
      }
      return {
        ...state,
        ...newList,
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
        },
      };
    default:
      return state;
  }
}