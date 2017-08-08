/**
 * @flow
 */

import type {Action} from '../actions/types';

type State = {
  [key: string] : any
};

const rootReducer = function(state:State, action:Action):State {
  return state;
};

export default rootReducer;
