import Camera from 'react-native-igap-camera';
import BaseCameraComponent from './index.js';
import PropTypes from 'prop-types';

class CameraComponent extends BaseCameraComponent {

}


CameraComponent.propTypes = {
  goBack: PropTypes.func.isRequired,
  resolve: PropTypes.func.isRequired,
  reject: PropTypes.func.isRequired,
  CameraMode: PropTypes.string,
};

export default CameraComponent;