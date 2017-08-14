/**
 * @flow
 */

import * as methods from '../../constants/methods';

const timeoutTable = {};

export default function(actionId) {
  return (timeoutTable[actionId] || 10) * 1000;
}
