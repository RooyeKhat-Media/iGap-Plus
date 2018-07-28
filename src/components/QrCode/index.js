import React from 'react';
import PropTypes from 'prop-types';
import {injectIntl} from 'react-intl';
import {Text, View} from 'react-native';
import i18n from '../../i18n';
import {isEmpty, uniqueId} from 'lodash';
import {appTheme} from '../../themes/default/index';
import {Icon, Toolbar} from '../BaseUI/index';
import {Proto} from '../../modules/Proto/index';
import {IRANSans_Bold, IRANSans_Medium} from '../../constants/fonts/index';
import MemoizeResponsiveStyleSheet from '../../modules/Responsive/MemoizeResponsiveStyleSheet';
import {arrowBackIcon} from '../BaseUI/Utile/index';

class QrCodeComponent extends React.Component {

  getDeviceIcon(device) {
    let iconName = 'tv';
    switch (device) {
      case Proto.Device.PC:
        iconName = 'computer';
        break;
      case Proto.Device.TABLET:
        iconName = 'tablet';
        break;
      case Proto.Device.MOBILE:
        iconName = 'smartphone';
        break;
    }
    return iconName;
  }

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  render() {
    const {verifiedDeviceInfo, intl, goBack} = this.props;
    const styles = this.getStyles();

    if (isEmpty(verifiedDeviceInfo)) {
      return null;
    }

    const iconName = this.getDeviceIcon(verifiedDeviceInfo.getDevice());

    return (
      <View style={styles.root}>
        <Toolbar
          leftElement={arrowBackIcon(goBack)}
          centerElement={intl.formatMessage(i18n.qrCodeQrCodeLogin)}
        />
        <View style={styles.titleIcon}>
          <Icon name="important-devices" size={160} color={appTheme.icon}/>
        </View>
        <View style={styles.container}>
          <Text style={styles.loggedIn}>{intl.formatMessage(i18n.qrCodeLoggedInDevice)}</Text>
          <View style={styles.layoutDeviceInfo}>

            <View style={{margin: 10}}>
              <Icon name={iconName} size={40} color={appTheme.icon}/>
            </View>

            <View>
              <Text style={styles.deviceText}>
                {intl.formatMessage(i18n.activeSessionPlatform, {platform: verifiedDeviceInfo.getPlatform()}) + ' ' + verifiedDeviceInfo.getPlatformVersion()}
              </Text>
              <Text style={styles.deviceText}>{verifiedDeviceInfo.getDeviceName()}</Text>
              <Text
                style={styles.deviceText}>{verifiedDeviceInfo.getAppName() + '  ' + verifiedDeviceInfo.getAppVersion()}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const uId = uniqueId();
const styleSheet = [
  uId,
  () => [
    {
      query: {},
      style: {
        root: {
          flex: 1,
          backgroundColor: appTheme.pageBackground,
        },
        titleIcon: {
          alignSelf: 'center',
          marginTop: 20,
        },
        container: {
          margin: 20,
        },
        loggedIn: {
          ...IRANSans_Bold,
          color: appTheme.primary,
          fontSize: 18,
          backgroundColor: appTheme.pageBackground,
          margin: 1,
          padding: 7,
          paddingLeft: 17,
          borderTopRightRadius: 5,
          borderTopLeftRadius: 5,
        },
        layoutDeviceInfo: {
          flexDirection: 'row',
          backgroundColor: appTheme.pageBackground,
          margin: 1,
          padding: 7,
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,

        },
        deviceText: {
          fontSize: 15,
          ...IRANSans_Medium,
          color: appTheme.primaryText,
        },
      },
    },
  ],
  true,
];

QrCodeComponent.propTypes = {
  verifiedDeviceInfo: PropTypes.object.isRequired,
  goBack: PropTypes.func.isRequired,
};

export default injectIntl(QrCodeComponent);