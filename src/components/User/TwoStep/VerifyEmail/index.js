import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {Button, Form, TextInputField, Toolbar} from '../../../BaseUI/index';
import {FormattedMessage, injectIntl, intlShape} from 'react-intl';
import i18n from '../../../../i18n/index';
import styleSheet from './index.styles';
import {MemoizeResponsiveStyleSheet} from '../../../../modules/Responsive';
import {arrowBackIcon} from '../../../BaseUI/Utile/index';

class UserTwoStepVerifyEmailComponent extends Component {
  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  render() {
    const {intl, formRules, resendEmail, onSubmit, passwordDetail, goBack} = this.props;
    const styles = this.getStyles();
    return (
      <View style={styles.root}>
        <Toolbar
          leftElement={arrowBackIcon(goBack)}
          centerElement={intl.formatMessage(i18n.twoStepVerifyEmailTitle)}
          rightElement="check"
          onRightElementPress={async () => {
            const data = await this.form.submit();
            this.form.loadingOn();
            await onSubmit(data, this.form.setError);
            this.form.loadingOff();
          }}
        />
        <Form style={styles.body} control={(form) => {
          this.form = form;
        }}>

          <View style={styles.inputRow}>
            <Text
              style={styles.inputTitle}><FormattedMessage {...i18n.twoStepSetPasswordVerifyEmailTokenLabel} /></Text>
            <TextInputField
              isField={true}
              rules={formRules.token}
              name="token"
              label={intl.formatMessage(i18n.twoStepSetPasswordVerifyEmailTokenLabel)}
              placeholder={passwordDetail.unconfirmed_email_pattern || intl.formatMessage(i18n.twoStepSetPasswordVerifyEmailTokenLabel)}
            />
            <View style={styles.resendWrper}>
              <Button
                primary
                style={styles.resendBtn}
                onPress={async () => {
                  this.form.loadingOn();
                  await resendEmail();
                  this.form.loadingOff();
                }} text={intl.formatMessage(i18n.twoStepSetPasswordVerifyEmailRecentCode)}/>
            </View>
          </View>

        </Form>
      </View>
    );
  }
}

UserTwoStepVerifyEmailComponent.propTypes = {
  intl: intlShape.isRequired,
  formRules: PropTypes.object.isRequired,
  passwordDetail: PropTypes.object.isRequired,
  resendEmail: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
};
export default injectIntl(UserTwoStepVerifyEmailComponent);