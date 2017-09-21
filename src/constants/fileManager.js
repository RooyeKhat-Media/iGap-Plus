/**
 * @flow
 */

import 'es6-symbol/implement';

export const FILE_MANAGER_DOWNLOAD_MANNER = {
  AUTO: Symbol('AUTO'),
  MANUAL: Symbol('MANUAL'),
  FORCE: Symbol('FORCE'),
};

export const FILE_MANAGER_DOWNLOAD_STATUS = {
  PENDING: Symbol('PENDING'),
  PROCESSING: Symbol('PROCESSING'),
  COMPLETED: Symbol('COMPLETED'),
  MANUALLY_PAUSED: Symbol('MANUALLY_PAUSED'),
};

export const FILE_MANAGER_UPLOAD_STATUS = {
  PENDING: Symbol('PENDING'),
  UPLOADING: Symbol('UPLOADING'),
  POST_PROCESSING: Symbol('POST_PROCESSING'),
  COMPLETED: Symbol('COMPLETED'),
  MANUALLY_PAUSED: Symbol('MANUALLY_PAUSED'),
};