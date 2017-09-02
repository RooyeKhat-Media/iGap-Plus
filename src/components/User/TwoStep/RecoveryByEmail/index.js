import * as _ from 'lodash';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, DialogModal, Toolbar} from '../../../BaseUI/index';
import DimensionLimiter from '../../../BaseUI/DimensionLimiter/index';
import {FormattedMessage, injectIntl, intlShape} from 'react-intl';
import styles from './index.styles';
import i18n from '../../../../i18n/index';
import {NORMAL_HEIGHT, NORMAL_WIDTH} from '../../../../constants/screenBreakPoints';
import {View} from 'react-native';
import Form from '../../../BaseUI/Form/index';
import TextInputField from '../../../BaseUI/Form/fields/TextInputField';

const uniqueId = _.uniqueId();

class UserTwoStepRecoveryByEmailComponent extends Component {
  render() {
    const {intl, formRules, resendToken, handleFormData, tokenError, emailPattern, goBack} = this.props;

    return (
      <DimensionLimiter id={uniqueId} width={NORMAL_WIDTH} height={NORMAL_HEIGHT} layoutStyle={styles.layout}>
        <Toolbar
          leftElement="arrow-back"
          onLeftElementPress={goBack}
          rightElement="info"
          onRightElementPress={() => {
            this.dialog.open();
          }}
          centerElement={intl.formatMessage(i18n.twoStepRecoveryByEmailTitle)}/>
        <Form style={styles.panel} control={(form) => {
          this.form = form;
        }}>
          <View style={styles.formGroup}>
            <TextInputField
              isField={true}
              rules={formRules.token}
              name="token"
              label={intl.formatMessage(i18n.twoStepRecoveryByEmailTokenLabel)}
              defaultValue=""
              defaultError={tokenError}
              underlineColorAndroid="#eee"
              placeholder={intl.formatMessage(i18n.twoStepRecoveryByEmailTokenLabel)}
              help={emailPattern ? (
                <FormattedMessage {...i18n.twoStepRecoveryByEmailTokenHelp} values={{email: emailPattern}}/>) : ''}
            />
          </View>

          <View style={styles.btnWrap}>

            <Button upperCase={false} accent={false} primary style={styles.resendBtnColor}
              onPress={
                async () => {
                  try {
                    this.form.loadingOn();
                    await resendToken();
                  } finally {
                    this.form.loadingOff();
                  }
                }}
              text={intl.formatMessage(i18n.twoStepRecoveryByEmailResendBtnTitle)}/>
            <Button raised primary text={intl.formatMessage(i18n.twoStepRecoveryByEmailSubmitFormBtnTitle)}
              onPress={async () => {
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

        <DialogModal control={(dialog) => {
          this.dialog = dialog;
        }}
        title={<FormattedMessage {...i18n.twoStepRecoveryByEmailInfoTitle} />}
        content={<FormattedMessage {...i18n.twoStepRecoveryByEmailInfoContent} />}/>

      </DimensionLimiter>
    );
  }
}

UserTwoStepRecoveryByEmailComponent.propTypes = {
  intl: intlShape.isRequired,
  goBack: PropTypes.func.isRequired,
  handleFormData: PropTypes.func.isRequired,
  resendToken: PropTypes.func.isRequired,
  tokenError: PropTypes.string,
  emailPattern: PropTypes.string,
};
export default injectIntl(UserTwoStepRecoveryByEmailComponent);