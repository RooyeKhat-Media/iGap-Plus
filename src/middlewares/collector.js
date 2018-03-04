import Collector from '../modules/Collector';
import {startsWith} from 'lodash';


const {collect} = Collector(
  (collected) => {
    collected.forEach(({next, action}) => {
      next(action);
    });
  },
  300,
  100,
  true
);

export default store => next => action => {

  let immediate = (
    action._immediate
      ||
      startsWith(action.type, 'NAVIGATOR_')
      ||
      startsWith(action.type, 'PRIMARY_NAVIGATOR_')
      ||
      startsWith(action.type, 'SECONDARY_NAVIGATOR_')
      ||
      startsWith(action.type, 'Navigation/')
      ||
      false
  );


  if (immediate) {
    return next(action);
  }

  collect({
    next,
    action,
  });

  return action;
};