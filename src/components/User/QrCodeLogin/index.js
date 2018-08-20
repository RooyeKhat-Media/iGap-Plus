import React from 'react';
import {uniqueId} from 'lodash';
import PropTypes from 'prop-types';
import {Image, Text, View} from 'react-native';
import {FormattedMessage, injectIntl, intlShape} from 'react-intl';
import {Button, PopupMenu, Toolbar} from '../../BaseUI/index';
import DimensionLimiter from '../../BaseUI/DimensionLimiter/index';
import {NORMAL_HEIGHT, NORMAL_WIDTH} from '../../../constants/screenBreakPoints';
import {MemoizeResponsiveStyleSheet, responsive} from '../../../modules/Responsive';
import styleSheet from './index.styles';
import i18n from '../../../i18n/index';
import {goUserRegisterScreen} from '../../../navigators/AppNavigator';
import {qrMode} from '../../../screens/User/UserQrCodeLoginScreen';
import {arrowBackIcon} from '../../BaseUI/Utile/index';
import {APP_MODAL_ID_PRIMARY} from '../../../constants/app';
import Share from '../../../modules/Share/index';

const _uniqueId = uniqueId();

class UserQrCodeLoginComponent extends React.Component {
  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  render() {
    const {qrCodeMode} = this.props;
    switch (qrCodeMode) {
      case qrMode.LOGIN:
        return this.renderLoginMode();
      case qrMode.JOIN:
      case qrMode.RESOLVE:
        return this.renderJoinResolve();
    }
  }

  renderLoginMode = () => {
    const {intl, qrCodeImage} = this.props;
    const styles = this.getStyles();
    return (
      <DimensionLimiter id={_uniqueId} width={NORMAL_WIDTH} height={NORMAL_HEIGHT} layoutStyle={styles.layout}>
        <View style={styles.wrapper}>
          <View style={styles.imageWrapper}>
            <Image
              style={styles.image}
              source={{uri: qrCodeImage ? qrCodeImage : undefined}}
            />
          </View>
          <Text style={styles.loginText}>
            <FormattedMessage {...i18n.QrCodeLoginHelp} />
          </Text>
          <Button
            primary
            upperCase={false}
            style={styles.qrLoginBtn}
            onPress={goUserRegisterScreen}
            text={intl.formatMessage(i18n.QrCodeLoginGoLoginScreenBtn)}/>
        </View>
      </DimensionLimiter>
    );
  };

  renderJoinResolve = () => {
    const {intl, qrCodeImage, goBack, saveToFolder} = this.props;
    const styles = this.getStyles();
    return (
      <View>
        <Toolbar
          leftElement={arrowBackIcon(goBack)}
          rightElement={(<PopupMenu actionList={[
            intl.formatMessage(i18n.avatarListShare), intl.formatMessage(i18n.avatarListSaveToGallery),
          ]} type={APP_MODAL_ID_PRIMARY} onPress={(index) => {
            switch (index) {
              case 0:
                if (qrCodeImage) {
                  Share.open(qrCodeImage, qrCodeImage.split(';')[0].replace('data:', ''));
                }
                break;
              case 1:
                saveToFolder();
                break;
            }
          }}/>)}
        />
        {
          qrCodeImage && <View style={styles.imageWrapper}>
            <Image
              style={styles.image}
              source={{uri: qrCodeImage}}
            />
            <Text style={styles.loginText}>
              <FormattedMessage {...i18n.QrCodeLoginHelpJoin} />
            </Text>
          </View>
        }
      </View>

    );
  };
}

UserQrCodeLoginComponent.propTypes = {
  intl: intlShape.isRequired,
  qrCodeImage: PropTypes.string,
  qrCodeMode: PropTypes.string,
  goBack: PropTypes.func.isRequired,
  saveToFolder: PropTypes.func.isRequired,
};
export default injectIntl(responsive(UserQrCodeLoginComponent));