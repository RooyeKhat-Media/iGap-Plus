import {min} from 'lodash';
import messageBoxCalculator from './messageBox/index';

/**
 * @type dimensionCalculatorFunction
 */
const calculator = (maxWidth, outer, roomMessage, boxType, forwarded) => {
  /**
   * Padding : 5+7+7+5
   * Margin : 0+3
   * Components : 0
   * @type {number}
   */
  const xSpace = 27;

  const dimension = messageBoxCalculator(min([0.7 * maxWidth, maxWidth - xSpace]), outer, roomMessage, boxType, forwarded);

  if (outer) {
    /**
     * Padding : 5+7+7+5
     * Margin : 0
     * Components : 18
     * @type {number}
     */
    const ySpace = 42;

    dimension.width += xSpace;
    dimension.height += ySpace;
  }

  return dimension;
};

export default calculator;