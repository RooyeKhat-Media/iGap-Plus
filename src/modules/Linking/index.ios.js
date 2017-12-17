import Base from './index.js';

export default class Linking extends Base {
  static openMap(lat, lon) {
    self.openURL(`http://maps.apple.com/?ll=${lat},${lon}`);
  }
}