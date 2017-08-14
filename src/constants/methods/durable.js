/**
 * @flow
 */

import * as methods from '../../constants/methods';

const durability = [];

export default function(actionId) {
  return durability.includes(actionId);
}
