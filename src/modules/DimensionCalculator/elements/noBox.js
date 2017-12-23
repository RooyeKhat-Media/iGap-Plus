import messageBoxCalculator from './messageBox/index';

/**
 * @type dimensionCalculatorFunction
 */
const calculator = (maxWidth, outer, roomMessage, boxType, forwarded) => {
  return messageBoxCalculator(maxWidth, outer, roomMessage, boxType, forwarded);
};

export default calculator;