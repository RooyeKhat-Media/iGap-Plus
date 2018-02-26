import React, {Component} from 'react';
import UserQrCodeLoginComponent from '../../components/User/QrCodeLogin';
import {Proto, QrCodeNewDevice} from '../../modules/Proto/index';
import {APP_BUILD_VERSION, APP_ID, APP_NAME, APP_VERSION} from '../../constants/configs';
import {getPlatform} from '../../utils/app';
import Api from '../../modules/Api/index';
import {QR_CODE_NEW_DEVICE} from '../../constants/methods/index';
import {arrayBufferToImage} from '../../utils/buffer';

class UserQrCodeLoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qrCodeImage: null,
      expireTime: null,
    };
  }

  componentDidMount() {
    this.getNewDevice();
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  getNewDevice = async () => {
    const qrCodeNewDevice = new QrCodeNewDevice();
    qrCodeNewDevice.setAppName(APP_NAME);
    qrCodeNewDevice.setAppId(APP_ID);
    qrCodeNewDevice.setAppBuildVersion(APP_BUILD_VERSION);
    qrCodeNewDevice.setAppVersion(APP_VERSION);
    qrCodeNewDevice.setPlatform(getPlatform());
    qrCodeNewDevice.setPlatformVersion('0');
    qrCodeNewDevice.setDevice(Proto.Device.UNKNOWN_DEVICE);
    qrCodeNewDevice.setDeviceName('UNKNOWN_DEVICE');

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

  render() {
    const {qrCodeImage, expireTime} = this.state;
    return (
      <UserQrCodeLoginComponent qrCodeImage={qrCodeImage} expireTime={expireTime} />
    );
  }
}
UserQrCodeLoginScreen.navigationOptions = {
  header: null,
};
export default UserQrCodeLoginScreen;