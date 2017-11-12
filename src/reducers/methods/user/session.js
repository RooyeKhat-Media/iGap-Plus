/**
 * @flow
 */

import {
  METHOD_USER_SESSION_OVERRIDE_LIST,
  METHOD_USER_SESSION_TERMINATE,
} from '../../../actions/methods/user/session';

const initialState = {
  current: {},
  activeList: {},
};

export function userSession(state = initialState, action) {
  switch (action.type) {
    case METHOD_USER_SESSION_TERMINATE:
      const newActiveList = {...state.activeList};
      for (const id of action.ids) {
        delete newActiveList[id];
      }
      return {
        ...state,
        activeList: newActiveList,
      };
    case METHOD_USER_SESSION_OVERRIDE_LIST:
      return overrideList(action.activeSessionList);
    default:
      return state;
  }
}

function overrideList(list) {

  let current = {};
  let activeList = {};

  list.forEach(function(element) {
    if (element.getCurrent()) {
      current = element;
    } else {
      activeList[element.getSessionId()] = element;
    }
  });

  return {
    current,
    activeList,
  };
}