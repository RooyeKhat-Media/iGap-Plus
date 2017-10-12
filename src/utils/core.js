/**
 * @flow
 */
import Long from 'long';
import {ceil, floor, max, min, values} from 'lodash';

/**
 * Mili-seconds sleep
 * @param {number} miliSeconds
 * @returns {Promise}
 */
export function msSleep(miliSeconds) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, miliSeconds);
  });
}

/**
 * Sleep
 * @param {number} seconds
 */
export function sleep(seconds) {
  return msSleep(seconds * 1000);
}

/**
 * Convert object to Long
 * @param {{low:number,high:number,unsigned:bool}} object
 * @return {Long}
 */
export function objectToLong(object) {
  return new Long(
    object.low || 0,
    object.high || 0,
    object.unsigned || false,
  );
}

/**
 * Generate random string
 * @param {number} length
 * @param {string} chars
 * @returns {string}
 */
export function randomString(length, chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz') {
  let str = '';
  const charsLen = chars.length;

  for (let i = 0; i < length; i++) {
    str += chars.charAt(Math.floor(Math.random() * charsLen));
  }
  return str;
}

/**
 * Strip whitespace (or other characters) from the end of a string
 * @param {string} str
 * @param {string} charlist
 * @return {string}
 */
export function rtrim(str, charlist) {

  charlist = !charlist ? ' \\s\u00A0' : (charlist + '')
    .replace(/([[\]().?/*{}+$^:])/g, '\\$1');

  const re = new RegExp('[' + charlist + ']+$', 'g');

  return (str + '').replace(re, '');
}

/**
 * Get extension
 * @param {string} path
 * @param {bool} includeDot
 * @return {string}
 */
export function getExtension(path, includeDot = false) {
  const lastIndexOfDot = path.lastIndexOf('.');
  if (lastIndexOfDot === -1) {
    return '';
  }

  const extension = path.substring(lastIndexOfDot + 1);

  return ((includeDot && extension ? '.' : '') + extension);
}

/**
 * calculate dimension of width and height
 * @param originalWidth
 * @param originalHeight
 * @param limiterWidth
 * @param limiterHeight
 * @returns {{width: *, height: *}}
 */
export function dimensionCalculate(originalWidth, originalHeight, limiterWidth, limiterHeight) {
  let width, height;
  if (originalWidth > originalHeight) {
    width = max([100, min([originalWidth, limiterWidth])]);
    height = ceil((width * originalHeight) / originalWidth);
  } else {
    height = max([100, min([originalHeight, limiterHeight])]);
    width = floor((height * originalWidth) / originalHeight);
  }
  return {width, height};
}

/**
 * Convert object to Uint8Array
 * @param {Object} object
 * @return {Uint8Array}
 */
export function objectToUint8Array(object) {
  return new Uint8Array(values(object));
}