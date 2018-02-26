/**
 * @flow
 */
import binaryToBase64 from 'binaryToBase64';

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

export function arrayBufferToImage(buffer) {
  let mime;
  const nb = buffer.length;
  if (nb < 4) {
    return null;
  }
  const b0 = buffer[0];
  const b1 = buffer[1];
  const b2 = buffer[2];
  const b3 = buffer[3];
  if (b0 == 0x89 && b1 == 0x50 && b2 == 0x4E && b3 == 0x47) {
    mime = 'image/png';
  } else if (b0 == 0xff && b1 == 0xd8) {
    mime = 'image/jpeg';
  } else if (b0 == 0x47 && b1 == 0x49 && b2 == 0x46) {
    mime = 'image/gif';
  } else {
    return null;
  }

  const base64 = binaryToBase64(buffer);
  return 'data:' + mime + ';base64,' + base64;
}