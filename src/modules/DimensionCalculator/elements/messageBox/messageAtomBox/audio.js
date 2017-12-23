import {estimateTextHeight} from '../../../util';
import {max} from 'lodash';
import {BOX_TYPE_CHANNEL} from '../../../index';

/**
 * @type dimensionCalculatorFunction
 */
const calculator = (maxWidth, outer, roomMessage, boxType, forwarded) => {
  /**
   * Padding : 0
   * Margin : 0
   * Components : 0
   * @type {number}
   */
  const xSpace = 0;

  const dimension = {
    width: 250, // TODO [Amerehie] - 2017-12-23 12:24 PM - fix me
    height: 70, // TODO [Amerehie] - 2017-12-23 12:24 PM - fix me
  };

  if (outer) {
    if (boxType !== BOX_TYPE_CHANNEL && roomMessage.message) {
      // TODO [Amerehie] - 2017-12-23 12:00 PM - add possible padding
      dimension.height = max([
        dimension.height,
        estimateTextHeight(
          roomMessage.message,
          dimension.width - xSpace
        ),
      ]);
    }

    /**
     * Padding : 0
     * Margin : 0
     * Components : 0
     * @type {number}
     */
    const ySpace = 0;

    dimension.width += xSpace;
    dimension.height += ySpace;
  }

  return dimension;
};

export default calculator;