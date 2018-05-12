/**
 * @flow
 */

import {OPEN_SNACK_BAR} from '../actions/snackBar';

const initialState = {
  content: null,
};

export function snackBar(state = initialState, action) {
  switch (action.type) {
    case OPEN_SNACK_BAR:
      return {
        content: action.content,
      };

    default:
      return state;
  }
}