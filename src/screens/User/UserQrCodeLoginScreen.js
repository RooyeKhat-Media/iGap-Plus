import React, {Component} from 'react';
import UserQrCodeLoginComponent from '../../components/User/QrCodeLogin';
import {QrCodeJoin, QrCodeNewDevice, QrCodeResolve} from '../../modules/Proto/index';
import {APP_BUILD_VERSION, APP_ID, APP_NAME, APP_VERSION} from '../../constants/configs';
import {getPlatform, saveToGallery} from '../../utils/app';
import Api from '../../modules/Api/index';
import {QR_CODE_JOIN, QR_CODE_NEW_DEVICE, QR_CODE_RESOLVE} from '../../constants/methods/index';
import {arrayBufferToImage} from '../../utils/buffer';
import DeviceInfo from 'react-native-device-info';
import RNIGFileSystem, {FileUtil, OPEN_MODE_WRITE} from 'react-native-file-system';
import {getRootDir} from '../../modules/FileManager/index';

export const qrMode = {
  LOGIN: 'LOGIN',
  JOIN: 'JOIN',
  RESOLVE: 'RESOLVE',
};

class UserQrCodeLoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qrCodeImage: null,
      expireTime: null,
      imageData: null,
    };
  }

  componentDidMount() {
    const {mode, data} = this.props.navigation.state.params;
    switch (mode) {
      case qrMode.LOGIN:
        this.getNewDevice();
        break;
      case qrMode.JOIN :
        this.getJoinLink(data.invite_token);
        break;
      case qrMode.RESOLVE :
        this.getResolveLink(data.username, data.message_id);
        break;
    }
  }

  componentWillUnmount() {
    const {mode} = this.props.navigation.state.params;
    switch (mode) {
      case qrMode.LOGIN:
        clearTimeout(this.timeout);
        break;
    }
  }

  getNewDevice = async () => {
    const qrCodeNewDevice = new QrCodeNewDevice();
    qrCodeNewDevice.setAppName(APP_NAME);
    qrCodeNewDevice.setAppId(APP_ID);
    qrCodeNewDevice.setAppBuildVersion(APP_BUILD_VERSION);
    qrCodeNewDevice.setAppVersion(APP_VERSION);
    qrCodeNewDevice.setPlatform(getPlatform());
    qrCodeNewDevice.setPlatformVersion(DeviceInfo.getSystemVersion());
    qrCodeNewDevice.setDevice(DeviceInfo.getDeviceName());
    qrCodeNewDevice.setDeviceName(DeviceInfo.getBrand());

    /**
     * @type ProtoQrCodeNewDeviceResponse
     */
    const newDeviceResponse = await Api.invoke(QR_CODE_NEW_DEVICE, qrCodeNewDevice);
    const expireTime = (newDeviceResponse.getExpireTime() - newDeviceResponse.getResponse().getTimestamp()) * 1000;
    const qrCodeImage = arrayBufferToImage(newDeviceResponse.getQrCodeImage());
    this.setState({
      qrCodeImage,
      expireTime,
    });
    this.timeout = setTimeout(this.getNewDevice, expireTime);
  };

  getJoinLink = async (invite_token) => {
    const qrCodeJoin = new QrCodeJoin();
    qrCodeJoin.setInviteToken(invite_token);
    const response = await Api.invoke(QR_CODE_JOIN, qrCodeJoin);
    const qrCodeImage = arrayBufferToImage(response.getQrCodeImage());
    this.setState({
      qrCodeImage,
      imageData: response.getQrCodeImage(),
    });
  };

  getResolveLink = async (username, message_id) => {
    const qrCodeResolve = new QrCodeResolve();
    qrCodeResolve.setUsername(username);
    qrCodeResolve.setMessageId(message_id);
    const response = await Api.invoke(QR_CODE_RESOLVE, qrCodeResolve);
    const qrCodeImage = arrayBufferToImage(response.getQrCodeImage());
    this.setState({
      qrCodeImage,
      imageData: response.getQrCodeImage(),
    });
  };

  saveToFolder = async () => {
    const {imageData} = this.state;
    if (!imageData) {
      return;
    }
    const rootUri = await getRootDir();
    const fileName = 'QR-' + new Date().getTime() + '.png';
    const fileUri = FileUtil.uriCombine(rootUri, fileName);

    let fHandle;
    try {
      fHandle = await RNIGFileSystem.fOpen(
        fileUri,
        OPEN_MODE_WRITE
      );
      await RNIGFileSystem.fAppend(fHandle, imageData);
    } catch (e) {
      console.warn(e);
    } finally {
      if (fHandle !== undefined) {
        await RNIGFileSystem.fClose(fHandle);
      }
    }
    saveToGallery(fileUri, 'image');
  };

  render() {
    const {qrCodeImage, expireTime} = this.state;
    const {mode} = this.props.navigation.state.params;
    return (
      <UserQrCodeLoginComponent
        qrCodeImage={qrCodeImage}
        expireTime={expireTime}
        qrCodeMode={mode}
        goBack={this.props.navigation.goBack}
        saveToFolder={this.saveToFolder}
      />
    );
  }
}
UserQrCodeLoginScreen.navigationOptions = {
  header: null,
};
export default UserQrCodeLoginScreen;