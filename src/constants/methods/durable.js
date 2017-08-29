/**
 * @flow
 */

import {CONNECTION_SYMMETRIC_KEY, INFO_LOCATION} from './index';

const durability = [
  INFO_LOCATION,
];

export default function(actionId) {
  return durability.includes(actionId);
}
