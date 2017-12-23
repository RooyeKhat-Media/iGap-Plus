/**
 * @flow
 */
import Long from 'long';
import {floor, startsWith, values} from 'lodash';

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
    str += chars.charAt(floor(Math.random() * charsLen));
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
  const whitespaces = ' \\s\u00A0';
  charlist = !charlist ? whitespaces : (whitespaces + (charlist + '')
    .replace(/([\\[\]().?/*{}+$^:])/g, '\\$1'));

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
 * Convert object to Uint8Array
 * @param {Object} object
 * @return {Uint8Array}
 */
export function objectToUint8Array(object) {
  return new Uint8Array(values(object));
}

/**
 * Prepend file protocol if needed
 * @param {string|null|undefined} uri
 * @return {string|null|undefined}
 */
export function prependFileProtocol(uri) {
  if (uri && !startsWith(uri, 'file://')) {
    uri = 'file://' + uri;
  }
  return uri;
}

/**
 * @param {boolean} seconds
 * @returns {number}
 */
export function tNow(seconds = true) {
  const t = new Date().getTime();
  return seconds ? Math.floor(t / 1000) : t;
}

export function toHHMMSS(secs) {
  let sec_num = parseInt(secs, 10);
  let hours = Math.floor(sec_num / 3600) % 24;
  let minutes = Math.floor(sec_num / 60) % 60;
  let seconds = sec_num % 60;
  return [hours, minutes, seconds]
    .map(v => v < 10 ? '0' + v : v)
    .filter((v, i) => v !== '00' || i > 0)
    .join(':');
}