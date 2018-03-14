/**
 * @flow
 */

export const CLIENT_STATUS_UPDATING = 'CLIENT_STATUS_UPDATING';

export function clientStatusUpdating(updating) {
  return {
    type: CLIENT_STATUS_UPDATING,
    updating,
  };
}