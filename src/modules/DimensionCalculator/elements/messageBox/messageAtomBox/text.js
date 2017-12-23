import {estimateTextHeight} from '../../../util';
import {min} from 'lodash';
import {DEFAULT_CHAR_WIDTH} from '../../../../../constants/app';
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
    width: min(maxWidth, roomMessage.message.length * DEFAULT_CHAR_WIDTH),
    height: boxType !== BOX_TYPE_CHANNEL ? estimateTextHeight(
      roomMessage.message,
      maxWidth
    ) : 0,
  };

  if (outer) {

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