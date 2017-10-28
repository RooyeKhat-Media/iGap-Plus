const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

export function convertBytes(x) {
  let l = 0;
  let n = parseInt(x, 10) || 0;
  while (n >= 1024) {
    n /= 1024;
    l++;
  }
  return (n.toFixed(n >= 10 || l < 1 ? 0 : 1) + ' ' + units[l]);
}

export function convertSecendToTime(secend) {
  const mins = Math.floor(secend / 60);
  const secs = Math.round(secend - mins * 60);
  const hrs = Math.floor(secend / 3600);
  return (hrs > 0 ? (hrs > 9 ? hrs + ':' : '0' + hrs + ':') : '') + (mins > 9 ? mins : '0' + mins) + ':' + (secs > 9 ? secs : '0' + secs);
}


