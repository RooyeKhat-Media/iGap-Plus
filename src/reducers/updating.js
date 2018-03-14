/**
 * @flow
 */
import {CLIENT_STATUS_UPDATING} from '../actions/updating';

const initialState = false;

export function updating(state = initialState, action) {
  switch (action.type) {
    case CLIENT_STATUS_UPDATING:
      return action.updating;
    default:
      return state;
  }
}