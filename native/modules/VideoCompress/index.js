import { NativeModules } from 'react-native';

const { RNVideoCompress } = NativeModules;

export class VideoCompress {
  static compress(source) {
    return RNVideoCompress.compress(source).then((path) => {
      return path;
    });
  }
}