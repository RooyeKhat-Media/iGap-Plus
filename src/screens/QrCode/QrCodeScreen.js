import React, {Component} from 'react';
import {goCamera} from '../../navigators/SecondaryNavigator';
import {cameraMode} from '../General/CameraScreen';
import {injectIntl} from 'react-intl';
import i18n from '../../i18n';
import Api from '../../modules/Api/index';
import {UserVerifyNewDevice} from '../../modules/Proto/index';
import {USER_VERIFY_NEW_DEVICE} from '../../constants/methods/index';
import QrCodeComponent from '../../components/QrCode';

class QrCodeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      verifiedDeviceInfo: {},
    };
  }

  async componentDidMount() {
    const {intl} = this.props;
    const denialMessage = [
      intl.formatMessage(i18n.roomHistoryCameraPermission),
      intl.formatMessage(i18n.roomHistoryCameraPermissionMessage),
      intl.formatMessage(i18n.roomHistoryStoragePermission),
      intl.formatMessage(i18n.roomHistoryStoragePermissionMessage),
    ];
    try {
      const url = await new Promise((resolve, reject) => {
        goCamera(resolve, reject, cameraMode.QR, denialMessage);
      });
      const userVerifyNewDevice = new UserVerifyNewDevice();
      userVerifyNewDevice.setToken(url);
      const deviceInfo = await Api.invoke(USER_VERIFY_NEW_DEVICE, userVerifyNewDevice);
      this.setState({
        verifiedDeviceInfo: deviceInfo,
      });
    } catch (e) {
      this.props.navigation.goBack();
    }
  }

  render() {
    return (
      <QrCodeComponent
        verifiedDeviceInfo={this.state.verifiedDeviceInfo}
        goBack={this.props.navigation.goBack}
      />
    );
  }
}

QrCodeScreen.propTypes = {};
const IniQrcode = injectIntl(QrCodeScreen);

IniQrcode.navigationOptions = {
  header: null,
};
export default IniQrcode;