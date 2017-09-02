import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import Picker from '../../BaseUI/Picker/index';
import {Button, DialogModal, TextInput, Toolbar} from '../../BaseUI/index';
import styles from './index.styles';
import {FormattedMessage, injectIntl, intlShape} from 'react-intl';
import i18n from '../../../i18n/index';
import Form from '../../BaseUI/Form/index';
import TextInputField from '../../BaseUI/Form/fields/TextInputField';
import * as _ from 'lodash';
import DimensionLimiter from '../../BaseUI/DimensionLimiter/index';
import {NORMAL_HEIGHT, NORMAL_WIDTH} from '../../../constants/screenBreakPoints';

const uniqueId = _.uniqueId();

class UserRegisterComponent extends React.Component {
  render() {
    const {intl, countryList, formRules, formData, handleFormData, onChangeCallingCode, onSelectCountry, phoneNumberError} = this.props;

    return (
      <DimensionLimiter id={uniqueId} width={NORMAL_WIDTH} height={NORMAL_HEIGHT} layoutStyle={styles.layout}>
        <View>

          <Toolbar
            rightElement="info"
            onRightElementPress={() => {
              this.dialog.open();
            }}
            centerElement={intl.formatMessage(i18n.registerToolbarTitle)}/>

          <DialogModal control={(dialog) => {
            this.dialog = dialog;
          }}
          title={<FormattedMessage {...i18n.registerInfoTitle} />}
          content={<FormattedMessage {...i18n.registerInfoContent} />}/>

          <Form style={styles.panel} control={(form) => {
            this.form = form;
          }}>
            <View style={styles.formGroup}>
              <Picker
                defaultValue={formData.countryCode}
                options={countryList} onItemSelect={onSelectCountry}
                placeHolder={(<FormattedMessage {...i18n.registerCountryPlaceHolder} />)}/>
            </View>
            <View style={styles.formGroup}>
              <View style={styles.phoneNumberRow}>

                <TextInput
                  underlineColorAndroid="#eee"
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
                  underlineColorAndroid="#eee"
                  placeholder={intl.formatMessage(i18n.registerPhoneNumberPlaceHolder)}
                  help={intl.formatMessage(i18n.registerPhoneNumberHelp)}
                />

              </View>
            </View>

            <View style={styles.formGroup}>
              <Button raised primary text={intl.formatMessage(i18n.registerSubmitBtnTitle)} onPress={async () => {
                try {
                  this.form.loadingOn();
                  const data = await this.form.submit();
                  await handleFormData(data);
                } finally {
                  this.form.loadingOff();
                }
              }}/>
            </View>
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
export default injectIntl(UserRegisterComponent);