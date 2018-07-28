import React from 'react';
import {View} from 'react-native';
import {injectIntl, intlShape} from 'react-intl';
import styleSheet from './index.styles';
import {Avatar, TextInput, Toolbar} from '../../BaseUI';
import i18n from '../../../i18n/index';
import Form from '../../BaseUI/Form/index';
import TextInputField from '../../BaseUI/Form/fields/TextInputField';
import Picker from '../../BaseUI/Picker/index';
import {MemoizeResponsiveStyleSheet} from '../../../modules/Responsive';
import {arrowBackIcon} from '../../BaseUI/Utile/index';

class ContactFormComponent extends React.Component {

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  render() {
    const {
      intl, formData, handleFormData, formRules, goBack, countryList, onChangeCallingCode, onSelectCountry,
      editMode, firstName, lastName, phone,
    } = this.props;
    const styles = this.getStyles();
    return (
      <View style={styles.root}>
        <Toolbar
          leftElement={arrowBackIcon(goBack)}
          rightElement="check"
          onRightElementPress={async () => {
            try {
              this.form.loadingOn();
              const data = await this.form.submit();
              await handleFormData(data, this.form.setError);
            } finally {
              this.form.loadingOff();
            }
          }}
          centerElement={intl.formatMessage(i18n.contactFormTitleToolbar)}
        />
        <View style={styles.container}>

          <Form style={styles.form} control={(form) => {
            this.form = form;
          }}>

            <View style={styles.row}>
              <View style={styles.avatarWrap}>
                <Avatar text="N" size={60} style={styles.avatar}/>
              </View>
              <View style={styles.infoWrap}>
                <TextInputField
                  isField={true}
                  rules={formRules.firstName}
                  name="firstName"
                  defaultValue={firstName}
                  label={intl.formatMessage(i18n.contactFormFirstNameLabel)}
                  placeholder={intl.formatMessage(i18n.contactFormFirstNameLabel)}
                />
                <TextInputField
                  isField={true}
                  rules={formRules.lastName}
                  name="lastName"
                  defaultValue={lastName}
                  label={intl.formatMessage(i18n.contactFormLastNameLabel)}
                  placeholder={intl.formatMessage(i18n.contactFormLastNameLabel)}
                />
              </View>
            </View>

            {editMode &&
            (<View style={styles.phoneWrap}>
              <TextInputField
                isField={true}
                rules={formRules.phone}
                name="phone"
                editable={false}
                defaultValue={phone}
                label={intl.formatMessage(i18n.contactFormPhoneLabel)}
                style={styles.phoneNumberInput}
                keyboardType="phone-pad"
                placeholder={intl.formatMessage(i18n.contactFormPhoneLabel)}
                help={intl.formatMessage(i18n.contactFormPhoneHelp)}
              />
            </View>)}
            {(!editMode) &&
            (<View style={styles.phoneWrap}>
              <Picker searchable={true}
                defaultValue={formData.countryCode}
                options={countryList} onItemSelect={onSelectCountry}
                placeHolder="Country .."/>
              <View style={styles.phoneNumberRow}>
                <TextInput
                  keyboardType="phone-pad"
                  style={styles.countryCodeInput}
                  onChangeText={onChangeCallingCode}
                  defaultValue={formData.callingCode}
                />
                <TextInputField
                  isField={true}
                  rules={formRules.phone}
                  name="phone"
                  label={intl.formatMessage(i18n.contactFormPhoneLabel)}
                  style={styles.phoneNumberInput}
                  keyboardType="phone-pad"
                  placeholder={intl.formatMessage(i18n.contactFormPhoneLabel)}
                  help={intl.formatMessage(i18n.contactFormPhoneHelp)}
                />
              </View>
            </View>)}


          </Form>

        </View>
      </View>
    );
  }
}

ContactFormComponent.propTypes = {
  intl: intlShape.isRequired,
};
export default injectIntl(ContactFormComponent);