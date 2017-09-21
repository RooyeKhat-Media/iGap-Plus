/**
 * @flow
 */

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