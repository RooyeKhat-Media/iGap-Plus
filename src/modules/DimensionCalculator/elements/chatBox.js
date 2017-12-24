/*
+--------------------------------------+
|                  5                   |
+--45----+ +------------------------+  |
+|       | | |max with 260--------+ |  |
|45 avatar | |          7         | |  |
+|       | | |  +---------------+ | |  |
+--------+ | |7 |  message box  |7| |  |
|5         |5|  +---------------+ | | 5|
|          | |          7         | |  |
|          | +--------------------+ |  |
|          | +--------------------+ |  |
|          | |   h=19       time  | |  |
|          +-+--------------------+-+  |
|                  5                   |
+--------------------------------------+

* */


import {max, min} from 'lodash';

import messageBoxCalculator from './messageBox/index';

/**
 * @type dimensionCalculatorFunction
 */
const calculator = (maxWidth, outer, roomMessage, boxType, forwarded) => {
  /**
   * Padding : 5+5+7+7+5
   * Margin : 0
   * Components : 45
   * @type {number}
   */
  const xSpace = 74;

  const dimension = messageBoxCalculator(min([0.7 * maxWidth, maxWidth - xSpace]), outer, roomMessage, boxType, forwarded);

  if (outer) {
    /**
     * Padding : 5+7+7+5
     * Margin : 0
     * Components : 18
     * @type {number}
     */
    const ySpace = 42;

    /**
     * Padding : 5+5
     * Margin : 0
     * Components : 45
     * @type {number}
     */
    const minHeight = 55;

    dimension.width += xSpace;
    dimension.height = max([
      dimension.height + ySpace,
      minHeight,
    ]);
  }

  return dimension;
};

export default calculator;