import {APP_ENABLE} from '../actions/app';

const initialState = {
  isEnable: true,
};

export function app(state = initialState, action) {
  switch (action.type) {
    case APP_ENABLE:
      return {
        isEnable: action.isEnable,
      };

    default:
      return state;
  }
}