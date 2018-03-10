import React from 'react';
import PropTypes from 'prop-types';
import {injectIntl} from 'react-intl';
import {Text, View, StyleSheet} from 'react-native';
import i18n from '../../i18n';
import {gray700, primary, textTitleStyle} from '../../themes/default/index';
import {Icon, Toolbar} from '../BaseUI/index';
import {isEmpty} from 'lodash';
import {Proto} from '../../modules/Proto/index';
import {IRANSans_Medium} from '../../constants/fonts/index';

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

  render() {
    const {verifiedDeviceInfo, intl, goBack} = this.props;

    if (isEmpty(verifiedDeviceInfo)) {
      return null;
    }

    const iconName = this.getDeviceIcon(verifiedDeviceInfo.getDevice());

    return (
      <View style={styles.root}>
        <Toolbar
          leftElement="arrow-back"
          onLeftElementPress={goBack}
          centerElement={<Text style={textTitleStyle}>{intl.formatMessage(i18n.qrCodeQrCodeLogin)}</Text>}
        />
        <View style={styles.titleIcon}>
          <Icon name="important-devices" size={160} color={gray700}/>
        </View>
        <View style={styles.container}>
          <Text style={styles.loggedIn}>{intl.formatMessage(i18n.qrCodeLoggedInDevice)}</Text>
          <View style={styles.layoutDeviceInfo}>

            <View style={{margin: 10}}>
              <Icon name={iconName} size={40} color={gray700}/>
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

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  titleIcon: {
    alignSelf: 'center',
    marginTop: 20,
  },
  container: {
    margin: 20,
  },
  loggedIn: {
    color: primary,
    fontSize: 18,
    backgroundColor: 'white',
    fontWeight: 'bold',
    margin: 1,
    padding: 7,
    paddingLeft: 17,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  layoutDeviceInfo: {
    flexDirection: 'row',
    backgroundColor: 'white',
    margin: 1,
    padding: 7,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,

  },
  deviceText: {
    fontSize: 15,
    ...IRANSans_Medium,
  },
});

QrCodeComponent.propTypes = {
  verifiedDeviceInfo: PropTypes.object.isRequired,
  goBack: PropTypes.func.isRequired,
};

export default injectIntl(QrCodeComponent);