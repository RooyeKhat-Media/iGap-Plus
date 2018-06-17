import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Platform, StatusBar, TouchableOpacity, View} from 'react-native';
import styleSheet from './index.styles';
import {MemoizeResponsiveStyleSheet} from '../../../modules/Responsive';
import {RNCamera} from 'react-native-camera';
import {Icon} from '../../BaseUI';
import BlinkRecorder from './BlinkRecorder';
import {cameraMode} from '../../../screens/General/CameraScreen';
import {appTheme} from '../../../themes/default/index';
import {replace} from 'lodash';

class CameraComponent extends Component {

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  constructor(props) {
    super(props);
    this.camera = null;
    this.setCameraMode();
    this.state = {
      camera: {
        type: RNCamera.Constants.Type.back,
        flashMode: RNCamera.Constants.FlashMode.auto,
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
        <RNCamera
          ref={ref => this.camera = ref}
          style={styles.preview}
          type={this.state.camera.type}
          captureAudio={this.videoMode}
          flashMode={this.state.camera.flashMode}
          onBarCodeRead={this.qrCodeMode ? this.onBarCodeRead : null}
          barCodeTypes={this.qrCodeMode ? [RNCamera.Constants.BarCodeType.qr] : []}
        />

        <View style={styles.timer}>
          {this.state.isRecording && <BlinkRecorder textColor="white"/>}
        </View>

        {!this.state.isRecording && <View style={styles.topOverlay}>
          {this.pictureMode &&
          <TouchableOpacity style={styles.flashButton} onPress={this.switchFlash}>
            <Icon name={this.flashIcon} size={30} color={appTheme.icon}/>
          </TouchableOpacity>}
          {!this.qrCodeMode &&
          <TouchableOpacity style={styles.typeButton} onPress={this.switchType}>
            <Icon name={this.typeIcon} size={30} color={appTheme.icon}/>
          </TouchableOpacity>}

        </View>}

        <View style={styles.bottomOverlay}>
          {this.pictureMode &&
          <TouchableOpacity style={styles.captureButton} onPress={this.takePicture}>
            <Icon name="photo-camera" size={32} color={appTheme.icon}/>
          </TouchableOpacity>}

          {this.videoMode &&
          (!this.state.isRecording &&
            <TouchableOpacity style={styles.captureButton} onPress={this.startRecording}>
              <Icon name="videocam" size={32} color={appTheme.icon}/>
            </TouchableOpacity>
            ||
            <TouchableOpacity style={styles.captureButton} onPress={this.stopRecording}>
              <Icon name="stop" size={32} color={appTheme.icon}/>
            </TouchableOpacity>)}

        </View>

        <TouchableOpacity style={styles.close} onPress={() => goBack()}>
          <Icon name="close" size={32} color={appTheme.icon}/>
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

  takePicture = async () => {
    if (this.camera) {
      const {resolve, reject, goBack} = this.props;
      const options = {};
      try {
        const data = await this.camera.takePictureAsync(options);
        resolve(Platform.OS === 'ios' ? replace(data.uri, 'file://', '') : data.uri);
      } catch (e) {
        reject(e);
      } finally {
        goBack();
      }
    }
  };

  startRecording = async () => {
    if (this.camera) {
      const {resolve, reject, goBack} = this.props;
      this.setState({
        isRecording: true,
      });
      const options = {quality: '480p'};
      try {
        const data = await this.camera.recordAsync(options);
        resolve(Platform.OS === 'ios' ? replace(data.uri, 'file://', '') : data.uri);
      } catch (e) {
        reject(e);
      } finally {
        goBack();
      }
    }
  };

  stopRecording = () => {
    if (this.camera) {
      this.camera.stopRecording();
      this.setState({
        isRecording: false,
      });
    }
  };

  switchType = () => {
    let newType;
    const {back, front} = RNCamera.Constants.Type;
    if (this.state.camera.type === back) {
      newType = front;
    } else if (this.state.camera.type === front) {
      newType = back;
    }
    this.setState({
      camera: {
        ...this.state.camera,
        type: newType,
      },
    });
  };

  get typeIcon() {
    let icon;
    const {back, front} = RNCamera.Constants.Type;
    if (this.state.camera.type === back) {
      icon = 'camera-rear';
    } else if (this.state.camera.type === front) {
      icon = 'camera-front';
    }
    return icon;
  }

  switchFlash = () => {
    let newFlashMode;
    const {auto, on, off, torch} = RNCamera.Constants.FlashMode;
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
    const {auto, on, off, torch} = RNCamera.Constants.FlashMode;
    if (this.state.camera.flashMode === auto) {
      icon = 'flash-auto';
    } else if (this.state.camera.flashMode === on) {
      icon = 'flash-on';
    } else if (this.state.camera.flashMode === off) {
      icon = 'flash-off';
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