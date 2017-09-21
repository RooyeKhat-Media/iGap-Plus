/**
 * @flow
 */

import * as methods from '../../constants/methods';

const timeoutTable = {
  //System XX
  [methods.HEARTBEAT]: 1,

  //File 7XX
  [methods.FILE_UPLOAD]: 60,
  [methods.FILE_DOWNLOAD]: 30,
};

export default function(actionId) {
  return (timeoutTable[actionId] || 10) * 1000;
}
