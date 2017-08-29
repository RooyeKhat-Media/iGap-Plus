import React from 'react';
import {TextInput, View} from 'react-native';
import Picker from '../../BaseUI/Picker/index';
import {Button, DialogModal, Spinner, Toolbar} from '../../BaseUI/index';
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
    const {intl, countryList, formRules, formData, submitForm, onChangeCallingCode, onSelectCountry} = this.props;

    return (
      <DimensionLimiter id={uniqueId} width={NORMAL_WIDTH} height={NORMAL_HEIGHT} layoutStyle={styles.layout}>
        <View>

          <Toolbar
            leftElement="info"
            onLeftElementPress={() => {
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
                  style={styles.phoneNumberInput}
                  keyboardType="phone-pad"
                  underlineColorAndroid="#eee"
                  placeholder={intl.formatMessage(i18n.registerPhoneNumberPlaceHolder)}
                  help={intl.formatMessage(i18n.registerPhoneNumberHelp)}
                />

              </View>
            </View>

            <Spinner control={(loading) => {
              this.loading = loading;
            }}/>

            <View style={styles.formGroup}>
              <Button raised primary text="Next" onPress={() => {
                this.form.submit()
                  .then((data) => {
                    this.loading.on();
                    submitForm(data).then(() => {
                      this.loading.off();
                    });
                  });
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
};
export default injectIntl(UserRegisterComponent);