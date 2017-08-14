/**
 * @flow
 */
import {CLIENT_STATUS_CHANGED} from '../actions/api';
import {CLIENT_STATUS} from '../modules/Api';

const initialState = {
  status: CLIENT_STATUS.DISCONNECTED,
};

export function api(state = initialState, action) {
  switch (action.type) {
    case CLIENT_STATUS_CHANGED:
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
}