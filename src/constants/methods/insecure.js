/**
 * @flow
 */
import * as methods from '../../constants/methods';

const insecureTable = [
  methods.CONNECTION_SECURING_RESPONSE,
  methods.CONNECTION_SYMMETRIC_KEY,
  methods.CONNECTION_SYMMETRIC_KEY_RESPONSE,
  methods.HEARTBEAT,
  methods.HEARTBEAT_RESPONSE,
];

export default function(actionId) {
  return insecureTable.includes(actionId);
}
