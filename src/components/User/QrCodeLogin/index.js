import React from 'react';
import * as _ from 'lodash';
import PropTypes from 'prop-types';
import {Image, View, Text} from 'react-native';
import {FormattedMessage, injectIntl, intlShape} from 'react-intl';
import {Button} from '../../BaseUI/index';
import DimensionLimiter from '../../BaseUI/DimensionLimiter/index';
import {NORMAL_HEIGHT, NORMAL_WIDTH} from '../../../constants/screenBreakPoints';
import {responsive} from '../../../modules/Responsive';
import styles from './index.styles';
import i18n from '../../../i18n/index';
import {goUserRegisterScreen} from '../../../navigators/AppNavigator';
const uniqueId = _.uniqueId();

class UserQrCodeLoginComponent extends React.Component {
  render() {
    const {intl, qrCodeImage} = this.props;
    return (
      <DimensionLimiter id={uniqueId} width={NORMAL_WIDTH} height={NORMAL_HEIGHT} layoutStyle={styles.layout}>
        <View style={styles.wrapper}>
          <View style={styles.wrapper}>
            <Image
              style={styles.image}
              source={{uri: qrCodeImage}}
            />
            <Text>
              <FormattedMessage {...i18n.QrCodeLoginHelp} />
            </Text>
          </View>
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