import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CameraComponent from '../../components/General/Camera/index';

export const cameraMode = {
  CAMERA: 'CAMERA',
  VIDEO: 'VIDEO',
  QR: 'QR',
};

class CameraScreen extends Component {

  static navigationOptions = {
    header: null,
  };

  render() {
    const {resolve, reject, CameraMode} = this.props.navigation.state.params;
    return (
      <CameraComponent
        goBack={this.props.navigation.goBack}
        resolve={resolve}
        reject={reject}
        CameraMode={CameraMode}
      />
    );
  }
}

CameraScreen.propTypes = {
  resolve: PropTypes.func,
  reject: PropTypes.func,
  CameraMode: PropTypes.string,
};

export default CameraScreen;
