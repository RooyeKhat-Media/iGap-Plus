
import { NativeModules } from 'react-native';

const { RNIGCamera } = NativeModules;

class Camera {

  /**
   * @returns {Promise<string>}
   */
  takePictureAsync() {
    return RNIGCamera.takePictureAsync();
  }


  /**
   * @returns {Promise<string>}
   */
  recordAsync() {
    return RNIGCamera.recordAsync();
  }
}

const camera = new Camera();

export default camera;
