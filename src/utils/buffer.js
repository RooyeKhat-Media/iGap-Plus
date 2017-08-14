/**
 * @flow
 */

export function arrayBufferToString(buffer) {
  return String.fromCharCode.apply(null, new Uint8Array(buffer));
}

export function stringToArrayBuffer(string) {
  return stringToUint8Array(string).buffer;
}

export function stringToUint8Array(string) {
  return new Uint8Array([].map.call(string, function(x) {
    return x.charCodeAt(0);
  }));
}