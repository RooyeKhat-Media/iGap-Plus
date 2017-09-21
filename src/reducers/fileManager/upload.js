/**
 * @flow
 */

import store from '../../configureStore';
import {
  FILE_MANAGER_UPLOAD_COMPLETED,
  FILE_MANAGER_UPLOAD_DISPOSED,
  FILE_MANAGER_UPLOAD_MANUALLY_PAUSED,
  FILE_MANAGER_UPLOAD_PENDING,
  FILE_MANAGER_UPLOAD_POST_PROCESSING,
  FILE_MANAGER_UPLOAD_UPLOADING,
} from '../../actions/fileManager';
import {FILE_MANAGER_UPLOAD_STATUS} from '../../constants/fileManager';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case FILE_MANAGER_UPLOAD_PENDING:
      return {
        ...state,
        [action.id]: {
          status: FILE_MANAGER_UPLOAD_STATUS.PENDING,
        },
      };
    case FILE_MANAGER_UPLOAD_UPLOADING:
      return {
        ...state,
        [action.id]: {
          status: FILE_MANAGER_UPLOAD_STATUS.UPLOADING,
          progress: action.progress,
        },
      };
    case FILE_MANAGER_UPLOAD_POST_PROCESSING:
      return {
        ...state,
        [action.id]: {
          status: FILE_MANAGER_UPLOAD_STATUS.POST_PROCESSING,
        },
      };
    case FILE_MANAGER_UPLOAD_COMPLETED:
      assertDisposing(action.id, `Upload id "${action.id}" is not disposed after file upload is completed!`);
      return {
        ...state,
        [action.id]: {
          status: FILE_MANAGER_UPLOAD_STATUS.COMPLETED,
        },
      };
    case FILE_MANAGER_UPLOAD_MANUALLY_PAUSED:
      assertDisposing(action.id, `Upload id "${action.id}" is not disposed after file upload is manually paused!`);
      return {
        ...state,
        [action.id]: {
          status: FILE_MANAGER_UPLOAD_STATUS.MANUALLY_PAUSED,
        },
      };
    case FILE_MANAGER_UPLOAD_DISPOSED:
      const newState = {...state};
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
}

function assertDisposing(id, message) {
  if (process.env.NODE_ENV === 'production') {
    setTimeout(function() {
      if (store.getState.fileManager.upload[id] !== undefined) {
        console.warn(message);
      }
    }, 3000);
  }
}