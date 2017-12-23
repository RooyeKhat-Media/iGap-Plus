import Device from '../Responsive/Device';

import noBoxCalculator from './elements/noBox';
import ownerBoxCalculator from './elements/ownerBox';
import chatBoxCalculator from './elements/chatBox';
import groupBoxCalculator from './elements/groupBox';
import channelBoxCalculator from './elements/channelBox';


export const BOX_TYPE_NONE = 0;
export const BOX_TYPE_OWNER = 1;
export const BOX_TYPE_CHAT = 2;
export const BOX_TYPE_GROUP = 3;
export const BOX_TYPE_CHANNEL = 4;

/**
 * @callback dimensionCalculatorFunction
 * @param {number} maxWidth
 * @param {boolean} outer
 * @param {FlatRoomMessage} roomMessage
 * @param {number} boxType
 * @param {boolean} forwarded
 * @return {{width:number,height:number}}
 */

const calculator = {

  /**
   * @param {boolean} outer
   * @param {FlatRoomMessage} roomMessage
   * @param {number} boxType
   * @param {boolean} forwarded
   * @return {{width:number,height:number}}
   * @private
   */
  _calculateDimension: (outer, roomMessage, boxType, forwarded) => {
    const maxWidth = this.getSecondaryWidth();
    switch (boxType) {
      case  BOX_TYPE_NONE :
        return noBoxCalculator(maxWidth, outer, roomMessage, boxType, forwarded);
      case  BOX_TYPE_OWNER :
        return ownerBoxCalculator(maxWidth, outer, roomMessage, boxType, forwarded);
      case  BOX_TYPE_CHAT :
        return chatBoxCalculator(maxWidth, outer, roomMessage, boxType, forwarded);
      case  BOX_TYPE_GROUP :
        return groupBoxCalculator(maxWidth, outer, roomMessage, boxType, forwarded);
      case  BOX_TYPE_CHANNEL :
        return channelBoxCalculator(maxWidth, outer, roomMessage, boxType, forwarded);
      default:
        throw new Error('Cannot calculate dimension : Invalid box type', roomMessage);
    }
  },

  /**
   * @param {FlatRoomMessage} roomMessage
   * @param {number} boxType
   * @param {boolean} forwarded
   * @return {{width:number,height:number}}
   */
  innerDimension: (roomMessage, boxType, forwarded = false) => {
    this._calculateDimension(false, roomMessage, boxType, forwarded);
  },

  /**
   * @param {FlatRoomMessage} roomMessage
   * @param {number} boxType
   * @param {boolean} forwarded
   * @return {{width:number,height:number}}
   */
  outerDimension: (roomMessage, boxType, forwarded = false) => {
    this._calculateDimension(true, roomMessage, boxType, forwarded);
  },

  /**
   * @returns {number}
   */
  getPrimaryWidth: () => {
    //TODO calculate me
    const {width} = Device.dimensions.window;
    return width;
  },

  /**
   * @returns {number}
   */
  getSecondaryWidth: () => {
    //TODO calculate me according to getPrimaryWidth
    const {width} = Device.dimensions.window;
    return width;
  },
};

export default calculator;