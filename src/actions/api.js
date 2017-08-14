/**
 * @flow
 */

export const CLIENT_STATUS_CHANGED = 'CLIENT_STATUS_CHANGED';

export function clientStatusChanged(status) {
  return {
    type: CLIENT_STATUS_CHANGED,
    status,
  };
}
