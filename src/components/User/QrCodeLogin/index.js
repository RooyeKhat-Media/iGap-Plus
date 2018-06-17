import React from 'react';
import {uniqueId} from 'lodash';
import PropTypes from 'prop-types';
import {Image, Text, View} from 'react-native';
import {FormattedMessage, injectIntl, intlShape} from 'react-intl';
import {Button} from '../../BaseUI/index';
import DimensionLimiter from '../../BaseUI/DimensionLimiter/index';
import {NORMAL_HEIGHT, NORMAL_WIDTH} from '../../../constants/screenBreakPoints';
import {MemoizeResponsiveStyleSheet, responsive} from '../../../modules/Responsive';
import styleSheet from './index.styles';
import i18n from '../../../i18n/index';
import {goUserRegisterScreen} from '../../../navigators/AppNavigator';

const _uniqueId = uniqueId();

class UserQrCodeLoginComponent extends React.Component {
  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  render() {
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
  }
}

UserQrCodeLoginComponent.propTypes = {
  intl: intlShape.isRequired,
  qrCodeImage: PropTypes.string,
};
export default injectIntl(responsive(UserQrCodeLoginComponent));