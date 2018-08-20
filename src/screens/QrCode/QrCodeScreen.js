import React, {Component} from 'react';
import {goCamera} from '../../navigators/SecondaryNavigator';
import {cameraMode} from '../General/CameraScreen';
import {injectIntl} from 'react-intl';
import i18n from '../../i18n';
import Api from '../../modules/Api/index';
import {ClientCheckInviteLink, ClientResolveUsername, UserVerifyNewDevice} from '../../modules/Proto/index';
import {CLIENT_CHECK_INVITE_LINK, CLIENT_RESOLVE_USERNAME, USER_VERIFY_NEW_DEVICE} from '../../constants/methods/index';
import queryString from 'query-string';
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
      const found = url.match('^igap://([\\w=?]+)\\s*');
      if (found) {
        const path = found[1].split('?');
        const parsed = queryString.parse(path[1]);
        switch (path[0].toLowerCase()) {
          case 'join':
            const clientCheckInviteLink = new ClientCheckInviteLink();
            clientCheckInviteLink.setInviteToken(parsed.invite);
            Api.invoke(CLIENT_CHECK_INVITE_LINK, clientCheckInviteLink);
            break;
          case 'resolve':
            const clientResolveUsername = new ClientResolveUsername();
            clientResolveUsername.setUsername(parsed.domain);
            Api.invoke(CLIENT_RESOLVE_USERNAME, clientResolveUsername);
            break;
        }
        this.props.navigation.goBack();
      } else {
        if (url.includes('://')) {
          this.props.navigation.goBack();
        } else {
          const userVerifyNewDevice = new UserVerifyNewDevice();
          userVerifyNewDevice.setToken(url);
          const deviceInfo = await Api.invoke(USER_VERIFY_NEW_DEVICE, userVerifyNewDevice);
          this.setState({
            verifiedDeviceInfo: deviceInfo,
          });
        }
      }
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