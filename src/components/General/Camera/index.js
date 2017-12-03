import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StatusBar, TouchableOpacity, View} from 'react-native';
import styles from './index.styles';
import {MemoizeResponsiveStyleSheet} from '../../../modules/Responsive';
import Camera from 'react-native-camera';
import {Icon} from '../../BaseUI';
import BlinkRecorder from './BlinkRecorder';
import {cameraMode} from '../../../screens/General/CameraScreen';
import {gray1000} from '../../../themes/default/index';

class CameraComponent extends Component {

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styles);
  };

  constructor(props) {
    super(props);
    this.camera = null;
    this.setCameraMode();
    this.state = {
      camera: {
        type: Camera.constants.Type.back,
        orientation: Camera.constants.Orientation.auto,
        flashMode: Camera.constants.FlashMode.auto,
        captureQuality: this.videoMode ? Camera.constants.CaptureQuality.medium : Camera.constants.CaptureQuality.high,
      },
      isRecording: false,
    };
  }

  componentWillUnmount() {
    const {reject} = this.props;
    reject(null);
  }

  render() {
    const {goBack} = this.props;
    const styles = this.getStyles();

    return (
      <View style={styles.container}>
        <StatusBar animated hidden/>
        <Camera
          ref={(cam) => this.camera = cam}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
          captureMode={this.videoMode ? Camera.constants.CaptureMode.video : Camera.constants.CaptureMode.still}
          captureTarget={Camera.constants.CaptureTarget.disk}
          type={this.state.camera.type}
          captureAudio={true}
          audio={true}
          flashMode={this.state.camera.flashMode}
          captureQuality={this.state.camera.captureQuality}
          onBarCodeRead={this.qrCodeMode ? this.onBarCodeRead : null}
          barCodeTypes={this.qrCodeMode ? ['qr'] : []}
          playSoundOnCapture={false}
        />

        <View style={styles.timer}>
          {this.state.isRecording && <BlinkRecorder/>}
        </View>

        {!this.state.isRecording && <View style={styles.topOverlay}>
          {this.pictureMode &&
          <TouchableOpacity style={styles.flashButton} onPress={this.switchFlash}>
            <Icon name={this.flashIcon} size={30} color={gray1000}/>
          </TouchableOpacity>}
          {!this.qrCodeMode &&
          <TouchableOpacity style={styles.typeButton} onPress={this.switchType}>
            <Icon name={this.typeIcon} size={30} color={gray1000}/>
          </TouchableOpacity>}

          {!this.qrCodeMode &&
          <TouchableOpacity style={styles.typeButton} onPress={this.switchQuality}>
            <Icon name={this.qualityIcon} size={30} color={gray1000}/>
          </TouchableOpacity>}
        </View>}

        <View style={styles.bottomOverlay}>
          {this.pictureMode &&
          <TouchableOpacity style={styles.captureButton} onPress={this.takePicture}>
            <Icon name="photo-camera" size={32} color={gray1000}/>
          </TouchableOpacity>}

          {this.videoMode &&
          (!this.state.isRecording &&
            <TouchableOpacity style={styles.captureButton} onPress={this.startRecording}>
              <Icon name="videocam" size={32} color={gray1000}/>
            </TouchableOpacity>
            ||
            <TouchableOpacity style={styles.captureButton} onPress={this.stopRecording}>
              <Icon name="stop" size={32} color={gray1000}/>
            </TouchableOpacity>)}

        </View>

        <TouchableOpacity style={styles.close} onPress={() => goBack()}>
          <Icon name="close" size={32} color={gray1000}/>
        </TouchableOpacity>

      </View>
    );
  }

  setCameraMode = () => {
    const {CameraMode} = this.props;
    this.pictureMode = false;
    this.videoMode = false;
    this.qrCodeMode = false;
    switch (CameraMode) {
      case cameraMode.CAMERA:
        this.pictureMode = true;
        break;
      case cameraMode.VIDEO:
        this.videoMode = true;
        break;
      case cameraMode.QR:
        this.qrCodeMode = true;
        break;
    }
  };

  onBarCodeRead = (data) => {
    const {resolve, goBack} = this.props;
    resolve(data.data);
    goBack();
  };

  takePicture = () => {
    const {resolve, reject, goBack} = this.props;
    this.camera.capture()
      .then((data) => {
        resolve(data.path);
        goBack();
      })
      .catch(err => {
        reject(err);
        goBack();
      });
  };

  startRecording = () => {
    const {resolve, reject, goBack} = this.props;
    if (this.camera) {
      this.camera.capture({mode: Camera.constants.CaptureMode.video})
        .then((data) => {
          resolve(data.path);
          goBack();
        })
        .catch(err => {
          reject(err);
          goBack();
        });
      this.setState({
        isRecording: true,
      });
    }
  };

  stopRecording = () => {
    if (this.camera) {
      this.camera.stopCapture();
      this.setState({
        isRecording: false,
      });
    }
  };

  switchType = () => {
    let newType;
    let quality;
    const {back, front} = Camera.constants.Type;
    if (this.state.camera.type === back) {
      newType = front;
      quality = Camera.constants.CaptureQuality.high;
    } else if (this.state.camera.type === front) {
      newType = back;
      quality = this.videoMode ? Camera.constants.CaptureQuality.medium : Camera.constants.CaptureQuality.high;
    }
    this.setState({
      camera: {
        ...this.state.camera,
        type: newType,
        captureQuality: quality,
      },
    });
  };

  get typeIcon() {
    let icon;
    const {back, front} = Camera.constants.Type;
    if (this.state.camera.type === back) {
      icon = 'camera-rear';
    } else if (this.state.camera.type === front) {
      icon = 'camera-front';
    }
    return icon;
  }

  switchFlash = () => {
    let newFlashMode;
    const {auto, on, off} = Camera.constants.FlashMode;
    if (this.state.camera.flashMode === auto) {
      newFlashMode = on;
    } else if (this.state.camera.flashMode === on) {
      newFlashMode = off;
    } else if (this.state.camera.flashMode === off) {
      newFlashMode = auto;
    }
    this.setState({
      camera: {
        ...this.state.camera,
        flashMode: newFlashMode,
      },
    });
  };

  get flashIcon() {
    let icon;
    const {auto, on, off} = Camera.constants.FlashMode;
    if (this.state.camera.flashMode === auto) {
      icon = 'flash-auto';
    } else if (this.state.camera.flashMode === on) {
      icon = 'flash-on';
    } else if (this.state.camera.flashMode === off) {
      icon = 'flash-off';
    }
    return icon;
  }

  switchQuality = () => {
    let newQuality;
    const {high, medium, low} = Camera.constants.CaptureQuality;
    if (this.state.camera.captureQuality === high) {
      newQuality = medium;
    } else if (this.state.camera.captureQuality === medium) {
      newQuality = low;
    } else if (this.state.camera.captureQuality === low) {
      newQuality = high;
    }
    this.setState({
      camera: {
        ...this.state.camera,
        captureQuality: newQuality,
      },
    });
  };

  get qualityIcon() {
    let icon;
    const {high, medium, low} = Camera.constants.CaptureQuality;
    if (this.state.camera.captureQuality === high) {
      icon = 'high-quality';
    } else if (this.state.camera.captureQuality === medium) {
      icon = 'crop-5-4';
    } else if (this.state.camera.captureQuality === low) {
      icon = 'crop-16-9';
    }
    return icon;
  }
}

CameraComponent.propTypes = {
  goBack: PropTypes.func.isRequired,
  resolve: PropTypes.func.isRequired,
  reject: PropTypes.func.isRequired,
  CameraMode: PropTypes.string,
};

export default CameraComponent;