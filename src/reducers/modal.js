/**
 * @flow
 */
import {MODAL_CLOSE_MODAL, MODAL_OPEN_MODAL} from '../actions/modal';

const modalStack = {};

export function modal(state = modalStack, action) {
  switch (action.type) {
    case MODAL_OPEN_MODAL:
      const prevModals = state && state[action.id] ? state[action.id] : {};
      return {
        ...state,
        [action.id]: [
          ...prevModals,
          action.payload,
        ],
      };
    case MODAL_CLOSE_MODAL:
      return {
        ...state,
        [action.id]: state[action.id] ? state[action.id].slice(0, -1) : [],
      };
    default:
      return state;
  }
}