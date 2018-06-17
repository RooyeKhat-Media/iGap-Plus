import React from 'react';
import PropTypes from 'prop-types';
import {Platform, Text, View} from 'react-native';
import Picker from '../../BaseUI/Picker/index';
import {Button, MCIcon, TextInput} from '../../BaseUI/index';
import styleSheet from './index.styles';
import {FormattedMessage, injectIntl, intlShape} from 'react-intl';
import i18n from '../../../i18n/index';
import Form from '../../BaseUI/Form/index';
import TextInputField from '../../BaseUI/Form/fields/TextInputField';
import {uniqueId} from 'lodash';
import DimensionLimiter from '../../BaseUI/DimensionLimiter/index';
import {NORMAL_HEIGHT, NORMAL_WIDTH} from '../../../constants/screenBreakPoints';
import {MemoizeResponsiveStyleSheet, responsive} from '../../../modules/Responsive';
import LinerLogo from '../../../assets/images/linerLogo';
import ConnectionStatus from '../../../containers/Unit/ConnectionStatus';
import Linking from '../../../modules/Linking/index';
import {appTheme} from '../../../themes/default/index';

const _uniqueId = uniqueId();

class UserRegisterComponent extends React.Component {

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  render() {
    const styles = this.getStyles();
    const {
      intl, countryList, formRules, formData, handleFormData, onChangeCallingCode, onSelectCountry, goPrivacyPolicy, selectNewLocale, localesList, goUserQrCodeLoginScreen,
    } = this.props;

    const OS = Platform.OS;

    return (
      <DimensionLimiter id={_uniqueId} width={NORMAL_WIDTH} height={NORMAL_HEIGHT} wrapperStyle={styles.wrapper}>
        <View style={styles.layout}>
          <ConnectionStatus showAuthenticating={false}/>

          <View style={styles.topWrap}>

            <View style={styles.changeLanguageWrap}>
              <Picker headerTitle={<FormattedMessage {...i18n.registerChangeLanguagePlaceholder} />}
                style={styles.changeLanguagePicker}
                options={localesList} onItemSelect={selectNewLocale}
                placeHolder={<FormattedMessage {...i18n.registerChangeLanguagePlaceholder} />}/>
            </View>

            <View style={styles.headerWrapper}>
              <View style={styles.svgWrap}>
                <LinerLogo style={styles.svg}/>
              </View>

              {(OS === 'android' || OS === 'ios') ?
                (<View style={styles.logoWrap}>
                  <Text style={styles.headerTitle}>
                    {intl.formatMessage(i18n.iGap)}
                  </Text>
                  <MCIcon name={'plus-box'} size={25} color={appTheme.primaryText}/>
                </View>) : null}

            </View>

          </View>

          <Form style={styles.formWrap} control={(form) => {
            this.form = form;
          }}>

            <View style={styles.formGroup}>
              <Picker searchable={true}
                defaultValue={formData.countryCode}
                options={countryList} onItemSelect={onSelectCountry}
                placeHolder={(<FormattedMessage {...i18n.registerCountryPlaceHolder} />)}/>
            </View>

            <View style={styles.formGroup}>
              <View style={styles.phoneNumberRow}>

                <TextInput
                  keyboardType="phone-pad"
                  style={styles.countryCodeInput}
                  defaultValue={formData.callingCode}
                  onChangeText={onChangeCallingCode}
                />

                <TextInputField
                  isField={true}
                  rules={formRules.phoneNumber}
                  name="phoneNumber"
                  label={intl.formatMessage(i18n.registerPhoneNumberTitle)}
                  defaultValue={formData.phoneNumber}
                  style={styles.phoneNumberInput}
                  keyboardType="phone-pad"
                  placeholder={intl.formatMessage(i18n.registerPhoneNumberPlaceHolder)}
                  help={intl.formatMessage(i18n.registerPhoneNumberHelp)}
                />

              </View>
            </View>

            <View>
              <Button raised primary text={intl.formatMessage(i18n.registerSubmitBtnTitle)}
                onPress={async () => {
                  try {
                    this.form.loadingOn();
                    const data = await this.form.submit();
                    await handleFormData(data, this.form.setError);
                  } finally {
                    this.form.loadingOff();
                  }
                }} upperCase={false} style={styles.btnSubmit}/>
              <View style={styles.privacy}>
                <Button upperCase={false}
                  style={styles.privacyBtn}
                  onPress={goPrivacyPolicy}
                  text={intl.formatMessage(i18n.registerTermsOfService)}
                  icon={<MCIcon color="#7d7d7d" name="alert-decagram" size={14}/>}/>
                <Button upperCase={false}
                  style={styles.privacyBtn}
                  onPress={() => Linking.openURL('https://www.igap.net/privacy.html')}
                  text={intl.formatMessage(i18n.registerPrivacyBtnTitle)}
                  icon={<MCIcon color="#7d7d7d" name="information-outline" size={14}/>}/>
              </View>
            </View>

            <View style={styles.divider}>
              <View style={styles.dividerLine}/>
              <Text style={styles.dividerTitle}>
                <FormattedMessage {...i18n.registerLoginDivider}/>
              </Text>
              <View style={styles.dividerLine}/>
            </View>

            <Button upperCase={false} primary style={styles.qrLoginBtn} onPress={goUserQrCodeLoginScreen}
              text={intl.formatMessage(i18n.registerQrCodeLoginBtn)}
              icon={<MCIcon color={appTheme.primary} name="qrcode-scan" size={14}/>}/>

          </Form>
        </View>
      </DimensionLimiter>
    );
  }
}

UserRegisterComponent.propTypes = {
  intl: intlShape.isRequired,
  countryList: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    element: PropTypes.element.isRequired,
    filter: PropTypes.string.isRequired,
  })).isRequired,
  formData: PropTypes.shape({
    phoneNumber: PropTypes.string,
    callingCode: PropTypes.string,
    countryCode: PropTypes.string,
  }),
  handleFormData: PropTypes.func.isRequired,
  onSelectCountry: PropTypes.func.isRequired,
  onChangeCallingCode: PropTypes.func.isRequired,
  goPrivacyPolicy: PropTypes.func.isRequired,
};
export default injectIntl(responsive(UserRegisterComponent));