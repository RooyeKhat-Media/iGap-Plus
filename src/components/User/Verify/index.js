import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DimensionLimiter from '../../BaseUI/DimensionLimiter/index';
import {Button} from '../../BaseUI/index';
import {Text, View} from 'react-native';
import styleSheet from './index.styles';
import {uniqueId} from 'lodash';
import {NORMAL_HEIGHT, NORMAL_WIDTH} from '../../../constants/screenBreakPoints';
import i18n from '../../../i18n/index';
import {FormattedMessage, injectIntl, intlShape} from 'react-intl';
import Form from '../../BaseUI/Form/index';
import TextInputField from '../../BaseUI/Form/fields/TextInputField';
import {MemoizeResponsiveStyleSheet, responsive} from '../../../modules/Responsive';
import ConnectionStatus from '../../../containers/Unit/ConnectionStatus';


const _uniqueId = uniqueId();

class UserVerifyComponent extends Component {

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  componentWillReceiveProps(nextProps) {
    const {handleFormData, defaultValue} = this.props;
    if (nextProps.defaultValue !== defaultValue) {
      if (nextProps.defaultValue.length > 0 && this.form) {
        handleFormData(nextProps.defaultValue, this.form.setError);
      }
    }
  }

  render() {
    const {intl, resendDelay, phoneNumber, method, formRules, handleFormData, resendCode, defaultValue} = this.props;
    const styles = this.getStyles();

    return (
      <DimensionLimiter id={_uniqueId} width={NORMAL_WIDTH} height={NORMAL_HEIGHT} layoutStyle={styles.layout}
        wrapperStyle={styles.wrapper}>
        <ConnectionStatus showAuthenticating={false}/>

        <Form style={styles.panel} control={(form) => {
          this.form = form;
        }}>

          <View style={styles.verifyTitleWrap}>

            <Text style={styles.verifyTitle}>
              <FormattedMessage {...i18n.verifyTitle}/>
            </Text>
            <Text style={styles.verifySubTitle}>
              <FormattedMessage {...i18n.verifySubTitle} values={{method: method, phoneNumber: phoneNumber}}/>
            </Text>

            <View style={styles.codeRow}>
              <TextInputField
                isField={true}
                rules={formRules.code}
                name="verifyCode"
                defaultValue={defaultValue.length > 0 ? defaultValue : ''}
                keyboardType="numeric"
                underlineColorAndroid="#eee"
                label={intl.formatMessage(i18n.verifyCodeTitle)}
                placeholder={intl.formatMessage(i18n.verifyCodePlaceholder)}
              />
            </View>

            <View style={styles.resendWrap}>
              {resendDelay ? (<Text style={styles.resendTxt}><FormattedMessage {...i18n.verifyResendCodeTimer}
                values={{time: resendDelay}}/></Text>) : null}
              <Button accent={false} raised primary text={intl.formatMessage(i18n.verifyCodeBtnTitle)}
                onPress={async () => {
                  try {
                    this.form.loadingOn();
                    const data = await this.form.submit();
                    await handleFormData(data.verifyCode, this.form.setError);
                  } finally {
                    this.form.loadingOff();
                  }
                }} style={styles.verifyBtn}/>
              {!resendDelay ?
                (<Button upperCase={false} primary style={styles.resendBtn} onPress={() => {
                  resendCode(this.form.setError);
                }} text={intl.formatMessage(i18n.verifyResendCodeBtnTitle)}/>) : null}
            </View>

          </View>
        </Form>

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
};
export default injectIntl(responsive(UserVerifyComponent));