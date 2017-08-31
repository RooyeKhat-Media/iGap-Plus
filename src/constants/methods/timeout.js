/**
 * @flow
 */

import * as methods from '../../constants/methods';

const timeoutTable = {
  [methods.HEARTBEAT]: 1,
};

export default function(actionId) {
  return (timeoutTable[actionId] || 10) * 1000;
}
