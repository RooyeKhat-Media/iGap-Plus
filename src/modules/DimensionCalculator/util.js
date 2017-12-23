import {ceil, max, min} from 'lodash';
import {DEFAULT_CHAR_WIDTH} from '../../constants/app';

/**
 * Calculate dimension of width and height
 * @param originalWidth
 * @param originalHeight
 * @param limiterWidth
 * @param limiterHeight
 * @param minWidth
 * @param minheight
 * @returns {{width: number, height: number}}
 */
export function dimensionCalculate(originalWidth, originalHeight, limiterWidth, limiterHeight, minWidth = 100, minheight = 100) {
  const width = max([minWidth, min([limiterWidth, originalWidth])]);
  const height = max([minheight, min([limiterHeight, ceil(width * originalHeight / originalWidth)])]);

  return {width, height};
}

/**
 * Estimate text height
 * @param {string} text
 * @param {number} limiterWidth
 * @param {number} lineHeight
 * @param {number} charWidth Average character width
 */
export function estimateTextHeight(text, limiterWidth, lineHeight = 14, charWidth = DEFAULT_CHAR_WIDTH) {
  if (!text) {
    return 0;
  }

  const breaks = text.split('\n').length - 1;
  const lines = ceil((text.length - breaks) * charWidth / limiterWidth) + breaks;
  return ( lines * lineHeight);
}