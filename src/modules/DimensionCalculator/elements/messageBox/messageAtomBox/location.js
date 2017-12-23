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
    width: 300,
    height: 400,
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