import {Linking as RNLinking} from 'react-native';

export default class Linking {
  static async openURL(url) {
    const supported = await RNLinking.canOpenURL(url);
    if (!supported) {
      throw new Error('Can\'t handle url: ' + url);
    }
    return RNLinking.openURL(url);
  }

  static openMap(lat, lon) {
    self.openURL(`geo:${lat},${lon}`);
  }
}