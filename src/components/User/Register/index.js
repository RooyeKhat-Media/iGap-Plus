import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import Picker from '../../BaseUI/Picker/index';
import {Button, DialogModal, MCIcon, TextInput} from '../../BaseUI/index';
import styleSheet from './index.styles';
import {FormattedMessage, injectIntl, intlShape} from 'react-intl';
import i18n from '../../../i18n/index';
import Form from '../../BaseUI/Form/index';
import TextInputField from '../../BaseUI/Form/fields/TextInputField';
import * as _ from 'lodash';
import DimensionLimiter from '../../BaseUI/DimensionLimiter/index';
import {NORMAL_HEIGHT, NORMAL_WIDTH} from '../../../constants/screenBreakPoints';
import {MemoizeResponsiveStyleSheet, responsive} from '../../../modules/Responsive';
import LinerLog from '../../../assets/images/linerLogo';

const uniqueId = _.uniqueId();

class UserRegisterComponent extends React.Component {
  get styles() {
    return MemoizeResponsiveStyleSheet(styleSheet);
  }

  render() {
    const {
      intl, countryList, formRules, formData, handleFormData,
      onChangeCallingCode, onSelectCountry, phoneNumberError,
      selectNewLocale, localesList, defaultLocale,
    } = this.props;
    const {styles} = this;

    return (

      <DimensionLimiter id={uniqueId} width={NORMAL_WIDTH} height={NORMAL_HEIGHT} layoutStyle={styles.layout}>
        <View style={styles.wrapper}>

          <View style={styles.topWrap}>

            <View style={styles.changeLanguageWrap}>
              <Picker headerTitle={<FormattedMessage {...i18n.registerChangeLanguagePlaceholder} />}
                style={styles.changeLanguagePicker}
                defaultValue={defaultLocale}
                options={localesList} onItemSelect={selectNewLocale}
                placeHolder={<FormattedMessage {...i18n.registerChangeLanguagePlaceholder} />}/>
            </View>

            <View style={styles.headerWrapper}>
              <View style={styles.svgWrap}>
                <LinerLog style={styles.svg}/>
              </View>
              <View style={styles.logoWrap}>
                <Text style={styles.headerTitle}>
                  <FormattedMessage {...i18n.iGap}/>
                </Text>
                <View style={styles.plusWrap}>
                  <Text style={styles.plusTitle}>+</Text>
                </View>
              </View>
            </View>

            <DialogModal control={(dialog) => {
              this.dialog = dialog;
            }}
            title={<FormattedMessage {...i18n.registerInfoTitle} />}
            content={<FormattedMessage {...i18n.registerInfoContent} />}/>

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
                  defaultError={phoneNumberError}
                  style={styles.phoneNumberInput}
                  keyboardType="phone-pad"
                  placeholder={intl.formatMessage(i18n.registerPhoneNumberPlaceHolder)}
                  help={intl.formatMessage(i18n.registerPhoneNumberHelp)}
                />

              </View>
            </View>

            <View>
              <Button raised primary text={intl.formatMessage(i18n.registerSubmitBtnTitle)} onPress={async () => {
                try {
                  this.form.loadingOn();
                  const data = await this.form.submit();
                  await handleFormData(data, this.form.setError);
                } finally {
                  this.form.loadingOff();
                }
              }} upperCase={false} style={styles.btnSubmit}/>
              <Button upperCase={false} style={styles.privacyBtn}
                text={intl.formatMessage(i18n.registerPrivacyBtnTitle)}
                icon={<MCIcon color="#7d7d7d" name="alert-decagram" size={14}/>}/>
            </View>

            <View style={styles.divider}>
              <View style={styles.dividerLine}/>
              <Text style={styles.dividerTitle}>
                <FormattedMessage {...i18n.registerLoginDivider}/>
              </Text>
              <View style={styles.dividerLine}/>
            </View>

            <Button upperCase={false} style={styles.qrLoginBtn}
              text={intl.formatMessage(i18n.registerQrCodeLoginBtn)}
              icon={<MCIcon color="#3298ee" name="qrcode-scan" size={14}/>}/>

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
  phoneNumberError: PropTypes.string,
};
export default injectIntl(responsive(UserRegisterComponent));