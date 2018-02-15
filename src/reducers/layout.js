import {floor} from 'lodash';
export const LAYOUT_SECONDARY_WIDTH = 'LAYOUT_SECONDARY_WIDTH';
import {getSecondaryWidth} from '../modules/DimensionCalculator/index';

const defaultState = {
  secondaryWidth: floor(getSecondaryWidth()),
};

export function layout(state = defaultState, action) {
  let newLayout = {...state};
  switch (action.type) {
    case LAYOUT_SECONDARY_WIDTH:
      newLayout.secondaryWidth = action.width;
      return newLayout;
    default:
      return state;
  }
}