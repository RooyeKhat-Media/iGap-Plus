import React, {Component} from 'react';
import DimensionLimiter from '../../../BaseUI/DimensionLimiter/index';
import {Button, DialogModal, Toolbar} from '../../../BaseUI/index';
import styles from './index.styles';
import * as _ from 'lodash';
import {NORMAL_HEIGHT, NORMAL_WIDTH} from '../../../../constants/screenBreakPoints';
import i18n from '../../../../i18n/index';
import {FormattedMessage, injectIntl, intlShape} from 'react-intl';
import Form from '../../../BaseUI/Form/index';
import {View} from 'react-native';
import TextInputField from '../../../BaseUI/Form/fields/TextInputField';

const uniqueId = _.uniqueId();

class TwoStepVerificationComponent extends Component {

  render() {
    const {intl, handleFormData, formRules, hint, passwordError, forgetPassword} = this.props;

    return (
      <DimensionLimiter id={uniqueId} width={NORMAL_WIDTH} height={NORMAL_HEIGHT} layoutStyle={styles.layout}>
        <Toolbar
          rightElement="info"
          onRightElementPress={() => {
            this.dialog.open();
          }}
          centerElement={intl.formatMessage(i18n.twoStepVerificationTitle)}/>

        <Form style={styles.panel} control={(form) => {
          this.form = form;
        }}>

          <View style={styles.TWStepTitleWrap}>
            <View style={styles.inputRow}>
              <TextInputField
                isField={true}
                rules={formRules.password}
                name="password"
                underlineColorAndroid="#eee"
                defaultValue=""
                defaultError={passwordError}
                secureTextEntry={true}
                label={intl.formatMessage(i18n.twoStepVerificationPasswordLabel)}
                placeholder={intl.formatMessage(i18n.twoStepVerificationPasswordLabel)}
                help={intl.formatMessage(i18n.twoStepVerificationHintTitle, {hint: hint})}
              />
            </View>

            <View style={styles.btnWrap}>
              <Button upperCase={false} accent={false} primary style={styles.forgetBtnColor} onPress={forgetPassword}
                text={intl.formatMessage(i18n.twoStepVerificationForgetBtnTitle)}/>
              <Button accent={false} raised primary text={intl.formatMessage(i18n.twoStepVerificationBtnTitle)}
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
        title={<FormattedMessage {...i18n.twoStepVerificationInfoTitle} />}
        content={<FormattedMessage {...i18n.twoStepVerificationInfoContent} />}/>

      </DimensionLimiter>

    );
  }
}

TwoStepVerificationComponent.propTypes = {
  intl: intlShape.isRequired,
};
export default injectIntl(TwoStepVerificationComponent);