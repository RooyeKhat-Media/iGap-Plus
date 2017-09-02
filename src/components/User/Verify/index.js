import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DimensionLimiter from '../../BaseUI/DimensionLimiter/index';
import {Button, DialogModal, Toolbar} from '../../BaseUI/index';
import {Text, View} from 'react-native';
import styles from './index.styles';
import * as _ from 'lodash';
import {NORMAL_HEIGHT, NORMAL_WIDTH} from '../../../constants/screenBreakPoints';
import i18n from '../../../i18n/index';
import {FormattedMessage, injectIntl, intlShape} from 'react-intl';
import Form from '../../BaseUI/Form/index';
import TextInputField from '../../BaseUI/Form/fields/TextInputField';

const uniqueId = _.uniqueId();

class UserVerifyComponent extends Component {

  render() {
    const {intl, resendDelay, codeError, phoneNumber, method, formRules, handleFormData, resendCode} = this.props;

    return (
      <DimensionLimiter id={uniqueId} width={NORMAL_WIDTH} height={NORMAL_HEIGHT} layoutStyle={styles.layout}>
        <Toolbar
          rightElement="info"
          onRightElementPress={() => {
            this.dialog.open();
          }}
          centerElement={intl.formatMessage(i18n.verifyToolbarTitle)}/>

        <Form style={styles.panel} control={(form) => {
          this.form = form;
        }}>

          <View style={styles.TWStepTitleWrap}>

            <Text style={styles.verifyTitle}>
              <FormattedMessage {...i18n.verifyTitle} values={{method: method, phoneNumber: phoneNumber}}/>
            </Text>

            <View style={styles.codeRow}>
              <TextInputField
                isField={true}
                rules={formRules.code}
                name="verifyCode"
                defaultValue=""
                defaultError={codeError}
                keyboardType="numeric"
                underlineColorAndroid="#eee"
                label={intl.formatMessage(i18n.verifyCodeTitle)}
                placeholder={intl.formatMessage(i18n.verifyCodePlaceholder)}
              />
            </View>

            <View style={styles.resendWrap}>
              {resendDelay ? (<Text style={styles.resendTxt}><FormattedMessage {...i18n.verifyResendCodeTimer}
                values={{time: resendDelay}}/></Text>) :
                (<Button accent={false} primary style={styles.resendBtnColor} onPress={() => {
                  resendCode();
                }}
                text={intl.formatMessage(i18n.verifyResendCodeBtnTitle)}/>)}
              <Button accent={false} raised primary text={intl.formatMessage(i18n.verifyCodeBtnTitle)}
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

          </View>
        </Form>

        <DialogModal control={(dialog) => {
          this.dialog = dialog;
        }}
        title={<FormattedMessage {...i18n.verifyInfoTitle} />}
        content={<FormattedMessage {...i18n.verifyInfoContent} />}/>

      </DimensionLimiter>

    );
  }
}

UserVerifyComponent.propTypes = {
  intl: intlShape.isRequired,
  handleFormData: PropTypes.func.isRequired,
  resendCode: PropTypes.func.isRequired,
  resendDelay: PropTypes.number.isRequired,
  method: PropTypes.number.isRequired,
  codeError: PropTypes.string,
};
export default injectIntl(UserVerifyComponent);